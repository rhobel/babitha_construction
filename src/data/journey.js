import { COMPANY } from "./company";

// "How it works" — the four-step client journey, and the advantage grid
// beneath it.
//
export const HOW_IT_WORKS = {
  eyebrow: "How it works",
  heading: "From concept to completion in 4 simple steps",
  steps: [
    {
      num: "01",
      icon: "doc",
      title: "Select Package & Book",
      body: "Choose a construction package, review our completed projects, and make an initial booking to reserve your slot.",
    },
    {
      num: "02",
      icon: "ruler",
      title: "Design & Agreement",
      body: "Finalise floor plans, 3D elevations and Vastu layout. Sign a transparent agreement with clear scope and specifications.",
    },
    {
      num: "03",
      icon: "truck",
      title: "Construction & Tracking",
      body: "Construction begins with quality material from trusted brands. Track every milestone with regular photo and video updates.",
    },
    {
      num: "04",
      icon: "key",
      title: "Handover & Warranty",
      // 10-year structural warranty is real — see warrS in data/packages.js.
      body: "On-time completion and handover of your home, with a 10-year structural warranty.",
    },
  ],
};

export const ADVANTAGE = {
  eyebrow: `Why choose ${COMPANY.name}`,
  heading: `The ${COMPANY.name} advantage`,
  cards: [
    {
      icon: "shield",
      title: "Transparent Process",
      body: "No hidden costs — every rupee accounted for with weekly billing reports.",
    },
    {
      icon: "rupee",
      title: "Actual-Cost Billing",
      body: "Our cost-plus model passes procurement savings directly to you.",
    },
    {
      icon: "helmet",
      title: "Quality Material",
      body: "We use only trusted brands — UltraTech, JSW, Asian Paints, Jaquar and more.",
    },
    {
      icon: "clock",
      title: "On-Time Delivery",
      body: "Stage-wise milestone tracking and a dedicated site engineer for every project.",
    },
  ],
};
