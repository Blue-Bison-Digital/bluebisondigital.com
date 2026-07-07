import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/layout/PageHero";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { siteConfig } from "@/site.config";

export const metadata: Metadata = {
  title: "Client Results",
  description:
    "Real automations, real numbers. How Blue Bison Digital clients got their time back.",
};

/**
 * Case Studies index — reserved segment, FUTURE. Returns 404 until
 * siteConfig.features.work is turned on. The homepage CaseStudies cards link
 * here, so enable this flag alongside caseStudies.
 */
export default function WorkIndexPage() {
  if (!siteConfig.features.work) notFound();

  return (
    <>
      <PageHero
        eyebrow="Client results"
        title="Client results"
        subheadline="Real automations, real numbers. How Blue Bison Digital clients got their time back."
      />
      <Section mode="white">
        <Container>
          <p>Case studies are on the way.</p>
        </Container>
      </Section>
    </>
  );
}
