import VehicleDefaultForm from "@/components/VehicleDefaultForm";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("/default-vehicle-registration/", {
  title: "Sell a Defaulter Vehicle",
  description:
    "Upload the RC, permit, fitness, insurance and tax papers for a defaulter vehicle and set your expected price — Babita Construction handles the rest.",
});

export default function DefaultVehicleRegistrationPage() {
  return (
    <section className="section">
      <div className="wrap">
        <span className="eyebrow">Fleet services</span>
        <h1 className="h-xl" style={{ marginBottom: 12 }}>
          Sell a defaulter vehicle
        </h1>
        <p className="lede" style={{ marginBottom: 28 }}>
          Upload the RC, permit, fitness, insurance and tax papers and set your expected price. We
          handle the rest.
        </p>
        <VehicleDefaultForm />
      </div>
    </section>
  );
}
