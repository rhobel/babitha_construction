import { COMPANY } from "./company";

// Home-page FAQ. Distinct from COMPARE_FAQ (package mechanics on
// /packages/) — these cover the company, process and coverage.
//
export const HOME_FAQ_SECTION = {
  eyebrow: "FAQ",
  heading: "Frequently asked questions",
  body: "Have questions about house construction in Bangalore? Find answers to the most common queries about our construction services, pricing and process.",
};

export const HOME_FAQ = [
  {
    question: `What services does ${COMPANY.name} provide?`,
    answer:
      "Home, villa and building turnkey construction, architecture and structural design, home renovation, commercial projects, and end-to-end project management across Bangalore.",
  },
  {
    question: `Why should I choose ${COMPANY.name} for house construction?`,
    answer:
      "Site engineers, plant operators and drivers are on our own payroll, so the people who quote the job are the people who run it. Every build follows a written stage-wise checklist, and the structure carries a 10-year warranty.",
  },
  {
    question: "What is the cost-plus construction model?",
    answer:
      "You pay the actual cost of materials and labour plus an agreed management fee, rather than a single marked-up price. It gives complete cost transparency, weekly billing reports, and the flexibility to change scope during construction.",
  },
  {
    question: "Do you charge separately for designs?",
    answer:
      "Design and structural drawings are part of your construction package rather than a separate bill. The Compare Packages page lists exactly what each tier includes.",
  },
  {
    question: "Do you help with government approvals?",
    answer:
      "We prepare and assemble the drawing set and documentation, and coordinate with the licensed professionals who file on your behalf. Statutory fees are paid by you directly to the authority.",
  },
  {
    question: "How do you assure on-time completion of the project?",
    answer:
      "Each stage has to clear a written quality checklist before the next payment milestone releases, and a dedicated site engineer stays with your project from groundwork to handover.",
  },
  {
    question: "How does the payment process work?",
    answer:
      "Payments are released against stage-wise milestones — never in advance of the work. Each milestone is signed off once its checklist is cleared.",
  },
  {
    question: "How do I monitor the progress of my construction project?",
    answer:
      "Your site engineer shares regular photo and video updates against each milestone, so you can follow progress without needing to visit the site.",
  },
  {
    question: "Which areas in Bangalore do you operate in?",
    answer: `We build across Bangalore and the surrounding areas. Our office is at ${COMPANY.address}.`,
  },
  {
    question: "Does the client need to follow up on the work regularly?",
    answer:
      "No. A dedicated site engineer owns the day-to-day running of your project and reports progress to you — following up is our job, not yours.",
  },
];
