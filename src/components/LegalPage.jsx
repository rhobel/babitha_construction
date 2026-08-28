// Shared shell for /privacy-policy/ and /terms-and-conditions/ — pill, heading,
// the pending-review notice, and one card per clause.
export default function LegalPage({ eyebrow, heading, updated, note, children }) {
  return (
    <section className="legal">
      <div className="wrap">
        <span className="expertise-pill">{eyebrow}</span>
        <h1 className="legal-heading">{heading}</h1>
        {updated && <p className="legal-updated">{updated}</p>}

        {note && (
          <p className="legal-note">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <circle cx="12" cy="12" r="9" />
              <path d="M12 8h.01M11 12h1v4h1" />
            </svg>
            <span>{note}</span>
          </p>
        )}

        <div className="legal-body">{children}</div>
      </div>
    </section>
  );
}

export function LegalBlock({ title, children }) {
  return (
    <section className="legal-block">
      <h2>{title}</h2>
      {children}
    </section>
  );
}

export function LegalList({ items }) {
  return (
    <ul className="legal-list">
      {items.map((item) => (
        <li key={item}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <circle cx="12" cy="12" r="9" />
            <path d="m8.5 12.2 2.4 2.4 4.6-4.8" />
          </svg>
          {item}
        </li>
      ))}
    </ul>
  );
}
