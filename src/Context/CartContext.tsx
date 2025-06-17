import React, { createContext, useState, useContext } from "react";
import { getCartLength } from "../utils/Cart";
import { getWishLength } from "../utils/Wish";
import type { CartContextProps } from "./typing";



const CartContext = createContext<CartContextProps>({
  cartLength: 0,
  setCartLength: () => {},
  wishLength: 0,
  setWishLength: () => {},
});

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cartLength, setCartLength] = useState(getCartLength());
  const [wishLength, setWishLength] = useState(getWishLength());

  return (
    <CartContext.Provider value={{ cartLength, setCartLength, wishLength, setWishLength }}>
      {children}
    </CartContext.Provider>
  );
  
};

export const useCart = () => useContext(CartContext);
