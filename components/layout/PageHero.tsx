import type { ReactNode } from "react";
import { Container } from "./Container";
import { TopoBackground } from "./TopoBackground";
import { Eyebrow } from "@/components/ui/Eyebrow";
import styles from "./PageHero.module.css";

/**
 * Short dark page-hero band for interior pages (PLAN.md 4.3): navy, topo at its
 * faintest, radial depth, left-aligned eyebrow + H1 + subheadline. Carries the
 * header sentinel so the nav turns solid once the band scrolls under it.
 */
export function PageHero({
  eyebrow,
  title,
  subheadline,
}: {
  eyebrow: string;
  title: ReactNode;
  subheadline?: ReactNode;
}) {
  return (
    <section className={styles.hero}>
      <TopoBackground asset="a" intensity="faint" />
      <Container className={styles.inner}>
        <div className={styles.col}>
          <Eyebrow onDark>{eyebrow}</Eyebrow>
          <h1 className={`h1 ${styles.title}`}>{title}</h1>
          {subheadline ? <p className={styles.sub}>{subheadline}</p> : null}
        </div>
      </Container>
      <div data-header-sentinel className={styles.sentinel} aria-hidden="true" />
    </section>
  );
}
