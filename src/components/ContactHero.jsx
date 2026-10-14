import { CONTACT_CHANNELS, CONTACT_HERO, WHATSAPP_HREF } from "@/data/contactPage";
import { telHref } from "@/data/company";

const ICONS = {
  phone: <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a1 1 0 0 1-1 1A16 16 0 0 1 4 5a1 1 0 0 1 1-1Z" />,
  chat: (
    <>
      <path d="M20 12a8 8 0 0 1-11.6 7.1L4 20l1-4.2A8 8 0 1 1 20 12Z" />
      <path d="M9 11h.01M12 11h.01M15 11h.01" />
    </>
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3.5 7 8.5 6 8.5-6" />
    </>
  ),
};

function Icon({ name }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {ICONS[name]}
    </svg>
  );
}

const Arrow = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
    <path d="M5 12h13M13 6l6 6-6 6" />
  </svg>
);

export default function ContactHero() {
  return (
    <section className="chero" id="contact-hero">
      <div className="wrap">
        <div className="chero-top">
          <div className="chero-copy">
            <span className="expertise-pill">{CONTACT_HERO.eyebrow}</span>
            <h1 className="chero-heading">{CONTACT_HERO.heading}</h1>
            <p className="chero-body">{CONTACT_HERO.body}</p>
          </div>

          <div className="chero-direct">
            <span className="chero-direct-title">{CONTACT_HERO.directTitle}</span>
            {CONTACT_HERO.phones.map((phone) => (
              <a
                className="chero-direct-row chero-direct-row--primary"
                href={telHref(phone)}
                key={phone}
              >
                <span className="chero-direct-icon">
                  <Icon name="phone" />
                </span>
                <span>
                  <small>Call</small>
                  <b>{phone}</b>
                </span>
              </a>
            ))}
            <a
              className="chero-direct-row"
              href={WHATSAPP_HREF}
              target="_blank"
              rel="noreferrer"
            >
              <span className="chero-direct-icon">
                <Icon name="chat" />
              </span>
              <span>
                <small>WhatsApp</small>
                <b>WhatsApp us</b>
              </span>
            </a>
          </div>
        </div>

        <ul className="chero-channels">
          {CONTACT_CHANNELS.map((ch) => (
            <li key={ch.id}>
              <span className="chero-ch-icon">
                <Icon name={ch.icon} />
              </span>
              <div className="chero-ch-body">
                <span className="chero-ch-label">{ch.label}</span>
                {ch.phones ? (
                  ch.phones.map((phone) => (
                    <a className="chero-ch-value" href={telHref(phone)} key={phone}>
                      {phone}
                    </a>
                  ))
                ) : (
                  <b className="chero-ch-value">{ch.value}</b>
                )}
                <p>{ch.body}</p>
                <a
                  className="chero-ch-link"
                  href={ch.action.href}
                  {...(ch.action.external ? { target: "_blank", rel: "noreferrer" } : {})}
                >
                  {ch.action.label}
                  <Arrow />
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
