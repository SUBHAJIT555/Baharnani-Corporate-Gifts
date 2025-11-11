// Food Additives & Preservatives
import SodiumBenzoateImage from "../assets/images/chemicals-and-additives-product-images/Sodium Benzoate.webp";
import CitricAcidMonohydrateImage from "../assets/images/chemicals-and-additives-product-images/Citric Acid Monohydrate.webp";
import PotassiumSorbateImage from "../assets/images/chemicals-and-additives-product-images/Potassium Sorbate.webp";
import AscorbicAcidImage from "../assets/images/chemicals-and-additives-product-images/Ascorbic Acid (Vitamin C).webp";
import XanthanGumImage from "../assets/images/chemicals-and-additives-product-images/Xanthan Gum.webp";

// Pharma Grade Chemicals
import LactoseMonohydrateUSPImage from "../assets/images/chemicals-and-additives-product-images/Lactose Monohydrate USP.webp";
import MicrocrystallineCelluloseImage from "../assets/images/chemicals-and-additives-product-images/Microcrystalline Cellulose.webp";
import MagnesiumStearateUSPImage from "../assets/images/chemicals-and-additives-product-images/Magnesium Stearate USP.webp";
import PolyethyleneGlycolPEGImage from "../assets/images/chemicals-and-additives-product-images/Polyethylene Glycol (PEG).webp";
import SodiumStarchGlycolateImage from "../assets/images/chemicals-and-additives-product-images/Sodium Starch Glycolate.webp";

// Agricultural & Fertilizer Chemicals
import UreaNitrogenImage from "../assets/images/chemicals-and-additives-product-images/Urea 46 Nitrogen.webp";
import DiammoniumPhosphateDAPImage from "../assets/images/chemicals-and-additives-product-images/Diammonium Phosphate (DAP).webp";
import PotassiumChlorideMOPImage from "../assets/images/chemicals-and-additives-product-images/Potassium Chloride (MOP).webp";
import CalciumNitrateImage from "../assets/images/chemicals-and-additives-product-images/Calcium Nitrate.webp";
import HumicAcidImage from "../assets/images/chemicals-and-additives-product-images/Humic Acid.webp";

// Water-Treatment Chemicals
import PolyaluminiumChloridePACImage from "../assets/images/chemicals-and-additives-product-images/Polyaluminium Chloride (PAC).webp";
import SodiumHypochloriteImage from "../assets/images/chemicals-and-additives-product-images/Sodium Hypochlorite.webp";
import ActivatedCarbonImage from "../assets/images/chemicals-and-additives-product-images/Activated Carbon.webp";
import FerricChlorideImage from "../assets/images/chemicals-and-additives-product-images/Ferric Chloride.webp";
import PolyacrylamidePAMImage from "../assets/images/chemicals-and-additives-product-images/Polyacrylamide (PAM).webp";

// Industrial Chemicals
import SodiumHydroxideImage from "../assets/images/chemicals-and-additives-product-images/Sodium Hydroxide (Caustic Soda).webp";
import HydrochloricAcidImage from "../assets/images/chemicals-and-additives-product-images/Hydrochloric Acid.webp";
import SulfuricAcidImage from "../assets/images/chemicals-and-additives-product-images/Sulfuric Acid.webp";
import SodiumCarbonateImage from "../assets/images/chemicals-and-additives-product-images/Sodium Carbonate (Soda Ash).webp";
import CalciumChlorideImage from "../assets/images/chemicals-and-additives-product-images/Calcium Chloride.webp";

// Specialty Chemicals
import TitaniumDioxideImage from "../assets/images/chemicals-and-additives-product-images/Titanium Dioxide.webp";
import CarbonBlackImage from "../assets/images/chemicals-and-additives-product-images/Carbon Black.webp";
import SilicaGelImage from "../assets/images/chemicals-and-additives-product-images/Silica Gel.webp";
import ZincOxideImage from "../assets/images/chemicals-and-additives-product-images/Zinc Oxide.webp";
import BentoniteClayImage from "../assets/images/chemicals-and-additives-product-images/Bentonite Clay.webp";

export interface Product {
  id: string;
  title: string;
  description: string;
  category: string;
  image: string;
}

