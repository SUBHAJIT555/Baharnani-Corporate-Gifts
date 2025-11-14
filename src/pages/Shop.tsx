import { useState, useMemo, useEffect } from "react";
import { useAllProducts, useProductCategories, useProductsByCategory } from "../hooks/useProducts";
import { useQuote } from "../contexts/QuoteContext";
import type { Product } from "../services/api";
import { FiGrid, FiList } from "react-icons/fi";
import { IoChevronForward, IoChevronBack } from "react-icons/io5";
import { HiMinus, HiPlus } from "react-icons/hi";
import { motion } from "framer-motion";
import { cn } from "../lib/utilts";
import Loading from "../components/ui/Loading";

type ViewMode = "grid" | "list";

const Shop = () => {
    const [selectedCategory, setSelectedCategory] = useState<number | null>(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [viewMode, setViewMode] = useState<ViewMode>("grid");
    const [sortBy] = useState<string>("default");
    const perPage = 12;

    // Fetch data
    const { data: productsData, isLoading, error } = useAllProducts(currentPage, perPage);
    const { data: categories, isLoading: categoriesLoading } = useProductCategories();
    const { data: productsByCategory, isLoading: categoryLoading } = useProductsByCategory(selectedCategory || 0);

    // Reset page when category changes
    const handleCategoryChange = (categoryId: number | null) => {
        setSelectedCategory(categoryId);
        setCurrentPage(1);
    };

    // Determine which products to display
    const displayedProducts = useMemo(() => {
        if (selectedCategory === null) {
            return productsData?.products || [];
        }
        return productsByCategory || [];
    }, [productsData, productsByCategory, selectedCategory]);

    // Get pagination info
    const paginationInfo = useMemo(() => {
        if (selectedCategory === null) {
            return {
                currentPage: productsData?.page || 1,
                totalPages: productsData?.total_pages || 1,
                total: productsData?.total || 0,
            };
        }
        // For category products, we might need to calculate pages
        // For now, assume single page for category products
        const categoryProducts = productsByCategory || [];
        return {
            currentPage: 1,
            totalPages: 1,
            total: categoryProducts.length,
        };
    }, [productsData, productsByCategory, selectedCategory]);

    // Sort products
    const sortedProducts = useMemo(() => {
        const products = [...displayedProducts];
        switch (sortBy) {
            case "name-asc":
                return products.sort((a, b) => a.name.localeCompare(b.name));
            case "name-desc":
                return products.sort((a, b) => b.name.localeCompare(a.name));
            default:
                return products;
        }
    }, [displayedProducts, sortBy]);

    const handlePageChange = (newPage: number) => {
        setCurrentPage(newPage);
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const { addToQuote, isInQuote, items, updateQuantity } = useQuote();

    const handleAddToQuote = (product: Product, quantity: number, e?: React.MouseEvent) => {
        e?.stopPropagation();
        if (isInQuote(product.id)) {
            updateQuantity(product.id, quantity);
        } else {
            addToQuote(product, quantity);
        }
    };

    const getProductQuantity = (productId: number): number => {
        const item = items.find((item) => item.id === productId);
        return item ? item.quantity : 1;
    };

    if (isLoading || categoriesLoading) {
        return (
            <Loading
                fullScreen
                size="lg"
                message="Loading products..."
            />
        );
    }

    if (error) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-xl text-red-500">Error: {error.message}</div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Banner Section */}
            <section className="relative w-full bg-linear-to-r from-textcolor via-textcolor/90 to-textcolor/80 overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div
                        className="absolute inset-0"
                        style={{
                            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                        }}
                    />
                </div>
                <div className="relative w-full max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 py-12 sm:py-16 md:py-20 lg:py-24">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="max-w-4xl"
                    >
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-tanker text-white leading-tight mb-4 sm:mb-6">
                            Shop Corporate Gifts
                        </h1>
                        <div className="w-20 sm:w-24 h-1 bg-white/80 rounded-md mb-4 sm:mb-6" />
                        <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-switzer text-white/90 leading-relaxed max-w-3xl">
                            Discover our extensive collection of premium corporate gifts in Dubai. From eco-friendly essentials to luxury accessories, find the perfect gift for every business occasion.
                        </p>
                    </motion.div>
                </div>
            </section>

            <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 py-8">
                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Sidebar - Categories */}
                    <aside className="w-full lg:w-64 xl:w-80 shrink-0">
                        <div className="bg-white border border-gray-200 rounded-lg p-6 sticky top-8">
                            <h2 className="text-2xl font-tanker text-textcolor mb-6">All Categories</h2>
                            <ul className="space-y-2">
                                <li>
                                    <button
                                        onClick={() => handleCategoryChange(null)}
                                        className={cn(
                                            "w-full text-left px-4 py-2 rounded-md transition-colors duration-200 font-switzer",
                                            selectedCategory === null
                                                ? "bg-textcolor text-white font-semibold"
                                                : "text-textcolor hover:bg-gray-100"
                                        )}
                                    >
                                        All Products
                                    </button>
                                </li>
                                {categories?.map((category) => (
                                    <li key={category.id}>
                                        <button
                                            onClick={() => handleCategoryChange(category.id)}
                                            className={cn(
                                                "w-full text-left px-4 py-2 rounded-md transition-colors duration-200 font-switzer flex items-center justify-between",
                                                selectedCategory === category.id
                                                    ? "bg-textcolor text-white font-semibold"
                                                    : "text-textcolor hover:bg-gray-100"
                                            )}
                                        >
                                            <span>{category.name}</span>
                                            <span className="text-sm opacity-75">({category.product_count})</span>
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </aside>

                    {/* Main Content */}
                    <main className="flex-1">
                        {/* Header with Sort and View Toggle */}
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-end gap-4 mb-6">
                            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                                {/* Sort Dropdown */}
                                {/* <div className="flex items-center gap-2">
                                    <label htmlFor="sort" className="text-sm font-switzer text-textcolor whitespace-nowrap">
                                        Sort by:
                                    </label>
                                    <select
                                        id="sort"
                                        value={sortBy}
                                        onChange={(e) => setSortBy(e.target.value)}
                                        className="px-4 py-2 border border-gray-300 rounded-md text-sm font-switzer text-textcolor focus:outline-none focus:ring-2 focus:ring-textcolor focus:border-transparent"
                                    >
                                        <option value="default">Default sorting</option>
                                        <option value="name-asc">Name: A to Z</option>
                                        <option value="name-desc">Name: Z to A</option>
                                    </select>
                                </div> */}

                                {/* View Toggle */}
                                <div className="flex items-center gap-2 border border-gray-300 rounded-md overflow-hidden">
                                    <button
                                        onClick={() => setViewMode("grid")}
                                        className={cn(
                                            "p-2 transition-colors duration-200",
                                            viewMode === "grid"
                                                ? "bg-textcolor text-white"
                                                : "bg-white text-textcolor hover:bg-gray-100"
                                        )}
                                        aria-label="Grid view"
                                    >
                                        <FiGrid className="w-5 h-5" />
                                    </button>
                                    <button
                                        onClick={() => setViewMode("list")}
                                        className={cn(
                                            "p-2 transition-colors duration-200",
                                            viewMode === "list"
                                                ? "bg-textcolor text-white"
                                                : "bg-white text-textcolor hover:bg-gray-100"
                                        )}
                                        aria-label="List view"
                                    >
                                        <FiList className="w-5 h-5" />
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Products Grid/List */}
                        {categoryLoading ? (
                            <div className="flex items-center justify-center py-12">
                                <Loading size="md" message="Loading products..." />
                            </div>
                        ) : sortedProducts.length === 0 ? (
                            <div className="text-center py-12">
                                <div className="text-lg text-textcolor">No products found</div>
                            </div>
                        ) : (
                            <>
                                {viewMode === "grid" ? (
                                    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6 mb-8">
                                        {sortedProducts.map((product, index) => (
                                            <ProductCard
                                                key={product.id}
                                                product={product}
                                                index={index}
                                                onAddToQuote={handleAddToQuote}
                                                isInQuote={isInQuote(product.id)}
                                                currentQuantity={getProductQuantity(product.id)}
                                            />
                                        ))}
                                    </div>
                                ) : (
                                    <div className="space-y-4 mb-8">
                                        {sortedProducts.map((product, index) => (
                                            <ProductCardList
                                                key={product.id}
                                                product={product}
                                                index={index}
                                                onAddToQuote={handleAddToQuote}
                                                isInQuote={isInQuote(product.id)}
                                                currentQuantity={getProductQuantity(product.id)}
                                            />
                                        ))}
                                    </div>
                                )}

                                {/* Pagination */}
                                {selectedCategory === null && paginationInfo.totalPages > 1 && (
                                    <div className="flex items-center justify-center gap-4 mt-8">
                                        <button
                                            onClick={() => handlePageChange(paginationInfo.currentPage - 1)}
                                            disabled={paginationInfo.currentPage === 1}
                                            className={cn(
                                                "p-2 rounded-full border border-gray-300 transition-colors duration-200",
                                                paginationInfo.currentPage === 1
                                                    ? "opacity-50 cursor-not-allowed text-gray-400"
                                                    : "text-textcolor hover:bg-gray-100"
                                            )}
                                            aria-label="Previous page"
                                        >
                                            <IoChevronBack className="w-5 h-5" />
                                        </button>

                                        <div className="flex items-center gap-2 font-switzer text-textcolor">
                                            <span className="px-4 py-2 bg-textcolor text-white rounded-md">
                                                {paginationInfo.currentPage}
                                            </span>
                                            <span className="px-2">/</span>
                                            <span className="px-2">{paginationInfo.totalPages}</span>
                                        </div>

                                        <button
                                            onClick={() => handlePageChange(paginationInfo.currentPage + 1)}
                                            disabled={paginationInfo.currentPage === paginationInfo.totalPages}
                                            className={cn(
                                                "p-2 rounded-full border border-gray-300 transition-colors duration-200",
                                                paginationInfo.currentPage === paginationInfo.totalPages
                                                    ? "opacity-50 cursor-not-allowed text-gray-400"
                                                    : "text-textcolor hover:bg-gray-100"
                                            )}
                                            aria-label="Next page"
                                        >
                                            <IoChevronForward className="w-5 h-5" />
                                        </button>
                                    </div>
                                )}
                            </>
                        )}
                    </main>
                </div>
            </div>
        </div>
    );
};

// Quantity Selector Component
interface QuantitySelectorProps {
    quantity: number;
    onQuantityChange: (newQuantity: number) => void;
    min?: number;
    max?: number;
}

const QuantitySelector = ({ quantity, onQuantityChange, min = 1, max = 999 }: QuantitySelectorProps) => {
    const handleDecrease = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (quantity > min) onQuantityChange(quantity - 1);
    };

    const handleIncrease = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (quantity < max) onQuantityChange(quantity + 1);
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.stopPropagation();
        const val = Number(e.target.value);
        if (!val) return onQuantityChange(min);
        onQuantityChange(Math.min(max, Math.max(min, val)));
    };

    return (
        <div className="flex items-center rounded-md bg-white overflow-hidden border border-gray-300 select-none">
            <button
                onClick={handleDecrease}
                disabled={quantity <= min}
                className={cn(
                    "w-10 h-10 flex items-center justify-center hover:bg-gray-100 transition-colors",
                    quantity <= min && "opacity-50 cursor-not-allowed"
                )}
            >
                <HiMinus className="w-4 h-4 text-textcolor" />
            </button>

            <input
                type="number"
                value={quantity}
                onChange={handleInputChange}
                min={min}
                max={max}
                className=" flex-1 text-center font-switzer text-textcolor border-x border-gray-300 no-spinner outline-none focus:outline-none focus:ring-0"
            />

            <button
                onClick={handleIncrease}
                disabled={quantity >= max}
                className={cn(
                    "w-10 h-10 flex items-center justify-center hover:bg-gray-100 transition-colors",
                    quantity >= max && "opacity-50 cursor-not-allowed"
                )}
            >
                <HiPlus className="w-4 h-4 text-textcolor" />
            </button>
        </div>
    );
};

