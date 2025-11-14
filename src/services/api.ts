// API Base URL
const API_BASE_URL =
  "https://stagingv1.corporategiftsdubaii.ae/wp-json/custom/v1";

// Types
export interface Product {
  id: number;
  name: string;
  image: string;
  description?: string;
  categories: number[];
}

export interface ProductCategory {
  id: number;
  name: string;
  slug: string;
  product_count: number;
}

export interface ContactFormData {
  firstName?: string;
  lastName?: string;
  email: string;
  phone?: string;
  message?: string;
  formType?: string;
  privacy?: boolean;
}

export interface ContactFormResponse {
  status: boolean;
  message: string;
}

export interface QuoteRequestPayload {
  billing: {
    first_name: string;
    last_name: string;
    email: string;
    phone: string;
    address_1: string;
    city: string;
    country: string;
  };
  items: Array<{
    product_id: number;
    quantity: number;
  }>;
  note?: string;
}

export interface QuoteResponse {
  status: boolean;
  message: string;
  data?: any;
}

export interface PaginatedProductsResponse {
  products: Product[];
  total: number;
  total_pages: number;
  page: number;
  per_page: number;
}

// API Functions

/**
 * Fetch all products with pagination
 */
export const fetchAllProducts = async (
  page: number = 1,
  per_page: number = 48
): Promise<PaginatedProductsResponse> => {
  const response = await fetch(
    `${API_BASE_URL}/products?page=${page}&per_page=${per_page}`
  );

  if (!response.ok) {
    throw new Error(`Failed to fetch all products: ${response.statusText}`);
  }

  const data = await response.json();
  return data;
};

/**
 * Fetch random products
 */
export const fetchRandomProducts = async (): Promise<Product[]> => {
  const response = await fetch(`${API_BASE_URL}/random-products`);

  if (!response.ok) {
    throw new Error(`Failed to fetch random products: ${response.statusText}`);
  }

  return response.json();
};

/**
 * Fetch all product categories
 */
export const fetchProductCategories = async (): Promise<ProductCategory[]> => {
  const response = await fetch(`${API_BASE_URL}/product-categories`);

  if (!response.ok) {
    throw new Error(
      `Failed to fetch product categories: ${response.statusText}`
    );
  }

  return response.json();
};

/**
 * Fetch products by category ID
 */
export const fetchProductsByCategory = async (
  categoryId: number
): Promise<Product[]> => {
  const response = await fetch(
    `${API_BASE_URL}/products-by-category?category_id=${categoryId}`
  );

  if (!response.ok) {
    throw new Error(
      `Failed to fetch products for category ${categoryId}: ${response.statusText}`
    );
  }

  return response.json();
};

/**
 * Submit contact form
 *
 * Note: Update the endpoint URL below to match your actual contact form API endpoint.
 * You can also use environment variables: `${import.meta.env.VITE_API_URL}/api/v1/contact/create`
 */
export const submitContactForm = async (
  data: ContactFormData
): Promise<ContactFormResponse> => {
  // Update this URL to match your actual contact form endpoint
  // Priority: VITE_CONTACT_API_URL > VITE_API_URL > API_BASE_URL
  const contactEndpoint =
    import.meta.env.VITE_CONTACT_API_URL ||
    (import.meta.env.VITE_API_URL
      ? `${import.meta.env.VITE_API_URL}/api/v1/contact/create`
      : `${API_BASE_URL}/contact`);

  const response = await fetch(contactEndpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({
      message: `Failed to submit contact form: ${response.statusText}`,
      status: false,
    }));
    throw new Error(errorData.message || "Failed to submit contact form");
  }

  const responseData = await response.json();

  // Handle response format where status might be false
  if (responseData.status === false) {
    throw new Error(responseData.message || "Failed to submit contact form");
  }

  return responseData;
};

/**
 * Submit quote request
 */
export const submitQuote = async (
  data: QuoteRequestPayload
): Promise<QuoteResponse> => {
  const response = await fetch(`${API_BASE_URL}/quote`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({
      message: `Failed to submit quote: ${response.statusText}`,
      status: false,
    }));
    throw new Error(errorData.message || "Failed to submit quote");
  }

  const responseData = await response.json();

  // Handle response format where status might be false
  if (responseData.status === false) {
    throw new Error(responseData.message || "Failed to submit quote");
  }

  return responseData;
};
