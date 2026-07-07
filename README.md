# Blue Bison Digital

Marketing site for Blue Bison Digital — an AI automation agency for small business.

Next.js (App Router) + TypeScript, deployed on Vercel. No backend at launch.

## Getting started

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build
```

## Project structure

- `app/(marketing)/` — launch pages: home, `/about`, `/newsletter`, `/roadmap`, `/privacy`.
  `/notes` and `/work` segments are reserved and return 404 until their feature flags are on.
- `app/` — root layout, fonts, global styles, `not-found`, favicon (`icon.svg`), OG image.
- `components/` — `layout/`, `ui/`, `sections/` (incl. `sections/hidden/`), `brand/`, `icons/`, `motion/`.
- `site.config.ts` — **single source of truth** for external URLs and feature flags. Every hidden
  section and reserved route reads its on/off state from `features` here; flipping social proof on
  is a one-line change.
- `scripts/generate-topo.mjs` — regenerates the signature topographic textures
  (`public/topo-a.svg`, `public/topo-b.svg`). Edit the script and re-run; don't hand-edit the SVGs.
- `PLAN.md` — the full website plan and design spec this build follows.

## Configuration

All external endpoints live in `site.config.ts` (Calendly, Stripe, Kit newsletter, LinkedIn, email).
The newsletter form posts directly to Kit's hosted form endpoint — no backend required.

## Feature flags

```ts
features: { logoStrip, caseStudies, testimonials, notes, work }
```

Hidden sections ship as complete components behind these flags. Turn one on when the real content
(client logos, case studies, testimonials, published notes) exists.

## Deployment

Deployed on Vercel. Pushes to `main` trigger production deployments via the Git integration.
