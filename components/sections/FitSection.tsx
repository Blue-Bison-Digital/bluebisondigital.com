import { Section, type SectionMode } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ProofList } from "@/components/ui/ProofList";
import { Reveal } from "@/components/motion/Reveal";
import styles from "./FitSection.module.css";

/**
 * Honest fit-check with two columns — "A good fit if" (blue ring bullets) and
 * "Not a fit if" (gray dash bullets). Reused by the About page and the Roadmap
 * page (PLAN.md 4.2 "reuse the component"); mode + copy vary per use.
 */
export function FitSection({
  mode = "white",
  eyebrow,
  title,
  leadIn,
  goodItems,
  badItems,
  id = "fit-title",
}: {
  mode?: SectionMode;
  eyebrow?: string;
  title: string;
  leadIn?: string;
  goodItems: string[];
  badItems: string[];
  id?: string;
}) {
  return (
    <Section mode={mode} ariaLabelledby={id}>
      <Container>
        {eyebrow ? (
          <SectionHeader id={id} eyebrow={eyebrow} title={title} support={leadIn} align="left" />
        ) : (
          <div className={styles.plainHeader}>
            <h2 id={id} className="h2">
              {title}
            </h2>
            {leadIn ? <p className={styles.leadIn}>{leadIn}</p> : null}
          </div>
        )}

        <div className={styles.columns}>
          <Reveal className={styles.column}>
            <p className={styles.colLabel}>A good fit if</p>
            <ProofList bullet="ring" items={goodItems} />
          </Reveal>
          <Reveal className={styles.column} delay={80}>
            <p className={styles.colLabel}>Not a fit if</p>
            <ProofList bullet="dash" items={badItems} />
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
