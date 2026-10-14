import QuoteForm from "./QuoteForm";
import { CTA_FORM, CTA_PANEL } from "@/data/ctaPanel";
import { telHref } from "@/data/company";

export default function CtaPanel() {
  return (
    <section className="ctapanel" id="get-estimate">
      <div className="wrap">
        <div className="ctp-shell">
          <div className="ctp-copy">
            <span className="expertise-pill packages-pill">{CTA_PANEL.eyebrow}</span>
            <h2 className="ctp-heading">{CTA_PANEL.heading}</h2>
            <p className="ctp-body">{CTA_PANEL.body}</p>

            <ul className="ctp-points">
              {CTA_PANEL.points.map((point) => (
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

            <div className="ctp-call">
              {CTA_PANEL.phones.map((phone) => (
                <a className="ctp-phone" href={telHref(phone)} key={phone}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                    <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a1 1 0 0 1-1 1A16 16 0 0 1 4 5a1 1 0 0 1 1-1Z" />
                  </svg>
                  <b>{phone}</b>
                </a>
              ))}
              <span className="ctp-note">{CTA_PANEL.phoneNote}</span>
            </div>
          </div>

          <div className="ctp-form">
            <QuoteForm copy={CTA_FORM} variant="light" idPrefix="cta" />
          </div>
        </div>
      </div>
    </section>
  );
}
