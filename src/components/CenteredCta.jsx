import Link from "next/link";

// Centred call-to-action card. Used by /construction/ and /projects/; `chips`
// is optional, so the same shell covers both variants.
export default function CenteredCta({ id, eyebrow, heading, body, chips, primary, phone }) {
  return (
    <section className="ccta" id={id}>
      <div className="wrap">
        <div className="ccta-shell">
          <span className="expertise-pill">{eyebrow}</span>
          <h2 className="ccta-heading">{heading}</h2>
          <p className="ccta-body">{body}</p>

          {chips?.length > 0 && (
            <ul className="ccta-chips">
              {chips.map((chip) => (
                <li key={chip}>
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
                  {chip}
                </li>
              ))}
            </ul>
          )}

          <div className="ccta-actions">
            <Link className="cl-primary" href={primary.href}>
              {primary.label}
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M5 12h13M13 6l6 6-6 6" />
              </svg>
            </Link>
            <a className="cl-call" href={`tel:${phone.replace(/\s/g, "")}`}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a1 1 0 0 1-1 1A16 16 0 0 1 4 5a1 1 0 0 1 1-1Z" />
              </svg>
              Call {phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
