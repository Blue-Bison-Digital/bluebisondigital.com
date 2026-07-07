import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import styles from "./TestimonialBlock.module.css";

type Quote = { quote: string; name: string; role: string };

/**
 * Testimonial Block — HIDDEN by default (siteConfig.features.testimonials).
 * Third-party voice confirming the founder section's claims. Accepts one or two
 * quotes via the same component (two renders side-by-side at smaller type).
 *
 * EXAMPLE content — replace with a real quote before enabling.
 */
const QUOTES: Quote[] = [
  {
    quote: "I stopped checking my inbox at night. That alone was worth it.",
    name: "Jane Doe",
    role: "Owner, Example Plumbing Co.",
  },
];

export function TestimonialBlock() {
  const two = QUOTES.length >= 2;
  return (
    <Section mode="pale" ariaLabelledby="testimonial-eyebrow">
      <Container>
        <Eyebrow id="testimonial-eyebrow">What clients say</Eyebrow>
        <div
          className={`${styles.quotes} ${two ? styles.two : styles.one}`}
        >
          {QUOTES.slice(0, 2).map((q) => (
            <figure key={q.name} className={styles.figure}>
              <blockquote className={styles.quote}>
                <span className={styles.mark} aria-hidden="true">
                  &ldquo;
                </span>
                {q.quote}
              </blockquote>
              <figcaption className={styles.caption}>
                <span className={styles.name}>{q.name}</span>
                <span className={styles.role}>{q.role}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </Container>
    </Section>
  );
}
