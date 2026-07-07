import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/motion/Reveal";
import { AutomationCard } from "./AutomationCard";
import type { IconName } from "@/components/icons/Icon";
import styles from "./WhatWeAutomate.module.css";

const CARDS: { icon: IconName; title: string; body: string }[] = [
  {
    icon: "leadResponse",
    title: "Lead response",
    body: "Answer every inquiry in minutes, at any hour. Hot leads get routed straight to your phone instead of sitting in an inbox.",
  },
  {
    icon: "followUp",
    title: "Follow-up sequences",
    body: "Quotes and estimates get chased until someone answers. Nothing sits, nothing gets forgotten, and you stop being the person who has to remember.",
  },
  {
    icon: "intake",
    title: "Customer intake",
    body: "The moment a client says yes, the welcome email, paperwork and kickoff scheduling go out. Day one feels professional instead of chaotic.",
  },
  {
    icon: "scheduling",
    title: "Scheduling and reminders",
    body: "Appointments book themselves, confirm themselves and remind the customer the day before. No-shows drop and your calendar stops leaking.",
  },
  {
    icon: "paperwork",
    title: "Quotes, invoices and paperwork",
    body: "The documents you assemble by hand today get generated, sent and filed without you. Same output, none of your evening.",
  },
  {
    icon: "repeatQuestions",
    title: "Repeat questions",
    body: "The questions you answer ten times a week get answered instantly, correctly, in your voice. Your inbox holds only what actually needs you.",
  },
];

/** What We Automate (PLAN.md 2.5 / 4.2). The scannable heart of the page. */
export function WhatWeAutomate() {
  return (
    <Section mode="pale" id="what-we-automate" ariaLabelledby="automate-title">
      <Container>
        <SectionHeader
          id="automate-title"
          eyebrow="What we automate"
          title="Real work, off your plate."
          support="Every build starts with one workflow that's costing you time or money. Here's where most businesses start."
          align="center"
        />

        <div className={styles.grid}>
          {CARDS.map((card, i) => (
            <Reveal key={card.title} delay={(i % 3) * 70}>
              <AutomationCard {...card} />
            </Reveal>
          ))}
        </div>

        <Reveal as="p" className={styles.closing}>
          Don&rsquo;t see your bottleneck here? That&rsquo;s what the discovery
          call is for. If it can&rsquo;t be automated well, I&rsquo;ll tell you.
        </Reveal>
      </Container>
    </Section>
  );
}
