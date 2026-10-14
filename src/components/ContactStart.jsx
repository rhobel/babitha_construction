import QuoteForm from "./QuoteForm";
import {
  CONTACT_FORM_COPY,
  CONTACT_HERO,
  CONTACT_START,
  WHATSAPP_HREF,
} from "@/data/contactPage";
import { telHref } from "@/data/company";

export default function ContactStart() {
  const tel = telHref(CONTACT_HERO.phones[0]);

  return (
    <section className="cstart" id="start-here">
      <div className="wrap">
        <div className="cstart-shell">
          <div className="cstart-copy">
            <span className="expertise-pill">{CONTACT_START.eyebrow}</span>
            <h2 className="cstart-heading">
              <span>{CONTACT_START.headingLead}</span>
              {CONTACT_START.heading}
            </h2>

            <div className="cstart-actions">
              <a className="cstart-btn cstart-btn--primary" href={tel}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                  <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a1 1 0 0 1-1 1A16 16 0 0 1 4 5a1 1 0 0 1 1-1Z" />
                </svg>
                {CONTACT_START.callLabel}
              </a>
              <a
                className="cstart-btn"
                href={WHATSAPP_HREF}
                target="_blank"
                rel="noreferrer"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M20 12a8 8 0 0 1-11.6 7.1L4 20l1-4.2A8 8 0 1 1 20 12Z" />
                </svg>
                {CONTACT_START.whatsappLabel}
              </a>
            </div>

            <div className="cstart-next">
              <span className="cstart-next-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M4 14v-2a8 8 0 0 1 16 0v2" />
                  <rect x="3" y="13" width="4" height="6" rx="1.6" />
                  <rect x="17" y="13" width="4" height="6" rx="1.6" />
                </svg>
              </span>
              <div>
                <b>{CONTACT_START.nextTitle}</b>
                <small>{CONTACT_START.nextBody}</small>
              </div>
            </div>

            <ol className="cstart-steps">
              {CONTACT_START.steps.map((step) => (
                <li key={step.num}>
                  <span className="cstart-num" aria-hidden="true">
                    {step.num}
                  </span>
                  <div>
                    <b>{step.title}</b>
                    <p>{step.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <div className="cstart-form">
            <QuoteForm copy={CONTACT_FORM_COPY} variant="light" idPrefix="ct" stacked />
          </div>
        </div>
      </div>
    </section>
  );
}
