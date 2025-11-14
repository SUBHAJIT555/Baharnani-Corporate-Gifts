import PortlandCementTypeI from "../assets/images/Construction-Materials-products-images/Portland Cement Type I.webp";
import ReinforcementSteelBars from "../assets/images/Construction-Materials-products-images/Reinforcement Steel Bars.webp";
import CoarseAggregate20mm from "../assets/images/Construction-Materials-products-images/Coarse Aggregate 20mm.webp";
import FineSandRiverSand from "../assets/images/Construction-Materials-products-images/Fine Sand (River Sand).webp";
import ReadyMixConcreteM25 from "../assets/images/Construction-Materials-products-images/Ready Mix Concrete M25.webp";
import WaterproofingMembrane from "../assets/images/Construction-Materials-products-images/Waterproofing Membrane.webp";
import StructuralSteelBeams from "../assets/images/Construction-Materials-products-images/Structural Steel Beams.webp";
import ClayBricks from "../assets/images/Construction-Materials-products-images/Clay Bricks (Red Bricks).webp";
import CementBlocks from "../assets/images/Construction-Materials-products-images/Cement Blocks (Hollow Blocks).webp";
import ConstructionChemicals from "../assets/images/Construction-Materials-products-images/Construction Chemicals.webp";
import PVCPipes from "../assets/images/Construction-Materials-products-images/PVC Pipes & Fittings.webp";
import InsulationMaterials from "../assets/images/Construction-Materials-products-images/Insulation Material (Rockwool).webp";
import CeramicTiles from "../assets/images/Construction-Materials-products-images/Ceramic Tiles.webp";
import RoofingSheets from "../assets/images/Construction-Materials-products-images/Roofing Sheets (Metal).webp";
import GypsumPlaster from "../assets/images/Construction-Materials-products-images/Gypsum Plaster.webp";
import ElectricalConduits from "../assets/images/Construction-Materials-products-images/Electrical Conduit Pipes.webp";
import AluminumWindowsDoors from "../assets/images/Construction-Materials-products-images/Aluminum Windows & Doors.webp";
import WireMesh from "../assets/images/Construction-Materials-products-images/Wire Mesh (Welded).webp";
import AdhesiveMortar from "../assets/images/Construction-Materials-products-images/Adhesive Mortar.webp";
import ExpansionJointFiller from "../assets/images/Construction-Materials-products-images/Expansion Joint Filler.webp";
import PrecastConcreteElements from "../assets/images/Construction-Materials-products-images/Precast Concrete Elements.webp";
import SteelWireRope from "../assets/images/Construction-Materials-products-images/Steel Wire Rope.webp";
import GravelCrushedStone from "../assets/images/Construction-Materials-products-images/Gravel & Crushed Stone.webp";
import FormworkPlywood from "../assets/images/Construction-Materials-products-images/Formwork Plywood.webp";
import type { Product } from "../services/api";

