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
  const phoneNumber = "+971556545950";
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
        <motion.div
          initial={{ opacity: 0, y: 200 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 200 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-20 right-4 sm:right-8 z-50 group overflow-visible"
        >
          <a
            href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(
              message
            )}`}
            className="relative inline-block p-2 rounded-md bg-white backdrop-blur-sm text-green-600 border border-[#e1e1e1] shadow-lg hover:bg-green-500 transition-colors duration-300 z-50 hover:text-[#e1e1e1] hover:border-[#e1e1e1]  "
            aria-label="Contact on WhatsApp"
          >
            <IoLogoWhatsapp className="md:size-7 size-5" />
            {/* Chat bubble tooltip */}
            <div className="absolute top-full right-0 mt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-out transform group-hover:translate-y-0 -translate-y-2 pointer-events-none z-50">
              <div className="relative bg-white text-gray-800 px-5 py-3 rounded-md border border-gray-200 whitespace-nowrap font-switzer text-sm">
                Connect through WhatsApp for faster response
                {/* Chat bubble tail pointing up */}
                {/* <div className="absolute bottom-full right-4 -mb-1">
                  <div className="w-4 h-4 bg-white border-l border-t border-gray-200 transform rotate-45 origin-center"></div>
                </div> */}
              </div>
            </div>
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default WhatsAppButton;
