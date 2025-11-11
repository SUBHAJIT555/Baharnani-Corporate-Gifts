import CommonHero from "../components/ui/CommonHero";
import OverView from "../components/OverView";
import ProductGrid from "../components/ProductGrid";
import WhyChooseUs from "../components/WhyChooseUs";

import { type FeatureCard } from "../components/WhyChooseUs";
import { Shield, Wrench, Package, Users, Zap, HeadphonesIcon } from "lucide-react";
import CallToAction from "../components/CallToAction";

// images 
import SportsAndRecreationImage from "../assets/images/Hero-images/Home-hero-Contact.webp";
const sportsAndRecreationFeatures: FeatureCard[] = [
  {
    id: 1,
    number: "01",
    title: "Authorized Partnerships",
    description: "Official reseller and distributor of major tech brands.",
    icon: <Shield size={32} />,
    iconColor: "#4CAF50",
  },
  {
    id: 2,
    number: "02",
    title: "Turnkey Projects",
    description: "Supply, installation, and after-sales warranty support included.",
    icon: <Wrench size={32} />,
    iconColor: "#FF6B6B",
  },
  {
    id: 3,
    number: "03",
    title: "Flexible Supply Models",
    description: "B2B, institutional, and project-based orders accepted.",
    icon: <Package size={32} />,
    iconColor: "#FF9800",
  },
  {
    id: 4,
    number: "04",
    title: "Technical Expertise",
    description: "Dedicated IT professionals for configuration and integration.",
    icon: <Users size={32} />,
    iconColor: "#8BC34A",
  },
  {
    id: 5,
    number: "05",
    title: "Fast Delivery",
    description: "Stock availability for immediate dispatch within Oman.",
    icon: <Zap size={32} />,
    iconColor: "#3F3F9F",
  },
  {
    id: 6,
    number: "06",
    title: "After-Sales Service",
    description: "Warranty management and support for hardware replacements.",
    icon: <HeadphonesIcon size={32} />,
    iconColor: "#2196F3",
  },
];

const SportsAndRecreation = () => {
  return (
    <div>
      <CommonHero
        title="Innovative Electronics & IT Solutions for Modern Businesses"
        titlesuffix=""
        subtitle="Leading Network LLC delivers cutting-edge technology hardware, networking solutions, and smart systems designed to empower corporate, educational, and industrial sectors across Oman and the GCC."
        imageUrl={SportsAndRecreationImage}
        buttonLink="#electronics-and-it"
        buttonText="Explore Electronics & IT Solutions"
      />
      <OverView
        content={
          <>
            Our Electronics & IT division connects organizations with reliable
            hardware, smart devices, and digital display systems that enhance
            efficiency, communication, and security. <br /> We supply products
            from top global brands, providing complete support — from
            procurement and installation to after-sales service and warranty
            management. <br /> Whether it’s setting up a smart office, securing
            a warehouse, or building a digital signage network, Leading Network
            LLC delivers quality technology on time and within budget.
          </>
        }
      />
      <ProductGrid title="Our Product Range" productType="electronicsandit" id="electronics-and-it" />
      <WhyChooseUs features={sportsAndRecreationFeatures} />
      <CallToAction
        title="Empower Your Business with Reliable Technology"
        subtitle="From computers and networking systems to CCTV and smart solutions, Leading Network LLC ensures that every product delivers performance, reliability, and long-term value."
        backgroundImageUrl={SportsAndRecreationImage}
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

export default SportsAndRecreation;
