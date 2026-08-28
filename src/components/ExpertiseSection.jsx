import Link from "next/link";
import { EXPERTISE } from "@/data/home";

const ICONS = {
  building: (
    <>
      <path d="M4 21V6a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v15" />
      <path d="M13 10h6a1 1 0 0 1 1 1v10" />
      <path d="M7 9h2M7 13h2M7 17h2M16 14h1M16 18h1" />
    </>
  ),
  compass: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="m15.5 8.5-2 5-5 2 2-5 5-2Z" />
    </>
  ),
  clipboard: (
    <>
      <rect x="5" y="4" width="14" height="17" rx="2" />
      <path d="M9 4V3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1" />
      <path d="M9 10h6M9 14h6M9 18h3" />
    </>
  ),
};

export default function ExpertiseSection() {
  return (
    <section className="expertise" id="expertise">
      <div className="wrap">
        <span className="expertise-pill">{EXPERTISE.eyebrow}</span>
        <h2 className="expertise-heading">{EXPERTISE.heading}</h2>
        <p className="expertise-lede">{EXPERTISE.body}</p>

        <div className="expertise-grid">
          {EXPERTISE.cards.map((card) => (
            <article className="xcard" key={card.num}>
              <div className="xcard-top">
                <span className="xcard-icon">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    {ICONS[card.icon]}
                  </svg>
                </span>
                <span className="xcard-num">{card.num}</span>
              </div>

              <h3 className="xcard-title">{card.title}</h3>
              <p className="xcard-body">{card.body}</p>

              <div className="xcard-foot">
                <span className="xcard-label">{EXPERTISE.cardLabel}</span>
                {/* The whole card is the target — the disc is the affordance,
                    and the span carries the accessible name. */}
                <Link className="xcard-go" href={card.href}>
                  <span className="sr-only">{card.title}</span>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <path d="M5 12h13M13 6l6 6-6 6" />
                  </svg>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
