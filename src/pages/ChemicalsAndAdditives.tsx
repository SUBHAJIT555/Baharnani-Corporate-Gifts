import CommonHero from "../components/ui/CommonHero"
import OverView from "../components/OverView"
import ProductGrid from "../components/ProductGrid"
import WhyChooseUs from "../components/WhyChooseUs"
import { type FeatureCard } from "../components/WhyChooseUs";

import { Shield, FileText, Package, Leaf, Globe } from "lucide-react";
import CallToAction from "../components/CallToAction";

// images 
import ChemicalsAndAdditivesImage from "../assets/images/Products-hero-image/Chemicals-&-Additives-hero.webp";
const chemicalsandadditivesFeatures: FeatureCard[] = [
  {
    id: 1,
    number: "01",
    title: "Regulatory Compliance",
    description: "All shipments come with MSDS, COA, and REACH documentation.",
    icon: <FileText size={32} />,
    iconColor: "#4CAF50",
  },
  {
    id: 2,
    number: "02",
    title: "Certified Supply Chain",
    description: "Sourced only from GMP, ISO, and GHS-compliant manufacturers.",
    icon: <Shield size={32} />,
    iconColor: "#FF6B6B",
  },
  {
    id: 3,
    number: "03",
    title: "Flexible Quantities",
    description: "Available in drums, IBC tanks, and bulk containers.",
    icon: <Package size={32} />,
    iconColor: "#FF9800",
  },
  {
    id: 4,
    number: "04",
    title: "Safe Packaging",
    description: "Leak-proof drums, chemical-resistant liners, and export-grade packing.",
    icon: <Shield size={32} />,
    iconColor: "#8BC34A",
  },
  {
    id: 5,
    number: "05",
    title: "Environmentally Responsible",
    description: "Handling and disposal aligned with Oman and international environmental regulations.",
    icon: <Leaf size={32} />,
    iconColor: "#3F3F9F",
  },
  {
    id: 6,
    number: "06",
    title: "Global Distribution",
    description: "Serving clients across GCC, Africa, and Asia with consistent delivery timelines.",
    icon: <Globe size={32} />,
    iconColor: "#2196F3",
  },
];

const ChemicalsAndAdditives = () => {
  return (
    <div>
      <CommonHero
        title="Trusted Supplier of Industrial, Food, and Pharmaceutical Chemicals"
        titlesuffix=""
        subtitle="Leading Network LLC provides high-quality industrial, agricultural, and food-grade chemicals — sourced from certified global manufacturers and delivered safely across Oman and international markets."
        imageUrl={ChemicalsAndAdditivesImage}
        buttonLink="#chemicals-and-additives"
        buttonText="Explore Electronics & IT Solutions"
      />
      <OverView
        content={
          <>
            Our Chemicals Division serves multiple industries — from food and
            pharmaceutical manufacturing to agriculture and water treatment.{" "}
            <br /> We focus on quality assurance, regulatory compliance, and
            consistent supply, working only with certified global producers.{" "}
            <br />
            Each shipment is handled with care — from documentation (MSDS, COA)
            to packaging and delivery — ensuring our clients receive chemicals
            that meet both international safety and performance standards.
          </>
        }
      />
      <ProductGrid
        title="Our Product Range"
        productType="chemicalsandadditives"
        id="chemicals-and-additives"
      />
      <WhyChooseUs features={chemicalsandadditivesFeatures} />
      <CallToAction
        title="Partner With a Certified Chemical Supplier in Oman"
        subtitle="From food additives and pharma-grade compounds to industrial and water-treatment chemicals, Leading Network LLC ensures safe sourcing, reliable delivery, and full compliance every time."
        backgroundImageUrl={ChemicalsAndAdditivesImage}
        buttons={[
          {
            text: "Contact Our Team",
            className:
              "h-[50px] w-full sm:w-auto px-8 bg-textcolor! text-white! font-tanker!",
              link: "/contact-us",
          },
          {
            text: "Explore Product Calagories",
            className:
              "h-[50px] w-full sm:w-auto px-8 bg-transparent! border! border-textcolor! text-textcolor! font-tanker!",
              link: "/products",
          },
        ]}
      />
    </div>
  );
}

export default ChemicalsAndAdditives
