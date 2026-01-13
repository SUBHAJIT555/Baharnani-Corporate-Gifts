import CommonHero from "../components/ui/CommonHero";
import CategoryIntro from "../components/CategoryIntro";
import ProductGrid from "../components/ProductGrid";
import WhyChooseUs from "../components/WhyChooseUs";
import type { FeatureCard } from "../components/WhyChooseUs";
import { Coffee, Award, Package, Users, Gift, Sparkles } from "lucide-react";
import CallToAction from "../components/CallToAction";
import Seo from "../components/Seo";
import { Helmet } from "react-helmet-async";

// images
import EatingDrinkingImage from "../assets/images/Products-hero-image/Eating-&-drinking.webp";
import { useProductCategories, useProductsByCategory } from "../hooks/useProducts";
import { useState, useEffect, useMemo } from "react";
import { useParams, useNavigate, useLocation } from "react-router";

// Filter eating and drinking items from giftItems
// const eatingAndDrinkingItems = giftItems.filter(
//   (item) => item.category === "Eating and drinking"
// );

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
  const categorySlug = "eating-and-drinking";
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
  console.log("products in eating and drinking", productData);
  const { data: categories } = useProductCategories();
  const filteredCategories = categories?.filter(category => category.slug === categorySlug);

  // Get category name for SEO
  const categoryName = useMemo(() => {
    const category = categories?.find(cat => cat.slug === categorySlug);
    return category?.name || "Eating & Drinking";
  }, [categories, categorySlug]);

  // SEO data - use pageParam directly to ensure it updates immediately on navigation
  const seo = useMemo(() => {
    const page = pageParam ? parseInt(pageParam, 10) : 1;
    const actualPage = isNaN(page) || page < 1 ? 1 : page;

    const title = actualPage === 1
      ? `${categoryName} | Baharnani`
      : `${categoryName} – Page ${actualPage} | Baharnani`;

    const baseDescription = "Corporate drinkware & lunchware gifts in Dubai. Branded bottles, mugs, & tumblers for business gifting.";
    const description = actualPage === 1
      ? baseDescription
      : `${baseDescription} Browse page ${actualPage} of our premium eating and drinking products collection.`;

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

  const breadcrumbStructuredData = {
    "@context": "https://schema.org/",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Homepage",
        "item": "https://corporategiftsdubaii.ae/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Products",
        "item": "https://corporategiftsdubaii.ae/products"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Eating and Drinking",
        "item": "https://corporategiftsdubaii.ae/product-category/eating-and-drinking"
      }
    ]
  };

  return (
    <div>
      {seo && <Seo {...seo} />}
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbStructuredData)}
        </script>
      </Helmet>
      <CommonHero
        title="Premium Eating & Drinking Products for Corporate Gifting in Dubai"
        titlesuffix=""
        subtitle="Discover our exclusive collection of high-quality food and beverage products, perfect for corporate gifts, client appreciation, and employee recognition programs."
        imageUrl={EatingDrinkingImage}
        buttonLink="#eating-drinking"
        buttonText="Shop Eating & Drinking"
      />
      <CategoryIntro
        imageUrl={EatingDrinkingImage}
        imageAlt="Eating and drinking products collection preview"
        content="Looking for the perfect corporate gift that combines taste, quality, and elegance? Our premium collection of eating and drinking products features everything from gourmet coffee gift sets and luxury tea collections to artisan chocolate boxes and executive wine accessories. Each item is carefully selected to make a lasting impression on your clients, partners, and employees. Whether you need branded coffee sets for client appreciation or sophisticated beverage accessories for corporate events, we've got you covered with the finest selection across Dubai and the UAE."
      />
      <ProductGrid
        title="Explore Our Collection of Eating & Drinking Products"
        productType="custom"
        productData={productData}
        onPageChange={handlePageChange}
        categories={filteredCategories || []}
        isLoading={productsLoading}
        error={productsError}
        selectedCategory={categorySlug}
        id="eating-drinking"
      />
      <WhyChooseUs features={eatingAndDrinkingFeatures} />
      <CallToAction
        title="Your Trusted Partner for Corporate Food & Beverage Gifts in Dubai"
        subtitle="From custom-branded coffee sets to luxury tea collections, we deliver premium quality eating and drinking products that strengthen relationships and elevate your brand presence."
        backgroundImageUrl={EatingDrinkingImage}
        buttons={[
          {
            text: "Contact Our Team",
            className:
              "h-[50px] w-full sm:w-auto px-8 bg-textcolor! text-white! font-tanker! border! border-white!",
            link: "/contact-us",
          },
          {
            text: "Explore Product Categories",
            className:
              "h-[50px] w-full sm:w-auto px-8 bg-transparent! border! border-white! text-white! font-tanker!",
            link: "/products",
          },
        ]}
      />
    </div>
  );
};

export default EatingAndDrinking;
