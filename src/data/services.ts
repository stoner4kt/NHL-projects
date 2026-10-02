export interface ServicePageData {
  slug: string;
  title: string;
  description: string;
  whatWeDo: string;
  capabilities: string[];
  sectors: string[];
  image: string;
  coverage?: string;
  seoTitle?: string;
  metaDescription?: string;
  keywords?: string[];
  serviceLevelAgreements?: { tier: string; description: string }[];
  whatsCovered?: string[];
  plantMaintained?: string[];
}

const COVERAGE =
  "We serve clients nationwide across South Africa and throughout the Southern African Development Community (SADC) region.";

export const SERVICE_PAGES: ServicePageData[] = [
  {
    slug: "gas-appliance-installation",
    seoTitle: "Gas Appliance Installation in Gauteng & South Africa | NHL Projects",
    metaDescription: "Professional gas appliance installation for stoves, hobs, ovens, geysers, heaters and fireplaces across Gauteng and South Africa. Contact NHL Projects for compliant gas work.",
    keywords: ["gas appliance installation Gauteng","gas stove installation Gauteng","gas geyser installation Gauteng","gas fireplace installation South Africa","gas appliance installer South Africa"],
    title: "Gas Appliance Installation",
    description: "Professional fitting and connection of gas appliances across residential and industrial and commercial properties.",
    whatWeDo:
      "We professionally fit and connect gas stoves, hobs, ovens, geysers, heaters, and fireplaces. Every installation is performed to the highest standard and includes the mandatory Gas Certificate of Compliance.",
    capabilities: [
      "Gas stove & hob connection",
      "Oven & fireplace fitting",
      "Gas geyser installation",
      "Heater installation & commissioning",
    ],
    sectors: [
      "Residential",
      "Hotels & lodges",
      "Restaurants & hospitality",
      "Industrial and commercial buildings",
      "Schools & universities",
    ],
    image: "/images/Gas-Fire-Place-Installation.jpg",
    coverage: COVERAGE,
  },
  {
    slug: "gas-pipe-line-work",
    title: "Gas Pipe & Line Work",
    description: "Expert installation and repair of gas piping, internally and externally from the source.",
    whatWeDo:
      "We design and install gas piping both internally within your property and externally from the gas source. All pipework is pressure-tested and signed off with a Gas Certificate of Compliance.",
    capabilities: [
      "Internal gas pipe installation",
      "External supply-line installation",
      "Pipe repair & replacement",
      "Pressure testing & sign-off",
    ],
    sectors: [
      "Residential",
      "Industrial and commercial",
      "Mining",
      "Hospitality",
      "Healthcare",
      "Manufacturing",
    ],
    image: "/images/Gas-line.jpg",
    coverage: COVERAGE,
  },
  {
    slug: "gas-system-setup",
    title: "Gas System Setup",
    description: "Complete installation for LPG and Natural Gas systems.",
    whatWeDo:
      "We design, supply, and commission complete Liquefied Petroleum Gas (LPG) and Natural Gas systems. Every system is commissioned with full safety checks and a Certificate of Compliance on handover.",
    capabilities: [
      "LPG system design & installation",
      "Natural Gas system setup",
      "System commissioning",
      "Safety checks & compliance sign-off",
    ],
    sectors: [
      "Residential",
      "Hospitality",
      "Healthcare",
      "Manufacturing",
      "Mining & remote sites",
      "Industrial and commercial",
    ],
    image: "/images/IMG-20240605-WA0032.jpg",
    coverage: COVERAGE,
  },
  {
    slug: "gas-compliance-safety",
    title: "Gas Compliance & Safety",
    description: "Thorough gas leak detection and official Certificate of Compliance issuance.",
    whatWeDo:
      "We conduct thorough gas leak detection and issue the mandatory Gas Certificate of Compliance (CoC). Our qualified practitioners ensure your installation meets all SAQCC Gas and national regulatory standards.",
    capabilities: [
      "Gas leak detection",
      "Certificate of Compliance issuance",
      "Pressure testing",
      "Regulatory compliance audits",
    ],
    sectors: [
      "Residential",
      "Industrial and commercial",
      "Healthcare",
      "Hospitality",
      "Industrial sectors nationwide",
    ],
    image: "/images/023.webp",
    coverage: COVERAGE,
  },
  {
    slug: "gas-repairs-maintenance",
    title: "Gas Repairs & Maintenance",
    description: "Diagnosis and repair of faulty gas appliances, leaks, and pressure issues.",
    whatWeDo:
      "We diagnose and repair faulty gas appliances, leaks, and pressure issues to ensure ongoing safety and performance. We offer planned preventative maintenance, 24/7 emergency breakdown response with a 4-hour on-site SLA on critical-tier sites, and full statutory compliance inspections.",
    capabilities: [
      "Leak detection & repair",
      "Appliance fault diagnosis",
      "Pressure issue resolution",
      "Preventative maintenance scheduling",
      "24/7 emergency breakdown response (4-hour SLA on critical sites)",
    ],
    sectors: [
      "Medical gas pipelines",
      "Industrial gas plant",
      "LPG bulk installations",
      "Steam boilers",
      "Hot water plant",
      "Pressure vessels",
      "Calibration & instrumentation",
    ],
    image: "/images/007.webp",
    coverage: COVERAGE,
  },
  {
    slug: "medical-gas-infrastructure",
    seoTitle: "Medical Gas Infrastructure & Installation South Africa | NHL Projects",
    metaDescription: "Medical gas infrastructure design, installation and certification for hospitals, clinics, theatres, ICUs, laboratories and veterinary facilities across South Africa and SADC.",
    keywords: ["medical gas installation South Africa","medical gas pipeline installation","hospital medical gas infrastructure","medical oxygen pipeline installation","medical gas systems Gauteng"],
    title: "Medical Gas Infrastructure",
    description: "Pipeline reticulation design, installation, and certification for oxygen, nitrous oxide, medical air, and vacuum systems.",
    whatWeDo:
      "We design, install, and certify pipeline reticulation for oxygen, nitrous oxide, medical air, and vacuum across South Africa and the SADC region. Every system is commissioned to SANS 10166, with independent purity and pressure-drop testing on handover.",
    capabilities: [
      "Medical gas pipeline systems",
      "Manifold systems & bulk storage",
      "PSA oxygen generation",
      "Theatre & ICU pendant systems",
      "Compliance audits & recertification",
    ],
    sectors: [
      "Public hospitals",
      "Private hospitals",
      "Day surgeries & clinics",
      "Special units",
      "Veterinary hospitals",
      "Dental practices",
      "Research laboratories",
    ],
    image: "/images/Vaal-University-Science-Lab-Renovation1.jpg",
    coverage: COVERAGE,
  },
  {
    slug: "industrial-gas-infrastructure",
    seoTitle: "Industrial Gas Infrastructure & Reticulation South Africa | NHL Projects",
    metaDescription: "Industrial gas infrastructure, bulk storage, manifolds and high-pressure reticulation for mining, manufacturing, petrochemical and industrial sites across South Africa.",
    keywords: ["industrial gas installation South Africa","industrial gas infrastructure Gauteng","gas pipeline reticulation South Africa","bulk gas installation Gauteng","high pressure gas installation"],
    title: "Industrial Gas Infrastructure",
    description: "Bulk cryogenic storage, manifold rooms, and high-pressure reticulation for industrial sites.",
    whatWeDo:
      "We design, install, and commission bulk cryogenic storage, manifold rooms, and high-pressure reticulation in stainless 316L or schedule 80 carbon steel. SAQCC Gas registered, with full NDT weld scanning and pressure-test sign-off on handover.",
    capabilities: [
      "Bulk storage",
      "Pipeline reticulation",
      "Plant refurbishment",
    ],
    sectors: [
      "Mining",
      "Petrochemical",
      "Manufacturing",
      "Steel & metal",
      "Glass & ceramics",
      "Food & beverage",
      "Laboratories",
    ],
    image: "/images/IMG-20240605-WA0032.jpg",
    coverage: COVERAGE,
  },
  {
    slug: "lpg-bulk-gas",
    seoTitle: "LPG & Bulk Gas Installation in Gauteng & South Africa | NHL Projects",
    metaDescription: "LPG and bulk gas storage, reticulation, manifolds and vaporiser plant for hospitality, healthcare, manufacturing, mining and commercial sites across South Africa.",
    keywords: ["LPG installation Gauteng","bulk LPG installation South Africa","bulk gas installation Gauteng","LPG reticulation South Africa","commercial LPG systems"],
    title: "LPG & Bulk Gas",
    description: "LPG storage, vaporiser plant, and full-site reticulation across multiple sectors.",
    whatWeDo:
      "We design, install, and commission LPG storage, vaporiser plant, and full-site reticulation across hospitality, healthcare, manufacturing, and industrial and commercial sites. Every installation is signed off with a SAQCC Gas Certificate of Compliance.",
    capabilities: [
      "Bulk storage & vessel siting",
      "Reticulation & manifolds",
      "Plant vaporisers & commissioning",
    ],
    sectors: [
      "Hospitality",
      "Healthcare",
      "Manufacturing",
      "Food processing & bakeries",
      "Laundries",
      "Industrial and commercial & retail",
      "Mining & remote sites",
    ],
    image: "/images/001.webp",
    coverage: COVERAGE,
  },
  {
    slug: "hot-water-systems",
    title: "Hot Water Systems",
    description: "Centralised hot water plant design, supply, and installation for hospitals, hotels, and industrial facilities.",
    whatWeDo:
      "We design, supply, and install centralised hot water plant for hospitals, hotels, industrial and commercial buildings, and industrial facilities. We provide condensing boilers, calorifier storage, insulated reticulation with return loops, and BMS-integrated temperature control with anti-Legionella protection.",
    capabilities: [
      "Gas-fired water heating",
      "Storage & calorifier systems",
      "Reticulation & circulation",
      "Energy-efficient solutions",
    ],
    sectors: [
      "Hospitals",
      "Hotels & lodges",
      "Aged care & student housing",
      "Industrial and commercial buildings",
      "Industrial facilities",
      "Sports clubs & gyms",
      "Universities & schools",
    ],
    image: "/images/IMG-20240605-WA0032.jpg",
    coverage: COVERAGE,
  },
  {
    slug: "steam-heating-boilers",
    title: "Steam & Heating Boilers",
    description: "Full life-cycle steam and heating boiler supply, installation, and compliance.",
    whatWeDo:
      "We provide full life-cycle steam and heating boiler work for hospitals, food processing, manufacturing, and industrial sites. Services include supply, installation, fuel conversion, feed-water treatment, statutory inspections, and Certificate of Compliance on handover.",
    capabilities: [
      "Steam boiler supply & install",
      "Boiler plant design & integration",
      "Fuel systems",
      "Compliance & safety inspections",
    ],
    sectors: [
      "Hospitals",
      "Food & beverage",
      "Industrial plants",
      "Manufacturing",
      "Pharmaceuticals",
      "Industrial laundries",
      "Hotels & resorts",
    ],
    image: "/images/001.webp",
    coverage: COVERAGE,
  },
  {
    slug: "compressed-gas",
    seoTitle: "Compressed Gas Installation & Maintenance South Africa | NHL Projects",
    metaDescription: "Compressed gas installation, maintenance and repairs for industrial, medical and manufacturing environments across Gauteng, South Africa and the SADC region.",
    keywords: ["compressed gas installation South Africa","compressed gas systems Gauteng","compressed gas maintenance","industrial compressed gas installer","compressed gas repairs South Africa"],
    title: "Compressed Gas",
    description: "Qualified compressed gas installation, maintenance, and compliance across South Africa.",
    whatWeDo:
      "NHL Projects (Pty) Limited is a qualified compressed gas installer servicing industrial and commercial, medical, and manufacturing sectors. We handle all compressed gases including LPG and natural gas installation, maintenance, and repairs across South Africa and the SADC region, with full NDT and pressure-test sign-off on handover.",
    capabilities: [
      "Compressed gas installation",
      "LPG & natural gas systems",
      "Maintenance & repairs",
      "NDT weld scanning & pressure-test sign-off",
    ],
    sectors: [
      "Mining",
      "Petrochemical",
      "Manufacturing",
      "Healthcare",
      "Food & beverage",
      "Laboratories",
      "Industrial and commercial",
    ],
    image: "/images/Gas-Fire-Place-Installation.jpg",
    coverage: COVERAGE,
  },
  {
    slug: "dead-body-cremation-chamber",
    title: "Dead Body Cremation Chamber",
    description: "Custom manufacture and design of cremation chambers for any fuel type.",
    whatWeDo:
      "We manufacture and design dead body cremation chambers for any fuel type including LPG, Natural Gas, Diesel, and Paraffin. We build from scratch and also carry out system design and full maintenance.",
    capabilities: [
      "Custom chamber design & manufacture",
      "Multi-fuel compatibility (LPG, Natural Gas, Diesel, Paraffin)",
      "Build from scratch",
      "System design",
      "Ongoing maintenance",
    ],
    sectors: [
      "Funeral homes",
      "Hospitals",
      "Municipal services",
      "Private crematoria",
    ],
    image: "/images/010.webp",
    coverage: COVERAGE,
  },
  {
    slug: "powder-coating",
    seoTitle: "Powder Coating Equipment & Systems South Africa | NHL Projects",
    metaDescription: "Powder coating equipment and systems: design, build, commissioning, repairs and maintenance for manufacturing, automotive, metal and industrial clients in South Africa.",
    keywords: ["powder coating services South Africa","powder coating equipment Gauteng","powder coating plant installation","powder coating system maintenance","industrial powder coating systems"],
    title: "Powder Coating Services",
    description: "Professional powder coating — design, build, commission, repair, and maintenance.",
    whatWeDo:
      "We offer a complete powder coating service including design, build, commissioning, repairs, and ongoing maintenance of powder coating equipment and systems.",
    capabilities: [
      "Design",
      "Build",
      "Commissioning",
      "Repairs",
      "Maintenance",
    ],
    sectors: [
      "Manufacturing",
      "Automotive",
      "Industrial and commercial",
      "Steel & metal fabrication",
    ],
    image: "/images/IMG-20240605-WA0032.jpg",
    coverage: COVERAGE,
  },
  {
    slug: "maintenance-support",
    title: "Maintenance & Support",
    description: "Planned preventative maintenance and 24/7 emergency breakdown support across all gas plant types.",
    whatWeDo:
      "We provide planned preventative maintenance, 24/7 emergency breakdown response with a 4-hour on-site SLA on critical-tier sites, leak detection, and statutory compliance inspections across medical gas, industrial gas, LPG, hot water, and steam boiler plant.",
    capabilities: [
      "Leak detection",
      "Calibration & recertification",
      "Breakdown repairs",
      "Statutory compliance",
      "Water treatment",
      "Boiler attendant",
      "Critical spares",
      "Plant reporting",
    ],
    sectors: [
      "Medical gas pipelines",
      "Industrial gas plant",
      "LPG bulk installations",
      "Steam boilers",
      "Hot water plant",
      "Pressure vessels",
      "Calibration & instrumentation",
    ],
    image: "/images/012.webp",
    coverage: COVERAGE,
    serviceLevelAgreements: [
      {
        tier: "Preventative Maintenance",
        description:
          "Scheduled inspections to keep plant performing reliably and within manufacturer specification.",
      },
      {
        tier: "Comprehensive Service Plan",
        description:
          "A full PPM programme with parts cover, calibration, and reduced-rate breakdown response.",
      },
      {
        tier: "24/7 Critical Response",
        description:
          "Guaranteed response times for life-critical and revenue-critical plant where downtime is not an option.",
      },
    ],
    whatsCovered: [
      "Leak detection",
      "Calibration & recertification",
      "Breakdown repairs",
      "Statutory compliance",
      "Water treatment",
      "Boiler attendant",
      "Critical spares",
      "Plant reporting",
    ],
    plantMaintained: [
      "Medical gas pipelines",
      "Industrial gas plant",
      "LPG bulk installations",
      "Steam boilers",
      "Hot water plant",
      "Pressure vessels",
      "Calibration & instrumentation",
    ],
  },
  {
    slug: "design-consulting-compliance",
    title: "Design, Consulting & Compliance",
    description: "System design, load calculations, technical consulting, and project management under one engineering contract.",
    whatWeDo:
      "We provide system design, load calculations, technical consulting, project management, commissioning, and statutory compliance under one accountable engineering contract across medical gas, industrial gas, LPG, hot water, and steam plant.",
    capabilities: [
      "System design & load calculations",
      "Technical consulting",
      "Project management",
      "Commissioning",
      "Statutory compliance",
    ],
    sectors: [
      "Healthcare",
      "Industrial and commercial",
      "Manufacturing",
      "Hospitality",
      "Mining",
    ],
    image: "/images/Vaal-University-Science-Lab-Renovation-1-433x577.jpg",
    coverage: COVERAGE,
  },

  {
    slug: "plumbing-services",
    seoTitle: "Plumbing Services in Gauteng & South Africa | NHL Projects",
    metaDescription: "Professional plumbing services for drainage, water supply and plumbing installations across Gauteng and South Africa. NHL Projects combines plumbing and gas expertise for domestic, commercial and industrial projects.",
    keywords: ["plumbing services Gauteng","plumber Kempton Park","plumbing company Gauteng","commercial plumbing South Africa","industrial plumbing Gauteng","drainage and water supply Gauteng"],
    title: "Plumbing Services",
    description: "Professional plumbing, drainage and water-supply services for residential, commercial and industrial projects across Gauteng and South Africa.",
    whatWeDo: "NHL Projects provides plumbing services alongside its gas installation work, including drainage and water-supply projects, plumbing installations, repairs and project support. Our plumbing capability is suited to domestic, commercial, industrial and institutional environments.",
    capabilities: [
      "Water supply installation and repairs",
      "Drainage installation and repairs",
      "Plumbing pipework and connections",
      "Commercial and industrial plumbing support",
      "Plumbing project installation and maintenance",
    ],
    sectors: [
      "Residential properties",
      "Commercial buildings",
      "Industrial facilities",
      "Healthcare facilities",
      "Schools and universities",
      "Hospitality properties",
    ],
    image: "/images/Drainage-and-water-supply1plumbing.jpg",
    coverage: COVERAGE,
  },
];

