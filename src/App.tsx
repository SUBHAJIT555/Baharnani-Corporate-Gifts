import { RouterProvider } from "react-router";
import { router } from "./routes/router";
import { QuoteProvider } from "./contexts/QuoteContext";
import { LenisProvider } from "./contexts/LenisContext";

function App() {
  return (
    <LenisProvider>
      <QuoteProvider>
        <RouterProvider router={router} />
      </QuoteProvider>
    </LenisProvider>
  );
}

export default App;
