# Babita Construction — Website Redesign Requirements

**Project:** Rebuild of https://babitaconstruction.com in Next.js
**Target host:** Hostinger **Premium** shared hosting (no VPS)
**Document status:** Draft v1.0 — for client sign-off
**Last updated:** 15 August 2026

---

## 1. Objective

Rebuild the existing Babita Construction website as a modern Next.js application, retaining every page currently live, and add one new **Compare Packages** page modelled on `bricknbolt.com/compare-packages`.

The build must be deployable to a Hostinger Premium shared hosting plan — the client does not want to buy a VPS.

---

## 2. The hosting constraint (drives the whole architecture)

Hostinger Premium is Apache + PHP + MySQL shared hosting. It **cannot run a long-lived Node.js process**. Hostinger's Node.js-on-shared-hosting support covers only the Business and Cloud Startup tiers, not Premium.

**Consequence:** the site must be built as a **Next.js static export**.

```js
// next.config.mjs
output: 'export',        // emits plain HTML/CSS/JS into ./out
trailingSlash: true,     // emits /about/index.html so Apache serves clean URLs
images: { unoptimized: true }
```

### 2.1 What this rules out

| Next.js feature | Available? | Replacement |
|---|---|---|
| API routes (`app/api/*`) | No | PHP endpoints in `public/api/*.php` |
| Server Actions | No | PHP endpoints |
| ISR / on-demand revalidation | No | Rebuild + re-upload |
| `next/image` optimisation | No | `unoptimized: true`, pre-compress images |
| Middleware | No | `.htaccess` rules |
| Server-side sessions / auth | No | PHP session on the admin side |
| `dynamic = 'force-dynamic'` | No | All pages statically pre-rendered |

### 2.2 What we still get

- React 19 + App Router component model and developer experience
- Full static pre-render → very fast TTFB on shared hosting
- Client-side interactivity (comparison tool, forms, sliders, accordions)
- PHP + MySQL still available on the same Premium plan for form handling and the admin area

### 2.3 Decision required from client

The current site has a **backend** — vehicle registrations write records, and there is an **Admin Login**. Static export cannot host that. Pick one:

- **Option A (recommended, no extra cost):** Keep the dynamic parts in PHP on the same Hostinger Premium plan. Next.js serves the public site; a small PHP + MySQL app under `/api/` and `/admin/` handles form submissions, file uploads and admin login.
- **Option B:** Move form handling to a third-party service (Formspree / Web3Forms) and drop the admin panel. Cheapest, but no submission database.
- **Option C:** Upgrade to Hostinger Business/Cloud or a VPS and run Next.js properly with server features. Costs more; unlocks everything.

**This specification assumes Option A.**

---

## 3. Technology stack

| Layer | Choice |
|---|---|
| Framework | Next.js 15 (App Router), React 19 |
| Language | JavaScript (JSX) |
| Styling | Tailwind CSS v4 + design tokens in `globals.css` |
| Fonts | Archivo (display), IBM Plex Sans (body), IBM Plex Mono (data) — self-hosted via `next/font` |
| Form backend | PHP 8 scripts in `public/api/`, writing to MySQL + sending mail |
| Output | `./out` → uploaded to `public_html` |
| Deployment | hPanel File Manager or FTP; optional GitHub → Hostinger auto-deploy |

---

## 4. Page inventory

### 4.1 Pages carried over from the existing site

| # | Existing URL | New route | Notes |
|---|---|---|---|
| 1 | `/` | `/` | Home |
| 2 | `/about` | `/about/` | About Us |
| 3 | `/construction` | `/construction/` | Service detail |
| 4 | `/transporatation` | `/transportation/` | **Typo corrected**, 301 redirect from old URL |
| 5 | `/minning` | `/mining/` | **Typo corrected**, 301 redirect from old URL |
| 6 | `/projects` | `/projects/` | Project gallery |
| 7 | `/contact` | `/contact/` | Contact form + map |
| 8 | `/vehicle-registration` | `/vehicle-registration/` | Register for Vehicle Lease |
| 9 | `/purchase-vehicle-registration` | `/purchase-vehicle-registration/` | Apply for Vehicle Purchase |
| 10 | `/default-vehicle-registration` | `/default-vehicle-registration/` | Sell a Defaulter Vehicle |
| 11 | `/login` | `/login/` | Admin login (posts to PHP) |
| 12 | `/data-deletion-request` | `/data-deletion-request/` | Required for Play Store compliance |
| 13 | Modal only | `/privacy-policy/` | Promoted from modal to real page (SEO + app store) |
| 14 | Modal only | `/terms-and-conditions/` | Promoted from modal to real page |
| 15 | Footer link (dead) | `/support/` | Currently links nowhere; make it real |
| 16 | — | `/services/` | New index page for the three service lines |

