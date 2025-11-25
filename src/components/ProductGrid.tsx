import { useState, useEffect, useRef, useMemo, memo, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type {
  PaginatedProductsResponse,
  Product,
  ProductCategory,
} from "../services/api";
import { useQuote } from "../contexts/QuoteContext";
import { FiFilter } from "react-icons/fi";
import {
  IoArrowForwardOutline,
  IoChevronBack,
  IoChevronForward,
} from "react-icons/io5";
import { cn } from "../lib/utilts";
import Loading from "./ui/Loading";
import { ProductCard as RawProductCard } from "./ProductCard";

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

// ─────────────────────────────────────
// MEMOIZED CARD
// ─────────────────────────────────────
const ProductCard = memo(RawProductCard);

// ─────────────────────────────────────
// MEMOIZED FILTER BUTTON
// ─────────────────────────────────────
const FilterButton = memo(function FilterButton({
  category,
  isAll,
  selectedCategory,
  onSelect,
}: {
  category: ProductCategory | null;
  isAll?: boolean;
  selectedCategory: string | null;
  onSelect: (slug: string | null) => void;
}) {
  const slug = category?.slug ?? null;
  const active = isAll ? selectedCategory === null : selectedCategory === slug;

  return (
    <button
      onClick={() => onSelect(slug)}
      className={cn(
        "px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-md font-switzer font-medium text-sm sm:text-base transition-all whitespace-nowrap",
        active
          ? "bg-textcolor text-white shadow-md"
          : "bg-gray-200 text-textcolor hover:bg-gray-300"
      )}
    >
      {isAll ? "All" : category?.name}
    </button>
  );
});

// ─────────────────────────────────────
// MAIN COMPONENT
// ─────────────────────────────────────
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
  console.log(productData);
  const { addToQuote, isInQuote, updateQuantity } = useQuote();

  const [showFloatingFilter, setShowFloatingFilter] = useState(false);
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);

  const sectionRef = useRef<HTMLElement>(null);
  const rafRef = useRef<number | null>(null);

  const products = productData?.products ?? [];

  const paginationInfo = useMemo(
    () =>
      productData && {
        currentPage: productData.page,
        totalPages: productData.total_pages,
        total: productData.total,
      },
    [productData]
  );

  // ─────────────────────────────────────
  // SCROLL HANDLER (high-performance)
  // ─────────────────────────────────────
  useEffect(() => {
    const handleScroll = () => {
      if (rafRef.current !== null) return;

      rafRef.current = requestAnimationFrame(() => {
        const section = sectionRef.current;
        if (!section) {
          rafRef.current = null;
          return;
        }

        const scrollY = window.scrollY;
        const top = section.offsetTop;
        const bottom = top + section.offsetHeight;
        const viewport = window.innerHeight;

        const shouldShow =
          scrollY > top + 150 &&
          scrollY < bottom - viewport &&
          scrollY > 100;

        setShowFloatingFilter(shouldShow);

        rafRef.current = null;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });

    handleScroll(); // first run

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  // ─────────────────────────────────────
  // CALLBACKS
  // ─────────────────────────────────────
  const handleAddToQuote = useCallback(
    (product: Product, quantity: number, e?: React.MouseEvent) => {
      e?.stopPropagation();
      if (isInQuote(product.id)) {
        updateQuantity(product.id, quantity);
      } else {
        addToQuote(product, quantity);
      }
    },
    [addToQuote, updateQuantity, isInQuote]
  );

  const handleSelectCategory = useCallback(
    (slug: string | null) => {
      setSelectedCategory?.(slug);

      if (window.innerWidth < 1024) {
        setIsBottomSheetOpen(false);
        setTimeout(() => {
          const el = sectionRef.current;
          if (el) {
            window.scrollTo({
              top: el.offsetTop - 20,
              behavior: "smooth",
            });
          }
        }, 300);
      }
    },
    [setSelectedCategory]
  );

  // ─────────────────────────────────────
  // MEMOIZED CATEGORY BUTTONS
  // ─────────────────────────────────────
  const categoryButtons = useMemo(() => {
    if (!categories) return null;

    return (
      <>
        <FilterButton
          key="all"
          category={null}
          isAll
          selectedCategory={selectedCategory}
          onSelect={handleSelectCategory}
        />
        {categories.map((category: ProductCategory) => (
          <FilterButton
            key={category.id}
            category={category}
            selectedCategory={selectedCategory}
            onSelect={handleSelectCategory}
          />
        ))}
      </>
    );
  }, [categories, selectedCategory, handleSelectCategory]);

  // ─────────────────────────────────────
  // MEMOIZED PRODUCT LIST
  // ─────────────────────────────────────
  const productList = useMemo(
    () =>
      products.map((p: Product, i: number) => (
        <motion.div
          key={p.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: i * 0.03 }}
          className="bg-[#e1e1e1] rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col"
        >
          <ProductCard
            product={p}
            index={i}
            onAddToQuote={handleAddToQuote}
            isInQuote={isInQuote(p.id)}
            currentQuantity={1}
          />
        </motion.div>
      )),
    [products, handleAddToQuote, isInQuote]
  );

  // ─────────────────────────────────────
  // RENDER
  // ─────────────────────────────────────
  return (
    <section ref={sectionRef} id={id} className="w-full py-6 sm:py-8 md:py-12 lg:py-16 relative">
      <div className="w-full px-3 sm:px-4 md:px-6 lg:px-8 xl:px-12 max-w-[1920px] mx-auto">

        {/* TITLE */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-tanker text-textcolor mb-4">
          {title} <IoArrowForwardOutline className="inline-block rotate-45" />
        </h2>

        {subtitle && (
          <p className="text-xs sm:text-sm md:text-base lg:text-lg font-switzer tracking-widest text-textcolor mb-6">
            {subtitle}
          </p>
        )}

        {/* DESKTOP FILTERS */}
        {categories?.length > 0 && (
          <div className="hidden lg:block mb-8">
            <div className="flex flex-wrap gap-3">{categoryButtons}</div>
          </div>
        )}

        {/* MOBILE STICKY FILTER */}
        {categories?.length > 0 && (
          <div className="lg:hidden sticky top-0 z-40 bg-white/95 backdrop-blur-sm py-3 mb-4 -mx-3 px-3 shadow-sm">
            <div className="overflow-x-auto scrollbar-hide">
              <div className="flex gap-3 min-w-max">{categoryButtons}</div>
            </div>
          </div>
        )}

        {/* FLOATING FILTER BUTTON */}
        <AnimatePresence>
          {showFloatingFilter && (
            <motion.button
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 100, opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => {
                if (window.innerWidth < 1024) setIsBottomSheetOpen(true);
                else window.scrollTo({ top: sectionRef.current?.offsetTop ?? 0, behavior: "smooth" });
              }}
              className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 bg-textcolor/50 backdrop-blur-sm text-white px-6 py-3 rounded-md shadow-lg font-tanker flex items-center gap-2"
            >
              <FiFilter />
              Filter
            </motion.button>
          )}
        </AnimatePresence>

        {/* PRODUCT LIST OR LOADING */}
        {isLoading ? (
          <div className="min-h-[550px] flex items-center justify-center">
            <Loading size="md" message="Loading products..." />
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 sm:gap-5 md:gap-6">
            {productList}
          </div>
        )}

        {/* PAGINATION */}
        {paginationInfo && paginationInfo.totalPages > 1 && onPageChange && (
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={() => onPageChange(paginationInfo.currentPage - 1)}
              disabled={paginationInfo.currentPage === 1}
              className="p-2 rounded-full border border-gray-300 disabled:opacity-50"
            >
              <IoChevronBack className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 font-switzer text-textcolor">
              <span className="px-4 py-2 bg-textcolor text-white rounded-md">
                {paginationInfo.currentPage}
              </span>
              <span>/</span>
              <span>{paginationInfo.totalPages}</span>
            </div>

            <button
              onClick={() => onPageChange(paginationInfo.currentPage + 1)}
              disabled={paginationInfo.currentPage === paginationInfo.totalPages}
              className="p-2 rounded-full border border-gray-300 disabled:opacity-50"
            >
              <IoChevronForward className="w-5 h-5" />
            </button>
          </div>
        )}

        {error && <div>Error: {error.message}</div>}
      </div>
    </section>
  );
};

export default ProductGrid;