// const QuantitySelector = ({ quantity, onQuantityChange, min = 1, max = 999 }: QuantitySelectorProps) => {
//     const handleDecrease = (e: React.MouseEvent) => {
//         e.stopPropagation();
//         if (quantity > min) {
//             onQuantityChange(quantity - 1);
//         }
//     };

//     const handleIncrease = (e: React.MouseEvent) => {
//         e.stopPropagation();
//         if (quantity < max) {
//             onQuantityChange(quantity + 1);
//         }
//     };

//     const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//         e.stopPropagation();
//         const value = parseInt(e.target.value) || min;
//         const clampedValue = Math.max(min, Math.min(max, value));
//         onQuantityChange(clampedValue);
//     };

//     return (
//         <div className="flex items-center rounded-md bg-white overflow-hidden border border-gray-300">
//             <button
//                 onClick={handleDecrease}
//                 disabled={quantity <= min}
//                 className={cn(
//                     "px-3 py-2 bg-white hover:bg-gray-100 transition-colors duration-200",
//                     quantity <= min && "opacity-50 cursor-not-allowed"
//                 )}
//             >
//                 <HiMinus className="w-4 h-4 text-textcolor" />
//             </button>
//             <input
//                 type="number"
//                 value={quantity}
//                 onChange={handleInputChange}
//                 min={min}
//                 max={max}
//                 className="w-16 px-2 py-2 text-center border-x border-gray-300 focus:outline-none focus:ring-2 focus:ring-textcolor font-switzer text-textcolor"
//             />
//             <button
//                 onClick={handleIncrease}
//                 disabled={quantity >= max}
//                 className={cn(
//                     "px-3 py-2 bg-white hover:bg-gray-100 transition-colors duration-200",
//                     quantity >= max && "opacity-50 cursor-not-allowed"
//                 )}
//             >
//                 <HiPlus className="w-4 h-4 text-textcolor" />
//             </button>
//         </div>
//     );
// };

