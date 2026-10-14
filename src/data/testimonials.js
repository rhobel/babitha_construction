import { COMPANY } from "./company";

// Client testimonials. The reference design used video cards; with no footage
// available these render as text quotes in the same carousel frame.
//
// ⚠ CLIENT DATA REQUIRED. These three quotes shipped with the repo; the
// ratings and BC…CPC reference numbers on them are placeholders. Replace both
// with the real review and the job it belongs to before launch.
export const TESTIMONIALS_SECTION = {
  eyebrow: "Testimonials",
  heading: "What our clients say",
  body: `Hear directly from homeowners who trusted ${COMPANY.name} to build their homes — their experience of our quality construction, transparent pricing and professional project management.`,
  // No testimonials archive page exists, so the carousel omits its view-all link.
  sliderLabel: "Slide through client experiences",
};

export const TESTIMONIALS = [
  {
    quote:
      "Impressive expertise in integrating complex systems. Our productivity and data accuracy have improved significantly.",
    initials: "SH",
    name: "SK Modasir Hossain",
    role: "Project Manager",
    rating: 5,
    ref: "BCPL202509CPC",
  },
  {
    quote:
      "We compared three builders before signing. Babitha Constructions was the only one who showed us a real stage-wise checklist instead of a vague timeline — and they stuck to it.",
    initials: "RK",
    name: "Ramesh Kumar",
    role: "Homeowner, Bangalore",
    rating: 5,
    ref: "BCPL202601CPC",
  },
  {
    quote:
      "Having our own site engineer assigned for the whole project made a real difference. Every question got answered by someone who actually knew our site, not a call centre.",
    initials: "AP",
    name: "Anitha Prakash",
    role: "Homeowner, Bangalore",
    rating: 5,
    ref: "BCPL202602CPC",
  },
];
