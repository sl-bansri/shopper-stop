import React, { createContext, useState, useContext } from "react";
import type { CartContextProps } from "./typing";
import { getCartLength } from "../utils/cart";
import { getWishLength } from "../utils/wish";



const CartContext = createContext<CartContextProps>({
  cartLength: 0,
  setCartLength: () => {},
  wishLength: 0,
  setWishLength: () => {},
});

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [cartLength, setCartLength] = useState(getCartLength());
  const [wishLength, setWishLength] = useState(getWishLength());

  return (
    <CartContext.Provider
      value={{ cartLength, setCartLength, wishLength, setWishLength }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
