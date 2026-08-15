import VehicleLeaseForm from "@/components/VehicleLeaseForm";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("/vehicle-registration/", {
  title: "Register for Vehicle Lease",
  description:
    "List your tipper, hyva, trailer or excavator for lease with Babita Construction. Terms from 3 months to 5 years, cash or EMI.",
});

export default function VehicleRegistrationPage() {
  return (
    <section className="section">
      <div className="wrap">
        <span className="eyebrow">Fleet services</span>
        <h1 className="h-xl" style={{ marginBottom: 12 }}>
          Register for vehicle lease
        </h1>
        <p className="lede" style={{ marginBottom: 28 }}>
          List your tipper, hyva, trailer or excavator for lease. Terms from 3 months to 5 years,
          cash or EMI. You&apos;ll get a reference number and a callback within one working day.
        </p>
        <VehicleLeaseForm />
      </div>
    </section>
  );
}
