import Link from "next/link";
import styles from "./Logo.module.css";

/**
 * BBD wordmark + bison mark — the real brand lockup.
 *
 * Two recolored variants of the official logo (blue-bison-digital-logo-black.svg):
 *   logo-light.svg — navy wordmark + blue bison, for solid/white surfaces
 *   logo-dark.svg  — white wordmark + blue bison, for navy surfaces
 * The bison keeps its brand blue in both; only the wordmark recolors.
 */
export function Logo({
  onDark = false,
  className,
}: {
  onDark?: boolean;
  className?: string;
}) {
  return (
    <Link
      href="/"
      className={[styles.logo, className].filter(Boolean).join(" ")}
      aria-label="Blue Bison Digital"
    >
      {/* eslint-disable-next-line @next/next/no-img-element -- static inline-recolored brand SVG */}
      <img
        className={styles.img}
        src={onDark ? "/logo-dark.svg" : "/logo-light.svg"}
        alt="Blue Bison Digital"
        width={933}
        height={111}
        draggable={false}
      />
    </Link>
  );
}
