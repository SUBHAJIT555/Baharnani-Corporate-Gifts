import OverView from "../components/OverView";
import CommonHero from "../components/ui/CommonHero";
import ProductGrid from "../components/ProductGrid";
import WhyChooseUs from "../components/WhyChooseUs";
import type { FeatureCard } from "../components/WhyChooseUs";
import { Award, Globe, Leaf, Package, Users } from "lucide-react";
import CallToAction from "../components/CallToAction";

// images 
import FoodStuffImage from "../assets/images/Products-hero-image/food-stuff-hero.webp";

const foodstuffFeatures: FeatureCard[] = [
  {
    id: 1,
    number: "01",
    title: "Certified Sourcing",
    description: "All products from HACCP, ISO, and FDA-approved suppliers.",
    icon: <Award size={32} />,
    iconColor: "#4CAF50",
  },
  {
    id: 2,
    number: "02",
    title: "Flexible Packaging",
    description: "Consumer (1–10 kg) and bulk (25 kg / 50 kg / container) options.",
    icon: <Package size={32} />,
    iconColor: "#FF6B6B",
  },
  {
    id: 3,
    number: "03",
    title: "Private Labeling",
    description: "Full white-label support for retail and export brands.",
    icon: <Users size={32} />,
    iconColor: "#FF9800",
  },
  {
    id: 4,
    number: "04",
    title: "Cold-Chain Logistics",
    description: "Specialized storage and delivery for frozen & chilled items.",
    icon: <Leaf size={32} />,
    iconColor: "#8BC34A",
  },
  {
    id: 5,
    number: "05",
    title: "Global Reach",
    description: "Distribution across GCC, Africa, and South-East Asia.",
    icon: <Globe size={32} />,
    iconColor: "#3F3F9F",
  },
  {
    id: 6,
    number: "06",
    title: "Quality Assurance",
    description: "Batch testing and full documentation (COA, inspection reports).",
    icon: <Award size={32} />,
    iconColor: "#4CAF50",
  },
];
const FoodStuff = () => {
  return (
    <div>
      <CommonHero
        title="Leading Food Stuff Trading Company in Oman"
        titlesuffix=""
        subtitle="We supply and export premium food commodities, frozen goods, and packaged products sourced from HACCP and ISO-certified producers — ensuring freshness, safety, and quality across Oman, the Middle East, Africa, and Asia."
        imageUrl={FoodStuffImage}
        buttonLink="#food-stuff"
        buttonText="Explore Food Stuff"
      />
      <OverView
        content={
          <>
            At Leading Network LLC, we specialize in the wholesale and export of
            food products — from rice, sugar, and pulses to frozen foods and
            beverages.
            <br /> Our end-to-end trading network connects global suppliers with
            regional distributors, ensuring safe handling,
            temperature-controlled logistics, and consistent quality across all
            deliveries.
          </>
        }
      />
      <ProductGrid title="Our Product Range" productType="foodstuff" id="food-stuff" />
      <WhyChooseUs features={foodstuffFeatures} />
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

export default FoodStuff;
