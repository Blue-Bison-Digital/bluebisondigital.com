"use client";

import { useEffect, useRef, useState, type ElementType, type ReactNode } from "react";

/**
 * The site's one motion pattern (PLAN.md 4.0): fade-up 12px over 300ms,
 * triggered once when the element scrolls into view, with an optional stagger
 * delay. Visual behavior lives in globals.css ([data-reveal]); this component
 * only toggles [data-revealed] via IntersectionObserver.
 *
 * Reduced motion is handled in CSS (content simply appears), so no JS branch
 * is needed for it here — but we still reveal on mount as a no-JS/SSR-safe
 * fallback if the observer never fires.
 */
export function Reveal({
  as: Tag = "div",
  delay = 0,
  className,
  children,
}: {
  as?: ElementType;
  /** Stagger delay in ms (60–80ms per item within a group). */
  delay?: number;
  className?: string;
  children: ReactNode;
}) {
  const ref = useRef<HTMLElement | null>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || revealed) return;

    if (!("IntersectionObserver" in window)) {
      setRevealed(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setRevealed(true);
            observer.disconnect();
          }
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.05 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [revealed]);

  return (
    <Tag
      ref={ref}
      data-reveal=""
      data-revealed={revealed ? "true" : "false"}
      style={delay ? ({ "--reveal-delay": `${delay}ms` } as React.CSSProperties) : undefined}
      className={className}
    >
      {children}
    </Tag>
  );
}
