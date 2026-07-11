import { Container } from "@/components/layout/Container";
import { TopoBackground } from "@/components/layout/TopoBackground";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { CtaMicrocopy } from "@/components/ui/CtaMicrocopy";
import { SecondaryTextCta } from "@/components/ui/SecondaryTextCta";
import { Reveal } from "@/components/motion/Reveal";
import { siteConfig } from "@/site.config";
import styles from "./CtaBand.module.css";

/**
 * Availability + Final CTA band (PLAN.md 2.11 / 4.2). The page's second and
 * final dark moment; topo asset B (different crop from the hero). Reused
 * verbatim on Home and About as a component, not copy-paste.
 */
export function CtaBand() {
  return (
    <section className={styles.band} aria-labelledby="cta-title">
      <TopoBackground asset="b" intensity="full" />
      <Container className={styles.inner}>
        <Reveal className={styles.col}>
          <Eyebrow onDark>Two Roadmap slots a month</Eyebrow>
          <h2 id="cta-title" className={`h2 ${styles.title}`}>
            Find your first automation.
          </h2>
          <p className={styles.support}>
            I take on a small number of clients at a time so every build gets
            real attention. The discovery call is how we find out if you should
            be one of them.
          </p>
          <div className={styles.actions}>
            <Button
              href={siteConfig.CALENDLY_URL}
              external
              variant="primary"
              surface="dark"
            >
              Book a call
            </Button>
            <CtaMicrocopy onDark>
              Thirty minutes, free. You&rsquo;ll leave with at least one
              automation idea, whether we work together or not.
            </CtaMicrocopy>
            <SecondaryTextCta href="/roadmap" onDark>
              Already know you want this? Start with the Automation Roadmap
            </SecondaryTextCta>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
