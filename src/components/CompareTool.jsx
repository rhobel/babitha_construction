"use client";

import { useState } from "react";
import Link from "next/link";
import { CITIES, INCLUSION_GROUPS, PACKAGES } from "@/data/packages";
import RowIcon from "./icons/CompareRowIcons";

const inr = (n) => `₹${Math.round(n).toLocaleString("en-IN")}`;

export default function CompareTool() {
  const [cityId, setCityId] = useState(CITIES[0].id);
  const [diffOnly, setDiffOnly] = useState(false);
  const [area, setArea] = useState(2000);

  const cityObj = CITIES.find((c) => c.id === cityId) ?? CITIES[0];
  const mult = cityObj.multiplier;

  const groupsWithRows = INCLUSION_GROUPS.map((g) => ({
    ...g,
    rows: g.rows.filter(([key]) => {
      if (!diffOnly) return true;
      const values = new Set(PACKAGES.map((p) => p.values[key]));
      return values.size > 1;
    }),
  })).filter((g) => g.rows.length > 0);
  const totalShown = groupsWithRows.reduce((sum, g) => sum + g.rows.length, 0);

  const areaNum = Math.max(0, Number(area) || 0);

  return (
    <>
      <div className="cp-controls">
        <div className="cp-row" style={{ gridTemplateColumns: "minmax(190px, 280px)" }}>
          <div className="field">
            <label htmlFor="cpCity">City</label>
            <select
              className="control"
              id="cpCity"
              value={cityId}
              onChange={(e) => setCityId(e.target.value)}
            >
              {CITIES.map((c) => (
                <option key={c.id} value={c.id}>
                  {c.name}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div style={{ marginTop: 18, paddingTop: 16, borderTop: "1px solid var(--line)" }}>
          <label className="switch">
            <input
              type="checkbox"
              checked={diffOnly}
              onChange={(e) => setDiffOnly(e.target.checked)}
            />
            <span className="switch-track" />
            Show differences only
          </label>
        </div>
      </div>

      <div className="cp-quote">
        <div className="field">
          <label htmlFor="cpArea">Built-up area (sq ft)</label>
          <input
            className="control"
            id="cpArea"
            type="number"
            min="500"
            max="20000"
            step="50"
            value={area}
            onChange={(e) => setArea(e.target.value)}
          />
        </div>
        {PACKAGES.map((p) => (
          <div className="cp-quote-out" key={p.id}>
            <small>{p.name}</small>
            <b>{areaNum ? inr(p.rate * mult * areaNum) : "—"}</b>
          </div>
        ))}
        <div
          style={{
            gridColumn: "1/-1",
            fontSize: "0.74rem",
            color: "var(--mute)",
          }}
        >
          Indicative only · GST included · Excludes compound wall, borewell and site levelling
        </div>
      </div>

      <div className="cp-scroll">
        <table className="cp-table cp-table--all">
          <thead>
            <tr>
              <th style={{ width: "20%" }}>Inclusion</th>
              {PACKAGES.map((p) => (
                <th key={p.id}>
                  <em>{p.name}</em>
                  <b>{inr(p.rate * mult)} / sq ft</b>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {totalShown === 0 ? (
              <tr>
                <td colSpan={PACKAGES.length + 1} className="cp-empty">
                  All packages are identical on every line. Turn off &ldquo;show differences
                  only&rdquo; to see the full list.
                </td>
              </tr>
            ) : (
              groupsWithRows.map((g) => <RowGroup key={g.name} group={g} />)
            )}
          </tbody>
        </table>
      </div>

      <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginTop: 24 }}>
        <Link className="cl-call" href="/contact/">
          Ask about customisation
        </Link>
      </div>
    </>
  );
}

function RowGroup({ group }) {
  return (
    <>
      <tr className="cp-group">
        <td colSpan={PACKAGES.length + 1}>
          {group.name}
          {group.note && <span className="cp-group-note">{group.note}</span>}
        </td>
      </tr>
      {group.rows.map(([key, label, note]) => {
        const differs = new Set(PACKAGES.map((p) => p.values[key])).size > 1;
        const hasCheck = PACKAGES.some((p) => p.values[key] === true);
        return (
          <tr className={differs || hasCheck ? "cp-diff" : ""} key={key}>
            <td className="cp-label">
              <div className="cp-label-row">
                <RowIcon rowKey={key} />
                <div>
                  {label}
                  {note && <span className="cp-label-note">{note}</span>}
                </div>
              </div>
            </td>
            {PACKAGES.map((p) => (
              <td
                key={p.id}
                className={typeof p.values[key] === "boolean" ? "cp-cell-icon" : undefined}
              >
                <CellValue value={p.values[key]} />
              </td>
            ))}
          </tr>
        );
      })}
    </>
  );
}

function CellValue({ value }) {
  if (value === true) {
    return (
      <span className="cp-check" aria-label="Included" title="Included">
        ✓
      </span>
    );
  }
  if (value === false) {
    return (
      <span className="cp-cross" aria-label="Not included" title="Not included">
        ✕
      </span>
    );
  }
  return value || "—";
}
