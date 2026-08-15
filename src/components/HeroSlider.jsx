"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { HERO_SLIDES } from "@/data/home";

const INTERVAL_MS = 6500;

export default function HeroSlider() {
  const [cur, setCur] = useState(0);
  // Only slide 0's background loads eagerly (it's the LCP candidate). The
  // other three are deferred so they don't compete with it on first paint,
  // and loaded on demand the moment a slide becomes reachable.
  const [loadedSlides, setLoadedSlides] = useState(() => new Set([0]));
  const timerRef = useRef(null);

  function markLoaded(i) {
    setLoadedSlides((prev) => (prev.has(i) ? prev : new Set(prev).add(i)));
  }

  function go(i) {
    const next = ((i % HERO_SLIDES.length) + HERO_SLIDES.length) % HERO_SLIDES.length;
    markLoaded(next);
    setCur(next);
  }

  function play() {
    if (HERO_SLIDES.length <= 1) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setCur((c) => {
        const next = (c + 1) % HERO_SLIDES.length;
        markLoaded(next);
        return next;
      });
    }, INTERVAL_MS);
  }

  useEffect(() => {
    play();
    // Defer loading the rest of the hero backgrounds until just after first
    // paint, so slide 0's image isn't competing with them for bandwidth.
    const idleTimer = setTimeout(() => {
      setLoadedSlides(new Set(HERO_SLIDES.map((_, i) => i)));
    }, 1500);
    return () => {
      clearInterval(timerRef.current);
      clearTimeout(idleTimer);
    };
    // `play` closes only over refs/constants, not props or state — safe to
    // omit and intentionally run this setup once on mount.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className="hero" onMouseEnter={() => clearInterval(timerRef.current)} onMouseLeave={play}>
      {HERO_SLIDES.map((slide, i) => (
        <div className={`hero-slide${i === cur ? " is-active" : ""}`} key={slide.badge} aria-hidden={i !== cur}>
          <div
            className="hero-bg"
            style={loadedSlides.has(i) ? { backgroundImage: `url('${slide.image}')` } : undefined}
          />
          <div className="wrap">
            <div className="hero-inner">
              <span className="hero-badge">{slide.badge}</span>
              <h1>
                {slide.title} <em>{slide.titleEm}</em>
                {slide.titleEnd}
              </h1>
              <p>{slide.body}</p>
              <div className="hero-actions">
                {slide.actions.map((a) => (
                  <Link
                    key={a.label}
                    className={`btn btn-${a.variant}`}
                    href={a.href}
                    tabIndex={i === cur ? 0 : -1}
                  >
                    {a.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}

      {HERO_SLIDES.length > 1 && (
        <div className="hero-nav">
          <div className="wrap" role="tablist" aria-label="Hero slides">
            {HERO_SLIDES.map((slide, i) => (
              <button
                key={slide.badge}
                className="hero-dot"
                role="tab"
                aria-selected={i === cur}
                onClick={() => {
                  go(i);
                  play();
                }}
              >
                <b>{String(i + 1).padStart(2, "0")}</b>
                <span>{slide.navLabel ?? slide.badge}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
