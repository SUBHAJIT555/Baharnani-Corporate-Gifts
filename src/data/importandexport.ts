export interface Service {
  id: string;
  title: string;
  description: string;
  category: string;
  image: string;
}

export const importExportServices: Service[] = [
  // Global Product Sourcing
  {
    id: "1",
    title: "Raw Material Sourcing",
    description:
      "Global sourcing of raw materials from verified suppliers. Comprehensive market research and supplier evaluation.",
    category: "Global Product Sourcing",
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "2",
    title: "Finished Goods Procurement",
    description:
      "End-to-end procurement of finished goods from international markets. Quality assurance and competitive pricing.",
    category: "Global Product Sourcing",
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "3",
    title: "Supplier Network Development",
    description:
      "Building and maintaining extensive supplier networks across key manufacturing regions worldwide.",
    category: "Global Product Sourcing",
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "4",
    title: "Market Intelligence Services",
    description:
      "Comprehensive market analysis, price trends, and sourcing opportunities across global markets.",
    category: "Global Product Sourcing",
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "5",
    title: "Private Label Manufacturing",
    description:
      "Connect with manufacturers for private label production. Custom packaging and branding solutions.",
    category: "Global Product Sourcing",
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  // Vendor Verification & Compliance
  {
    id: "6",
    title: "Supplier Due Diligence",
    description:
      "Comprehensive background checks and financial verification of international suppliers and vendors.",
    category: "Vendor Verification & Compliance",
    image:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "7",
    title: "Factory Audits",
    description:
      "On-site factory inspections and capability assessments. Production capacity and quality system evaluation.",
    category: "Vendor Verification & Compliance",
    image:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "8",
    title: "Compliance Certification",
    description:
      "Ensure suppliers meet international standards including ISO, HACCP, FDA, and other regulatory requirements.",
    category: "Vendor Verification & Compliance",
    image:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "9",
    title: "Ethical Sourcing Verification",
    description:
      "Verify ethical labor practices, environmental compliance, and social responsibility standards.",
    category: "Vendor Verification & Compliance",
    image:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "10",
    title: "Risk Assessment Services",
    description:
      "Comprehensive risk evaluation including political, economic, and operational risks in supplier countries.",
    category: "Vendor Verification & Compliance",
    image:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  // Freight Forwarding
  {
    id: "11",
    title: "Sea Freight Services",
    description:
      "Full container load (FCL) and less container load (LCL) shipping services worldwide. Competitive ocean freight rates.",
    category: "Freight Forwarding (Sea, Air & Land)",
    image:
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "12",
    title: "Air Freight Express",
    description:
      "Fast and reliable air cargo services for time-sensitive shipments. Door-to-door delivery options available.",
    category: "Freight Forwarding (Sea, Air & Land)",
    image:
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "13",
    title: "Land Transportation",
    description:
      "Cross-border trucking and rail freight services. Specialized vehicles for different cargo types.",
    category: "Freight Forwarding (Sea, Air & Land)",
    image:
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "14",
    title: "Multimodal Transportation",
    description:
      "Integrated sea-air-land transportation solutions for optimal cost and time efficiency.",
    category: "Freight Forwarding (Sea, Air & Land)",
    image:
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "15",
    title: "Project Cargo Handling",
    description:
      "Specialized handling of oversized, heavy-lift, and project cargo with custom logistics solutions.",
    category: "Freight Forwarding (Sea, Air & Land)",
    image:
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  // Customs Documentation & Clearance
  {
    id: "16",
    title: "Import Customs Clearance",
    description:
      "Complete import documentation and customs clearance services. Duty optimization and compliance assurance.",
    category: "Customs Documentation & Clearance",
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "17",
    title: "Export Documentation",
    description:
      "Preparation of all export documents including commercial invoices, packing lists, and certificates of origin.",
    category: "Customs Documentation & Clearance",
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "18",
    title: "Duty Drawback Services",
    description:
      "Maximize duty refunds through proper documentation and drawback claim processing for exported goods.",
    category: "Customs Documentation & Clearance",
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "19",
    title: "Free Trade Zone Services",
    description:
      "Utilize free trade zones for duty deferment, manufacturing, and re-export operations.",
    category: "Customs Documentation & Clearance",
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "20",
    title: "Tariff Classification",
    description:
      "Expert HS code classification and tariff advisory services to ensure proper customs treatment.",
    category: "Customs Documentation & Clearance",
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  // Export Services
  {
    id: "21",
    title: "Raw Material Exports",
    description:
      "Export of agricultural commodities, minerals, and industrial raw materials to global markets.",
    category: "Export of Raw & Finished Goods",
    image:
      "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "22",
    title: "Manufactured Goods Export",
    description:
      "Export of finished manufactured products including textiles, electronics, and consumer goods.",
    category: "Export of Raw & Finished Goods",
    image:
      "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "23",
    title: "Food Products Export",
    description:
      "Specialized export services for food products with temperature-controlled logistics and compliance.",
    category: "Export of Raw & Finished Goods",
    image:
      "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "24",
    title: "Pharmaceutical Exports",
    description:
      "Export of pharmaceutical products with GDP compliance and temperature-controlled supply chain.",
    category: "Export of Raw & Finished Goods",
    image:
      "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "25",
    title: "Machinery & Equipment Export",
    description:
      "Export of industrial machinery, equipment, and capital goods with specialized handling requirements.",
    category: "Export of Raw & Finished Goods",
    image:
      "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  // Warehousing & Inventory
  {
    id: "26",
    title: "Bonded Warehouse Services",
    description:
      "Secure bonded warehousing facilities for duty-free storage of imported goods before clearance.",
    category: "Warehousing & Inventory Support",
    image:
      "https://images.unsplash.com/photo-1553413077-190dd305871c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "27",
    title: "Cold Storage Facilities",
    description:
      "Temperature-controlled warehousing for perishable goods, pharmaceuticals, and temperature-sensitive products.",
    category: "Warehousing & Inventory Support",
    image:
      "https://images.unsplash.com/photo-1553413077-190dd305871c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "28",
    title: "Inventory Management Systems",
    description:
      "Advanced WMS and real-time inventory tracking with automated reporting and stock optimization.",
    category: "Warehousing & Inventory Support",
    image:
      "https://images.unsplash.com/photo-1553413077-190dd305871c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "29",
    title: "Cross-Docking Services",
    description:
      "Efficient cross-docking operations to minimize storage time and reduce handling costs.",
    category: "Warehousing & Inventory Support",
    image:
      "https://images.unsplash.com/photo-1553413077-190dd305871c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "30",
    title: "Value-Added Services",
    description:
      "Packaging, labeling, quality control, and light assembly services within warehouse facilities.",
    category: "Warehousing & Inventory Support",
    image:
      "https://images.unsplash.com/photo-1553413077-190dd305871c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  // Trade Finance
  {
    id: "31",
    title: "Letter of Credit Services",
    description:
      "Complete LC processing including opening, advising, confirmation, and negotiation of trade letters of credit.",
    category: "Trade Finance & LC Assistance",
    image:
      "https://images.unsplash.com/photo-1554224154-26032fced8bd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "32",
    title: "Documentary Collections",
    description:
      "Secure payment collection through documentary collections (D/P and D/A) for international trade.",
    category: "Trade Finance & LC Assistance",
    image:
      "https://images.unsplash.com/photo-1554224154-26032fced8bd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "33",
    title: "Trade Credit Insurance",
    description:
      "Protect against buyer default and political risks with comprehensive trade credit insurance solutions.",
    category: "Trade Finance & LC Assistance",
    image:
      "https://images.unsplash.com/photo-1554224154-26032fced8bd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "34",
    title: "Export Financing",
    description:
      "Pre-shipment and post-shipment financing solutions to support export operations and cash flow.",
    category: "Trade Finance & LC Assistance",
    image:
      "https://images.unsplash.com/photo-1554224154-26032fced8bd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "35",
    title: "Bank Guarantee Services",
    description:
      "Performance guarantees, advance payment guarantees, and other trade-related bank guarantee instruments.",
    category: "Trade Finance & LC Assistance",
    image:
      "https://images.unsplash.com/photo-1554224154-26032fced8bd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  // Inspection & Quality Control
  {
    id: "36",
    title: "Pre-Shipment Inspection",
    description:
      "Comprehensive quality and quantity verification before shipment to ensure compliance with specifications.",
    category: "Inspection & Quality Control",
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "37",
    title: "Laboratory Testing Services",
    description:
      "Accredited laboratory testing for chemical composition, microbiological analysis, and safety parameters.",
    category: "Inspection & Quality Control",
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "38",
    title: "Certificate of Analysis",
    description:
      "Detailed analytical reports and certificates of analysis for product quality verification.",
    category: "Inspection & Quality Control",
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "39",
    title: "Loading Supervision",
    description:
      "Professional supervision of cargo loading operations to prevent damage and ensure proper stowage.",
    category: "Inspection & Quality Control",
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "40",
    title: "Third-Party Inspection",
    description:
      "Independent third-party inspection services for quality assurance and buyer confidence.",
    category: "Inspection & Quality Control",
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
];
