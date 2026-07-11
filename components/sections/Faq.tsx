import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { FaqAccordion, type FaqItem } from "./FaqAccordion";

const ITEMS: FaqItem[] = [
  {
    q: "Do I need to be technical?",
    a: "No. You need to know your business. The technical side is my job. Everything I build ships with a plain-English walkthrough, so you and your team know exactly what it does and how to use it.",
  },
  {
    q: "What does this cost?",
    a: "Every project gets a fixed price after the discovery call and roadmap. You'll know the full cost before anything gets built. No hourly meters, no surprise invoices.",
  },
  {
    q: "Do I have to switch tools?",
    a: "Almost never. Automations get built around the email, calendar, CRM and accounting tools you already use. The goal is less software in your life, not more.",
  },
  {
    q: "How long until something is running?",
    a: "If you start with the Automation Roadmap, the full plan is in your hands within 48 hours of the assessment call, and your first quick win is running by the time we walk through it together. Bigger builds get a fixed timeline in your roadmap before you commit.",
  },
  {
    q: "What happens if it breaks?",
    a: "I monitor every automation I launch, and support is part of the engagement. If something fails, it gets fixed. You won't be left holding a system you can't operate.",
  },
  {
    q: "Is this safe to use with customer data?",
    a: "Automations only touch the data they need, and they run on established platforms with the same security as the tools you use today. Judgment calls stay with people. The automation handles the busywork; you keep the decisions.",
  },
];

/** FAQ (PLAN.md 2.10). Clears predictable objections before the closing CTA. */
export function Faq() {
  return (
    <Section mode="white" ariaLabelledby="faq-title">
      <Container>
        <SectionHeader
          id="faq-title"
          eyebrow="Common questions"
          title="Answers before you ask."
          align="center"
        />
        <FaqAccordion items={ITEMS} firstOpen />
      </Container>
    </Section>
  );
}
