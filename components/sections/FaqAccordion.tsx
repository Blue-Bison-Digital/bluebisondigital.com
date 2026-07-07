import { Icon } from "@/components/icons/Icon";
import styles from "./FaqAccordion.module.css";

export type FaqItem = { q: string; a: string };

/**
 * Accessible FAQ accordion (PLAN.md 2.10 / 4.2). Native details/summary for
 * built-in keyboard + semantics; hairline dividers; a thin plus that rotates to
 * an × when open. First item open by default. Reused by Home and Roadmap.
 */
export function FaqAccordion({
  items,
  firstOpen = true,
}: {
  items: FaqItem[];
  firstOpen?: boolean;
}) {
  return (
    <div className={styles.accordion}>
      {items.map((item, i) => (
        <details
          key={item.q}
          className={styles.item}
          open={firstOpen && i === 0}
          name="faq"
        >
          <summary className={styles.summary}>
            <span className={styles.question}>{item.q}</span>
            <span className={styles.indicator} aria-hidden="true">
              <Icon name="plus" size={20} />
            </span>
          </summary>
          <div className={styles.answer}>
            <p>{item.a}</p>
          </div>
        </details>
      ))}
    </div>
  );
}
