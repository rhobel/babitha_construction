import ServiceDetail from "@/components/ServiceDetail";
import { SERVICE_DETAILS } from "@/data/services";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("/mining/", {
  title: "Mining",
  description: SERVICE_DETAILS.mining.summary,
});

export default function MiningPage() {
  return <ServiceDetail service={SERVICE_DETAILS.mining} />;
}
