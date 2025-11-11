import CommonHero from "../components/ui/CommonHero";
import OverView from "../components/OverView";
import ProductGrid from "../components/ProductGrid";
import WhyChooseUs from "../components/WhyChooseUs";
import type { FeatureCard } from "../components/WhyChooseUs";

import { Globe, Shield, Truck, FileText, Eye, Users } from "lucide-react";
import CallToAction from "../components/CallToAction";

// images 
import ImportExportImage from "../assets/images/Products-hero-image/Import-&-Export-hero.webp";
const importExportFeatures: FeatureCard[] = [
  {
    id: 1,
    number: "01",
    title: "Global Reach",
    description: "Sourcing and shipping network covering Asia, Africa, and Europe.",
    icon: <Globe size={32} />,
    iconColor: "#4CAF50",
  },
  {
    id: 2,
    number: "02",
    title: "Compliance-Driven",
    description: "All trade operations align with Oman and international regulations.",
    icon: <Shield size={32} />,
    iconColor: "#FF6B6B",
  },
  {
    id: 3,
    number: "03",
    title: "Efficient Logistics",
    description: "Integrated freight management via sea, air, and land.",
    icon: <Truck size={32} />,
    iconColor: "#FF9800",
  },
  {
    id: 4,
    number: "04",
    title: "Documentation Expertise",
    description: "In-house team for COO, HS codes, and customs paperwork.",
    icon: <FileText size={32} />,
    iconColor: "#8BC34A",
  },
  {
    id: 5,
    number: "05",
    title: "End-to-End Visibility",
    description: "Track shipments and documents from origin to destination.",
    icon: <Eye size={32} />,
    iconColor: "#3F3F9F",
  },
  {
    id: 6,
    number: "06",
    title: "Dedicated Support",
    description: "A single coordination team for every client and shipment.",
    icon: <Users size={32} />,
    iconColor: "#2196F3",
  },
];
const ImportAndExport = () => {
 
  return (
    <div>
      <CommonHero
        title="Global Import & Export Solutions You Can Rely On"
        titlesuffix=""
        subtitle="Leading Network LLC connects suppliers and buyers across continents — offering sourcing, logistics, customs, and export management solutions with full compliance and transparency."
        imageUrl={ImportExportImage}
        buttonLink="#import-and-export"
        buttonText="Explore Import and Export Services"
      />
      <OverView
        content={
          <>
            At Leading Network LLC, we simplify cross-border trade by managing
            every step — from product sourcing and supplier verification to
            freight forwarding and customs documentation. <br />
            With decades of combined experience and a wide partner network
            across Asia, Africa, and Europe, we provide cost-efficient and
            time-bound logistics for both raw materials and finished goods.{" "}
            <br /> We serve as a single point of contact for manufacturers,
            distributors, and resellers who demand reliability and compliance in
            international trade.
          </>
        }
      />
      <ProductGrid title="Our Product Range" productType="importandexport" id="import-and-export" />
      <WhyChooseUs features={importExportFeatures} />
      <CallToAction
        title="Your Global Trading Bridge from Oman"
        subtitle="Partner with Leading Network LLC for seamless import, export, and logistics management — backed by trusted suppliers, compliance expertise, and reliable delivery across borders."
        backgroundImageUrl={ImportExportImage}
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

export default ImportAndExport
