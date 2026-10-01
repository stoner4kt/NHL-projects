export interface ServicePageData {
  slug: string;
  title: string;
  description: string;
  whatWeDo: string;
  capabilities: string[];
  sectors: string[];
  image: string;
  coverage?: string;
  serviceLevelAgreements?: { tier: string; description: string }[];
  whatsCovered?: string[];
  plantMaintained?: string[];
}

const COVERAGE =
  "We serve clients nationwide across South Africa and throughout the Southern African Development Community (SADC) region.";

export const SERVICE_PAGES: ServicePageData[] = [
  {
    slug: "gas-appliance-installation",
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
];

export function getServicePage(slug: string) {
  return SERVICE_PAGES.find((service) => service.slug === slug);
}
