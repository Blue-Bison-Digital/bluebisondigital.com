import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/motion/Reveal";
import { FitSection } from "@/components/sections/FitSection";
import { CtaBand } from "@/components/sections/CtaBand";
import styles from "./about.module.css";

export const metadata: Metadata = {
  title: "About",
  description:
    "Meet Jacob McKinney, the one-person AI automation agency behind Blue Bison Digital. Fixed prices, plain English, outcomes first.",
};

const PRINCIPLES = [
  {
    title: "Outcomes, not tools.",
    body: "You're not buying AI. You're buying answered leads, finished paperwork and a shorter to-do list. The technology is my problem, not yours.",
  },
  {
    title: "Fixed prices.",
    body: "You'll know the full cost before the build starts. If the scope changes, the price changes in writing, before the work, not on the invoice after it.",
  },
  {
    title: "Plain English.",
    body: "Every update, every walkthrough, every document. If you can't explain what your automation does, I haven't finished the job.",
  },
  {
    title: "Small on purpose.",
    body: "A few clients at a time, each getting real attention. I'd rather ship five automations that stick than twenty that don't.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About BBD"
        title="A one-person agency, on purpose."
        subheadline="Blue Bison Digital is Jacob McKinney. That's the whole org chart, and that's the point."
      />

      {/* The story */}
      <Section mode="white" ariaLabelledby="story-title">
        <Container>
          <div className={styles.prose}>
            <h2 id="story-title" className="h2">
              Why BBD exists
            </h2>
            <p>
              I&rsquo;ve spent 15 years building software and internal systems
              for small businesses, and these days I also build and run a full
              streaming platform. Over and over, I watched owners buy tools
              that promised everything and delivered a login. The software
              wasn&rsquo;t the problem. Nobody was connecting it to the actual
              work.
            </p>
            <p>
              Blue Bison Digital exists to do that connecting. Find the workflow
              that hurts. Automate it properly. Prove it paid for itself. Then
              find the next one.
            </p>
          </div>
        </Container>
      </Section>

      {/* How I work — 2×2 principle grid */}
      <Section mode="pale" ariaLabelledby="howiwork-title">
        <Container>
          <h2 id="howiwork-title" className="h2">
            How I work
          </h2>
          <div className={styles.principles}>
            {PRINCIPLES.map((p, i) => (
              <Reveal key={p.title} className={styles.principle} delay={(i % 2) * 70}>
                <h3 className={`h3 ${styles.principleTitle}`}>{p.title}</h3>
                <p className={styles.principleBody}>{p.body}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* Why the bison */}
      <Section mode="white" ariaLabelledby="bison-title">
        <Container>
          <div className={styles.bison}>
            <h2 id="bison-title" className="h2">
              Why the bison
            </h2>
            <p className={`bodyLg ${styles.bisonBody}`}>
              When a storm rolls in, most animals run from it and end up
              traveling with it for miles. Bison turn and walk straight into the
              storm. It&rsquo;s the fastest way through. That&rsquo;s the job
              here. AI feels like a storm to most business owners right now:
              loud, everywhere, hard to read. You don&rsquo;t have to outrun it.
              Walk into it with someone who knows the terrain, and you come out
              the other side ahead of everyone still running.
            </p>
          </div>
        </Container>
      </Section>

      {/* Fit */}
      <FitSection
        mode="white"
        title="Who this is for"
        leadIn="BBD works best for a specific kind of business. Here's the honest version."
        goodItems={[
          "You run a business where a workflow is clearly eating time: leads, intake, scheduling, paperwork, follow-up.",
          "You want outcomes and you're open to adjusting a process to get them.",
          "You'd rather have one accountable expert than a big-agency team.",
        ]}
        badItems={[
          "You want to cut staff first and ask questions later. Automation here is about taking busywork off good people, not replacing them.",
          "You want to “do something with AI” but can't name a problem. Start with the newsletter instead; it'll help you find one.",
          "You need a large custom software platform. That's a different kind of firm, and I'm happy to say so on a call.",
        ]}
      />

      <CtaBand />
    </>
  );
}
