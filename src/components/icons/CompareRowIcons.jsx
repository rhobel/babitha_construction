// Small line icons for compare-table row labels, keyed by inclusion row
// key (see src/data/packages.js). Add an entry here whenever a new row
// should show an icon — rows without an entry just render without one.
const ICON_PROPS = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

const doorIcon = (
  <svg {...ICON_PROPS}>
    <rect x="6" y="3" width="12" height="18" rx="1" />
    <circle cx="15" cy="12" r="1" />
  </svg>
);

const houseShelfIcon = (
  <svg {...ICON_PROPS}>
    <path d="M4 21V10l8-6 8 6v11" />
    <line x1="4" y1="21" x2="20" y2="21" />
    <line x1="9" y1="21" x2="9" y2="14" />
    <line x1="15" y1="21" x2="15" y2="14" />
  </svg>
);

const windowGridIcon = (
  <svg {...ICON_PROPS}>
    <rect x="3" y="3" width="18" height="18" rx="1" />
    <line x1="12" y1="3" x2="12" y2="21" />
    <line x1="3" y1="12" x2="21" y2="12" />
  </svg>
);

const paintBrushIcon = (
  <svg {...ICON_PROPS}>
    <path d="M7 3h10l-1 6H8Z" />
    <path d="M8 9h8l-1 5a3 3 0 0 1-3 3 3 3 0 0 1-3-3Z" />
    <line x1="12" y1="17" x2="12" y2="21" />
  </svg>
);

const tileIcon = (
  <svg {...ICON_PROPS}>
    <path d="M12 3 21 8 12 13 3 8Z" />
    <path d="M3 13 12 18 21 13" />
  </svg>
);

const stairsIcon = (
  <svg {...ICON_PROPS}>
    <path d="M3 21v-4h4v-4h4v-4h4v-4h4" />
  </svg>
);

const lightningIcon = (
  <svg {...ICON_PROPS}>
    <path d="M13 2 4 14h6l-1 8 9-12h-6z" />
  </svg>
);

const tankIcon = (
  <svg {...ICON_PROPS}>
    <ellipse cx="12" cy="6" rx="7" ry="3" />
    <path d="M5 6v12a7 3 0 0 0 14 0V6" />
  </svg>
);

