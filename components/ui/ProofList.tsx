import type { ReactNode } from "react";
import { Icon } from "@/components/icons/Icon";
import styles from "./ProofList.module.css";

/**
 * Short list with topo-ring bullets (PLAN.md 4.3). Used in the Founder section
 * and the About/Roadmap Fit columns.
 *   bullet="ring" — blue concentric topo-ring glyph (proof points / good fit)
 *   bullet="dash" — quiet gray dash (not-a-fit column)
 */
export function ProofList({
  items,
  bullet = "ring",
  className,
}: {
  items: ReactNode[];
  bullet?: "ring" | "dash";
  className?: string;
}) {
  const variant = bullet === "ring" ? styles.ringVariant : styles.dashVariant;
  return (
    <ul
      className={[styles.list, variant, className].filter(Boolean).join(" ")}
    >
      {items.map((item, i) => (
        <li key={i} className={styles.item}>
          <span className={styles.bullet} aria-hidden="true">
            {bullet === "ring" ? <Icon name="ringBullet" size={18} /> : <span className={styles.dash} />}
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
