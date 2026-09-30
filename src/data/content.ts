/* ------------------------------------------------------------------ */
/*  NHL Projects — t/a Witness Gasmen (Pty) Ltd                        */
/*  All content sourced from nhl-projects.co.za                        */
/* ------------------------------------------------------------------ */

export const IMAGES = {
  logo: "/images/Nhl-Projects-Logo-2048x2048.png",
  heroFlames:
    "/images/010.webp",
  orangeFlames:
    "/images/001.webp",
  stoveFlame:
    "/images/007.webp",
  blueBurner:
    "/images/012.webp",
  cylindersYellow:
    "/images/023.webp",
  cylindersRed:
    "/images/350978278_1343836652838059_597710423635711427_n.jpg",
  tanks:
    "/images/IMG-20240605-WA0032.jpg",
  weldingSparks:
    "/images/Witness-Gasmen-Gas-Welding-002.webp",
  welderPipe:
    "/images/WhatsApp-Image-2024-05-24-at-17.37.55_de50077d.jpg",
  stovePot:
    "/images/Vaal-University-Science-Lab-Renovation.jpg",
  fireplace: "/images/fireplace.jpg",
  laboratory: "/images/laboratory.jpg",
  kitchen: "/images/commercial-kitchen.jpg",
  extinguisher: "/images/fire-extinguisher.jpg",
  gasLine: "/images/gas-line.jpg",
  drainage: "/images/drainage.jpg",
  technician: "/images/technician.jpg",
};

export const CONTACT = {
  phoneDisplay: "084 226 0353",
  phoneIntl: "+27 84 226 0353",
  phoneHref: "tel:+27842260353",
  email: "witnessmabasa@nhl-projects.co.za",
  addressLines: ["22 Kokerboom Cres", "Birchleigh", "Kempton Park", "1621"],
  area: "Based in Ekurhuleni — Kempton Park, Birchleigh",
};

export const HOURS = [
  { day: "Monday", time: "09:00 — 17:00" },
  { day: "Tuesday", time: "09:00 — 17:00" },
  { day: "Wednesday", time: "09:00 — 17:00" },
  { day: "Thursday", time: "09:00 — 17:00" },
  { day: "Friday", time: "09:00 — 17:00" },
  { day: "Saturday", time: "09:00 — 17:00" },
  { day: "Sunday", time: "Closed" },
];

export const STATS = [
  { value: "2019", label: "Founded" },
  { value: "SADC", label: "Regional Operations" },
  { value: "BEE L1", label: "B-BBEE Contributor" },
  { value: "SAQCC", label: "Gas Registered" },
];

export const VALUES = [
  {
    title: "Passion to excel",
    desc: "Every install, refill and repair is delivered with dedication and an obsession for an advanced outcome.",
  },
  {
    title: "Innovating for customers",
    desc: "A focused range of performance-enhancing gases and services, engineered around what our clients actually need.",
  },
  {
    title: "Empowering people",
    desc: "Growing South African talent — from a single domestic installer in 2019 to a registered, multi-accredited team.",
  },
  {
    title: "Thriving through diversity",
    desc: "Serving the public, private and domestic sectors across South Africa and beyond our borders.",
  },
];

export const ACCREDITATIONS = [
  {
    abbr: "BEE L1",
    title: "BEE Level 1",
    desc: "B-BBEE contributor status · 145% procurement recognition",
  },
  {
    abbr: "CIDB",
    title: "CIDB Registered",
    desc: "Construction Industry Development Board registered",
  },
  {
    abbr: "LPGSA",
    title: "LPGSA Member",
    desc: "LP Gas Safety Association of Southern Africa member",
  },
  {
    abbr: "SAQCC",
    title: "SAQCC Gas",
    desc: "Registered Gas Practitioners · Certificate of Compliance issuance",
  },
];

export interface Service {
  id: string;
  title: string;
  tagline: string;
  desc: string;
  bullets?: string[];
  image: string;
}

