import type { ReactNode } from "react";
import { TopoBackground, type TopoIntensity } from "./TopoBackground";
import styles from "./Section.module.css";

export type SectionMode = "white" | "pale" | "dark";

/**
 * Full-width section wrapper. Owns background + vertical padding so sections
 * can't drift from the mode flow (PLAN.md 2.0 / 4.0). `topo` renders the
 * signature terrain (dark sections only); `asset` picks A (hero) or B (CTA).
 * `pad="compact"` is the newsletter-band exception (~half padding).
 */
export function Section({
  mode = "white",
  topo,
  asset = "a",
  topoIntensity = "full",
  topoFade = false,
  pad = "default",
  id,
  as: Tag = "section",
  ariaLabelledby,
  className,
  children,
}: {
  mode?: SectionMode;
  topo?: boolean;
  asset?: "a" | "b";
  topoIntensity?: TopoIntensity;
  topoFade?: boolean;
  pad?: "default" | "compact" | "none";
  id?: string;
  as?: "section" | "div" | "footer" | "header";
  ariaLabelledby?: string;
  className?: string;
  children: ReactNode;
}) {
  const classes = [
    styles.section,
    styles[mode],
    pad === "compact" ? styles.compact : pad === "none" ? styles.noPad : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <Tag id={id} className={classes} aria-labelledby={ariaLabelledby}>
      {topo && mode === "dark" ? (
        <TopoBackground asset={asset} intensity={topoIntensity} fade={topoFade} />
      ) : null}
      <div className={styles.inner}>{children}</div>
    </Tag>
  );
}
