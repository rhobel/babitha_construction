"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV, ADMIN_LOGIN } from "@/data/nav";
import { COMPANY, SOCIAL_LINKS } from "@/data/company";

const FOCUSABLE = "a[href], button:not([disabled])";

export default function SiteHeader() {
  const pathname = usePathname();
  const [isStuck, setIsStuck] = useState(false);
  const [openMenu, setOpenMenu] = useState(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [openSubs, setOpenSubs] = useState(() => new Set());

  const headerRootRef = useRef(null);
  const drawerPanelRef = useRef(null);
  const lastFocusedRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setIsStuck(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onDocClick = (e) => {
      if (headerRootRef.current && !headerRootRef.current.contains(e.target)) {
        setOpenMenu(null);
      }
    };
    document.addEventListener("click", onDocClick);
    return () => document.removeEventListener("click", onDocClick);
  }, []);

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key !== "Escape") return;
      setOpenMenu(null);
      setDrawerOpen((open) => {
        if (open) lastFocusedRef.current?.focus?.();
        return false;
      });
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    if (!drawerOpen) return;
    const panel = drawerPanelRef.current;
    if (!panel) return;

    lastFocusedRef.current = document.activeElement;
    panel.querySelector(FOCUSABLE)?.focus();

    const onKeyDown = (e) => {
      if (e.key !== "Tab") return;
      const items = panel.querySelectorAll(FOCUSABLE);
      if (!items.length) return;
      const first = items[0];
      const last = items[items.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    panel.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      panel.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [drawerOpen]);

  function closeDrawer() {
    setDrawerOpen(false);
    setOpenSubs(new Set());
    lastFocusedRef.current?.focus?.();
  }

  function toggleSub(label) {
    setOpenSubs((prev) => {
      const next = new Set(prev);
      if (next.has(label)) next.delete(label);
      else next.add(label);
      return next;
    });
  }

  function isActive(href) {
    if (href === "/") return pathname === "/";
    return pathname?.startsWith(href);
  }

  return (
    <>
      <a className="skip" href="#main">
        Skip to content
      </a>

      <div className="topbar">
        <div className="wrap">
          <div className="topbar-social">
            <span>Follow us</span>
            {SOCIAL_LINKS.map((s) =>
              s.href ? (
                <a key={s.label} href={s.href}>
                  {s.label}
                </a>
              ) : (
                <span key={s.label} className="is-pending" aria-hidden="true">
                  {s.label}
                </span>
              ),
            )}
          </div>
          <div className="topbar-call">
            <span>
              Call us{" "}
              <a href={`tel:${COMPANY.phones[0].replace(/\s+/g, "")}`}>
                <b>{COMPANY.phones[0]}</b>
              </a>
              {" · "}
              <a href={`mailto:${COMPANY.topbarEmail}`}>{COMPANY.topbarEmail}</a>
            </span>
            <Link className="topbar-admin" href={ADMIN_LOGIN.href}>
              {ADMIN_LOGIN.label}
            </Link>
          </div>
        </div>
      </div>

      <header
        ref={headerRootRef}
        className={`header${isStuck ? " is-stuck" : ""}`}
      >
        <div className="wrap">
          <Link className="logo" href="/">
            <span className="logo-mark" aria-hidden="true">
              BC
            </span>
            <span className="logo-text">
              <b>{COMPANY.name}</b>
              <small>{COMPANY.tagline}</small>
            </span>
          </Link>

          <ul className="nav">
            {NAV.map((item) => (
              <li key={item.label}>
                {item.children ? (
                  <>
                    <button
                      className="nav-link"
                      aria-expanded={openMenu === item.label}
                      onClick={(e) => {
                        e.stopPropagation();
                        setOpenMenu((cur) =>
                          cur === item.label ? null : item.label,
                        );
                      }}
                    >
                      {item.label} <i className="caret" aria-hidden="true" />
                    </button>
                    <ul
                      className={`submenu${openMenu === item.label ? " is-open" : ""}`}
                    >
                      {item.children.map((child) => (
                        <li key={child.href}>
                          <Link
                            href={child.href}
                            onClick={() => setOpenMenu(null)}
                          >
                            {child.label}
                            {child.tag && (
                              <span className="tag-new">{child.tag}</span>
                            )}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </>
                ) : (
                  <Link
                    className={`nav-link${isActive(item.href) ? " is-active" : ""}`}
                    href={item.href}
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>

          <div className="header-cta">
            <Link className="btn btn-primary btn-sm" href="/compare-packages/">
              Compare packages
            </Link>
            <button
              className="burger"
              aria-label="Open menu"
              aria-expanded={drawerOpen}
              onClick={() => setDrawerOpen(true)}
            >
              <span />
            </button>
          </div>
        </div>
      </header>

      <div
        className={`drawer${drawerOpen ? " is-open" : ""}`}
        onClick={(e) => {
          if (e.target === e.currentTarget) closeDrawer();
        }}
      >
        <div
          className="drawer-panel"
          ref={drawerPanelRef}
          role="dialog"
          aria-modal="true"
          aria-label="Menu"
        >
          <button className="drawer-close" aria-label="Close menu" onClick={closeDrawer}>
            ×
          </button>
          <nav>
            {NAV.map((item) =>
              item.children ? (
                <div key={item.label}>
                  <button
                    aria-expanded={openSubs.has(item.label)}
                    onClick={() => toggleSub(item.label)}
                  >
                    {item.label} <i className="caret" aria-hidden="true" />
                  </button>
                  <div className={`sub${openSubs.has(item.label) ? " is-open" : ""}`}>
                    {item.children.map((child) => (
                      <Link key={child.href} href={child.href} onClick={closeDrawer}>
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link key={item.href} href={item.href} onClick={closeDrawer}>
                  {item.label}
                </Link>
              ),
            )}
            <Link href={ADMIN_LOGIN.href} onClick={closeDrawer}>
              {ADMIN_LOGIN.label}
            </Link>
          </nav>
          <Link
            className="btn btn-primary"
            style={{ marginTop: 20, width: "100%" }}
            href="/compare-packages/"
            onClick={closeDrawer}
          >
            Compare packages
          </Link>
        </div>
      </div>
    </>
  );
}
