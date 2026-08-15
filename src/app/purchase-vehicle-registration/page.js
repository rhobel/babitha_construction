import VehiclePurchaseForm from "@/components/VehiclePurchaseForm";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("/purchase-vehicle-registration/", {
  title: "Apply for Vehicle Purchase",
  description:
    "Tell Babita Construction the vehicle type and your budget range — we'll match it against available stock and get back to you.",
});

export default function PurchaseVehicleRegistrationPage() {
  return (
    <section className="section">
      <div className="wrap">
        <span className="eyebrow">Fleet services</span>
        <h1 className="h-xl" style={{ marginBottom: 12 }}>
          Apply for vehicle purchase
        </h1>
        <p className="lede" style={{ marginBottom: 28 }}>
          Tell us the vehicle type and your budget range. We&apos;ll match it against available
          stock and get back to you within one working day.
        </p>
        <VehiclePurchaseForm />
      </div>
    </section>
  );
}
