"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { CITIES, HOME_TYPES, INCLUSION_GROUPS, PACKAGES } from "@/data/packages";
import PackageEnquiryForm from "./PackageEnquiryForm";

const inr = (n) => `₹${Math.round(n).toLocaleString("en-IN")}`;

function firstTwoIds(type) {
  const list = PACKAGES.filter((p) => p.type === type);
  return [list[0]?.id, list[1]?.id ?? list[0]?.id];
}

export default function CompareTool() {
  const [cityId, setCityId] = useState(CITIES[0].id);
  const [type, setType] = useState("home");
  const [[packageAId, packageBId], setPair] = useState(() => firstTwoIds("home"));
  const [diffOnly, setDiffOnly] = useState(false);
  const [area, setArea] = useState(2000);
  const [enquiryOpen, setEnquiryOpen] = useState(false);

  const typedPackages = useMemo(() => PACKAGES.filter((p) => p.type === type), [type]);
  const cityObj = CITIES.find((c) => c.id === cityId) ?? CITIES[0];
  const mult = cityObj.multiplier;
  const packageA = PACKAGES.find((p) => p.id === packageAId);
  const packageB = PACKAGES.find((p) => p.id === packageBId);

  function handleTypeChange(newType) {
    setType(newType);
    setPair(firstTwoIds(newType));
  }

  const groupsWithRows = INCLUSION_GROUPS.map((g) => ({
    ...g,
    rows: g.rows.filter(
      ([key]) => !diffOnly || packageA?.values[key] !== packageB?.values[key],
    ),
  })).filter((g) => g.rows.length > 0);
  const totalShown = groupsWithRows.reduce((sum, g) => sum + g.rows.length, 0);

  const areaNum = Math.max(0, Number(area) || 0);
  const costA = packageA ? packageA.rate * mult * areaNum : 0;
  const costB = packageB ? packageB.rate * mult * areaNum : 0;

  return (
    <>
      <div className="cp-controls">
        <div className="cp-row">
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
          <div className="field">
            <span id="cpTypeLbl">Home type</span>
            <div className="segmented" role="group" aria-labelledby="cpTypeLbl">
              {HOME_TYPES.map((t) => (
                <button
                  key={t.id}
                  type="button"
                  aria-pressed={type === t.id}
                  onClick={() => handleTypeChange(t.id)}
                >
                  {t.label}
                </button>
              ))}
            </div>
          </div>
          <div className="field">
            <label htmlFor="cpA">Package A</label>
            <select
              className="control"
              id="cpA"
              value={packageAId}
              onChange={(e) => setPair([e.target.value, packageBId])}
            >
              {typedPackages.map((p) => (
                <option key={p.id} value={p.id}>
                  {p.name} — {inr(p.rate)}/sq ft
                </option>
              ))}
            </select>
          </div>
          <div className="field">
            <label htmlFor="cpB">Package B</label>
            <select
              className="control"
              id="cpB"
              value={packageBId}
              onChange={(e) => setPair([packageAId, e.target.value])}
            >
              {typedPackages.map((p) => (
                <option key={p.id} value={p.id}>
                  {p.name} — {inr(p.rate)}/sq ft
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
        <div className="cp-quote-out">
          <small>{packageA?.name ?? "Package A"}</small>
          <b>{areaNum ? inr(costA) : "—"}</b>
        </div>
        <div className="cp-quote-out">
          <small>{packageB?.name ?? "Package B"}</small>
          <b>{areaNum ? inr(costB) : "—"}</b>
        </div>
        <div className="cp-quote-out">
          <small>Difference</small>
          <b>{areaNum ? inr(Math.abs(costB - costA)) : "—"}</b>
        </div>
        <div
          style={{
            gridColumn: "1/-1",
            fontFamily: "var(--mono)",
            fontSize: 11,
            letterSpacing: "0.05em",
            color: "var(--slate)",
          }}
        >
          Indicative only · GST included · Excludes compound wall, borewell and site levelling
        </div>
      </div>

      <div className="cp-scroll">
        <table className="cp-table">
          <thead>
            <tr>
              <th style={{ width: "26%" }}>Inclusion</th>
              <th>
                Package A
                <em>{packageA?.name}</em>
                <b>{packageA ? `${inr(packageA.rate * mult)} / sq ft` : ""}</b>
              </th>
              <th>
                Package B
                <em>{packageB?.name}</em>
                <b>{packageB ? `${inr(packageB.rate * mult)} / sq ft` : ""}</b>
              </th>
            </tr>
          </thead>
          <tbody>
            {totalShown === 0 ? (
              <tr>
                <td colSpan={3} className="cp-empty">
                  These two packages are identical on every line. Turn off &ldquo;show
                  differences only&rdquo; to see the full list.
                </td>
              </tr>
            ) : (
              groupsWithRows.map((g) => (
                <RowGroup key={g.name} group={g} packageA={packageA} packageB={packageB} />
              ))
            )}
          </tbody>
        </table>
      </div>

      <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginTop: 26 }}>
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => setEnquiryOpen((o) => !o)}
        >
          {enquiryOpen ? "Hide consultation form" : "Book a free consultation"}
        </button>
        <Link className="btn btn-outline" href="/contact/">
          Ask about customisation
        </Link>
      </div>

      {enquiryOpen && (
        <div style={{ marginTop: 20 }}>
          <PackageEnquiryForm
            packageOptions={[packageA?.name, packageB?.name].filter(Boolean)}
            defaultCityName={cityObj.name}
            defaultPackageName={packageA?.name}
            defaultArea={areaNum}
          />
        </div>
      )}
    </>
  );
}

function RowGroup({ group, packageA, packageB }) {
  return (
    <>
      <tr className="cp-group">
        <td colSpan={3}>{group.name}</td>
      </tr>
      {group.rows.map(([key, label]) => {
        const differs = packageA?.values[key] !== packageB?.values[key];
        return (
          <tr className={differs ? "cp-diff" : ""} key={key}>
            <td className="cp-label">{label}</td>
            <td>{packageA?.values[key] || "—"}</td>
            <td>{packageB?.values[key] || "—"}</td>
          </tr>
        );
      })}
    </>
  );
}
