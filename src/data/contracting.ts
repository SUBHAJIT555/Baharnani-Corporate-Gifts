// Image imports
import FoundationExcavation from "../assets/images/Contracting-Solutions-products-images/Foundation & Excavation.webp";
import ConcreteConstruction from "../assets/images/Contracting-Solutions-products-images/Concrete Construction.webp";
import SteelStructureFabrication from "../assets/images/Contracting-Solutions-products-images/Steel Structure Fabrication.webp";
import RoadConstruction from "../assets/images/Contracting-Solutions-products-images/Road Construction.webp";
import BuildingRenovation from "../assets/images/Contracting-Solutions-products-images/Building Renovation.webp";
import HVACSystemInstallation from "../assets/images/Contracting-Solutions-products-images/HVAC System Installation.webp";
import ElectricalWiringSystems from "../assets/images/Contracting-Solutions-products-images/Electrical Wiring & Systems.webp";
import PlumbingSanitaryWorks from "../assets/images/Contracting-Solutions-products-images/Plumbing & Sanitary Works.webp";
import FireSafetySystems from "../assets/images/Contracting-Solutions-products-images/Fire Safety Systems.webp";
import SmartBuildingAutomation from "../assets/images/Contracting-Solutions-products-images/Smart Building Automation.webp";
import OfficeInteriorDesign from "../assets/images/Contracting-Solutions-products-images/Office Interior Design.webp";
import ResidentialRenovation from "../assets/images/Contracting-Solutions-products-images/Residential Renovation.webp";
import RetailSpaceFitOut from "../assets/images/Contracting-Solutions-products-images/Retail Space Fit-Out.webp";
import RestaurantInteriorDesign from "../assets/images/Contracting-Solutions-products-images/Restaurant Interior Design.webp";
import LuxuryVillaInteriors from "../assets/images/Contracting-Solutions-products-images/Luxury Villa Interiors.webp";
import PreventiveMaintenance from "../assets/images/Contracting-Solutions-products-images/Preventive Maintenance.webp";
import HVACMaintenance from "../assets/images/Contracting-Solutions-products-images/HVAC Maintenance.webp";
import ElectricalSystemUpgrades from "../assets/images/Contracting-Solutions-products-images/Electrical System Upgrades.webp";
import PlumbingRepairsUpgrades from "../assets/images/Contracting-Solutions-products-images/Plumbing Repairs & Upgrades.webp";
import BuildingSecuritySystems from "../assets/images/Contracting-Solutions-products-images/Building Security Systems.webp";
import ExteriorPainting from "../assets/images/Contracting-Solutions-products-images/Exterior Painting.webp";
import InteriorPaintingDecoration from "../assets/images/Contracting-Solutions-products-images/Interior Painting & Decoration.webp";
import WaterproofingSolutions from "../assets/images/Contracting-Solutions-products-images/Waterproofing Solutions.webp";
import EpoxyFloorCoating from "../assets/images/Contracting-Solutions-products-images/Epoxy Floor Coating.webp";
import TextureDecorativeFinishes from "../assets/images/Contracting-Solutions-products-images/Texture & Decorative Finishes.webp";
import ArchitecturalDesign from "../assets/images/Contracting-Solutions-products-images/Architectural Design.webp";
import StructuralEngineering from "../assets/images/Contracting-Solutions-products-images/Structural Engineering.webp";
import ProjectManagement from "../assets/images/Contracting-Solutions-products-images/Project Management.webp";
import ConstructionSupervision from "../assets/images/Contracting-Solutions-products-images/Construction Supervision.webp";
import PermitApprovalServices from "../assets/images/Contracting-Solutions-products-images/Permit & Approval Services.webp";

export interface ContractingService {
  id: string;
  title: string;
  description: string;
  category: string;
  image: string;
}

