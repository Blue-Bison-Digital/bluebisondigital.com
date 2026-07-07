import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { ProofList } from "@/components/ui/ProofList";
import { NewsletterForm } from "@/components/sections/NewsletterForm";
import styles from "./newsletter.module.css";

export const metadata: Metadata = {
  title: "Newsletter",
  description:
    "Short, practical emails on the AI automations that actually work for small businesses. No hype, no daily drip.",
};

export default function NewsletterPage() {
  return (
    <>
      <PageHero
        eyebrow="The newsletter"
        title="Practical AI for people who run businesses."
        subheadline="Short, occasional emails on the automations that are actually working for small businesses. Written for owners, not engineers."
      />

      <Section mode="white">
        <Container>
          <div className={styles.col}>
            <div className={styles.getBlock}>
              <p className={styles.getLabel}>What you&rsquo;ll get</p>
              <ProofList
                items={[
                  "Real automation breakdowns: what they do, what they cost, what they save",
                  "Straight answers on what's worth your money and what's hype",
                  "No daily drip. It goes out when there's something worth saying.",
                ]}
              />
            </div>

            <div className={styles.formBlock}>
              <NewsletterForm />
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
