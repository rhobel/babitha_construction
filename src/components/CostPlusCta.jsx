import QuoteForm from "./QuoteForm";
import { COST_PLUS_CTA, COST_PLUS_FORM } from "@/data/costPlus";
import { CALL_PHONES, telHref } from "@/data/company";

export default function CostPlusCta() {
  return (
    <section className="cpcta" id="cost-plus-cta">
      <div className="wrap">
        <div className="cpcta-shell">
          <div className="cpcta-copy">
            <span className="expertise-pill">{COST_PLUS_CTA.eyebrow}</span>
            <h2 className="cpcta-heading">{COST_PLUS_CTA.heading}</h2>
            <p className="cpcta-body">{COST_PLUS_CTA.body}</p>
            <div className="archcta-phones">
              {CALL_PHONES.map((phone) => (
                <a className="archcta-phone" href={telHref(phone)} key={phone}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                    <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a1 1 0 0 1-1 1A16 16 0 0 1 4 5a1 1 0 0 1 1-1Z" />
                  </svg>
                  <b>{phone}</b>
                </a>
              ))}
            </div>
          </div>

          <QuoteForm copy={COST_PLUS_FORM} variant="light" idPrefix="cp" />
        </div>
      </div>
    </section>
  );
}
