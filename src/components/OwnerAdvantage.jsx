import { OWNER_ADVANTAGE } from "@/data/ownerAdvantage";

export default function OwnerAdvantage() {
  return (
    <section className="owneradv" id="owner-advantage">
      <div className="wrap oa-grid">
        <div className="oa-copy">
          <span className="expertise-pill">{OWNER_ADVANTAGE.eyebrow}</span>
          <h2 className="oa-heading">{OWNER_ADVANTAGE.heading}</h2>
          <p className="oa-body">{OWNER_ADVANTAGE.body}</p>
        </div>

        <ul className="oa-points">
          {OWNER_ADVANTAGE.points.map((point) => (
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
      </div>
    </section>
  );
}
