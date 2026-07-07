# Blue Bison Digital — Website Plan & Design Spec

Planning and design document for the BBD marketing site. Handoff target: a separate coding session building on Next.js (App Router), deployed to Vercel. No backend at launch.

This document contains five deliverables in sequence:

1. Site Map
2. Section Inventory (Homepage)
3. All Copy
4. Design Brief + Component Inventory
5. Roadmap Page (`/roadmap`) — full treatment, added in the July 6 update

**Opinionated calls made in this plan (and why):**

- **No separate Services page.** BBD sells one service. Splitting "what we automate" onto its own page would dilute the homepage's single job (book a call) and give visitors a place to wander instead of convert. Services live as a section on the homepage. If SEO demands dedicated automation-topic pages later, they belong in the future content hub, not as a launch page.
- **Added an FAQ section** to the homepage. The primary audience is tech-curious but not technical. Their objections ("do I need to be technical?", "what does it cost?", "what if it breaks?") are predictable and answerable. Handling them on-page removes the last excuse not to book.
- **One newsletter placement**, as a light band directly above the footer, plus a compact link in the footer itself. Scattering signup forms through the page competes with the Book a Call CTA. The rule: one conversion action per screen.
- **The route metaphor.** The topo texture is the signature element. To make it structural rather than decorative, the "How it works" process steps are styled as waypoints on a mapped route (a thin dashed trail line connecting numbered markers). This is the one place the terrain aesthetic becomes a layout device instead of a background. Everywhere else it stays texture.
- **Two facts in the copy need Jacob's confirmation** (marked inline with `[CONFIRM]`): the years-of-experience claim in the founder bio, and the client-slots-per-quarter framing. Everything else is final copy.

---

## 1. SITE MAP

Lean by design. Every page earns its place by serving the one job: get the right person to book a discovery call.

| Page | Slug | Job | Status |
|---|---|---|---|
| Home | `/` | Convince a small business owner that BBD can take real work off their plate, and get them to book a call. | **Launch** |
| About | `/about` | Let a nearly-convinced visitor confirm there's a credible, likable human behind the site. Second-strongest conversion page. | **Launch** |
| Newsletter | `/newsletter` | Standalone signup target for social bios, email signatures, and link shares. Captures the not-ready-to-buy audience. | **Launch** |
| Automation Roadmap | `/roadmap` | Warm-traffic sales page for the $1,000 Automation Roadmap. Direct buy path for people who are ready to skip the discovery call. Not in main nav; linked from the homepage and emails. | **Launch** |
| Privacy Policy | `/privacy` | Legal requirement for the newsletter (email capture). Plain, honest, short. | **Launch** |
| 404 | (catch-all) | Recover lost visitors with brand personality and a route home. | **Launch** |
| Case Studies (index) | `/work` | Prove outcomes with real client results. | **Future / hidden** |
| Case Study (detail) | `/work/[slug]` | Tell one client story: problem, build, measurable result. | **Future / hidden** |
| Content Hub / Blog | `/notes` | Practical AI automation writing. Feeds the newsletter, earns search traffic. | **Future / hidden** |
| Post (detail) | `/notes/[slug]` | Individual article. | **Future / hidden** |

**Not pages:**

- **Book a Call** is an external Calendly link (placeholder `https://calendly.com/bluebisondigital/discovery`), opened in a new tab from every CTA. No on-site booking page at launch.
- **Contact** does not exist. By design. The two conversion actions are Book a Call and the newsletter. The footer lists `jacob@bluebisondigital.com` as a plain mailto for anyone who genuinely needs email.

**Routing architecture note for the build:** keep marketing pages in a `(marketing)` route group and reserve `/notes` and `/work` route segments now, even though they ship hidden. Hidden sections and pages should hang off a single feature-flag config (see Component Inventory) so turning on social proof is a one-line change, not a refactor.

---

## 2. SECTION INVENTORY (Homepage)

In page order. Mode flow: dark → light → light → light → (light) → light → (light) → light → dark → light → footer. The page opens dark, works in the light, and returns to dark exactly once for the closing CTA. One conversion action per screen throughout.

### 2.1 Header / Navigation (persistent)
- **Job:** Keep Book a Call one click away at all times without competing with page content.
- **Contains:** BBD wordmark + bison mark, three nav links (What we automate, How it works, About), primary Book a Call button.
- **Design notes:** Transparent over the dark hero, transitions to solid white with a hairline border on scroll. Compact. No mega-menu, no dropdowns.

### 2.2 Hero
- **Job:** In five seconds: what BBD does, who it's for, and the one action to take. Set the visual identity (navy + topo texture) instantly. Also quietly route warm traffic to `/roadmap` without diluting the primary CTA.
- **Contains:** Eyebrow, H1 (primary tagline), subheadline, primary CTA (Book a call) with trust microcopy, secondary ghost CTA (See how it works, anchor-scrolls to process section), and a tertiary plain-text link to `/roadmap` beneath the microcopy for visitors who are already sold.
- **Design notes:** Dark navy, topo texture at its most present (still subtle). No hero image, no screenshot mockup, no floating UI cards. The type is the hero. The Roadmap link is the quietest element on the screen: Inter 14px, white at 60% opacity, lifting to 90% on hover. A text line, never a button.

