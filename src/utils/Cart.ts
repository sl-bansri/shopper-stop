import { toast } from "react-toastify";
import type { Product } from "../components/Product/typing";

export type CartItem = Product & {
  cartId: number;
  quantity: number;
  selectedSize: string;
  sizePrice: number;
};

export const getCartKeyForUser = () => {
  const email = localStorage.getItem("authEmail");
  return email ? `cart_${email}` : null;
};

export const getCart = (): CartItem[] => {
  const cartKey = getCartKeyForUser();
  if (!cartKey) return [];
  const cart = localStorage.getItem(cartKey);
  return cart ? JSON.parse(cart) : [];
};

export const getCartLength = (): number => {
  const cart = getCart();
  return cart.reduce((acc, item) => acc + item.quantity, 0);
};

export const addToCart = (product: Product, selectedSize: string) => {
  const cartKey = getCartKeyForUser();

  if (!cartKey) {
    toast.error("You must be logged in to add items to the cart.", {
      position: "top-center",
      autoClose: 2000,
      theme: "dark",
    });
    return;
  }

  const cart: CartItem[] = getCart();

  toast.success(`${product.name} is added to Bag!`, {
    position: "top-center",
    autoClose: 2000,
    theme: "dark",
  });

  const sizeData = product.sizes?.find((s) => s.size === selectedSize);
  const sizePrice = sizeData ? sizeData.price : product.Price;

  const existingItemIndex = cart.findIndex(
    (item) => item.id === product.id && item.selectedSize === selectedSize
  );

  if (existingItemIndex !== -1) {
    cart[existingItemIndex].quantity += 1;
  } else {
    cart.push({
      ...product,
      cartId: Math.random(),
      selectedSize,
      sizePrice,
      quantity: 1,
    });
  }

  localStorage.setItem(cartKey, JSON.stringify(cart));
};

export const removeFromCart = (cartId: number) => {
  const cartKey = getCartKeyForUser();
  if (!cartKey) return;

  const updatedCart = getCart().filter((item) => item.cartId !== cartId);
  localStorage.setItem(cartKey, JSON.stringify(updatedCart));
};

export const updateQuantity = (productId: string, quantity: number, selectedSize: string) => {
  const cartKey = getCartKeyForUser();
  if (!cartKey) return;

  const updatedCart = getCart().map((item) =>
    item.id === productId && item.selectedSize === selectedSize
      ? { ...item, quantity }
      : item
  );

  localStorage.setItem(cartKey, JSON.stringify(updatedCart));
};
