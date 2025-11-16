import type { ClassValue } from "clsx";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import type { Product } from "../services/api";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Generate SEO-friendly product URL
 * @param product - Product object with slug and category_slug
 * @returns URL path like /shop/{category}/{slug}
 */
export function getProductUrl(product: Product): string {
  const categorySlug = product.category_slug?.[0] || 'products';
  return `/shop/${categorySlug}/${product.slug}`;
}
