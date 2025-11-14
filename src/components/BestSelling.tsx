import { useState, useMemo } from "react";
import { useAllProducts, useProductCategories, useProductsByCategory } from "../hooks/useProducts";
import ProductGrid from "./ProductGrid";
// import { bestSellingItems } from "../data/bestselling";

const BestSelling = () => {
  const { data: productsData, isLoading, error } = useAllProducts();
  const { data: categories, isLoading: categoriesLoading } = useProductCategories();
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);
  const { data: productsByCategory, isLoading: productsByCategoryLoading, error: productsByCategoryError } = useProductsByCategory(selectedCategory || 0);

  // Determine which products to display based on selected category
  const displayedProducts = useMemo(() => {
    // If no category is selected, show all products from paginated response
    if (selectedCategory === null) {
      return productsData?.products || [];
    }
    // If a category is selected, show products from that category
    return productsByCategory || [];
  }, [productsData, productsByCategory, selectedCategory]);

  // Determine loading state
  const isLoadingProducts = selectedCategory === null
    ? isLoading
    : (isLoading || categoriesLoading);

  // Determine error state
  const productsError = selectedCategory === null
    ? error
    : (error || productsByCategoryError);

  if (isLoadingProducts) return <div>Loading...</div>;
  if (productsError) return <div>Error: {productsError?.message}</div>;
  console.log(categories);

  return (
    <ProductGrid
      products={displayedProducts}
      categories={categories}
      isLoading={productsByCategoryLoading}
      error={productsByCategoryError}
      selectedCategory={selectedCategory}
      setSelectedCategory={setSelectedCategory}
      title="Our Best-Selling Corporate Gifts in Dubai "
      subtitle="Discover our most-loved corporate gifts, fromstylish notebooks and eco-friendly bottles to premium accessories that impress every client and colleague."
      productType="custom"
      id="best-selling"
    />
  );
};

export default BestSelling;
