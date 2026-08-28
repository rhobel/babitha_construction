import { COMPANY } from "./company";
import { PACKAGES } from "./packages";

// ⚠ The WhatsApp links use COMPANY.phones[0]. Confirm that number is actually
// registered on WhatsApp before launch — a wa.me link to a non-WhatsApp number
// dead-ends on an error page.
const WA_NUMBER = COMPANY.phones[0].replace(/\D/g, "");
export const WHATSAPP_HREF = `https://wa.me/${WA_NUMBER}`;

export const CONTACT_HERO = {
  eyebrow: `Contact ${COMPANY.name}`,
  heading: "Contact us",
  body: "Talk to our Design + Build team about construction packages, architecture, cost-plus contracts, budgets, timelines and project feasibility.",
  directTitle: "Reach us directly",
  phone: COMPANY.phones[0],
};

export const CONTACT_CHANNELS = [
  {
    id: "call",
    icon: "phone",
    label: "Call us",
    value: COMPANY.phones[0],
    body: `Speak directly with a ${COMPANY.name} expert.`,
    action: { label: "Call now", href: `tel:${COMPANY.phones[0].replace(/\s/g, "")}` },
  },
  {
    id: "whatsapp",
    icon: "chat",
    label: "WhatsApp",
    value: `Chat with ${COMPANY.name}`,
    body: "Share your plot details, drawings or project requirement.",
    action: { label: "Start chat", href: WHATSAPP_HREF, external: true },
  },
  {
    id: "email",
    icon: "mail",
    label: "Email",
    value: COMPANY.footerEmail,
    body: "Send your requirement and our team will respond shortly.",
    action: { label: "Send email", href: `mailto:${COMPANY.footerEmail}` },
  },
];

export const CONTACT_START = {
  eyebrow: "Start here",
  headingLead: "Share your requirement.",
  heading: "We'll guide the next step.",
  callLabel: "Call now",
  whatsappLabel: "WhatsApp",
  nextTitle: "What happens next?",
  nextBody: "Simple, no-pressure consultation flow",
  steps: [
    {
      num: "1",
      title: "Share your details",
      body: "Name, mobile number and the type of project you are planning.",
    },
    {
      num: "2",
      title: "Get a callback within 24 hours",
      body: `A ${COMPANY.name} consultant will understand your plot, budget and timeline.`,
    },
    {
      num: "3",
      title: "Explore the right path",
      body: "Discuss packages, Cost-Plus contracts, architecture and feasibility.",
    },
    {
      num: "4",
      title: "Move forward with clarity",
      body: "Receive a clear recommendation for estimate, design or site visit.",
    },
  ],
};

export const CONTACT_FORM_COPY = {
  eyebrow: "Free consultation",
  heading: "Tell us about your project",
  body: "Share your name, mobile and project type — our team will call you back.",
  services: [
    "Home construction",
    "Architecture & design",
    "Cost-Plus contract",
    "Package pricing",
    "Something else",
  ],
  submitLabel: "Get Free Consultation",
  assurances: ["Response within 24 hours", "No spam · No obligation"],
};

// Package names come from data/packages.js — the reference's Silver/Gold/
// Platinum/Diamond are that site's tiers, not ours.
const PACKAGE_NAMES = PACKAGES.map((p) => p.name);

export const CONTACT_NEEDS = {
  eyebrow: "Choose your need",
  heading: "Not sure what to ask? Start with your project type.",
  body: "Explore the relevant section first, or submit the form and we'll guide you.",
  cards: [
    {
      id: "construction",
      icon: "home",
      featured: false,
      title: "House Construction",
      body: "Independent homes, villas, duplexes and turnkey Design + Build projects.",
      href: "/construction/",
    },
    {
      id: "architecture",
      icon: "compass",
      featured: true,
      title: "Architecture",
      body: "2D floor plans, 3D elevations, structural drawings and Vastu planning.",
      href: "/architecture/",
    },
    {
      id: "packages",
      icon: "building",
      featured: false,
      title: "Packages",
      body: `${PACKAGE_NAMES.slice(0, -1).join(", ")} and ${PACKAGE_NAMES.at(-1)} construction package guidance.`,
      href: "/packages/",
    },
  ],
};

export const CONTACT_COVERAGE = {
  eyebrow: "Bangalore coverage",
  heading: "We build across Bangalore and surrounding areas",
  body: `From Whitefield, Sarjapur Road and Electronic City to Yelahanka, KR Puram, Kengeri and beyond, ${COMPANY.name} supports homeowners with transparent Design + Build execution.`,
  points: [
    "150+ projects delivered",
    "10-year structural warranty",
    "Cost-Plus & Lump-Sum guidance",
    "Dedicated engineer supervision",
  ],
  officeLabel: "Head office",
  tip: "Share your plot dimensions, location and expected timeline for a faster, more useful consultation.",
  visitTitle: "Before you visit",
  visitPoints: [
    "Book a consultation slot in advance",
    "Carry plot dimensions or survey sketch",
    "Share your preferred budget and timeline",
  ],
  hoursLabel: "Office hours",
  callLabel: "Call office",
  whatsappLabel: "WhatsApp",
};
