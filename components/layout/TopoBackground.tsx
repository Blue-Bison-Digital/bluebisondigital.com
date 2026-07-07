import styles from "./TopoBackground.module.css";

export type TopoIntensity = "full" | "faint" | "hot";

/**
 * Renders the topographic texture (asset A hero / asset B CTA band) as a
 * decorative, aria-hidden background layer inside a dark surface.
 *
 * The texture ships FLAT and even; `intensity` dials overall presence per
 * placement (PLAN.md 4.1 usage rules):
 *   full  — hero + CTA band
 *   faint — interior page-hero (lightest application)
 *   hot   — 404 (deep-in-the-terrain, runs a little hotter)
 *
 * `fade` is the deferred CSS radial-fade hook: off by default (Jacob's call to
 * keep it flat), flip on to fade the texture away behind centered text.
 */
export function TopoBackground({
  asset = "a",
  intensity = "full",
  fade = false,
  animateIn = false,
}: {
  asset?: "a" | "b";
  intensity?: TopoIntensity;
  fade?: boolean;
  /** Hero-only: fade the texture in from 0 on load (~800ms). */
  animateIn?: boolean;
}) {
  const src = asset === "b" ? "/topo-b.svg" : "/topo-a.svg";
  const className = [
    styles.wrap,
    styles[intensity],
    fade ? styles.fade : "",
    animateIn ? styles.animateIn : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={className} aria-hidden="true">
      {/* eslint-disable-next-line @next/next/no-img-element -- decorative, pre-sized static SVG; next/image adds no value for a full-bleed background */}
      <img src={src} alt="" className={styles.img} draggable={false} />
    </div>
  );
}
