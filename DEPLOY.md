# Deploy runbook — Babitha Construction

Target: Hostinger Premium shared hosting. Static export + PHP backend, per
`requirements.md` §2 and §8.

## 1. Build

```
npm ci
npm run build
```

Produces `./out` — the entire contents of that directory (not the folder
itself) is what goes to `public_html/`.

To enable Google Analytics in this build, set `NEXT_PUBLIC_GA_ID` in the
build environment before running `npm run build` (see
`src/components/GoogleAnalytics.jsx` — it's a no-op until this is set).

## 2. Backend (one-time, before first deploy)

Follow `api/README.md` in full:

1. Create the MySQL database, import `api/schema.sql`.
2. Copy `api/config.example.php` to a private path outside `public_html`
   (e.g. `~/babitha-secure/config.php`) and fill in real values.
3. Create the upload/rate-limit directories referenced in that config.
4. Seed an admin user in `admin_users`.

**This has not been executed or tested against real PHP/MySQL** — see the
"Verification gate" section below before trusting it with real traffic.

## 3. Static site deploy

1. Upload the **contents of `out/`** to `public_html/` (hPanel File Manager
   or FTP). Confirm `.htaccess` actually transferred — FTP clients
   sometimes hide dotfiles by default.
2. Upload the `api/` directory to `public_html/api/`.
3. Enable free SSL for the domain in hPanel.
4. Confirm which canonical host the client wants — `public/.htaccess` (→
   `out/.htaccess`) defaults to non-www; if the client wants `www`, swap
   the commented block in that file per its inline instructions and
   rebuild (open question #5 in `requirements.md` §11).

## 4. DNS cutover (if moving from an existing host)

1. Lower the DNS TTL on the domain at least 24h before cutover.
2. Point A/CNAME records at Hostinger once the site is verified on the
   Hostinger IP directly (via a hosts-file override or the temporary
   Hostinger subdomain) — don't cut DNS over blind.
3. After cutover, re-verify SSL, redirects and forms against the live
   domain, not just the Hostinger temporary URL.

## 5. Verification gate — do not skip

Everything below needs a **real** PHP + MySQL environment, which does not
exist in the environment this project was built in. Before this counts as
launched:

- [ ] `php -l` clean on every file in `api/` and `api/lib/`
- [ ] Every form submits successfully end-to-end (not just client-side
      validation) — contact, package enquiry, data deletion, admin login
- [ ] Confirmation + admin notification emails actually arrive (check
      spam — see the deliverability note in `api/README.md`)
- [ ] Rate limiting actually blocks after the configured threshold
- [ ] Admin login rejects bad credentials with a generic message and
      accepts good ones; session persists across requests
- [ ] Old typo URLs redirect: `/transporatation` → `/transportation/`,
      `/minning` → `/mining/`
- [ ] HTTPS is enforced and the canonical host redirect works
- [ ] `/sitemap.xml` and `/robots.txt` are reachable and correct on the
      live domain
- [ ] Lighthouse (mobile, on the live URL): Performance ≥ 90,
      Accessibility ≥ 95, LCP < 2.5s
- [ ] Real device pass per `requirements.md` §5.3's browser/breakpoint
      matrix — this was not possible without browser tooling during build
- [ ] `NEXT_PUBLIC_GA_ID` set to the client's real GA4 ID and events
      confirmed firing in GA real-time view

## 6. Still blocked on the client (requirements.md §9 / §11)

- Backend approach confirmation (B-1) — built on Option A by default
- Real package rates and inclusions (B-2) — placeholder data is live now
- Years-in-business confirmation (B-3) — using 25 throughout
- Logo (SVG/high-res), real project photography, team photos/bios
- Final Privacy Policy / Terms & Conditions text — current pages are
  clearly marked drafts pending legal review
- Social media URLs (currently unlinked, not dead `#` hrefs)
- Google Analytics / GTM ID
- MySQL credentials + admin notification email address
