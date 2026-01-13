import { useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "react-router";
import CustomButton from "./ui/CustomButton";
import { PiGiftDuotone } from "react-icons/pi";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import { Pagination, Autoplay } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// images

// import ApparelAndAccessoriesImage from "../assets/images/Home-page-hero-images/Apparel-&-accessories.webp";
// import BagsTravelImage from "../assets/images/Home-page-hero-images/Bags-&-travel.webp";
// import OfficeStationaryImage from "../assets/images/Home-page-hero-images/Office-&-stationary.webp";
// import TechnologyAccessoriesImage from "../assets/images/Home-page-hero-images/Technology-&-accessories.webp";
// import EatingDrinkingImage from "../assets/images/Home-page-hero-images/Eating-&-drinking.webp";
// import PremiumGiftSetImage from '../assets/images/Home-page-hero-images/Premiums-gift-sets.webp';
// import SportsRecreationImage from "../assets/images/Home-page-hero-images/Sports-&-recreation.webp";
// import EcoFriendlyImage from "../assets/images/Home-page-hero-images/Eco-friendly.webp";
// import LuxuryCorporateGiftsImage from "../assets/images/Home-page-hero-images/Luxury-corporate-gifts.webp";

// import ConstructionMaterialsImage from "../assets/images/Products-hero-image/Construction-Materials-hero.webp";
// import FoodStuffImage from "../assets/images/Products-hero-image/food-stuff-hero.webp";
// import BuildingMaterialsImage from "../assets/images/Products-hero-image/Building-Materials-hero.webp";
// import ContractingSolutionsImage from "../assets/images/Products-hero-image/Contracting-Solutions-hero.webp";
// import ImportExportImage from "../assets/images/Products-hero-image/Import-&-Export-hero.webp";
// import ElectronicsITImage from "../assets/images/Products-hero-image/Electronics-&-IT-hero.webp";
// import ChemicalsImage from "../assets/images/Products-hero-image/Chemicals-&-Additives-hero.webp";
// import OilProductsImage from "../assets/images/Products-hero-image/oil-products-hero.webp";

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
    image: "/assets/images/Home-page-hero-images/Apparel-&-accessories.webp",
    link: "/product-category/apparel-and-accessories",
  },
  {
    id: "2",
    title: "Bags & travel",
    description:
      "Personalized laptop bags, backpacks, travel kits, and luggage with custom logo printing.",
    image: "/assets/images/Home-page-hero-images/Bags-&-travel.webp",
    link: "/product-category/bags-and-travel",
  },
  {
    id: "3",
    title: "Office & stationary",
    description:
      "Branded pens, notebooks, planners, and desk accessories with laser engraving and custom printing.",
    image: "/assets/images/Home-page-hero-images/Office-&-stationary.webp",
    link: "/product-category/office-and-stationary",
  },
  {
    id: "4",
    title: "Technology & accessories",
    description:
      "Custom power banks, USB drives, wireless chargers, and tech gadgets with logo printing.",
    image: "/assets/images/Home-page-hero-images/Technology-&-accessories.webp",
    link: "/product-category/technology-and-accessories",
  },
  {
    id: "5",
    title: "Eating & drinking",
    description:
      "Personalized mugs, water bottles, tumblers, and drinkware with premium printing and engraving.",
    image: "/assets/images/Home-page-hero-images/Eating-&-drinking.webp",
    link: "/product-category/eating-and-drinking",
  },
  {
    id: "6",
    title: "Premiums gift sets",
    description:
      "Curated luxury gift hampers and premium sets with custom packaging and branding solutions.",
    image: "/assets/images/Home-page-hero-images/Premiums-gift-sets.webp",
    link: "/product-category/premium-gift-sets",
  },
  {
    id: "7",
    title: "Sports & recreation",
    description:
      "Custom sports equipment, fitness accessories, and recreational items with branded printing.",
    image: "/assets/images/Home-page-hero-images/Sports-&-recreation.webp",
    link: "/product-category/sports-and-recreation",
  },
  {
    id: "8",
    title: "Eco friendly",
    description:
      "Sustainable bamboo products, reusable items, and eco-conscious gifts with custom branding.",
    image: "/assets/images/Home-page-hero-images/Eco-friendly.webp",
    link: "/product-category/eco-friendly",
  },
  {
    id: "9",
    title: "Luxury corporate gifts Dubai",
    description:
      "Premium executive gifts, leather accessories, and high-end corporate presents with elegant customization.",
    image: "/assets/images/Home-page-hero-images/Luxury-corporate-gifts.webp",
    link: "/product-category/luxury-corporate-gifts-dubai",
  },
];

