import { lazy } from "react";
import { Helmet } from "react-helmet-async";
import HeroSection from "../components/Hero";
import HomeAbout from "../components/HomeAbout";
import Stats from "../components/Stats";
import ProductGridHome from "../components/ProductGridHome";
import WhyChooseUs from "../components/WhyChooseUs";
import type { FeatureCard } from "../components/WhyChooseUs";
import FAQ from "../components/FAQ";
import type { FAQItem } from "../components/FAQ";
import CallToAction from "../components/CallToAction";
import { TicketCheck, Users, Leaf, Clock } from "lucide-react";
import { BiWorld } from "react-icons/bi";

import { PackageSearch } from "lucide-react";
import { PiSealQuestionDuotone, PiGiftDuotone, PiHandshakeDuotone } from "react-icons/pi";
import FeatureBrand from "../components/FeatureBrand";
import TopSaver from "../components/TopSaver";
import BestSelling from "../components/BestSelling";
import backgroundImage from "../assets/images/Products-hero-image/Luxury-corporate-gifts.webp";
const Seo = lazy(() => import("../components/Seo"));

const homeFaqData: FAQItem[] = [
  {
    id: 1,
    question: "What are corporate gifts?",
    answer:
      "Corporate gifts are branded items or tokens given by companies to clients, employees, or partners to express appreciation, build loyalty, and enhance business relationships.",
  },
  {
    id: 2,
    question: "Why are corporate gifts important?",
    answer:
      "Corporate gifts help strengthen partnerships, improve brand visibility, and create a lasting emotional connection with clients and employees.",
  },
  {
    id: 3,
    question:
      "What types of corporate gifts does Baharnani Advertising offer in Dubai?",
    answer:
      "We offer a diverse collection of customized, luxury, promotional, and eco-friendly corporate gifts, including mugs, pens, hampers, gadgets, chocolates, and branded accessories.",
  },
  {
    id: 4,
    question:
      "Can Baharnani Advertising customize corporate gifts with our logo?",
    answer:
      "Yes, we provide full branding and personalization options such as logo engraving, embossing, printing, and packaging customization for all types of gifts.",
  },
  {
    id: 5,
    question:
      "How do I choose the right corporate gift from Baharnani Advertising?",
    answer:
      "Our team will help you select gifts based on your budget, audience, and purpose, ensuring your gift aligns perfectly with your brand image.",
  },
  {
    id: 6,
    question:
      "Are eco-friendly corporate gifts available at Baharnani Advertising?",
    answer:
      "Absolutely. We have a dedicated collection of sustainable gifts like reusable bottles, bamboo kits, jute bags, and organic hampers to promote green gifting.",
  },
  {
    id: 7,
    question:
      "Why should I choose Baharnani Advertising for corporate gifts in Dubai?",
    answer:
      "We combine creativity, premium quality, fast delivery, and customization expertise, making us one of the most trusted corporate gift suppliers in Dubai and UAE.",
  },
  {
    id: 8,
    question: "Do you offer corporate chocolate gifts and festive hampers?",
    answer:
      "Yes, we design corporate chocolate gifts, Festive gift boxes, and festive hampers that can be customized with your logo and brand colors.",
  },
];

const homeFeatures: FeatureCard[] = [
  {
    id: 1,
    number: "01",
    title: "Customized Corporate Gifts",
    description:
      "Engraved pens, mugs, USB drives, office stationery — personalized gifts that make lasting impressions.",
    icon: <PackageSearch size={32} />,
    iconColor: "#FF6B6B",
  },
  {
    id: 2,
    number: "02",
    title: "Luxury & Premium Gifts",
    description:
      "Watches, leather accessories, executive hampers — sophisticated gifts for distinguished clients.",
    icon: <TicketCheck size={32} />,
    iconColor: "#4CAF50",
  },
  {
    id: 3,
    number: "03",
    title: "Eco-Friendly Gifts",
    description:
      "Bamboo sets, reusable bottles, jute bags — sustainable choices for environmentally conscious businesses.",
    icon: <Leaf size={32} />,
    iconColor: "#8BC34A",
  },
  {
    id: 4,
    number: "04",
    title: "Branded Promotional Gifts",
    description:
      "T-shirts, power banks, notebooks — effective marketing tools with your brand identity.",
    icon: <Users size={32} />,
    iconColor: "#FF9800",
  },
  {
    id: 5,
    number: "05",
    title: "Festive Gifts",
    description:
      "Premium corporate gifts, smart hampers, New Year giveaways — celebrate special occasions in style.",
    icon: <BiWorld size={32} />,
    iconColor: "#67bed9",
  },
  {
    id: 6,
    number: "06",
    title: "On-Time Delivery",
    description:
      "Efficient logistics and custom documentation for smooth import/export operations.",
    icon: <Clock size={32} />,
    iconColor: "#2196F3",
  },
  {
    id: 7,
    number: "07",
    title: "Tailored Branding & Personalization",
    description:
      "Logo printing, laser engraving, embroidery, and custom packaging to represent your business professionally.",
    icon: <Clock size={32} />,
    iconColor: "#2196F3",
  },
  {
    id: 8,
    number: "08",
    title: "Fast Delivery",
    description:
      "From Dubai to Abu Dhabi, Sharjah, we guarantee fast delivery and  support from concept to completion.",
    icon: <Clock size={32} />,
    iconColor: "#2196F3",
  },
];

