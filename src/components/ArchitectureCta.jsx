import QuoteForm from "./QuoteForm";
import { ARCHITECTURE_CTA, ARCHITECTURE_FORM } from "@/data/architecture";
import { COMPANY } from "@/data/company";

export default function ArchitectureCta() {
  const phone = COMPANY.phones[0];

  return (
    <section className="archcta" id="start-designing">
      <div className="wrap archcta-grid">
        <div className="archcta-copy">
          <span className="expertise-pill">{ARCHITECTURE_CTA.eyebrow}</span>
          <h2 className="archcta-heading">{ARCHITECTURE_CTA.heading}</h2>
          <p className="archcta-body">{ARCHITECTURE_CTA.body}</p>
          <a className="archcta-phone" href={`tel:${phone.replace(/\s/g, "")}`}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
              <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a1 1 0 0 1-1 1A16 16 0 0 1 4 5a1 1 0 0 1 1-1Z" />
            </svg>
            <b>{phone}</b>
          </a>
        </div>

        <QuoteForm copy={ARCHITECTURE_FORM} variant="light" idPrefix="arch" />
      </div>
    </section>
  );
}
