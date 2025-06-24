import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { CartProvider } from "./Context/CartContext.tsx";
import { AuthProvider } from "./Context/AuthContext/AuthContext.tsx";
import { LoaderProvider } from "./Context/LoaderContext/LoaderContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AuthProvider>
      <LoaderProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </LoaderProvider>
    </AuthProvider>
  </StrictMode>
);
