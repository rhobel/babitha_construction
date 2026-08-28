import FounderMessage from "@/components/FounderMessage";
import CostPlusFormula from "@/components/CostPlusFormula";
import PaymentFlow from "@/components/PaymentFlow";
import CostPlusParts from "@/components/CostPlusParts";
import CostPlusProcess from "@/components/CostPlusProcess";
import CostPlusAdvantages from "@/components/CostPlusAdvantages";
import CostPlusVs from "@/components/CostPlusVs";
import CostPlusCta from "@/components/CostPlusCta";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("/cost-plus/", {
  title: "Cost-Plus Model",
  description:
    "How the Cost-Plus construction model works: actual material and labour cost plus an agreed management fee, with full cost visibility.",
});

export default function CostPlusPage() {
  return (
    <>
      <FounderMessage />
      <CostPlusFormula />
      <PaymentFlow />
      <CostPlusParts />
      <CostPlusProcess />
      <CostPlusAdvantages />
      <CostPlusVs />
      <CostPlusCta />
    </>
  );
}
