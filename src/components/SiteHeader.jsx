"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { NAV } from "@/data/nav";
import { TOPBAR_PROMO } from "@/data/company";
import { CALL_PHONES, COMPANY, telHref } from "@/data/company";

const FOCUSABLE = "a[href], button:not([disabled])";

// Icons for the Services submenu cards, keyed by nav child `icon`.
const MENU_ICONS = {
  helmet: (
    <>
      <path d="M4 16a8 8 0 0 1 16 0" />
      <path d="M10 8.4V5.5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2.9" />
      <path d="M3 16h18v2a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-2Z" />
    </>
  ),
  compass: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="m15.5 8.5-2 5-5 2 2-5 5-2Z" />
    </>
  ),
};

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
          <Link className="topbar-promo" href={TOPBAR_PROMO.href}>
            {TOPBAR_PROMO.label}
          </Link>
          <span className="topbar-call">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
              <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a1 1 0 0 1-1 1A16 16 0 0 1 4 5a1 1 0 0 1 1-1Z" />
            </svg>
            {CALL_PHONES.map((phone, i) => (
              <span key={phone}>
                {i > 0 && " / "}
                <a href={telHref(phone)}>
                  <b>{phone}</b>
                </a>
              </span>
            ))}
          </span>
        </div>
      </div>

      <header
        ref={headerRootRef}
        className={`header${isStuck ? " is-stuck" : ""}`}
      >
        <div className="wrap">
          <Link className="logo" href="/">
            <span className="logo-chip">
              <Image
                className="logo-mark-img"
                src="/brand/logo.png"
                alt={COMPANY.name}
                width={234}
                height={66}
                priority
              />
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
                    <div
                      className={`submenu${openMenu === item.label ? " is-open" : ""}`}
                    >
                      {item.menuTitle && (
                        <span className="submenu-title">{item.menuTitle}</span>
                      )}
                      <ul>
                        {item.children.map((child) => (
                          <li key={child.href}>
                            <Link href={child.href} onClick={() => setOpenMenu(null)}>
                              {child.icon && (
                                <span className="submenu-icon">
                                  <svg
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="1.7"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    aria-hidden="true"
                                  >
                                    {MENU_ICONS[child.icon]}
                                  </svg>
                                </span>
                              )}
                              <span className="submenu-text">
                                <b>
                                  {child.label}
                                  {child.tag && <span className="tag-new">{child.tag}</span>}
                                </b>
                                {child.desc && <small>{child.desc}</small>}
                              </span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
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
            <Link className="btn btn-primary btn-sm" href="/packages/">
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
          </nav>
          <Link
            className="btn btn-primary"
            style={{ marginTop: 20, width: "100%" }}
            href="/packages/"
            onClick={closeDrawer}
          >
            Compare packages
          </Link>
        </div>
      </div>
    </>
  );
}
