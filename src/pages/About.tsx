import CommonHero from "../components/ui/CommonHero";
import WhoWeAre from "../components/WhoWeAre";
import VisionMission from "../components/VisionMission";
import { AnimatedTestimonials } from "../components/ui/AnimatedTestimonial";
import WhyChooseUs from "../components/WhyChooseUs";
import type { FeatureCard } from "../components/WhyChooseUs";
import CallToAction from "../components/CallToAction";
import {
  PackageSearch,
  Waypoints,
  Users,
  Leaf,
  TruckElectric,
  TicketCheck,
} from "lucide-react";
import { PiSealQuestionDuotone } from "react-icons/pi";
import ctaImage from "/assets/images/Hero and footer image/About-hero.webp";
import Seo from "../components/Seo";
import { Helmet } from "react-helmet-async";



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

const aboutFeatures: FeatureCard[] = [
  {
    id: 1,
    number: "01",
    title: "Comprehensive Gift Collection",
    description:
      "Wide range of corporate gifts from luxury items to eco-friendly solutions.",
    icon: <PackageSearch size={32} />,
    iconColor: "#FF6B6B",
  },
  {
    id: 2,
    number: "02",
    title: "Premium Quality Assurance",
    description:
      "Certified products and quality control ensuring excellence in every gift.",
    icon: <TicketCheck size={32} />,
    iconColor: "#4CAF50",
  },
  {
    id: 3,
    number: "03",
    title: "Full Customization",
    description:
      "Logo engraving, embossing, printing, and packaging tailored to your brand.",
    icon: <Users size={32} />,
    iconColor: "#67bed9",
  },
  {
    id: 4,
    number: "04",
    title: "Fast Delivery",
    description:
      "Efficient logistics ensuring timely delivery across Dubai, UAE, and beyond.",
    icon: <TruckElectric size={32} />,
    iconColor: "#FF9800",
  },
  {
    id: 5,
    number: "05",
    title: "Dubai-Based Excellence",
    description:
      "Strategically located in Dubai for quick access and reliable service.",
    icon: <Waypoints size={32} />,
    iconColor: "#8BC34A",
  },
  {
    id: 6,
    number: "06",
    title: "Eco-Friendly Options",
    description:
      "Sustainable gift choices promoting environmental responsibility.",
    icon: <Leaf size={32} />,
    iconColor: "#2196F3",
  },
];
const About = () => {
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
      <Seo title={"About Us | Leading Corporate Gift Suppliers in Dubai"} description={"Discover trusted corporate gift suppliers in Dubai. Premium corporate gifts, fast delivery, and custom branding across the UAE."} canonical="https://corporategiftsdubaii.ae/about-us" og_title="About Us | Leading Corporate Gift Suppliers in Dubai" og_desc="Discover trusted corporate gift suppliers in Dubai. Premium corporate gifts, fast delivery, and custom branding across the UAE." />
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>
      <CommonHero
        title="Your Trusted Partner for Premium Corporate Gifts"
        titlesuffix=""
        subtitle="Baharnani Advertising LLC is a Dubai-based gift supplier specializing in bulk orders, corporate gifts, event gifts, and fully customized solutions. We deliver quality, creativity, and excellence for all your gifting needs."
        imageUrl="/assets/images/Hero-images/About-hero.webp"
        buttonLink="/products"
        buttonText="Explore Our Products"
      />
      <WhoWeAre />
      <VisionMission />
      <WhyChooseUs
        features={aboutFeatures}
        title={
          <>
            Why{" "}
            <PiSealQuestionDuotone className="inline-block align-middle rotate-45" />{" "}
            Choose Baharnani?
          </>
        }
        subtitle="We don't just supply gifts — we create meaningful connections that strengthen relationships and elevate your brand presence."
      />
      <AnimatedTestimonials testimonials={testimonials} />
      <CallToAction
        title="Partner With a Corporate Gift Supplier That Delivers Excellence"
        subtitle="Whether you need customized promotional items, luxury corporate gifts, eco-friendly solutions, or festive hampers, Baharnani Advertising ensures creative designs, premium quality, and timely delivery across Dubai and the UAE."
        backgroundImageUrl={ctaImage}
        buttons={[
          {
            text: "Contact Us",
            className:
              "h-[50px] w-full sm:w-auto px-8 bg-textcolor! text-white! border! border-bg/30! font-tanker!",
            link: "/contact-us",
          },
          {
            text: "Explore Products",
            className:
              "h-[50px] w-full sm:w-auto px-8 bg-transparent! border! border-bg/30! text-bg! font-tanker!",
            link: "/products",
          },
        ]}
      />
    </div>
  );
};

export default About;
