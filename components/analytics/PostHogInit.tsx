"use client";

import { useEffect } from "react";

/**
 * Initializes PostHog on the client.
 *
 * `capture_pageview: "history_change"` lets the SDK pick up App Router
 * client-side navigations on its own, so this needs no route-change hook and
 * no Suspense boundary around useSearchParams.
 *
 * Session replay masks every input value by default (`maskAllInputs`), which
 * covers the newsletter email field. Rendered text is NOT masked by default,
 * which is fine here because nothing on the site renders anything sensitive.
 * To exclude an element from recording later, give it the `ph-no-capture`
 * class; to mask rendered text instead, use `ph-mask`.
 *
 * Both config values come from the environment so preview and production can
 * point at different PostHog projects. With no key set the component is inert,
 * which is what local development should do.
 *
 * posthog-js is imported dynamically on purpose. A static import puts its
 * ~312 KB (raw) chunk in the first-load path of every page, which this site
 * cannot afford against a Lighthouse 95+ budget. Loading it after hydration
 * costs nothing that matters here: the pageview still fires, just a tick later.
 */

// Module-level rather than a ref: reactStrictMode is on, so the effect below
// runs twice on mount in development and posthog.init is not idempotent.
let initialized = false;

export function PostHogInit() {
  useEffect(() => {
    if (initialized) return;

    const key = process.env.NEXT_PUBLIC_POSTHOG_KEY;
    if (!key) return;

    initialized = true;
    void import("posthog-js").then(({ default: posthog }) => {
      posthog.init(key, {
        api_host:
          process.env.NEXT_PUBLIC_POSTHOG_HOST ?? "https://us.i.posthog.com",
        person_profiles: "identified_only",
        capture_pageview: "history_change",
        capture_pageleave: true,
      });
    });
  }, []);

  return null;
}
