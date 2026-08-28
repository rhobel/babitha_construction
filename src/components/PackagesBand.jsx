import Link from "next/link";
import {
  COST_PLUS_BANNER,
  PACKAGES_SECTION,
  PACKAGE_CARDS,
} from "@/data/packageShowcase";

const inr = (n) => `₹${Math.round(n).toLocaleString("en-IN")}`;

const ArrowIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
    <path d="M5 12h13M13 6l6 6-6 6" />
  </svg>
);

export default function PackagesBand() {
  return (
    <section className="packages" id="packages">
      <div className="wrap">
        <span className="expertise-pill packages-pill">{PACKAGES_SECTION.eyebrow}</span>
        <h2 className="packages-heading">{PACKAGES_SECTION.heading}</h2>
        <p className="packages-lede">{PACKAGES_SECTION.body}</p>

        <div className="packages-grid">
          {PACKAGE_CARDS.map((pkg) => (
            <article className="pk-card" key={pkg.id}>
              <span className="pk-accent" style={{ background: pkg.accent }} />

              <div className="pk-top">
                <span className="pk-eyebrow">{pkg.eyebrow}</span>
                {pkg.badge && <span className="pk-badge">{pkg.badge}</span>}
              </div>

              <h3 className="pk-name">{pkg.name}</h3>
              <p className="pk-tag">{pkg.tag}</p>

              <div className="pk-price">
                <span className="pk-price-label">Starting from</span>
                <p className="pk-price-value">
                  <b>{inr(pkg.rate)}</b>
                  <span>/sq.ft*</span>
                </p>
              </div>

              <ul className="pk-points">
                {pkg.points.map((point) => (
                  <li key={point}>
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <circle cx="12" cy="12" r="9" />
                      <path d="m8.5 12.2 2.4 2.4 4.6-4.8" />
                    </svg>
                    {point}
                  </li>
                ))}
              </ul>

              <Link className="pk-cta" href={PACKAGES_SECTION.ctaHref}>
                {PACKAGES_SECTION.ctaLabel}
                <ArrowIcon />
              </Link>
            </article>
          ))}
        </div>

        <p className="packages-note">* {PACKAGES_SECTION.rateNote}</p>

        <div className="cp-banner">
          <span className="cp-banner-icon" aria-hidden="true">
            ₹
          </span>
          <div className="cp-banner-copy">
            <span className="cp-banner-eyebrow">{COST_PLUS_BANNER.eyebrow}</span>
            <h3>{COST_PLUS_BANNER.heading}</h3>
            <p>{COST_PLUS_BANNER.body}</p>
          </div>
          <Link className="cp-banner-cta" href={COST_PLUS_BANNER.action.href}>
            {COST_PLUS_BANNER.action.label}
            <ArrowIcon />
          </Link>
        </div>
      </div>
    </section>
  );
}
