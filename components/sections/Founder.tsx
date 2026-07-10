import Link from "next/link";
import Image from "next/image";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { ProofList } from "@/components/ui/ProofList";
import { Reveal } from "@/components/motion/Reveal";
import styles from "./Founder.module.css";

/** Founder / Who You're Working With (PLAN.md 2.8 / 4.2). Launch substitute for testimonials. */
export function Founder() {
  return (
    <Section mode="white" ariaLabelledby="founder-title">
      <Container>
        <div className={styles.grid}>
          <Reveal className={styles.photoWrap}>
            <Image
              className={styles.photo}
              src="/jacob.jpg"
              alt="Jacob McKinney, founder of Blue Bison Digital"
              width={800}
              height={1000}
              sizes="(min-width: 860px) 40vw, 90vw"
            />
          </Reveal>

          <Reveal className={styles.content} delay={80}>
            <Eyebrow>Who you&rsquo;re working with</Eyebrow>
            <h2 id="founder-title" className={`h2 ${styles.title}`}>
              You work with me, not an account manager.
            </h2>
            <p className={styles.body}>
              I&rsquo;m Jacob McKinney, the founder of Blue Bison Digital.
              I&rsquo;ve spent 16 years building software and internal systems
              for small businesses, from local builders and martial-arts gyms to
              farms and churches, and the same pattern kept showing up: good
              businesses losing hours every week to work a system should be
              handling.
            </p>
            <p className={styles.body}>
              When you hire BBD, I&rsquo;m the one on the call, the one building
              your automation, and the one you message when something needs to
              change. No handoffs. No junior team you&rsquo;ve never met. One
              person who knows your business and is accountable for the result.
            </p>

            <ProofList
              className={styles.proof}
              items={[
                "One point of contact, from first call to launch",
                "Fixed prices, agreed before the build starts",
                "Plain-English everything. If you can't explain what your automation does, I haven't finished the job.",
              ]}
            />

            <Link className={styles.link} href="/about">
              More about how I work
              <span className={styles.arrow} aria-hidden="true">
                &rarr;
              </span>
            </Link>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
