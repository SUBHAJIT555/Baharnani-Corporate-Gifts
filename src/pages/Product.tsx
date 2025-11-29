import CommonHero from "../components/ui/CommonHero";
import ProductCatagory from "../components/ProductCatagory";
import FAQ from "../components/FAQ";
import type { FAQItem } from "../components/FAQ";
import CallToAction from "../components/CallToAction";
import ctaImage from "/assets/images/Hero-images/Product-hero.webp";

const productFaqData: FAQItem[] = [
  {
    id: 1,
    question: "Do you trade locally or internationally?",
    answer:
      "Both. We manage supply chains across Oman and export to Asia, Africa, and Europe through trusted logistics partners.",
  },
  {
    id: 2,
    question: "Can I order mixed products from multiple categories?",
    answer:
      "Yes, we handle mixed shipments combining foodstuff, materials, and chemicals in a single coordinated order.",
  },
  {
    id: 3,
    question: "Are your suppliers certified?",
    answer:
      "All our suppliers are verified and certified under international standards such as ISO, HACCP, and ASTM.",
  },
  {
    id: 4,
    question: "Do you provide technical documentation or test certificates?",
    answer:
      "Yes, all industrial and chemical products are accompanied by the required MSDS, COA, and quality compliance certificates.",
  },
  {
    id: 5,
    question: "What is the minimum order quantity?",
    answer:
      "It depends on the product category — we support both small project-based and large-scale bulk orders.",
  },
];

const Product = () => {
  return (
    <div>
      <CommonHero
        title="Explore Wide Range of Premium Gifts Items in Dubai"
        titlesuffix=""
        subtitle="Discover our extensive collection of corporate gifts designed to strengthen relationships and elevate your brand. From luxury items to eco-friendly solutions, we offer premium quality products perfect for clients, employees, and business partners."
        imageUrl="/assets/images/Hero-images/Product-hero.webp"
        buttonLink="#product-varieties"
        buttonText="Explore Our Varieties"
      />
      <ProductCatagory />
      <FAQ
        faqData={productFaqData}
        title="Frequently Asked Questions About Our Products"
        subtitle="Get answers to common questions about our products and services"
      />
      <CallToAction
        title="Ready to Elevate Your Corporate Gifting?"
        subtitle="Partner with Baharnani Advertising, Dubai's premier corporate gift supplier. From premium gift sets to custom branding solutions, we help you make lasting impressions that strengthen business relationships."
        backgroundImageUrl={ctaImage}
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
            link: "#product-varieties",
          },
        ]}
      />
    </div>
  );
};

export default Product;
