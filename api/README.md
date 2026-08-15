# Backend — deployment notes

This directory is PHP, not part of the Next.js static export. It gets
uploaded separately to `public_html/api/` (see `requirements.md` §8 and
the root `sprint.md`).

## One-time setup on Hostinger

1. **Database.** Create a MySQL database in hPanel, then import the schema:
   ```
   mysql -u <user> -p <database> < schema.sql
   ```
   or paste `schema.sql` into phpMyAdmin.

2. **Private config, outside `public_html`.** Copy `config.example.php` to
   `~/babitha-secure/config.php` (a sibling directory to `public_html`, not
   inside it) and fill in real values. `lib/config.php` finds it
   automatically via `dirname($_SERVER['DOCUMENT_ROOT'])`; override with the
   `BABITHA_CONFIG_PATH` environment variable if your account layout differs.

3. **Upload storage.** Create the directories referenced by
   `uploadDir` and `rateLimitDir` in your config (e.g.
   `~/babitha-secure/uploads` and `~/babitha-secure/rate-limit`), writable by
   the PHP process (typically the same user PHP-FPM runs as on shared
   hosting — no special chmod beyond owner-writable should be needed).

4. **Seed an admin user:**
   ```
   php -r "echo password_hash('choose-a-strong-password', PASSWORD_DEFAULT), PHP_EOL;"
   ```
   then insert a row into `admin_users` with that hash (see the commented
   `INSERT` at the bottom of `schema.sql`).

5. **Upload this whole `api/` directory** into `public_html/api/`.
   `.htaccess` blocks direct access to `lib/`, `schema.sql` and
   `config.example.php` — only the endpoint scripts in the `api/` root
   should be reachable.

## Local testing

There's no PHP runtime in the environment this backend was written in, so
none of it has been executed — only written carefully and reviewed. Before
trusting it in production:

```
php -l api/*.php api/lib/*.php   # syntax check every file
php -S localhost:8000 -t api     # serve it locally
```

Point a local MySQL instance and a `config.php` (with `BABITHA_CONFIG_PATH`
set) at it, then exercise every endpoint with real `multipart/form-data`
POSTs (curl or the actual frontend forms with `submitForm.js`'s
`fetch('/api/...')` calls) before it goes anywhere near staging.

## Mail deliverability

`lib/mailer.php` uses PHP's built-in `mail()`. On shared hosting without
SPF/DKIM configured for the sending domain, this routinely lands in spam
or gets silently dropped by the receiving server. If confirmation emails
aren't showing up reliably after launch, swap `babitha_send_mail()`'s body
for an SMTP-based mailer (PHPMailer + a transactional provider) — it's the
only function that needs to change.

## Rate limiting

File-based, per (endpoint, IP) pair, stored under `rateLimitDir`. Fine for
a single shared-hosting instance; would need to move to the database (or
something shared) if this ever runs behind multiple app servers.
