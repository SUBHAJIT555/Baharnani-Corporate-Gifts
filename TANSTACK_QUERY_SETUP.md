# TanStack Query Setup Guide

This project uses TanStack Query (React Query) for efficient data fetching and state management.

## Installation

TanStack Query has been installed:

```bash
npm install @tanstack/react-query
```

## Setup

The `QueryClientProvider` has been configured in `src/App.tsx` to wrap the entire application.

## API Endpoints

### GET Endpoints

1. **Random Products**: `https://corporategiftsdubaii.ae/wp-json/custom/v1/random-products`
2. **Product Categories**: `https://corporategiftsdubaii.ae/wp-json/custom/v1/product-categories`
3. **Products by Category**: `https://corporategiftsdubaii.ae/wp-json/custom/v1/products-by-category?category_id=${categoryId}`

### POST Endpoint

**Contact Form**: Update the endpoint in `src/services/api.ts` to match your actual contact form API.

## Usage

### 1. Fetch Random Products

```tsx
import { useRandomProducts } from "../hooks/useProducts";

function MyComponent() {
  const { data: products, isLoading, error } = useRandomProducts();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      {products?.map((product) => (
        <div key={product.id}>
          <img src={product.image} alt={product.name} />
          <h3>{product.name}</h3>
        </div>
      ))}
    </div>
  );
}
```

### 2. Fetch Product Categories

```tsx
import { useProductCategories } from "../hooks/useProducts";

function CategoriesList() {
  const { data: categories, isLoading } = useProductCategories();

  if (isLoading) return <div>Loading categories...</div>;

  return (
    <ul>
      {categories?.map((category) => (
        <li key={category.id}>{category.name}</li>
      ))}
    </ul>
  );
}
```

### 3. Fetch Products by Category

```tsx
import { useProductsByCategory } from "../hooks/useProducts";

function CategoryProducts({ categoryId }: { categoryId: number }) {
  const { data: products, isLoading } = useProductsByCategory(categoryId);

  if (isLoading) return <div>Loading products...</div>;

  return (
    <div>
      {products?.map((product) => (
        <div key={product.id}>{product.name}</div>
      ))}
    </div>
  );
}
```

### 4. Submit Contact Form

```tsx
import { useForm } from "react-hook-form";
import { useContactForm } from "../hooks/useContactForm";

function ContactForm() {
  const { register, handleSubmit, reset } = useForm();
  const { mutate, isPending, isSuccess, isError, error } = useContactForm();

  const onSubmit = (data: any) => {
    mutate(
      {
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        phone: data.phone,
        message: data.message,
        formType: "contact",
      },
      {
        onSuccess: (response) => {
          console.log("Success:", response.message);
          reset();
        },
        onError: (error) => {
          console.error("Error:", error.message);
        },
      }
    );
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("firstName")} placeholder="First Name" />
      <input {...register("lastName")} placeholder="Last Name" />
      <input {...register("email")} type="email" placeholder="Email" />
      <input {...register("phone")} placeholder="Phone" />
      <textarea {...register("message")} placeholder="Message" />

      <button type="submit" disabled={isPending}>
        {isPending ? "Submitting..." : "Submit"}
      </button>

      {isSuccess && <p>Form submitted successfully!</p>}
      {isError && <p>Error: {error?.message}</p>}
    </form>
  );
}
```

## File Structure

```
src/
├── services/
│   └── api.ts              # API service functions
├── hooks/
│   ├── useProducts.ts      # Product-related query hooks
│   └── useContactForm.ts   # Contact form mutation hook
├── examples/
│   ├── ProductExamples.tsx      # Example components for products
│   └── ContactFormExample.tsx   # Example components for contact form
└── App.tsx                 # QueryClientProvider setup
```

## Query Options

The hooks include sensible defaults:

- **staleTime**: 5 minutes (data is considered fresh for 5 minutes)
- **gcTime**: 10 minutes (cached data is kept for 10 minutes)
- **refetchOnWindowFocus**: false (doesn't refetch when window regains focus)
- **retry**: 1 (retries failed requests once)

You can override these options when calling the hooks if needed.

## TypeScript Types

All types are defined in `src/services/api.ts`:

- `Product`
- `ProductCategory`
- `ContactFormData`
- `ContactFormResponse`

## Examples

See the example files in `src/examples/` for complete working examples:

- `ProductExamples.tsx` - Various product fetching examples
- `ContactFormExample.tsx` - Contact form submission examples

## Environment Variables

You can configure the contact form endpoint using environment variables:

```env
VITE_CONTACT_API_URL=https://your-api.com/contact
# or
VITE_API_URL=https://your-api.com
```

Update `src/services/api.ts` to use your preferred endpoint format.
