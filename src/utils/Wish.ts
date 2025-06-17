import { toast } from "react-toastify";
import type { Product } from "../components/Product/typing";

export type WishItem = Product & {
  wishId: number;
  quantity: number;
  selectedSize: string;
  sizePrice: number;
};

const getWishKeyForUser = () => {
  const email = localStorage.getItem("authEmail");
  return email ? `wish_${email}` : null;
};

export const getWishlist = (): WishItem[] => {
  const wishKey = getWishKeyForUser();
  if (!wishKey) return [];
  const wishlist = localStorage.getItem(wishKey);
  return wishlist ? JSON.parse(wishlist) : [];
};

export const getWishLength = (): number => {
  const wish = getWishlist();
  return wish.reduce((acc, item) => acc + item.quantity, 0);
};

export const addToWishlist = (product: Product, selectedSize: string) => {
  const wishKey = getWishKeyForUser();
  if (!wishKey) {
    toast.error("You must be logged in to add items to the favourite.", {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
    return;
  }

  const wish: WishItem[] = getWishlist();
  const sizeData = product.sizes?.find((s) => s.size === selectedSize);
  const sizePrice = sizeData ? sizeData.price : product.Price;

  const existingItemIndex = wish.findIndex(
    (item) => item.id === product.id && item.selectedSize === selectedSize
  );

  if (existingItemIndex !== -1) {
    wish[existingItemIndex].quantity += 1;
  } else {
    wish.push({
      ...product,
      wishId: new Date().getDay(),
      selectedSize,
      sizePrice,
      quantity: 1,
    });
  }

  localStorage.setItem(wishKey, JSON.stringify(wish));
};

export const removeFromWishlist = (id: string, selectedSize: string) => {
  const wishKey = getWishKeyForUser();
  if (!wishKey) return [];

  const wishlist = getWishlist().filter(
    (item) => !(item.id === id && item.selectedSize === selectedSize)
  );
  console.log("wishlist", wishlist);
  localStorage.setItem(wishKey, JSON.stringify(wishlist));
};
