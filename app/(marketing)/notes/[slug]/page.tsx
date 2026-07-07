import { notFound } from "next/navigation";
import { PageHero } from "@/components/layout/PageHero";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { siteConfig } from "@/site.config";

/** Individual note — reserved segment, FUTURE. 404 until the notes flag is on. */
export default async function NotePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  if (!siteConfig.features.notes) notFound();
  const { slug } = await params;

  return (
    <>
      <PageHero eyebrow="Notes" title={slug} />
      <Section mode="white">
        <Container>
          <p>This note isn&rsquo;t published yet.</p>
        </Container>
      </Section>
    </>
  );
}
