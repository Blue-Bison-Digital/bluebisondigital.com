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
    "A $1,000 working session that maps every automatable hour in your business, installs the first quick win live, and credits in full toward your build.",
};

const DELIVERABLES = [
  {
    title: "The assessment call",
    body: "We go through your business the way a builder would. Where the hours go, which workflows leak time, and what your existing tools could already be doing that nobody has wired up.",
  },
  {
    title: "The written roadmap",
    body: "Quick wins you can do yourself this week. A full map of every automation opportunity we found. A prioritized list of what to build first and why. Specific enough to act on with or without me.",
  },
  {
    title: "Quick win #1, installed live",
    body: "The session doesn't end with a plan. It ends with one automation already running in your business. Something works before we hang up.",
  },
  {
    title: "A 60-minute AI Operating System session",
    tag: "Bonus",
    body: "A one-on-one working session where we set up the AI tools you and your team will actually use day to day. Yours whether or not a build happens.",
  },
];

const STEPS: RouteStep[] = [
  {
    name: "Buy the Roadmap",
    body: "Pay the $1,000 by card. Within minutes you'll get a confirmation email with a link to schedule your session. That's the whole admin.",
  },
  {
    name: "The session",
    body: "One call: discovery and workflow mapping. You talk through how the business actually runs; I find where the hours are hiding. Before we end, quick win #1 gets installed and starts working.",
  },
  {
    name: "The roadmap lands",
    body: "You get the written report within five business days: quick wins, the full opportunity map, and what to build first.",
  },
  {
    name: "You decide",
    body: "We do your AI Operating System session, and you choose whether to greenlight a build. If you do, your $1,000 comes off the price. Build slots open in October.",
  },
];

const FAQ: FaqItem[] = [
  {
    q: "Why not just book the free call?",
    a: 'The free call answers "is automation right for my business." The Roadmap answers "what exactly do we build, in what order, and what\'s the first win." If you\'re still on the first question, book the call. It exists for exactly that.',
  },
  {
    q: "What if I don't hire you for the build?",
    a: "The roadmap is yours either way, and it's written to be acted on without me. The quick win keeps running. The AI setup session still happens. All you leave behind is the credit.",
  },
  {
    q: "When would my build actually happen?",
    a: "Build slots open in October 2026, and there are only a few. Buying the Roadmap now means your plan is done, your first win is live, and you're at the front of the line when a slot opens.",
  },
  {
    q: "What does the guarantee cover?",
    a: "If the assessment finds fewer than 10 hours of automatable work in your business, you get a full refund. At five or more employees, I have yet to see a business where that's the outcome. That's why I can offer it.",
  },
];

export default function RoadmapPage() {
  return (
    <>
      <PageHero
        eyebrow="The Automation Roadmap"
        title="Your first automation, live in one session."
        subheadline="The Automation Roadmap is a $1,000 working session: every automatable hour in your business mapped, the first quick win installed before we hang up, and the full fee credited toward your build."
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
                <h3 className={`h3 ${styles.dTitle}`}>
                  {d.tag ? <span className={styles.bonusTag}>{d.tag}</span> : null}
                  {d.title}
                </h3>
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
          "A workflow is clearly costing you: leads, intake, scheduling, paperwork, follow-up.",
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
              Roadmap slots are open now. Build slots are limited and open in
              October.
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
              Rather talk it through first? Book the free discovery call &rarr;
            </SecondaryTextCta>
          </div>
        </Container>
      </Section>
    </>
  );
}
