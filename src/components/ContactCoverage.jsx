import LazyMap from "./LazyMap";
import { CONTACT_COVERAGE, WHATSAPP_HREF } from "@/data/contactPage";
import { COMPANY } from "@/data/company";

const Tick = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="12" r="9" />
    <path d="m8.5 12.2 2.4 2.4 4.6-4.8" />
  </svg>
);

export default function ContactCoverage() {
  const tel = `tel:${COMPANY.phones[0].replace(/\s/g, "")}`;

  return (
    <section className="ccov" id="coverage">
      <div className="wrap">
        <div className="ccov-shell">
          <div className="ccov-left">
            <span className="expertise-pill">{CONTACT_COVERAGE.eyebrow}</span>
            <h2 className="ccov-heading">{CONTACT_COVERAGE.heading}</h2>
            <p className="ccov-body">{CONTACT_COVERAGE.body}</p>

            <ul className="ccov-points">
              {CONTACT_COVERAGE.points.map((point) => (
                <li key={point}>
                  <Tick />
                  {point}
                </li>
              ))}
            </ul>

            <LazyMap address={COMPANY.address} title={`${COMPANY.name} office location`} />
          </div>

          <div className="ccov-right">
            <div className="ccov-office">
              <span className="ccov-office-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M12 21s7-5.5 7-11a7 7 0 1 0-14 0c0 5.5 7 11 7 11Z" />
                  <circle cx="12" cy="10" r="2.5" />
                </svg>
              </span>
              <div>
                <span className="ccov-label">{CONTACT_COVERAGE.officeLabel}</span>
                <b>{COMPANY.legalName}</b>
                <p>{COMPANY.address}</p>
              </div>
            </div>

            <ul className="ccov-contacts">
              {COMPANY.phones.map((phone) => (
                <li key={phone}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
                    <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a1 1 0 0 1-1 1A16 16 0 0 1 4 5a1 1 0 0 1 1-1Z" />
                  </svg>
                  <a href={`tel:${phone.replace(/\s/g, "")}`}>{phone}</a>
                </li>
              ))}
              <li>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="3" y="5" width="18" height="14" rx="2" />
                  <path d="m3.5 7 8.5 6 8.5-6" />
                </svg>
                <a href={`mailto:${COMPANY.footerEmail}`}>{COMPANY.footerEmail}</a>
              </li>
            </ul>

            <p className="ccov-tip">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M11 4.5 12.6 9l4.5 1.6-4.5 1.6L11 16.7 9.4 12.2 4.9 10.6 9.4 9 11 4.5Z" />
              </svg>
              {CONTACT_COVERAGE.tip}
            </p>

            <div className="ccov-visit">
              <b>{CONTACT_COVERAGE.visitTitle}</b>
              <ul>
                {CONTACT_COVERAGE.visitPoints.map((point) => (
                  <li key={point}>
                    <Tick />
                    {point}
                  </li>
                ))}
              </ul>
            </div>

            <div className="ccov-hours">
              <span className="ccov-hours-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <circle cx="12" cy="12" r="9" />
                  <path d="M12 7v5l3 2" />
                </svg>
              </span>
              <div>
                <span className="ccov-label">{CONTACT_COVERAGE.hoursLabel}</span>
                {COMPANY.hours.map((h) => (
                  <b key={h.day}>
                    {h.day}: {h.time}
                  </b>
                ))}
              </div>
            </div>

            <div className="ccov-actions">
              <a className="cl-primary" href={tel}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                  <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a1 1 0 0 1-1 1A16 16 0 0 1 4 5a1 1 0 0 1 1-1Z" />
                </svg>
                {CONTACT_COVERAGE.callLabel}
              </a>
              <a className="cl-call" href={WHATSAPP_HREF} target="_blank" rel="noreferrer">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M20 12a8 8 0 0 1-11.6 7.1L4 20l1-4.2A8 8 0 1 1 20 12Z" />
                </svg>
                {CONTACT_COVERAGE.whatsappLabel}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
