import { useQuery } from "@tanstack/react-query";
import {
  fetchRandomProducts,
  fetchProductCategories,
  fetchProductsByCategory,
  fetchAllProducts,
} from "../services/api";

/**
 * Query keys for products
 */
export const productKeys = {
  all: ["products"] as const,
  allProducts: (page?: number, per_page?: number) =>
    [...productKeys.all, "allProducts", page, per_page] as const,
  random: () => [...productKeys.all, "random"] as const,
  categories: () => [...productKeys.all, "categories"] as const,
  byCategory: (categoryId: number) =>
    [...productKeys.all, "category", categoryId] as const,
};
/**
 * Hook to fetch all products with pagination
 */
export const useAllProducts = (page: number = 1, per_page: number = 48) => {
  return useQuery({
    queryKey: productKeys.allProducts(page, per_page),
    queryFn: () => fetchAllProducts(page, per_page),
  });
};
/**
 * Hook to fetch random products
 */
export const useRandomProducts = () => {
  return useQuery({
    queryKey: productKeys.random(),
    queryFn: fetchRandomProducts,
    staleTime: 5 * 60 * 1000, // 5 minutes
    gcTime: 10 * 60 * 1000, // 10 minutes (formerly cacheTime)
  });
};

/**
 * Hook to fetch all product categories
 */
export const useProductCategories = () => {
  return useQuery({
    queryKey: productKeys.categories(),
    queryFn: fetchProductCategories,
    staleTime: 30 * 60 * 1000, // 30 minutes (categories don't change often)
    gcTime: 60 * 60 * 1000, // 1 hour
  });
};

/**
 * Hook to fetch products by category ID
 */
export const useProductsByCategory = (categoryId: number) => {
  return useQuery({
    queryKey: productKeys.byCategory(categoryId),
    queryFn: () => fetchProductsByCategory(categoryId),
    enabled: !!categoryId, // Only fetch if categoryId is provided
    staleTime: 5 * 60 * 1000, // 5 minutes
    gcTime: 10 * 60 * 1000, // 10 minutes
  });
};
