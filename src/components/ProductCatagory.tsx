import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "react-router";
import CustomButton from "./ui/CustomButton";

// Image URLs from internet
const ApparelImage =
  "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80";
const BagsTravelImage =
  "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&q=80";
const OfficeStationaryImage =
  "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=800&q=80";
const TechnologyImage =
  "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80";
const EatingDrinkingImage =
  "https://images.unsplash.com/photo-1556911220-bff31c812dba?w=800&q=80";
const SportsRecreationImage =
  "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80";
const EcoFriendlyImage =
  "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&q=80";
const PremiumGiftSetsImage =
  "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=800&q=80";
const LuxuryGiftsImage =
  "https://images.unsplash.com/photo-1606761568499-6d2451b23c66?w=800&q=80";

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
    title: "Premium Gift Sets",
    description:
      "Curated premium gift sets that combine multiple products for maximum impact. From executive gift boxes to luxury hampers, we create sophisticated collections that leave a lasting impression on your most valued clients and partners.",
    productRange: [
      "Executive gift boxes and hampers",
      "Luxury skincare and wellness sets",
      "Gourmet food and beverage collections",
      "Premium office accessory bundles",
      "Seasonal and themed gift sets",
      "Custom-curated corporate packages",
    ],
    highlights: [
      "Expertly curated collections",
      "Premium packaging and presentation",
      "Customizable contents and branding",
      "Perfect for special occasions and milestones",
    ],
    imageUrl: PremiumGiftSetsImage,
    buttonText: "Explore Premium Gift Sets",
    buttonLink: "/product-category/premium-gift-sets",
  },
  {
    id: 2,
    title: "Luxury Corporate Gifts",
    description:
      "Make an unforgettable impression with our exclusive collection of luxury corporate gifts. From high-end timepieces and leather goods to premium electronics and artisanal products, we offer sophisticated options for your most distinguished clients and executives.",
    productRange: [
      "Luxury watches and timepieces",
      "Premium leather goods and wallets",
      "High-end electronics and gadgets",
      "Artisanal and handcrafted items",
      "Luxury home and office decor",
      "Exclusive branded merchandise",
    ],
    highlights: [
      "Premium brands and craftsmanship",
      "Exclusive and limited edition items",
      "Personalized engraving and customization",
      "Elegant presentation and packaging",
    ],
    imageUrl: LuxuryGiftsImage,
    buttonText: "Explore Luxury Corporate Gifts",
    buttonLink: "/product-category/luxury-corporate-gifts-dubai",
  },
  {
    id: 3,
    title: "Apparel and Accessories",
    description:
      "Elevate your corporate brand with premium quality apparel and accessories. From custom-embroidered polo shirts and branded jackets to elegant ties and scarves, we offer a comprehensive range of corporate wear that reflects professionalism and style.",
    productRange: [
      "Custom polo shirts and t-shirts with embroidery",
      "Corporate jackets, blazers, and vests",
      "Business ties, scarves, and pocket squares",
      "Branded caps, beanies, and headwear",
      "Corporate uniforms and workwear",
      "Accessories: belts, wallets, and keychains",
    ],
    highlights: [
      "Premium fabric quality and durability",
      "Custom branding and embroidery services",
      "Wide range of sizes and color options",
      "Bulk order discounts and flexible delivery",
    ],
    imageUrl: ApparelImage,
    buttonText: "Explore Apparel & Accessories",
    buttonLink: "/product-category/apparel-and-accessories",
  },
  {
    id: 4,
    title: "Bags and Travel",
    description:
      "Professional travel solutions and branded bags that combine functionality with corporate identity. From executive laptop bags to travel luggage sets, our collection ensures your brand travels with style and sophistication.",
    productRange: [
      "Laptop bags and briefcases",
      "Backpacks and messenger bags",
      "Travel luggage and suitcases",
      "Tote bags and shopping bags",
      "Duffel bags and gym bags",
      "Travel accessories and organizers",
    ],
    highlights: [
      "Durable materials and quality craftsmanship",
      "Custom logo printing and embroidery",
      "Ergonomic designs for comfort",
      "Variety of styles for different occasions",
    ],
    imageUrl: BagsTravelImage,
    buttonText: "Explore Bags & Travel",
    buttonLink: "/product-category/bags-and-travel",
  },
  {
    id: 5,
    title: "Office and Stationary",
    description:
      "Complete your corporate workspace with premium office supplies and branded stationery. From elegant pen sets to custom notebooks and desk accessories, we provide everything needed to create a professional and organized work environment.",
    productRange: [
      "Premium pen sets and writing instruments",
      "Custom notebooks and journals",
      "Desk organizers and accessories",
      "Notepads, sticky notes, and planners",
      "File folders and document holders",
      "Corporate calendars and wall planners",
    ],
    highlights: [
      "High-quality materials and finishes",
      "Custom branding and personalization",
      "Eco-friendly options available",
      "Bulk pricing for corporate orders",
    ],
    imageUrl: OfficeStationaryImage,
    buttonText: "Explore Office & Stationary",
    buttonLink: "/product-category/office-and-stationary",
  },
  {
    id: 6,
    title: "Technology and Accessories",
    description:
      "Stay ahead with cutting-edge technology gifts and accessories. From wireless chargers and power banks to premium headphones and smart devices, we offer the latest tech solutions that make perfect corporate gifts for clients and employees.",
    productRange: [
      "Wireless chargers and power banks",
      "Bluetooth speakers and headphones",
      "USB drives and external storage",
      "Smart watches and fitness trackers",
      "Phone cases and screen protectors",
      "Cable organizers and tech accessories",
    ],
    highlights: [
      "Latest technology and innovations",
      "Branded packaging options",
      "Warranty and support included",
      "Compatible with all major devices",
    ],
    imageUrl: TechnologyImage,
    buttonText: "Explore Technology & Accessories",
    buttonLink: "/product-category/technology-and-accessories",
  },
  {
    id: 7,
    title: "Eating and Drinking",
    description:
      "Impress clients and employees with elegant dining and beverage solutions. From premium coffee sets and tea collections to branded water bottles and wine accessories, we curate sophisticated options for every corporate occasion.",
    productRange: [
      "Premium coffee and tea gift sets",
      "Branded water bottles and tumblers",
      "Wine glasses and bar accessories",
      "Gourmet gift baskets and hampers",
      "Custom mugs and drinkware",
      "Cutlery sets and serving accessories",
    ],
    highlights: [
      "Premium quality and presentation",
      "Custom engraving and branding",
      "Eco-friendly and sustainable options",
      "Perfect for corporate events and gifting",
    ],
    imageUrl: EatingDrinkingImage,
    buttonText: "Explore Eating & Drinking",
    buttonLink: "/product-category/eating-and-drinking",
  },
  {
    id: 8,
    title: "Sports and Recreation",
    description:
      "Promote wellness and team spirit with our range of sports and recreation gifts. From branded athletic wear to fitness equipment and outdoor gear, we help you reward active lifestyles and build stronger corporate teams.",
    productRange: [
      "Branded athletic wear and sportswear",
      "Fitness equipment and accessories",
      "Outdoor gear and camping supplies",
      "Sports water bottles and hydration packs",
      "Team building activity kits",
      "Golf accessories and equipment",
    ],
    highlights: [
      "Durable and performance-oriented",
      "Team branding and customization",
      "Suitable for corporate wellness programs",
      "Variety for different sports and activities",
    ],
    imageUrl: SportsRecreationImage,
    buttonText: "Explore Sports & Recreation",
    buttonLink: "/product-category/sports-and-recreation",
  },
  {
    id: 9,
    title: "Eco Friendly",
    description:
      "Demonstrate your commitment to sustainability with our eco-friendly corporate gift collection. From reusable products to sustainable materials, we offer environmentally conscious options that align with your corporate values and green initiatives.",
    productRange: [
      "Reusable water bottles and coffee cups",
      "Bamboo and recycled material products",
      "Organic cotton apparel and bags",
      "Solar-powered accessories",
      "Plantable stationery and seed packets",
      "Sustainable packaging solutions",
    ],
    highlights: [
      "Certified sustainable materials",
      "Carbon-neutral shipping options",
      "Eco-friendly packaging",
      "Supports corporate sustainability goals",
    ],
    imageUrl: EcoFriendlyImage,
    buttonText: "Explore Eco Friendly",
    buttonLink: "/product-category/eco-friendly",
  },
];

const ProductCatagory = () => {
  return (
    <section
      className="w-full py-8 sm:py-10 md:py-12 lg:py-16 overflow-x-hidden bg-bg"
      id="product-varieties"
    >
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
                className={`flex flex-col ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"
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
