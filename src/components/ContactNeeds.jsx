import Link from "next/link";
import { CONTACT_NEEDS } from "@/data/contactPage";

const ICONS = {
  home: (
    <>
      <path d="M4 10.5 12 4l8 6.5V19a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-8.5Z" />
      <path d="M9.5 20v-4.5a2.5 2.5 0 0 1 5 0V20" />
    </>
  ),
  compass: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="m15.5 8.5-2 5-5 2 2-5 5-2Z" />
    </>
  ),
  building: (
    <>
      <path d="M4 21V6a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v15" />
      <path d="M13 10h6a1 1 0 0 1 1 1v10" />
      <path d="M7 9h2M7 13h2M7 17h2M16 14h1M16 18h1" />
    </>
  ),
};

export default function ContactNeeds() {
  return (
    <section className="cneeds" id="choose-need">
      <div className="wrap">
        <span className="expertise-pill">{CONTACT_NEEDS.eyebrow}</span>
        <h2 className="cneeds-heading">{CONTACT_NEEDS.heading}</h2>
        <p className="cneeds-lede">{CONTACT_NEEDS.body}</p>

        <ul className="cneeds-grid">
          {CONTACT_NEEDS.cards.map((card) => (
            <li
              className={`cneeds-card${card.featured ? " cneeds-card--featured" : ""}`}
              key={card.id}
            >
              <span className={`cneeds-icon${card.featured ? " cneeds-icon--solid" : ""}`}>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  {ICONS[card.icon]}
                </svg>
              </span>
              <h3>{card.title}</h3>
              <p>{card.body}</p>
              <Link className="cneeds-link" href={card.href}>
                Learn more
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M5 12h13M13 6l6 6-6 6" />
                </svg>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
