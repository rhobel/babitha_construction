"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";

// Shared frame for the home page's horizontal carousels (projects,
// testimonials): pill + heading + lede, a "view all" link, prev/next controls
// and the scroll-snap rail. Callers supply the cards as children, so the
// scroll logic lives in exactly one place.
export default function CarouselShell({ id, meta, tinted = false, perView = 3, children }) {
  const railRef = useRef(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const sync = useCallback(() => {
    const rail = railRef.current;
    if (!rail) return;
    // 2px of slack — sub-pixel scroll positions never land exactly on the end.
    setAtStart(rail.scrollLeft <= 2);
    setAtEnd(rail.scrollLeft >= rail.scrollWidth - rail.clientWidth - 2);
  }, []);

  useEffect(() => {
    const rail = railRef.current;
    if (!rail) return;
    sync();
    rail.addEventListener("scroll", sync, { passive: true });
    window.addEventListener("resize", sync);
    return () => {
      rail.removeEventListener("scroll", sync);
      window.removeEventListener("resize", sync);
    };
  }, [sync]);

  function scrollBy(direction) {
    const rail = railRef.current;
    if (!rail) return;
    // Step by one card so the snap points stay aligned at any breakpoint.
    const card = rail.firstElementChild;
    const step = card ? card.getBoundingClientRect().width + 24 : rail.clientWidth;
    rail.scrollBy({ left: step * direction, behavior: "smooth" });
  }

  return (
    <section className={`inprogress${tinted ? " inprogress--tint" : ""}`} id={id}>
      <div className="wrap">
        <span className="expertise-pill">{meta.eyebrow}</span>

        <div className="ip-head">
          <div>
            <h2 className="ip-heading">{meta.heading}</h2>
            <p className="ip-lede">{meta.body}</p>
          </div>
          {/* Optional — omitted where no archive page exists to link to. */}
          {meta.viewAll && (
            <Link className="ip-viewall" href={meta.viewAll.href}>
              {meta.viewAll.label}
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M5 12h13M13 6l6 6-6 6" />
              </svg>
            </Link>
          )}
        </div>

        <div className="ip-controls">
          <span className="ip-slider-label">{meta.sliderLabel}</span>
          <div className="ip-nav">
            <button
              type="button"
              className="ip-nav-btn"
              onClick={() => scrollBy(-1)}
              disabled={atStart}
              aria-label="Previous"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M19 12H6M11 6l-6 6 6 6" />
              </svg>
            </button>
            <button
              type="button"
              className="ip-nav-btn ip-nav-btn--next"
              onClick={() => scrollBy(1)}
              disabled={atEnd}
              aria-label="Next"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M5 12h13M13 6l6 6-6 6" />
              </svg>
            </button>
          </div>
        </div>

        <ul className="ip-rail" ref={railRef} style={{ "--rail-per-view": perView }}>
          {children}
        </ul>
      </div>
    </section>
  );
}
