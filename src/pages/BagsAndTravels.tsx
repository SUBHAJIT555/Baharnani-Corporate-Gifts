import CommonHero from "../components/ui/CommonHero";
import OverView from "../components/OverView";
import ProductGrid from "../components/ProductGrid";
import WhyChooseUs from "../components/WhyChooseUs";
import type { FeatureCard } from "../components/WhyChooseUs";
import {
  Award,
  Briefcase,
  Globe,
  Luggage,
  Package,
  Sparkles,
} from "lucide-react";
import CallToAction from "../components/CallToAction";

// images
import FoodStuffImage from "../assets/images/Products-hero-image/food-stuff-hero.webp";
import { useProductCategories, useProductsByCategory } from "../hooks/useProducts";
import { useState } from "react";

const bagsAndTravelsFeatures: FeatureCard[] = [
  {
    id: 1,
    number: "01",
    title: "Premium Quality Bags & Travel Accessories",
    description:
      "From executive briefcases to luxury luggage sets, we offer high-quality bags and travel accessories perfect for corporate gifting and business professionals.",
    icon: <Luggage size={32} />,
    iconColor: "#4CAF50",
  },
  {
    id: 2,
    number: "02",
    title: "Custom Branding Options",
    description:
      "Personalize your corporate gifts with custom logo printing, embroidery, and branded packaging to strengthen your brand identity with every journey.",
    icon: <Sparkles size={32} />,
    iconColor: "#FF6B6B",
  },
  {
    id: 3,
    number: "03",
    title: "Wide Range of Products",
    description:
      "Explore our collection of briefcases, backpacks, travel bags, luggage sets, and document holders that make perfect corporate gifts for clients and employees.",
    icon: <Package size={32} />,
    iconColor: "#FF9800",
  },
  {
    id: 4,
    number: "04",
    title: "Perfect for Business Travelers",
    description:
      "Our travel accessories are designed for professionals on the go, featuring durable materials, smart compartments, and modern designs.",
    icon: <Briefcase size={32} />,
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
      "Sourced from leading manufacturers, our bags and travel accessories combine style, durability, and functionality for lasting impressions.",
    icon: <Award size={32} />,
    iconColor: "#4CAF50",
  },
];

const BagsAndTravels = () => {
  const categorySlug = "bags-and-travel";
  const [currentPage, setCurrentPage] = useState(1);
  const perPage = 12;
  const { data: productsData, isLoading: productsLoading, error: productsError } = useProductsByCategory(categorySlug, currentPage, perPage);
  const productData = productsData || { products: [], total: 0, total_pages: 0, page: 1, per_page: 12 };
  console.log("products data in bags and travels", productData);
  const { data: categories } = useProductCategories();
  const filteredCategories = categories?.filter(category => category.slug === categorySlug);

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  return (
    <div>
      <CommonHero
        title="Premium Bags & Travel Accessories for Corporate Gifting in Dubai"
        titlesuffix=""
        subtitle="Discover our exclusive collection of high-quality bags and luxury travel accessories, perfect for corporate gifts, client appreciation, and employee recognition programs."
        imageUrl={FoodStuffImage}
        buttonLink="#bags-travel"
        buttonText="Shop Bags & Travel"
      />
      <OverView
        content={
          <>
            Looking for the perfect corporate gift that combines style,
            functionality, and professionalism? Our premium collection of bags
            and travel accessories features everything from executive leather
            briefcases and premium travel backpacks to luxury luggage sets and
            document holders. Each item is carefully selected to make a lasting
            impression on your clients, partners, and employees. Whether you
            need branded travel bags for business professionals or sophisticated
            luggage for client appreciation, we've got you covered with the
            finest selection across Dubai and the UAE.
          </>
        }
      />
      <ProductGrid
        title="Explore Our Collection of Bags & Travel Accessories"
        productType="custom"
        productData={productData}
        onPageChange={handlePageChange}
        selectedCategory={categorySlug}
        categories={filteredCategories || []}
        isLoading={productsLoading}
        error={productsError}
        id="bags-travel"
      />
      <WhyChooseUs features={bagsAndTravelsFeatures} />
      <CallToAction
        title="Your Trusted Partner for Corporate Bags & Travel Accessories in Dubai"
        subtitle="From custom-branded briefcases to luxury luggage sets, we deliver premium quality corporate gifts that strengthen relationships and elevate your brand presence."
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

export default BagsAndTravels;
