import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/layout/PageHero";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { siteConfig } from "@/site.config";

export const metadata: Metadata = {
  title: "Notes",
  description:
    "Practical writing on AI automation for people who run businesses.",
};

/**
 * Content Hub / Blog index — reserved segment, FUTURE. Returns 404 until
 * siteConfig.features.notes is turned on (PLAN.md site map + build notes).
 */
export default function NotesIndexPage() {
  if (!siteConfig.features.notes) notFound();

  return (
    <>
      <PageHero
        eyebrow="Notes"
        title="Notes"
        subheadline="Practical writing on AI automation for people who run businesses."
      />
      <Section mode="white">
        <Container>
          {/* Placeholder index — wire up the CMS / post list when notes ships. */}
          <p>Posts are on the way.</p>
        </Container>
      </Section>
    </>
  );
}
