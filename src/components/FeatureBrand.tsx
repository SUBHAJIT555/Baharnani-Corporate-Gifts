import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import { Pagination, Autoplay } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ImCross } from "react-icons/im";
import { useQuote } from "../contexts/QuoteContext";


import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { PiCrownDuotone } from "react-icons/pi";
import type { Product } from "../services/api";
import { useFeaturedProducts } from "../hooks/useProducts";
import { Link } from "react-router-dom";
import { getProductUrl } from "../lib/utilts";



const FeatureBrand = () => {
  const headingRef = useRef<HTMLDivElement>(null);
  const swiperRef = useRef<HTMLDivElement>(null);
  const swiperInstanceRef = useRef<SwiperType | null>(null);
  const { addToQuote, isInQuote } = useQuote();
  const [selectedBrand, setSelectedBrand] = useState<Product | null>(null);
  const [isProductModalOpen, setIsProductModalOpen] = useState(false);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const { data: brandsData } = useFeaturedProducts();
  const brands = brandsData?.products || [];
  const isHeadingInView = useInView(headingRef, {
    once: true,
    margin: "-50px",
  });
  const isSwiperInView = useInView(swiperRef, {
    once: true,
    margin: "-100px",
  });

  // const handleBrandClick = (brand: Product) => {
  //   setSelectedBrand(brand);
  //   setIsProductModalOpen(true);
  // };

  const handleCloseModal = () => {
    setIsProductModalOpen(false);
    // Small delay to allow exit animation before clearing brand
    setTimeout(() => setSelectedBrand(null), 300);
  };

  const handleAddToQuote = (brand: Product, e?: React.MouseEvent) => {
    e?.stopPropagation(); // Prevent card click when clicking button
    if (!isInQuote(brand.id)) {
      addToQuote(brand, 1);
    }
  };

  const handleSlideChange = (swiper: SwiperType) => {
    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);
  };

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
          className="mb-8 sm:mb-10 md:mb-12 lg:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-tanker text-textcolor leading-tight mb-3 sm:mb-4 md:mb-5 lg:mb-6">
            Featured Corporate Gift Brands <PiCrownDuotone className="inline-block align-middle -rotate-45" />
            Trusted by Businesses Across Dubai
          </h2>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-switzer tracking-widest sm:tracking-wider md:tracking-widest text-textcolor font-medium">
            Elevate your brand image with premium corporate gifts from top-rated
            international and eco-friendly brands specially curated by Baharnani
            Advertising.
          </p>
        </motion.div>

        {/* Swiper Section */}
        <motion.div
          ref={swiperRef}
          initial={{ opacity: 0 }}
          animate={isSwiperInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full relative"
        >
          <div className="relative">
            {/* Navigation Buttons - Top Right */}
            <div className="flex items-center justify-end gap-4 sm:gap-6 md:gap-8 mb-6 sm:mb-8 md:mb-10">
              {/* Previous Button */}
              <button
                disabled={isBeginning}
                className={`flex items-center gap-2 transition-opacity ${isBeginning
                  ? "opacity-40 cursor-not-allowed"
                  : "hover:opacity-70 cursor-pointer"
                  }`}
                onClick={() => swiperInstanceRef.current?.slidePrev()}
                aria-label="Previous slide"
              >
                <ChevronLeft size={24} className="text-textcolor" />
                <span className="text-textcolor font-tanker font-medium">
                  Previous
                </span>
              </button>

              {/* Next Button */}
              <button
                disabled={isEnd}
                className={`flex items-center gap-2 transition-opacity ${isEnd
                  ? "opacity-40 cursor-not-allowed"
                  : "hover:opacity-70 cursor-pointer"
                  }`}
                onClick={() => swiperInstanceRef.current?.slideNext()}
                aria-label="Next slide"
              >
                <span className="text-textcolor font-tanker font-medium">
                  Next
                </span>
                <ChevronRight size={24} className="text-textcolor" />
              </button>
            </div>

            <Swiper
              modules={[Pagination, Autoplay]}
              spaceBetween={20}
              slidesPerView={1}
              loop={true}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                  spaceBetween: 24,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 28,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 32,
                },
                1280: {
                  slidesPerView: 4,
                  spaceBetween: 32,
                },
              }}

              autoplay={{
                delay: 4000,
                disableOnInteraction: false,
              }}
              grabCursor={true}
              className="feature-brand-swiper"
              onSwiper={(swiper) => {
                swiperInstanceRef.current = swiper;
                setIsBeginning(swiper.isBeginning);
                setIsEnd(swiper.isEnd);
              }}
              onSlideChange={handleSlideChange}
            >
              {brands.map((brand, index) => (
                <SwiperSlide key={brand.id}>
                  <Link to={getProductUrl(brand)}>
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
                      <div

                        className="bg-[#e1e1e1] rounded-lg p-4 sm:p-5 md:p-6 lg:p-8 flex flex-col items-center justify-center min-h-[300px] sm:min-h-[320px] md:min-h-[360px] lg:min-h-[400px] border border-textcolor hover:shadow-lg transition-shadow duration-300 cursor-pointer"
                      >
                        {/* Image */}
                        <div className="w-full h-40 sm:h-44 md:h-48 lg:h-52 xl:h-56 mb-4 sm:mb-5 md:mb-6 flex items-center justify-center">
                          <img
                            src={brand.image}
                            alt={brand.name}
                            className="w-full h-full object-contain"
                          />
                        </div>

                        {/* Category */}
                        <h3 className="text-xs sm:text-sm md:text-base lg:text-lg font-switzer font-bold text-textcolor/70 tracking-widest mb-2 sm:mb-3 text-center uppercase line-clamp-1 overflow-hidden text-ellipsis">
                          {brand.categories[0]}
                        </h3>

                        {/* Product Name */}
                        <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-switzer font-bold text-textcolor text-center line-clamp-1 overflow-hidden text-ellipsis">
                          {brand.name}
                        </p>
                      </div>
                    </motion.div>
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Pagination Dots */}
            <div className="flex justify-center mt-6 sm:mt-8 md:mt-10">
              <div className="swiper-pagination-custom"></div>
            </div>
          </div>
        </motion.div>

        {/* Product Detail Modal */}
        <AnimatePresence>
          {isProductModalOpen && selectedBrand && (
            <>
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                onClick={handleCloseModal}
                className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50"
              />

              {/* Modal Content */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 50 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 50 }}
                transition={{
                  type: "spring",
                  damping: 30,
                  stiffness: 300,
                  duration: 0.3,
                }}
                className="fixed inset-0 sm:inset-4 md:inset-8 lg:inset-16 xl:inset-20 z-50 flex items-end sm:items-center justify-center"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="w-full h-[95vh] sm:h-full sm:max-h-[90vh] max-w-6xl bg-bg shadow-2xl overflow-hidden flex flex-col relative">
                  {/* Close Button - Inside modal for desktop */}
                  <button
                    onClick={handleCloseModal}
                    className="hidden lg:block absolute top-4 right-4 z-10 p-2.5 bg-red-500 hover:bg-textcolor rounded-full shadow-lg transition-colors"
                    aria-label="Close modal"
                  >
                    <ImCross className="h-6 w-6 text-bg" />
                  </button>

                  {/* Modal Content - Scrollable */}
                  <div className="flex-1 overflow-y-auto">
                    <div className="flex flex-col lg:flex-row h-full">
                      {/* Image Section */}
                      <div className="w-full lg:w-1/2 h-56 sm:h-72 md:h-80 lg:h-full bg-gray-100 shrink-0">
                        <img
                          src={selectedBrand.image}
                          alt={selectedBrand.name}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      {/* Content Section */}
                      <div className="w-full lg:w-1/2 p-5 sm:p-6 md:p-8 lg:p-10 flex flex-col pb-20 sm:pb-6 lg:pb-10">
                        {/* Category Badge */}
                        <span className="text-xs font-switzer text-textcolor mb-2 sm:mb-3 uppercase border border-textcolor/30 rounded-md w-fit p-1 bg-white tracking-wide">
                          {selectedBrand.categories[0]}
                        </span>

                        {/* Product Title */}
                        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-switzer font-bold text-textcolor mb-3 sm:mb-4 md:mb-6 leading-tight ">
                          {selectedBrand.name}
                        </h2>

                        {/* Description/Details */}
                        <div className="mb-4 sm:mb-6 md:mb-8 flex-1">
                          <h3 className="text-base sm:text-lg md:text-xl font-tanker text-textcolor mb-2 sm:mb-3 md:mb-4">
                            Product Details :
                          </h3>
                          <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-switzer text-textcolor/80 leading-relaxed">
                            {selectedBrand.short_desc ||
                              `Premium corporate gift from ${selectedBrand.categories[0]}. ${selectedBrand.name} is a high-quality product perfect for corporate gifting and business promotions. Elevate your brand image with this carefully curated item from Baharnani Advertising.`}
                          </p>
                        </div>

                        {/* Desktop Button (inside content section) */}
                        <div className="hidden lg:block mt-auto">
                          <button
                            disabled={isInQuote(selectedBrand.id)}
                            className={`w-full font-switzer font-semibold py-4 px-6 rounded-md transition-colors duration-200 text-lg ${isInQuote(selectedBrand.id)
                              ? "bg-gray-400 text-white cursor-not-allowed opacity-60"
                              : "bg-textcolor hover:bg-textcolor/70 text-white"
                              }`}
                            onClick={(e) => {
                              e.stopPropagation();
                              handleAddToQuote(selectedBrand, e);
                            }}
                          >
                            {isInQuote(selectedBrand.id)
                              ? "Added to Quote"
                              : "Add to Quote"}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Sticky Button for Mobile */}
                  <div className="lg:hidden sticky bottom-0 left-0 right-0 bg-bg border-t border-gray-200 p-4 pt-3 shadow-lg z-10">
                    <button
                      disabled={isInQuote(selectedBrand.id)}
                      className={`w-full font-switzer font-semibold py-3.5 px-6 rounded-md transition-colors duration-200 text-base ${isInQuote(selectedBrand.id)
                        ? "bg-gray-400 text-white cursor-not-allowed opacity-60"
                        : "bg-textcolor hover:bg-textcolor/70 text-white"
                        }`}
                      onClick={(e) => {
                        e.stopPropagation();
                        handleAddToQuote(selectedBrand, e);
                      }}
                    >
                      {isInQuote(selectedBrand.id)
                        ? "Added to Quote"
                        : "Add to Quote"}
                    </button>
                  </div>
                </div>

                {/* Close Button - Outside modal for mobile/tablet */}
                <button
                  onClick={handleCloseModal}
                  className="lg:hidden absolute top-3 right-3 sm:top-4 sm:right-4 z-50 p-2 sm:p-2.5 bg-red-500 hover:bg-textcolor rounded-full shadow-lg transition-colors"
                  aria-label="Close modal"
                >
                  <ImCross className="h-5 w-5 sm:h-6 sm:w-6 text-bg" />
                </button>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default FeatureBrand;
