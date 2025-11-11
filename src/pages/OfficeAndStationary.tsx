import OverView from "../components/OverView";
import CommonHero from "../components/ui/CommonHero";
import ProductGrid from "../components/ProductGrid";
import WhyChooseUs from "../components/WhyChooseUs";
import type { FeatureCard } from "../components/WhyChooseUs";
import { Award, Globe, Leaf, Package, Users, PenTool } from "lucide-react";
import CallToAction from "../components/CallToAction";
import { giftItems } from "../data/giftItems";

// images
import BuildingMaterialsImage from "../assets/images/Products-hero-image/Building-Materials-hero.webp";

// Filter office and stationary items from giftItems
const officeAndStationaryItems = giftItems.filter(
  (item) => item.category === "Office and stationary"
);

const officeAndStationaryFeatures: FeatureCard[] = [
  {
    id: 1,
    number: "01",
    title: "Premium Quality Office & Stationery Supplies",
    description:
      "From luxury pen sets to elegant desk organizers, we offer high-quality office and stationery supplies perfect for corporate gifting and professional workspaces.",
    icon: <PenTool size={32} />,
    iconColor: "#4CAF50",
  },
  {
    id: 2,
    number: "02",
    title: "Custom Branding Options",
    description:
      "Personalize your corporate gifts with custom logo engraving, embossing, and branded packaging to strengthen your brand identity with every use.",
    icon: <Award size={32} />,
    iconColor: "#FF6B6B",
  },
  {
    id: 3,
    number: "03",
    title: "Wide Range of Products",
    description:
      "Explore our collection of premium pens, custom notebooks, desk organizers, business card holders, and stationery accessories that make perfect corporate gifts.",
    icon: <Package size={32} />,
    iconColor: "#FF9800",
  },
  {
    id: 4,
    number: "04",
    title: "Perfect for Professional Workspaces",
    description:
      "Our office supplies are designed for professionals, featuring elegant designs, durable materials, and sophisticated finishes that enhance any workspace.",
    icon: <Users size={32} />,
    iconColor: "#8BC34A",
  },
  {
    id: 5,
    number: "05",
    title: "Flexible Ordering",
    description:
      "From individual gifts to bulk orders, we accommodate orders of all sizes with reliable delivery across Dubai and the UAE.",
    icon: <Globe size={32} />,
    iconColor: "#3F3F9F",
  },
  {
    id: 6,
    number: "06",
    title: "Trusted Quality",
    description:
      "Sourced from leading manufacturers, our office and stationery products combine style, durability, and functionality for lasting impressions.",
    icon: <Leaf size={32} />,
    iconColor: "#4CAF50",
  },
];
const OfficeAndStationary = () => {
  return (
    <div>
      <CommonHero
        title="Premium Office & Stationery for Corporate Gifting in Dubai"
        titlesuffix=""
        subtitle="Discover our exclusive collection of high-quality office supplies and luxury stationery, perfect for corporate gifts, client appreciation, and employee recognition programs."
        imageUrl={BuildingMaterialsImage}
        buttonLink="#office-and-stationary"
        buttonText="Shop Office & Stationery"
      />
      <OverView
        content={
          <>
            Looking for the perfect corporate gift that combines elegance,
            functionality, and professionalism? Our premium collection of office
            and stationery supplies features everything from luxury fountain pen
            sets and custom leather-bound notebooks to executive desk organizers
            and professional business card holders. Each item is carefully
            selected to make a lasting impression on your clients, partners, and
            employees. Whether you need branded stationery for client
            appreciation or sophisticated office accessories for employee
            recognition, we've got you covered with the finest selection across
            Dubai and the UAE.
          </>
        }
      />
      <ProductGrid
        title="Explore Our Collection of Office & Stationery"
        productType="custom"
        products={officeAndStationaryItems}
        id="office-and-stationary"
      />
      <WhyChooseUs features={officeAndStationaryFeatures} />
      <CallToAction
        title="Your Trusted Partner for Corporate Office & Stationery in Dubai"
        subtitle="From custom-branded pen sets to luxury desk accessories, we deliver premium quality corporate gifts that strengthen relationships and elevate your brand presence."
        backgroundImageUrl={BuildingMaterialsImage}
        buttons={[
          {
            text: "Contact Our Team",
            className:
              "h-[50px] w-full sm:w-auto px-8 bg-textcolor! text-white! font-tanker!",
            link: "/contact-us",
          },
          {
            text: "Explore Product Categories",
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
