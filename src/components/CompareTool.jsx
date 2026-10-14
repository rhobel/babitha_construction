"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal, flushSync } from "react-dom";
import Image from "next/image";
import Link from "next/link";
import { CALL_PHONES, COMPANY } from "@/data/company";
import { CITIES, INCLUSION_GROUPS, PACKAGES, PRINT_NOTES } from "@/data/packages";
import RowIcon from "./icons/CompareRowIcons";

// Printing is gated behind a password. This is checked in the browser (the
// site is a static export), so it only keeps casual visitors out — the
// package details themselves are public on the page anyway.
const PRINT_PASSWORD = "Abhiraj@2008";

const inr = (n) => `₹${Math.round(n).toLocaleString("en-IN")}`;

export default function CompareTool() {
  const [cityId, setCityId] = useState(CITIES[0].id);
  const [diffOnly, setDiffOnly] = useState(false);
  const [area, setArea] = useState(2000);
  const [printId, setPrintId] = useState(null);
  const [askId, setAskId] = useState(null);
  const [unlocked, setUnlocked] = useState(false);

  // The print sheet is portalled straight into <body> so the print CSS can
  // hide every other body child and print just that one package.
  useEffect(() => {
    const done = () => {
      document.body.classList.remove("is-printing-pkg");
      setPrintId(null);
    };
    window.addEventListener("afterprint", done);
    return () => window.removeEventListener("afterprint", done);
  }, []);

  const printPackage = (id) => {
    flushSync(() => setPrintId(id));
    document.body.classList.add("is-printing-pkg");
    // Wait for the logo so it isn't missing from the printout.
    const logo = document.querySelector(".cp-print-sheet img");
    (logo ? logo.decode() : Promise.resolve()).catch(() => {}).finally(() => window.print());
  };

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
          Indicative only · GST @ 18% extra · Excludes compound wall, borewell and site levelling
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
                  <button
                    type="button"
                    className="cp-print-btn"
                    onClick={() => (unlocked ? printPackage(p.id) : setAskId(p.id))}
                    aria-label={`Print ${p.name} package`}
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M7 9V3h10v6" />
                      <rect x="3" y="9" width="18" height="8" rx="2" />
                      <path d="M7 14h10v7H7z" />
                    </svg>
                    Print
                  </button>
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

      {askId && (
        <PrintPasswordDialog
          pkgName={PACKAGES.find((p) => p.id === askId)?.name}
          onCancel={() => setAskId(null)}
          onUnlock={() => {
            const id = askId;
            setAskId(null);
            setUnlocked(true);
            printPackage(id);
          }}
        />
      )}

      {printId &&
        createPortal(
          <PrintSheet
            pkg={PACKAGES.find((p) => p.id === printId)}
            mult={mult}
            city={cityObj.name}
            area={areaNum}
          />,
          document.body,
        )}
    </>
  );
}

function PrintPasswordDialog({ pkgName, onCancel, onUnlock }) {
  const dialogRef = useRef(null);
  const [value, setValue] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    dialogRef.current?.showModal();
  }, []);

  const submit = (e) => {
    e.preventDefault();
    if (value === PRINT_PASSWORD) {
      dialogRef.current?.close();
      onUnlock();
    } else {
      setError("Incorrect password.");
    }
  };

  return (
    <dialog ref={dialogRef} className="cp-pw" onCancel={onCancel}>
      <form onSubmit={submit}>
        <h3>Print {pkgName} package</h3>
        <label htmlFor="cpPrintPw">Enter password to print</label>
        <input
          className="control"
          id="cpPrintPw"
          type="password"
          autoFocus
          autoComplete="off"
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
            setError("");
          }}
          aria-invalid={error ? "true" : undefined}
          aria-describedby={error ? "cpPrintPwErr" : undefined}
        />
        {error && (
          <p className="cp-pw-error" id="cpPrintPwErr" role="alert">
            {error}
          </p>
        )}
        <div className="cp-pw-actions">
          <button type="button" className="cl-call" onClick={onCancel}>
            Cancel
          </button>
          <button type="submit" className="cl-primary">
            Print
          </button>
        </div>
      </form>
    </dialog>
  );
}

function PrintSheet({ pkg, mult, city, area }) {
  return (
    <div className="cp-print-sheet">
      {/* @page margin is 0 so the browser drops its own title/URL header and
          footer. These spacer rows repeat on every printed page in their
          place, giving each page a top and bottom margin. */}
      <table className="cps-page">
        <thead>
          <tr>
            <td className="cps-page-gap" />
          </tr>
        </thead>
        <tfoot>
          <tr>
            <td className="cps-page-gap" />
          </tr>
        </tfoot>
        <tbody>
          <tr>
            <td>
              <header className="cps-head">
                <Image src="/brand/logo.png" alt={COMPANY.name} width={234} height={66} loading="eager" />
                <div className="cps-contact">
                  <b>{COMPANY.legalName}</b>
                  <span>{CALL_PHONES.join(" · ")}</span>
                  <span>{COMPANY.footerEmail}</span>
                </div>
              </header>

              <h1 className="cps-title">{pkg.name} package</h1>
              {pkg.tag && <p className="cps-tag">{pkg.tag}</p>}
              <dl className="cps-summary">
                {area > 0 && (
                  <div>
                    <dt>Built-up area</dt>
                    <dd>{area.toLocaleString("en-IN")} sq ft</dd>
                  </div>
                )}
                <div>
                  <dt>Rate</dt>
                  <dd>{inr(pkg.rate * mult)} / sq ft</dd>
                </div>
                {area > 0 && (
                  <div className="cps-total">
                    <dt>Estimated cost</dt>
                    <dd>{inr(pkg.rate * mult * area)}</dd>
                    <small>
                      {inr(pkg.rate * mult)} × {area.toLocaleString("en-IN")} sq ft · {city}
                    </small>
                  </div>
                )}
              </dl>

              {/* One table per group so each section stands apart on paper. */}
              {INCLUSION_GROUPS.map((g) => (
                <table className="cps-table" key={g.name}>
                  <tbody>
                    <PrintGroup group={g} pkg={pkg} />
                  </tbody>
                </table>
              ))}

              <section className="cps-notes">
                <h2>Note</h2>
                <ul>
                  {PRINT_NOTES.map((note) => (
                    <li key={note}>{note}</li>
                  ))}
                </ul>
              </section>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

function PrintGroup({ group, pkg }) {
  return (
    <>
      <tr className="cps-group">
        <th colSpan={2}>
          {group.name}
          {group.note && <span>{group.note}</span>}
        </th>
      </tr>
      {group.rows.map(([key, label, note]) => {
        const value = pkg.values[key];
        return (
          <tr key={key}>
            <td className="cps-label">
              {label}
              {note && <span>{note}</span>}
            </td>
            <td>{value === true ? "✓ Included" : value === false ? "✕ Not included" : value || "—"}</td>
          </tr>
        );
      })}
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
