"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { HERO_SLIDES } from "@/data/home";

const INTERVAL_MS = 6500;

export default function HeroSlider() {
  const [cur, setCur] = useState(0);
  const timerRef = useRef(null);

  function go(i) {
    setCur(((i % HERO_SLIDES.length) + HERO_SLIDES.length) % HERO_SLIDES.length);
  }

  function play() {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setCur((c) => (c + 1) % HERO_SLIDES.length);
    }, INTERVAL_MS);
  }

  useEffect(() => {
    play();
    return () => clearInterval(timerRef.current);
  }, []);

  return (
    <section className="hero" onMouseEnter={() => clearInterval(timerRef.current)} onMouseLeave={play}>
      {HERO_SLIDES.map((slide, i) => (
        <div className={`hero-slide${i === cur ? " is-active" : ""}`} key={slide.badge} aria-hidden={i !== cur}>
          <div className="hero-bg" style={{ backgroundImage: `url('${slide.image}')` }} />
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
    </section>
  );
}
