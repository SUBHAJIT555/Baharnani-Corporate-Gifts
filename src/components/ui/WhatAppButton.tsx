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
  const phoneNumber = "+971551061045";
  const message = "Hello! I'm interested in your services.";

  // const handleWhatsAppClick = () => {
  //   // Replace with your WhatsApp number
  //   const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
  //     message
  //   )}`;
  //   self.open(whatsappUrl, "_blank");
  // };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.a
          href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(
            message
          )}`}
          initial={{ opacity: 0, y: 200 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 200 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-24 right-4 sm:right-8 p-3 rounded-md bg-[#080f0f]/30 backdrop-blur-sm text-[#e1e1e1] border border-[#e1e1e1] hover:bg-[#ffffff] hover:text-[#499F68] hover:border-[#e1e1e1] transition-colors duration-300 z-50 "
          aria-label="Contact on WhatsApp"
        >
          <IoLogoWhatsapp className="md:size-7 size-5" />
        </motion.a>
      )}
    </AnimatePresence>
  );
};

export default WhatsAppButton;
