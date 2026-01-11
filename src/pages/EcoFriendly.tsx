import CommonHero from "../components/ui/CommonHero";
import CategoryIntro from "../components/CategoryIntro";
import ProductGrid from "../components/ProductGrid";
import WhyChooseUs from "../components/WhyChooseUs";
import type { FeatureCard } from "../components/WhyChooseUs";
import { Leaf, Award, Package, Users, Globe } from "lucide-react";
import CallToAction from "../components/CallToAction";
import Seo from "../components/Seo";
import { Helmet } from "react-helmet-async";

// images
import EcoFriendlyImage from "../assets/images/Products-hero-image/Eco-friendly.webp";
import { useState, useEffect, useMemo } from "react";
import { useProductCategories, useProductsByCategory } from "../hooks/useProducts";
import { useParams, useNavigate, useLocation } from "react-router";


const ecoFriendlyFeatures: FeatureCard[] = [
  {
    id: 1,
    number: "01",
    title: "Sustainable Materials",
    description:
      "From bamboo desk organizers to recycled paper notebooks, we offer eco-friendly products made from sustainable and renewable materials.",
    icon: <Leaf size={32} />,
    iconColor: "#4CAF50",
  },
  {
    id: 2,
    number: "02",
    title: "Custom Branding Options",
    description:
      "Personalize your eco-friendly corporate gifts with custom printing, logo engraving, and sustainable packaging to strengthen your brand identity.",
    icon: <Award size={32} />,
    iconColor: "#FF6B6B",
  },
  {
    id: 3,
    number: "03",
    title: "Wide Range of Products",
    description:
      "Explore our collection of bamboo products, reusable items, solar-powered accessories, and organic materials that make perfect sustainable corporate gifts.",
    icon: <Package size={32} />,
    iconColor: "#FF9800",
  },
  {
    id: 4,
    number: "04",
    title: "Environmentally Conscious",
    description:
      "Demonstrate your commitment to sustainability with gifts that align with your corporate values and green initiatives.",
    icon: <Leaf size={32} />,
    iconColor: "#8BC34A",
  },
  {
    id: 5,
    number: "05",
    title: "Perfect for Every Occasion",
    description:
      "Whether it's client appreciation, employee recognition, or corporate events, our eco-friendly products suit every gifting occasion.",
    icon: <Users size={32} />,
    iconColor: "#3F3F9F",
  },
  {
    id: 6,
    number: "06",
    title: "Flexible Ordering",
    description:
      "From individual gifts to bulk orders, we accommodate orders of all sizes with reliable delivery across Dubai and the UAE.",
    icon: <Globe size={32} />,
    iconColor: "#2196F3",
  },
];

const EcoFriendly = () => {
  const categorySlug = "eco-friendly";
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
  console.log("products in eco-friendly", productData);
  const { data: categories } = useProductCategories();
  const filteredCategories = categories?.filter(category => category.slug === categorySlug);

  // Get category name for SEO
  // const categoryName = useMemo(() => {
  //   const category = categories?.find(cat => cat.slug === categorySlug);
  //   return category?.name || "Eco-Friendly";
  // }, [categories, categorySlug]);

  // SEO data - use pageParam directly to ensure it updates immediately on navigation
  const seo = useMemo(() => {
    const page = pageParam ? parseInt(pageParam, 10) : 1;
    const actualPage = isNaN(page) || page < 1 ? 1 : page;

    const title = actualPage === 1
      ? `Eco Friendly Corporate Gifts Dubai | Baharnani`
      : `Eco Friendly Corporate Gifts Dubai – Page ${actualPage} | Baharnani`;

    const baseDescription = "Promote sustainability with eco-friendly corporate gifts in Dubai, including bamboo, cork, and recycled products.";
    const description = actualPage === 1
      ? baseDescription
      : `${baseDescription} Browse page ${actualPage} of our premium eco-friendly products collection.`;

    return {
      title,
      description,
    };
  }, [pageParam]);

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
        "name": "Eco-friendly",
        "item": "https://corporategiftsdubaii.ae/product-category/eco-friendly"
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
        title="Eco-Friendly Corporate Gifts for Sustainable Branding in Dubai"
        titlesuffix=""
        subtitle="Discover our exclusive collection of sustainable and environmentally conscious corporate gifts, perfect for showcasing your commitment to green values while strengthening client and employee relationships."
        imageUrl={EcoFriendlyImage}
        buttonLink="#eco-friendly"
        buttonText="Shop Eco-Friendly Gifts"
      />
      <CategoryIntro
        imageUrl={EcoFriendlyImage}
        imageAlt="Eco-friendly products collection preview"
        content="Looking for corporate gifts that align with your sustainability values? Our premium collection of eco-friendly corporate gifts Dubai features everything from bamboo desk organizers and recycled paper notebooks to solar-powered chargers and reusable bamboo cutlery sets. Each item is carefully selected to demonstrate your commitment to environmental responsibility while making a lasting impression on your clients, partners, and employees. Whether you need sustainable office accessories for client appreciation or eco-conscious products for corporate events, we've got you covered with the finest selection across Dubai and the UAE."
      />
      <ProductGrid
        title="Explore Our Collection of Eco-Friendly Corporate Gifts"
        productType="custom"
        productData={productData}
        selectedCategory={categorySlug}
        onPageChange={handlePageChange}
        categories={filteredCategories || []}
        isLoading={productsLoading}
        error={productsError}
        id="eco-friendly"
      />
      <WhyChooseUs features={ecoFriendlyFeatures} />
      <CallToAction
        title="Your Trusted Partner for Eco-Friendly Corporate Gifts in Dubai"
        subtitle="From sustainable bamboo products to reusable accessories, we deliver premium quality eco-friendly corporate gifts that strengthen relationships, elevate your brand presence, and demonstrate your commitment to environmental responsibility."
        backgroundImageUrl={EcoFriendlyImage}
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

export default EcoFriendly;
