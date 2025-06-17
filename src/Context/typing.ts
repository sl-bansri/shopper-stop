export type CartContextProps ={
  cartLength: number;
  wishLength: number;
  setWishLength: (length: number) => void;
  setCartLength: (length: number) => void;
}