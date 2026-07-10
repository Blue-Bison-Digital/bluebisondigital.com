"use client";

import { useId, useState } from "react";
import { Icon } from "@/components/icons/Icon";
import styles from "./FaqAccordion.module.css";

export type FaqItem = { q: string; a: string };

/**
 * Accessible FAQ accordion (PLAN.md 2.10 / 4.2). Controlled so the answer can
 * animate open/closed (grid-template-rows 0fr→1fr slide) rather than snapping;
 * the plus rotates to an × in sync. One item open at a time, first open by
 * default. Reduced motion is handled globally (transitions collapse to instant).
 */
export function FaqAccordion({
  items,
  firstOpen = true,
}: {
  items: FaqItem[];
  firstOpen?: boolean;
}) {
  const baseId = useId();
  const [openIndex, setOpenIndex] = useState<number | null>(firstOpen ? 0 : null);

  return (
    <div className={styles.accordion}>
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        const panelId = `${baseId}-panel-${i}`;
        const btnId = `${baseId}-btn-${i}`;
        return (
          <div key={item.q} className={styles.item}>
            <h3 className={styles.heading}>
              <button
                id={btnId}
                type="button"
                className={styles.summary}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenIndex(isOpen ? null : i)}
              >
                <span className={styles.question}>{item.q}</span>
                <span
                  className={styles.indicator}
                  data-open={isOpen}
                  aria-hidden="true"
                >
                  <Icon name="plus" size={20} />
                </span>
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={btnId}
              className={styles.panel}
              data-open={isOpen}
            >
              <div className={styles.panelInner}>
                <p className={styles.answer}>{item.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