export const contractingServices: ContractingService[] = [
  // Civil & Structural Works
  {
    id: "1",
    title: "Foundation & Excavation",
    description:
      "Complete foundation works including excavation, concrete pouring, and structural foundations for residential and commercial projects.",
    category: "Civil & Structural Works",
    image: FoundationExcavation,
  },
  {
    id: "2",
    title: "Concrete Construction",
    description:
      "Reinforced concrete structures, slabs, beams, and columns with high-grade materials and professional finishing.",
    category: "Civil & Structural Works",
    image: ConcreteConstruction,
  },
  {
    id: "3",
    title: "Steel Structure Fabrication",
    description:
      "Custom steel structure design and fabrication for industrial buildings, warehouses, and commercial complexes.",
    category: "Civil & Structural Works",
    image: SteelStructureFabrication,
  },
  {
    id: "4",
    title: "Road Construction",
    description:
      "Complete road construction services including asphalt laying, drainage systems, and traffic infrastructure.",
    category: "Civil & Structural Works",
    image: RoadConstruction,
  },
  {
    id: "5",
    title: "Building Renovation",
    description:
      "Structural renovation and restoration of existing buildings with modern engineering standards.",
    category: "Civil & Structural Works",
    image: BuildingRenovation,
  },
  // MEP Services
  {
    id: "6",
    title: "HVAC System Installation",
    description:
      "Complete heating, ventilation, and air conditioning systems for residential and commercial buildings.",
    category: "MEP Services",
    image: HVACSystemInstallation,
  },
  {
    id: "7",
    title: "Electrical Wiring & Systems",
    description:
      "Professional electrical installation including power distribution, lighting systems, and safety equipment.",
    category: "MEP Services",
    image: ElectricalWiringSystems,
  },
  {
    id: "8",
    title: "Plumbing & Sanitary Works",
    description:
      "Complete plumbing systems including water supply, drainage, and sanitary fixture installation.",
    category: "MEP Services",
    image: PlumbingSanitaryWorks,
  },
  {
    id: "9",
    title: "Fire Safety Systems",
    description:
      "Fire detection, alarm systems, and sprinkler installation compliant with safety regulations.",
    category: "MEP Services",
    image: FireSafetySystems,
  },
  {
    id: "10",
    title: "Smart Building Automation",
    description:
      "Advanced building management systems with IoT integration for energy efficiency and control.",
    category: "MEP Services",
    image: SmartBuildingAutomation,
  },
  // Interior Fit-Outs & Renovations
  {
    id: "11",
    title: "Office Interior Design",
    description:
      "Modern office interior fit-outs with ergonomic design, furniture installation, and space optimization.",
    category: "Interior Fit-Outs & Renovations",
    image: OfficeInteriorDesign,
  },
  {
    id: "12",
    title: "Residential Renovation",
    description:
      "Complete home renovation including kitchen, bathroom, and living space modernization.",
    category: "Interior Fit-Outs & Renovations",
    image: ResidentialRenovation,
  },
  {
    id: "13",
    title: "Retail Space Fit-Out",
    description:
      "Commercial retail space design and fit-out with custom fixtures and brand-focused interiors.",
    category: "Interior Fit-Outs & Renovations",
    image: RetailSpaceFitOut,
  },
  {
    id: "14",
    title: "Restaurant Interior Design",
    description:
      "Complete restaurant fit-out including kitchen design, dining area, and compliance with health regulations.",
    category: "Interior Fit-Outs & Renovations",
    image: RestaurantInteriorDesign,
  },
  {
    id: "15",
    title: "Luxury Villa Interiors",
    description:
      "High-end residential interior design with premium materials and custom-made furniture.",
    category: "Interior Fit-Outs & Renovations",
    image: LuxuryVillaInteriors,
  },
  // Facility Maintenance & Upgrades
  {
    id: "16",
    title: "Preventive Maintenance",
    description:
      "Scheduled maintenance programs for buildings, equipment, and infrastructure to prevent breakdowns.",
    category: "Facility Maintenance & Upgrades",
    image: PreventiveMaintenance,
  },
  {
    id: "17",
    title: "HVAC Maintenance",
    description:
      "Regular servicing and maintenance of air conditioning and ventilation systems for optimal performance.",
    category: "Facility Maintenance & Upgrades",
    image: HVACMaintenance,
  },
  {
    id: "18",
    title: "Electrical System Upgrades",
    description:
      "Modernization of electrical systems, panel upgrades, and energy-efficient lighting solutions.",
    category: "Facility Maintenance & Upgrades",
    image: ElectricalSystemUpgrades,
  },
  {
    id: "19",
    title: "Plumbing Repairs & Upgrades",
    description:
      "Emergency plumbing repairs, pipe replacement, and water system efficiency improvements.",
    category: "Facility Maintenance & Upgrades",
    image: PlumbingRepairsUpgrades,
  },
  {
    id: "20",
    title: "Building Security Systems",
    description:
      "Installation and maintenance of security systems, CCTV, access control, and alarm systems.",
    category: "Facility Maintenance & Upgrades",
    image: BuildingSecuritySystems,
  },
  // Painting, Waterproofing & Finishing
  {
    id: "21",
    title: "Exterior Painting",
    description:
      "Professional exterior painting services with weather-resistant paints and surface preparation.",
    category: "Painting, Waterproofing & Finishing",
    image: ExteriorPainting,
  },
  {
    id: "22",
    title: "Interior Painting & Decoration",
    description:
      "Interior painting with premium paints, decorative finishes, and color consultation services.",
    category: "Painting, Waterproofing & Finishing",
    image: InteriorPaintingDecoration,
  },
  {
    id: "23",
    title: "Waterproofing Solutions",
    description:
      "Complete waterproofing for roofs, basements, and foundations using advanced membrane systems.",
    category: "Painting, Waterproofing & Finishing",
    image: WaterproofingSolutions,
  },
  {
    id: "24",
    title: "Epoxy Floor Coating",
    description:
      "Industrial-grade epoxy floor coatings for warehouses, garages, and commercial spaces.",
    category: "Painting, Waterproofing & Finishing",
    image: EpoxyFloorCoating,
  },
  {
    id: "25",
    title: "Texture & Decorative Finishes",
    description:
      "Specialized decorative wall finishes, textures, and artistic painting for luxury projects.",
    category: "Painting, Waterproofing & Finishing",
    image: TextureDecorativeFinishes,
  },
  // Project Design & Supervision
  {
    id: "26",
    title: "Architectural Design",
    description:
      "Complete architectural design services from concept to construction drawings for residential and commercial projects.",
    category: "Project Design & Supervision",
    image: ArchitecturalDesign,
  },
  {
    id: "27",
    title: "Structural Engineering",
    description:
      "Professional structural engineering design and analysis for safe and efficient building construction.",
    category: "Project Design & Supervision",
    image: StructuralEngineering,
  },
  {
    id: "28",
    title: "Project Management",
    description:
      "End-to-end project management services ensuring timely delivery, quality control, and budget management.",
    category: "Project Design & Supervision",
    image: ProjectManagement,
  },
  {
    id: "29",
    title: "Construction Supervision",
    description:
      "On-site construction supervision and quality assurance by certified engineers and project managers.",
    category: "Project Design & Supervision",
    image: ConstructionSupervision,
  },
  {
    id: "30",
    title: "Permit & Approval Services",
    description:
      "Complete assistance with building permits, municipal approvals, and regulatory compliance documentation.",
    category: "Project Design & Supervision",
    image: PermitApprovalServices,
  },
];
