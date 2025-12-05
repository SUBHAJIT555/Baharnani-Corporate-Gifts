import { motion, AnimatePresence } from "framer-motion";
import { ShoppingCart, Trash2 } from "lucide-react";
import { Link } from "react-router";
import { useQuote } from "../../contexts/QuoteContext";
import { useState, useRef, useEffect } from "react";

const FloatingCartButton = () => {
  const { getTotalItems, items, removeFromQuote } = useQuote();
  const totalItems = getTotalItems();
  const [isHovered, setIsHovered] = useState(false);
  const cartRef = useRef<HTMLDivElement>(null);

  // Close popup when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        cartRef.current &&
        !cartRef.current.contains(event.target as Node)
      ) {
        setIsHovered(false);
      }
    };

    if (isHovered) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isHovered]);

  return (
    <AnimatePresence>
      {totalItems > 0 && (
        <motion.div
          initial={{ opacity: 0, scale: 0, x: 100 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          exit={{ opacity: 0, scale: 0, x: 100 }}
          transition={{ duration: 0.3, type: "spring", stiffness: 200 }}
          className="fixed top-20 right-4 sm:right-8 z-50"
          ref={cartRef}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <Link
            to="/cart"
            className="relative flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#0077b6] hover:bg-[#005a8b] text-white shadow-lg hover:shadow-xl transition-all duration-300"
            aria-label="View cart"
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
          </Link>

          {/* Cart Hover Popup */}
          <AnimatePresence>
            {isHovered && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="absolute top-full right-0 mt-3 w-80 bg-bg border border-textcolor/30 rounded-lg shadow-xl z-50"
              >
                {/* Arrow pointer */}
                <div className="absolute -top-2 right-6 w-4 h-4 bg-bg border-l border-t border-textcolor/30 transform rotate-45"></div>

                {items.length === 0 ? (
                  <div className="p-6 text-center">
                    <p className="text-textcolor font-tanker text-base mb-2">
                      No products in the cart.
                    </p>
                  </div>
                ) : (
                  <div className="p-4">
                    <div className="max-h-64 overflow-y-auto space-y-3 mb-4">
                      {items.slice(0, 3).map((item) => (
                        <div
                          key={item.id}
                          className="flex items-start gap-3 p-3 border-b border-textcolor/10 last:border-0 relative"
                        >
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-16 h-16 object-cover rounded"
                          />
                          <div className="flex-1 min-w-0">
                            <p className="font-tanker text-textcolor text-sm font-medium mb-1">
                              {item.name}
                            </p>
                            <p className="font-switzer text-textcolor/70 text-xs">
                              (x{item.quantity})
                            </p>
                          </div>
                          <button
                            onClick={(e) => {
                              e.preventDefault();
                              e.stopPropagation();
                              removeFromQuote(item.id);
                            }}
                            className="absolute top-3 right-3 p-1.5 hover:bg-textcolor/10 rounded transition-colors"
                            aria-label="Remove item"
                          >
                            <Trash2 className="w-4 h-4 text-textcolor/60" />
                          </button>
                        </div>
                      ))}
                    </div>
                    <div className="flex gap-2 pt-3 border-t border-textcolor/20">
                      <Link
                        to="/cart"
                        className="flex-1 flex items-center justify-center gap-2 bg-textcolor/10 hover:bg-textcolor/20 text-textcolor font-tanker text-sm py-2.5 px-4 rounded-md transition-colors"
                        onClick={() => setIsHovered(false)}
                      >
                        View cart
                      </Link>
                      <Link
                        to="/request-quotation"
                        className="flex-1 flex items-center justify-center gap-2 bg-textcolor hover:bg-textcolor/80 text-white font-tanker text-sm font-medium py-2.5 px-4 rounded-md transition-colors"
                        onClick={() => setIsHovered(false)}
                      >
                        Checkout
                      </Link>
                    </div>
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FloatingCartButton;
