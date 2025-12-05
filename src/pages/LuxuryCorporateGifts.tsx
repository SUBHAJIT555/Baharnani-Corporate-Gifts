import CommonHero from "../components/ui/CommonHero"
import LuxuryCorporateGiftsImage from "../assets/images/Products-hero-image/Luxury-corporate-gifts.webp"
import OverView from "../components/OverView"
import ProductGrid from "../components/ProductGrid"
// import { giftItems } from "../data/giftItems";
// import ProductCarousel from "../components/ui/ProductCarousel"
import WhyChooseUs, { type FeatureCard } from "../components/WhyChooseUs";
import { Award } from "lucide-react";
import { AnimatedTestimonials } from "../components/ui/AnimatedTestimonial";
import FAQ, { type FAQItem } from "../components/FAQ";
import { useProductCategories, useProductsByCategory } from "../hooks/useProducts";
import { useState, useEffect } from "react";
import { useParams, useNavigate, useLocation } from "react-router";

const testimonials = [
  {
    quote:
      "Baharnani Advertising has been our trusted corporate gift supplier for over 4 years. Their team, especially Amit, always ensures we get the perfect gifts for our Dubai and Abu Dhabi offices. Exceptional service and quality every time.",
    name: "Sarah Ahmed",
    designation: "Marketing Director",
    src: "/assets/images/Testimonials/Sarah-Ahmed.webp",
  },
  {
    quote:
      "Working with Vivek from Baharnani Advertising has been a game-changer for our corporate gifting needs across Sharjah and Dubai. His attention to detail and understanding of our requirements is outstanding.",
    name: "Mohammed Al Rashid",
    designation: "Business Development Manager",
    src: "/assets/images/Testimonials/Mohammed-Al-Rashid.webp",
  },
  {
    quote:
      "The team at Baharnani Advertising, particularly Amit, goes above and beyond to deliver premium corporate gifts. From Dubai to Abu Dhabi, they've helped us maintain excellent client relationships through thoughtful gifting.",
    name: "Fatima Hassan",
    designation: "HR Director",
    src: "/assets/images/Testimonials/Fatima-Hassan.webp",
  },
  // {
  //   quote:
  //     "Vivek  and the Baharnani team have consistently delivered exceptional corporate gifts for our events across Dubai, Abu Dhabi, and Sharjah. Their professionalism and product quality are unmatched in the UAE market.",
  //   name: "Rajesh Kumar",
  //   designation: "Operations Manager",
  //   src: "https://images.pexels.com/photos/5011647/pexels-photo-5011647.jpeg",
  // },
  // {
  //   quote:
  //     "Baharnani Advertising's corporate gift solutions have exceeded our expectations. Their Dubai-based team understands our needs perfectly, and the customization options they offer are simply outstanding.",
  //   name: "Layla Abdullah",
  //   designation: "Procurement Head",
  //   src: "https://images.pexels.com/photos/5011647/pexels-photo-5011647.jpeg",
  // },
];
// const testimonials = [
//   {
//     quote: "I have been working with Leading Network LLC for over 10 years and they have always been a great partner. They are reliable, transparent, and always deliver on time.",
//     name: "Fatima Hassan",
//     designation: "CEO",
//     src: "/assets/images/Testimonials/Fatima-Hassan.webp",
//   },
//   {
//     quote: "I have been working with Leading Network LLC for over 10 years and they have always been a great partner. They are reliable, transparent, and always deliver on time.",
//     name: "Mohammed Al Rashid",
//     designation: "CEO",
//     src: "/assets/images/Testimonials/Mohammed-Al-Rashid.webp",
//   },
//   {
//     quote: "I have been working with Leading Network LLC for over 10 years and they have always been a great partner. They are reliable, transparent, and always deliver on time.",
//     name: "John Doe",
//     designation: "CEO",
//     src: "https://images.pexels.com/photos/5011647/pexels-photo-5011647.jpeg",
//   },
//   {
//     quote: "I have been working with Leading Network LLC for over 10 years and they have always been a great partner. They are reliable, transparent, and always deliver on time.",
//     name: "John Doe",
//     designation: "CEO",
//     src: "https://images.pexels.com/photos/5011647/pexels-photo-5011647.jpeg",
//   },
//   {
//     quote: "I have been working with Leading Network LLC for over 10 years and they have always been a great partner. They are reliable, transparent, and always deliver on time.",
//     name: "John Doe",
//     designation: "CEO",
//     src: "https://images.pexels.com/photos/5011647/pexels-photo-5011647.jpeg",
//   },
// ];
const luxuryCorporateGiftsFeatures: FeatureCard[] = [
  {
    id: 1,
    number: "01",
    title: "Explore Our Luxury Corporate Gift Categories",
    description: "Discover our extensive collection of luxury corporate gifts across multiple categories, from premium tech accessories to elegant executive gifts, all designed to make a lasting impression on your clients and employees.",
    icon: <Award size={32} />,
    iconColor: "#4CAF50",
  },
  {
    id: 2,
    number: "02",
    title: "Best Luxury Corporate Gifts Dubai Online",
    description: "Shop the finest selection of luxury corporate gifts available online in Dubai. Our curated collection features premium brands and exclusive items that reflect your company's commitment to excellence and quality.",
    icon: <Award size={32} />,
    iconColor: "#4CAF50",
  },
  {
    id: 3,
    number: "03",
    title: "Corporate Gift Ideas for Every Occasion",
    description: "From milestone celebrations to client appreciation events, we provide tailored corporate gift solutions for every business occasion. Our diverse range ensures you'll find the perfect gift to strengthen professional relationships.",
    icon: <Award size={32} />,
    iconColor: "#4CAF50",
  },
  {
    id: 4,
    number: "04",
    title: "Luxury Brands that Are Cheaper in Dubai",
    description: "Take advantage of Dubai's competitive luxury market with our selection of premium international brands offered at exceptional value. Get authentic luxury corporate gifts at prices that maximize your gifting budget.",
    icon: <Award size={32} />,
    iconColor: "#4CAF50",
  },
];
const luxuryCorporateGiftsWhy: FeatureCard[] = [
  {
    id: 1,
    number: "01",
    title: "Build Stronger Client Relationships",
    description: "Show your clients that you value their business with high-end gifts that demonstrate your commitment to excellence and strengthen professional partnerships for long-term success.",
    icon: <Award size={32} />,
    iconColor: "#4CAF50",
  },
  {
    id: 2,
    number: "02",
    title: "Memorable & Customized",
    description: "Stand out by offering unique customized corporate gifts that speak to your company's values and create lasting impressions that recipients will remember and appreciate.",
    icon: <Award size={32} />,
    iconColor: "#4CAF50",
  },
  {
    id: 3,
    number: "03",
    title: "Corporate Gifting Solutions Tailored to Your Needs",
    description: "Choose from a variety of gifts, from luxury gift hampers to branded items that reflect your business identity and meet your specific corporate gifting requirements.",
    icon: <Award size={32} />,
    iconColor: "#4CAF50",
  },
  {
    id: 4,
    number: "04",
    title: "Reliable Delivery Across Dubai",
    description: "Fast and efficient delivery of all your luxury corporate gifts across Dubai, ensuring your gifts arrive on time and in perfect condition for every important occasion.",
    icon: <Award size={32} />,
    iconColor: "#4CAF50",
  },
  {
    id: 5,
    number: "05",
    title: "Customization Options",
    description: "We offer a wide range of customized corporate gifts that fit your brand and message perfectly, allowing you to create personalized experiences that align with your corporate identity.",
    icon: <Award size={32} />,
    iconColor: "#4CAF50",
  },
  {
    id: 6,
    number: "06",
    title: "Competitive Prices for Luxury Gifts in Dubai",
    description: "We offer top-quality products at reasonable rates, including luxury gifts that are cheaper in Dubai compared to other markets, maximizing your gifting budget without compromising on quality.",
    icon: <Award size={32} />,
    iconColor: "#4CAF50",
  },
];
const faqItems: FAQItem[] = [
  {
    id: 1,
    question: "What are the best luxury corporate gifts for clients in Dubai?",
    answer: "We offer a wide range of luxury corporate gifts that include everything from customized hampers, exclusive tech gifts, to branded leather items.",
  },
  {
    id: 2,
    question: "How can I get customized corporate gifts in Dubai?",
    answer: "We offer personalization options for all gifts. Add your company's logo, message, or choose from a variety of premium branding services.",
  },
  {
    id: 3,
    question: "What is the best time to order corporate gifts in Dubai?",
    answer: "To ensure timely delivery, we recommend placing orders at least 2 weeks in advance, especially for customized luxury corporate gifts.",
  },
  {
    id: 4,
    question: "Do you offer luxury gift hampers in Dubai?",
    answer: "Yes, we specialize in luxury gift hampers, beautifully curated to make a lasting impression.",
  },
  {
    id: 5,
    question: "Are your corporate gifting companies in Dubai reliable?",
    answer: "Absolutely! We have years of experience and a reputation for providing high-quality gifts and on-time delivery for businesses across Dubai.",
  },
];
const LuxuryCorporateGifts = () => {
  const categorySlug = "luxury-corporate-gifts-dubai";
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
  console.log("products in luxury corporate gifts", productData);
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
        title="Luxury Corporate Gifts in Dubai - Make Your Business Relationships Stronger"
        titlesuffix=""
        subtitle="Explore the Best Selection of Customized Corporate Gifts for Clients & Employees in Dubai"
        imageUrl={LuxuryCorporateGiftsImage}
        buttonLink="#luxury-corporate-gifts"
        buttonText="Shop Luxury Corporate Gifts"
      />
      <OverView
        content={
          <>
            Luxury Corporate Gifts for Every Occasion: Whether you're
            celebrating a company milestone or rewarding your top clients, our
            selection of luxury corporate gifts ensures your brand stands out
            with sophistication and quality. We offer customized corporate
            gifts, luxury gift hampers, and more, delivered across Dubai.
          </>
        }
      />
      <ProductGrid
        title="Explore Our Collection of Gift Sets"
        productType="custom"
        productData={productData}
        selectedCategory={categorySlug}
        onPageChange={handlePageChange}
        categories={filteredCategories || []}
        isLoading={productsLoading}
        error={productsError}
        id="gift-set"
      />
      {/* Top Corporate Gifts for Clients & Employees in Dubai */}
      {/* <ProductCarousel
        products={giftItems}
        heading="Top Corporate Gifts for Clients & Employees in Dubai"
        description=""
        paginationId="luxury-corporate-gifts-carousel-pagination"
        autoplay={true}
        autoplayDelay={4000}
      /> */}
      {/* Customized Luxury Corporate Gifts */}
      {/* <ProductCarousel
        products={giftItems}
        heading="Customized Luxury Corporate Gifts"
        description="<strong>Personalized Gifts:</strong> Get your corporate gifts personalized with your company’s logo or a special message for that extra touch.<br />
        <strong>Gift Hampers & Luxury Packaging:</strong> Our luxury gift hampers come beautifully packaged, making an impact from the moment they’re received."
        paginationId="luxury-corporate-gifts-carousel-pagination"
        autoplay={true}
        autoplayDelay={4000}
      /> */}
      {/* Premium Gift Ideas for Clients & Partners */}
      {/* <ProductCarousel
        products={giftItems}
        heading="Premium Gift Ideas for Clients & Partners"
        description="<strong>Corporate Gift Ideas:</strong> Whether it's a high-end watch, leather accessories, or customized electronics, we offer a wide selection for every business need."
        paginationId="luxury-corporate-gifts-carousel-pagination"
        autoplay={true}
        autoplayDelay={4000}
      /> */}
      {/* why choose us section */}
      <WhyChooseUs
        title="Featured Corporate Gift Categories"
        features={luxuryCorporateGiftsFeatures}
      />
      {/* testimonial section */}
      <AnimatedTestimonials testimonials={testimonials} />

      {/* why choose us section 2  */}
      <WhyChooseUs
        title="Why Choose Our Luxury Corporate Gifts in Dubai?"
        features={luxuryCorporateGiftsWhy}
      />
      {/* faq section */}
      <FAQ
        title="Frequently Asked Questions About Corporate Gifts"
        subtitle="Get answers to common questions about our corporate gifts"
        faqData={faqItems}
      />
    </div>
  );
}

export default LuxuryCorporateGifts
