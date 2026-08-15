import ServiceDetail from "@/components/ServiceDetail";
import { SERVICE_DETAILS } from "@/data/services";

export const metadata = {
  title: "Transportation",
  description: SERVICE_DETAILS.transportation.summary,
};

export default function TransportationPage() {
  return <ServiceDetail service={SERVICE_DETAILS.transportation} />;
}
