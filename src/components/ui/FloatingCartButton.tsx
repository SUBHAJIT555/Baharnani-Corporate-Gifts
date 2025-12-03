import { motion, AnimatePresence } from "framer-motion";
import { ShoppingCart } from "lucide-react";
import { Link } from "react-router";
import { useQuote } from "../../contexts/QuoteContext";

const FloatingCartButton = () => {
  const { getTotalItems } = useQuote();
  const totalItems = getTotalItems();

  return (
    <AnimatePresence>
      {totalItems > 0 && (
        <motion.div
          initial={{ opacity: 0, scale: 0, x: 100 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          exit={{ opacity: 0, scale: 0, x: 100 }}
          transition={{ duration: 0.3, type: "spring", stiffness: 200 }}
          className="fixed top-20 right-4 sm:right-8 z-50"
        >
          <Link
            to="/quote"
            className="relative flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#0077b6] hover:bg-[#005a8b] text-white shadow-lg hover:shadow-xl transition-all duration-300 group"
            aria-label="View quote cart"
          >
            <ShoppingCart className="w-6 h-6 sm:w-7 sm:h-7" />
            {totalItems > 0 && (
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring" }}
                className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-6 h-6 sm:w-7 sm:h-7 flex items-center justify-center border-2 border-white shadow-md"
              >
                {totalItems > 9 ? "9+" : totalItems}
              </motion.span>
            )}
            {/* Tooltip */}
            <span className="absolute right-full mr-3 px-3 py-2 bg-[#080f0f] text-white text-sm rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
              View Quote Cart ({totalItems}{" "}
              {totalItems === 1 ? "item" : "items"})
            </span>
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FloatingCartButton;
