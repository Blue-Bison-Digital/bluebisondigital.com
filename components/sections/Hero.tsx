import { Container } from "@/components/layout/Container";
import { TopoBackground } from "@/components/layout/TopoBackground";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { CtaMicrocopy } from "@/components/ui/CtaMicrocopy";
import { SecondaryTextCta } from "@/components/ui/SecondaryTextCta";
import { Reveal } from "@/components/motion/Reveal";
import { siteConfig } from "@/site.config";
import styles from "./Hero.module.css";

/**
 * Homepage hero (PLAN.md 2.2 / 4.2). Dark navy, topo asset A at its most
 * present, radial depth. Type and terrain only — no imagery. The load sequence
 * is the site's one orchestrated moment: topo fades in while the copy staggers
 * up. The header sentinel sits ~80% down so the nav turns solid past the fold.
 */
export function Hero() {
  return (
    <section className={styles.hero}>
      <TopoBackground asset="a" intensity="full" animateIn />
      <Container className={styles.inner}>
        <div className={styles.col}>
          <Reveal as="div" className={styles.eyebrowWrap} delay={0}>
            <Eyebrow onDark>Your AI automation partner</Eyebrow>
          </Reveal>

          <Reveal as="h1" className={`h1 ${styles.title}`} delay={70}>
            Automate what&rsquo;s slowing you down.
          </Reveal>

          <Reveal as="p" className={styles.sub} delay={140}>
            Blue Bison Digital builds the automations that handle the work your
            team shouldn&rsquo;t have to. Missed leads, dropped follow-ups,
            copy-paste busywork. Set up once. Working every day.
          </Reveal>

          <Reveal className={styles.actions} delay={210}>
            <div className={styles.ctaRow}>
              <Button
                href={siteConfig.CALENDLY_URL}
                external
                variant="primary"
                surface="dark"
              >
                Book a call
              </Button>
              <Button href="#how-it-works" variant="secondary" surface="dark">
                See how it works
              </Button>
            </div>
            <CtaMicrocopy onDark>
              Free 30-minute discovery call. No pitch, no obligation.
            </CtaMicrocopy>
            <SecondaryTextCta href="/roadmap" onDark className={styles.roadmapLink}>
              Already know you want this? Start with the Automation Roadmap &rarr;
            </SecondaryTextCta>
          </Reveal>
        </div>
      </Container>

      {/* Header turns solid once this passes under the nav. */}
      <div data-header-sentinel className={styles.sentinel} aria-hidden="true" />
    </section>
  );
}
