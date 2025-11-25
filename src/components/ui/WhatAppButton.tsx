import { motion, AnimatePresence } from "framer-motion";
import { IoLogoWhatsapp } from "react-icons/io";

import { useEffect, useState } from "react";

const WhatsAppButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled up to given distance
  const toggleVisibility = () => {
    if (self.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Set the scroll event listener
  useEffect(() => {
    self.addEventListener("scroll", toggleVisibility);
    return () => {
      self.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const handleWhatsAppClick = () => {
    // Replace with your WhatsApp number
    const phoneNumber = "+971558490911";
    const message = "Hello! I'm interested in your services.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    self.open(whatsappUrl, "_blank");
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, y: 200 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 200 }}
          transition={{ duration: 0.3 }}
          onClick={handleWhatsAppClick}
          className="fixed bottom-24 right-4 sm:right-8 p-3 rounded-full bg-[#080f0f]/30 backdrop-blur-sm text-[#e1e1e1] border border-[#e1e1e1] hover:bg-[#080f0f] hover:text-[#e1e1e1] hover:border-[#e1e1e1] transition-colors duration-300 z-50"
          aria-label="Contact on WhatsApp"
        >
          <IoLogoWhatsapp className="w-7 h-7" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default WhatsAppButton;
