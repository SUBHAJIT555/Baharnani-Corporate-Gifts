import { useEffect, useState } from "react";
import type { Product } from "../services/api";
import { motion } from "framer-motion";
import { Link } from "react-router";
import { cn, getProductUrl } from "../lib/utilts";
import { QuantitySelector } from "../pages/Shop";
import { BsCart4 } from "react-icons/bs";

// Product Card Component (Grid View)
export interface ProductCardProps {
  product: Product;
  index: number;
  onAddToQuote: (
    product: Product,
    quantity: number,
    e?: React.MouseEvent
  ) => void;
  isInQuote: boolean;
  currentQuantity: number;
}

export const ProductCard = ({
  product,
  index,
  onAddToQuote,
  isInQuote,
  currentQuantity,
}: ProductCardProps) => {
  const [quantity, setQuantity] = useState(currentQuantity);

  useEffect(() => {
    setQuantity(currentQuantity);
  }, [currentQuantity]);

  const handleAddToQuote = (e: React.MouseEvent) => {
    onAddToQuote(product, quantity, e);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="bg-[#e1e1e1] rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col"
    >
      {/* Product Image */}
      <Link
        to={getProductUrl(product)}
        className="relative w-full h-48 sm:h-52 md:h-56 lg:h-60 overflow-hidden bg-gray-200 cursor-pointer block"
      >
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
        />
      </Link>

      {/* Product Content */}
      <div className="p-4 sm:p-5 md:p-6 flex flex-col grow">
        {/* Product Title */}
        <Link
          to={getProductUrl(product)}
          className="text-sm font-switzer font-bold text-textcolor mb-4 sm:mb-5 grow line-clamp-1  cursor-pointer"
        >
          {product.name}
        </Link>

        {/* Quantity Selector and Add to Quote Button */}
        <div className="space-y-3">
          <QuantitySelector
            quantity={quantity}
            onQuantityChange={setQuantity}
          />
          <button
            onClick={handleAddToQuote}
            className={cn(
              "group relative w-full font-switzer font-semibold py-2.5 sm:py-3 px-4 rounded-md transition-colors duration-200 text-sm sm:text-base overflow-hidden",
              "bg-textcolor hover:bg-textcolor/70 text-white"
            )}
          >
            <span
              className={`inline-block transition-all duration-300 ease-in-out ${
                isInQuote
                  ? ""
                  : "group-hover:-translate-y-full group-hover:opacity-0"
              }`}
            >
              {isInQuote ? "Update Quote" : "Add to Quote"}
            </span>
            {!isInQuote && (
              <BsCart4 className="absolute left-1/2 top-1/2 w-5 h-5 -translate-x-1/2 translate-y-full opacity-0 transition-all duration-300 ease-in-out group-hover:-translate-y-1/2 group-hover:opacity-100" />
            )}
          </button>
        </div>
      </div>
    </motion.div>
  );
};
