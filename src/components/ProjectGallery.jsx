"use client";

import { useEffect, useMemo, useRef, useState } from "react";
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
  const [zoom, setZoom] = useState(null); // { src, alt } of the open photo

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
                    <button
                      type="button"
                      className="gp-img"
                      style={{ backgroundImage: `url('${p.image}')` }}
                      aria-label={`View photo: ${p.title}`}
                      onClick={() => setZoom({ src: p.image, alt: p.title })}
                    />
                  </div>
                </div>

                <div className="gp-body">
                  <div className="gp-meta">
                    <span className="gp-pill gp-pill--ref">{p.ref}</span>
                    <span className="gp-pill gp-pill--package">{p.package}</span>
                    <span className="gp-pill gp-pill--state">{STATUS_LABEL[p.status]}</span>
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

      {zoom && <PhotoLightbox photo={zoom} onClose={() => setZoom(null)} />}
    </section>
  );
}

function PhotoLightbox({ photo, onClose }) {
  const dialogRef = useRef(null);

  useEffect(() => {
    dialogRef.current?.showModal();
  }, []);

  return (
    // Clicking the dark backdrop (the dialog itself, outside the figure) closes it.
    <dialog
      ref={dialogRef}
      className="gp-lightbox"
      onCancel={onClose}
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <figure>
        {/* eslint-disable-next-line @next/next/no-img-element -- remote + local mix, shown at natural size */}
        <img src={photo.src} alt={photo.alt} />
        <figcaption>{photo.alt}</figcaption>
      </figure>
      <button type="button" className="gp-lightbox-close" onClick={onClose} aria-label="Close photo">
        ✕
      </button>
    </dialog>
  );
}
