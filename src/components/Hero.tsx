import { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CustomButton from "./ui/CustomButton";
import { Link } from "react-router";


gsap.registerPlugin(ScrollTrigger);

const IMAGES = [
  "/assets/images/Home-page-hero-images/Apparel-&-accessories.webp",
  "/assets/images/Home-page-hero-images/Bags-&-travel.webp",
  "/assets/images/Home-page-hero-images/Office-&-stationary.webp",
  "/assets/images/Home-page-hero-images/Technology-&-accessories.webp",
  "/assets/images/Home-page-hero-images/Eating-&-drinking.webp",
  "/assets/images/Home-page-hero-images/Premiums-gift-sets.webp",
  "/assets/images/Home-page-hero-images/Sports-&-recreation.webp",
  "/assets/images/Home-page-hero-images/Eco-friendly.webp",
  "/assets/images/Home-page-hero-images/Luxury-corporate-gifts.webp",
];

const H2_TEXTS = [
  "Premium gift sets",
  "Luxury corporate gifts",
  "Apparel & accessories",
  "Bags & travel",
  "Office & stationary",
  "Technology & accessories",
  "Eating & drinking",
  "Sports & recreation",
  "Eco friendly",
];

const AUTO_ADVANCE = 3000;

const HeroSection = () => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0); // 1 for next, -1 for prev
  const timeoutRef = useRef<number | undefined>(undefined);
  const textRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);
  const dragStartRef = useRef<number | null>(null);
  const dragThreshold = 50; // Minimum drag distance to trigger slide change
  const sliderContainerRef = useRef<HTMLDivElement>(null);
  const imageRefs = useRef<(HTMLImageElement | null)[]>([]);
  const isAnimatingRef = useRef(false);
  const prevIndexRef = useRef<number>(0);

  // GSAP Crossfade Animation Function
  const animateSlide = (newIndex: number) => {
    if (isAnimatingRef.current) return;
    isAnimatingRef.current = true;

    const prevImg = imageRefs.current[prevIndexRef.current];
    const newImg = imageRefs.current[newIndex];

    if (!newImg) {
      isAnimatingRef.current = false;
      return;
    }

    // Kill any existing animations
    gsap.killTweensOf([prevImg, newImg]);

    // Set up the new image to be ready to fade in
    gsap.set(newImg, {
      opacity: 0,
      zIndex: IMAGES.length + 10, // Higher z-index to be on top
      xPercent: 0, // No sliding, just fading
    });

    // Create timeline for smooth crossfade
    const tl = gsap.timeline({
      onComplete: () => {
        // Clean up: hide all images except the current one
        IMAGES.forEach((_, i) => {
          const img = imageRefs.current[i];
          if (img && i !== newIndex) {
            gsap.set(img, { opacity: 0, zIndex: i + 1 });
          }
        });

        // Set final z-index for new image
        gsap.set(newImg, { zIndex: newIndex + 1 });

        isAnimatingRef.current = false;
      },
    });

    // Crossfade: fade out old, fade in new simultaneously
    tl.to(
      newImg,
      {
        opacity: 1,
        duration: 1.5, // Longer duration for smoother fade
        ease: "power2.inOut",
      },
      0
    ); // Start at time 0

    // Optionally fade out the previous image (creates a true crossfade)
    if (prevImg) {
      tl.to(
        prevImg,
        {
          opacity: 0,
          duration: 1.5,
          ease: "power2.inOut",
        },
        0
      ); // Start at the same time as fade in
    }
  };

  // GSAP Initial Animations
  useEffect(() => {
    // Subtle parallax effect for text
    gsap.to(textRef.current, {
      yPercent: -20,
      ease: "none",
      scrollTrigger: {
        trigger: textRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
      },
    });

    // Simple fade in for heading
    if (headingRef.current) {
      gsap.fromTo(
        headingRef.current,
        {
          opacity: 0,
          y: 30,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
        }
      );
    }

    // Simple button animation
    if (buttonRef.current?.children) {
      gsap.fromTo(
        buttonRef.current.children,
        {
          opacity: 0,
          y: 20,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: "power2.out",
          delay: 0.5,
        }
      );
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  // Initialize images on mount
  useEffect(() => {
    // Use requestAnimationFrame to ensure DOM is ready
    requestAnimationFrame(() => {
      IMAGES.forEach((_, i) => {
        const img = imageRefs.current[i];
        if (img) {
          if (i === 0) {
            // First image visible
            gsap.set(img, {
              xPercent: 0,
              opacity: 1,
              zIndex: 1,
            });
          } else {
            // Other images hidden, no offset (for crossfade)
            gsap.set(img, {
              xPercent: 0, // No sliding, just fading
              opacity: 0,
              zIndex: i + 1,
            });
          }
        }
      });
    });
  }, []);

  // Handle index changes with GSAP animation
  useEffect(() => {
    if (imageRefs.current[index] && direction !== 0) {
      // Animate slide when index changes (except on initial mount)
      animateSlide(index);
      prevIndexRef.current = index;
    } else if (direction === 0) {
      // On initial mount, just set the previous index
      prevIndexRef.current = index;
    }
  }, [index, direction]);

  // Auto-advance
  useEffect(() => {
    timeoutRef.current = self.setTimeout(() => {
      setDirection(1);
      setIndex((prev) => (prev + 1) % IMAGES.length);
    }, AUTO_ADVANCE);
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [index]);

  // Handlers
  const next = () => {
    if (isAnimatingRef.current) return;
    setDirection(1);
    setIndex((prev) => (prev + 1) % IMAGES.length);
  };

  const prev = () => {
    if (isAnimatingRef.current) return;
    setDirection(-1);
    setIndex((prev) => (prev - 1 + IMAGES.length) % IMAGES.length);
  };

  const goToSlide = (slideIndex: number) => {
    if (slideIndex === index || isAnimatingRef.current) return;
    setDirection(slideIndex > index ? 1 : -1);
    setIndex(slideIndex);
  };

  // Drag handlers
  const handleDragStart = (e: React.MouseEvent | React.TouchEvent) => {
    // Don't start drag if clicking on interactive elements or if animating
    if (isAnimatingRef.current) return;

    const target = e.target as HTMLElement;
    if (
      target.closest("button") ||
      target.closest("a") ||
      target.closest('[role="button"]')
    ) {
      return;
    }
    const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
    dragStartRef.current = clientX;
  };

  const handleDragMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (dragStartRef.current === null || isAnimatingRef.current) return;
    e.preventDefault(); // Prevent text selection during drag
    const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
    const diff = dragStartRef.current - clientX;

    if (Math.abs(diff) > dragThreshold) {
      if (diff > 0) {
        // Dragged left (startX > currentX), go to next
        next();
      } else {
        // Dragged right (startX < currentX), go to previous
        prev();
      }
      dragStartRef.current = null;
    }
  };

  const handleDragEnd = () => {
    dragStartRef.current = null;
  };

  return (
    <section
      className="relative min-h-screen w-full overflow-x-hidden flex items-center justify-center cursor-grab active:cursor-grabbing"
      onMouseDown={handleDragStart}
      onMouseMove={handleDragMove}
      onMouseUp={handleDragEnd}
      onMouseLeave={handleDragEnd}
      onTouchStart={handleDragStart}
      onTouchMove={handleDragMove}
      onTouchEnd={handleDragEnd}
    >
      {/* GSAP Slider Container */}
      <div
        ref={sliderContainerRef}
        className="absolute inset-0 w-full h-full overflow-hidden z-0 bg-black"
      >
        {/* All Images - GSAP will handle animations */}
        {IMAGES.map((img, i) => {
          return (
            <img
              key={i}
              ref={(el) => {
                imageRefs.current[i] = el;
              }}
              src={img}
              alt={`Hero Background ${H2_TEXTS[i]}`}
              className="absolute inset-0 w-full h-full object-cover pointer-events-none"
              style={{
                willChange: "transform",
                maskImage:
                  "radial-gradient(ellipse 85% 75% at 50% 45%, black 40%, rgba(0,0,0,0.7) 70%, transparent 100%)",
                WebkitMaskImage:
                  "radial-gradient(ellipse 85% 75% at 50% 45%, black 40%, rgba(0,0,0,0.7) 70%, transparent 100%)",
              }}
              draggable={false}
              loading={i === 0 ? "eager" : "lazy"}
            />
          );
        })}
      </div>

      {/* Overlay for contrast */}
      {/* <div className="absolute inset-0 bg-black/40  z-10 pointer-events-none" /> */}

      {/* Text Overlay */}
      <div
        ref={textRef}
        className="relative z-20 flex flex-col items-center justify-center text-center select-none px-4 sm:px-6 md:px-8 lg:px-12 pt-24 sm:pt-32 md:pt-40 lg:pt-48"
      >
        <div className="flex flex-col items-center justify-center text-center select-none  px-4 sm:px-6 md:px-8 lg:px-12">
          <motion.h1
            ref={headingRef}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-[#e1e1e1] text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight mb-3 sm:mb-4 font-khand font-black max-w-7xl mx-auto"
            style={{
              textShadow: `
                2px 2px 4px #000000AA,
                0 4px 18px #1a232c99,
                2px 4px 0px #33333399,
                0px 1px 0px #fff,
                0px 2px 0px #fff
              `,
            }}
          >
            Premium Corporate Gifts Suppliers in Dubai & Across the UAE
          </motion.h1>

          <div className="relative h-16 sm:h-20 md:h-24 lg:h-28 xl:h-32 mb-3 sm:mb-4 flex items-center justify-center w-full max-w-full overflow-hidden">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.h2
                key={index}
                custom={direction}
                initial={{
                  opacity: 0,
                  y: 30,
                  x: direction > 0 ? 50 : direction < 0 ? -50 : 0,
                }}
                animate={{ opacity: 1, y: 0, x: 0 }}
                exit={{ opacity: 0, y: -30, x: direction > 0 ? -50 : 50 }}
                transition={{
                  duration: 0.6,
                  ease: [0.4, 0, 0.2, 1],
                }}
                className="absolute text-white text-2xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-light tracking-normal leading-tight drop-shadow-lg font-tanker whitespace-normal sm:whitespace-nowrap text-center px-4 w-full max-w-full"
                style={{
                  textShadow: `
                2px 2px 4px #000000AA,
                0 4px 18px #1a232c99,
                2px 4px 0px #33333399,
                0px 1px 0px #fff,
                0px 2px 0px #fff
              `,
                }}
              >
                {H2_TEXTS[index]}
              </motion.h2>
            </AnimatePresence>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
            className="text-white text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-light leading-tight mb-6 sm:mb-8 drop-shadow-lg max-w-4xl font-switzer"
          >
            Find the perfect way to appreciate your clients and employees with
            Baharnani Advertising, as we are one of the most trusted suppliers
            of corporate gifts in Dubai, Abu Dhabi, and across the UAE. Check
            out our below items, as we offer the best promotional gifts that
            have a variety of ranges, from luxury to customized and branded
            gifts for every occasion.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            ref={buttonRef}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9, ease: "easeOut" }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mt-4 sm:mt-6 w-full max-w-full px-4"
          >
            <motion.div
              whileHover={{ x: 8 }}
              whileTap={{ scale: 0.96 }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 20,
              }}
              className="w-full sm:w-fit"
            >
              <Link to="/products">
                <CustomButton
                  text="Explore our products"
                  className="h-[50px] w-full sm:w-fit bg-white! text-black! font-tanker! justify-center sm:justify-start"
                />
              </Link>
            </motion.div>
            <motion.div
              whileHover={{ x: 8 }}
              whileTap={{ scale: 0.96 }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 20,
              }}
              className="w-full sm:w-fit"
            >
              <Link to="/contact-us">
                <CustomButton
                  text="Get a quote"
                  className="h-[50px] w-full sm:w-fit bg-transparent! border! border-white! text-white! font-tanker! justify-center sm:justify-start"
                />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Dot Pagination */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2 sm:gap-3">
        {IMAGES.map((_, i) => (
          <button
            key={i}
            onClick={() => goToSlide(i)}
            className={`transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/50 ${i === index
              ? "w-8 h-3 sm:w-10 sm:h-3.5 rounded-full bg-[#499F68]"
              : "w-3 h-3 sm:w-3.5 sm:h-3.5 rounded-full bg-[#D9D9D9] hover:bg-[#C0C0C0]"
              }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
