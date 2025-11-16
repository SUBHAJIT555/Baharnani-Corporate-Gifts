import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { PaginatedProductsResponse, Product, ProductCategory } from "../services/api";
import { useQuote } from "../contexts/QuoteContext";
import { FiFilter } from "react-icons/fi";
import { ImCross } from "react-icons/im";
import { IoArrowForwardOutline, IoChevronBack, IoChevronForward } from "react-icons/io5";
import { cn } from "../lib/utilts";
import Loading from "./ui/Loading";
import { ProductCard } from "./ProductCard";


interface ProductGridProps {
  productData: PaginatedProductsResponse;
  categories: ProductCategory[] | [];
  title?: string;
  isLoading: boolean;
  error: Error | null;
  subtitle?: string;
  onPageChange?: (page: number) => void;
  selectedCategory: string | null;
  setSelectedCategory?: (category: string | null) => void;
  productType?:
  | "construction"
  | "foodstuff"
  | "building"
  | "contracting"
  | "importandexport"
  | "electronicsandit"
  | "chemicalsandadditives"
  | "bestsellingitems"
  | "oilproducts"
  | "custom";

  id?: string;
}

const ProductGrid = ({
  productData,
  categories,
  isLoading,
  error,
  title,
  subtitle,
  onPageChange,
  selectedCategory,
  setSelectedCategory,
  id,
}: ProductGridProps) => {
  const { addToQuote, isInQuote, updateQuantity } = useQuote();
  const [showFloatingFilter, setShowFloatingFilter] = useState(false);
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isProductModalOpen, setIsProductModalOpen] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const lastScrollY = useRef(0);

  const products = productData?.products || [];

  const paginationInfo = productData && {
    currentPage: productData.page,
    totalPages: productData.total_pages,
    total: productData.total,
  };
  console.log("selectedCategory", selectedCategory);



  // Handle scroll to show/hide floating filter button
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const sectionElement = sectionRef.current;

      if (!sectionElement) return;

      const sectionTop = sectionElement.offsetTop;
      const sectionBottom = sectionTop + sectionElement.offsetHeight;
      const viewportHeight = window.innerHeight;

      // Show floating button when:
      // 1. User has scrolled past the initial filter area (150px from top)
      // 2. User is still within the section bounds
      // 3. User is not at the very top of the page
      if (
        currentScrollY > sectionTop + 150 &&
        currentScrollY < sectionBottom - viewportHeight &&
        currentScrollY > 100
      ) {
        setShowFloatingFilter(true);
      } else {
        setShowFloatingFilter(false);
      }

      lastScrollY.current = currentScrollY;
    };

    // Initial check
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);



  const handleAddToQuote = (product: Product, quantity: number, e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (isInQuote(product.id)) {
      updateQuantity(product.id, quantity);
    } else {
      addToQuote(product, quantity);
    }
  };

  const handleCloseModal = () => {
    setIsProductModalOpen(false);
    // Small delay to allow exit animation before clearing product
    setTimeout(() => setSelectedProduct(null), 300);
  };

  const handleCategoryFilter = (categorySlug: string | null) => {
    setSelectedCategory?.(categorySlug);
    // Close bottom sheet after selection on mobile
    if (window.innerWidth < 1024) {
      setIsBottomSheetOpen(false);
      // Scroll to top of product grid section after bottom sheet closes
      setTimeout(() => {
        if (sectionRef.current) {
          const sectionTop = sectionRef.current.offsetTop;
          window.scrollTo({
            top: sectionTop - 20, // Small offset for better UX
            behavior: "smooth",
          });
        }
      }, 350); // Wait for bottom sheet animation to complete
    }
  };

  const FilterButton = ({
    category,
    isAll = false,
  }: {
    category: ProductCategory | null;
    isAll?: boolean;
  }) => (
    <button
      onClick={() => handleCategoryFilter(category?.slug || null)}
      className={cn(`px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-md font-switzer font-medium text-sm sm:text-base transition-all duration-200 whitespace-nowrap bg-gray-200 text-textcolor hover:bg-gray-300`, selectedCategory === category?.slug || selectedCategory === null && isAll
        ? "bg-textcolor text-white shadow-md"
        : "bg-gray-200 text-textcolor hover:bg-gray-300"
      )}
    >
      {isAll ? "All" : category?.name}
    </button>
  );


  return (
    <section
      ref={sectionRef}
      id={id}
      className="w-full py-6 sm:py-8 md:py-12 lg:py-16 relative"
    >
      <div className="w-full px-3 sm:px-4 md:px-6 lg:px-8 xl:px-12 2xl:px-16 max-w-[1920px] mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-tanker text-textcolor leading-tight mb-3 sm:mb-4 md:mb-5 lg:mb-6">
          {title}{" "}
          <IoArrowForwardOutline className="inline-block align-middle rotate-45" />
        </h2>
        {subtitle && (
          <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-switzer tracking-widest sm:tracking-wider md:tracking-widest text-textcolor font-medium mb-3 sm:mb-4 md:mb-5 lg:mb-6">
            {subtitle}
          </p>
        )}

        {/* Desktop Filter-Flex Wrap (lg and above) */}
        {categories && categories.length > 0 && (
          <>
            {/* Desktop Filter Buttons */}
            <div className="hidden lg:block mb-6 sm:mb-8 md:mb-10">
              <div className="flex flex-wrap gap-2 sm:gap-3 md:gap-4">
                <FilterButton category={null} isAll />
                {categories.map((category) => (
                  <FilterButton key={category.id} category={category} />
                ))}
              </div>
            </div>

            {/* Mobile/Tablet Sticky Horizontal Scrollable Filter */}
            <div className="lg:hidden sticky top-0 z-40 bg-white/95 backdrop-blur-sm py-3 mb-4 -mx-3 sm:-mx-4 md:-mx-6 px-3 sm:px-4 md:px-6 shadow-sm">
              <div className="overflow-x-auto scrollbar-hide">
                <div className="flex gap-2 sm:gap-3 min-w-max">
                  <FilterButton category={null} isAll />
                  {categories.map((category) => (
                    <FilterButton key={category.id} category={category} />
                  ))}
                </div>
              </div>
            </div>
          </>
        )}

        {/* Floating Filter Button-Appears when scrolling on all screen sizes */}
        <AnimatePresence>
          {showFloatingFilter && categories && categories.length > 0 && (
            <motion.button
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 100, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => {
                if (window.innerWidth < 1024) {
                  setIsBottomSheetOpen(true);
                } else {
                  // On desktop/tablet, scroll to filter section
                  if (sectionRef.current) {
                    const sectionTop = sectionRef.current.offsetTop;
                    window.scrollTo({
                      top: sectionTop - 20,
                      behavior: "smooth",
                    });
                  }
                }
              }}
              className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 bg-textcolor/50 backdrop-blur-sm text-white px-6 py-3 rounded-md shadow-lg font-tanker tracking-widest flex items-center gap-2 border border-px border-white"
            >
              <FiFilter className="h-5 w-5" />
              Filter
            </motion.button>
          )}
        </AnimatePresence>

        {/* Bottom Sheet Modal (Mobile/Tablet) */}
        <AnimatePresence>
          {isBottomSheetOpen && (
            <>
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                onClick={() => setIsBottomSheetOpen(false)}
                className="lg:hidden fixed inset-0 bg-black/50 z-50"
              />
              {/* Bottom Sheet */}
              <motion.div
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "100%" }}
                transition={{ type: "spring", damping: 25, stiffness: 200 }}
                className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-white rounded-t-3xl shadow-2xl max-h-[80vh] overflow-hidden"
              >
                <div className="p-4 sm:p-6">
                  {/* Handle Bar */}
                  <div className="flex justify-center mb-4">
                    <div className="w-12 h-1.5 bg-gray-300 rounded-full" />
                  </div>

                  {/* Header */}
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl font-tanker text-textcolor">
                      Filter by Category
                    </h3>
                    <button
                      onClick={() => setIsBottomSheetOpen(false)}
                      className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-textcolor"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>

                  {/* Filter Options */}
                  <div className="overflow-y-auto max-h-[60vh]">
                    <div className="flex flex-col gap-3">
                      <button
                        onClick={() => handleCategoryFilter(null)}
                        className={`w-full px-5 py-3.5 rounded-lg font-switzer font-medium text-left transition-all duration-200 ${selectedCategory === null
                          ? "bg-textcolor text-white shadow-md"
                          : "bg-gray-100 text-textcolor hover:bg-gray-200"
                          } `}
                      >
                        All Categories
                      </button>
                      {categories && categories.map((category) => (
                        <button
                          key={category.id}
                          onClick={() => handleCategoryFilter(category.slug)}
                          className={`w-full px-5 py-3.5 rounded-lg font-switzer font-medium text-left transition-all duration-200 ${selectedCategory === category.slug
                            ? "bg-textcolor text-white shadow-md"
                            : "bg-gray-100 text-textcolor hover:bg-gray-200"
                            } `}
                        >
                          {category.name}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>


        {isLoading ? (<div className="min-h-[550px] flex items-center justify-center"><Loading size="md" message="Loading products..." /></div>) : (
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 sm:gap-5 md:gap-6">
            {products?.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}

                className="bg-[#e1e1e1] rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col "
              >
                <ProductCard
                  key={product.id}
                  product={product}
                  index={index}
                  onAddToQuote={handleAddToQuote}
                  isInQuote={isInQuote(product.id)}
                  currentQuantity={1}
                />
              </motion.div>
              // <motion.div
              //   key={product.id}
              //   initial={{ opacity: 0, y: 20 }}
              //   animate={{ opacity: 1, y: 0 }}
              //   transition={{ duration: 0.4, delay: index * 0.05 }}

              //   className="bg-[#e1e1e1] rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col "
              // >

              //   {/* Product Image */}
              //   <Link to={getProductUrl(product)} className="relative w-full h-48 sm:h-52 md:h-56 lg:h-60 overflow-hidden bg-gray-200">
              //     <img
              //       src={product.image}
              //       alt={product.name}
              //       className="w-full h-full object-cover"
              //     />
              //   </Link>

              //   {/* Product Content */}
              //   <div className="p-4 sm:p-5 md:p-6 flex flex-col grow">
              //     {/* Category Badge */}
              //     <span className="text-xs font-switzer text-textcolor/60 mb-2 uppercase tracking-wide line-clamp-1 overflow-hidden text-ellipsis">
              //       {product.categories[0]}
              //     </span>

              //     {/* Product Title */}
              //     <h3 className="text-sm font-tanker text-textcolor mb-4 sm:mb-5 grow line-clamp-1 overflow-hidden text-ellipsis">
              //       <Link to={getProductUrl(product)}>
              //         {product.name}
              //       </Link>
              //     </h3>

              //     {/* Add to Quote Button */}
              //     <div className="space-y-3">
              //       <QuantitySelector
              //         quantity={quantity}
              //         onQuantityChange={setQuantity}
              //       />
              //       <button
              //         disabled={isInQuote(product.id)}
              //         className={`w-full font-switzer font-semibold py-2.5 sm:py-3 px-4 rounded-md transition-colors duration-200 text-sm sm:text-base ${isInQuote(product.id)
              //           ? "bg-gray-400 text-white cursor-not-allowed opacity-60"
              //           : "bg-textcolor hover:bg-textcolor/70 text-white "
              //           } `}
              //         onClick={(e) => {
              //           handleAddToQuote(product, e);
              //         }}
              //       >
              //         {isInQuote(product.id) ? "Added to Quote" : "Add to Quote"}
              //       </button>
              //     </div>
              //   </div>

              // </motion.div>
            ))}
          </div>
        )}


        {/* Pagination */}
        {paginationInfo && paginationInfo.totalPages > 1 && onPageChange && (
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={() => onPageChange(paginationInfo.currentPage - 1)}
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
              onClick={() => onPageChange(paginationInfo.currentPage + 1)}
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

        {error && (
          <div>Error: {error?.message}</div>
        )}

        {/* Product Detail Modal */}
        <AnimatePresence>
          {isProductModalOpen && selectedProduct && (
            <>
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                onClick={handleCloseModal}
                className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50"
              />

              {/* Modal Content */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 50 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 50 }}
                transition={{
                  type: "spring",
                  damping: 30,
                  stiffness: 300,
                  duration: 0.3,
                }}
                className="fixed inset-0 sm:inset-4 md:inset-8 lg:inset-16 xl:inset-20 z-50 flex items-end sm:items-center justify-center"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="w-full h-[95vh] sm:h-full sm:max-h-[90vh] max-w-6xl bg-bg  shadow-2xl overflow-hidden flex flex-col relative">
                  {/* Close Button-Inside modal for desktop */}
                  <button
                    onClick={handleCloseModal}
                    className="hidden lg:block absolute top-4 right-4 z-10 p-2.5 bg-red-500 hover:bg-textcolor rounded-full shadow-lg transition-colors"
                    aria-label="Close modal"
                  >
                    <ImCross className="h-6 w-6 text-bg" />
                  </button>

                  {/* Modal Content-Scrollable */}
                  <div className="flex-1 overflow-y-auto">
                    <div className="flex flex-col lg:flex-row h-full">
                      {/* Image Section */}
                      <div className="w-full lg:w-1/2 h-56 sm:h-72 md:h-80 lg:h-full bg-gray-100 shrink-0">
                        <img
                          src={selectedProduct.image}
                          alt={selectedProduct.name}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      {/* Content Section */}
                      <div className="w-full lg:w-1/2 p-5 sm:p-6 md:p-8 lg:p-10 flex flex-col pb-20 sm:pb-6 lg:pb-10">
                        {/* Category Badge */}
                        <span className="text-xs font-switzer text-textcolor mb-2 sm:mb-3 uppercase border border-textcolor/30 rounded-md w-fit p-1 bg-white tracking-wide">
                          {/* {selectedProduct.category?.name} */}
                        </span>

                        {/* Product Title */}
                        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-tanker text-textcolor mb-3 sm:mb-4 md:mb-6 leading-tight">
                          {selectedProduct.name}
                        </h2>

                        {/* Description/Details */}
                        <div className="mb-4 sm:mb-6 md:mb-8 flex-1">
                          <h3 className="text-base sm:text-lg md:text-xl font-tanker text-textcolor mb-2 sm:mb-3 md:mb-4">
                            Product Details :
                          </h3>
                          <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-switzer text-textcolor/80 leading-relaxed">
                            {/* {selectedProduct.description} */}
                            {/* {selectedProduct.description} */}
                          </p>
                        </div>

                        {/* Desktop Button (inside content section) */}
                        <div className="hidden lg:block mt-auto">
                          <button
                            disabled={isInQuote(selectedProduct.id)}
                            className={`w-full font-switzer font-semibold py-4 px-6 rounded-md transition-colors duration-200 text-lg ${isInQuote(selectedProduct.id)
                              ? "bg-gray-400 text-white cursor-not-allowed opacity-60"
                              : "bg-textcolor hover:bg-textcolor/70 text-white"
                              } `}
                            onClick={(e) => {
                              e.stopPropagation();
                              handleAddToQuote(selectedProduct, 1, e);
                            }}
                          >
                            {isInQuote(selectedProduct.id)
                              ? "Added to Quote"
                              : "Add to Quote"}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Sticky Button for Mobile */}
                  <div className="lg:hidden sticky bottom-0 left-0 right-0 bg-bg border-t border-gray-200 p-4 pt-3 shadow-lg z-10">
                    <button
                      disabled={isInQuote(selectedProduct.id)}
                      className={`w-full font-switzer font-semibold py-3.5 px-6 rounded-md transition-colors duration-200 text-base ${isInQuote(selectedProduct.id)
                        ? "bg-gray-400 text-white cursor-not-allowed opacity-60"
                        : "bg-textcolor hover:bg-textcolor/70 text-white"
                        } `}
                      onClick={(e) => {
                        e.stopPropagation();
                        handleAddToQuote(selectedProduct, 1, e);
                      }}
                    >
                      {isInQuote(selectedProduct.id)
                        ? "Added to Quote"
                        : "Add to Quote"}
                    </button>
                  </div>
                </div>

                {/* Close Button-Outside modal for mobile/tablet */}
                <button
                  onClick={handleCloseModal}
                  className="lg:hidden absolute top-3 right-3 sm:top-4 sm:right-4 z-50 p-2 sm:p-2.5 bg-red-500 hover:bg-textcolor rounded-full shadow-lg transition-colors"
                  aria-label="Close modal"
                >
                  <ImCross className="h-5 w-5 sm:h-6 sm:w-6 text-bg" />
                </button>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ProductGrid;