### 2.3 Client Logo Strip — **HIDDEN BY DEFAULT**
- **Job:** Instant borrowed credibility the moment real clients allow logo use.
- **Contains:** Label line ("Automating the busywork for teams like…" or similar), 4–6 grayscale logos.
- **Design notes:** Sits directly under the hero on the first light surface. Monochrome logos (gray #6B7280 tint), small, evenly spaced. When hidden, the Problem section moves up and nothing else changes.

### 2.4 The Problem
- **Job:** Make the visitor feel seen. Name the specific busywork pains so the reader says "that's my week." No AI talk yet.
- **Contains:** Eyebrow, H2, three pain vignettes (short titled blurbs), one closing line that pivots from pain to system.
- **Design notes:** First light section (white). Three-column row of text blocks, no cards, no icons doing heavy lifting. The pivot line sits alone below the columns, set larger.

### 2.5 What We Automate
- **Job:** Make "AI automation" concrete. Show the actual work BBD takes off a plate, described as outcomes.
- **Contains:** Eyebrow, H2, supporting line, six automation cards (title + 2-sentence outcome description), one closing line pointing at the discovery call for anything not listed.
- **Design notes:** Pale blue `#F4F6FB` section background, white cards. 3×2 card grid on desktop. Each card gets a small line-style icon. This is the scannable heart of the page.

### 2.6 How It Works (Process)
- **Job:** De-risk the engagement. Show a short, honest path from "call" to "running automation." This is a launch-time credibility workhorse standing in for case studies.
- **Contains:** Eyebrow, H2, four numbered steps (name + 2–3 sentence description), each with a concrete deliverable.
- **Design notes:** White background. **The route treatment:** steps laid out as waypoints along a thin dashed trail line, numbered markers styled like map waypoints. Numbering is justified here because the process genuinely is a sequence. This is the only light-section appearance of the terrain metaphor.

### 2.7 Case Study Cards — **HIDDEN BY DEFAULT**
- **Job:** Prove outcomes with numbers once real results exist.
- **Contains:** Eyebrow, H2, 2–3 cards (client/industry label, one-line problem, headline metric, one-line result, link to `/work/[slug]`).
- **Design notes:** Pale blue section. Cards lead with the metric set in Space Grotesk display size. Built to work with 2 or 3 cards without layout changes.

### 2.8 Founder / Who You're Working With
- **Job:** Convert "solo agency" from a risk into the pitch: direct access, no account managers, one accountable person. Launch-time substitute for testimonials.
- **Contains:** Eyebrow, H2, founder photo, 2-paragraph bio, 3 short proof points, inline link to `/about`.
- **Design notes:** White background, two columns: photo left (~40%), text right. The photo should be a real photo of Jacob, not an illustration or avatar.

### 2.9 Testimonial Block — **HIDDEN BY DEFAULT**
- **Job:** Third-party voice confirming what the founder section claims.
- **Contains:** One featured quote (or two side-by-side), attribution with name, role, company.
- **Design notes:** Pale blue band. Quote set large in Space Grotesk 500. No star ratings, no carousel. Built to accept one or two quotes via the same component.

### 2.10 FAQ
- **Job:** Clear the predictable objections of a non-technical buyer so nothing stands between them and the CTA below.
- **Contains:** Eyebrow, H2, six questions in an accordion.
- **Design notes:** White background, single centered column (~720px). Accordion with hairline dividers, plus/minus indicators. First item can default open.

### 2.11 Availability + Final CTA (dark band)
- **Job:** Close. Restate the offer, frame selectivity honestly, and make booking feel low-risk. The page's second and final dark moment. Give warm visitors who reached the bottom already convinced a direct path to `/roadmap`.
- **Contains:** Eyebrow (availability line), H2, one supporting sentence, primary CTA with value-promise microcopy, and the same tertiary plain-text Roadmap link used in the hero, beneath the microcopy.
- **Design notes:** Full-width navy with topo texture (second and last appearance). Generous vertical padding. Nothing else competes on this screen. The Roadmap link gets the identical quiet treatment as the hero: Inter 14px, white 60%, hover 90%, text only.

### 2.12 Newsletter
- **Job:** Catch the curious-but-not-ready. Position as practical signal, not hype.
- **Contains:** H3-scale headline, one supporting line, single email field + button, anti-spam microcopy, inline confirmation state.
- **Design notes:** Pale blue band, compact (roughly half the vertical weight of other sections). Deliberately placed after the final CTA: it catches only the people who scrolled past booking.

### 2.13 Footer
- **Job:** Orientation and legitimacy. Nothing here should be load-bearing for conversion.
- **Contains:** Wordmark + descriptor line, nav links, mailto email, LinkedIn link, newsletter link, privacy link, copyright.
- **Design notes:** Navy, **no topo texture** (texture is reserved for hero and CTA band so it stays special). Single-row layout on desktop, stacked on mobile.

---

## 3. ALL COPY

Final copy unless marked `[CONFIRM: …]`, which flags a factual claim only Jacob can verify. Em dashes in this document appear only in its own structural labels (e.g. "Card 1 — Lead response"); the copy itself contains none, and none should be introduced in the build. Two hidden sections include clearly marked example content to be replaced with real client material before the section is enabled. Voice check applied throughout: outcomes over technology, plain verbs, no em dashes, short sentences, active voice.

### 3.1 Navigation

- Logo alt text: `Blue Bison Digital`
- Links: `What we automate` · `How it works` · `About`
- Button: `Book a call`

### 3.2 Hero

- **Eyebrow:** `YOUR AI AUTOMATION PARTNER`
- **H1:** `Automate what's slowing you down.`
- **Subheadline:** `Blue Bison Digital builds the automations that handle the work your team shouldn't have to. Missed leads, dropped follow-ups, copy-paste busywork. Set up once. Working every day.`
- **Primary CTA:** `Book a call`
- **CTA microcopy:** `Free 30-minute discovery call. No pitch, no obligation.`
- **Secondary CTA (ghost, anchors to How It Works):** `See how it works`
- **Tertiary text link (to `/roadmap`, below the microcopy):** `Already know you want this? Start with the Automation Roadmap →`

### 3.3 Client Logo Strip — HIDDEN

- **Label:** `Automating the busywork for teams like`
- Logos only. No other copy. (Alt text per logo: company name.)

### 3.4 The Problem

- **Eyebrow:** `THE PROBLEM`
- **H2:** `The work that fills your week isn't the work that grows your business.`

**Vignette 1**
- Title: `Leads go cold overnight.`
- Body: `Someone asks for a quote at 9pm. By the time anyone replies the next afternoon, they've hired whoever answered first.`

**Vignette 2**
- Title: `Follow-ups slip through.`
- Body: `You meant to check back on that estimate. Then the week happened. Every dropped thread is a sale you already did the work to win.`

**Vignette 3**
- Title: `You're the copy-paste department.`
- Body: `The same customer name, typed into the CRM, the invoice, the calendar and a spreadsheet. Four systems, and none of them talk.`

- **Pivot line (set large, below the vignettes):** `None of this needs your judgment. It needs a system that never forgets and never sleeps. That's what we build.`

### 3.5 What We Automate

- **Eyebrow:** `WHAT WE AUTOMATE`
- **H2:** `Real work, off your plate.`
- **Supporting line:** `Every build starts with one workflow that's costing you time or money. Here's where most businesses start.`

**Card 1 — Lead response**
`Answer every inquiry in minutes, at any hour. Hot leads get routed straight to your phone instead of sitting in an inbox.`

**Card 2 — Follow-up sequences**
`Quotes and estimates get chased until someone answers. Nothing sits, nothing gets forgotten, and you stop being the person who has to remember.`

**Card 3 — Customer intake**
`The moment a client says yes, the welcome email, paperwork and kickoff scheduling go out. Day one feels professional instead of chaotic.`

**Card 4 — Scheduling and reminders**
`Appointments book themselves, confirm themselves and remind the customer the day before. No-shows drop and your calendar stops leaking.`

**Card 5 — Quotes, invoices and paperwork**
`The documents you assemble by hand today get generated, sent and filed without you. Same output, none of your evening.`

**Card 6 — Repeat questions**
`The questions you answer ten times a week get answered instantly, correctly, in your voice. Your inbox holds only what actually needs you.`

- **Closing line:** `Don't see your bottleneck here? That's what the discovery call is for. If it can't be automated well, I'll tell you.`

### 3.6 How It Works

- **Eyebrow:** `HOW IT WORKS`
- **H2:** `From first call to running automation, in four steps.`

**Step 1 — Discovery call**
`Thirty minutes on where your time actually goes. You talk, I listen, and we find the workflow worth fixing first. If automation isn't the right answer for you, I'll say so on the call.`

**Step 2 — Roadmap**
`I map the workflow end to end and come back with a plan: what gets automated, what it should save you, and a fixed price. You decide with the full picture in front of you.`

**Step 3 — Build and test**
`I build the automation and run it against your real scenarios, with you watching. We adjust until it fits the way your business actually works.`

**Step 4 — Launch and support**
`It goes live in your business. I monitor it, tune it, and stay reachable. When your process changes, the automation changes with it.`

### 3.7 Case Study Cards — HIDDEN

- **Eyebrow:** `RESULTS`
- **H2:** `What this looks like in a real business.`
- **Card structure** (each card): industry label (eyebrow style) → headline metric (display type) → one-line problem → one-line result → link `Read the full story`.

Example card content, **replace with real client data before enabling**:
> Label: `HOME SERVICES` · Metric: `11 hrs/week back` · Problem: `Every estimate was written and chased by hand.` · Result: `Estimates now go out same-day and follow up on their own.`

### 3.8 Founder

- **Eyebrow:** `WHO YOU'RE WORKING WITH`
- **H2:** `You work with me, not an account manager.`
- **Body, paragraph 1:** `I'm Jacob McKinney, the founder of Blue Bison Digital. I've spent [CONFIRM: N years] building software and internal systems for small businesses [CONFIRM: industry examples, e.g. "from home-services companies to professional practices"], and the same pattern kept showing up: good businesses losing hours every week to work a system should be handling.`
- **Body, paragraph 2:** `When you hire BBD, I'm the one on the call, the one building your automation, and the one you message when something needs to change. No handoffs. No junior team you've never met. One person who knows your business and is accountable for the result.`
- **Proof points (3, set as a short list):**
  - `One point of contact, from first call to launch`
  - `Fixed prices, agreed before the build starts`
  - `Plain-English everything. If you can't explain what your automation does, I haven't finished the job.`
- **Link:** `More about how I work →` (to `/about`)

### 3.9 Testimonial Block — HIDDEN

- **Eyebrow:** `WHAT CLIENTS SAY`
- **Structure:** quote (display type) → name → role, company.

Example content, **replace with a real quote before enabling**:
> `"I stopped checking my inbox at night. That alone was worth it."` · `Jane Doe` · `Owner, Example Plumbing Co.`

### 3.10 FAQ

- **Eyebrow:** `COMMON QUESTIONS`
- **H2:** `Answers before you ask.`

**Q1: `Do I need to be technical?`**
`No. You need to know your business. The technical side is my job. Everything I build ships with a plain-English walkthrough, so you and your team know exactly what it does and how to use it.`

**Q2: `What does this cost?`**
`Every project gets a fixed price after the discovery call and roadmap. You'll know the full cost before anything gets built. No hourly meters, no surprise invoices.`

**Q3: `Do I have to switch tools?`**
`Almost never. Automations get built around the email, calendar, CRM and accounting tools you already use. The goal is less software in your life, not more.`

**Q4: `How long until something is running?`**
`Most first automations launch in weeks, not months. The roadmap gives you a real timeline for your specific build before you commit.`

**Q5: `What happens if it breaks?`**
`I monitor every automation I launch, and support is part of the engagement. If something fails, it gets fixed. You won't be left holding a system you can't operate.`

**Q6: `Is this safe to use with customer data?`**
`Automations only touch the data they need, and they run on established platforms with the same security as the tools you use today. Judgment calls stay with people. The automation handles the busywork; you keep the decisions.`

### 3.11 Availability + Final CTA

- **Eyebrow:** `TAKING ON NEW CLIENTS THIS QUARTER` [CONFIRM: keep generic, or state a real number, e.g. "THREE OPENINGS THIS QUARTER". A real number is stronger. Only use one that's true.]
- **H2:** `Find your first automation.`
- **Supporting line:** `I take on a small number of clients at a time so every build gets real attention. The discovery call is how we find out if you should be one of them.`
- **CTA:** `Book a call`
- **CTA microcopy:** `Thirty minutes, free. You'll leave with at least one automation idea, whether we work together or not.`
- **Tertiary text link (to `/roadmap`, below the microcopy):** `Already know you want this? Start with the Automation Roadmap →`

### 3.12 Newsletter (band + `/newsletter` page share this copy)

- **Headline:** `Practical AI, no hype.`
- **Supporting line:** `Short, occasional emails on the automations that are actually working for small businesses. What to try, what to skip, and what it really costs.`
- **Field placeholder:** `you@yourbusiness.com`
- **Button:** `Subscribe`
- **Microcopy:** `No spam, no daily drip. Unsubscribe anytime.`
- **Confirmation state (replaces the form on success):** `You're in. Watch your inbox for a confirmation email.`
- **Error state:** `That email didn't go through. Check the address and try again.`

### 3.13 Footer

- **Wordmark line:** `Blue Bison Digital`
- **Descriptor:** `Your AI automation partner.`
- **Column: Site** — `What we automate` · `How it works` · `About` · `Newsletter`
- **Column: Contact** — `jacob@bluebisondigital.com` (mailto) · `LinkedIn` (placeholder URL)
- **Legal line:** `© 2026 Blue Bison Digital. All rights reserved.` · `Privacy`

### 3.14 About page (`/about`)

- **Meta and hero below in 3.17.**

**Page hero (short dark band)**
- Eyebrow: `ABOUT BBD`
- H1: `A one-person agency, on purpose.`
- Subheadline: `Blue Bison Digital is Jacob McKinney. That's the whole org chart, and that's the point.`

**Section: The story**
- H2: `Why BBD exists`
- Body, paragraph 1: `I've spent [CONFIRM: N years] building software and internal systems for small businesses [CONFIRM: brief real history, 1 sentence]. Over and over, I watched owners buy tools that promised everything and delivered a login. The software wasn't the problem. Nobody was connecting it to the actual work.`
- Body, paragraph 2: `Blue Bison Digital exists to do that connecting. Find the workflow that hurts. Automate it properly. Prove it paid for itself. Then find the next one.`

**Section: How I work**
- H2: `How I work`
- **Principle 1 — Outcomes, not tools.** `You're not buying AI. You're buying answered leads, finished paperwork and a shorter to-do list. The technology is my problem, not yours.`
- **Principle 2 — Fixed prices.** `You'll know the full cost before the build starts. If the scope changes, the price changes in writing, before the work, not on the invoice after it.`
- **Principle 3 — Plain English.** `Every update, every walkthrough, every document. If you can't explain what your automation does, I haven't finished the job.`
- **Principle 4 — Small on purpose.** `A few clients at a time, each getting real attention. I'd rather ship five automations that stick than twenty that don't.`

**Section: Why the bison**
- H2: `Why the bison`
- Body: `When a storm rolls in, most animals run from it and end up traveling with it for miles. Bison turn and walk straight into the storm. It's the fastest way through. That's the job here. AI feels like a storm to most business owners right now: loud, everywhere, hard to read. You don't have to outrun it. Walk into it with someone who knows the terrain, and you come out the other side ahead of everyone still running.`

**Section: Fit (honest positioning)**
- H2: `Who this is for`
- Lead-in: `BBD works best for a specific kind of business. Here's the honest version.`
- **A good fit if:**
  - `You run a business where a workflow is clearly eating time: leads, intake, scheduling, paperwork, follow-up.`
  - `You want outcomes and you're open to adjusting a process to get them.`
  - `You'd rather have one accountable expert than a big-agency team.`
- **Not a fit if:**
  - `You want to cut staff first and ask questions later. Automation here is about taking busywork off good people, not replacing them.`
  - `You want to "do something with AI" but can't name a problem. Start with the newsletter instead; it'll help you find one.`
  - `You need a large custom software platform. That's a different kind of firm, and I'm happy to say so on a call.`

**Closing CTA (reuse the homepage dark CTA band, same copy as 3.11).**

### 3.15 Newsletter page (`/newsletter`)

- **Eyebrow:** `THE NEWSLETTER`
- **H1:** `Practical AI for people who run businesses.`
- **Subheadline:** `Short, occasional emails on the automations that are actually working for small businesses. Written for owners, not engineers.`
- **What you'll get (3 bullets):**
  - `Real automation breakdowns: what they do, what they cost, what they save`
  - `Straight answers on what's worth your money and what's hype`
  - `No daily drip. It goes out when there's something worth saying.`
- Form: same field, button, microcopy, confirmation and error copy as 3.12.

### 3.16 Utility pages

**404**
- H1: `You're off the map.`
- Body: `This page doesn't exist, or it moved. Either way, the trail home is right here.`
- CTA: `Back to home`

**Privacy (`/privacy`)** — plain-language draft; have it legally reviewed before launch:
- H1: `Privacy policy`
- Body outline (write as short plain sections in the build):
  - `What we collect: your email address if you subscribe to the newsletter, and standard anonymous analytics about site visits.`
  - `How it's used: the email address is used to send you the newsletter. Nothing else. Analytics are used to understand what content is useful.`
  - `What we never do: sell your information, share it with third parties for marketing, or add you to lists you didn't ask for.`
  - `Your choices: every email includes an unsubscribe link. Unsubscribing removes you immediately.`
  - `Questions: jacob@bluebisondigital.com.`

### 3.17 Page titles and meta descriptions

| Page | `<title>` | Meta description |
|---|---|---|
| Home | `Blue Bison Digital \| AI Automation for Small Business` | `Blue Bison Digital builds AI automations that answer leads, chase follow-ups and handle the busywork for small businesses. Book a free discovery call.` |
| About | `About \| Blue Bison Digital` | `Meet Jacob McKinney, the one-person AI automation agency behind Blue Bison Digital. Fixed prices, plain English, outcomes first.` |
| Newsletter | `Newsletter \| Blue Bison Digital` | `Short, practical emails on the AI automations that actually work for small businesses. No hype, no daily drip.` |
| Automation Roadmap | `The Automation Roadmap \| Blue Bison Digital` | `A $1,000 working session that maps every automatable hour in your business, installs the first quick win live, and credits in full toward your build.` |
| Privacy | `Privacy Policy \| Blue Bison Digital` | `How Blue Bison Digital collects, uses and protects your information.` |
| 404 | `Page Not Found \| Blue Bison Digital` | (none needed) |
| Case Studies (future) | `Client Results \| Blue Bison Digital` | `Real automations, real numbers. How Blue Bison Digital clients got their time back.` |
| Notes (future) | `Notes \| Blue Bison Digital` | `Practical writing on AI automation for people who run businesses.` |

---

## 4. DESIGN BRIEF

### 4.0 Foundations

**Tokens (from the brand spec, restated for the build):**

| Token | Value | Use |
|---|---|---|
| `navy` | `#131D41` | Dark section backgrounds, primary buttons on light, headlines on light |
| `blue` | `#89B6FD` | Accent. Links on dark, highlights, the one CTA per dark screen, topo strokes |
| `navy-mid` | `#2A3A6B` | Hover states, secondary button borders/fills on navy |
| `pale` | `#F4F6FB` | Light section backgrounds, card surfaces |
| `gray` | `#6B7280` | Secondary labels, captions |
| `ink` | `#1A1A1A` | Body text on light |
| `white` | `#FFFFFF` | Open space, card interiors |

**Contrast rules (non-negotiable):**
- `blue #89B6FD` fails contrast on white and pale backgrounds. On light sections, links and accents are set in `navy`, with `blue` allowed only as a non-text element (underline, hairline, icon stroke, hover tint). `blue` as text exists only on navy.
- Body text on `pale` uses `ink`, not `gray`. `gray` is reserved for labels and captions at 14px+ or any-size text on white.
- On navy, body text is `#FFFFFF` at 85 to 90% opacity; headlines are pure white.

**Type scale** (as specified; implementation via `next/font`, Space Grotesk 500/700 + Inter 400/500/600/700, `display: swap`):
- H1: Space Grotesk 700, 48 to 60px, tracking -0.02em
- H2: Space Grotesk 700, 32 to 40px, tracking -0.015em
- H3 / card titles: Space Grotesk 500, 22 to 26px, tracking -0.01em
- Eyebrow: Space Grotesk 700, 11 to 12px, uppercase, tracking +0.15em. On light: `gray`. On navy: `blue`.
- Body: Inter 400, 16px, line-height 1.55. Large body (subheadlines, pivot lines): Inter 400, 18 to 20px.
- Buttons: Inter 600, 15px.

**Layout system:**
- Max content width 1200px, gutters 24px mobile / 48px desktop. 12-column mental model; most sections use 8 to 10 of them.
- Section vertical padding: 96 to 128px desktop, 64 to 80px mobile. The newsletter band is the exception at roughly half that.
- Radius: 8px buttons and inputs, 16px cards. Nothing pill-shaped, nothing square.
- Shadows: almost none. Cards separate from `pale` backgrounds via white fill and a 1px `#E5E9F2`-class hairline border, not drop shadows. A faint shadow may appear on hover only.
- No gradients as design elements. A subtle radial depth (center slightly lifted, edges slightly darker) is allowed on navy sections only.

**Buttons:**
- **Primary on light:** `navy` fill, white text. Hover: `navy-mid`.
- **Primary on dark:** `blue` fill, `navy` text. This is the only blue-filled element on any screen. Hover: shift toward white (roughly 12% white overlay).
- **Secondary on dark (ghost):** transparent, 1px `navy-mid` border, white text. Hover: `navy-mid` fill.
- **Secondary on light:** transparent, 1px `navy` border, `navy` text. Hover: `pale` fill.
- All buttons: 8px radius, 14px 24px padding, visible focus ring (`blue` 2px offset ring on dark surfaces, `navy` on light).

**Motion principles (site-wide):**
- One pattern, used sparingly: fade-up 12px over 300ms with 60 to 80ms stagger, triggered once on scroll-in, on section headers and card grids only.
- Hover transitions 150 to 200ms ease-out.
- Everything respects `prefers-reduced-motion`: reduce to opacity-only or nothing.
- No parallax, no scroll-jacking, no animated counters, no typing effects.

### 4.1 The Topo Texture (signature element spec)

This is the identity of the site. It must read as *precision terrain*: something a mapmaker drew, not a pattern generator.

**Construction:**
- Ship as one or two **static, pre-generated SVG assets**, not runtime canvas or CSS trickery. Generate once (marching-squares contours over smoothed 2D noise is the standard technique), then hand-curate the result: delete cluttered regions, keep elegant nested loops. Deterministic, cacheable, crisp at every scale.
- Contours must be **closed, irregular, nested loops** reading as elevation rings around two or three "peaks", never parallel waves, never a grid.
- **Index contours:** every fifth line is slightly heavier, exactly like a real USGS/onX map. This one detail is what separates "topo map" from "squiggle wallpaper". Standard lines ~1px at 6% opacity; index lines ~1.5px at 9 to 10%.
- **Stroke color:** `blue #89B6FD` at the low opacities above, on `navy`. Never fills, strokes only.
- **Elevation labels (hero only):** two or three tiny inline numbers (e.g. `1840`) set in Space Grotesk 700 at ~10px, breaking an index contour the way real maps do, at the same low opacity as the line they sit in. Almost nobody will notice them. The people who do are the right people.
- **Density as composition:** contours cluster tighter toward one corner (suggesting steeper terrain, upper-right in the hero) and relax to near-nothing behind the headline. Pair with a radial mask so the texture fades to zero within ~120px of primary text and CTAs.

**Usage rules:**
- Appears in exactly three places: homepage hero, dark CTA band (a different crop or the second asset, so the two dark moments don't look cloned), and the short dark page-hero band on interior pages (lightest application). Optionally the 404.
- Never on light sections. Never behind body-copy-dense areas. Never above 10% opacity. Never scaled so small it reads as fingerprint or wood grain; a single contour loop should span 200 to 500px.
- Static at launch. If motion is ever added, it is a barely-perceptible drift on a 60s+ loop, removed under `prefers-reduced-motion`. Recommendation: don't. Stillness suits terrain.
- `aria-hidden="true"`, decorative, zero effect on text contrast (verify contrast against `navy` + texture at its densest point).

**The waypoint extension (How It Works only):** the process section borrows the map language structurally: a thin dashed line (the route) connects four circular waypoint markers. Markers are 40px circles, white fill, 1.5px `navy` border, step number in Space Grotesk 700. The dashed route line is `blue` at full opacity but hairline weight (light section, so blue works as a non-text graphic element). This is the only terrain reference on a light background, and it's a diagram, not a texture.

### 4.2 Section-by-section art direction

**Header / Nav**
- Full-width, 72px tall, content in the 1200px container. Wordmark left, links center-right, button far right.
- Over the hero: transparent, white links, ghost-style border on the button? No: use the primary-on-dark button (`blue` fill) in the nav only after scroll; over the hero the nav button is ghost so the hero CTA stays the screen's single blue element.
- On scroll (past ~80% of hero): solid white background, hairline bottom border, links in `ink`, button switches to primary-on-light (`navy` fill). 200ms transition.
- Mobile: wordmark + hamburger opening a full-screen navy overlay (untextured), links set in H3 scale, Book a Call as a full-width primary button pinned near the bottom.

**Hero**
- `navy` background, topo asset A, radial depth allowed. Min-height around 85vh, not forced 100vh; the fold should hint at the next section.
- Single centered column, max 780px, text-align center. Eyebrow (`blue`) → H1 (white, 60px desktop) → subheadline (white 85%, 20px, max 640px) → CTA row (primary blue-fill button + ghost secondary, 16px gap) → microcopy (13px, white 60%) beneath → tertiary Roadmap text link (`SecondaryTextCta`: Inter 14px, white 60%, hover 90%, arrow glyph, 16px below the microcopy). The link must read as an afterthought for insiders, not a third button.
- Load sequence (the site's one orchestrated moment): topo fades in from 0 over ~800ms while eyebrow, H1, sub, CTAs stagger-fade-up over the first ~700ms. Reduced motion: everything simply appears.
- No imagery, no device mockups. Type and terrain only.

**Client Logo Strip (hidden)**
- White background, 48px vertical padding. Label line in eyebrow style, `gray`, centered. Logos in a single row, grayscale via CSS filter, max-height 28px, opacity 0.6, hover 1.0. Static; no marquee scroll.

**The Problem**
- White background. Section header left-aligned (eyebrow + H2, max 720px). Three vignettes in a 3-column row, 48px gaps; titles in H3 scale `navy`, body in `gray`... no: body in `ink` (contrast rule), 16px. No cards, no borders; whitespace does the separating. A 24px-tall hairline rule in `pale` above each column title is the only ornament.
- Pivot line below, full-width of the header column, set in Space Grotesk 500 at 24 to 28px, `navy`. It should read like a quiet thesis statement, not a headline.
- Mobile: vignettes stack with 40px gaps.

**What We Automate**
- `pale` background. Centered section header. 3×2 grid of white cards (16px radius, hairline border, 32px internal padding, 24px grid gap).
- Card anatomy: 24px line icon (1.5px stroke, `navy`, single `blue` accent detail per icon) → title (H3 scale, 22px, `navy`) → body (Inter 15 to 16px, `ink`). No links on cards, no "learn more"; cards are informative, not navigational. The section's job ends at the closing line, which points to the call.
- Hover: 2px lift + border warms toward `blue`, 150ms. No shadow bloom.
- Closing line centered below the grid, Inter 18px `ink`.
- Responsive: 3 → 2 → 1 columns.

**How It Works**
- White background. Section header centered. The four steps run **vertically**, left-aligned in a single 720px column: waypoint marker on the left, step content to its right, dashed route line connecting markers top to bottom. Vertical beats horizontal here: it reads as a journey, works identically on mobile, and gives each step's 2 to 3 sentences room to breathe.
- Step content: step name (H3 scale) → description (Inter 16px, `ink`, max ~55ch).
- Optional scroll detail: the dashed route "draws" as the section scrolls into view. Only if cheap; static is fine. Reduced motion: static.

**Case Study Cards (hidden)**
- `pale` background. Section header left-aligned. 2 or 3 cards in a row (component must handle both counts cleanly; at 2, cards widen rather than leaving a gap).
- Card anatomy: industry label (eyebrow style, `gray`) → metric (Space Grotesk 700, 40px, `navy`) → problem line (`gray`, 15px) → result line (`ink`, 16px) → text link in `navy` with `blue` underline. White fill, hairline border, 40px padding. The metric is the design; keep everything else quiet.

**Founder**
- White background. Two columns: photo left (5 of 12 columns), content right (7 of 12), vertically centered, 64px gap.
- Photo: real photograph, 4:5 crop, 16px radius. Treatment: natural color, slightly cool grade to sit with the palette. No cutout-on-blob, no duotone.
- Content: eyebrow → H2 → two body paragraphs (Inter 16px) → proof list (three items, small `blue` topo-ring bullet glyph, Inter 15px 500) → text link to `/about`.
- Mobile: photo above text, photo max-height constrained so it doesn't dominate.

**Testimonial Block (hidden)**
- `pale` band, 96px padding. Quote set in Space Grotesk 500 at 28 to 32px, `navy`, max 900px, centered. Oversized quotation mark in `blue` at 20% opacity behind the first line, nothing else. Attribution: name (Inter 600, `ink`) + role/company (`gray`), centered below. Two-quote variant: side-by-side at 24px type instead.

**FAQ**
- White background. Centered header, then a single 720px column accordion. Items divided by hairlines; question row is Inter 600 16px `ink` with a thin plus (rotating to ×, 200ms) in `navy` on the right; answer is Inter 16px `ink` on 8px more indent... no indent, align with question. First item open by default. Entire question row is the click target; keyboard accessible; use native semantics (details/summary or a proper ARIA accordion) as the coding session prefers.

**Availability + Final CTA band**
- Full-bleed `navy`, topo asset B (different crop from hero), radial depth. 128px vertical padding.
- Centered column: eyebrow (`blue`) → H2 (white, 40px) → supporting line (white 85%) → primary blue-fill button → microcopy (white 60%, 13px) → tertiary Roadmap text link (`SecondaryTextCta`, same quiet treatment as the hero). One door, plus a side gate for people who already have the key.
- This band is reused verbatim on `/about` (component, not copy-paste).

**Newsletter band**
- `pale` background, 64px vertical padding. Single centered column: headline (H3 scale, 26px, `navy`), supporting line (`ink`), then form: email input (white fill, hairline border, 8px radius, 48px tall) + primary-on-light button in a single row (stacked on mobile). Microcopy in `gray` 13px below. Success swaps the whole form for the confirmation line with a small `blue` check.
- Implementation note: no backend at launch. The email provider is **Kit** (it also sends the post-payment Roadmap confirmation email, so one provider covers both jobs). Wire the form to Kit's hosted form endpoint; build the form as a component with the submit target injected from config.

**Footer**
- `navy`, no texture, 64px padding. Left: wordmark + descriptor (`gray`-on-navy… use white 60%). Center/right: two link columns (Site, Contact), labels in eyebrow style at white 40%, links Inter 15px white 85%, hover `blue`. Legal line full-width below a `navy-mid` hairline: copyright left, Privacy right, white 50%, 13px.

**About page**
- Short dark page-hero band (~320px): navy, topo at its faintest, eyebrow + H1 + subheadline, left-aligned in the container.
- Story and Fit sections on white; How I Work as a 2×2 grid of principle blocks (title + body, no cards) on `pale`; Why the Bison on white with generous margins, body set at 18px because it's the page's best writing. Fit section: two columns ("A good fit if" / "Not a fit if"), items with `blue` ring bullets vs `gray` dash bullets. Closing: the shared CTA band.

**Newsletter page**
- Page-hero band (same treatment), then a single centered column on white with the bullets and form. Short page; that's fine.

**404**
- Full-viewport navy with topo (this is the one place the texture can run a little hotter, ~12%: the joke is you're deep in the terrain). H1, body line, primary button. Centered.

### 4.3 COMPONENT INVENTORY

Reusable components the coding session needs to build. Names are suggestions; behavior is the spec.

| Component | Description |
|---|---|
| `Section` | Full-width wrapper taking `mode: "white" \| "pale" \| "dark"` and an optional `topo` flag; owns vertical padding and background rules so sections can't drift. |
| `Container` | 1200px max-width inner wrapper with responsive gutters. |
| `TopoBackground` | Renders topo SVG asset A or B with mask, opacity and `aria-hidden`; used only inside dark `Section`s. |
| `Eyebrow` | Uppercase Space Grotesk label; color resolves from section mode (gray on light, blue on dark). |
| `SectionHeader` | Eyebrow + H2 + optional supporting line, with `align: left \| center`. |
| `Button` | Variants `primary` / `secondary`, context-aware for light vs dark surfaces; renders as link or button; handles focus ring and external-link behavior for Calendly. |
| `CtaMicrocopy` | Small trust line rendered under a button; pairs with `Button` in heroes and CTA bands. |
| `Header` | Sticky nav with transparent-to-solid scroll behavior and mobile overlay menu. |
| `Footer` | Navy footer with link columns and legal line. |
| `AutomationCard` | Icon + title + body card for the What We Automate grid. |
| `ProcessRoute` | Vertical route: dashed line + `WaypointStep` children (marker number, name, description). |
| `FounderIntro` | Photo + bio + proof-point list layout. |
| `ProofList` | Short list with blue topo-ring bullets (used in Founder and About Fit sections; bullet style variant per use). |
| `FaqAccordion` / `FaqItem` | Accessible accordion, first item open, plus/× indicator. |
| `CtaBand` | The full dark availability + CTA section as one component, reused on Home and About. |
| `NewsletterForm` | Email input + button + microcopy with success and error states; submit target from config. Used in the band and on `/newsletter`. |
| `PageHero` | Short dark hero band for interior pages (eyebrow + H1 + sub, faint topo). |
| `RoadmapPricingCard` | Centered card containing price, inclusions list, and buy button. Used only on `/roadmap`. Stripe URL injected from config. |
| `SecondaryTextCta` | Plain-text link with arrow, used beneath primary CTAs on the hero, final CTA band, and `/roadmap` bottom. Inherits section mode for color. |
| `LogoStrip` | **Hidden.** Label + grayscale logo row. |
| `CaseStudyCard` | **Hidden.** Label + metric + problem + result + link; grid parent handles 2-or-3 layouts. |
| `TestimonialBlock` | **Hidden.** One- or two-quote layouts with attribution. |
| `Icon` set | 6+ line icons (1.5px stroke) for automation cards, plus check, plus/×, ring bullet, external-link. |
| `site.config.ts` | Single config module: `CALENDLY_URL`, `STRIPE_ROADMAP_URL`, `ROADMAP_CALENDLY_URL`, newsletter endpoint, social links, and `features: { logoStrip, caseStudies, testimonials, notes, work }` boolean flags. Every hidden section and route reads from here; turning on social proof is a config change. |

**Build notes that don't fit a component:**
- Route structure: `app/(marketing)/` for all launch pages; `app/notes/` and `app/work/` stubbed behind the feature flags (return 404 while off). No CMS decision needed until the content hub turns on.
- Fonts via `next/font/google` (Space Grotesk, Inter), swap display, subsets latin.
- Metadata via the App Router Metadata API, values from section 3.17. Add OpenGraph image: navy with topo texture, wordmark, tagline; one static asset for the whole site at launch.
- Favicon: bison mark on navy.
- Analytics: Vercel Analytics is enough at launch.
- Accessibility floor: skip link, visible focus states everywhere, `aria-hidden` on all texture, semantic landmarks, contrast rules from 4.0 verified.

**Config values (all placeholders at build time; Jacob replaces before launch):**
- `CALENDLY_URL` — the free discovery call booking link (placeholder `https://calendly.com/bluebisondigital/discovery`).
- `STRIPE_ROADMAP_URL` — Stripe payment link for the $1,000 Automation Roadmap.
- `ROADMAP_CALENDLY_URL` — the Calendly link sent in the post-payment Kit confirmation email. Kept separate from `CALENDLY_URL` (free discovery call) so the two can be managed independently. Note: this URL lives in the Kit email, not on the site, but it belongs in config so the whole booking surface is documented in one place.

**Open items for Jacob (everything else is decided):**
1. Real Calendly URLs: the free discovery call event and the separate Roadmap session event.
2. Kit account setup: the newsletter form endpoint, plus the post-payment automation (Stripe payment → Kit confirmation email containing `ROADMAP_CALENDLY_URL`).
3. Stripe payment link for the $1,000 Roadmap.
4. The `[CONFIRM]` copy facts: years of experience + industry examples, whether to state a real client-slot number in the homepage CTA eyebrow, and the roadmap report delivery window (see 5.2, How It Works step 3).
5. A real photo for the Founder section.
6. LinkedIn URL for the footer.

---

## 5. ROADMAP PAGE (`/roadmap`)

A sales page, not a marketing page. One job: convert a warm, already-interested visitor into a paying client without a call first. The visitor has read the site or came from an email; do not re-sell BBD. Sell the Roadmap.

**The framing that governs every section:** the buyer is not paying $1,000 for a document. They are paying for Jacob-the-builder, and the fee is a deposit: it credits in full toward implementation when they greenlight a build. The credit is the closing mechanic and appears three times (hero subheadline, dedicated callout, pricing card). The refund guarantee is a secondary trust signal, mentioned once, quietly.

**Payment flow:** buy button → Stripe payment link (`STRIPE_ROADMAP_URL` from config) → Kit sends a post-payment confirmation email containing the scheduling link (`ROADMAP_CALENDLY_URL`). No Calendly payment gating; Calendly stays on the free plan. The page must set the expectation that scheduling happens by email right after payment.

**Access:** not in main nav or footer. Linked from the homepage hero and final CTA band (tertiary text links) and from emails. Standard header and footer render on the page; the header's Book a Call button stays as-is, since it doubles as this page's escape hatch.

### 5.1 Section inventory

1. **Page hero (short dark band)** — Name the offer and its promise in one screen: session, plan, live quick win, fee credit. Same treatment as the About page hero.
2. **What you get** — Make the deliverable concrete: four items, then the fee-credit callout as its own moment. White background.
3. **Who this is for** — Honest qualification, same voice as the About Fit section. Enforces the 5+ employee line and routes small businesses to the free call without shame. Pale background.
4. **How it works** — Four condensed steps from payment to decision (the paid version of the process, not the free-call version). Reuses the waypoint route treatment. White background.
5. **The investment** — The price, everything included, the buy button. The page's one moment of visual emphasis. Pale background, single centered card.
6. **FAQ** — Four offer-specific questions, none duplicated from the homepage FAQ. White background.
7. **Secondary CTA** — A plain text link back to the free discovery call for anyone not ready to buy direct. Not a band; the page already asked for the sale.

No hidden sections. Everything on this page is launch-ready.

### 5.2 Copy

**Page hero**
- Eyebrow: `THE AUTOMATION ROADMAP`
- H1: `Your first automation, live in one session.`
- Subheadline: `The Automation Roadmap is a $1,000 working session: every automatable hour in your business mapped, the first quick win installed before we hang up, and the full fee credited toward your build.`

**What you get**
- Eyebrow: `WHAT YOU GET`
- H2: `Not a report. A running start.`

- **Item 1 — `The assessment call`**
  `We go through your business the way a builder would. Where the hours go, which workflows leak time, and what your existing tools could already be doing that nobody has wired up.`
- **Item 2 — `The written roadmap`**
  `Quick wins you can do yourself this week. A full map of every automation opportunity we found. A prioritized list of what to build first and why. Specific enough to act on with or without me.`
- **Item 3 — `Quick win #1, installed live`**
  `The session doesn't end with a plan. It ends with one automation already running in your business. Something works before we hang up.`
- **Item 4 — `Bonus: a 60-minute AI Operating System session`**
  `A one-on-one working session where we set up the AI tools you and your team will actually use day to day. Yours whether or not a build happens.`

- **Fee-credit callout (set large, below the items):** `And the $1,000 isn't really a fee. Greenlight a build and every dollar credits toward it. You're not buying a document. You're putting a deposit on the builder.`

**Who this is for**
- Eyebrow: `WHO IT'S FOR`
- H2: `The honest fit check.`
- Lead-in: `The Roadmap is priced for businesses where automation moves real money. Here's the line.`
- **A good fit if:**
  - `Your business has five or more employees. That's where ten-plus hours of automatable work reliably hides.`
  - `A workflow is clearly costing you: leads, intake, scheduling, paperwork, follow-up.`
  - `You've read this site, you're sold on the approach, and you want the plan instead of another call.`
- **Not a fit if:**
  - `Fewer than five employees. At that size the math doesn't favor you, and I'd rather tell you that than take your money. Book the free call and I'll point you at wins that fit.`
  - `You collect audits. If this roadmap would join a drawer of unread reports, save the $1,000. This one is built to be acted on.`
  - `You need a large custom software platform. That's a different kind of firm, and I'll say so.`

**How it works**
- Eyebrow: `HOW IT WORKS`
- H2: `From payment to plan in four steps.`

- **Step 1 — `Buy the Roadmap`**
  `Pay the $1,000 by card. Within minutes you'll get a confirmation email with a link to schedule your session. That's the whole admin.`
- **Step 2 — `The session`**
  `One call: discovery and workflow mapping. You talk through how the business actually runs; I find where the hours are hiding. Before we end, quick win #1 gets installed and starts working.`
- **Step 3 — `The roadmap lands`**
  `You get the written report [CONFIRM: delivery window, e.g. "within five business days"]: quick wins, the full opportunity map, and what to build first.`
- **Step 4 — `You decide`**
  `We do your AI Operating System session, and you choose whether to greenlight a build. If you do, your $1,000 comes off the price. Build slots open in October.`

**The investment**
- Eyebrow: `THE INVESTMENT`
- H2: `One price. Everything included.`
- **Card contents:**
  - Price: `$1,000`
  - Price caption: `Charged upfront. Credits toward your build in full.`
  - Included list:
    - `One assessment call: discovery and workflow mapping`
    - `The written roadmap: quick wins, full opportunity map, prioritized recommendations`
    - `Quick win #1 installed live during the session`
    - `A bonus 60-minute AI Operating System session, one-on-one`
    - **`The full $1,000 credited toward implementation when you greenlight a build`** (final item, visually distinguished)
  - Button: `Get the Roadmap`
  - Button microcopy: `Secure card payment through Stripe. Your scheduling link arrives by email within minutes.`
  - Guarantee line: `The guarantee: if we find fewer than 10 hours of automatable work in your business, you get every dollar back.`
- **Availability line (below the card, outside it):** `Roadmap slots are open now. Build slots are limited and open in October.`

**FAQ**
- Eyebrow: `QUESTIONS`
- H2: `Before you buy.`

- **Q1: `Why not just book the free call?`**
  `The free call answers "is automation right for my business." The Roadmap answers "what exactly do we build, in what order, and what's the first win." If you're still on the first question, book the call. It exists for exactly that.`
- **Q2: `What if I don't hire you for the build?`**
  `The roadmap is yours either way, and it's written to be acted on without me. The quick win keeps running. The AI setup session still happens. All you leave behind is the credit.`
- **Q3: `When would my build actually happen?`**
  `Build slots open in October 2026, and there are only a few. Buying the Roadmap now means your plan is done, your first win is live, and you're at the front of the line when a slot opens.`
- **Q4: `What does the guarantee cover?`**
  `If the assessment finds fewer than 10 hours of automatable work in your business, you get a full refund. At five or more employees, I have yet to see a business where that's the outcome. That's why I can offer it.`

**Secondary CTA (page bottom)**
- Text link: `Rather talk it through first? Book the free discovery call →`

### 5.3 Design spec

**Mode flow:** dark page hero → white → pale → white → pale → white. Same rules as the homepage; the topo texture appears only in the hero band.

**Page hero**
- Identical treatment to the About page hero: short dark band (~320px), `navy`, topo at its faintest, radial depth allowed. Eyebrow (`blue`) + H1 (white) + subheadline (white 85%, max 640px), left-aligned in the container.
- No CTA in the hero. The visitor is warm; let them read the four sections that answer their real questions, then hit the buy button at full strength. A hero buy button would also compete with the pricing card, and this page gets exactly one moment of emphasis.

**What you get**
- White background. Left-aligned section header, then the four deliverables as a 2×2 grid (single column on mobile), 48px gaps. No cards, no numbers (these are components of one package, not a sequence): H3-scale titles in `navy`, body in `ink` 16px. The bonus item's title carries a small `blue` eyebrow-style `BONUS` tag inline.
- The fee-credit callout sits below the grid, full header-column width, set like the homepage pivot line: Space Grotesk 500, 24 to 28px, `navy`. The phrase `every dollar credits toward it` gets a `blue` underline accent (non-text use of blue on light, per the contrast rules). This is copy as design; give it 64px of clearance above and below.

**Who this is for**
- `pale` background. Same two-column Fit layout as the About page (reuse the component): "A good fit if" with `blue` ring bullets, "Not a fit if" with `gray` dash bullets. Section header left-aligned with the lead-in line beneath.

**How it works**
- White background. Reuses `ProcessRoute` and `WaypointStep` verbatim: vertical dashed route, four waypoint markers, 720px column. No new component work.

**The investment**
- `pale` background, centered section header, then a single centered `RoadmapPricingCard`: white fill, 16px radius, 40px padding, max-width ~520px, hairline border. This is the page's one moment of visual emphasis; everything around it stays quiet.
- Card anatomy, top to bottom: price in Space Grotesk 700 at 48px `navy`, caption in `gray` 14px directly beneath, hairline divider, inclusions list (Inter 15px, `blue` ring bullets, the credit item set in Inter 600 `navy` as the final entry), full-width primary-on-light button (`navy` fill), microcopy in `gray` 13px, then the guarantee line in `gray` 14px separated by a second hairline.
- The button links to `STRIPE_ROADMAP_URL` (external, new tab). No hover theatrics; standard button behavior.
- Availability line centered below the card in Inter 15px `ink`.

**FAQ**
- White background. Reuses `FaqAccordion` in the same 720px column as the homepage, first item open.

**Secondary CTA**
- A single centered `SecondaryTextCta` in light mode (`navy` text, `blue` underline on hover, arrow glyph), 48px below the FAQ, linking to `CALENDLY_URL`. Plain text, no band, no background change. The page already asked for the sale; this is the quiet exit for the not-yet-ready, mirroring how the homepage quietly routes warm traffic here.

**404/robots note:** the page is live and indexable at launch (search traffic to it is fine; the qualification section does the filtering), but it stays out of the nav so cold homepage traffic follows the free-call path by default.
