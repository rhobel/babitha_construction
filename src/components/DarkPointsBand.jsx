import Link from "next/link";

// Dark band: pitch on the left, tick cards on the right. Used by the
// architecture "why us" section and the projects "why it matters" section —
// they differ only in copy and whether a button is present.
export default function DarkPointsBand({ id, eyebrow, heading, body, points, action }) {
  return (
    <section className="wharch" id={id}>
      <div className="wrap wha-grid">
        <div className="wha-copy">
          <span className="expertise-pill packages-pill">{eyebrow}</span>
          <h2 className="wha-heading">{heading}</h2>
          <p className="wha-body">{body}</p>
          {action && (
            <Link className="cl-primary" href={action.href}>
              {action.label}
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M5 12h13M13 6l6 6-6 6" />
              </svg>
            </Link>
          )}
        </div>

        <ul className="wha-points">
          {points.map((point) => (
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
                <path d="M12 3l7 3v6c0 4-3 6.5-7 8-4-1.5-7-4-7-8V6l7-3Z" />
                <path d="m9.5 11.8 1.9 1.9 3.4-3.6" />
              </svg>
              {point}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
