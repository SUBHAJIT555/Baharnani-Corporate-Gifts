import CommonHero from "../components/ui/CommonHero";
import OverView from "../components/OverView";
import ProductGrid from "../components/ProductGrid";
import WhyChooseUs from "../components/WhyChooseUs";
import type { FeatureCard } from "../components/WhyChooseUs";
import { Dumbbell, Trophy, Activity, Target, Heart, Gift } from "lucide-react";
import CallToAction from "../components/CallToAction";

// images
import SportsAndRecreationImage from "../assets/images/Products-hero-image/Sports-&-recreation.webp";
import { useProductCategories, useProductsByCategory } from "../hooks/useProducts";
import { useState, useEffect } from "react";
import { useParams, useNavigate, useLocation } from "react-router";



const sportsAndRecreationFeatures: FeatureCard[] = [
  {
    id: 1,
    number: "01",
    title: "Premium Quality Sports Equipment",
    description:
      "From fitness trackers to yoga mats, we offer high-quality sports and recreation products perfect for corporate wellness programs and employee recognition.",
    icon: <Dumbbell size={32} />,
    iconColor: "#4CAF50",
  },
  {
    id: 2,
    number: "02",
    title: "Custom Branding Options",
    description:
      "Personalize your corporate gifts with custom logo printing, embroidery, and branded packaging to strengthen your brand identity with every activity.",
    icon: <Trophy size={32} />,
    iconColor: "#FF6B6B",
  },
  {
    id: 3,
    number: "03",
    title: "Wide Range of Products",
    description:
      "Explore our collection of fitness trackers, yoga mats, golf sets, tennis rackets, gym bags, and resistance bands that make perfect corporate gifts.",
    icon: <Activity size={32} />,
    iconColor: "#FF9800",
  },
  {
    id: 4,
    number: "04",
    title: "Perfect for Wellness Programs",
    description:
      "Whether it's employee wellness initiatives, corporate sports events, or team building activities, our sports products suit every occasion.",
    icon: <Heart size={32} />,
    iconColor: "#8BC34A",
  },
  {
    id: 5,
    number: "05",
    title: "Flexible Ordering",
    description:
      "From individual gifts to bulk orders, we accommodate orders of all sizes with reliable delivery across Dubai and the UAE.",
    icon: <Target size={32} />,
    iconColor: "#3F3F9F",
  },
  {
    id: 6,
    number: "06",
    title: "Trusted Quality",
    description:
      "Sourced from premium suppliers, our sports and recreation products combine quality, durability, and elegant presentation for lasting impressions.",
    icon: <Gift size={32} />,
    iconColor: "#2196F3",
  },
];

const SportsAndRecreation = () => {
  const categorySlug = "sports-and-recreation";
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
  console.log("products in sports and recreation", productData);
  const { data: categories } = useProductCategories();
  const filteredCategories = categories?.filter(category => category.slug === categorySlug);

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
      <CommonHero
        title="Premium Sports & Recreation Products for Corporate Gifting in Dubai"
        titlesuffix=""
        subtitle="Discover our exclusive collection of high-quality sports equipment and recreational items, perfect for corporate gifts, employee wellness programs, and team building activities."
        imageUrl={SportsAndRecreationImage}
        buttonLink="#sports-recreation"
        buttonText="Shop Sports & Recreation"
      />
      <OverView
        content={
          <>
            Looking for the perfect corporate gift that promotes health,
            wellness, and active living? Our premium collection of sports and
            recreation products features everything from fitness trackers and
            yoga mats to golf sets and tennis rackets. Each item is carefully
            selected to encourage an active lifestyle while making a lasting
            impression on your clients, partners, and employees. Whether you
            need branded fitness equipment for wellness programs or
            sophisticated sports accessories for corporate events, we've got you
            covered with the finest selection across Dubai and the UAE.
          </>
        }
      />
      <ProductGrid
        title="Explore Our Collection of Sports & Recreation Products"
        productType="custom"
        productData={productData}
        onPageChange={handlePageChange}
        selectedCategory={categorySlug}
        categories={filteredCategories || []}
        isLoading={productsLoading}
        error={productsError}
        id="sports-recreation"
      />
      <WhyChooseUs features={sportsAndRecreationFeatures} />
      <CallToAction
        title="Your Trusted Partner for Corporate Sports & Recreation Gifts in Dubai"
        subtitle="From custom-branded fitness equipment to premium sports accessories, we deliver high-quality products that promote wellness, strengthen relationships, and elevate your brand presence."
        backgroundImageUrl={SportsAndRecreationImage}
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

export default SportsAndRecreation;