const ICONS = {
  steel: (
    <svg {...ICON_PROPS}>
      <line x1="12" y1="2" x2="12" y2="22" />
      <path d="M8 5 12 8" />
      <path d="M8 10 12 13" />
      <path d="M8 15 12 18" />
    </svg>
  ),
  cement: (
    <svg {...ICON_PROPS}>
      <path d="M7 8 6 21a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1L17 8" />
      <path d="M7 8 9 4h6l2 4" />
      <line x1="9" y1="12" x2="15" y2="12" />
      <line x1="9" y1="16" x2="15" y2="16" />
    </svg>
  ),
  aggregates: (
    <svg {...ICON_PROPS}>
      <circle cx="8" cy="14" r="3.2" />
      <circle cx="15" cy="15" r="2.6" />
      <circle cx="12" cy="8" r="2.4" />
    </svg>
  ),
  blockwork: (
    <svg {...ICON_PROPS}>
      <rect x="1" y="4" width="7" height="6" />
      <rect x="8" y="4" width="7" height="6" />
      <rect x="15" y="4" width="8" height="6" />
      <rect x="1" y="14" width="4" height="6" />
      <rect x="5" y="14" width="7" height="6" />
      <rect x="12" y="14" width="7" height="6" />
      <rect x="19" y="14" width="4" height="6" />
    </svg>
  ),
  rccmix: (
    <svg {...ICON_PROPS}>
      <ellipse cx="12" cy="9" rx="7" ry="4" />
      <path d="M5 9 8 20h8l3-11" />
      <line x1="9" y1="13" x2="15" y2="13" />
    </svg>
  ),
  ceilingheight: (
    <svg {...ICON_PROPS}>
      <line x1="6" y1="3" x2="18" y2="3" />
      <line x1="6" y1="21" x2="18" y2="21" />
      <line x1="12" y1="3" x2="12" y2="21" />
      <path d="M9 6 12 3 15 6" />
      <path d="M9 18 12 21 15 18" />
    </svg>
  ),
  ceramicwalldado: (
    <svg {...ICON_PROPS}>
      <line x1="3" y1="6" x2="21" y2="6" />
      <rect x="3" y="9" width="18" height="9" />
      <line x1="9" y1="9" x2="9" y2="18" />
      <line x1="15" y1="9" x2="15" y2="18" />
    </svg>
  ),
  sink: (
    <svg {...ICON_PROPS}>
      <path d="M9 6h6" />
      <path d="M12 6v5" />
      <path d="M4 11h16" />
      <path d="M5 11v3a5 5 0 0 0 5 5h4a5 5 0 0 0 5-5v-3" />
    </svg>
  ),
  sinkfaucet: (
    <svg {...ICON_PROPS}>
      <path d="M6 21v-7" />
      <path d="M6 14a6 6 0 0 1 6-6h4" />
      <circle cx="16.2" cy="8" r="1.3" />
    </svg>
  ),
  sinkaccessories: (
    <svg {...ICON_PROPS}>
      <circle cx="12" cy="12" r="3" />
      <path d="M12 3v3M12 18v3M4.2 4.9l2.1 2.1M17.7 17l2.1 2.1M3 12h3M18 12h3M4.2 19.1l2.1-2.1M17.7 7l2.1-2.1" />
    </svg>
  ),

  bathdado: (
    <svg {...ICON_PROPS}>
      <line x1="3" y1="6" x2="21" y2="6" />
      <rect x="3" y="9" width="18" height="9" />
      <line x1="9" y1="9" x2="9" y2="18" />
      <line x1="15" y1="9" x2="15" y2="18" />
    </svg>
  ),
  sanitarycp: (
    <svg {...ICON_PROPS}>
      <path d="M5 12h14" />
      <path d="M6 12v2a6 6 0 0 0 6 6 6 6 0 0 0 6-6v-2" />
      <path d="M12 12V5" />
      <circle cx="12" cy="4" r="1" />
    </svg>
  ),
  cpvcpipe: (
    <svg {...ICON_PROPS}>
      <path d="M5 4v9a4 4 0 0 0 4 4h10" />
      <path d="M5 4h4" />
      <path d="M15 17h4" />
    </svg>
  ),
  bathroomdoors: doorIcon,
  bathroomaccessories: houseShelfIcon,
  solarheater: houseShelfIcon,

  maindoor: doorIcon,
  internaldoors: doorIcon,
  pujaroomdoor: doorIcon,
  windows: windowGridIcon,
  windowgrills: windowGridIcon,

  interiorpaint: paintBrushIcon,
  exteriorpaint: paintBrushIcon,

  livingdining: tileIcon,
  roomskitchen: tileIcon,
  balcony: tileIcon,
  staircase: stairsIcon,
  parking: (
    <svg {...ICON_PROPS}>
      <circle cx="12" cy="12" r="9" />
      <path d="M10 16V8h3a2.5 2.5 0 0 1 0 5h-3" />
    </svg>
  ),

  fireproofwiring: lightningIcon,
  upswiring: lightningIcon,
  evcharging: lightningIcon,
  wiringswitch: (
    <svg {...ICON_PROPS}>
      <rect x="6" y="3" width="12" height="18" rx="2" />
      <line x1="9" y1="9" x2="15" y2="9" />
    </svg>
  ),
  wiringsocket: (
    <svg {...ICON_PROPS}>
      <rect x="4" y="4" width="16" height="16" rx="2" />
      <circle cx="10" cy="12" r="1" />
      <circle cx="14" cy="12" r="1" />
    </svg>
  ),

  oht: tankIcon,
  sump: tankIcon,
  staircaserailing: stairsIcon,
  coppergas: (
    <svg {...ICON_PROPS}>
      <path d="M12 3c2 3-1 4-1 6.5A3.5 3.5 0 0 0 14.5 13c1.5 0 2.5-1 2.5-1 .3 2-1 6-5 6s-6-3-6-6.5c0-2 1-3.5 2-5C9 5 10 4 12 3Z" />
    </svg>
  ),
  // Service & warranty group — these five rows had no icon and rendered bare.
  eng: (
    <svg {...ICON_PROPS}>
      <path d="M4 16a8 8 0 0 1 16 0" />
      <path d="M10 8.4V5.5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2.9" />
      <path d="M3 16h18v2a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-2Z" />
    </svg>
  ),
  qa: (
    <svg {...ICON_PROPS}>
      <rect x="5" y="4" width="14" height="17" rx="2" />
      <path d="M9 4V3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1" />
      <path d="m9.5 12.5 1.8 1.8 3.4-3.6" />
    </svg>
  ),
  app: (
    <svg {...ICON_PROPS}>
      <rect x="7" y="2.5" width="10" height="19" rx="2" />
      <line x1="11" y1="18.5" x2="13" y2="18.5" />
      <path d="M10 8h4M10 11.5h4" />
    </svg>
  ),
  warrS: (
    <svg {...ICON_PROPS}>
      <path d="M12 3l7 3v6c0 4-3 6.5-7 8-4-1.5-7-4-7-8V6l7-3Z" />
      <path d="M9.5 14V10.5L12 8.5l2.5 2V14" />
    </svg>
  ),
  warrM: (
    <svg {...ICON_PROPS}>
      <path d="M12 3l7 3v6c0 4-3 6.5-7 8-4-1.5-7-4-7-8V6l7-3Z" />
      <path d="m9.4 11.8 1.9 1.9 3.4-3.6" />
    </svg>
  ),
};


export default function RowIcon({ rowKey }) {
  const icon = ICONS[rowKey];
  if (!icon) return null;
  return (
    <span className="cp-row-icon" aria-hidden="true">
      {icon}
    </span>
  );
}
