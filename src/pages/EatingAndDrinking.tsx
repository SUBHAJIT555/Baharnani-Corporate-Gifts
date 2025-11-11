import CommonHero from "../components/ui/CommonHero";
import OverView from "../components/OverView";
import ProductGrid from "../components/ProductGrid";
import WhyChooseUs from "../components/WhyChooseUs";
import type { FeatureCard } from "../components/WhyChooseUs";
import { Coffee, Award, Package, Users, Gift, Sparkles } from "lucide-react";
import CallToAction from "../components/CallToAction";
import { giftItems } from "../data/giftItems";

// images
import FoodStuffImage from "../assets/images/Products-hero-image/food-stuff-hero.webp";

// Filter eating and drinking items from giftItems
const eatingAndDrinkingItems = giftItems.filter(
  (item) => item.category === "Eating and drinking"
);

const eatingAndDrinkingFeatures: FeatureCard[] = [
  {
    id: 1,
    number: "01",
    title: "Premium Quality Food & Beverage Gifts",
    description:
      "From gourmet coffee sets to luxury tea collections, we offer high-quality eating and drinking products perfect for corporate gifting and client appreciation.",
    icon: <Coffee size={32} />,
    iconColor: "#4CAF50",
  },
  {
    id: 2,
    number: "02",
    title: "Custom Branding Options",
    description:
      "Personalize your corporate gifts with custom packaging, logo printing, and branded gift boxes to strengthen your brand identity with every sip.",
    icon: <Award size={32} />,
    iconColor: "#FF6B6B",
  },
  {
    id: 3,
    number: "03",
    title: "Wide Range of Products",
    description:
      "Explore our collection of premium coffee sets, gourmet teas, luxury chocolates, wine accessories, and insulated drinkware that make perfect corporate gifts.",
    icon: <Package size={32} />,
    iconColor: "#FF9800",
  },
  {
    id: 4,
    number: "04",
    title: "Perfect for Every Occasion",
    description:
      "Whether it's client appreciation, employee recognition, corporate events, or holiday gifting, our food and beverage products suit every occasion.",
    icon: <Gift size={32} />,
    iconColor: "#8BC34A",
  },
  {
    id: 5,
    number: "05",
    title: "Flexible Ordering",
    description:
      "From individual gifts to bulk orders, we accommodate orders of all sizes with reliable delivery across Dubai and the UAE.",
    icon: <Users size={32} />,
    iconColor: "#3F3F9F",
  },
  {
    id: 6,
    number: "06",
    title: "Trusted Quality",
    description:
      "Sourced from premium suppliers, our eating and drinking products combine quality, taste, and elegant presentation for lasting impressions.",
    icon: <Sparkles size={32} />,
    iconColor: "#4CAF50",
  },
];
const EatingAndDrinking = () => {
  return (
    <div>
      <CommonHero
        title="Premium Eating & Drinking Products for Corporate Gifting in Dubai"
        titlesuffix=""
        subtitle="Discover our exclusive collection of high-quality food and beverage products, perfect for corporate gifts, client appreciation, and employee recognition programs."
        imageUrl={FoodStuffImage}
        buttonLink="#eating-drinking"
        buttonText="Shop Eating & Drinking"
      />
      <OverView
        content={
          <>
            Looking for the perfect corporate gift that combines taste, quality,
            and elegance? Our premium collection of eating and drinking products
            features everything from gourmet coffee gift sets and luxury tea
            collections to artisan chocolate boxes and executive wine
            accessories. Each item is carefully selected to make a lasting
            impression on your clients, partners, and employees. Whether you
            need branded coffee sets for client appreciation or sophisticated
            beverage accessories for corporate events, we've got you covered
            with the finest selection across Dubai and the UAE.
          </>
        }
      />
      <ProductGrid
        title="Explore Our Collection of Eating & Drinking Products"
        productType="custom"
        products={eatingAndDrinkingItems}
        id="eating-drinking"
      />
      <WhyChooseUs features={eatingAndDrinkingFeatures} />
      <CallToAction
        title="Your Trusted Partner for Corporate Food & Beverage Gifts in Dubai"
        subtitle="From custom-branded coffee sets to luxury tea collections, we deliver premium quality eating and drinking products that strengthen relationships and elevate your brand presence."
        backgroundImageUrl={FoodStuffImage}
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

export default EatingAndDrinking;
