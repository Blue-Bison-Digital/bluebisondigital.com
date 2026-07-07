import type { Metadata } from "next";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { siteConfig } from "@/site.config";
import styles from "./privacy.module.css";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Blue Bison Digital collects, uses and protects your information.",
};

/*
 * Plain-language privacy draft (PLAN.md 3.16). Have it legally reviewed before
 * launch. This page has no dark hero, so its section clears the fixed header
 * via extra top padding.
 */
const SECTIONS = [
  {
    heading: "What we collect",
    body: "Your email address if you subscribe to the newsletter, and standard anonymous analytics about site visits.",
  },
  {
    heading: "How it's used",
    body: "The email address is used to send you the newsletter. Nothing else. Analytics are used to understand what content is useful.",
  },
  {
    heading: "What we never do",
    body: "Sell your information, share it with third parties for marketing, or add you to lists you didn't ask for.",
  },
  {
    heading: "Your choices",
    body: "Every email includes an unsubscribe link. Unsubscribing removes you immediately.",
  },
];

export default function PrivacyPage() {
  return (
    <Section mode="white" className={styles.section} ariaLabelledby="privacy-title">
      <Container>
        <div className={styles.prose}>
          <h1 className="h1" id="privacy-title">
            Privacy policy
          </h1>
          {SECTIONS.map((s) => (
            <section key={s.heading} className={styles.block}>
              <h2 className={`h3 ${styles.heading}`}>{s.heading}</h2>
              <p>{s.body}</p>
            </section>
          ))}
          <section className={styles.block}>
            <h2 className={`h3 ${styles.heading}`}>Questions</h2>
            <p>
              <a className={styles.mail} href={`mailto:${siteConfig.EMAIL}`}>
                {siteConfig.EMAIL}
              </a>
            </p>
          </section>
        </div>
      </Container>
    </Section>
  );
}
