/**
 * site.config.ts
 *
 * Single source of truth for external URLs, integration endpoints, social
 * links, and feature flags. Every hidden section and route reads its
 * on/off state from `features` below, so turning on social proof (or the
 * future content hub) is a one-line change here, not a refactor.
 *
 * All URL values are PLACEHOLDERS at build time. Jacob replaces them before
 * launch (see "Open items for Jacob" in PLAN.md, section 4.3).
 */

export const siteConfig = {
  name: "Blue Bison Digital",
  descriptor: "Your AI automation partner.",
  url: "https://bluebisondigital.com",

  /** Free 30-minute discovery call. Opened in a new tab from every "Book a call" CTA. */
  CALENDLY_URL:
    "https://calendly.com/jacob-bluebisondigital/blue-bison-digital-discovery",

  /** Stripe payment link for the $1,000 Automation Roadmap. */
  STRIPE_ROADMAP_URL: "https://book.stripe.com/3cI4gA4So5TN1UD3nT5sA01",

  /**
   * Calendly link sent in the post-payment Kit confirmation email for the
   * Roadmap session. Kept separate from CALENDLY_URL so the free discovery
   * call and the paid Roadmap session can be managed independently. This URL
   * lives in the Kit email, not on the site, but it belongs here so the whole
   * booking surface is documented in one place.
   */
  ROADMAP_CALENDLY_URL:
    "https://calendly.com/jacob-bluebisondigital/automation-roadmap",

  /**
   * Newsletter signup. No backend at launch: the form posts to Kit's hosted
   * form endpoint. `NEWSLETTER_ENDPOINT` is the form action URL; the whole
   * NewsletterForm component injects this target from config.
   */
  NEWSLETTER_ENDPOINT: "https://app.kit.com/forms/9413610/subscriptions",

  /** Contact + social. */
  EMAIL: "jacob@bluebisondigital.com",
  LINKEDIN_URL: "https://www.linkedin.com/in/jacobmc/",

  /**
   * Analytics. Two tools, deliberately, because they answer different
   * questions: GA4 covers acquisition (channels, and the Google Search Console
   * link) and PostHog covers behavior (session replay, funnels). At this
   * traffic volume the replay is the part that actually informs anything.
   *
   * The GA4 measurement ID is public, fixed, and identical in every
   * environment, so it belongs here. PostHog's project key and host are read
   * from the environment instead so preview and production can point at
   * different projects: see .env.example.
   */
  GA4_MEASUREMENT_ID: "G-C72RKMJ0S5",

  /**
   * Feature flags. Hidden sections and routes ship as real, complete
   * components behind these booleans — never commented-out code. Flip a flag
   * to true when the underlying content (real logos, real case studies, real
   * quotes, published notes) exists.
   */
  features: {
    logoStrip: false,
    caseStudies: false,
    testimonials: false,
    notes: false,
    work: false,
  },
} as const;

export type Features = keyof typeof siteConfig.features;

/** Convenience guard used by hidden sections and stubbed routes. */
export function isFeatureEnabled(feature: Features): boolean {
  return siteConfig.features[feature];
}
