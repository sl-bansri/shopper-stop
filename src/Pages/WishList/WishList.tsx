import { useEffect, useState } from "react";
import {
  getWishLength,
  getWishlist,
  removeFromWishlist,
  type WishItem,
} from "../../utils/Wish";
import type { Product } from "../../components/Product/typing";
// import { toast } from "react-toastify";
import { addToCart, getCartLength } from "../../utils/Cart";
import { useCart } from "../../Context/CartContext";
import { Link } from "react-router-dom";

const WishList = () => {
  const [wishItems, setWishItems] = useState<WishItem[]>(getWishlist());
  const { setCartLength, setWishLength } = useCart();

  useEffect(() => {
    setWishItems(getWishlist());
  }, []);

  const handleRemove = (id: string, selectedSize: string) => {
    removeFromWishlist(id, selectedSize);
    setWishLength(getWishLength());
    setWishItems(getWishlist());
  };
  const handleAddToCart = (product: Product, selectedSize: string) => {
    addToCart(product, selectedSize);
    removeFromWishlist(product.id, selectedSize);
    setWishLength(getWishLength());
    setCartLength(getCartLength());

    setWishItems(getWishlist());
  };

  return (
    <section className="w-full">
      <div className="mx-auto sm:px-6 lg:px-8 pt-4">
        <div className="max-w-2xl  flex flex-col items-center mx-auto p-4 ">
          <h2 className="text-2xl font-bold text-center mb-6">Your WishList</h2>
          {wishItems.length === 0 ? (
            <div className="mx-auto max-w-full ">
              <div className="px-5 py-4 md:mx-auto md:w-[60%] md:p-1  ">
                  <div className="text-sm md:text-base lg:text-lg text-black text-center font-medium !leading-[20px] tracking-[0.15px] xl:text-lg select-none md:select-text">
                    You have no wish-listed items yet
                  </div>
                  <div className="text-xs  lg:text-base xl:text-lg font-normal mt-1 text-center tracking-xs text-neutral-500 md:!text-base md:!leading-[23px] select-none md:select-text">Mark the items you love as favourites and enjoy a seamless experience</div>
                  <div className="mt-5 flex w-full items-end gap-0.5 px-2">
                    <div className="flex w-[78%] justify-end rounded-t-2xl bg-neutral-100 px-2.5 pb-5 pt-2.5"><img src="/src/assets/Images/empty_wishlist.svg"/></div>
                    <div className="w-[22%] rounded-tr-2xl bg-neutral-200 px-2.5 pb-5 pt-2.5">
                      <img src="/src/assets/Images/heart_plus.svg" />
                    </div>
                  </div>
                  <Link to={"/category"}>
                  <button className="items-center justify-center  text-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none bg-black shadow-sm text-white px-4 py-2 font-medium rounded-sm gap-0   mx-auto mt-6 flex h-10 w-3/5 md:mt-8 lg:mt-10">
                  <p className="text-xs uppercase  tracking-sm md:text-sm font-medium !leading-4">WISHLIST ITEMS</p></button>
                  </Link>
              </div>
            </div>
          ) : (
            <div className="space-y-6 w-full">
              {wishItems.map((item) => (
                <div
                  key={item.id}
                  className="flex w-full gap-4 items-center border p-4 rounded-md shadow"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-24  bg-cover"
                  />
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold">{item.name}</h3>
                    <p>{item.Description}</p>
                    {/* <p>Size: {item.selectedSize}</p>
                    <p>Price: ₹{item.sizePrice * item.quantity}</p> */}
                    {/* <p>Quantity : {item.quantity}</p> */}
                    <div className="flex items-center gap-2 mt-2">
                      <button
                        className="bg-[#000000] cursor-pointer p-1  rounded-md text-[#ffffff] w-1/2 sm:w-1/2 sm:p-2"
                        onClick={() => handleAddToCart(item, item.selectedSize)}
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>
                  <button
                    onClick={() => handleRemove(item.id, item.selectedSize)}
                    className="text-[red] font-bold text-xl"
                  >
                    x
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default WishList;
