import type { ReactNode } from "react";
import { Eyebrow } from "./Eyebrow";
import styles from "./SectionHeader.module.css";

/**
 * Eyebrow + H2 + optional supporting line (PLAN.md 4.3). `align` and surface
 * (`onDark`) are set per section. `id` is applied to the H2 so sections can
 * wire aria-labelledby.
 */
export function SectionHeader({
  eyebrow,
  title,
  support,
  align = "left",
  onDark = false,
  id,
  className,
}: {
  eyebrow: string;
  title: ReactNode;
  support?: ReactNode;
  align?: "left" | "center";
  onDark?: boolean;
  id?: string;
  className?: string;
}) {
  return (
    <div
      className={[styles.header, styles[align], className]
        .filter(Boolean)
        .join(" ")}
    >
      <Eyebrow onDark={onDark}>{eyebrow}</Eyebrow>
      <h2 id={id} className={`h2 ${styles.title} ${onDark ? styles.titleDark : ""}`}>
        {title}
      </h2>
      {support ? (
        <p className={`${styles.support} ${onDark ? styles.supportDark : ""}`}>
          {support}
        </p>
      ) : null}
    </div>
  );
}
