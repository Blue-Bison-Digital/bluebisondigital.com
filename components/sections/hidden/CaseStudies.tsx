import Link from "next/link";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/motion/Reveal";
import styles from "./CaseStudies.module.css";

type CaseStudy = {
  slug: string;
  label: string;
  metric: string;
  problem: string;
  result: string;
};

/**
 * Case Study Cards — HIDDEN by default (siteConfig.features.caseStudies).
 * The metric is the design; everything else stays quiet. Grid handles 2 or 3
 * cards cleanly (at 2, cards widen rather than leaving a gap).
 *
 * EXAMPLE content — replace with real client data before enabling. Enabling
 * this also requires turning on the `work` route flag so /work/[slug] resolves.
 */
const EXAMPLES: CaseStudy[] = [
  {
    slug: "home-services-estimates",
    label: "Home services",
    metric: "11 hrs/week back",
    problem: "Every estimate was written and chased by hand.",
    result: "Estimates now go out same-day and follow up on their own.",
  },
  {
    slug: "example-two",
    label: "Professional services",
    metric: "3x faster intake",
    problem: "New clients waited days for onboarding paperwork.",
    result: "Intake now completes itself the moment a client says yes.",
  },
];

export function CaseStudies() {
  return (
    <Section mode="pale" ariaLabelledby="results-title">
      <Container>
        <SectionHeader
          id="results-title"
          eyebrow="Results"
          title="What this looks like in a real business."
          align="left"
        />
        <div className={styles.grid} data-count={EXAMPLES.length}>
          {EXAMPLES.map((cs, i) => (
            <Reveal key={cs.slug} delay={i * 70}>
              <article className={styles.card}>
                <p className={styles.label}>{cs.label}</p>
                <p className={styles.metric}>{cs.metric}</p>
                <p className={styles.problem}>{cs.problem}</p>
                <p className={styles.result}>{cs.result}</p>
                <Link className={styles.link} href={`/work/${cs.slug}`}>
                  Read the full story
                </Link>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
