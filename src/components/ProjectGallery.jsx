"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  GALLERY_PROJECTS,
  PROJECT_GALLERY,
  PROJECT_SORTS,
  PROJECT_TABS,
  PROJECT_TYPES,
} from "@/data/projectGallery";

const STATUS_LABEL = { completed: "Completed", "in-progress": "In-progress" };

export default function ProjectGallery() {
  const [tab, setTab] = useState("all");
  const [sort, setSort] = useState("latest");
  const [type, setType] = useState("all");

  const shown = useMemo(() => {
    const list = GALLERY_PROJECTS.filter(
      (p) => (tab === "all" || p.status === tab) && (type === "all" || p.type === type),
    );
    // `order` is the recency key — sorting a copy keeps the source array intact.
    return [...list].sort((a, b) => (sort === "latest" ? b.order - a.order : a.order - b.order));
  }, [tab, sort, type]);

  return (
    <section className="gallery" id="project-gallery">
      <div className="wrap">
        <span className="expertise-pill">{PROJECT_GALLERY.eyebrow}</span>
        <h1 className="gallery-heading">
          <span>{PROJECT_GALLERY.headingLead}</span>
          {PROJECT_GALLERY.heading}
        </h1>
        <p className="gallery-lede">{PROJECT_GALLERY.body}</p>

        <div className="gallery-bar">
          <div className="gallery-tabs" role="group" aria-label="Filter projects by status">
            {PROJECT_TABS.map((t) => (
              <button
                key={t.id}
                type="button"
                className="gallery-tab"
                aria-pressed={tab === t.id}
                onClick={() => setTab(t.id)}
              >
                {t.label}
              </button>
            ))}
          </div>

          <div className="gallery-selects">
            <div className="gallery-select">
              <label htmlFor="gSort">Sort</label>
              <select id="gSort" value={sort} onChange={(e) => setSort(e.target.value)}>
                {PROJECT_SORTS.map((s) => (
                  <option key={s.id} value={s.id}>
                    {s.label}
                  </option>
                ))}
              </select>
            </div>
            <div className="gallery-select">
              <label htmlFor="gType">Project type</label>
              <select id="gType" value={type} onChange={(e) => setType(e.target.value)}>
                {PROJECT_TYPES.map((t) => (
                  <option key={t.id} value={t.id}>
                    {t.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <p className="gallery-count" role="status">
          Showing {shown.length} of {GALLERY_PROJECTS.length} projects
        </p>

        {shown.length === 0 ? (
          <p className="gallery-empty">No projects match these filters yet.</p>
        ) : (
          <ul className="gallery-grid">
            {shown.map((p) => (
              <li className="gp-card" key={p.ref}>
                <div className="gp-media">
                  <div className="gp-shot">
                    <div
                        className="gp-img"
                        style={{ backgroundImage: `url('${p.designImage}')` }}
                        role="img"
                        aria-label={`${p.title} — 3D design`}
                      />
                    <span className="gp-tag gp-tag--design">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                        <circle cx="12" cy="12" r="9" />
                        <path d="m15.5 8.5-2 5-5 2 2-5 5-2Z" />
                      </svg>
                      Design
                    </span>
                  </div>
                  <div className="gp-shot">
                    <div
                        className="gp-img"
                        style={{ backgroundImage: `url('${p.siteImage}')` }}
                        role="img"
                        aria-label={`${p.title} — on site`}
                      />
                    <span className="gp-tag gp-tag--status">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                        <path d="M4 16a8 8 0 0 1 16 0" />
                        <path d="M3 16h18v2a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-2Z" />
                      </svg>
                      {STATUS_LABEL[p.status]}
                    </span>
                  </div>
                </div>

                <div className="gp-body">
                  <div className="gp-meta">
                    <span className="gp-pill gp-pill--ref">{p.ref}</span>
                    <span className="gp-pill gp-pill--package">{p.package}</span>
                    <span className="gp-pill gp-pill--state">{STATUS_LABEL[p.status]}</span>
                    {/* No per-project detail pages — this is an enquiry link,
                        so it says so. */}
                    <Link className="gp-view" href="/contact/">
                      Ask about this
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                        <path d="M5 12h13M13 6l6 6-6 6" />
                      </svg>
                    </Link>
                  </div>

                  <h2 className="gp-title">{p.title}</h2>

                  <dl className="gp-specs">
                    <div>
                      <dt>Built-up area (sft)</dt>
                      <dd>{p.area}</dd>
                    </div>
                    <div>
                      <dt>No. of floors</dt>
                      <dd>{p.floors}</dd>
                    </div>
                    <div>
                      <dt>Contract</dt>
                      <dd>{p.contract}</dd>
                    </div>
                    <div>
                      <dt>Project type</dt>
                      <dd>{PROJECT_TYPES.find((t) => t.id === p.type)?.label ?? p.type}</dd>
                    </div>
                    <div>
                      <dt>Location</dt>
                      <dd>{p.location}</dd>
                    </div>
                    <div>
                      <dt>City</dt>
                      <dd>{p.city}</dd>
                    </div>
                  </dl>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