// Product Card Component (Grid View)
interface ProductCardProps {
    product: Product;
    index: number;
    onAddToQuote: (product: Product, quantity: number, e?: React.MouseEvent) => void;
    isInQuote: boolean;
    currentQuantity: number;
}

const ProductCard = ({ product, index, onAddToQuote, isInQuote, currentQuantity }: ProductCardProps) => {
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
            <div className="relative w-full h-48 sm:h-52 md:h-56 lg:h-60 overflow-hidden bg-gray-200 cursor-pointer">
                <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Product Content */}
            <div className="p-4 sm:p-5 md:p-6 flex flex-col grow">
                {/* Product Title */}
                <h3 className="text-lg sm:text-xl md:text-2xl font-tanker text-textcolor mb-4 sm:mb-5 grow line-clamp-2">
                    {product.name}
                </h3>

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

// Product Card Component (List View)
const ProductCardList = ({ product, index, onAddToQuote, isInQuote, currentQuantity }: ProductCardProps) => {
    const [quantity, setQuantity] = useState(currentQuantity);

    useEffect(() => {
        setQuantity(currentQuantity);
    }, [currentQuantity]);

    const handleAddToQuote = (e: React.MouseEvent) => {
        onAddToQuote(product, quantity, e);
    };

    return (
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col sm:flex-row gap-4 sm:gap-6 p-4 sm:p-6"
        >
            {/* Product Image */}
            <div className="relative w-full sm:w-32 md:w-40 h-32 sm:h-32 md:h-40 overflow-hidden bg-gray-200 rounded-lg shrink-0 cursor-pointer">
                <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Product Content - Middle */}
            <div className="flex flex-col flex-1 justify-center">
                {/* Product Title */}
                <h3 className="text-base sm:text-lg md:text-xl font-tanker text-textcolor mb-2 line-clamp-2 cursor-pointer hover:underline">
                    {product.name}
                </h3>
            </div>

            {/* Quantity and Add to Quote - Right Side */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 shrink-0">
                {/* Quantity Selector */}
                <div className="w-full sm:w-auto">
                    <QuantitySelector
                        quantity={quantity}
                        onQuantityChange={setQuantity}
                    />
                </div>

                {/* Add to Quote Button */}
                <button
                    onClick={handleAddToQuote}
                    className={cn(
                        "w-full sm:w-auto px-6 py-2.5 sm:py-3 font-switzer font-semibold rounded-md transition-colors duration-200 text-sm sm:text-base whitespace-nowrap",
                        "bg-textcolor hover:bg-textcolor/70 text-white"
                    )}
                >
                    {isInQuote ? "Update Quote" : "Add to Quote"}
                </button>
            </div>
        </motion.div>
    );
};

export default Shop;
