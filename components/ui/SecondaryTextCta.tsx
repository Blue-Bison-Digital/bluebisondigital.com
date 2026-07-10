import Link from "next/link";
import type { ReactNode } from "react";
import styles from "./SecondaryTextCta.module.css";

/**
 * Plain-text link with a trailing arrow (PLAN.md 4.3). Used beneath primary
 * CTAs on the hero, final CTA band, and roadmap bottom. Inherits section mode:
 *   dark  — Inter 14px, white 60%, hover 90% (an afterthought for insiders)
 *   light — navy text, blue underline on hover
 *
 * Pass the label WITHOUT a trailing arrow — the component renders its own arrow
 * glyph that nudges right on hover.
 */
export function SecondaryTextCta({
  href,
  external = false,
  onDark = false,
  className,
  children,
}: {
  href: string;
  external?: boolean;
  onDark?: boolean;
  className?: string;
  children: ReactNode;
}) {
  const classes = [styles.link, onDark ? styles.dark : styles.light, className]
    .filter(Boolean)
    .join(" ");

  const content = (
    <>
      {children}
      <span className={styles.arrow} aria-hidden="true">
        &rarr;
      </span>
    </>
  );

  if (external) {
    return (
      <a className={classes} href={href} target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    );
  }
  return (
    <Link className={classes} href={href}>
      {content}
    </Link>
  );
}
