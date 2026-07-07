import { ImageResponse } from "next/og";

export const alt = "Blue Bison Digital — AI Automation for Small Business";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/**
 * Site-wide OpenGraph image (PLAN.md build notes): navy with a topo hint, the
 * bison mark, wordmark, and tagline. One static asset for the whole site.
 * Rendered with the default font to avoid build-time network font fetches.
 */
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          background:
            "radial-gradient(120% 90% at 50% 25%, #1b2856 0%, #131d41 55%, #0e1636 100%)",
          padding: "80px",
          position: "relative",
        }}
      >
        {/* Topo hint: concentric rings in the upper-right */}
        <svg
          width="620"
          height="620"
          viewBox="0 0 620 620"
          style={{ position: "absolute", top: -120, right: -80 }}
        >
          {[70, 130, 190, 250, 310].map((r, i) => (
            <ellipse
              key={r}
              cx="360"
              cy="260"
              rx={r}
              ry={r * 0.8}
              fill="none"
              stroke="#89B6FD"
              strokeWidth={i % 2 === 0 ? 2 : 1}
              strokeOpacity={i % 2 === 0 ? 0.16 : 0.1}
            />
          ))}
        </svg>

        {/* Bison + wordmark */}
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <svg width="80" height="80" viewBox="0 0 349.24 349.24" fill="#89B6FD">
            <path d="M107.83 212.2 L107.83 269.83 L90.58 269.83 L84.87 234.59 Z" />
            <path d="M245.33 228.83 L246.61 268.7 L235.82 268.7 L232.51 248.28 Z" />
            <path d="M312.34,117.54v75.24l-36.59,42.81-22.77-12.42-5.52-19.34s-35.37,61.45-41.77,65.24h-12.66l-1.99-4.93-18.14-45.13-70.75-32.03s-32.97,40.14-32.79,47.75c.18,7.59,3.46,35.1,3.46,35.1h-13.12s-5.21-18.48-10.79-28.18c-.42-.76-.85-1.45-1.29-2.09-1.11-1.61-1.85-3.12-2.27-4.51v-6.6l.02-.04,4.31-7.15c2.94-4.13,10.69-39.51,8.62-45.91-2.07-6.38-2.4-10.35-2.4-10.35l-13.12,28.68-5.88-4.69s15.72-38.83,18.64-45.73c2.94-6.9,117.35-63.85,117.35-63.85h74.38l8.62,22.95,56.44,15.18Z" />
          </svg>
          <span style={{ color: "#ffffff", fontSize: 30, fontWeight: 700 }}>
            Blue Bison Digital
          </span>
        </div>

        <div
          style={{
            display: "flex",
            fontSize: 68,
            fontWeight: 700,
            color: "#ffffff",
            letterSpacing: "-0.02em",
            lineHeight: 1.05,
            marginTop: 40,
            maxWidth: 900,
          }}
        >
          Automate what&rsquo;s slowing you down.
        </div>

        <div
          style={{
            display: "flex",
            fontSize: 26,
            color: "#89B6FD",
            marginTop: 28,
            letterSpacing: "0.02em",
          }}
        >
          AI automation for small business
        </div>
      </div>
    ),
    { ...size }
  );
}
