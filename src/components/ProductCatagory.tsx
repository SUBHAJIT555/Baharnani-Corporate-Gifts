import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "react-router";
import CustomButton from "./ui/CustomButton";


// images 
import ConstructionMaterialsImage from "../assets/images/Products-hero-image/Construction-Materials-hero.webp";
import FoodStuffImage from "../assets/images/Products-hero-image/food-stuff-hero.webp";
import BuildingMaterialsImage from "../assets/images/Products-hero-image/Building-Materials-hero.webp";
import ContractingSolutionsImage from "../assets/images/Products-hero-image/Contracting-Solutions-hero.webp";
import ImportExportImage from "../assets/images/Products-hero-image/Import-&-Export-hero.webp";
import ElectronicsITImage from "../assets/images/Products-hero-image/Electronics-&-IT-hero.webp";
import ChemicalsImage from "../assets/images/Products-hero-image/Chemicals-&-Additives-hero.webp";
import OilProductsImage from "../assets/images/Products-hero-image/oil-products-hero.webp";

interface ProductCategory {
  id: number;
  title: string;
  description: string;
  productRange: string[];
  highlights: string[];
  imageUrl: string;
  buttonText: string;
  buttonLink: string;
}

const categories: ProductCategory[] = [
  {
    id: 1,
    title: "Construction Materials",
    description:
      "We supply a comprehensive range of construction and infrastructure materials that meet ASTM and ISO standards, supporting major contractors and individual developers across Oman and the GCC.",
    productRange: [
      "Cement, white cement, and concrete blocks",
      "Reinforcement steel (rebar, mesh, angles)",
      "Aggregates, sand, and gravel",
      "Gypsum boards, plaster, and wall compounds",
      "Tiles, marble, and granite",
      "Paints, adhesives, waterproofing solutions",
    ],
    highlights: [
      "Bulk and retail supply options",
      "Technical compliance documentation (ASTM / BS)",
      "Direct sourcing from leading mills and factories",
      "Reliable logistics for local and export delivery",
    ],
    imageUrl:
      ConstructionMaterialsImage,
    buttonText: "Explore Construction Materials",
    buttonLink: "/products/construction-materials",
  },
  {
    id: 2,
    title: "Food Stuff",
    description:
      "Leading Network LLC trades and distributes high-quality food commodities and packaged goods across the Middle East, Africa, and Asia — ensuring freshness, safety, and compliance with HACCP standards.",
    productRange: [
      "Rice (Basmati, Non-Basmati, Parboiled, Jasmine)",
      "Sugar, pulses, lentils, and beans",
      "Cooking oils and ghee",
      "Spices, seasonings, and condiments",
      "Canned food and frozen products",
      "Dry fruits, nuts, and snacks",
      "Beverages, tea, and coffee",
    ],
    highlights: [
      "HACCP and ISO-certified global sourcing",
      "Packaging in various sizes (consumer & bulk)",
      "Temperature-controlled logistics",
      "Private labeling and white-label services available",
    ],
    imageUrl:
      FoodStuffImage,
    buttonText: "Explore Food Products",
    buttonLink: "/products/food-stuff",
  },
  {
    id: 3,
    title: "Building Materials",
    description:
      "We supply a full range of interior and exterior building materials that meet quality and performance requirements for residential, commercial, and industrial projects.",
    productRange: [
      "Sanitaryware, faucets, and plumbing fixtures",
      "Electrical fittings, cables, and switches",
      "Paints, sealants, adhesives, and insulation",
      "Door handles, locks, and hardware tools",
      "Ceiling tiles, flooring materials, and lighting systems",
      "Fasteners, pipes, and building accessories",
    ],
    highlights: [
      "Trusted brands and certified quality",
      "Ready stock for ongoing construction projects",
      "Technical support and specification compliance",
      "Bulk order fulfillment with flexible delivery schedules",
    ],
    imageUrl:
      BuildingMaterialsImage,
    buttonText: "Explore Building Materials",
    buttonLink: "/products/building-materials",
  },
  {
    id: 4,
    title: "Contracting Solutions",
    description:
      "Beyond product trading, Leading Network LLC offers comprehensive contracting services, integrating materials, manpower, and project execution under one umbrella.",
    productRange: [
      "Civil and structural works",
      "MEP (Mechanical, Electrical & Plumbing)",
      "Interior fit-outs and renovations",
      "Facility maintenance and upgrades",
      "Painting, waterproofing, and finishing works",
    ],
    highlights: [
      "Experienced project management team",
      "Integration with in-house materials division",
      "On-site safety and compliance assurance",
      "End-to-end service from design to delivery",
    ],
    imageUrl:
      ContractingSolutionsImage,
    buttonText: "Explore Contracting Services",
    buttonLink: "/products/contracting-solutions",
  },
  {
    id: 5,
    title: "Import & Export",
    description:
      "We manage the entire import and export process — from global sourcing and supplier verification to freight forwarding, customs documentation, and distribution.",
    productRange: [
      "Product sourcing and vendor evaluation",
      "Export of raw materials and finished goods",
      "Customs documentation and clearance",
      "Freight forwarding (sea, air, and land)",
      "Warehousing and inventory support",
    ],
    highlights: [
      "Global supply network spanning Asia, Africa & Europe",
      "Efficient documentation and clearance handling",
      "Dedicated logistics coordination team",
      "End-to-end import/export compliance support",
    ],
    imageUrl:
      ImportExportImage,
    buttonText: "Explore Import & Export",
    buttonLink: "/products/import-and-export",
  },
  {
    id: 6,
    title: "Electronics & IT",
    description:
      "We supply technology hardware and smart systems for corporate, educational, and industrial applications — bridging the gap between innovation and accessibility.",
    productRange: [
      "Laptops, desktops, and tablets",
      "Servers, storage, and UPS systems",
      "Networking devices (routers, switches, access points)",
      "CCTV, surveillance, and security systems",
      "LED screens, digital signage, and interactive kiosks",
      "Smart home and IoT devices",
    ],
    highlights: [
      "Partnerships with leading global brands",
      "Project-based B2B and B2C supply models",
      "Installation and after-sales support available",
      "Fast delivery and warranty handling",
    ],
    imageUrl:
      ElectronicsITImage,
    buttonText: "Explore Electronics & IT",
    buttonLink: "/products/electronics-and-it",
  },
  {
    id: 7,
    title: "Chemicals & Additives",
    description:
      "We trade in industrial, agricultural, food-grade, and pharmaceutical chemicals that meet strict global standards for quality, purity, and safety.",
    productRange: [
      "Food Additives & Preservatives – Emulsifiers, stabilizers, colorants, flavor agents",
      "Pharma Grade Chemicals – Laboratory reagents, solvents, excipients",
      "Agricultural & Fertilizer Chemicals – NPK, urea, micronutrients, crop enhancers",
      "Water-Treatment Chemicals – Coagulants, flocculants, pH regulators, disinfectants",
    ],
    highlights: [
      "MSDS, COA, and REACH documentation provided",
      "GHS-compliant labeling and safe packaging",
      "Reliable supply chain for bulk and drum quantities",
      "Environmentally responsible and compliant handling",
    ],
    imageUrl:
      ChemicalsImage,
    buttonText: "Explore Chemicals",
    buttonLink: "/products/chemicals-and-additives",
  },
  {
    id: 8,
    title: "Oil Products",
    description:
      "We supply a comprehensive range of oil products for industrial, automotive, and specialty applications — sourced from top refineries and certified global manufacturers, serving clients across Oman.",
    productRange: [
      "Automotive Engine Oils – Synthetic, conventional, high-mileage, diesel, and racing oils",
      "Industrial Lubricants – Hydraulic, compressor, turbine, gear, and spindle oils",
      "Transmission & Gear Oils – Automatic, manual, differential, CVT, and transfer case fluids",
      "Specialty Fluids – Transformer, white oils, pharmaceutical, and food-grade oils",
    ],
    highlights: [
      "API, SAE, and ISO certified oil products",
      "Temperature-resistant formulations for extreme conditions",
      "Bulk supply capabilities with flexible packaging options",
      "Technical support and oil analysis services available",
    ],
    imageUrl:
      OilProductsImage,
    buttonText: "Explore Oil Products",
    buttonLink: "/products/oil-products",
  },
];

