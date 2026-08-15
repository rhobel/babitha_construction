"use client";

import { useState } from "react";

export default function Accordion({ items }) {
  const [openSet, setOpenSet] = useState(() => new Set());

  function toggle(i) {
    setOpenSet((prev) => {
      const next = new Set(prev);
      if (next.has(i)) next.delete(i);
      else next.add(i);
      return next;
    });
  }

  return (
    <div className="acc">
      {items.map((item, i) => {
        const isOpen = openSet.has(i);
        return (
          <div className="acc-item" key={item.question}>
            <button
              className="acc-btn"
              aria-expanded={isOpen}
              aria-controls={`acc-panel-${i}`}
              onClick={() => toggle(i)}
            >
              {item.question}
              <i className="sign" aria-hidden="true" />
            </button>
            <div
              className={`acc-panel${isOpen ? " is-open" : ""}`}
              id={`acc-panel-${i}`}
            >
              <p>{item.answer}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