export const chemicalsandadditives: Product[] = [
  // Food Additives & Preservatives
  {
    id: "1",
    title: "Sodium Benzoate",
    description:
      "Food grade sodium benzoate preservative. Prevents bacterial and fungal growth in beverages and acidic foods.",
    category: "Food Additives & Preservatives",
    image: SodiumBenzoateImage,
  },
  {
    id: "2",
    title: "Citric Acid Monohydrate",
    description:
      "Natural citric acid for food preservation and flavor enhancement. USP grade quality.",
    category: "Food Additives & Preservatives",
    image: CitricAcidMonohydrateImage,
  },
  {
    id: "3",
    title: "Potassium Sorbate",
    description:
      "Effective food preservative for baked goods, dairy products, and beverages. FDA approved.",
    category: "Food Additives & Preservatives",
    image: PotassiumSorbateImage,
  },
  {
    id: "4",
    title: "Ascorbic Acid (Vitamin C)",
    description:
      "Food grade ascorbic acid as antioxidant and nutritional supplement. Prevents oxidation in foods.",
    category: "Food Additives & Preservatives",
    image: AscorbicAcidImage,
  },
  {
    id: "5",
    title: "Xanthan Gum",
    description:
      "Natural thickening and stabilizing agent for food products. Gluten-free and versatile.",
    category: "Food Additives & Preservatives",
    image: XanthanGumImage,
  },
  // Pharma Grade Chemicals
  {
    id: "6",
    title: "Lactose Monohydrate USP",
    description:
      "Pharmaceutical grade lactose for tablet manufacturing and drug formulations. USP/EP compliant.",
    category: "Pharma Grade Chemicals",
    image: LactoseMonohydrateUSPImage,
  },
  {
    id: "7",
    title: "Microcrystalline Cellulose",
    description:
      "High purity MCC for pharmaceutical tablets and capsules. Excellent binding and disintegration properties.",
    category: "Pharma Grade Chemicals",
    image: MicrocrystallineCelluloseImage,
  },
  {
    id: "8",
    title: "Magnesium Stearate USP",
    description:
      "Pharmaceutical grade lubricant for tablet manufacturing. Prevents sticking and improves flow.",
    category: "Pharma Grade Chemicals",
    image: MagnesiumStearateUSPImage,
  },
  {
    id: "9",
    title: "Polyethylene Glycol (PEG)",
    description:
      "Pharmaceutical grade PEG for drug delivery systems and excipients. Various molecular weights available.",
    category: "Pharma Grade Chemicals",
    image: PolyethyleneGlycolPEGImage,
  },
  {
    id: "10",
    title: "Sodium Starch Glycolate",
    description:
      "Super disintegrant for pharmaceutical tablets. Ensures rapid tablet dissolution and drug release.",
    category: "Pharma Grade Chemicals",
    image: SodiumStarchGlycolateImage,
  },
  // Agricultural & Fertilizer Chemicals
  {
    id: "11",
    title: "Urea 46% Nitrogen",
    description:
      "High nitrogen content urea fertilizer for crop nutrition. Promotes healthy plant growth and yield.",
    category: "Agricultural & Fertilizer Chemicals",
    image: UreaNitrogenImage,
  },
  {
    id: "12",
    title: "Diammonium Phosphate (DAP)",
    description:
      "Balanced NPK fertilizer with high phosphorus content. Essential for root development and flowering.",
    category: "Agricultural & Fertilizer Chemicals",
    image: DiammoniumPhosphateDAPImage,
  },
  {
    id: "13",
    title: "Potassium Chloride (MOP)",
    description:
      "Muriate of potash for potassium nutrition. Improves fruit quality and disease resistance.",
    category: "Agricultural & Fertilizer Chemicals",
    image: PotassiumChlorideMOPImage,
  },
  {
    id: "14",
    title: "Calcium Nitrate",
    description:
      "Water-soluble calcium and nitrogen fertilizer. Prevents calcium deficiency and blossom end rot.",
    category: "Agricultural & Fertilizer Chemicals",
    image: CalciumNitrateImage,
  },
  {
    id: "15",
    title: "Humic Acid",
    description:
      "Organic soil conditioner that improves nutrient uptake and soil structure. Enhances plant growth.",
    category: "Agricultural & Fertilizer Chemicals",
    image: HumicAcidImage,
  },
  // Water-Treatment Chemicals
  {
    id: "16",
    title: "Polyaluminium Chloride (PAC)",
    description:
      "Effective coagulant for water treatment. Removes suspended particles and turbidity from water.",
    category: "Water-Treatment Chemicals",
    image: PolyaluminiumChloridePACImage,
  },
  {
    id: "17",
    title: "Sodium Hypochlorite",
    description:
      "Liquid chlorine disinfectant for water treatment. Kills bacteria, viruses, and other pathogens.",
    category: "Water-Treatment Chemicals",
    image: SodiumHypochloriteImage,
  },
  {
    id: "18",
    title: "Activated Carbon",
    description:
      "High-grade activated carbon for water purification. Removes odors, colors, and organic contaminants.",
    category: "Water-Treatment Chemicals",
    image: ActivatedCarbonImage,
  },
  {
    id: "19",
    title: "Ferric Chloride",
    description:
      "Iron-based coagulant for wastewater treatment. Effective phosphorus removal and sludge conditioning.",
    category: "Water-Treatment Chemicals",
    image: FerricChlorideImage,
  },
  {
    id: "20",
    title: "Polyacrylamide (PAM)",
    description:
      "Flocculant for water treatment and sludge dewatering. Improves solid-liquid separation efficiency.",
    category: "Water-Treatment Chemicals",
    image: PolyacrylamidePAMImage,
  },
  // Industrial Chemicals
  {
    id: "21",
    title: "Sodium Hydroxide (Caustic Soda)",
    description:
      "Industrial grade sodium hydroxide for chemical processing. Available in flakes, pearls, and liquid form.",
    category: "Industrial Chemicals",
    image: SodiumHydroxideImage,
  },
  {
    id: "22",
    title: "Hydrochloric Acid",
    description:
      "Technical grade hydrochloric acid for industrial applications. Metal cleaning and pH adjustment.",
    category: "Industrial Chemicals",
    image: HydrochloricAcidImage,
  },
  {
    id: "23",
    title: "Sulfuric Acid",
    description:
      "Concentrated sulfuric acid for industrial processes. Battery acid and chemical manufacturing.",
    category: "Industrial Chemicals",
    image: SulfuricAcidImage,
  },
  {
    id: "24",
    title: "Sodium Carbonate (Soda Ash)",
    description:
      "Industrial sodium carbonate for glass manufacturing, detergents, and chemical processing.",
    category: "Industrial Chemicals",
    image: SodiumCarbonateImage,
  },
  {
    id: "25",
    title: "Calcium Chloride",
    description:
      "Industrial calcium chloride for de-icing, dust control, and concrete acceleration.",
    category: "Industrial Chemicals",
    image: CalciumChlorideImage,
  },
  // Specialty Chemicals
  {
    id: "26",
    title: "Titanium Dioxide",
    description:
      "High-grade titanium dioxide pigment for paints, coatings, and plastics. Excellent opacity and brightness.",
    category: "Specialty Chemicals",
    image: TitaniumDioxideImage,
  },
  {
    id: "27",
    title: "Carbon Black",
    description:
      "Premium carbon black for rubber reinforcement and pigmentation. Various grades available.",
    category: "Specialty Chemicals",
    image: CarbonBlackImage,
  },
  {
    id: "28",
    title: "Silica Gel",
    description:
      "High-purity silica gel desiccant for moisture control. Available in various mesh sizes and packaging.",
    category: "Specialty Chemicals",
    image: SilicaGelImage,
  },
  {
    id: "29",
    title: "Zinc Oxide",
    description:
      "Pharmaceutical and industrial grade zinc oxide. Used in rubber, ceramics, and personal care products.",
    category: "Specialty Chemicals",
    image: ZincOxideImage,
  },
  {
    id: "30",
    title: "Bentonite Clay",
    description:
      "Natural bentonite clay for drilling fluids, foundry applications, and environmental remediation.",
    category: "Specialty Chemicals",
    image: BentoniteClayImage,
  },
];
