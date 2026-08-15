import ContactForm from "@/components/ContactForm";
import LazyMap from "@/components/LazyMap";
import { COMPANY } from "@/data/company";

export const metadata = {
  title: "Contact",
  description:
    "Get in touch with Babita Construction — phone, email, office address and a contact form. We reply within one working day.",
};

export default function ContactPage() {
  return (
    <section className="section section--light">
      <div className="wrap">
        <div className="grid grid-2" style={{ gap: 44, alignItems: "start" }}>
          <div>
            <span className="eyebrow">Get in touch</span>
            <h1 className="h-xl" style={{ marginBottom: 16 }}>
              Tell us about the job.
            </h1>
            <p className="lede" style={{ marginBottom: 26 }}>
              Send the details and we&apos;ll come back within one working day. For anything
              urgent, call — someone picks up between 9 and 7.
            </p>

            <div className="card" style={{ marginBottom: 14 }}>
              <span className="card-num">Phone</span>
              <p style={{ margin: 0 }}>
                {COMPANY.phones.map((phone, i) => (
                  <span key={phone}>
                    {i > 0 && " · "}
                    <a href={`tel:${phone.replace(/\s+/g, "")}`}>{phone}</a>
                  </span>
                ))}
              </p>
            </div>
            <div className="card" style={{ marginBottom: 14 }}>
              <span className="card-num">Email</span>
              <p style={{ margin: 0 }}>
                <a href={`mailto:${COMPANY.topbarEmail}`}>{COMPANY.topbarEmail}</a>
              </p>
            </div>
            <div className="card" style={{ marginBottom: 14 }}>
              <span className="card-num">Office</span>
              <p style={{ margin: 0 }}>{COMPANY.address}</p>
            </div>
            <LazyMap address={COMPANY.address} title="Babita Construction office location" />
          </div>

          <ContactForm />
        </div>
      </div>
    </section>
  );
}
