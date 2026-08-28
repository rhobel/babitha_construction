import Link from "next/link";
import QuoteForm from "./QuoteForm";
import { HERO, HERO_FORM, HERO_STATS } from "@/data/home";

export default function Hero() {
  return (
    <section className="hero">
      <div
        className="hero-bg"
        style={{ backgroundImage: `url('${HERO.image}')` }}
        role="img"
        aria-label="Completed Babitha Constructions residence at dusk"
      />
      <div className="wrap hero-grid">
        <div className="hero-copy">
          {HERO.badge && (
            <span className="hero-badge">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M12 3l7 3v6c0 4-3 6.5-7 8-4-1.5-7-4-7-8V6l7-3Z" />
                <path d="m9.5 11.5 2 2 4-4" />
              </svg>
              {HERO.badge}
            </span>
          )}

          <h1>
            {HERO.title} <em>{HERO.titleEm}</em>
          </h1>
          <p className="hero-subtitle">{HERO.subtitle}</p>
          <p className="hero-body">{HERO.body}</p>

          <div className="hero-actions">
            {HERO.actions.map((action) => {
              const content = (
                <>
                  {action.phone && (
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      aria-hidden="true"
                    >
                      <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a1 1 0 0 1-1 1A16 16 0 0 1 4 5a1 1 0 0 1 1-1Z" />
                    </svg>
                  )}
                  {action.label}
                  {action.arrow && <span aria-hidden="true">→</span>}
                </>
              );
              const className = `hero-btn hero-btn--${action.variant}`;

              // tel: links can't go through next/link — it only routes
              // in-app paths.
              return action.href.startsWith("tel:") ? (
                <a className={className} href={action.href} key={action.label}>
                  {content}
                </a>
              ) : (
                <Link className={className} href={action.href} key={action.label}>
                  {content}
                </Link>
              );
            })}
          </div>

          <dl className="hero-stats">
            {HERO_STATS.map((stat) => (
              <div className="hero-stat" key={stat.label}>
                <dt>{stat.value}</dt>
                <dd>{stat.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        <QuoteForm copy={HERO_FORM} variant="glass" idPrefix="hero" />
      </div>
    </section>
  );
}
