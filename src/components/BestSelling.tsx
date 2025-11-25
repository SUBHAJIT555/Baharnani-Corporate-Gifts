import { useState, useMemo } from "react";
import { useAllProducts, useProductCategories, useProductsByCategory } from "../hooks/useProducts";
import ProductGrid from "./ProductGrid";
import Loading from "./ui/Loading";
// import { bestSellingItems } from "../data/bestselling";

const BestSelling = () => {
  const { data: productsData, isLoading, error } = useAllProducts();
  const { data: categories, isLoading: categoriesLoading } = useProductCategories();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const { data: productsByCategory, isLoading: productsByCategoryLoading, error: productsByCategoryError } = useProductsByCategory(selectedCategory || '');

  // Determine which products to display based on selected category
  const productData = useMemo(() => {
    // If no category is selected, show all products from paginated response
    if (selectedCategory === null) {
      return productsData;
    }
    // If a category is selected, show products from that category
    return productsByCategory;
  }, [productsData, productsByCategory, selectedCategory]);

  // Determine loading state
  const isLoadingProducts = selectedCategory === null
    ? isLoading
    : (isLoading || categoriesLoading);


  // Determine error state
  const productsError = selectedCategory === null
    ? error
    : (error || productsByCategoryError);



  if (productsError) return <div>Error: {productsError?.message}</div>;
  console.log(categories);

  return (
    <ProductGrid
      productData={productData || { products: [], total: 0, total_pages: 0, page: 1, per_page: 12 }}
      categories={categories || []}
      isLoading={productsByCategoryLoading || isLoadingProducts}
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
