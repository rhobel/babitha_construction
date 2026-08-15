import ServiceDetail from "@/components/ServiceDetail";
import { SERVICE_DETAILS } from "@/data/services";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("/transportation/", {
  title: "Transportation",
  description: SERVICE_DETAILS.transportation.summary,
});

export default function TransportationPage() {
  return <ServiceDetail service={SERVICE_DETAILS.transportation} />;
}
