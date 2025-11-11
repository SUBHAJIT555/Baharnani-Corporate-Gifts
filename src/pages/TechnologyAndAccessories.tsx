import OverView from "../components/OverView";
import CommonHero from "../components/ui/CommonHero"
import ProductGrid from "../components/ProductGrid";
import WhyChooseUs, { type FeatureCard } from "../components/WhyChooseUs";
import { Award, Globe, Leaf, Package, Users } from "lucide-react";
import CallToAction from "../components/CallToAction";

// images 
import TechnologyAndAccessoriesImage from "../assets/images/Hero-images/Home-hero-Building-Materials.webp";
const technologyAndAccessoriesFeatures: FeatureCard[] = [
  {
    id: 1,
    number: "01",
    title: "Wide Range of Technology & Accessories",
    description: "Explore our extensive collection of technology and accessories, including laptops, smartphones, tablets, and more, designed to meet your needs for every technology need.",
    icon: <Package size={32} />,
    iconColor: "#4CAF50",
  },
  {
    id: 2,
    number: "02",
    title: "Quality & Durability",
    description: "All products are made from durable materials and designed to last for years of use.",
    icon: <Users size={32} />,
    iconColor: "#FF6B6B",
  },
  {
    id: 3,
    number: "03",
    title: "Customization Options",
    description: "We offer customization options for all products. Add your company's logo, message, or choose from a variety of premium branding services.",
    icon: <Award size={32} />,
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
    iconColor: "#2196F3",
  },
];
const TechnologyAndAccessories = () => {
  
  return (
    <div>
      <CommonHero
        title="Leading Technology & Accessories Trading Company in Oman"
        titlesuffix=""
        subtitle="We supply and export premium technology and accessories, ensuring quality, durability, and customization across Oman, the Middle East, Africa, and Asia."
        imageUrl={TechnologyAndAccessoriesImage}
        buttonLink="#technology-and-accessories"
        buttonText="Explore Technology & Accessories"
      />
      <OverView
        content={
          <>
            At Leading Network LLC, we specialize in the wholesale and export of
            technology and accessories, ensuring quality, durability, and customization across Oman, the Middle East, Africa, and Asia.
          </>
        }
      />
      <ProductGrid title="Our Product Range" productType="contracting" id="technology-and-accessories" />
      <WhyChooseUs features={technologyAndAccessoriesFeatures} />
      <CallToAction
        title="Partner With Oman’s Reliable Technology & Accessories Supplier"
        subtitle="From laptops to smartphones to tablets, Leading Network LLC ensures every product meets international technology and accessibility standards."
        backgroundImageUrl={TechnologyAndAccessoriesImage}
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

export default TechnologyAndAccessories
