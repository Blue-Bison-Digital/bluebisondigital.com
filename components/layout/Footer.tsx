import Link from "next/link";
import { Logo } from "@/components/brand/Logo";
import { siteConfig } from "@/site.config";
import styles from "./Footer.module.css";

const SITE_LINKS = [
  { label: "What we automate", href: "/#what-we-automate" },
  { label: "How it works", href: "/#how-it-works" },
  { label: "About", href: "/about" },
  { label: "Newsletter", href: "/newsletter" },
];

/**
 * Navy footer, no topo texture (texture stays reserved for hero + CTA band).
 * Orientation and legitimacy only; nothing here is load-bearing for conversion
 * (PLAN.md 2.13 / 4.2).
 */
export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.top}>
          <div className={styles.brand}>
            <Logo onDark />
            <p className={styles.descriptor}>{siteConfig.descriptor}</p>
          </div>

          <div className={styles.columns}>
            <nav className={styles.column} aria-label="Site">
              <p className={styles.colLabel}>Site</p>
              <ul className={styles.colList}>
                {SITE_LINKS.map((link) => (
                  <li key={link.href}>
                    <Link className={styles.link} href={link.href}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <nav className={styles.column} aria-label="Contact">
              <p className={styles.colLabel}>Contact</p>
              <ul className={styles.colList}>
                <li>
                  <a className={styles.link} href={`mailto:${siteConfig.EMAIL}`}>
                    {siteConfig.EMAIL}
                  </a>
                </li>
                <li>
                  <a
                    className={styles.link}
                    href={siteConfig.LINKEDIN_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LinkedIn
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        <div className={styles.legal}>
          <p>&copy; 2026 Blue Bison Digital. All rights reserved.</p>
          <Link className={styles.legalLink} href="/privacy">
            Privacy
          </Link>
        </div>
      </div>
    </footer>
  );
}