### 4.2 New page

| # | Route | Description |
|---|---|---|
| 17 | `/compare-packages/` | Construction package comparison tool — see §6 |

### 4.3 Utility

| Route | Description |
|---|---|
| `/404` | Custom not-found page |
| `/sitemap.xml` | Generated at build |
| `/robots.txt` | Static |

---

## 5. Global requirements

### 5.1 Header
- Sticky, condenses on scroll
- Utility bar: phone numbers, email, social links
- Logo → home
- Nav: Home, About, Services (dropdown: Construction / Transportation / Mining / **Compare Packages**), Projects, Register Vehicle (dropdown: Purchase / Defaulter / Lease), Contact
- Admin Login as a de-emphasised link, not a primary nav item
- Full mobile drawer with accessible disclosure buttons (current site's dropdowns do not work well on touch)

### 5.2 Footer
Office address, both phone numbers, email, business hours, quick links, Google Map embed (lazy-loaded), Delete My Data link, copyright.

### 5.3 Non-functional

| Requirement | Target |
|---|---|
| Lighthouse Performance (mobile) | ≥ 90 |
| Lighthouse Accessibility | ≥ 95 |
| Largest Contentful Paint | < 2.5 s on 4G |
| Total page weight (home) | < 900 KB |
| Responsive breakpoints | 360 / 768 / 1024 / 1440 px |
| Browsers | Last 2 versions of Chrome, Safari, Edge, Firefox; iOS Safari 15+ |
| Accessibility | WCAG 2.1 AA — keyboard nav, visible focus, alt text, 4.5:1 contrast, `prefers-reduced-motion` respected |
| SEO | Unique title + meta description per page, Open Graph tags, `LocalBusiness` + `FAQPage` JSON-LD, canonical URLs |
| Language | English (Odia strings preserved where they already appear in the address) |

### 5.4 Fixes to existing site defects
- Spelling: "Transporatation" → Transportation, "Minning" → Mining, "Vechicle Registation" → Vehicle Registration, "Exacavator" → Excavator, "Polution" → Pollution, "Bricks Mecin" → Brick Machine
- Replace all lorem-ipsum placeholder copy on Projects and Services
- Remove the "10 Years of Working Experience" / "25 Years Experience" contradiction — agree one number with the client
- Add real `alt` text to every image
- Add page-level `<title>` and meta descriptions (currently blank sitewide)

---

## 6. New page: Compare Packages

Modelled on `bricknbolt.com/compare-packages`, adapted to Babita Construction.

### 6.1 Controls
- **City selector** — Bhubaneswar, Cuttack, Puri, Rourkela, Sambalpur (each applies a rate multiplier)
- **Home type toggle** — Homes / Luxury Homes
- **Two package dropdowns** — pick any two packages of the selected type to compare side by side

### 6.2 Packages

| Type | Package | Indicative rate |
|---|---|---|
| Homes | Essential | ₹1,749 / sq ft |
| Homes | Classic | ₹1,999 / sq ft |
| Homes | Premium | ₹2,349 / sq ft |
| Luxury | Signature | ₹2,799 / sq ft |
| Luxury | Bespoke | ₹3,299 / sq ft |

> Rates are placeholders. **Client must supply final rates and inclusions before launch.**

### 6.3 Comparison table
Sticky header row; grouped by category:

1. Design & Approvals — architectural drawings, structural design, 3D elevation, approval assistance
2. Structure — cement grade, steel brand, concrete grade, block type, RCC design
3. Kitchen — counter, sink, wall tiling height, fittings wallet
4. Bathroom — CP fittings wallet, sanitaryware wallet, tile wallet, waterproofing
5. Doors & Windows — main door, internal doors, window frames, grills
6. Flooring & Tiling — living, bedroom, balcony, staircase allowances
7. Painting — interior, exterior, putty, primer coats
8. Electrical — wiring brand, switches wallet, points per room, provisions
9. Plumbing — pipe brands (CPVC/UPVC), overhead + underground tank capacity
10. Elevation & Exterior — parapet, compound wall (add-on), terrace finish
11. Project Management — site engineer, QA checks, app-based tracking
12. Warranty — structural warranty, materials warranty

### 6.4 Behaviour
- **"Show differences only"** toggle — hides rows where both packages match
- **Built-up area input** (sq ft) → live estimated total = area × rate × city multiplier, with GST note
- **FAQ accordion** — reuse the 10 questions from the reference page, rewritten in Babita's voice, marked up with `FAQPage` JSON-LD
- **"Book a free consultation"** form → PHP endpoint, prefilled with the selected package, city and area
- Fully responsive: on mobile the two packages become swipeable stacked cards rather than a table
- All logic runs client-side (no server needed) — package data lives in `src/data/packages.js`

---

## 7. Forms

All forms POST to PHP endpoints under `/api/`. Every form needs: client-side validation, inline error messages, a disabled-while-submitting state, a success confirmation, honeypot + rate limiting, and a confirmation email to the submitter.

| Form | Endpoint | Fields |
|---|---|---|
| Contact | `api/contact.php` | Name, Email, Phone, Subject, Message |
| Vehicle Lease | `api/vehicle-lease.php` | Owner name, Email, Contact, Alt contact, Address, VIN, Model, Vehicle type, Listed by, Agreement period, Transaction method, Expected price, **11 file uploads** |
| Vehicle Purchase | `api/vehicle-purchase.php` | Full name, Email, Contact, Alt contact, Address, Vehicle type, Range from, Range to, Transaction method |
| Defaulter Vehicle | `api/vehicle-default.php` | Owner name, Email, Contact, Address, VIN, Model, Vehicle type, Transaction method, Listed by, Expected price, **11 file uploads** |
| Package Enquiry | `api/package-enquiry.php` | Name, Phone, City, Package, Built-up area, Plot location |
| Data Deletion | `api/data-deletion.php` | Name, Email, Phone, Reason |
| Admin Login | `api/login.php` | Username, Password → PHP session |

**File uploads (lease + defaulter):** Vehicle Front, Vehicle Side 1, Vehicle Side 2, Vehicle Back, Permit, Fitness, Pollution, Particular, RC, Insurance, Tax.
Accept JPG/PNG/PDF, max 5 MB each, stored outside `public_html` with randomised filenames, MIME-sniffed server-side.

**Vehicle type list (spelling corrected):** Tipper 6 Wheel, Tata Magic, Tractor, Pick Up, Brick Machine, Trailer, Mahindra Bolero, Hyva 14 Wheel, Hyva 12 Wheel, Trailer Truck, Car, Excavator, JCB Backhoe, 16 Wheel, Hyva 10 Wheel, Truck.

---

## 8. Deployment

1. `npm run build` → static site emitted to `./out`
2. Upload **contents of `out/`** to `public_html/` (hPanel File Manager or FTP)
3. Upload `api/` PHP scripts and set DB credentials in `api/config.php`
4. `.htaccess` at `public_html/` root handles:
   - 301: `/transporatation` → `/transportation/`
   - 301: `/minning` → `/mining/`
   - 301: `/index.view` → `/`
   - Force HTTPS and non-www (or www — client to confirm)
   - Gzip/Brotli compression + far-future cache headers on `/_next/static/`
   - Custom 404 → `/404.html`
5. Enable free SSL in hPanel

Deploys are a full re-upload of `out/`. Optionally wire GitHub → Hostinger auto-deploy so pushing to `main` republishes.

---

## 9. Assets needed from the client

- [ ] Logo in SVG or high-resolution PNG (current `logo.png` is low-res)
- [ ] Real project photographs with names, locations, client, year, scope
- [ ] Final package rates and inclusions for Compare Packages
- [ ] Confirmation of years-in-business (10 or 25)
- [ ] Team/leadership photos and bios for About
- [ ] Certifications, registrations, GST/CIN details
- [ ] YouTube video ID for the home page embed
- [ ] Correct social media profile URLs (currently all `#`)
- [ ] Google Analytics / GTM ID
- [ ] MySQL credentials from hPanel + admin email for form notifications

---

## 10. Out of scope for this phase

- Building the admin panel UI (assumes the existing PHP admin continues to work)
- Payment gateway integration
- Multilingual (Odia) content
- Customer login / project tracking portal
- Mobile app changes

---

## 11. Open questions for the client

1. Option A, B or C from §2.3?
2. Is there an existing MySQL database to keep, and can we get a dump?
3. Confirm years in business — 10 or 25?
4. Are the Compare Packages rates real, or indicative-only with "request a quote"?
5. Preferred domain form: `babitaconstruction.com` or `www.babitaconstruction.com`?
6. Should the vehicle-registration file uploads stay at 11 documents, or be trimmed?
