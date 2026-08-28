import { COMPANY } from "./company";

// /cost-plus/ — the founder introduction and the pricing formula.
//
export const FOUNDER_MESSAGE = {
  eyebrow: "Message from the founder",
  heading: "An introduction to the Cost-Plus construction model",
  body: `Hear directly from ${COMPANY.name}' founder on why the Cost-Plus model was created for Bangalore homeowners who want clarity, control and fair pricing without hidden markups on materials and labour.`,
  points: [
    "Why transparent billing matters for homeowners",
    "How actual cost plus a management fee works",
    `What to expect when you build with ${COMPANY.name}`,
  ],
  // The reference used a founder video. No footage exists yet, so this renders
  // as a summary panel. It carries no quote or attribution — any words put in
  // the founder's mouth must come from the founder.
  badge: "The short version",
  quote:
    "Cost-Plus separates what the build actually costs from what we charge to manage it. You see supplier bills as they are, our fee is agreed before work starts, and nothing is folded into a single opaque number.",
  attribution: null,
};

export const COST_PLUS_FORMULA = {
  eyebrow: "The formula",
  heading: `Actual cost + ${COMPANY.name} fee = transparent project cost`,
  body: `${COMPANY.name}' Cost-Plus model for house construction in Bangalore separates actual material and labour cost from the agreed management fee. You see where your money goes, make clearer upgrade decisions and keep better control over your home construction budget.`,
  tiles: [
    { value: "Actual", label: "Material & labour cost" },
    { value: "+ Fee", label: "Agreed management fee" },
    { value: "Weekly", label: "Cost reporting" },
    { value: "Complete", label: "Cost visibility" },
  ],
};

export const COST_PLUS_PARTS = {
  eyebrow: "How to understand it",
  heading: "The model is simple when the parts are clear",
  cards: [
    {
      icon: "receipt",
      title: "Actual Project Cost",
      body: "You pay the real cost of materials, labour, vendors, logistics and site execution with supporting records.",
    },
    {
      icon: "handfee",
      title: `${COMPANY.name} Management Fee`,
      body: `${COMPANY.name} charges an agreed fee for design coordination, procurement, supervision, planning and project management.`,
    },
    {
      icon: "chart",
      title: "Transparent Cost Reports",
      body: "You receive clear stage-wise cost visibility, so the budget is controlled through facts, not assumptions.",
    },
  ],
};

export const COST_PLUS_PROCESS = {
  eyebrow: "Process",
  heading: `How Cost-Plus construction works with ${COMPANY.name}`,
  body: "A structured process keeps the freedom of Cost-Plus without losing discipline on budget, quality or timelines.",
  steps: [
    {
      num: "01",
      icon: "home",
      title: "Scope & Design Freeze",
      body: "We understand your plot, requirements, floor plans, specifications and expected quality level before budgeting.",
    },
    {
      num: "02",
      icon: "doc",
      title: "Open Budget Estimate",
      body: "A transparent estimate is prepared with major cost heads like structure, masonry, plumbing, electrical and finishes.",
    },
    {
      num: "03",
      icon: "clipboard",
      title: "Agreement & Fee Finalisation",
      body: "The management fee, responsibilities, payment flow, reporting format and project controls are documented clearly.",
    },
    {
      num: "04",
      icon: "layers",
      title: "Procurement & Execution",
      body: `Materials, labour and vendors are coordinated by ${COMPANY.name} with dedicated supervision and quality checks.`,
    },
    {
      num: "05",
      icon: "receipt",
      title: "Bills, Reports & Reviews",
      body: "Bills and cost updates are shared at regular intervals so you know where every major rupee is going.",
    },
    {
      num: "06",
      icon: "shield",
      title: "Quality Handover",
      body: "The project is completed with structured checks, documentation and handover support.",
    },
  ],
};

export const COST_PLUS_ADVANTAGES = {
  eyebrow: "Advantages",
  heading: "Why homeowners choose Cost-Plus",
  cards: [
    {
      icon: "rupee",
      title: "Better Cost Control",
      body: "Because you pay actual costs, savings from procurement and smart choices can directly benefit your project.",
    },
    {
      icon: "shield",
      title: "No Hidden Material Markups",
      body: "The model is designed around visibility. Material and labour decisions are easier to review and control.",
    },
    {
      icon: "sparkle",
      title: "Flexible Upgrades",
      body: "Want to upgrade tiles, fittings or finishes during construction? Cost-Plus gives more room for informed changes.",
    },
    {
      icon: "clock",
      title: "Stage-Wise Decision Making",
      body: "You can prioritise budget where it matters most instead of locking every small detail too early.",
    },
    {
      icon: "wallet",
      title: "Transparent Cash Flow",
      body: "Payments are linked to actual progress and real project requirements, improving financial planning.",
    },
    {
      icon: "check",
      title: "Single Team Accountability",
      body: `${COMPANY.name} manages design coordination, procurement, execution and reporting under one accountable team.`,
    },
  ],
};

// Rows 2–3 characterise how lump-sum contracts commonly work; keep the
// wording general — it must not read as a claim about a named rival.
export const COST_PLUS_VS = {
  eyebrow: "Comparison",
  heading: "Cost-Plus vs Lump-Sum",
  body: "Both models can work well. The right choice depends on whether you value fixed-price simplicity or deeper control over actual cost, materials and changes.",
  columns: [
    { id: "cost-plus", title: "Cost-Plus", note: "Transparent actual-cost model", featured: true },
    { id: "lump-sum", title: "Lump-Sum", note: "Fixed-price model", featured: false },
  ],
  rows: [
    {
      label: "How pricing works",
      costPlus: `You pay actual material and labour cost, plus an agreed ${COMPANY.name} management fee.`,
      lumpSum: "You pay one fixed project price based on the agreed scope.",
    },
    {
      label: "Cost saving",
      costPlus: "Payments go directly to vendors at actual cost, so procurement savings stay with your project.",
      lumpSum: "The price is fixed upfront. You pay the agreed amount to the contractor, with no option to save through direct vendor payments.",
    },
    {
      label: "Money safety",
      costPlus: "You pay only after materials reach your site and the related work is completed. Your money stays with you until it is needed.",
      lumpSum: "Large advances are often paid upfront, before materials arrive or work is finished.",
    },
    {
      label: "Cost visibility",
      costPlus: "You can see bills, cost heads and where your money is going.",
      lumpSum: "You see the final price upfront, but vendor and labour splits are not shown.",
    },
    {
      label: "Changes during construction",
      costPlus: "Upgrades and specification changes are easier to plan and approve.",
      lumpSum: "Changes usually need extra approvals and variation charges.",
    },
    {
      label: "Best for homeowners who",
      costPlus: "Want clarity, control and fair pricing on actual project cost.",
      lumpSum: "Prefer a simple fixed budget with less involvement.",
    },
  ],
};

export const COST_PLUS_CTA = {
  eyebrow: "Start with clarity",
  heading: "Want to know if Cost-Plus is right for your home?",
  body: `Share your plot size, expected built-up area and preferred quality level. ${COMPANY.name} will guide you on whether Cost-Plus, package pricing or lump-sum is best for your project.`,
};

export const COST_PLUS_FORM = {
  heading: "Get Cost-Plus guidance",
  body: "Our team will call back with a practical recommendation.",
  services: [
    "Cost-Plus construction",
    "Lump-sum construction",
    "Package pricing",
    "Not sure yet",
  ],
  submitLabel: "Get Free Consultation",
  assurances: ["Response within 24 hours", "No spam · No obligation"],
};
