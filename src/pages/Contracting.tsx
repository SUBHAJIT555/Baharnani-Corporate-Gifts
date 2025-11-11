import OverView from "../components/OverView";
import CommonHero from "../components/ui/CommonHero"
import ProductGrid from "../components/ProductGrid";
import WhyChooseUs, { type FeatureCard } from "../components/WhyChooseUs";
import { Award, Globe, Leaf, Package, Users } from "lucide-react";
import CallToAction from "../components/CallToAction";

// images 
import ContractingSolutionsImage from "../assets/images/Products-hero-image/Contracting-Solutions-hero.webp";
const contractingFeatures: FeatureCard[] = [
  {
    id: 1,
    number: "01",
    title: "Integrated Services",
    description: "Materials, manpower, and execution under one roof.",
    icon: <Package size={32} />,
    iconColor: "#4CAF50",
  },
  {
    id: 2,
    number: "02",
    title: "Experienced Team",
    description: "Qualified engineers, supervisors, and skilled labor force.",
    icon: <Users size={32} />,
    iconColor: "#FF6B6B",
  },
  {
    id: 3,
    number: "03",
    title: "Safety First",
    description: "Adherence to Oman HSE and international safety standards.",
    icon: <Award size={32} />,
    iconColor: "#FF9800",
  },
  {
    id: 4,
    number: "04",
    title: "Quality Commitment",
    description: "On-site supervision with regular quality audits.",
    icon: <Leaf size={32} />,
    iconColor: "#8BC34A",
  },
  {
    id: 5,
    number: "05",
    title: "Timely Delivery",
    description: "Structured project timelines with milestone reporting.",
    icon: <Globe size={32} />,
    iconColor: "#3F3F9F",
  },
  {
    id: 6,
    number: "06",
    title: "Technical Expertise",
    description: "Coordination across MEP, civil, and interior disciplines.",
    icon: <Award size={32} />,
    iconColor: "#2196F3",
  },
];
const Contracting = () => {
  
  return (
    <div>
      <CommonHero
        title="Reliable Contracting Services with End-to-End Project Solutions"
        titlesuffix=""
        subtitle="Leading Network LLC provides comprehensive contracting services that combine materials, skilled manpower, and project execution — delivering quality-driven construction, MEP, and fit-out works across Oman and the GCC."
        imageUrl={ContractingSolutionsImage}
        buttonLink="#contracting-solutions"
        buttonText="Explore Contracting Services"
      />
      <OverView
        content={
          <>
            As part of our diversified operations, Leading Network LLC extends
            its expertise beyond trading into turnkey contracting services.{" "}
            <br /> From civil construction and MEP installations to renovations
            and facility maintenance, we manage every stage with precision,
            safety, and adherence to project timelines. <br /> Our team
            integrates directly with our in-house materials division to ensure
            consistent quality and seamless project execution.
          </>
        }
      />
      <ProductGrid title="Our Product Range" productType="contracting" id="contracting-solutions" />
      <WhyChooseUs features={contractingFeatures} />
      <CallToAction
        title="Your Reliable Contracting Partner in Oman"
        subtitle="From structural construction to interior finishing, Leading Network LLC ensures quality craftsmanship, efficient delivery, and long-term reliability for every project."
        backgroundImageUrl={ContractingSolutionsImage}
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

export default Contracting
