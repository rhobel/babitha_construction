import QuoteForm from "./QuoteForm";
import { COST_PLUS_CTA, COST_PLUS_FORM } from "@/data/costPlus";
import { COMPANY } from "@/data/company";

export default function CostPlusCta() {
  const phone = COMPANY.phones[0];

  return (
    <section className="cpcta" id="cost-plus-cta">
      <div className="wrap">
        <div className="cpcta-shell">
          <div className="cpcta-copy">
            <span className="expertise-pill">{COST_PLUS_CTA.eyebrow}</span>
            <h2 className="cpcta-heading">{COST_PLUS_CTA.heading}</h2>
            <p className="cpcta-body">{COST_PLUS_CTA.body}</p>
            <a className="archcta-phone" href={`tel:${phone.replace(/\s/g, "")}`}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a1 1 0 0 1-1 1A16 16 0 0 1 4 5a1 1 0 0 1 1-1Z" />
              </svg>
              <b>{phone}</b>
            </a>
          </div>

          <QuoteForm copy={COST_PLUS_FORM} variant="light" idPrefix="cp" />
        </div>
      </div>
    </section>
  );
}
