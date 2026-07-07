import type { ReactNode } from "react";
import styles from "./CtaMicrocopy.module.css";

/** Small trust line rendered under a button (PLAN.md 4.3). */
export function CtaMicrocopy({
  onDark = false,
  children,
}: {
  onDark?: boolean;
  children: ReactNode;
}) {
  return (
    <p className={`${styles.microcopy} ${onDark ? styles.dark : ""}`}>{children}</p>
  );
}
