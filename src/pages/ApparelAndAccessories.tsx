import CommonHero from "../components/ui/CommonHero";
import ProductGrid from "../components/ProductGrid";
import WhyChooseUs from "../components/WhyChooseUs";
import type { FeatureCard } from "../components/WhyChooseUs";
import { Package, Award, Users, Shirt, Sparkles } from "lucide-react";
import CallToAction from "../components/CallToAction";
import Seo from "../components/Seo";
import { Helmet } from "react-helmet-async";
import CategoryIntro from "../components/CategoryIntro";
// import { giftItems } from "../data/giftItems";

// images
import ApparelAndAccessoriesImage from "../assets/images/Products-hero-image/Apparel-&-accessories.webp";
import { useProductCategories, useProductsByCategory } from "../hooks/useProducts";
import { useState, useEffect, useMemo } from "react";
import { useParams, useNavigate, useLocation } from "react-router";

// Filter apparel and accessories items from giftItems
// const apparelAndAccessoriesItems = giftItems.filter(
//   (item) => item.category === "Apparel and accessories"
// );

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
  const categorySlug = "apparel-and-accessories";
  const { page: pageParam } = useParams<{ page?: string }>();
  const navigate = useNavigate();
  const location = useLocation();
  const fullIntroText =
    "Looking for the perfect corporate gift that combines style, quality, and professionalism? Our premium collection of apparel and accessories features everything from custom-embroidered polo shirts and elegant silk ties to luxury watches and leather accessories. Each item is carefully selected to make a lasting impression on your clients, partners, and employees. Whether you need branded corporate apparel for team events or sophisticated accessories for client appreciation, we've got you covered with the finest selection across Dubai and the UAE.";

  const [currentPage, setCurrentPage] = useState(() => {
    const page = pageParam ? parseInt(pageParam, 10) : 1;
    return isNaN(page) || page < 1 ? 1 : page;
  });
  const perPage = 12;
  const { data: categories } = useProductCategories();
  const { data: productsData, isLoading: productsLoading, error: productsError } = useProductsByCategory(categorySlug, currentPage, perPage);

  const filteredCategories = categories?.filter(category => category.slug === categorySlug);

  // Get category name for SEO
  const categoryName = useMemo(() => {
    const category = categories?.find(cat => cat.slug === categorySlug);
    return category?.name || "Apparel & Accessories";
  }, [categories, categorySlug]);

  // SEO data - use pageParam directly to ensure it updates immediately on navigation
  const seo = useMemo(() => {
    const page = pageParam ? parseInt(pageParam, 10) : 1;
    const actualPage = isNaN(page) || page < 1 ? 1 : page;

    const title = actualPage === 1
      ? `${categoryName} | Baharnani`
      : `${categoryName} – Page ${actualPage} | Baharnani`;

    const baseDescription = "Discover stylish corporate apparel & accessories in Dubai. Premium shirts, hats & uniforms for branding your business.";
    const description = actualPage === 1
      ? baseDescription
      : `${baseDescription} Browse page ${actualPage} of our premium apparel and accessories collection.`;

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
      // Invalid page number, redirect to base category page
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

    // Update URL based on page number
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
        "name": "Apparel and Accessories",
        "item": "https://corporategiftsdubaii.ae/product-category/apparel-and-accessories"
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
        title="Premium Apparel & Accessories for Corporate Gifting in Dubai"
        titlesuffix=""
        subtitle="Discover our exclusive collection of high-quality apparel and luxury accessories, perfect for corporate gifts, client appreciation, and employee recognition programs."
        imageUrl={ApparelAndAccessoriesImage}
        buttonLink="#apparel-accessories"
        buttonText="Shop Apparel & Accessories"
      />
      <CategoryIntro
        imageUrl={ApparelAndAccessoriesImage}
        imageAlt="Apparel and accessories collection preview"
        content={fullIntroText}
      />
      <ProductGrid
        title="Explore Our Collection of Apparel & Accessories"
        productType="custom"
        productData={productsData || { products: [], total: 0, total_pages: 0, page: 1, per_page: 12 }}
        onPageChange={handlePageChange}
        categories={filteredCategories || []}
        isLoading={productsLoading}
        error={productsError}
        selectedCategory={categorySlug}
        id="apparel-accessories"
      />
      <WhyChooseUs features={apparelAndAccessoriesFeatures} />
      <CallToAction
        title="Your Trusted Partner for Corporate Apparel & Accessories in Dubai"
        subtitle="From custom-branded apparel to luxury accessories, we deliver premium quality corporate gifts that strengthen relationships and elevate your brand presence."
        backgroundImageUrl={ApparelAndAccessoriesImage}
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
