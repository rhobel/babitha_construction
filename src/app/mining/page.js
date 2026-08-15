import ServiceDetail from "@/components/ServiceDetail";
import { SERVICE_DETAILS } from "@/data/services";

export const metadata = {
  title: "Mining",
  description: SERVICE_DETAILS.mining.summary,
};

export default function MiningPage() {
  return <ServiceDetail service={SERVICE_DETAILS.mining} />;
}