export const SERVICES: Service[] = [
  {
    id: "01",
    title: "Gas Installation",
    tagline: "Bulk LPG · CO₂ · Geysers",
    desc: "Domestic and commercial gas installation with CoC — plus ventilation and extractor fans for commercial kitchens & warehouses, and sprinklers for deluge systems.",
    bullets: [
      "Bulk LPG Installation",
      "CO₂ Installation",
      "Gas Geysers",
      "Home & Industrial Installation",
    ],
    image: IMAGES.kitchen,
  },
  {
    id: "02",
    title: "Gas Stoves",
    tagline: "Installation & Maintenance",
    desc: "We install gas stoves of all kinds in both domestic and commercial premises — and keep them running at their best.",
    bullets: [
      "Assessment fee R650",
      "R650 annual service per appliance",
      "All stove types — domestic & commercial",
    ],
    image: IMAGES.stovePot,
  },
  {
    id: "03",
    title: "C.O.C Issuance",
    tagline: "Domestic & Commercial",
    desc: "We issue the Certificate of Compliance in gas works to both domestic and commercial clients — safe, legal, certified.",
    image: IMAGES.cylindersRed,
  },
  {
    id: "04",
    title: "Gas Fireplaces",
    tagline: "Designed to Your Space",
    desc: "Domestic and commercial fireplace installation with different designs or sizes, exactly as requested by our client.",
    image: IMAGES.fireplace,
  },
  {
    id: "05",
    title: "Cylinder Exchange",
    tagline: "9KG — 48KG · Free Delivery",
    desc: "We refill and exchange gas from small to bulk cylinders at an affordable charge — delivered free, the same day, around Kempton Park and surrounding areas.",
    bullets: ["9KG", "12KG", "14KG", "19KG", "48KG Cylinders"],
    image: IMAGES.cylindersYellow,
  },
  {
    id: "06",
    title: "Gas Welding",
    tagline: "Welding & Cutting",
    desc: "All sorts of gas welding and cutting — precision work for industrial, commercial and domestic needs.",
    image: IMAGES.weldingSparks,
  },
  {
    id: "07",
    title: "Fire Extinguishers",
    tagline: "Domestic & Commercial",
    desc: "Fire extinguisher installation for all sizes of extinguisher bottles — keeping homes and businesses code-compliant and protected.",
    image: IMAGES.extinguisher,
  },
];

export const PRICING = [
  { size: "9KG", price: 290, was: 300 },
  { size: "12KG", price: 380, was: 400 },
  { size: "14KG", price: 450, was: 460 },
  { size: "19KG", price: 600, was: 650, popular: true },
  { size: "48KG", price: 1500, was: 1600 },
];

export const TIMELINE = [
  {
    year: "2019",
    title: "The Foundation",
    subtitle: "Establishment",
    desc: "Witness Gasmen (Pty) Limited started operating in South Africa as a domestic gas installer.",
  },
  {
    year: "2023",
    title: "Sector Expansion",
    subtitle: "Growth",
    desc: "Became a commercial gas installer for liquid and vapour — a qualified trade-test plumber and a member of the SA plumbing industry.",
  },
  {
    year: "2024",
    title: "Compressed Gas",
    subtitle: "More Experience",
    desc: "Became a qualified compressed gas installer, widening the range of gases and systems we service.",
  },
  {
    year: "Now",
    title: "BEE Level 1 & Service Delivery",
    subtitle: "Present",
    desc: "A BEE Level 1 rated gas installation company with successful projects across the public, private and domestic sectors — in South Africa and across the border.",
  },
];

export const PROJECTS = [
  {
    title: "Drainage & Water Supply",
    subtitle: "Vaal University Science Lab Renovations",
    category: "Plumbing",
    image: IMAGES.drainage,
  },
  {
    title: "Laboratory Renovations",
    subtitle: "Vaal University Science Lab Renovations",
    category: "Renovation",
    image: IMAGES.laboratory,
  },
  {
    title: "Gas Line Installation",
    subtitle: "Vaal University Science Lab Renovations",
    category: "Gas Lines",
    image: IMAGES.gasLine,
  },
  {
    title: "Commercial Gas",
    subtitle: "Bulk Gas Installation",
    category: "Bulk LPG",
    image: IMAGES.tanks,
  },
  {
    title: "Gas Fireplace",
    subtitle: "Domestic Gas Installation",
    category: "Domestic",
    image: IMAGES.fireplace,
  },
  {
    title: "Gas Stove",
    subtitle: "Domestic Gas Installation",
    category: "Domestic",
    image: IMAGES.blueBurner,
  },
];

export const TESTIMONIALS = [
  {
    quote:
      "I have always ordered my gas exchange from NHL Projects Gasmen for the past 2 years because they are reliable and convenient.",
    name: "Shad Rammekoane",
    role: "Managing Director",
  },
  {
    quote:
      "My overnight tasks are so exciting in this cold weather since I got a gas fireplace installed in my lounge.",
    name: "Sam T Mulaudzi",
    role: "ICT Specialist",
  },
  {
    quote:
      "Having such a great cost-effective gas appliances installation. I personally thank Witness Gasmen for such a valuable job done at our restaurant.",
    name: "MLM Fresh & Chips",
    role: "CEO",
  },
];

export const NAV_LINKS = [
  { label: "Who We Are", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Refill & Exchange", href: "#pricing" },
  { label: "Journey", href: "#journey" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];
