import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import CustomButton from "./ui/CustomButton";
import { PiGiftDuotone } from "react-icons/pi";



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
  id: string;
  title: string;
  description: string;
  image: string;
  link: string;
}

const products: ProductCategory[] = [
  {
    id: "1",
    title: "Apparel & accessories",
    description:
      "Custom branded t-shirts, polo shirts, caps, and accessories with premium printing and embroidery.",
    image:
      ConstructionMaterialsImage,
    link: "/product-category/apparel-and-accessories",
  },
  {
    id: "2",
    title: "Bags & travel",
    description:
      "Personalized laptop bags, backpacks, travel kits, and luggage with custom logo printing.",
    image:
      FoodStuffImage,
    link: "/product-category/bags-and-travel",
  },
  {
    id: "3",
    title: "Office & stationary",
    description: "Branded pens, notebooks, planners, and desk accessories with laser engraving and custom printing.",
    image:
      BuildingMaterialsImage,
    link: "/product-category/office-and-stationary",
  },
  {
    id: "4",
    title: "Technology & accessories",
    description: "Custom power banks, USB drives, wireless chargers, and tech gadgets with logo printing.",
    image:
      ContractingSolutionsImage,
    link: "/product-category/technology-and-accessories",
  },
  {
    id: "5",
    title: "Eating & drinking",
    description:
      "Personalized mugs, water bottles, tumblers, and drinkware with premium printing and engraving.",
    image:
      ImportExportImage,
    link: "/product-category/eating-and-drinking",
  },
  {
    id: "6",
    title: "Premiums gift sets",
    description:
      "Curated luxury gift hampers and premium sets with custom packaging and branding solutions.",
    image:
      ElectronicsITImage,
    link: "/product-category/premium-gift-sets",
  },
  {
    id: "7",
    title: "Sports & recreation",
    description: "Custom sports equipment, fitness accessories, and recreational items with branded printing.",
    image:
      ChemicalsImage,
    link: "/product-category/sports-and-recreation",
  },
  {
    id: "8",
    title: "Eco friendly",
    description: "Sustainable bamboo products, reusable items, and eco-conscious gifts with custom branding.",
    image:
      OilProductsImage,
    link: "/product-category/eco-friendly",
  },
  {
    id: "9",
    title: "Luxury corporate gifts",
    description: "Premium executive gifts, leather accessories, and high-end corporate presents with elegant customization.",
    image:
      OilProductsImage,
    link: "/product-category/luxury-corporate-gifts",
  },
];

const ProductGridHome = () => {
  const headingRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  const isHeadingInView = useInView(headingRef, {
    once: true,
    margin: "-50px",
  });
  const isGridInView = useInView(gridRef, {
    once: true,
    margin: "-100px",
  });

  return (
    <section className="w-full py-6 sm:py-8 md:py-12 lg:py-16 xl:py-20 2xl:py-24 overflow-x-hidden">
      <div className="w-full px-3 sm:px-4 md:px-6 lg:px-8 xl:px-12 2xl:px-16 max-w-[1920px] mx-auto">
        {/* Heading Section */}
        <motion.div
          ref={headingRef}
          initial={{ opacity: 0, y: 50 }}
          animate={
            isHeadingInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
          }
          transition={{ duration: 0.6 }}
          className="mb-6 sm:mb-8 md:mb-10 lg:mb-12 xl:mb-16 2xl:mb-20"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-tanker text-textcolor leading-tight mb-3 sm:mb-4 md:mb-5 lg:mb-6">
            Explore Our Wide Range of Corporate Gift
            <PiGiftDuotone className="inline-block align-middle rotate-45" />
            Categories in Dubai
          </h2>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-switzer tracking-widest sm:tracking-wider md:tracking-widest text-textcolor font-medium">
            Discover premium, eco-friendly, and customized corporate gift
            collections that offer you everything from apparel and travel kits
            to gift sets, office stationery, and more across Dubai, Abu Dhabi,
            and overall UAE.
          </p>
        </motion.div>

        {/* Product Grid */}
        <motion.div
          ref={gridRef}
          initial={{ opacity: 0 }}
          animate={isGridInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 gap-4 sm:gap-5 md:gap-6 lg:gap-8 xl:gap-10 2xl:gap-12"
        >
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              animate={
                isGridInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
              }
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link to={product.link} className="group block h-full">
                <div className="h-full bg-[#e1e1e1] hover:bg-white rounded-lg overflow-hidden transition-all duration-300 flex flex-col border border-textcolor">
                  {/* Image */}
                  <div className="relative w-full h-44 sm:h-48 md:h-52 lg:h-56 xl:h-60 2xl:h-64 overflow-hidden">
                    <motion.img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.4 }}
                    />
                    <div className="absolute inset-0 duration-300" />
                  </div>

                  {/* Content */}
                  <div className="p-4 sm:p-5 md:p-6 lg:p-7 xl:p-8 2xl:p-10 flex flex-col grow">
                    <h3 className="text-lg sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-tanker text-textcolor mb-2 sm:mb-3 md:mb-4 group-hover:text-textcolor/80 transition-colors">
                      {product.title}
                    </h3>
                    <p className="text-xs sm:text-sm md:text-base lg:text-base xl:text-lg 2xl:text-xl font-switzer text-textcolor/80 leading-relaxed mb-3 sm:mb-4 md:mb-5 lg:mb-6 grow">
                      {product.description}
                    </p>
                    <div className="mt-auto flex justify-end">
                      <CustomButton
                        text="Know more"
                        className="h-[40px] sm:h-[44px] md:h-[48px] lg:h-[50px] xl:h-[52px] 2xl:h-[56px] w-fit text-xs sm:text-sm md:text-base lg:text-base xl:text-lg bg-textcolor! border! border-textcolor! text-bg! font-tanker! hover:bg-textcolor! hover:text-white! px-3 sm:px-4 md:px-5 lg:px-6"
                      />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProductGridHome;
