"use client";

import { useState } from "react";

export default function ProjectCard({ project }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="card">
      <span className="card-num">
        {project.location} · {project.year}
      </span>
      <h3>{project.title}</h3>
      <p>{project.summary}</p>
      <button
        className="card-link"
        style={{ background: "none", border: 0, padding: 0, cursor: "pointer" }}
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
      >
        {open ? "Hide details" : "View details"}
      </button>
      {open && (
        <ul className="check-list" style={{ marginTop: 14 }}>
          {project.scope.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