const ProductGridHome = () => {
  const headingRef = useRef<HTMLDivElement>(null);
  const swiperRef = useRef<HTMLDivElement>(null);
  const swiperInstanceRef = useRef<SwiperType | null>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const isHeadingInView = useInView(headingRef, {
    once: true,
    margin: "-50px",
  });
  const isSwiperInView = useInView(swiperRef, {
    once: true,
    margin: "-100px",
  });

  // Equalize card heights
  const equalizeHeights = () => {
    if (cardRefs.current.length === 0) return;

    // Reset heights to auto to get natural heights
    cardRefs.current.forEach((card) => {
      if (card) {
        card.style.height = "auto";
        card.style.minHeight = "auto";
      }
    });

    // Wait for layout recalculation - use double RAF for accuracy
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        // Calculate max height from all visible cards
        let maxHeight = 0;
        cardRefs.current.forEach((card) => {
          if (card) {
            // Get the actual rendered height - getBoundingClientRect includes padding and border
            const height = card.getBoundingClientRect().height;

            if (height > maxHeight) {
              maxHeight = height;
            }
          }
        });

        // Apply max height to all cards
        if (maxHeight > 0) {
          cardRefs.current.forEach((card) => {
            if (card) {
              card.style.height = `${maxHeight}px`;
            }
          });
        }
      });
    });
  };

  useEffect(() => {
    if (isSwiperInView) {
      // Equalize after animations complete - longer delays to ensure all content is rendered
      const timer1 = setTimeout(equalizeHeights, 800);
      const timer2 = setTimeout(equalizeHeights, 1500);
      const timer3 = setTimeout(equalizeHeights, 2000);

      // Also equalize on window resize
      const handleResize = () => {
        equalizeHeights();
      };
      self.addEventListener("resize", handleResize);

      return () => {
        clearTimeout(timer1);
        clearTimeout(timer2);
        clearTimeout(timer3);
        self.removeEventListener("resize", handleResize);
      };
    }
  }, [isSwiperInView]);

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
            collections, including <span className="font-semibold text-textcolor">customized corporate gifts Dubai</span> businesses
            trust—offering everything from apparel and travel kits to curated
            gift sets, office stationery, and more across Dubai, Abu Dhabi, and
            the UAE.
          </p>
        </motion.div>

        {/* Product Carousel */}
        <motion.div
          ref={swiperRef}
          initial={{ opacity: 0 }}
          animate={isSwiperInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full relative"
        >
          <div className="relative">
            <Swiper
              modules={[Pagination, Autoplay]}
              spaceBetween={20}
              slidesPerView={1}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 24,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 28,
                },
                1280: {
                  slidesPerView: 3,
                  spaceBetween: 32,
                },
                1536: {
                  slidesPerView: 4,
                  spaceBetween: 36,
                },
              }}
              pagination={{
                clickable: true,
                el: ".swiper-pagination-product-grid",
                dynamicBullets: false,
              }}
              autoplay={{
                delay: 4000,
                disableOnInteraction: false,
              }}
              grabCursor={true}
              className="product-grid-swiper"
              onSwiper={(swiper) => {
                swiperInstanceRef.current = swiper;
                // Equalize heights after swiper is initialized
                setTimeout(() => {
                  equalizeHeights();
                }, 500);
                setTimeout(() => {
                  equalizeHeights();
                }, 1000);
              }}
              onResize={() => {
                equalizeHeights();
              }}
              onSlideChange={() => {
                equalizeHeights();
              }}
            >
              {products.map((product, index) => (
                <SwiperSlide key={product.id}>
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={
                      isSwiperInView
                        ? { opacity: 1, y: 0 }
                        : { opacity: 0, y: 30 }
                    }
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="h-full w-full"
                  >
                    <Link to={product.link} className="group block h-full">
                      <div
                        ref={(el) => {
                          cardRefs.current[index] = el;
                        }}
                        className="h-full bg-[#e1e1e1] hover:bg-white rounded-lg overflow-hidden transition-all duration-300 flex flex-col border border-textcolor"
                      >
                        {/* Image */}
                        <div className="relative w-full h-40 sm:h-44 md:h-48 lg:h-52 xl:h-56 2xl:h-60 overflow-hidden">
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
                        <div className="p-3 sm:p-4 md:p-5 lg:p-6 xl:p-7 2xl:p-8 flex flex-col grow">
                          <h3 className="text-lg sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-tanker text-textcolor mb-1 sm:mb-1.5 md:mb-2 group-hover:text-textcolor/80 transition-colors">
                            {product.title}
                          </h3>
                          <p className="text-xs sm:text-sm md:text-base lg:text-base xl:text-lg 2xl:text-xl font-switzer text-textcolor/80 leading-relaxed mb-2 sm:mb-2.5 md:mb-3 lg:mb-3.5 grow">
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
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Custom Navigation and Pagination */}
            <div className="flex items-center justify-center gap-4 sm:gap-6 md:gap-8 mt-6 sm:mt-8 md:mt-10">
              {/* Previous Button */}
              <button
                className="swiper-button-prev-product-grid flex items-center gap-2"
                onClick={() => swiperInstanceRef.current?.slidePrev()}
                aria-label="Previous slide"
              >
                <ChevronLeft size={24} className="text-textcolor" />
                <span className="text-textcolor font-tanker font-medium">
                  Previous
                </span>
              </button>

              {/* Pagination Dots */}
              <div className="swiper-pagination-product-grid"></div>

              {/* Next Button */}
              <button
                className="swiper-button-next-product-grid flex items-center gap-2"
                onClick={() => swiperInstanceRef.current?.slideNext()}
                aria-label="Next slide"
              >
                <span className="text-textcolor font-tanker font-medium">
                  Next
                </span>
                <ChevronRight size={24} className="text-textcolor" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductGridHome;
