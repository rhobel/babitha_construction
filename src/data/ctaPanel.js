import { CALL_PHONES, COMPANY } from "./company";
import { HERO_FORM } from "./home";

// Closing call-to-action panel: pitch on the left, the same three-field
// callback form as the hero on the right.
export const CTA_PANEL = {
  eyebrow: "Start your project",
  heading: "Ready to build your dream home?",
  body: `Get a transparent construction estimate from ${COMPANY.name}. Our team will help you choose the right package and contract model.`,
  points: [
    "Package recommendation",
    "Detailed estimate within 24 hours",
    "No obligation, explore at your pace",
  ],
  phones: CALL_PHONES,
  phoneNote: `Speak directly with a ${COMPANY.name} expert`,
};

export const CTA_FORM = {
  eyebrow: "Free estimate",
  heading: "Tell us about your site",
  body: "Name, mobile and project type — we'll call back within 24 hours.",
  services: HERO_FORM.services,
  submitLabel: HERO_FORM.submitLabel,
  assurances: HERO_FORM.assurances,
};