export const constructionMaterials = [
  {
    id: 1,
    title: "Portland Cement Type I",
    description:
      "High-quality ordinary Portland cement suitable for general construction purposes. Meets ASTM C150 standards.",
    category: "Cement & Concrete",
    image: PortlandCementTypeI,
  },
  {
    id: "2",
    title: "Reinforcement Steel Bars",
    description:
      "Grade 60 rebar in various diameters (8mm to 32mm) for structural reinforcement. ISO certified.",
    category: "Steel & Metal",
    image: ReinforcementSteelBars,
  },
  {
    id: "3",
    title: "Coarse Aggregate 20mm",
    description:
      "Crushed stone aggregate for concrete mixing. Washed and graded to meet construction specifications.",
    category: "Aggregates",
    image: CoarseAggregate20mm,
  },
  {
    id: "4",
    title: "Fine Sand (River Sand)",
    description:
      "Premium quality river sand for plastering and concrete work. Free from impurities and organic matter.",
    category: "Aggregates",
    image: FineSandRiverSand,
  },
  {
    id: "5",
    title: "Ready Mix Concrete M25",
    description:
      "Pre-mixed concrete grade M25 (25 MPa strength) delivered fresh to your construction site.",
    category: "Cement & Concrete",
    image: ReadyMixConcreteM25,
  },
  {
    id: "6",
    title: "Structural Steel Beams",
    description:
      "I-beams and H-beams in standard sizes for building frames and structural support systems.",
    category: "Steel & Metal",
    image: StructuralSteelBeams,
  },
  {
    id: "7",
    title: "Clay Bricks (Red Bricks)",
    description:
      "Standard size red clay bricks for masonry work. High compressive strength and durability.",
    category: "Masonry",
    image: ClayBricks,
  },
  {
    id: "8",
    title: "Cement Blocks (Hollow Blocks)",
    description:
      "Hollow concrete blocks in various sizes for partition walls and non-load bearing structures.",
    category: "Masonry",
    image: CementBlocks,
  },
  {
    id: "9",
    title: "Waterproofing Membrane",
    description:
      "Bituminous and polymer-based waterproofing membranes for roofs, basements, and foundations.",
    category: "Waterproofing",
    image: WaterproofingMembrane,
  },
  {
    id: "10",
    title: "Gypsum Plaster",
    description:
      "High-quality gypsum plaster for interior wall finishing. Provides smooth and crack-free surfaces.",
    category: "Finishing Materials",
    image: GypsumPlaster,
  },
  {
    id: "11",
    title: "Ceramic Tiles",
    description:
      "Floor and wall ceramic tiles in various sizes and designs. Suitable for residential and commercial use.",
    category: "Finishing Materials",
    image: CeramicTiles,
  },
  {
    id: "12",
    title: "PVC Pipes & Fittings",
    description:
      "Schedule 40 PVC pipes and fittings for plumbing and drainage systems. UV resistant and durable.",
    category: "Plumbing",
    image: PVCPipes,
  },
  {
    id: "13",
    title: "Electrical Conduit Pipes",
    description:
      "Rigid and flexible electrical conduit pipes for safe cable management in buildings.",
    category: "Electrical",
    image: ElectricalConduits,
  },
  {
    id: "14",
    title: "Insulation Material (Rockwool)",
    description:
      "Thermal and acoustic insulation material for walls, roofs, and HVAC systems.",
    category: "Insulation",
    image: InsulationMaterials,
  },
  {
    id: "15",
    title: "Aluminum Windows & Doors",
    description:
      "Anodized aluminum frames with double glazing for energy-efficient building envelopes.",
    category: "Windows & Doors",
    image: AluminumWindowsDoors,
  },
  {
    id: "16",
    title: "Roofing Sheets (Metal)",
    description:
      "Galvanized steel and aluminum roofing sheets in various profiles and colors.",
    category: "Roofing",
    image: RoofingSheets,
  },
  {
    id: "17",
    title: "Wire Mesh (Welded)",
    description:
      "Welded wire mesh for concrete reinforcement, fencing, and industrial applications.",
    category: "Steel & Metal",
    image: WireMesh,
  },
  {
    id: "18",
    title: "Adhesive Mortar",
    description:
      "Cement-based adhesive mortar for tile fixing and stone cladding applications.",
    category: "Cement & Concrete",
    image: AdhesiveMortar,
  },
  {
    id: "19",
    title: "Expansion Joint Filler",
    description:
      "Foam and rubber expansion joint fillers for concrete slabs and structural joints.",
    category: "Accessories",
    image: ExpansionJointFiller,
  },
  {
    id: "20",
    title: "Construction Chemicals",
    description:
      "Concrete admixtures, curing compounds, and protective coatings for enhanced durability.",
    category: "Chemicals",
    image: ConstructionChemicals,
  },
  {
    id: "21",
    title: "Precast Concrete Elements",
    description:
      "Precast beams, columns, and panels for faster construction and consistent quality.",
    category: "Cement & Concrete",
    image: PrecastConcreteElements,
  },
  {
    id: "22",
    title: "Steel Wire Rope",
    description:
      "High-tensile steel wire ropes for lifting, hoisting, and structural support applications.",
    category: "Steel & Metal",
    image: SteelWireRope,
  },
  {
    id: "23",
    title: "Gravel & Crushed Stone",
    description:
      "Various grades of gravel and crushed stone for road base, drainage, and landscaping.",
    category: "Aggregates",
    image: GravelCrushedStone,
  },
  {
    id: "24",
    title: "Formwork Plywood",
    description:
      "Marine-grade plywood for concrete formwork. High strength and water-resistant.",
    category: "Formwork",
    image: FormworkPlywood,
  },
];
