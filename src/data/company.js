export const COMPANY = {
  name: "Babitha Constructions",
  legalName: "Babitha Constructions Pvt Ltd",
  tagline: "Bangalore · Since 2000",
  phones: ["+91 890 4040 606", "+91 9945 378 151"],
  topbarEmail: "contact@babithaconstruction.com",
  footerEmail: "contact@babithaconstruction.com",
  address: "#30, 1st Cross, HMR Layout, Near Pavithra School, Medarahalli Chikkabanavara, Bangalore - 560 090",
  hours: [
    { day: "Monday – Friday", time: "09:00 – 19:00" },
    { day: "Saturday", time: "09:00 – 12:00" },
    { day: "Sunday", time: "Closed" },
  ],
  yearsInOperation: 25, // Follows design.html's resolved figure — pending final client confirmation (B-3)
};

// Awaiting real profile URLs from the client (requirements.md §9) — href stays
// null until then so we don't ship dead "#" links.
export const SOCIAL_LINKS = [
  { label: "Facebook", href: null },
  { label: "Instagram", href: null },
  { label: "LinkedIn", href: null },
  { label: "YouTube", href: null },
];
