import Link from "next/link";

export const metadata = {
  title: "Page Not Found",
  robots: { index: false, follow: false },
};

const LINKS = [
  { label: "Construction", href: "/construction/" },
  { label: "Architecture", href: "/architecture/" },
  { label: "Compare packages", href: "/packages/" },
  { label: "Projects", href: "/projects/" },
];

export default function NotFound() {
  return (
    <section className="nf">
      <div className="wrap">
        <div className="nf-shell">
          <span className="expertise-pill">Error 404</span>
          <p className="nf-code" aria-hidden="true">
            404
          </p>
          <h1 className="nf-heading">That page doesn&apos;t exist</h1>
          <p className="nf-body">
            It may have moved, or the link might be out of date. Try one of these instead.
          </p>

          <div className="nf-actions">
            <Link className="cl-primary" href="/">
              Back to home
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M5 12h13M13 6l6 6-6 6" />
              </svg>
            </Link>
            <Link className="cl-call" href="/contact/">
              Contact us
            </Link>
          </div>

          <ul className="nf-links">
            {LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
