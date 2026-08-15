# Babita Construction — Sprint Plan

**Project:** Next.js rebuild of babitaconstruction.com
**Deploy target:** Hostinger Premium (shared) — static export + PHP endpoints
**Companion docs:** `requirements.md` (scope), `design.html` (approved visual direction)
**Plan version:** v1.0 — 15 August 2026

---

## Assumptions

| | |
|---|---|
| Team | 1 full-stack developer, ~30 productive hours/week |
| Sprint length | 1 week (Mon–Fri), 4 sprints |
| Velocity target | 20 points/sprint, first sprint capped at 16 while tooling settles |
| Point scale | 1 pt ≈ 1.5 hours. 1 = trivial, 2 = half day, 3 = a day, 5 = two days, 8 = split it |
| Environments | `local` → `staging.babitaconstruction.com` (Hostinger subdomain) → `production` |
| Client review | Every Thursday, 30 min, on staging |

**Total committed: 76 points across 4 sprints.**

---

## Blockers — resolve before Sprint 1 starts

These three decisions gate real work. None take more than a phone call, but the wrong assumption costs days.

| ID | Decision | Blocks | Owner | Needed by |
|---|---|---|---|---|
| **B-1** | Backend approach — Option A (PHP on same plan), B (third-party forms, no admin), or C (upgrade to Business/VPS) | All 6 form tickets, admin login, entire Sprint 3 | Client | Day 0 |
| **B-2** | Compare Packages — real rates and inclusions, or indicative with "request a quote"? | BC-30, BC-31 | Client | Day 3 |
| **B-3** | Years in business — 10 or 25? Live site says both. | BC-11, BC-12 | Client | Day 3 |

**If B-1 is unanswered by Day 0,** proceed on Option A and treat any change as a scope reset for Sprint 3.

**Asset dependency:** the checklist in `requirements.md` §9 (logo SVG, project photography, team bios, social URLs, GA/GTM ID, MySQL credentials). Sprint 4 cannot close without it. Chase from Day 1, not Day 15.

---

## Sprint 0 — Setup (½ day, not counted)

Not a sprint. Do this before Monday of Sprint 1.

- Repo created, `main` protected, conventional commits
- `create-next-app` with App Router + Tailwind v4, `next.config.mjs` set to `output: 'export'`, `trailingSlash: true`, `images.unoptimized: true`
- Design tokens from `design.html` `:root` ported into Tailwind `@theme`
- Staging subdomain provisioned in hPanel, FTP credentials stored
- Verify a hello-world static export actually serves from `public_html` — **do this on day one, not at the end**

---

## Sprint 1 — Foundation & core pages
**Goal:** every visitor-facing marketing page renders correctly on staging.
**Committed: 16 points**

| ID | Ticket | Pts | Acceptance criteria |
|---|---|---|---|
| BC-01 | Design tokens → Tailwind `@theme` | 2 | All navy/orange tokens available as utilities. `--orange-ink` used for small orange text on light; `--orange` never is. |
| BC-02 | Root layout, metadata, system font stack | 2 | No webfont requests in the network tab. Per-page `title` + `description` API in place. |
| BC-03 | `SiteHeader` — sticky, dropdowns, mobile drawer | 3 | Dropdowns open on click and Escape closes. Drawer traps focus. Keyboard-operable throughout. Works at 360px. |
| BC-04 | `SiteFooter` — 4 columns, hours, lazy map | 2 | Google Map iframe loads only on scroll into view. |
| BC-05 | Home — hero slider, stats counters, about, services, testimonials | 5 | Slider auto-advances, pauses on hover, halts under `prefers-reduced-motion`. Counters fire once on intersection. |
| BC-06 | `/about/` | 2 | Real copy, no lorem. Stats consistent with B-3. |

**Sprint review:** header, footer and home page on staging, reviewed on a real phone.

---

## Sprint 2 — Compare Packages & remaining content
**Goal:** the new page works end to end; every route from the old site exists.
**Committed: 20 points**

| ID | Ticket | Pts | Acceptance criteria |
|---|---|---|---|
| BC-10 | `/services/`, `/construction/`, `/transportation/`, `/mining/` | 5 | Four routes, distinct copy each. Old typo slugs redirect (BC-41). |
| BC-11 | `/projects/` grid + detail cards | 3 | Driven by `src/data/projects.js`. Lorem ipsum fully removed. Blocked on B-3 for the stats band. |
| BC-12 | `/contact/` — details, map, form shell | 2 | Form UI complete; submission wired in Sprint 3. |
| **BC-30** | **`/compare-packages/` — comparison engine** | **5** | City selector applies rate multiplier. Homes/Luxury toggle refilters both package dropdowns. Two packages compare across all 34 inclusion rows, grouped by category. "Differences only" hides matching rows and flags the rest. Empty state when both packages are identical. Table scrolls horizontally at 360px with the label column pinned. |
| BC-31 | Compare Packages — estimator, FAQ, JSON-LD | 3 | Area × rate × multiplier updates live. FAQ accordion is a real disclosure pattern. `FAQPage` structured data validates in Google's Rich Results test. |
| BC-32 | Package data model (`src/data/packages.js`) | 2 | Adding a package or an inclusion row requires no component changes. Blocked on B-2. |

**Sprint review:** client compares Essential vs Premium on their own phone and confirms the inclusions read correctly.

---

## Sprint 3 — Forms, backend, admin
**Goal:** every form submits, stores and notifies. Highest-risk sprint.
**Committed: 22 points**

