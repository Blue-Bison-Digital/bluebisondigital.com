import { Hero } from "@/components/sections/Hero";
import { ProblemSection } from "@/components/sections/ProblemSection";
import { WhatWeAutomate } from "@/components/sections/WhatWeAutomate";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Founder } from "@/components/sections/Founder";
import { Faq } from "@/components/sections/Faq";
import { CtaBand } from "@/components/sections/CtaBand";
import { NewsletterBand } from "@/components/sections/NewsletterBand";
import { LogoStrip } from "@/components/sections/hidden/LogoStrip";
import { CaseStudies } from "@/components/sections/hidden/CaseStudies";
import { TestimonialBlock } from "@/components/sections/hidden/TestimonialBlock";
import { siteConfig } from "@/site.config";

/**
 * Homepage. Mode flow (PLAN.md 2.0):
 * dark → light → light → light → (light) → light → (light) → light → dark → light → footer
 *
 * Hidden sections ship as real components gated by siteConfig.features. When a
 * flag is off the section simply isn't rendered and the surrounding flow closes
 * up — no layout change required to turn social proof on.
 */
export default function HomePage() {
  const { features } = siteConfig;
  return (
    <>
      <Hero />
      {features.logoStrip && <LogoStrip />}
      <ProblemSection />
      <WhatWeAutomate />
      <HowItWorks />
      {features.caseStudies && <CaseStudies />}
      <Founder />
      {features.testimonials && <TestimonialBlock />}
      <Faq />
      <CtaBand />
      <NewsletterBand />
    </>
  );
}
