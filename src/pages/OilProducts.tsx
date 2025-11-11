import CommonHero from "../components/ui/CommonHero"
import OverView from "../components/OverView"
import ProductGrid from "../components/ProductGrid";
import WhyChooseUs from "../components/WhyChooseUs";
import { type FeatureCard } from "../components/WhyChooseUs";

import { FileText, Shield, Package, Wrench, Truck, CheckCircle } from "lucide-react";
import CallToAction from "../components/CallToAction";

// images 
import OilProductsImage from "../assets/images/Products-hero-image/oil-products-hero.webp";

const oilproductsFeatures: FeatureCard[] = [
  {
    id: 1,
    number: "01",
    title: "Certified Quality",
    description: "Products meet API, SAE, ISO, and ASTM performance standards.",
    icon: <CheckCircle size={32} />,
    iconColor: "#4CAF50",
  },
  {
    id: 2,
    number: "02",
    title: "Trusted Brands",
    description: "Sourced from major refineries and global lubricant producers.",
    icon: <Shield size={32} />,
    iconColor: "#2196F3",
  },
  {
    id: 3,
    number: "03",
    title: "Flexible Packaging",
    description: "Available in 1L, 5L, 20L, 200L drums, or IBC tanks.",
    icon: <Package size={32} />,
    iconColor: "#FF9800",
  },
  {
    id: 4,
    number: "04",
    title: "Blending Support",
    description: "Custom formulation and private-label blending available upon request.",
    icon: <Wrench size={32} />,
    iconColor: "#9C27B0",
  },
  {
    id: 5,
    number: "05",
    title: "Export Expertise",
    description: "Efficient logistics for bulk container or tank shipments worldwide.",
    icon: <Truck size={32} />,
    iconColor: "#FF5722",
  },
  {
    id: 6,
    number: "06",
    title: "Safety & Compliance",
    description: "Complete MSDS, COA, and transport documentation included.",
    icon: <FileText size={32} />,
    iconColor: "#607D8B",
  },
];
const OilProducts = () => {
  return (
    <div>
      <CommonHero
        title="Trusted Supplier of Industrial, Automotive, and Specialty Oils"
        titlesuffix=""
        subtitle="Leading Network LLC supplies a comprehensive range of industrial lubricants, automotive oils, base oils, and specialty fluids — sourced from top refineries and certified global manufacturers, serving clients across  Oman."
        imageUrl={OilProductsImage}
        buttonLink="#oil-products"
        buttonText="Explore Oil Products"
      />
      <OverView
        content={
          <>
            Our Oil Division specializes in high-performance lubricants and
            petroleum-based products for automotive, marine, and industrial
            applications. <br /> We work with refineries, blending plants, and
            global brands to ensure consistent quality, superior performance,
            and regulatory compliance. <br /> Each shipment undergoes quality
            testing, certification (COA, MSDS), and proper packaging to
            guarantee safety and reliability — whether you require bulk drums,
            IBC tanks, or retail packaging.
          </>
        }
      />
      <ProductGrid title="Our Product Range" productType="oilproducts" id="oil-products" />
      <WhyChooseUs features={oilproductsFeatures} />
      <CallToAction
        title="Your Reliable Oil & Lubricant Partner in the Oman"
        subtitle="From automotive engine oils to industrial lubricants and base oils, Leading Network LLC ensures premium quality, competitive pricing, and reliable global delivery."
        backgroundImageUrl={OilProductsImage}
        buttons={[
          {
            text: "Contact Our Team",
            className:
              "h-[50px] w-full sm:w-auto px-8 bg-textcolor! text-white! font-tanker!",
              link: "/contact-us",
          },
          {
            text: "Explore Product Calagories",
            className:
              "h-[50px] w-full sm:w-auto px-8 bg-transparent! border! border-textcolor! text-textcolor! font-tanker!",
              link: "/products",
          },
        ]}
      />
    </div>
  );
}

export default OilProducts
