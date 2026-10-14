import Link from "next/link";
import Image from "next/image";
import { CALL_PHONES, COMPANY, telHref } from "@/data/company";
import {
  FOOTER_BADGES,
  FOOTER_BLURB,
  FOOTER_COLUMNS,
  SERVICE_LOCATIONS,
} from "@/data/footer";

const CONTACT_ICONS = {
  phone: <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a1 1 0 0 1-1 1A16 16 0 0 1 4 5a1 1 0 0 1 1-1Z" />,
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3.5 7 8.5 6 8.5-6" />
    </>
  ),
  pin: (
    <>
      <path d="M12 21s7-5.5 7-11a7 7 0 1 0-14 0c0 5.5 7 11 7 11Z" />
      <circle cx="12" cy="10" r="2.5" />
    </>
  ),
};



function ContactIcon({ name }) {
  return (
    <span className="ft-contact-icon" aria-hidden="true">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        {CONTACT_ICONS[name]}
      </svg>
    </span>
  );
}

export default function SiteFooter() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="ft-top">
          <div className="ft-brand">
            <Image
              className="ft-logo"
              src="/brand/logo.png"
              alt={COMPANY.name}
              width={234}
              height={66}
            />
            <p className="ft-blurb">{FOOTER_BLURB}</p>

            <div className="ft-badges">
              {FOOTER_BADGES.map((badge) => (
                <span className="ft-badge" key={badge}>
                  {badge}
                </span>
              ))}
            </div>

            <ul className="ft-contact">
              <li>
                <ContactIcon name="phone" />
                {/* Both numbers share one row. */}
                <span className="ft-phones">
                  {CALL_PHONES.map((phone, i) => (
                    <span key={phone}>
                      {i > 0 && <span aria-hidden="true"> · </span>}
                      <a href={telHref(phone)}>{phone}</a>
                    </span>
                  ))}
                </span>
              </li>
              <li>
                <ContactIcon name="mail" />
                <a href={`mailto:${COMPANY.footerEmail}`}>{COMPANY.footerEmail}</a>
              </li>
              <li>
                <ContactIcon name="pin" />
                <span>{COMPANY.address}</span>
              </li>
            </ul>

          </div>

          <div className="ft-cols">
            {FOOTER_COLUMNS.map((col) => (
              <div className="ft-col" key={col.title}>
                <h4>{col.title}</h4>
                <ul>
                  {col.links.map((link) => (
                    <li key={`${col.title}-${link.label}`}>
                      {/* Entries without an href are labels, not links. */}
                      {link.href ? (
                        <Link href={link.href}>{link.label}</Link>
                      ) : (
                        <span className="ft-plain">{link.label}</span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="ft-locations">
          <h4>{SERVICE_LOCATIONS.heading}</h4>
          <p>{SERVICE_LOCATIONS.body}</p>
          <ul>
            {SERVICE_LOCATIONS.areas.map((area) => (
              <li key={area}>{area}</li>
            ))}
          </ul>
        </div>

        <div className="footer-bottom">
          <span>
            © {new Date().getFullYear()} {COMPANY.legalName} · All rights reserved
          </span>
          <span className="ft-credit">
            Design and maintained by{" "}
            <a href="https://www.rhobel.com" target="_blank" rel="noreferrer">
              Rhobel
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
