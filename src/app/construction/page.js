import ServiceDetail from "@/components/ServiceDetail";
import { SERVICE_DETAILS } from "@/data/services";

export const metadata = {
  title: "Construction",
  description: SERVICE_DETAILS.construction.summary,
};

export default function ConstructionPage() {
  return <ServiceDetail service={SERVICE_DETAILS.construction} />;
}
