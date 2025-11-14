/**
 * Example usage of TanStack Query hooks for products
 * 
 * This file demonstrates how to use the custom hooks:
 * - useRandomProducts()
 * - useProductCategories()
 * - useProductsByCategory(categoryId)
 */

import { useRandomProducts, useProductCategories, useProductsByCategory } from "../hooks/useProducts";

// Example 1: Display Random Products
export const RandomProductsExample = () => {
  const { data: products, isLoading, error, refetch } = useRandomProducts();

  if (isLoading) {
    return <div>Loading random products...</div>;
  }

  if (error) {
    return (
      <div>
        <p>Error loading products: {error.message}</p>
        <button onClick={() => refetch()}>Retry</button>
      </div>
    );
  }

  return (
    <div>
      <h2>Random Products</h2>
      <button onClick={() => refetch()}>Refresh Products</button>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {products?.map((product) => (
          <div key={product.id} className="border p-4 rounded">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover rounded"
            />
            <h3 className="mt-2 font-bold">{product.name}</h3>
            <p className="text-sm text-gray-600">ID: {product.id}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

// Example 2: Display Product Categories
export const ProductCategoriesExample = () => {
  const { data: categories, isLoading, error } = useProductCategories();

  if (isLoading) {
    return <div>Loading categories...</div>;
  }

  if (error) {
    return <div>Error loading categories: {error.message}</div>;
  }

  return (
    <div>
      <h2>Product Categories</h2>
      <ul className="list-disc pl-5">
        {categories?.map((category) => (
          <li key={category.id}>
            <strong>{category.name}</strong> ({category.slug}) - ID: {category.id}
          </li>
        ))}
      </ul>
    </div>
  );
};

// Example 3: Display Products by Category
export const ProductsByCategoryExample = ({ categoryId }: { categoryId: number }) => {
  const { data: products, isLoading, error, isFetching } = useProductsByCategory(categoryId);

  if (isLoading) {
    return <div>Loading products for category {categoryId}...</div>;
  }

  if (error) {
    return <div>Error loading products: {error.message}</div>;
  }

  return (
    <div>
      <h2>Products in Category {categoryId}</h2>
      {isFetching && <p className="text-sm text-gray-500">Refreshing...</p>}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {products?.map((product) => (
          <div key={product.id} className="border p-4 rounded">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover rounded"
            />
            <h3 className="mt-2 font-bold">{product.name}</h3>
            <p className="text-sm text-gray-600">ID: {product.id}</p>
            <p className="text-xs text-gray-500">
              Categories: {product.categories.join(", ")}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

// Example 4: Combined Usage - Categories with their Products
export const CategoriesWithProductsExample = () => {
  const { data: categories, isLoading: categoriesLoading } = useProductCategories();

  if (categoriesLoading) {
    return <div>Loading categories...</div>;
  }

  return (
    <div>
      <h2>Categories with Products</h2>
      {categories?.map((category) => (
        <CategorySection key={category.id} categoryId={category.id} categoryName={category.name} />
      ))}
    </div>
  );
};

const CategorySection = ({ categoryId, categoryName }: { categoryId: number; categoryName: string }) => {
  const { data: products, isLoading } = useProductsByCategory(categoryId);

  return (
    <div className="mb-8">
      <h3 className="text-xl font-bold mb-4">{categoryName}</h3>
      {isLoading ? (
        <p>Loading products...</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {products?.map((product) => (
            <div key={product.id} className="border p-2 rounded">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-32 object-cover rounded"
              />
              <p className="mt-2 text-sm">{product.name}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

