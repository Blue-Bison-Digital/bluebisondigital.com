import { notFound } from "next/navigation";
import { PageHero } from "@/components/layout/PageHero";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { siteConfig } from "@/site.config";

/** Case study detail — reserved segment, FUTURE. 404 until the work flag is on. */
export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  if (!siteConfig.features.work) notFound();
  const { slug } = await params;

  return (
    <>
      <PageHero eyebrow="Client results" title={slug} />
      <Section mode="white">
        <Container>
          <p>This case study isn&rsquo;t published yet.</p>
        </Container>
      </Section>
    </>
  );
}