const ProductCatagory = () => {
  return (
    <section className="w-full py-8 sm:py-10 md:py-12 lg:py-16 overflow-x-hidden bg-bg" id="product-varieties">
      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 max-w-[1400px] mx-auto">
        {categories.map((category, index) => {
          const isEven = index % 2 === 0;
          const CategoryCard = ({
            category,
            index,
          }: {
            category: ProductCategory;
            index: number;
          }) => {
            const ref = useRef<HTMLDivElement>(null);
            const isInView = useInView(ref, {
              once: true,
              margin: "-50px",
            });

            return (
              <motion.div
                ref={ref}
                initial={{ opacity: 0, y: 30 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                }
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className={`flex flex-col ${
                  isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                } gap-4 sm:gap-6 md:gap-8 lg:gap-10 mb-8 sm:mb-10 md:mb-12 lg:mb-16 last:mb-0`}
              >
                {/* Image Section - Smaller and Compact */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={
                    isInView
                      ? { opacity: 1, scale: 1 }
                      : { opacity: 0, scale: 0.95 }
                  }
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="w-full lg:w-[38%] h-[250px] sm:h-[280px] md:h-[320px] lg:h-[380px] relative overflow-hidden rounded-md border border-textcolor/20 bg-[#e1e1e1]"
                >
                  <motion.img
                    src={category.imageUrl}
                    alt={category.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 0.4 }}
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent" />
                </motion.div>

                {/* Content Section - Compact */}
                <div className="w-full lg:w-[62%] flex flex-col justify-center space-y-3 sm:space-y-4 md:space-y-5">
                  {/* Title */}
                  <motion.h2
                    initial={{ opacity: 0, x: isEven ? -15 : 15 }}
                    animate={
                      isInView
                        ? { opacity: 1, x: 0 }
                        : { opacity: 0, x: isEven ? -15 : 15 }
                    }
                    transition={{ duration: 0.5, delay: 0.15 }}
                    className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-tanker text-textcolor leading-tight"
                  >
                    {category.title}
                  </motion.h2>

                  {/* Description */}
                  <motion.p
                    initial={{ opacity: 0, x: isEven ? -15 : 15 }}
                    animate={
                      isInView
                        ? { opacity: 1, x: 0 }
                        : { opacity: 0, x: isEven ? -15 : 15 }
                    }
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-sm sm:text-base md:text-lg font-khand font-bold text-textcolor leading-relaxed"
                  >
                    {category.description}
                  </motion.p>

                  {/* Product Range - Compact Grid */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? -15 : 15 }}
                    animate={
                      isInView
                        ? { opacity: 1, x: 0 }
                        : { opacity: 0, x: isEven ? -15 : 15 }
                    }
                    transition={{ duration: 0.5, delay: 0.25 }}
                    className="space-y-2"
                  >
                    <h3 className="text-base sm:text-lg md:text-xl font-tanker text-textcolor">
                      Product Range:
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 sm:gap-2">
                      {category.productRange.slice(0, 6).map((item, idx) => (
                        <div
                          key={idx}
                          className="text-xs sm:text-sm md:text-base font-switzer text-textcolor flex items-start gap-2"
                        >
                          <span className="text-highlighttext mt-1 text-[10px] sm:text-xs">
                            •
                          </span>
                          <span className="leading-snug">{item}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>

                  {/* Highlights - Compact */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? -15 : 15 }}
                    animate={
                      isInView
                        ? { opacity: 1, x: 0 }
                        : { opacity: 0, x: isEven ? -15 : 15 }
                    }
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="space-y-2"
                  >
                    <h3 className="text-base sm:text-lg md:text-xl font-tanker text-textcolor">
                      Highlights:
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 sm:gap-2">
                      {category.highlights.map((item, idx) => (
                        <div
                          key={idx}
                          className="text-xs sm:text-sm md:text-base font-switzer text-textcolor flex items-start gap-2"
                        >
                          <span className="text-highlighttext mt-1 text-[10px] sm:text-xs">
                            ✓
                          </span>
                          <span className="leading-snug">{item}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>

                  {/* Button */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? -15 : 15 }}
                    animate={
                      isInView
                        ? { opacity: 1, x: 0 }
                        : { opacity: 0, x: isEven ? -15 : 15 }
                    }
                    transition={{ duration: 0.5, delay: 0.35 }}
                    className="pt-1 sm:pt-2"
                  >
                    <Link to={category.buttonLink}>
                      <CustomButton
                        text={category.buttonText}
                        className="h-[45px] sm:h-[50px] w-fit bg-white border! border-textcolor! text-textcolor! font-tanker! text-sm sm:text-base!"
                      />
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
            );
          };

          return (
            <CategoryCard key={category.id} category={category} index={index} />
          );
        })}
      </div>
    </section>
  );
};

export default ProductCatagory;
