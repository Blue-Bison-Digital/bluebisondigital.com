import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { NewsletterForm } from "./NewsletterForm";
import styles from "./NewsletterBand.module.css";

/**
 * Newsletter band (PLAN.md 2.12 / 4.2). Pale, compact — deliberately placed
 * after the final CTA so it catches only the people who scrolled past booking.
 */
export function NewsletterBand() {
  return (
    <Section mode="pale" pad="compact" ariaLabelledby="newsletter-title">
      <Container>
        <div className={styles.col}>
          <h2 id="newsletter-title" className={`h3 ${styles.title}`}>
            Practical AI, no hype.
          </h2>
          <p className={styles.support}>
            Short, occasional emails on the automations that are actually working
            for small businesses. What to try, what to skip, and what it really
            costs.
          </p>
          <NewsletterForm />
        </div>
      </Container>
    </Section>
  );
}
