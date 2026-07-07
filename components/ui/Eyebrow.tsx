import type { ReactNode } from "react";
import styles from "./Eyebrow.module.css";

/**
 * Uppercase Space Grotesk label. Color resolves from surface (PLAN.md 4.0):
 * gray on light, blue on dark.
 */
export function Eyebrow({
  onDark = false,
  as: Tag = "p",
  id,
  children,
}: {
  onDark?: boolean;
  as?: "p" | "span" | "div";
  id?: string;
  children: ReactNode;
}) {
  return (
    <Tag id={id} className={`${styles.eyebrow} ${onDark ? styles.dark : ""}`}>
      {children}
    </Tag>
  );
}
