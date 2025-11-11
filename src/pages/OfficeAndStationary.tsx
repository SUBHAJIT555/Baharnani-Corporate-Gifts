import OverView from "../components/OverView";
import CommonHero from "../components/ui/CommonHero";
import ProductGrid from "../components/ProductGrid";
import WhyChooseUs from "../components/WhyChooseUs";
import type { FeatureCard } from "../components/WhyChooseUs";
import { Award, Globe, Leaf, Package, Users } from "lucide-react";
import CallToAction from "../components/CallToAction";

// images 
import FoodStuffImage from "../assets/images/Products-hero-image/food-stuff-hero.webp";

const officeAndStationaryFeatures: FeatureCard[] = [
  {
    id: 1,
    number: "01",
    title: "Wide Range of Office & Stationery Supplies",
    description: "Explore our extensive collection of office and stationery supplies, including pens, notebooks, office supplies, and more, designed to meet your needs for every office.",
    icon: <Award size={32} />,
    iconColor: "#4CAF50",
  },
  {
    id: 2,
    number: "02",
    title: "Quality & Durability",
    description: "All products are made from durable materials and designed to last for years of use.",
    icon: <Package size={32} />,
    iconColor: "#FF6B6B",
  },
  {
    id: 3,
    number: "03",
    title: "Customization Options",
    description: "We offer customization options for all products. Add your company's logo, message, or choose from a variety of premium branding services.",
    icon: <Users size={32} />,
    iconColor: "#FF9800",
  },
  {
    id: 4,
    number: "04",
    title: "Global Reach",
    description: "Distribution across GCC, Africa, and South-East Asia.",
    icon: <Leaf size={32} />,
    iconColor: "#8BC34A",
  },
  {
    id: 5,
    number: "05",
    title: "Quality Assurance",
    description: "Batch testing and full documentation (COA, inspection reports).",
    icon: <Globe size={32} />,
    iconColor: "#3F3F9F",
  },
  {
    id: 6,
    number: "06",
    title: "Customization Options",
    description: "We offer customization options for all products. Add your company's logo, message, or choose from a variety of premium branding services.",
    icon: <Award size={32} />,
    iconColor: "#4CAF50",
  },
];
const OfficeAndStationary = () => {
  return (
    <div>
      <CommonHero
        title="Leading Office & Stationery Trading Company in Oman"
        titlesuffix=""
        subtitle="We supply and export premium office and stationery supplies, ensuring quality, durability, and customization across Oman, the Middle East, Africa, and Asia."
        imageUrl={FoodStuffImage}
        buttonLink="#office-and-stationary"
        buttonText="Explore Office & Stationery"
      />
      <OverView
        content={
          <>
              At Leading Network LLC, we specialize in the wholesale and export of
            office and stationery supplies, ensuring quality, durability, and customization across Oman, the Middle East, Africa, and Asia.
            <br /> Our end-to-end trading network connects global suppliers with
            regional distributors, ensuring safe handling, temperature-controlled logistics, and consistent quality across all deliveries.
          </>
        }
      />
      <ProductGrid title="Our Product Range" productType="foodstuff" id="food-stuff" />
      <WhyChooseUs features={officeAndStationaryFeatures} />
      <CallToAction
        title="Partner With Oman’s Reliable Food Trading Company"
        subtitle="From rice and pulses to frozen meats and beverages, Leading Network LLC ensures every product meets international food-safety and freshness standards."
        backgroundImageUrl={FoodStuffImage}
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

export default OfficeAndStationary;
