import CommonHero from "../components/ui/CommonHero";
import OverView from "../components/OverView";
import ProductGrid from "../components/ProductGrid";
import WhyChooseUs from "../components/WhyChooseUs";
import type { FeatureCard } from "../components/WhyChooseUs";
import { Package, Award, Globe, Users, Leaf } from "lucide-react";
import CallToAction from "../components/CallToAction";

// images 
import ConstructionMaterialsImage from "../assets/images/Products-hero-image/Construction-Materials-hero.webp";

const constructionMaterialsFeatures: FeatureCard[] = [
  {
    id: 1,
    number: "01",
    title: "Bulk & Retail Options",
    description: "From container loads to small project quantities.",
    icon: <Package size={32} />,
    iconColor: "#FF6B6B",
  },
  {
    id: 2,
    number: "02",
    title: "Certified Quality",
    description: "ASTM, BS, and ISO compliant products only.",
    icon: <Award size={32} />,
    iconColor: "#4CAF50",
  },
  {
    id: 3,
    number: "03",
    title: "Direct Sourcing",
    description: "Partnered with top regional and global manufacturers.",
    icon: <Globe size={32} />,
    iconColor: "#3F3F9F",
  },
  {
    id: 4,
    number: "04",
    title: "Logistics Support",
    description: "Local delivery across Oman & export-ready packing.",
    icon: <Users size={32} />,
    iconColor: "#FF9800",
  },
  {
    id: 5,
    number: "05",
    title: "Project Integration",
    description: "Ideal for contractors, developers, and distributors.",
    icon: <Leaf size={32} />,
    iconColor: "#8BC34A",
  },
];

const ConstructionMaterials = () => {
  return (
    <div>
      <CommonHero
        title="High-Quality Construction Materials for Every Project"
        titlesuffix=""
        subtitle="From cement and steel to tiles and waterproofing solutions — Leading Network LLC supplies durable, certified materials trusted by contractors, developers, and construction firms across Oman and the GCC."
        imageUrl={ConstructionMaterialsImage}
        buttonLink="#construction-materials"
        buttonText="Explore Construction Materials"
      />
      <OverView
        content={
          <>
            We deliver a full range of construction and infrastructure materials
            sourced directly from certified mills and factories that meet ASTM
            and ISO standards.
            <br />
            Whether it's a residential project, commercial complex, or
            industrial development, our materials ensure strength, consistency,
            and reliability from foundation to finish.
          </>
        }
      />
      <ProductGrid title="Our Product Range" productType="construction" id="construction-materials" />
      <WhyChooseUs features={constructionMaterialsFeatures} />
      <CallToAction
        title="Your Reliable Partner for Construction Supplies in Oman"
        subtitle="From structural materials to finishing products, Leading Network LLC delivers quality, speed, and consistency for every construction need."
        backgroundImageUrl={ConstructionMaterialsImage}
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
};

export default ConstructionMaterials;
