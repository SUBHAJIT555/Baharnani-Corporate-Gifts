import OverView from "../components/OverView";
import CommonHero from "../components/ui/CommonHero";
import ProductGrid from "../components/ProductGrid";
import WhyChooseUs from "../components/WhyChooseUs";
import type { FeatureCard } from "../components/WhyChooseUs";
import {
  Award,
  Globe,
  Package,
  Users,
  Smartphone,
  Sparkles,
} from "lucide-react";
import CallToAction from "../components/CallToAction";
import Seo from "../components/Seo";
// import { giftItems } from "../data/giftItems";

// images
import TechnologyAndAccessoriesImage from "../assets/images/Products-hero-image/Technology-&-accessories.webp";
import { useProductCategories, useProductsByCategory } from "../hooks/useProducts";
import { useState, useEffect, useMemo } from "react";
import { useParams, useNavigate, useLocation } from "react-router";

// Filter technology and accessories items from giftItems
// const technologyAndAccessoriesItems = giftItems.filter(
//   (item) => item.category === "Technology and accessories"
// );

const technologyAndAccessoriesFeatures: FeatureCard[] = [
  {
    id: 1,
    number: "01",
    title: "Premium Technology & Accessories",
    description:
      "From wireless chargers to smart desk lamps, we offer high-quality technology products and accessories perfect for corporate gifting and modern workspaces.",
    icon: <Smartphone size={32} />,
    iconColor: "#4CAF50",
  },
  {
    id: 2,
    number: "02",
    title: "Custom Branding Options",
    description:
      "Personalize your corporate gifts with custom logo engraving, laser etching, and branded packaging to strengthen your brand identity with every use.",
    icon: <Sparkles size={32} />,
    iconColor: "#FF6B6B",
  },
  {
    id: 3,
    number: "03",
    title: "Wide Range of Products",
    description:
      "Explore our collection of wireless speakers, USB-C hubs, laptop stands, power banks, and smart accessories that make perfect corporate gifts for clients and employees.",
    icon: <Package size={32} />,
    iconColor: "#FF9800",
  },
  {
    id: 4,
    number: "04",
    title: "Perfect for Modern Workspaces",
    description:
      "Our technology accessories are designed for professionals, featuring sleek designs, advanced functionality, and modern aesthetics that enhance any workspace.",
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
      "Sourced from leading manufacturers, our technology and accessories combine innovation, durability, and style for lasting impressions.",
    icon: <Award size={32} />,
    iconColor: "#2196F3",
  },
];

const TechnologyAndAccessories = () => {
  const categorySlug = "technology-and-accessories";
  const { page: pageParam } = useParams<{ page?: string }>();
  const navigate = useNavigate();
  const location = useLocation();

  const [currentPage, setCurrentPage] = useState(() => {
    const page = pageParam ? parseInt(pageParam, 10) : 1;
    return isNaN(page) || page < 1 ? 1 : page;
  });
  const perPage = 12;

  const { data: productsData, isLoading: productsLoading, error: productsError } = useProductsByCategory(categorySlug, currentPage, perPage);
  const productData = productsData || { products: [], total: 0, total_pages: 0, page: 1, per_page: 12 };
  console.log("products in technology and accessories", productData);

  const { data: categories } = useProductCategories();
  const filteredCategories = categories?.filter(category => category.slug === categorySlug);

  // Get category name for SEO
  const categoryName = useMemo(() => {
    const category = categories?.find(cat => cat.slug === categorySlug);
    return category?.name || "Technology & Accessories";
  }, [categories, categorySlug]);

  // SEO data - use pageParam directly to ensure it updates immediately on navigation
  const seo = useMemo(() => {
    const page = pageParam ? parseInt(pageParam, 10) : 1;
    const actualPage = isNaN(page) || page < 1 ? 1 : page;

    const title = actualPage === 1
      ? `${categoryName} | Baharnani`
      : `${categoryName} – Page ${actualPage} | Baharnani`;

    const baseDescription = "Shop premium tech gifts in Dubai – power banks, speakers, chargers & more. Ideal for corporate gifting.";
    const description = actualPage === 1
      ? baseDescription
      : `${baseDescription} Browse page ${actualPage} of our premium technology and accessories collection.`;

    return {
      title,
      description,
    };
  }, [categoryName, pageParam]);

  // Sync page from URL params
  useEffect(() => {
    const page = pageParam ? parseInt(pageParam, 10) : 1;
    if (!isNaN(page) && page >= 1) {
      setCurrentPage(page);
    } else if (pageParam) {
      navigate(`/product-category/${categorySlug}`, { replace: true });
    }
  }, [pageParam, navigate, categorySlug]);

  // Redirect /product-category/{slug}/page/1 to /product-category/{slug}
  useEffect(() => {
    if (location.pathname === `/product-category/${categorySlug}/page/1`) {
      navigate(`/product-category/${categorySlug}`, { replace: true });
    }
  }, [location.pathname, navigate, categorySlug]);

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);

    if (newPage === 1) {
      navigate(`/product-category/${categorySlug}`, { replace: true });
    } else {
      navigate(`/product-category/${categorySlug}/page/${newPage}`, { replace: true });
    }

    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div>
      {seo && <Seo {...seo} />}
      <CommonHero
        title="Premium Technology & Accessories for Corporate Gifting in Dubai"
        titlesuffix=""
        subtitle="Discover our exclusive collection of high-quality technology products and smart accessories, perfect for corporate gifts, client appreciation, and employee recognition programs."
        imageUrl={TechnologyAndAccessoriesImage}
        buttonLink="#technology-and-accessories"
        buttonText="Shop Technology & Accessories"
      />
      <OverView
        content={
          <>
            Looking for the perfect corporate gift that combines innovation,
            functionality, and style? Our premium collection of technology and
            accessories features everything from wireless charging pads and
            smart desk lamps to USB-C hubs and portable power banks. Each item
            is carefully selected to make a lasting impression on your clients,
            partners, and employees. Whether you need branded tech accessories
            for client appreciation or sophisticated gadgets for employee
            recognition, we've got you covered with the finest selection across
            Dubai and the UAE.
          </>
        }
      />
      <ProductGrid
        title="Explore Our Collection of Technology & Accessories"
        productType="custom"
        productData={productData}
        selectedCategory={categorySlug}
        onPageChange={handlePageChange}
        categories={filteredCategories || []}
        isLoading={productsLoading}
        error={productsError}
        id="technology-and-accessories"
      />
      <WhyChooseUs features={technologyAndAccessoriesFeatures} />
      <CallToAction
        title="Your Trusted Partner for Corporate Technology & Accessories in Dubai"
        subtitle="From custom-branded wireless chargers to smart office accessories, we deliver premium quality corporate gifts that strengthen relationships and elevate your brand presence."
        backgroundImageUrl={TechnologyAndAccessoriesImage}
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

export default TechnologyAndAccessories;
