import CommonHero from "../components/ui/CommonHero";
import OverView from "../components/OverView";
import ProductGrid from "../components/ProductGrid";
import WhyChooseUs from "../components/WhyChooseUs";
import type { FeatureCard } from "../components/WhyChooseUs";
import { Award, Globe, Leaf, Package, Users } from "lucide-react";
import CallToAction from "../components/CallToAction";

// images 
import BuildingMaterialsImage from "../assets/images/Products-hero-image/Building-Materials-hero.webp";

const BagsAndTravels = () => {
  const bagsAndTravelsFeatures: FeatureCard[] = [
    {
      id: 1,
      number: "01",
      title: "Wide Range of Bags & Travel Accessories",
      description: "Explore our extensive collection of bags and travel accessories, including suitcases, backpacks, travel wallets, and more, designed to meet your needs for every journey.",
      icon: <Award size={32} />,
      iconColor: "#4CAF50",
    },
    {
      id: 2,
      number: "02",
      title: "Wide Range",
      description: "From plumbing and electrical to flooring and finishes — all under one roof.",
      icon: <Package size={32} />,
      iconColor: "#FF6B6B",
    },
    {
      id: 3,
      number: "03",
      title: "Technical Expertise",
      description: "Support for specification sheets, samples, and on-site guidance.",
      icon: <Users size={32} />,
      iconColor: "#FF9800",
    },
    {
      id: 4,
      number: "04",
      title: "Project Ready",
      description: "Ready stock for ongoing and upcoming construction works.",
      icon: <Leaf size={32} />,
      iconColor: "#8BC34A",
    },
    {
      id: 5,
      number: "05",
      title: "Flexible Orders",
      description: "Bulk and project-based supply with reliable delivery schedules.",
      icon: <Globe size={32} />,
      iconColor: "#3F3F9F",
    },
    {
      id: 6,
      number: "06",
      title: "Trusted Brands",
      description: "Sourced from leading manufacturers and authorized distributors.",
      icon: <Award size={32} />,
      iconColor: "#4CAF50",
    },
  ];
 
  return (
    <div>
      <CommonHero
        title="Your Reliable Source for Building Materials in Oman"
        titlesuffix=""
        subtitle="Whether it’s plumbing, electrical, finishing, or hardware, Leading Network LLC delivers certified materials, consistent supply, and competitive pricing across Oman and the GCC."
        imageUrl={BuildingMaterialsImage}
        buttonLink="#building-materials"
        buttonText="Explore Building Materials"
      />
      <OverView
        content={
          <>
            We provide a complete portfolio of building materials covering
            civil, electrical, plumbing, and finishing requirements.
            <br /> Our goal is to deliver quality materials, reliable stock
            availability, and to deliver quality materials, reliable stock
            availability, and technical support — enabling contractors,
            developers, and architects to complete their projects with
            confidence and precision.
          </>
        }
      />
      <ProductGrid title="Our Product Range" productType="building" id="building-materials" />
      <WhyChooseUs features={bagsAndTravelsFeatures} />
      <CallToAction
        title="Partner With Oman’s Reliable Building Materials Supplier"
        subtitle="From structural steel to insulation materials, Leading Network LLC ensures durability, design, and compliance with global standards for every construction project."
        backgroundImageUrl={BuildingMaterialsImage}
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

export default BagsAndTravels
