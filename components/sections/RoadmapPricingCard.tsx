import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/icons/Icon";
import { siteConfig } from "@/site.config";
import styles from "./RoadmapPricingCard.module.css";

const INCLUSIONS = [
  "One assessment call: discovery and workflow mapping",
  "The written roadmap, delivered within 48 hours, with every opportunity priced at your real costs",
  "Quick win #1 installed and running before the walkthrough",
  "A 30-minute walkthrough call, ending in a fixed-price build quote",
];

/**
 * Roadmap pricing card (PLAN.md 5.3). The page's one moment of visual emphasis.
 * Price → caption → hairline → inclusions (credit item distinguished) →
 * primary buy button → microcopy → guarantee. Button links to STRIPE_ROADMAP_URL.
 */
export function RoadmapPricingCard() {
  return (
    <div className={styles.card}>
      <p className={styles.price}>$1,000</p>
      <p className={styles.caption}>
        Charged upfront. Credits toward your build in full.
      </p>

      <hr className={styles.divider} />

      <ul className={styles.list}>
        {INCLUSIONS.map((item) => (
          <li key={item} className={styles.item}>
            <span className={styles.bullet} aria-hidden="true">
              <Icon name="ringBullet" size={18} />
            </span>
            <span>{item}</span>
          </li>
        ))}
        <li className={`${styles.item} ${styles.creditItem}`}>
          <span className={styles.bullet} aria-hidden="true">
            <Icon name="ringBullet" size={18} />
          </span>
          <span>
            The full $1,000 credited toward implementation when you greenlight a
            build
          </span>
        </li>
      </ul>

      <Button
        href={siteConfig.STRIPE_ROADMAP_URL}
        external
        variant="primary"
        surface="light"
        fullWidth
        className={styles.button}
      >
        Get the Roadmap
      </Button>
      <p className={styles.microcopy}>
        Secure card payment through Stripe. Your scheduling link arrives by email
        within minutes.
      </p>

      <hr className={styles.divider} />

      <p className={styles.guarantee}>
        The guarantee: if the roadmap doesn&rsquo;t find at least $10,000 a year
        in recoverable time, you get every dollar back.
      </p>
    </div>
  );
}
