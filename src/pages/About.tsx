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

const testimonials = [
  {
    quote:
      "I have been working with Baharnani Advertising for over 5 years and they have always been a great partner. They are reliable, creative, and always deliver exceptional corporate gifts on time.",
    name: "Sarah Ahmed",
    designation: "Marketing Director",
    src: "https://images.pexels.com/photos/5011647/pexels-photo-5011647.jpeg",
  },
  {
    quote:
      "Baharnani Advertising transformed our corporate gifting strategy. Their customized solutions and attention to detail have helped us strengthen relationships with our clients and partners.",
    name: "Mohammed Al-Rashid",
    designation: "Business Development Manager",
    src: "https://images.pexels.com/photos/5011647/pexels-photo-5011647.jpeg",
  },

  {
    quote:
      "The quality and creativity of Baharnani Advertising's corporate gifts are unmatched. They understand our brand identity and deliver gifts that truly represent our company values.",
    name: "Fatima Hassan",
    designation: "HR Director",
    src: "https://images.pexels.com/photos/5011647/pexels-photo-5011647.jpeg",
  },
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
  return (
    <div>
      <CommonHero
        title="Your Trusted Partner for Premium Corporate Gifts"
        titlesuffix=""
        subtitle="Baharnani Advertising LLC is a Dubai-based gift supplier specializing in bulk orders, corporate gifts, event gifts, and fully customized solutions. We deliver quality, creativity, and excellence for all your gifting needs."
        imageUrl="https://images.pexels.com/photos/5011647/pexels-photo-5011647.jpeg"
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
        backgroundImageUrl="https://images.pexels.com/photos/17485710/pexels-photo-17485710.png"
        buttons={[
          {
            text: "Contact Us",
            className:
              "h-[50px] w-full sm:w-auto px-8 bg-textcolor! text-white! font-tanker!",
            link: "/contact-us",
          },
          {
            text: "Explore Products",
            className:
              "h-[50px] w-full sm:w-auto px-8 bg-transparent! border! border-textcolor! text-textcolor! font-tanker!",
            link: "/products",
          },
        ]}
      />
    </div>
  );
};

export default About;
