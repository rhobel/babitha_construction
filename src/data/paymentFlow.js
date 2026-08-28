import { COMPANY } from "./company";

const NAME = COMPANY.name;

// /cost-plus/ — side-by-side comparison of how money moves under each model.
export const PAYMENT_FLOW = {
  eyebrow: "Payment flow difference",
  heading: "How your money flows makes the biggest difference",
  body: `In a lump-sum model, the client pays the contractor and the contractor manages vendor and labour payments internally. In Cost-Plus, the money flow is more visible: vendors and labour are paid against actual work, while ${NAME} is paid separately for design and project management.`,
};

export const LUMP_SUM_FLOW = {
  badge: "Lump-sum",
  title: "Client pays one company / contractor",
  body: "Vendor and labour payments are handled behind the contractor's quote.",
  chain: [
    { icon: "people", title: "Client", body: "Makes stage-wise payments" },
    { icon: "receipt", title: "Company / Contractor", body: "Receives and controls project payments" },
  ],
  branch: [
    { icon: "store", title: "Material Vendors", body: "Paid by contractor" },
    { icon: "hammer", title: "Labour Contractors", body: "Paid by contractor" },
  ],
  note: "In simple terms: the client sees the agreed project price, but the internal split between vendor cost, labour cost and contractor margin is not visible.",
};

export const COST_PLUS_FLOW = {
  badge: "Cost-plus",
  title: `Client pays actual costs with ${NAME} guidance`,
  body: `Payments are separated clearly: actual vendor and labour costs, and ${NAME}' agreed service and design fee.`,
  client: {
    icon: "people",
    title: "Client",
    body: `Approves bills and releases payments with ${NAME} guidance`,
  },
  guidance: {
    icon: "receipt",
    title: `${NAME} payment guidance`,
    body: `${NAME} verifies requirements, coordinates vendors and labour, checks bills and guides when each payment should be released.`,
  },
  routes: [
    {
      label: "Payment route 1",
      pays: "Actual material bills",
      icon: "store",
      title: "Material Vendors",
      body: "Client pays for cement, steel, blocks, tiles, fixtures and other approved material purchases.",
    },
    {
      label: "Payment route 2",
      pays: "Actual labour work",
      icon: "hammer",
      title: "Labour Contractors",
      body: "Client pays labour contractors based on measured work and agreed labour schedules.",
    },
    {
      label: "Payment route 3",
      pays: "Service + design fee",
      icon: "receipt",
      title: NAME,
      body: `Client pays ${NAME} separately for design, project management, supervision and payment guidance.`,
    },
  ],
  chips: ["Actual cost is visible", `${NAME} fee is separate`, "Payment decisions are guided"],
  note: `In simple terms: you pay vendors and labour for actual work, and pay ${NAME} separately for design and project management. Your costs stay visible instead of being hidden inside one fixed contract price.`,
};
