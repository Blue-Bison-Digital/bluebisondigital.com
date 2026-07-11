import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { SecondaryTextCta } from "@/components/ui/SecondaryTextCta";
import { Reveal } from "@/components/motion/Reveal";
import { FitSection } from "@/components/sections/FitSection";
import { ProcessRoute, type RouteStep } from "@/components/sections/ProcessRoute";
import { FaqAccordion, type FaqItem } from "@/components/sections/FaqAccordion";
import { RoadmapPricingCard } from "@/components/sections/RoadmapPricingCard";
import { siteConfig } from "@/site.config";
import styles from "./roadmap.module.css";

export const metadata: Metadata = {
  title: "The Automation Roadmap",
  description:
    "A $1,000 Automation Roadmap: every automatable hour in your business mapped and priced within 48 hours, your first automation running by the walkthrough, and the full fee credited toward your build.",
};

const DELIVERABLES = [
  {
    title: "The assessment call",
    body: "A focused call, 30 to 45 minutes. We go through your business the way a builder would: where the hours go, which workflows leak time, and what your existing tools should already be doing that nobody has wired up.",
  },
  {
    title: "The written roadmap, in 48 hours",
    body: "Two days later you're holding the plan: every automation opportunity we found, a dollar figure on each one at your real costs, quick wins you can do yourself this week, and a prioritized build order. Specific enough to act on with or without me.",
  },
  {
    title: "Quick win #1, already running",
    body: "The roadmap doesn't arrive alone. By the time we sit down to review it, your first automation is installed and working. You're not looking at a plan. You're looking at results.",
  },
  {
    title: "The walkthrough and your build quote",
    body: "A 30-minute call to walk the roadmap together: the quick win's first results, what's worth building next, and a fixed price for it. No hourly meters, no maybe-pricing. You decide with the full picture.",
  },
];

const STEPS: RouteStep[] = [
  {
    name: "Buy the Roadmap",
    body: "Pay the $1,000 by card. Within minutes you get a confirmation email with a short intake form and a link to schedule your call. That's the whole admin.",
  },
  {
    name: "The assessment call",
    body: "Thirty to forty-five minutes, focused, because the intake form already did the busywork. You talk through how the business actually runs. I find where the hours are hiding, pick your first quick win, and we book the walkthrough before we're done.",
  },
  {
    name: "48 hours later",
    body: "The roadmap lands: every opportunity priced at your real costs, in build order. Your quick win gets installed as soon as you grant access, so it's running by the time we talk again.",
  },
  {
    name: "The walkthrough",
    body: "We go through the roadmap together and you decide. Greenlight a build and your $1,000 comes off the price, and your build gets scheduled on the spot. I take on one or two builds a month, so the plan never sits in a drawer waiting.",
  },
];

const FAQ: FaqItem[] = [
  {
    q: "Why not just book the free call?",
    a: 'The free call answers "is automation right for my business." The Roadmap answers "what exactly do we build, in what order, and what\'s the first win." If you\'re still on the first question, book the call. It exists for exactly that.',
  },
  {
    q: "What if I don't hire you for the build?",
    a: "The roadmap is yours either way, and it's written to be acted on without me. The quick win keeps running. All you leave behind is the credit.",
  },
  {
    q: "When would my build actually happen?",
    a: "Builds get scheduled at the walkthrough, and I take on one or two a month. Greenlight yours and it goes on the calendar then and there, usually starting within a few weeks. Your quick win is already running in the meantime.",
  },
  {
    q: "What does the guarantee cover?",
    a: "If the assessment doesn't surface at least $10,000 a year in recoverable time, you get a full refund. At five or more employees, I have yet to see a business come in under that line. That's why I can offer it.",
  },
];

export default function RoadmapPage() {
  return (
    <>
      <PageHero
        eyebrow="The Automation Roadmap"
        title="Every hour you're losing, found in 48 hours."
        subheadline="The Automation Roadmap is $1,000: one short call, then a complete map of every automatable hour in your business with a dollar figure on each. Your first automation is running before we even walk through the plan, and the full fee credits toward your build."
      />

      {/* What you get */}
      <Section mode="white" ariaLabelledby="wyg-title">
        <Container>
          <SectionHeader
            id="wyg-title"
            eyebrow="What you get"
            title="Not a report. A running start."
            align="left"
          />
          <div className={styles.deliverables}>
            {DELIVERABLES.map((d, i) => (
              <Reveal key={d.title} className={styles.deliverable} delay={(i % 2) * 70}>
                <h3 className={`h3 ${styles.dTitle}`}>{d.title}</h3>
                <p className={styles.dBody}>{d.body}</p>
              </Reveal>
            ))}
          </div>

          <Reveal as="p" className={styles.callout}>
            And the $1,000 isn&rsquo;t really a fee. Greenlight a build and{" "}
            <span className={styles.underline}>every dollar credits toward it</span>.
            You&rsquo;re not buying a document. You&rsquo;re putting a deposit on
            the builder.
          </Reveal>
        </Container>
      </Section>

      {/* Who this is for */}
      <FitSection
        mode="pale"
        eyebrow="Who it's for"
        title="The honest fit check."
        leadIn="The Roadmap is priced for businesses where automation moves real money. Here's the line."
        goodItems={[
          "Your business has five or more employees. That's where ten-plus hours of automatable work reliably hides.",
          "Nobody on staff owns the technical side. If you had that person, you'd have done this already. That's the gap I fill.",
          "You've read this site, you're sold on the approach, and you want the plan instead of another call.",
        ]}
        badItems={[
          "Fewer than five employees. At that size the math doesn't favor you, and I'd rather tell you that than take your money. Book the free call and I'll point you at wins that fit.",
          "You collect audits. If this roadmap would join a drawer of unread reports, save the $1,000. This one is built to be acted on.",
          "You need a large custom software platform. That's a different kind of firm, and I'll say so.",
        ]}
      />

      {/* How it works */}
      <Section mode="white" ariaLabelledby="rhow-title">
        <Container>
          <SectionHeader
            id="rhow-title"
            eyebrow="How it works"
            title="From payment to plan in four steps."
            align="left"
          />
          <ProcessRoute steps={STEPS} />
        </Container>
      </Section>

      {/* The investment */}
      <Section mode="pale" ariaLabelledby="invest-title">
        <Container>
          <SectionHeader
            id="invest-title"
            eyebrow="The investment"
            title="One price. Everything included."
            align="center"
          />
          <div className={styles.pricing}>
            <RoadmapPricingCard />
            <p className={styles.availability}>
              Two Roadmap slots and one to two build slots a month. Booked in
              order.
            </p>
          </div>
        </Container>
      </Section>

      {/* FAQ */}
      <Section mode="white" ariaLabelledby="rfaq-title">
        <Container>
          <SectionHeader
            id="rfaq-title"
            eyebrow="Questions"
            title="Before you buy."
            align="center"
          />
          <FaqAccordion items={FAQ} firstOpen />

          <div className={styles.secondaryCta}>
            <SecondaryTextCta href={siteConfig.CALENDLY_URL} external>
              Rather talk it through first? Book the free discovery call
            </SecondaryTextCta>
          </div>
        </Container>
      </Section>
    </>
  );
}
