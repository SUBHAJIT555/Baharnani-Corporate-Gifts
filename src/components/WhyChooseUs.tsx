import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import { Pagination, Autoplay } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { PiSealQuestionDuotone } from "react-icons/pi";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export interface FeatureCard {
  id: number;
  number: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  iconColor: string;
}

interface WhyChooseUsProps {
  features: FeatureCard[];
  title?: React.ReactNode;
  subtitle?: string;
}

const WhyChooseUs = ({
  features,
  title = (
    <>
      Why{" "}
      <PiSealQuestionDuotone className="inline-block align-middle rotate-45" />
      Choose Us
    </>
  ),
  subtitle = "Delivering quality, reliability, and consistency in every shipment.",
}: WhyChooseUsProps) => {
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

  const [isMobile, setIsMobile] = useState(false);
  const hasFewItems = features.length <= 3;
  const shouldUseFlexbox = hasFewItems && !isMobile;

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

  // Detect mobile screen size
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768); // md breakpoint
    };

    // Check on mount
    checkMobile();

    // Check on resize
    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

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
      window.addEventListener("resize", handleResize);

      return () => {
        clearTimeout(timer1);
        clearTimeout(timer2);
        clearTimeout(timer3);
        window.removeEventListener("resize", handleResize);
      };
    }
  }, [isSwiperInView, features, hasFewItems]);

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
          className="mb-8 sm:mb-10 md:mb-12 lg:mb-16 text-center"
        >
          {/* Main Title */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-tanker text-textcolor leading-tight">
            {title}
          </h2>
          {/* Subtitle with spaced letters */}
          <div className="mb-3 sm:mb-4 md:mb-5">
            <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-switzer tracking-widest sm:tracking-[0.2em] md:tracking-[0.3em] text-textcolor font-medium">
              {subtitle}
            </p>
          </div>
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
            {shouldUseFlexbox ? (
              /* Flexbox Layout for 3 or fewer items on desktop */
              <div className="flex flex-wrap justify-center items-stretch gap-4 sm:gap-6 md:gap-8">
                {features.map((feature, index) => (
                  <motion.div
                    key={feature.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={
                      isSwiperInView
                        ? { opacity: 1, y: 0 }
                        : { opacity: 0, y: 30 }
                    }
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex-1 min-w-[280px] sm:min-w-[300px] md:min-w-[320px] max-w-[400px]"
                  >
                    <div
                      ref={(el) => {
                        cardRefs.current[index] = el;
                      }}
                      className="bg-[#e1e1e1] rounded-lg p-6 sm:p-7 md:p-8 lg:p-10 flex flex-col border border-textcolor hover:shadow-lg transition-shadow duration-300 h-full"
                    >
                      {/* Icon and Number */}
                      <div className="flex items-center gap-4 sm:gap-5 mb-4 sm:mb-5 md:mb-6">
                        <div
                          className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-lg flex items-center justify-center shrink-0"
                          style={{ backgroundColor: feature.iconColor }}
                        >
                          <div className="text-textcolor">{feature.icon}</div>
                        </div>
                        <span
                          className="text-3xl sm:text-4xl md:text-5xl font-tanker text-textcolor "
                          style={{
                            WebkitTextStroke: "1px #10100e",
                            WebkitTextFillColor: "transparent",
                          }}
                        >
                          {feature.number}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-tanker text-textcolor  mb-3 sm:mb-4 md:mb-5">
                        {feature.title}
                      </h3>

                      {/* Description */}
                      <p className="text-sm sm:text-base md:text-lg lg:text-xl font-switzer text-textcolor leading-relaxed grow">
                        {feature.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            ) : (
              <>
                <Swiper
                  modules={[Pagination, Autoplay]}
                  spaceBetween={20}
                  slidesPerView={1}
                  breakpoints={{
                    640: {
                      slidesPerView: 1,
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
                  }}
                  pagination={{
                    clickable: true,
                    el: ".swiper-pagination-why-choose-us",
                    dynamicBullets: false,
                  }}
                  autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                  }}
                  grabCursor={true}
                  className="why-choose-us-swiper"
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
                  {features.map((feature, index) => (
                    <SwiperSlide key={feature.id}>
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
                          ref={(el) => {
                            cardRefs.current[index] = el;
                          }}
                          className="bg-[#e1e1e1] rounded-lg p-6 sm:p-7 md:p-8 lg:p-10 flex flex-col border border-textcolor hover:shadow-lg transition-shadow duration-300"
                        >
                          {/* Icon and Number */}
                          <div className="flex items-center gap-4 sm:gap-5 mb-4 sm:mb-5 md:mb-6">
                            <div
                              className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-lg flex items-center justify-center shrink-0"
                              style={{ backgroundColor: feature.iconColor }}
                            >
                              <div className="text-textcolor">
                                {feature.icon}
                              </div>
                            </div>
                            <span
                              className="text-3xl sm:text-4xl md:text-5xl font-tanker text-textcolor "
                              style={{
                                WebkitTextStroke: "1px #10100e",
                                WebkitTextFillColor: "transparent",
                              }}
                            >
                              {feature.number}
                            </span>
                          </div>

                          {/* Title */}
                          <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-tanker text-textcolor  mb-3 sm:mb-4 md:mb-5">
                            {feature.title}
                          </h3>

                          {/* Description */}
                          <p className="text-sm sm:text-base md:text-lg lg:text-xl font-switzer text-textcolor leading-relaxed grow">
                            {feature.description}
                          </p>
                        </div>
                      </motion.div>
                    </SwiperSlide>
                  ))}
                </Swiper>

                {/* Custom Navigation and Pagination */}
                <div className="flex items-center justify-center gap-4 sm:gap-6 md:gap-8 mt-6 sm:mt-8 md:mt-10">
                  {/* Previous Button */}
                  <button
                    className="swiper-button-prev-custom swiper-button-prev-custom-style flex items-center gap-2"
                    onClick={() => swiperInstanceRef.current?.slidePrev()}
                    aria-label="Previous slide"
                  >
                    <ChevronLeft size={24} />
                    <span className="text-textcolor font-tanker font-medium">
                      Previous
                    </span>
                  </button>

                  {/* Pagination Dots */}
                  <div className="swiper-pagination-why-choose-us"></div>

                  {/* Next Button */}
                  <button
                    className="swiper-button-next-custom swiper-button-next-custom-style flex items-center gap-2"
                    onClick={() => swiperInstanceRef.current?.slideNext()}
                    aria-label="Next slide"
                  >
                    <span className="text-textcolor font-tanker font-medium">
                      Next
                    </span>
                    <ChevronRight size={24} />
                  </button>
                </div>
              </>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