| ID | Ticket | Pts | Acceptance criteria |
|---|---|---|---|
| BC-20 | PHP endpoint scaffold — `config.php`, DB schema, mailer, honeypot, rate limit | 5 | Shared validation and response format. Credentials outside `public_html`. Rate limit per IP. |
| BC-21 | Contact form → `api/contact.php` | 2 | Client + server validation, inline errors, disabled-while-submitting, success state, notification + confirmation email. |
| BC-22 | `/vehicle-registration/` (lease) — 12 fields + 11 uploads | 5 | JPG/PNG/PDF only, 5 MB cap, MIME sniffed server-side, randomised filenames, stored outside `public_html`. Reference number returned. |
| BC-23 | `/purchase-vehicle-registration/` | 2 | 8 fields, no uploads. Corrected vehicle-type list. |
| BC-24 | `/default-vehicle-registration/` — 10 fields + 11 uploads | 3 | Shares the upload component with BC-22. |
| BC-25 | `/data-deletion-request/` + `/login/` | 3 | Deletion request logs and emails. Login posts to PHP session; no credentials in client JS. |
| BC-26 | Package enquiry form on Compare Packages | 2 | Prefills selected package, city and area. |

**Risk:** BC-22 and BC-24 carry 22 file inputs between them. If uploads slip, ship the text fields and follow with uploads in Sprint 4 — a form that captures the owner's phone number is worth more than no form.

---

## Sprint 4 — Legal, deploy, hardening, launch
**Goal:** live on production with monitoring and no regressions.
**Committed: 18 points**

| ID | Ticket | Pts | Acceptance criteria |
|---|---|---|---|
| BC-40 | `/privacy-policy/`, `/terms-and-conditions/`, `/support/`, `/404` | 3 | Modal content promoted to real indexable pages. |
| BC-41 | `.htaccess` — redirects, HTTPS, compression, caching | 3 | 301: `/transporatation`→`/transportation/`, `/minning`→`/mining/`, `/index.view`→`/`. Force HTTPS + canonical host. Far-future cache on `/_next/static/`. Custom 404. |
| BC-42 | `sitemap.xml`, `robots.txt`, canonicals, Open Graph | 2 | Every route has a unique title, description, canonical and OG image. |
| BC-43 | Accessibility pass | 3 | axe reports zero criticals. Full keyboard traverse. Visible focus everywhere. Contrast pairs match the measured values in `design.html`. |
| BC-44 | Performance pass | 3 | Lighthouse mobile ≥ 90 performance, ≥ 95 accessibility. LCP < 2.5s on 4G. Home page < 900 KB. Images pre-compressed to WebP — `next/image` optimisation is unavailable under static export. |
| BC-45 | Cross-browser + device QA | 2 | Chrome, Safari, Edge, Firefox (last 2), iOS Safari 15+, Android Chrome. 360 / 768 / 1024 / 1440. |
| BC-46 | Production deploy + analytics + handover | 2 | DNS cut over, SSL active, GA/GTM firing, form submissions confirmed in production, deploy runbook written. |

**Go-live gate:** all four sprints' acceptance criteria met, every form test-submitted against production, and old URLs verified redirecting.

---

## Definition of Done

A ticket is done when **all** of these hold:

- Renders correctly at 360, 768, 1024 and 1440px
- Keyboard-operable with visible focus; axe reports no criticals
- Text contrast meets WCAG AA — small orange text uses `--orange-ink`, never `--orange`
- No lorem ipsum, no placeholder `#` links, no `TODO`
- `next build` completes with zero errors and zero new warnings
- Deployed to staging and clicked through on a real phone
- Copy proofread — the corrections in `requirements.md` §5.4 applied

---

## Risks

| Risk | Likelihood | Impact | Response |
|---|---|---|---|
| B-1 answered late or reversed mid-build | Medium | High | Sprint 3 is the only sprint that depends on it. Isolate all PHP behind one `submitForm()` client helper so swapping to Formspree is a single-file change. |
| Client assets arrive late | **High** | Medium | Build against `src/data/*` fixtures from day one. Swapping real content in is a data edit, not a rebuild. |
| Real package rates change the table structure | Medium | Medium | BC-32 makes rows data-driven. Adding a category costs minutes, not a refactor. |
| Hostinger static export misbehaves (trailing slashes, 404s) | Low | **High** | Validated in Sprint 0, not at launch. This is the cheapest bug to find early and the most expensive to find late. |
| File uploads exceed shared-hosting PHP limits | Medium | Medium | Confirm `upload_max_filesize` and `post_max_size` in hPanel during BC-20. Cap client-side to match. |
| Scope creep — "can we also add a blog / careers page" | Medium | Medium | Log to a Phase 2 backlog. Do not absorb into these four sprints. |

---

## Out of scope (Phase 2 backlog)

Blog / news, careers page, customer project-tracking portal, Odia translation, payment gateway, admin panel redesign, cost calculators beyond the package estimator, and the location landing pages Brick&Bolt runs for SEO.

---

## Tracking

- Board columns: `Blocked` → `Todo` → `In progress` → `Review` → `Done`
- Anything in `Blocked` for more than 2 days gets escalated to the client, not quietly worked around
- Standup is a written note in the repo, not a meeting
- Velocity recalculated after Sprint 2; if it lands below 20, cut from Sprint 4's polish tickets rather than dropping accessibility or redirects
