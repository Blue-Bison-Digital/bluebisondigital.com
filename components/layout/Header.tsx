"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Logo } from "@/components/brand/Logo";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/site.config";
import styles from "./Header.module.css";

const NAV_LINKS = [
  { label: "What we automate", href: "/#what-we-automate" },
  { label: "How it works", href: "/#how-it-works" },
  { label: "About", href: "/about" },
];

/** Routes whose first section is a dark hero/band the header sits transparent over. */
const DARK_HERO_ROUTES = new Set(["/", "/about", "/newsletter", "/roadmap"]);

/**
 * Sticky nav (PLAN.md 4.2). Transparent over a dark hero with white links and a
 * ghost Book-a-call button (so the hero's blue CTA stays the screen's single
 * blue element); turns solid white with a hairline border and a navy primary
 * button once the hero's sentinel scrolls under it. Mobile: hamburger opening a
 * full-screen navy overlay.
 */
export function Header() {
  const pathname = usePathname();
  const startsOverHero = DARK_HERO_ROUTES.has(pathname);
  const [solid, setSolid] = useState(!startsOverHero);
  const [menuOpen, setMenuOpen] = useState(false);

  // Turn solid once the hero sentinel passes under the header.
  useEffect(() => {
    const sentinel = document.querySelector("[data-header-sentinel]");
    if (!sentinel) {
      setSolid(true);
      return;
    }
    setSolid(false);
    const observer = new IntersectionObserver(
      ([entry]) => setSolid(!entry.isIntersecting),
      { rootMargin: `-${72}px 0px 0px 0px`, threshold: 0 }
    );
    observer.observe(sentinel);
    return () => observer.disconnect();
  }, [pathname]);

  // Close the mobile menu on route change.
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  // Lock scroll + close on Escape while the overlay is open.
  useEffect(() => {
    if (!menuOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [menuOpen]);

  // Content is light (white logo/links) over a dark surface whenever the header
  // is transparent over a hero OR the navy mobile overlay is open.
  const onDark = menuOpen || !solid;
  const headerSolid = solid && !menuOpen;

  return (
    <header
      className={[styles.header, headerSolid ? styles.solid : styles.transparent]
        .filter(Boolean)
        .join(" ")}
    >
      <div className={styles.bar}>
        <Logo onDark={onDark} />

        <nav className={styles.desktopNav} aria-label="Primary">
          <ul className={styles.navList}>
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link className={styles.navLink} href={link.href}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <Button
            href={siteConfig.CALENDLY_URL}
            external
            variant={onDark ? "secondary" : "primary"}
            surface={onDark ? "dark" : "light"}
            className={styles.navCta}
          >
            Book a call
          </Button>
        </nav>

        <button
          type="button"
          className={styles.hamburger}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span className={styles.hamburgerBox} data-open={menuOpen}>
            <span />
            <span />
            <span />
          </span>
        </button>
      </div>

      {/* Mobile full-screen navy overlay */}
      <div
        id="mobile-menu"
        className={styles.overlay}
        data-open={menuOpen}
        hidden={!menuOpen}
      >
        <nav className={styles.overlayNav} aria-label="Mobile">
          <ul className={styles.overlayList}>
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  className={styles.overlayLink}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <Button
            href={siteConfig.CALENDLY_URL}
            external
            variant="primary"
            surface="dark"
            fullWidth
          >
            Book a call
          </Button>
        </nav>
      </div>
    </header>
  );
}
