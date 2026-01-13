import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { useLenisContext } from "../../contexts/LenisContext";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { lenis } = useLenisContext();

  // Set the scroll event listener
  useEffect(() => {
    // Show button when page is scrolled up to given distance
    const checkVisibility = (scrollPosition: number) => {
      if (scrollPosition > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    // Lenis scroll handler
    const handleLenisScroll = (e: { scroll: number }) => {
      checkVisibility(e.scroll);
    };

    // Native scroll handler
    const handleNativeScroll = () => {
      checkVisibility(self.scrollY);
    };

    if (lenis) {
      lenis.on("scroll", handleLenisScroll);
      // Initial check
      checkVisibility(lenis.scroll);
      return () => {
        lenis.off("scroll", handleLenisScroll);
      };
    } else {
      self.addEventListener("scroll", handleNativeScroll);
      // Initial check
      handleNativeScroll();
      return () => {
        self.removeEventListener("scroll", handleNativeScroll);
      };
    }
  }, [lenis]);

  // Scroll to top smoothly
  const scrollToTop = () => {
    if (lenis) {
      lenis.scrollTo(0, { duration: 1.5 });
    } else {
      self.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, y: 200 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 200 }}
          transition={{ duration: 0.3 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-4 sm:right-8 p-2 rounded-md bg-[#080f0f]/30 backdrop-blur-sm text-[#e1e1e1] border border-[#e1e1e1] shadow-lg hover:bg-[#080f0f] transition-colors duration-300 z-50 hover:text-[#e1e1e1] hover:border-[#e1e1e1]"
          aria-label="Scroll to top"
        >
          <ArrowUp className="md:size-7 size-5" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop;
