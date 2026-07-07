import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import styles from "./LogoStrip.module.css";

/**
 * Client Logo Strip — HIDDEN by default (siteConfig.features.logoStrip).
 * Instant borrowed credibility once real clients allow logo use. When hidden,
 * the Problem section moves up and nothing else changes.
 *
 * The entries below are PLACEHOLDER wordmarks. Replace with real client logos
 * (monochrome SVGs, ~28px tall) before flipping the flag on.
 */
const PLACEHOLDER_LOGOS = [
  "Northgate",
  "Cedar & Co",
  "Brightpath",
  "Marlow Group",
  "Kestrel",
];

export function LogoStrip() {
  return (
    <Section mode="white" pad="none" ariaLabelledby="logostrip-label">
      <Container>
        <div className={styles.wrap}>
          <p id="logostrip-label" className={styles.label}>
            Automating the busywork for teams like
          </p>
          <ul className={styles.logos}>
            {PLACEHOLDER_LOGOS.map((name) => (
              <li key={name} className={styles.logo}>
                {/* Placeholder wordmark — swap for a real client logo image. */}
                <span className={styles.wordmark}>{name}</span>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </Section>
  );
}
