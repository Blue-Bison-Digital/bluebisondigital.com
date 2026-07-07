import Link from "next/link";
import type { ReactNode } from "react";
import styles from "./Button.module.css";

type Variant = "primary" | "secondary";
type Surface = "light" | "dark";

type CommonProps = {
  variant?: Variant;
  surface?: Surface;
  fullWidth?: boolean;
  className?: string;
  children: ReactNode;
};

/**
 * Context-aware button (PLAN.md 4.0 Buttons). Renders as a Next link (internal),
 * an external anchor (new tab, e.g. Calendly / Stripe), or a native button.
 *
 *   primary + light -> navy fill / white text
 *   primary + dark  -> blue fill / navy text (the one blue-filled element/screen)
 *   secondary+ light -> navy outline
 *   secondary+ dark  -> navy-mid ghost outline
 */
export function Button({
  variant = "primary",
  surface = "light",
  fullWidth,
  className,
  children,
  ...rest
}: CommonProps &
  (
    | { href: string; external?: boolean; onClick?: never; type?: never }
    | { href?: never; external?: never; onClick?: () => void; type?: "button" | "submit" }
  )) {
  const classes = [
    styles.btn,
    styles[variant],
    styles[surface],
    fullWidth ? styles.fullWidth : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  if ("href" in rest && rest.href) {
    if (rest.external) {
      return (
        <a
          className={classes}
          href={rest.href}
          target="_blank"
          rel="noopener noreferrer"
        >
          {children}
        </a>
      );
    }
    return (
      <Link className={classes} href={rest.href}>
        {children}
      </Link>
    );
  }

  return (
    <button
      className={classes}
      type={("type" in rest && rest.type) || "button"}
      onClick={"onClick" in rest ? rest.onClick : undefined}
    >
      {children}
    </button>
  );
}