export const SERVICE_GALLERY: Record<string, { src: string; alt: string }[]> = {
  "plumbing-services": [
    { src: "/images/Drainage-and-water-supply1plumbing.jpg", alt: "NHL Projects drainage and water supply plumbing project" },
    { src: "/images/IMG-20261001-WA0001.jpg", alt: "NHL Projects plumbing project in South Africa" },
    { src: "/images/IMG-20261001-WA0002.jpg", alt: "NHL Projects plumbing installation project" },
    { src: "/images/IMG-20261001-WA0003.jpg", alt: "NHL Projects water supply and plumbing work" },
    { src: "/images/IMG-20261001-WA0004.jpg", alt: "NHL Projects plumbing services project" },
    { src: "/images/IMG-20261001-WA0005.jpg", alt: "NHL Projects drainage and plumbing work" },
    { src: "/images/IMG-20261001-WA0006.jpg", alt: "NHL Projects plumbing installation" },
  ],
  "gas-appliance-installation": [
    { src: "/images/GasStove2.jpg", alt: "Gas stove installation by NHL Projects" },
    { src: "/images/Gasstove1.jpg", alt: "Gas appliance installation by NHL Projects" },
    { src: "/images/gasstove3.jpg", alt: "Gas stove and appliance installation" },
    { src: "/images/Gas-Fire-Place-Installation.jpg", alt: "Gas fireplace installation by NHL Projects" },
    { src: "/images/IMG-20261001-WA0007.jpg", alt: "Gas appliance installation project in South Africa" },
    { src: "/images/IMG-20261001-WA0009.jpg", alt: "NHL Projects gas installation work" },
  ],
  "medical-gas-infrastructure": [
    { src: "/images/Vaal-University-Science-Lab-Renovation1.jpg", alt: "Medical and laboratory infrastructure project" },
    { src: "/images/Vaal-University-Science-Lab-Renovation2.jpg", alt: "Laboratory infrastructure project" },
    { src: "/images/Vaal-University-Science-Lab-Renovation3.jpg", alt: "Laboratory renovation and infrastructure work" },
    { src: "/images/Vaal-University-Science-Lab-Renovation4.jpg", alt: "Laboratory project by NHL Projects" },
    { src: "/images/IMG-20261001-WA0010.jpg", alt: "NHL Projects infrastructure installation" },
    { src: "/images/IMG-20261001-WA0011.jpg", alt: "NHL Projects technical infrastructure work" },
  ],
  "industrial-gas-infrastructure": [
    { src: "/images/IMG-20240605-WA0032.jpg", alt: "Industrial gas infrastructure installation" },
    { src: "/images/Gas-line.jpg", alt: "Gas line installation by NHL Projects" },
    { src: "/images/gascylinder1.jpg", alt: "Compressed gas cylinder installation" },
    { src: "/images/IMG-20261001-WA0012.jpg", alt: "Industrial gas project in South Africa" },
    { src: "/images/IMG-20261001-WA0013.jpg", alt: "Industrial gas installation project" },
    { src: "/images/IMG-20261001-WA0014.jpg", alt: "Gas infrastructure work by NHL Projects" },
  ],
  "lpg-bulk-gas": [
    { src: "/images/001.webp", alt: "Bulk LPG gas installation" },
    { src: "/images/023.webp", alt: "LPG gas cylinders for bulk gas services" },
    { src: "/images/IMG-20261001-WA0015.jpg", alt: "LPG installation project in South Africa" },
    { src: "/images/IMG-20261001-WA0016.jpg", alt: "Bulk gas installation project" },
    { src: "/images/IMG-20261001-WA0018.jpg", alt: "LPG infrastructure project" },
    { src: "/images/IMG-20261001-WA0019.jpg", alt: "NHL Projects LPG gas work" },
  ],
  "compressed-gas": [
    { src: "/images/gascylinder1.jpg", alt: "Compressed gas cylinders and installation" },
    { src: "/images/Gas-line.jpg", alt: "Compressed gas line installation" },
    { src: "/images/IMG-20261001-WA0020.jpg", alt: "Compressed gas installation project" },
    { src: "/images/IMG-20261001-WA0021.jpg", alt: "Compressed gas infrastructure work" },
    { src: "/images/IMG-20261001-WA0022.jpg", alt: "Compressed gas system project" },
    { src: "/images/IMG-20261001-WA0023.jpg", alt: "Industrial compressed gas work" },
  ],
  "powder-coating": [
    { src: "/images/IMG-20261001-WA0024.jpg", alt: "Powder coating project by NHL Projects" },
    { src: "/images/IMG-20261001-WA0025.jpg", alt: "Powder coating equipment and systems" },
    { src: "/images/IMG-20261001-WA0026.jpg", alt: "Industrial powder coating work" },
    { src: "/images/IMG-20261001-WA0027.jpg", alt: "Powder coating installation project" },
    { src: "/images/IMG-20261001-WA0028.jpg", alt: "Powder coating system project in South Africa" },
    { src: "/images/IMG-20261001-WA0029.jpg", alt: "Powder coating equipment project" },
    { src: "/images/IMG-20261001-WA0030.jpg", alt: "Industrial coating project" },
    { src: "/images/IMG-20261001-WA0031.jpg", alt: "Powder coating services project" },
    { src: "/images/IMG-20261001-WA0032.jpg", alt: "Powder coating technical project" },
    { src: "/images/IMG-20261001-WA0033.jpg", alt: "Powder coating equipment work" },
    { src: "/images/IMG-20261001-WA0034.jpg", alt: "Powder coating installation and maintenance" },
  ],
};

export function getServiceGallery(slug: string) {
  return SERVICE_GALLERY[slug] ?? [];
}

export function getServicePage(slug: string) {
  return SERVICE_PAGES.find((service) => service.slug === slug);
}
