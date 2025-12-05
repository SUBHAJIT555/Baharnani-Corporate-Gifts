import { RouterProvider } from "react-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { router } from "./routes/router";
import { QuoteProvider } from "./contexts/QuoteContext";
import { LenisProvider } from "./contexts/LenisContext";
import { HelmetProvider } from "react-helmet-async";

// Create a QueryClient instance
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 1,
      staleTime: 5 * 60 * 1000, // 5 minutes
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <HelmetProvider>
        <LenisProvider>
          <QuoteProvider>
            <RouterProvider router={router} />
          </QuoteProvider>
        </LenisProvider>
      </HelmetProvider>
    </QueryClientProvider>
  );
}

export default App;
