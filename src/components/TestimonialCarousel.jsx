import CarouselShell from "./CarouselShell";
import { TESTIMONIALS, TESTIMONIALS_SECTION } from "@/data/testimonials";

const MAX_STARS = 5;

function Stars({ rating }) {
  return (
    <span className="tm-stars" aria-label={`${rating} out of ${MAX_STARS} stars`}>
      {Array.from({ length: MAX_STARS }, (_, i) => (
        <svg
          key={i}
          viewBox="0 0 24 24"
          fill={i < rating ? "currentColor" : "none"}
          stroke="currentColor"
          strokeWidth="1.5"
          aria-hidden="true"
        >
          <path d="m12 3.5 2.6 5.3 5.9.9-4.3 4.1 1 5.8-5.2-2.7-5.2 2.7 1-5.8L3.5 9.7l5.9-.9L12 3.5Z" />
        </svg>
      ))}
    </span>
  );
}

export default function TestimonialCarousel() {
  return (
    <CarouselShell id="testimonials" meta={TESTIMONIALS_SECTION} perView={3}>
      {TESTIMONIALS.map((t) => (
        <li className="tm-card" key={t.ref}>
          <span className="tm-mark" aria-hidden="true">
            &ldquo;
          </span>
          <div className="tm-top">
            <Stars rating={t.rating} />
            <span className="tm-ref">{t.ref}</span>
          </div>
          <blockquote className="tm-quote">{t.quote}</blockquote>
          <footer className="tm-by">
            <span className="tm-avatar" aria-hidden="true">
              {t.initials}
            </span>
            <div className="tm-who">
              <b>{t.name}</b>
              <small>{t.role}</small>
            </div>
          </footer>
        </li>
      ))}
    </CarouselShell>
  );
}
