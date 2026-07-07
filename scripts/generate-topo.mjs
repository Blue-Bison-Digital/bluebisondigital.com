/**
 * generate-topo.mjs
 *
 * Generates the Blue Bison Digital topographic texture assets.
 *
 * Technique (per PLAN.md section 4.1): marching-squares contours over a
 * smoothed 2D scalar field. The field is a sum of a few gaussian "peaks" plus
 * fractal value-noise perturbation, which yields CLOSED, IRREGULAR, NESTED
 * loops that read as elevation rings around two or three summits — never
 * parallel waves, never a grid. Deterministic (fixed seed) so the output is
 * cacheable and reproducible.
 *
 * Hand-curation is applied programmatically: contours below a minimum length
 * are dropped (kills clutter/speckle) and index contours (every 5th level) are
 * emitted heavier. The texture ships FLAT and even edge-to-edge; any fade
 * toward text is a layout concern, applied later via CSS on a container that
 * sits above the texture, not baked into the asset.
 *
 *   node scripts/generate-topo.mjs
 *
 * Outputs: public/topo-a.svg (hero), public/topo-b.svg (CTA band).
 */

import { writeFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const publicDir = join(__dirname, "..", "public");

const BLUE = "#89B6FD";
const NAVY = "#131D41";

// ---------------------------------------------------------------------------
// Deterministic noise
// ---------------------------------------------------------------------------

function mulberry32(seed) {
  return function () {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function smoothstep(t) {
  return t * t * (3 - 2 * t);
}

/** Value-noise field built on a lattice, seeded. Returns fn(x, y) in ~[-1,1]. */
function makeValueNoise(seed, lattice = 8) {
  const rand = mulberry32(seed);
  const grid = [];
  for (let j = 0; j <= lattice; j++) {
    const row = [];
    for (let i = 0; i <= lattice; i++) row.push(rand() * 2 - 1);
    grid.push(row);
  }
  return function (x, y) {
    // x, y expected in [0,1]
    const gx = Math.min(x, 0.9999999) * lattice;
    const gy = Math.min(y, 0.9999999) * lattice;
    const x0 = Math.floor(gx);
    const y0 = Math.floor(gy);
    const tx = smoothstep(gx - x0);
    const ty = smoothstep(gy - y0);
    const v00 = grid[y0][x0];
    const v10 = grid[y0][x0 + 1];
    const v01 = grid[y0 + 1][x0];
    const v11 = grid[y0 + 1][x0 + 1];
    const a = v00 + (v10 - v00) * tx;
    const b = v01 + (v11 - v01) * tx;
    return a + (b - a) * ty;
  };
}

/** Fractal (multi-octave) value noise. */
function makeFractalNoise(seed, octaves = 4) {
  const layers = [];
  for (let o = 0; o < octaves; o++) {
    layers.push({
      noise: makeValueNoise(seed + o * 101, 4 << o),
      amp: 1 / Math.pow(2, o),
    });
  }
  const totalAmp = layers.reduce((s, l) => s + l.amp, 0);
  return function (x, y) {
    let v = 0;
    for (const l of layers) v += l.noise(x, y) * l.amp;
    return v / totalAmp;
  };
}

// ---------------------------------------------------------------------------
// Field: gaussian peaks + noise perturbation
// ---------------------------------------------------------------------------

function makeField({ peaks, noiseSeed, noiseAmp, aspect }) {
  const fnoise = makeFractalNoise(noiseSeed, 4);
  return function (nx, ny) {
    // Correct distance for the display aspect so peaks read as round-ish.
    let v = 0;
    for (const p of peaks) {
      const dx = (nx - p.x) * aspect;
      const dy = ny - p.y;
      const d2 = dx * dx + dy * dy;
      v += p.a * Math.exp(-d2 / (2 * p.s * p.s));
    }
    // Perturb with fractal noise so rings are irregular, not concentric ovals.
    v += noiseAmp * fnoise(nx * 1.6, ny * 1.6);
    return v;
  };
}

// ---------------------------------------------------------------------------
// Marching squares -> joined polylines
// ---------------------------------------------------------------------------

function contourLevel(values, cols, rows, level, dx, dy) {
  const segs = [];
  const interp = (v1, v2) => (level - v1) / (v2 - v1);
  for (let j = 0; j < rows - 1; j++) {
    for (let i = 0; i < cols - 1; i++) {
      const tl = values[j * cols + i];
      const tr = values[j * cols + i + 1];
      const br = values[(j + 1) * cols + i + 1];
      const bl = values[(j + 1) * cols + i];
      let idx = 0;
      if (tl > level) idx |= 8;
      if (tr > level) idx |= 4;
      if (br > level) idx |= 2;
      if (bl > level) idx |= 1;
      if (idx === 0 || idx === 15) continue;

      const x = i * dx;
      const y = j * dy;
      // Edge crossing points
      const top = () => ({ x: x + dx * interp(tl, tr), y });
      const right = () => ({ x: x + dx, y: y + dy * interp(tr, br) });
      const bottom = () => ({ x: x + dx * interp(bl, br), y: y + dy });
      const left = () => ({ x, y: y + dy * interp(tl, bl) });

      const push = (a, b) => segs.push([a, b]);
      switch (idx) {
        case 1: push(left(), bottom()); break;
        case 2: push(bottom(), right()); break;
        case 3: push(left(), right()); break;
        case 4: push(top(), right()); break;
        case 5: push(left(), top()); push(bottom(), right()); break; // saddle
        case 6: push(top(), bottom()); break;
        case 7: push(left(), top()); break;
        case 8: push(top(), left()); break;
        case 9: push(top(), bottom()); break;
        case 10: push(top(), right()); push(bottom(), left()); break; // saddle
        case 11: push(top(), right()); break;
        case 12: push(right(), left()); break;
        case 13: push(right(), bottom()); break;
        case 14: push(bottom(), left()); break;
      }
    }
  }
  return segs;
}

/** Join raw segments into continuous polylines by matching endpoints. */
function joinSegments(segs, snap) {
  const key = (p) => `${Math.round(p.x / snap)}:${Math.round(p.y / snap)}`;
  const map = new Map();
  const used = new Array(segs.length).fill(false);
  segs.forEach((s, i) => {
    for (const p of s) {
      const k = key(p);
      if (!map.has(k)) map.set(k, []);
      map.get(k).push(i);
    }
  });

  const paths = [];
  for (let start = 0; start < segs.length; start++) {
    if (used[start]) continue;
    used[start] = true;
    const [a, b] = segs[start];
    const line = [a, b];

    // Extend forward from b, then backward from a.
    const extend = (fromEnd) => {
      while (true) {
        const tip = fromEnd ? line[line.length - 1] : line[0];
        const candidates = map.get(key(tip)) || [];
        let next = -1;
        for (const ci of candidates) {
          if (!used[ci]) { next = ci; break; }
        }
        if (next === -1) break;
        used[next] = true;
        const [na, nb] = segs[next];
        const naMatch = key(na) === key(tip);
        const add = naMatch ? nb : na;
        if (fromEnd) line.push(add);
        else line.unshift(add);
      }
    };
    extend(true);
    extend(false);
    paths.push(line);
  }
  return paths;
}

function polyLength(pts) {
  let len = 0;
  for (let i = 1; i < pts.length; i++) {
    const dx = pts[i].x - pts[i - 1].x;
    const dy = pts[i].y - pts[i - 1].y;
    len += Math.hypot(dx, dy);
  }
  return len;
}

function toPathData(pts) {
  const r = (n) => Math.round(n * 10) / 10;
  let d = `M${r(pts[0].x)} ${r(pts[0].y)}`;
  for (let i = 1; i < pts.length; i++) d += `L${r(pts[i].x)} ${r(pts[i].y)}`;
  return d;
}

// ---------------------------------------------------------------------------
// Elevation label placement
//
// Real topo maps break an index contour and drop the elevation into the gap,
// aligned with the line's local direction. We do the same: for each index
// loop long enough to carry a number, pick the most-horizontal point (most
// readable), orient the text along the tangent there, and space labels apart
// so they read as a consistent, sequenced set rather than three random tags.
// ---------------------------------------------------------------------------

function pickAnchor(pts) {
  let best = null;
  let bestScore = Infinity;
  for (let i = 2; i < pts.length - 2; i++) {
    const a = pts[i - 2];
    const b = pts[i + 2];
    const dx = b.x - a.x;
    const dy = b.y - a.y;
    const len = Math.hypot(dx, dy);
    if (len < 1) continue;
    let ang = (Math.atan2(dy, dx) * 180) / Math.PI;
    if (ang > 90) ang -= 180;
    if (ang < -90) ang += 180;
    const score = Math.abs(ang); // prefer horizontal runs for legibility
    if (score < bestScore) {
      bestScore = score;
      best = { x: pts[i].x, y: pts[i].y, angle: ang };
    }
  }
  return best;
}

function placeLabels(loops, { minGap = 190, minLoopLen = 240, maxLabels = 16 } = {}) {
  const r1 = (n) => Math.round(n * 10) / 10;
  // Longest loops first so the biggest, calmest rings get numbered.
  const sorted = [...loops].sort((a, b) => polyLength(b.pts) - polyLength(a.pts));
  const chosen = [];
  for (const loop of sorted) {
    if (chosen.length >= maxLabels) break;
    if (polyLength(loop.pts) < minLoopLen) continue;
    const anchor = pickAnchor(loop.pts);
    if (!anchor) continue;
    const tooClose = chosen.some(
      (c) => Math.hypot(c.x - anchor.x, c.y - anchor.y) < minGap
    );
    if (tooClose) continue;
    chosen.push({
      t: String(loop.elev),
      x: r1(anchor.x),
      y: r1(anchor.y),
      r: Math.round(anchor.angle),
    });
  }
  return chosen;
}

// ---------------------------------------------------------------------------
// Asset builder
// ---------------------------------------------------------------------------

function buildAsset({
  width,
  height,
  peaks,
  noiseSeed,
  noiseAmp,
  levelCount,
  minLen,
  id,
  // Zoom: 1 = full field edge-to-edge (the original framing). >1 magnifies,
  // sampling a smaller window of the same terrain so contour loops read larger.
  // panX/panY drift the crop center as you zoom in (0 at zoom=1, so zoom=1 is
  // byte-for-byte the original framing regardless of pan).
  zoom = 1,
  panX = 0,
  panY = 0,
  // Elevation labels. `label: true` places real, sequenced elevation numbers
  // on the index contours (hero only, per the brief).
  label = false,
  // Line visibility. The texture ships FLAT (no radial fade baked in); any
  // fade toward text is applied later via CSS on a container above it.
  stdOpacity = 0.13,
  indexOpacity = 0.2,
  labelOpacity = 0.55,
}) {
  const aspect = width / height;
  const field = makeField({ peaks, noiseSeed, noiseAmp, aspect });

  // Sample grid ~ every 4px for smooth contours without huge output.
  const cols = Math.round(width / 4);
  const rows = Math.round(height / 4);
  const dx = width / (cols - 1);
  const dy = height / (rows - 1);

  // Remap grid coords into a (possibly zoomed + panned) window of the field.
  const pan = 1 - 1 / zoom; // 0 at zoom=1, approaches 1 as zoom grows
  const sample = (u, w) => {
    const nx = 0.5 + (u - 0.5) / zoom + panX * pan;
    const ny = 0.5 + (w - 0.5) / zoom + panY * pan;
    return field(nx, ny);
  };

  const values = new Float64Array(cols * rows);
  let vmin = Infinity;
  let vmax = -Infinity;
  for (let j = 0; j < rows; j++) {
    for (let i = 0; i < cols; i++) {
      const v = sample(i / (cols - 1), j / (rows - 1));
      values[j * cols + i] = v;
      if (v < vmin) vmin = v;
      if (v > vmax) vmax = v;
    }
  }

  // Evenly spaced interior levels. Each level maps to a real elevation, so the
  // index-contour labels sequence correctly (numbers rise toward the peaks).
  const BASE_ELEV = 1200; // elevation of the lowest contour
  const INTERVAL = 40; // per-contour rise; index lines (every 5th) => 200 apart
  const standardPaths = [];
  const indexPaths = [];
  const indexLoops = []; // { pts, elev } kept for label placement
  const snap = Math.min(dx, dy) * 0.5;
  for (let l = 1; l < levelCount; l++) {
    const level = vmin + ((vmax - vmin) * l) / levelCount;
    const segs = contourLevel(values, cols, rows, level, dx, dy);
    if (!segs.length) continue;
    const joined = joinSegments(segs, snap).filter(
      (p) => p.length > 2 && polyLength(p) >= minLen
    );
    const isIndex = l % 5 === 0;
    for (const pts of joined) {
      if (isIndex) {
        indexPaths.push(toPathData(pts));
        indexLoops.push({ pts, elev: BASE_ELEV + l * INTERVAL });
      } else {
        standardPaths.push(toPathData(pts));
      }
    }
  }

  const labels = label ? placeLabels(indexLoops) : [];
  const labelSvg = labels
    .map(
      (lb) =>
        `<text x="${lb.x}" y="${lb.y}" transform="rotate(${lb.r} ${lb.x} ${lb.y})" ` +
        `font-family="'Space Grotesk', sans-serif" font-weight="700" font-size="11" ` +
        `letter-spacing="0.5" fill="${BLUE}" fill-opacity="${labelOpacity}" ` +
        `stroke="${NAVY}" stroke-width="3.5" paint-order="stroke" ` +
        `text-anchor="middle" dominant-baseline="middle">${lb.t}</text>`
    )
    .join("");

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}" width="${width}" height="${height}" preserveAspectRatio="xMidYMid slice" aria-hidden="true" focusable="false">
  <g fill="none" stroke="${BLUE}" vector-effect="non-scaling-stroke">
    <g stroke-width="1" stroke-opacity="${stdOpacity}">
      ${standardPaths.map((d) => `<path d="${d}"/>`).join("\n      ")}
    </g>
    <g stroke-width="1.5" stroke-opacity="${indexOpacity}">
      ${indexPaths.map((d) => `<path d="${d}"/>`).join("\n      ")}
    </g>
    ${labelSvg}
  </g>
</svg>
`;
}

// ---------------------------------------------------------------------------
// Zoom / output controls (env-driven so preview variants can be rendered
// without touching the committed canonical assets):
//   TOPO_ZOOM=1.4  -> magnify both assets 1.4x
//   TOPO_SUFFIX=-z14 -> write topo-a-z14.svg etc. instead of the canonical name
// ---------------------------------------------------------------------------

const ZOOM = parseFloat(process.env.TOPO_ZOOM || "1.4");
const SUFFIX = process.env.TOPO_SUFFIX || "";

// ---------------------------------------------------------------------------
// Asset A — hero. Peaks clustered upper-right. Carries the elevation labels.
// panX/panY drift the crop toward the upper-right terrain as we zoom in.
// ---------------------------------------------------------------------------

const assetA = buildAsset({
  id: "a",
  width: 1440,
  height: 900,
  peaks: [
    { x: 0.83, y: 0.24, a: 1.0, s: 0.17 },
    { x: 0.96, y: 0.54, a: 0.72, s: 0.13 },
    { x: 0.66, y: 0.11, a: 0.55, s: 0.11 },
    { x: 0.28, y: 0.78, a: 0.34, s: 0.2 },
  ],
  noiseSeed: 1840,
  noiseAmp: 0.22,
  levelCount: 42,
  minLen: 60,
  zoom: ZOOM,
  panX: 0.12,
  panY: -0.06,
  // Elevation labels are wired up and sequence correctly, but per Jacob's
  // review the hero ships as pure contour lines. Flip to `true` to bring the
  // numbers back.
  label: false,
});

// ---------------------------------------------------------------------------
// Asset B — CTA band. Different composition (peaks lower-left + right), a
// shorter crop, no labels, so the two dark moments never look cloned.
// ---------------------------------------------------------------------------

const assetB = buildAsset({
  id: "b",
  width: 1440,
  height: 560,
  peaks: [
    { x: 0.18, y: 0.68, a: 1.0, s: 0.18 },
    { x: 0.8, y: 0.34, a: 0.82, s: 0.16 },
    { x: 0.52, y: 0.92, a: 0.5, s: 0.12 },
    { x: 0.95, y: 0.85, a: 0.4, s: 0.14 },
  ],
  noiseSeed: 720,
  noiseAmp: 0.24,
  levelCount: 34,
  minLen: 55,
  zoom: ZOOM,
  panX: -0.05,
  panY: 0.04,
  label: false,
});

mkdirSync(publicDir, { recursive: true });
writeFileSync(join(publicDir, `topo-a${SUFFIX}.svg`), assetA);
writeFileSync(join(publicDir, `topo-b${SUFFIX}.svg`), assetB);

console.log(`Wrote topo-a${SUFFIX}.svg and topo-b${SUFFIX}.svg (zoom=${ZOOM})`);
