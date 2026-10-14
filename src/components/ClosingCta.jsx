import Link from "next/link";
import { CLOSING_CTA } from "@/data/closingCta";
import { telHref } from "@/data/company";

export default function ClosingCta() {
  return (
    <section className="closing" id="start">
      <div className="wrap">
        <div className="cl-shell">
          <div className="cl-copy">
            <span className="expertise-pill">{CLOSING_CTA.eyebrow}</span>
            <h2 className="cl-heading">{CLOSING_CTA.heading}</h2>
            <p className="cl-body">{CLOSING_CTA.body}</p>

            <div className="cl-actions">
              <Link className="cl-primary" href={CLOSING_CTA.primary.href}>
                {CLOSING_CTA.primary.label}
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M5 12h13M13 6l6 6-6 6" />
                </svg>
              </Link>
              {CLOSING_CTA.phones.map((phone) => (
                <a className="cl-call" href={telHref(phone)} key={phone}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                    <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a1 1 0 0 1-1 1A16 16 0 0 1 4 5a1 1 0 0 1 1-1Z" />
                  </svg>
                  Call {phone}
                </a>
              ))}
            </div>
          </div>

          <div className="cl-side">
            <ul className="cl-points">
              {CLOSING_CTA.points.map((point) => (
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

            <div className="cl-promise">
              <span className="cl-promise-eyebrow">{CLOSING_CTA.promise.eyebrow}</span>
              <h3>{CLOSING_CTA.promise.title}</h3>
              <p>{CLOSING_CTA.promise.body}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
