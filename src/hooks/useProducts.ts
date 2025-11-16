import { useQuery } from "@tanstack/react-query";
import {
  fetchRandomProducts,
  fetchProductCategories,
  fetchProductsByCategory,
  fetchAllProducts,
  fetchProductBySlug,
} from "../services/api";

/**
 * Query keys for products
 */
export const productKeys = {
  all: ["products"] as const,
  allProducts: (page?: number, per_page?: number) =>
    [...productKeys.all, "allProducts", page, per_page] as const,
  featured: (page?: number, per_page?: number) =>
    [...productKeys.all, "featured", page, per_page] as const,
  random: () => [...productKeys.all, "random"] as const,
  categories: () => [...productKeys.all, "categories"] as const,
  byCategory: (categorySlug: string, page?: number, per_page?: number) =>
    [...productKeys.all, "category", categorySlug, page, per_page] as const,
  bySlug: (slug: string) => [...productKeys.all, "slug", slug] as const,
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
 * Hook to fetch featured products with pagination
 */
export const useFeaturedProducts = () => {
  return useQuery({
    queryKey: productKeys.featured(),
    queryFn: () => fetchAllProducts(undefined, undefined, { featured: 1 }),
    staleTime: 5 * 60 * 1000, // 5 minutes
    gcTime: 10 * 60 * 1000, // 10 minutes
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
export const useProductsByCategory = (
  categorySlug: string,
  page?: number,
  per_page?: number
) => {
  return useQuery({
    queryKey: productKeys.byCategory(categorySlug, page, per_page),
    queryFn: () => fetchProductsByCategory(categorySlug, page, per_page),
    enabled: !!categorySlug, // Only fetch if categorySlug is provided
    staleTime: 5 * 60 * 1000, // 5 minutes
    gcTime: 10 * 60 * 1000, // 10 minutes
  });
};

/**
 * Hook to fetch product details by slug
 */
export const useProductBySlug = (slug: string) => {
  return useQuery({
    queryKey: productKeys.bySlug(slug),
    queryFn: () => fetchProductBySlug(slug),
    enabled: !!slug, // Only fetch if slug is provided
    staleTime: 5 * 60 * 1000, // 5 minutes
    gcTime: 10 * 60 * 1000, // 10 minutes
  });
};
