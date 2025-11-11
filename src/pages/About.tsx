import CommonHero from "../components/ui/CommonHero";
import WhoWeAre from "../components/WhoWeAre";
import VisionMission from "../components/VisionMission";
import { AnimatedTestimonials } from "../components/ui/AnimatedTestimonial";
import WhyChooseUs from "../components/WhyChooseUs";
import type { FeatureCard } from "../components/WhyChooseUs";
import CallToAction from "../components/CallToAction";
import { PackageSearch, Waypoints, Users, Leaf, TruckElectric , TicketCheck } from "lucide-react";
import { PiSealQuestionDuotone } from "react-icons/pi";

const testimonials = [
  {
    quote:
      "I have been working with Leading Network LLC for over 10 years and they have always been a great partner. They are reliable, transparent, and always deliver on time.",
    name: "John Doe",
    designation: "CEO",
    src: "https://images.pexels.com/photos/5011647/pexels-photo-5011647.jpeg",
  },
  {
    quote:
      "I have been working with Leading Network LLC for over 10 years and they have always been a great partner. They are reliable, transparent, and always deliver on time.",
    name: "John Doe",
    designation: "CEO",
    src: "https://images.pexels.com/photos/5011647/pexels-photo-5011647.jpeg",
  },

  {
    quote:
      "I have been working with Leading Network LLC for over 10 years and they have always been a great partner. They are reliable, transparent, and always deliver on time.",
    name: "John Doe",
    designation: "CEO",
    src: "https://images.pexels.com/photos/5011647/pexels-photo-5011647.jpeg",
  },
];

const aboutFeatures: FeatureCard[] = [
  {
    id: 1,
    number: "01",
    title: "Comprehensive Product Portfolio",
    description: "One source for construction, foodstuff, IT, and chemicals.",
    icon: <PackageSearch  size={32} />,
    iconColor: "#FF6B6B",
  },
  {
    id: 2,
    number: "02",
    title: "Certified Global Network",
    description:
      "Verified suppliers and international compliance (ISO, HACCP, ASTM).",
    icon: <TicketCheck  size={32} />,
    iconColor: "#4CAF50",
  },
  {
    id: 3,
    number: "03",
    title: "Custom Solutions",
    description:
      "Flexible supply quantities and private-label options for global partners.",
    icon: <Users size={32} />,
    iconColor: "#67bed9",
  },
  {
    id: 4,
    number: "04",
    title: "Logistics Support",
    description:
      "Complete import/export documentation and freight coordination.",
    icon: <TruckElectric  size={32} />,
    iconColor: "#FF9800",
  },
  {
    id: 5,
    number: "05",
    title: "Oman-Based Hub",
    description:
      "Strategically located for fast regional and international distribution.",
    icon: <Waypoints  size={32} />,
    iconColor: "#8BC34A",
  },
  {
    id: 6,
    number: "06",
    title: "Sustainability Commitment",
    description: "Promoting eco-friendly, safe, and compliant product lines.",
    icon: <Leaf size={32} />,
    iconColor: "#2196F3",
  },
];
const About = () => {
  return (
    <div>
      <CommonHero
        title="Connecting Global Markets Through Trusted Trade"
        titlesuffix=""
        subtitle="Leading Network LLC is a diversified general trading company in Oman bridging industries worldwide — from construction and foodstuff to electronics, chemicals, and IT solutions — built on reliability, transparency, and long-term partnerships."
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
            The{" "}
            <PiSealQuestionDuotone className="inline-block align-middle rotate-45" />{" "}
            Leading Network Advantage
          </>
        }
        subtitle="We don't just trade — we connect industries with solutions that make business simpler, faster, and more efficient."
      />
      <AnimatedTestimonials testimonials={testimonials} />
      <CallToAction
        title="Partner With a Trading Company That Delivers Results"
        subtitle="Whether you need construction materials, foodstuff, electronics, or industrial chemicals, Leading Network LLC ensures reliable sourcing, transparent communication, and on-time delivery across the globe."
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
