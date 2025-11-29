import { useRef, useState, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import { Pagination, Autoplay } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ImCross } from "react-icons/im";
import { useQuote } from "../contexts/QuoteContext";
// import { foodstuff } from "../data/foodstuff"

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { PiSealPercentDuotone } from "react-icons/pi";
import type { Product } from "../services/api";
import { useRandomProducts } from "../hooks/useProducts";
import { getProductUrl } from "../lib/utilts";

interface TopSaverProps {
  videoUrl?: string;
}

// Get first 12 products as default (10-15 range)
// const defaultProducts = foodstuff.slice(0, 12);

const TopSaver = ({
  videoUrl = "/assets/video/GIFMaker_mezeeyand.webm",
}: TopSaverProps) => {
  const { data: products } = useRandomProducts();
  const { addToQuote, isInQuote } = useQuote();
  const headingRef = useRef<HTMLDivElement>(null);
  const swiperRef = useRef<HTMLDivElement>(null);
  const swiperInstanceRef = useRef<SwiperType | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const videoContainerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isProductModalOpen, setIsProductModalOpen] = useState(false);
  const [isVideoVisible, setIsVideoVisible] = useState(false);
  const [displayedText, setDisplayedText] = useState("");

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
        // Calculate max height from all cards
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
  }, [isSwiperInView, products]);

  // Lazy load video when it enters viewport
  useEffect(() => {
    if (!videoContainerRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVideoVisible(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: "50px", // Start loading slightly before it enters viewport
      }
    );

    observer.observe(videoContainerRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  // Typewriter animation for "Need Help?" - infinite back and forth
  useEffect(() => {
    if (!isSwiperInView) return;

    const text = "Need Help ?";
    let currentIndex = 0;
    let isDeleting = false;
    let waitCount = 0;
    const waitTime = 20; // 20 * 100ms = 2 seconds wait after typing
    const deleteWaitTime = 10; // 10 * 100ms = 1 second wait after deleting
    setDisplayedText("");

    const typeInterval = setInterval(() => {
      if (!isDeleting) {
        // Typing forward
        if (currentIndex < text.length) {
          setDisplayedText(text.slice(0, currentIndex + 1));
          currentIndex++;
        } else {
          // Finished typing, wait before deleting
          waitCount++;
          if (waitCount >= waitTime) {
            isDeleting = true;
            waitCount = 0;
          }
        }
      } else {
        // Deleting backward
        if (currentIndex > 0) {
          currentIndex--;
          setDisplayedText(text.slice(0, currentIndex));
        } else {
          // Finished deleting, wait before typing again
          waitCount++;
          if (waitCount >= deleteWaitTime) {
            isDeleting = false;
            waitCount = 0;
          }
        }
      }
    }, 100); // Typing/deleting speed: 100ms per character

    return () => {
      clearInterval(typeInterval);
    };
  }, [isSwiperInView]);

  const handleAddToQuote = (product: Product, e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (!isInQuote(Number(product.id))) {
      addToQuote(product, 1);
    }
  };

  // const handleProductClick = (product: Product) => {
  //   // Navigate to product details page with SEO-friendly URL
  //   navigate(getProductUrl(product));
  // };

  const handleCloseModal = () => {
    setIsProductModalOpen(false);
    // Small delay to allow exit animation before clearing product
    setTimeout(() => setSelectedProduct(null), 300);
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
            Top Saver{" "}
            <PiSealPercentDuotone className="inline-block align-middle " />
            Corporate Gift Deals in Dubai
          </h2>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-switzer tracking-widest sm:tracking-wider md:tracking-widest text-textcolor font-medium">
            Grab exclusive discounts on our eco-friendly and premium corporate
            gifts that are perfect for bulk orders and last-minute business
            gifting across Dubai and the UAE.
          </p>
        </motion.div>

        {/* Main Content: Carousel + Video Banner */}
        <motion.div
          ref={swiperRef}
          initial={{ opacity: 0 }}
          animate={isSwiperInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full "
        >
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 xl:gap-10">
            {/* Left Side: Product Carousel */}
            <div className="w-full lg:w-9/12 relative">
              {/* Navigation Buttons */}
              <div className="flex items-center justify-end gap-4 sm:gap-6 md:gap-8 mb-6 sm:mb-8 md:mb-10">
                {/* Previous Button */}
                <button
                  className="flex items-center gap-2 hover:opacity-70 transition-opacity"
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
                  className="flex items-center gap-2 hover:opacity-70 transition-opacity"
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
                spaceBetween={12}
                slidesPerView={1}
                breakpoints={{
                  640: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                  },
                  768: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                  },
                  1024: {
                    slidesPerView: 3,
                    spaceBetween: 24,
                  },
                  1280: {
                    slidesPerView: 4,
                    spaceBetween: 28,
                  },
                  1536: {
                    slidesPerView: 4,
                    spaceBetween: 32,
                  },
                }}
                // pagination={{
                //   clickable: true,
                //   el: ".swiper-pagination-topsaver",
                // }}
                autoplay={{
                  delay: 4000,
                  disableOnInteraction: false,
                }}
                grabCursor={true}
                className="top-saver-swiper"
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
                {products?.map((product, index) => (
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
                      <Link
                        to={getProductUrl(product)}
                        className="bg-[#e1e1e1] rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col cursor-pointer h-full"
                      >
                        {/* Product Image */}
                        <div className="relative w-full h-48 sm:h-52 md:h-56 lg:h-60 overflow-hidden bg-gray-200">
                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-full object-cover"
                          />
                        </div>

                        {/* Product Content */}
                        <div className="p-4 sm:p-5 md:p-6 flex flex-col grow">
                          {/* Category Badge */}
                          <span className="text-xs font-switzer text-textcolor/60 mb-2 uppercase tracking-wide line-clamp-1 overflow-hidden text-ellipsis">
                            {product.categories[0]}
                          </span>

                          {/* Product Title */}
                          <h3 className="text-base font-switzer font-bold text-textcolor mb-4 grow line-clamp-1 overflow-hidden text-ellipsis">
                            {product.name}
                          </h3>

                          {/* Add to Quote Button */}
                          <button
                            disabled={isInQuote(product.id)}
                            className={`w-full font-switzer font-semibold py-2.5 sm:py-3 px-4 rounded-md transition-colors duration-200 text-sm sm:text-base ${
                              isInQuote(product.id)
                                ? "bg-gray-400 text-white cursor-not-allowed opacity-60"
                                : "bg-textcolor hover:bg-textcolor/70 text-white"
                            }`}
                            onClick={(e) => handleAddToQuote(product, e)}
                          >
                            {isInQuote(product.id)
                              ? "Added to Quote"
                              : "Add to Quote"}
                          </button>
                        </div>
                      </Link>
                    </motion.div>
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* Pagination Dots */}
              <div className="flex justify-center mt-6 sm:mt-8 md:mt-10">
                <div
                  className="swiper-pagination-topsaver"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    width: "100%",
                  }}
                ></div>
              </div>
            </div>

            {/* Right Side: Video Banner */}
            <div className="w-full lg:w-3/12 shrink-0 h-[400px] sm:h-[480px]">
              <motion.div
                ref={videoContainerRef}
                initial={{ opacity: 0, x: 50 }}
                animate={
                  isSwiperInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }
                }
                transition={{ duration: 0.6, delay: 0.4 }}
                className="relative w-full h-full rounded-lg overflow-hidden shadow-lg bg-gray-900"
              >
                {isVideoVisible ? (
                  <video
                    ref={videoRef}
                    className="w-full h-full object-cover"
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="none"
                    width="640"
                    height="360"
                  >
                    <source src={videoUrl} type="video/webm" />
                    Your browser does not support the video tag.
                  </video>
                ) : (
                  <div className="w-full h-full bg-gray-200 animate-pulse" />
                )}
                {/* Overlay for better text readability */}
                <div className="absolute inset-0 bg-linear-to-t from-transparent via-black/80 to-transparent pointer-events-none" />

                {/* Text Content Overlay */}
                <div className="absolute inset-0 flex flex-col items-center justify-center p-4 sm:p-5 md:p-6 lg:p-4 xl:p-5 2xl:p-6 z-10">
                  {/* Heading with blue band background */}
                  <div className="w-full flex justify-center mb-4 sm:mb-5 md:mb-6">
                    <div className="px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 rounded-lg">
                      <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-tanker font-bold text-bg text-center">
                        {displayedText}
                        <span className="inline-block w-0.5 h-6 sm:h-8 md:h-10 bg-bg ml-1 animate-pulse" />
                      </h3>
                    </div>
                  </div>

                  {/* Paragraph text */}
                  <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-tanker font-bold text-bg text-center mb-6 sm:mb-8 md:mb-10 max-w-md tracking-wide">
                    Contact us for unique gift ideas for your company
                  </p>

                  {/* Contact Us Button */}
                  <Link to="/contact-us" className="inline-block">
                    <button className="font-switzer font-semibold py-2 sm:py-2 md:py-2 px-8 sm:px-10 md:px-12 rounded-md transition-colors duration-200 text-base sm:text-sm md:text-xl bg-textcolor hover:bg-textcolor/70 text-white shadow-lg">
                      Contact Us
                    </button>
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Product Detail Modal */}
        <AnimatePresence>
          {isProductModalOpen && selectedProduct && (
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
                          src={selectedProduct.image}
                          alt={selectedProduct.name}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      {/* Content Section */}
                      <div className="w-full lg:w-1/2 p-5 sm:p-6 md:p-8 lg:p-10 flex flex-col pb-20 sm:pb-6 lg:pb-10">
                        {/* Category Badge */}
                        <span className="text-xs font-switzer text-textcolor mb-2 sm:mb-3 uppercase border border-textcolor/30 rounded-md w-fit p-1 bg-white tracking-wide">
                          {selectedProduct.categories[0]}
                        </span>

                        {/* Product Title */}
                        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-switzer font-bold text-textcolor mb-3 sm:mb-4 md:mb-6 leading-tight">
                          {selectedProduct.name}
                        </h2>

                        {/* Description/Details */}
                        <div className="mb-4 sm:mb-6 md:mb-8 flex-1">
                          <h3 className="text-base sm:text-lg md:text-xl font-tanker text-textcolor mb-2 sm:mb-3 md:mb-4">
                            Product Details :
                          </h3>
                          <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-switzer text-textcolor/80 leading-relaxed">
                            {selectedProduct.short_desc}
                          </p>
                        </div>

                        {/* Desktop Button (inside content section) */}
                        <div className="hidden lg:block mt-auto">
                          <button
                            disabled={isInQuote(selectedProduct.id)}
                            className={`w-full font-switzer font-semibold py-4 px-6 rounded-md transition-colors duration-200 text-lg ${
                              isInQuote(selectedProduct.id)
                                ? "bg-gray-400 text-white cursor-not-allowed opacity-60"
                                : "bg-textcolor hover:bg-textcolor/70 text-white"
                            }`}
                            onClick={(e) => {
                              e.stopPropagation();
                              handleAddToQuote(selectedProduct, e);
                            }}
                          >
                            {isInQuote(selectedProduct.id)
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
                      disabled={isInQuote(selectedProduct.id)}
                      className={`w-full font-switzer font-semibold py-3.5 px-6 rounded-md transition-colors duration-200 text-base ${
                        isInQuote(selectedProduct.id)
                          ? "bg-gray-400 text-white cursor-not-allowed opacity-60"
                          : "bg-textcolor hover:bg-textcolor/70 text-white"
                      }`}
                      onClick={(e) => {
                        e.stopPropagation();
                        handleAddToQuote(selectedProduct, e);
                      }}
                    >
                      {isInQuote(selectedProduct.id)
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

export default TopSaver;
