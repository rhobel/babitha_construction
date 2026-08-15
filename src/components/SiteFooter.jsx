import Link from "next/link";
import LazyMap from "./LazyMap";
import { COMPANY } from "@/data/company";
import { FOOTER_QUICK_LINKS, FOOTER_VEHICLE_LINKS } from "@/data/footer";

export default function SiteFooter() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="grid">
          <div>
            <h4>Our office</h4>
            <p className="footer-meta">{COMPANY.address}</p>
            <p className="footer-meta">
              {COMPANY.phones.map((phone, i) => (
                <span key={phone}>
                  {i > 0 && ", "}
                  <a href={`tel:${phone.replace(/\s+/g, "")}`}>{phone}</a>
                </span>
              ))}
            </p>
            <p className="footer-meta">
              <a href={`mailto:${COMPANY.footerEmail}`}>{COMPANY.footerEmail}</a>
            </p>
          </div>
          <div>
            <h4>Quick links</h4>
            <ul>
              {FOOTER_QUICK_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4>Vehicle services</h4>
            <ul>
              {FOOTER_VEHICLE_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4>Business hours</h4>
            {COMPANY.hours.map((h, i) => (
              <div
                key={h.day}
                className="footer-hours"
                style={i === COMPANY.hours.length - 1 ? { border: 0 } : undefined}
              >
                <span>{h.day}</span>
                <b>{h.time}</b>
              </div>
            ))}
          </div>
        </div>

        <div className="footer-map">
          <h4>Find us</h4>
          <LazyMap address={COMPANY.address} title="Babita Construction office location" />
        </div>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} {COMPANY.name} · All rights reserved</span>
          <Link href="/data-deletion-request/">Delete my data</Link>
        </div>
      </div>
    </footer>
  );
}
