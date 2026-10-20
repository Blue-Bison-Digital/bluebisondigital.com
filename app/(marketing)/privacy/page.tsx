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
    body: "Your email address, if you subscribe to the newsletter. Separately, analytics about how the site gets used: which pages you visit, where you arrived from, roughly what part of the world you're in, and what device and browser you're on.",
  },
  {
    heading: "How it's used",
    body: "The email address is used to send you the newsletter. Nothing else. The analytics tell us which pages are worth keeping and where people get stuck.",
  },
  {
    heading: "Session recording",
    body: "We record site sessions, which means clicks, scrolling and mouse movement, so we can see where a page is confusing. Form fields are masked before a recording is saved, so what you type into the newsletter signup is not captured. Recordings are visible to us only, and we use them to improve the site.",
  },
  {
    heading: "Tools we use",
    body: "Google Analytics, for traffic and referral data. PostHog, for on-site behavior and the session recordings above. Kit, for the newsletter. Each one receives only the data described here, and all three set cookies in your browser to do it.",
  },
  {
    heading: "What we never do",
    body: "Sell your information, share it with third parties for marketing, or add you to lists you didn't ask for.",
  },
  {
    heading: "Your choices",
    body: "Every email includes an unsubscribe link. Unsubscribing removes you immediately. You can also block analytics cookies in your browser settings, or use any standard tracking blocker, and the site will work exactly the same.",
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
