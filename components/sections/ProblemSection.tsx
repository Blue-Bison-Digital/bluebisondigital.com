import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/motion/Reveal";
import styles from "./ProblemSection.module.css";

const VIGNETTES = [
  {
    title: "Leads go cold overnight.",
    body: "Someone asks for a quote at 9pm. By the time anyone replies the next afternoon, they've hired whoever answered first.",
  },
  {
    title: "Follow-ups slip through.",
    body: "You meant to check back on that estimate. Then the week happened. Every dropped thread is a sale you already did the work to win.",
  },
  {
    title: "You're the copy-paste department.",
    body: "The same customer name, typed into the CRM, the invoice, the calendar and a spreadsheet. Four systems, and none of them talk.",
  },
];

/** The Problem (PLAN.md 2.4 / 4.2). First light section; no cards, no icons. */
export function ProblemSection() {
  return (
    <Section mode="white" ariaLabelledby="problem-title">
      <Container>
        <SectionHeader
          id="problem-title"
          eyebrow="The problem"
          title="The work that fills your week isn't the work that grows your business."
          align="left"
        />

        <ul className={styles.grid}>
          {VIGNETTES.map((v, i) => (
            <Reveal as="li" key={v.title} className={styles.vignette} delay={i * 70}>
              <span className={styles.rule} aria-hidden="true" />
              <h3 className={`h3 ${styles.vTitle}`}>{v.title}</h3>
              <p className={styles.vBody}>{v.body}</p>
            </Reveal>
          ))}
        </ul>

        <Reveal as="p" className={styles.pivot}>
          None of this needs your judgment. It needs a system that never forgets
          and never sleeps. That&rsquo;s what we build.
        </Reveal>
      </Container>
    </Section>
  );
}