const Home = () => {
  const seo = {
    title: "Corporate Gift Suppliers in UAE- Baharnani Corporate Gifts",
    description: "Explore luxury gift sets in Dubai with perfumes, skincare, gourmet treats & accessories—perfect for customized corporate gifts Dubai.",
    og_title: "Corporate Gift Suppliers in UAE- Baharnani Corporate Gifts",
    og_desc: "Explore luxury gift sets in Dubai with perfumes, skincare, gourmet treats & accessories—perfect for customized corporate gifts Dubai.",
    canonical: "https://corporategiftsdubaii.ae"
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Baharnani Corporate Gifts Dubai",
    "image": "https://corporategiftsdubaii.ae/ui/assets/logo-B4KFUfAZ.svg",
    "@id": "https://corporategiftsdubaii.ae/#localbusiness",
    "url": "https://corporategiftsdubaii.ae/",
    "telephone": "+971551061045",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Baharnani Advertising L.L.C, Al Quoz – Al Quoz 3 – Dubai",
      "addressLocality": "Dubai",
      "postalCode": "49757",
      "addressCountry": "AE"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 25.162655,
      "longitude": 55.2344375
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      "opens": "09:00",
      "closes": "18:30"
    },
    "sameAs": [
      "https://www.instagram.com/baharnaniadv/",
      "https://www.linkedin.com/company/baharnaniadvertisingdubai/"
    ]
  };

  return (
    <div>
      {seo && <Seo {...seo} />}
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>
      <HeroSection />
      <HomeAbout />
      <Stats />
      <ProductGridHome />
      <FeatureBrand />
      <TopSaver />
      <BestSelling />
      <WhyChooseUs
        features={homeFeatures}
        title={
          <>
            Why
            <PiSealQuestionDuotone className="inline-block align-middle rotate-45" />{" "}
            choose Baharnani Advertising <br /> as your trusted
            <PiHandshakeDuotone className="inline-block align-middle rotate-45" />{" "}
            corporate gifts supplier?
          </>
        }
        subtitle="With years of expertise, we have become one of the most reliable names among corporate gift suppliers in UAE, especially in Dubai, offering creative concepts and superior-quality products that represent your brand’s identity."
      />
      <FAQ
        faqData={homeFaqData}
        title={
          <>
            Frequently{" "}
            <PiSealQuestionDuotone className="inline-block align-middle" />{" "}
            Asked Questions <br /> About{" "}
            <PiGiftDuotone className="inline-block align-middle rotate-45" />{" "}
            Corporate Gifts in Dubai & UAE
          </>
        }
        subtitle="Get answers to common questions about our products and services"
      />
      <CallToAction
        title="Ready to Elevate Your Corporate Gifting?"
        subtitle={
          <> Partner with Baharnani Advertising, one of the leading <span className='font-semibold font-switzer text-3xl'>suppliers of corporate gifts</span> in the UAE. From premium gift sets to custom branding solutions, we help you create lasting impressions that strengthen business relationships.</>
        }

        backgroundImageUrl={backgroundImage}
        buttons={[
          {
            text: "Get Quote",
            className:
              "h-[50px] w-full sm:w-auto px-8 bg-textcolor! text-white! border! border-bg/30! font-tanker!",
            link: "/contact-us",
          },
          {
            text: "View Products",
            className:
              "h-[50px] w-full sm:w-auto px-8 bg-transparent! border! border-bg/30! text-bg! font-tanker!",
            link: "/products",
          },
        ]}
      />
    </div>
  );
};

export default Home;
