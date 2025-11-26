import { useEffect, useState } from "react";
import type { Product } from "../services/api";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { cn, getProductUrl } from "../lib/utilts";
import { QuantitySelector } from "../pages/Shop";

// Product Card Component (Grid View)
export interface ProductCardProps {
    product: Product;
    index: number;
    onAddToQuote: (product: Product, quantity: number, e?: React.MouseEvent) => void;
    isInQuote: boolean;
    currentQuantity: number;
}

export const ProductCard = ({ product, index, onAddToQuote, isInQuote, currentQuantity }: ProductCardProps) => {
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
                            "w-full font-switzer font-semibold py-2.5 sm:py-3 px-4 rounded-md transition-colors duration-200 text-sm sm:text-base",
                            "bg-textcolor hover:bg-textcolor/70 text-white"
                        )}
                    >
                        {isInQuote ? "Update Quote" : "Add to Quote"}
                    </button>
                </div>
            </div>
        </motion.div>
    );
};