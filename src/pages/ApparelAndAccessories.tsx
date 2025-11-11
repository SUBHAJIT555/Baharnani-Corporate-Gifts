import CommonHero from "../components/ui/CommonHero";
import OverView from "../components/OverView";
import ProductGrid from "../components/ProductGrid";
import WhyChooseUs from "../components/WhyChooseUs";
import type { FeatureCard } from "../components/WhyChooseUs";
import { Package, Award, Users, Shirt, Sparkles } from "lucide-react";
import CallToAction from "../components/CallToAction";
import { giftItems } from "../data/giftItems";

// images
import ConstructionMaterialsImage from "../assets/images/Products-hero-image/Construction-Materials-hero.webp";

// Filter apparel and accessories items from giftItems
const apparelAndAccessoriesItems = giftItems.filter(
  (item) => item.category === "Apparel and accessories"
);

const apparelAndAccessoriesFeatures: FeatureCard[] = [
  {
    id: 1,
    number: "01",
    title: "Premium Quality Apparel",
    description:
      "From corporate polo shirts to elegant silk ties, we offer high-quality apparel perfect for corporate gifting and team building events.",
    icon: <Shirt size={32} />,
    iconColor: "#FF6B6B",
  },
  {
    id: 2,
    number: "02",
    title: "Custom Branding Options",
    description:
      "Personalize your corporate gifts with custom embroidery, logo printing, and branded packaging to strengthen your brand identity.",
    icon: <Award size={32} />,
    iconColor: "#4CAF50",
  },
  {
    id: 3,
    number: "03",
    title: "Wide Range of Accessories",
    description:
      "Explore our collection of luxury watches, leather wallets, scarves, and premium accessories that make perfect corporate gifts.",
    icon: <Sparkles size={32} />,
    iconColor: "#3F3F9F",
  },
  {
    id: 4,
    number: "04",
    title: "Flexible Ordering",
    description:
      "From individual gifts to bulk orders, we accommodate orders of all sizes with reliable delivery across Dubai and the UAE.",
    icon: <Package size={32} />,
    iconColor: "#FF9800",
  },
  {
    id: 5,
    number: "05",
    title: "Perfect for Every Occasion",
    description:
      "Whether it's client appreciation, employee recognition, or corporate events, our apparel and accessories suit every gifting occasion.",
    icon: <Users size={32} />,
    iconColor: "#8BC34A",
  },
];

const ApparelAndAccessories = () => {
  return (
    <div>
      <CommonHero
        title="Premium Apparel & Accessories for Corporate Gifting in Dubai"
        titlesuffix=""
        subtitle="Discover our exclusive collection of high-quality apparel and luxury accessories, perfect for corporate gifts, client appreciation, and employee recognition programs."
        imageUrl={ConstructionMaterialsImage}
        buttonLink="#apparel-accessories"
        buttonText="Shop Apparel & Accessories"
      />
      <OverView
        content={
          <>
            Looking for the perfect corporate gift that combines style, quality,
            and professionalism? Our premium collection of apparel and
            accessories features everything from custom-embroidered polo shirts
            and elegant silk ties to luxury watches and leather accessories.
            Each item is carefully selected to make a lasting impression on your
            clients, partners, and employees. Whether you need branded corporate
            apparel for team events or sophisticated accessories for client
            appreciation, we've got you covered with the finest selection across
            Dubai and the UAE.
          </>
        }
      />
      <ProductGrid
        title="Explore Our Collection of Apparel & Accessories"
        productType="custom"
        products={apparelAndAccessoriesItems}
        id="apparel-accessories"
      />
      <WhyChooseUs features={apparelAndAccessoriesFeatures} />
      <CallToAction
        title="Your Trusted Partner for Corporate Apparel & Accessories in Dubai"
        subtitle="From custom-branded apparel to luxury accessories, we deliver premium quality corporate gifts that strengthen relationships and elevate your brand presence."
        backgroundImageUrl={ConstructionMaterialsImage}
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

export default ApparelAndAccessories;
