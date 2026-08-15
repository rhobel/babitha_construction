"use client";

import { useEffect, useRef, useState } from "react";
import { STATS } from "@/data/home";

function Counter({ target }) {
  const [value, setValue] = useState(0);
  const ref = useRef(null);
  const firedRef = useRef(false);

  useEffect(() => {
    if (!ref.current) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (!entry?.isIntersecting || firedRef.current) return;
        firedRef.current = true;
        observer.unobserve(entry.target);

        if (reduce) {
          setValue(target);
          return;
        }
        const duration = 1400;
        const t0 = performance.now();
        function tick(now) {
          const p = Math.min((now - t0) / duration, 1);
          setValue(Math.round(target * (1 - Math.pow(1 - p, 3))));
          if (p < 1) requestAnimationFrame(tick);
        }
        requestAnimationFrame(tick);
      },
      { threshold: 0.4 },
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <b ref={ref}>{value.toLocaleString("en-IN")}</b>
  );
}

export default function StatsStrip() {
  return (
    <section className="stats" aria-label="Company figures">
      <div className="wrap">
        {STATS.map((stat) => (
          <div className="stat" key={stat.label}>
            <Counter target={stat.value} />
            <span>{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
