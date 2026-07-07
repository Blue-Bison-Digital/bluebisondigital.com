import styles from "./Icon.module.css";

/**
 * Line-icon set (PLAN.md 4.3): 1.5px stroke, navy base (currentColor) with a
 * single blue accent detail per icon. Six automation-card icons plus utility
 * glyphs (check, plus, ring bullet, external link).
 */
export type IconName =
  | "leadResponse"
  | "followUp"
  | "intake"
  | "scheduling"
  | "paperwork"
  | "repeatQuestions"
  | "check"
  | "plus"
  | "ringBullet"
  | "externalLink";

export function Icon({
  name,
  className,
  size = 24,
}: {
  name: IconName;
  className?: string;
  size?: number;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      className={[styles.icon, className].filter(Boolean).join(" ")}
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {glyph(name)}
    </svg>
  );
}

function glyph(name: IconName) {
  const accent = styles.accent;
  switch (name) {
    // Lead response — chat bubble + lightning (answered in minutes).
    case "leadResponse":
      return (
        <>
          <path d="M4 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2h-7l-4 3v-3H6a2 2 0 0 1-2-2z" />
          <path className={accent} d="M13 6.5l-3 4h2.6l-2 3.5" />
        </>
      );
    // Follow-up sequences — envelope + blue flap (nothing slips).
    case "followUp":
      return (
        <>
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path className={accent} d="M3.5 7l8.5 6 8.5-6" />
        </>
      );
    // Customer intake — clipboard + blue check (day one is handled).
    case "intake":
      return (
        <>
          <path d="M7 4h10a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1z" />
          <path d="M9 4a1.5 1.5 0 0 1 1.5-1.5h3A1.5 1.5 0 0 1 15 4v1H9z" />
          <path className={accent} d="M9 13l2.3 2.3L16 10.5" />
        </>
      );
    // Scheduling & reminders — calendar + blue marked day.
    case "scheduling":
      return (
        <>
          <rect x="4" y="5" width="16" height="15" rx="2" />
          <path d="M4 9h16M8 3v4M16 3v4" />
          <circle className={styles.accentFill} cx="15" cy="14.5" r="1.6" />
        </>
      );
    // Quotes, invoices & paperwork — document + blue folded corner.
    case "paperwork":
      return (
        <>
          <path d="M7 3h7l4 4v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z" />
          <path d="M8.5 12h7M8.5 15h7M8.5 18h4" />
          <path className={accent} d="M14 3v4h4" />
        </>
      );
    // Repeat questions — chat bubble + blue dots (answered instantly).
    case "repeatQuestions":
      return (
        <>
          <path d="M4 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2h-7l-4 3v-3H6a2 2 0 0 1-2-2z" />
          <g className={styles.accentFill}>
            <circle cx="9" cy="9.5" r="1" />
            <circle cx="12" cy="9.5" r="1" />
            <circle cx="15" cy="9.5" r="1" />
          </g>
        </>
      );
    // Utility ---------------------------------------------------------------
    case "check":
      return <path d="M5 12.5l4 4L19 7" />;
    case "plus":
      return <path d="M12 6v12M6 12h12" />;
    case "ringBullet":
      // Concentric topo ring bullet (blue).
      return (
        <g className={accent}>
          <circle cx="12" cy="12" r="6.5" />
          <circle cx="12" cy="12" r="2.5" />
        </g>
      );
    case "externalLink":
      return (
        <>
          <path d="M14 4h6v6M20 4l-8 8" />
          <path d="M18 13v5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h5" />
        </>
      );
  }
}
