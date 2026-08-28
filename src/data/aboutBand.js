import { COMPANY } from "./company";

// "About" band below the FAQ.
//
export const ABOUT_BAND = {
  eyebrow: `About ${COMPANY.name}`,
  heading: "Leading house construction company in Bangalore",
  paragraphs: [
    `${COMPANY.legalName} is a home construction company in Bangalore, specialising in house construction, villa construction, commercial construction, apartment construction and architectural design. We serve homeowners across Bangalore and the surrounding areas.`,
    "Our Cost-Plus construction model offers complete cost transparency, letting homeowners pay actual material and labour costs alongside a fixed management fee. We also offer lump-sum contracts for clients who prefer a fixed price.",
    "From design and approvals through to construction and handover, our team delivers quality construction, professional project management and a hassle-free home-building experience.",
  ],
  // Figures track HERO_STATS in data/home.js.
  stats: [
    { value: "150+", label: "Projects delivered" },
    { value: "16+", label: "Years experience" },
    { value: "10yr", label: "Structural warranty" },
    { value: "100%", label: "Transparent billing" },
  ],
  highlight: {
    eyebrow: "Cost-plus focused",
    title: "Transparent construction, better control",
    body: `With 150+ projects completed, dedicated civil engineers, a 10-year structural warranty and trusted brands like UltraTech, JSW Steel, Asian Paints, Jaquar, Havells and Kajaria, ${COMPANY.name} delivers quality home construction with transparency and value.`,
  },
};
