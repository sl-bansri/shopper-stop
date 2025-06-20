import { useEffect, useState } from "react";
import {
  getWishLength,
  getWishlist,
  removeFromWishlist,
  type WishItem,
} from "../../utils/wish";
import { addToCart, getCartLength } from "../../utils/cart";
import { useCart } from "../../Context/CartContext";
import { toastNotification } from "../../utils/toastNotification";
import Button from "../../components/Button/Button";
import { Link } from "react-router-dom";

const WishList = () => {
  const [wishItems, setWishItems] = useState<WishItem[]>(getWishlist());
  const { setCartLength, setWishLength } = useCart();

  const [showSizeItemId, setShowSizeItemId] = useState<string | null>(null);
  const [selectedSizes, setSelectedSizes] = useState<{
    [productId: string]: string;
  }>({});
  // console.log('selectedSizes',selectedSizes);
  useEffect(() => {
    setWishItems(getWishlist());
  }, []);

  const handleRemove = (id: string) => {
    removeFromWishlist(id);
    setWishLength(getWishLength());
    setWishItems(getWishlist());
  };

  const handleSizeClick = (productId: string) => {
    setShowSizeItemId(productId);

  };

  const handleSelectSize = (productId: string, size: string) => {
    setSelectedSizes((prev) => ({ ...prev, [productId]: size }));
  };

  const handleConfirmAddToCart = (product: WishItem) => {
    const size = selectedSizes[product.id];

    if (!size && product.hasSize) {
      toastNotification({ message: "Please select a size", type: "error" });
      return;
    }
  
    else {
      addToCart(product, size);
      removeFromWishlist(product.id);

      setCartLength(getCartLength());
      setWishLength(getWishLength());
      setWishItems(getWishlist());

      setShowSizeItemId(null);
    }

  };

  return (
    <section className="w-full">
      <div className="mx-auto  lg:px-8 pt-4">
        <div className="max-w-2xl mx-auto p-4 flex flex-col  items-center">
          <h2 className="text-2xl font-bold mb-6 text-center">Your Wishlist</h2>

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
                  className="flex flex-row sm:flex-row items-center sm:items-center gap-4 border p-4 rounded-md shadow"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-24 bg-cover rounded-md"
                  />

                  <div className="flex-1 flex flex-col gap-1">
                    <h3 className="text-lg font-semibold">{item.name}</h3>
                    <p className="text-sm text-gray-600">{item.Description}</p>

                    {showSizeItemId === item.id ? (
                      <>
                        <div className="mt-3 flex flex-wrap gap-2">
                          {item.sizes &&
                            item.sizes?.map((size) => (
                              <Button 
                                variant="primary" size="small"
                                
                                key={size.size}
                                onClick={() =>
                                  handleSelectSize(item.id, size.size)
                                }
                                className={`mb-4 ${
                                  selectedSizes[item.id] === size.size
                                    ? " border-black font-semibold"
                                    : "border-gray-400"
                                }`}
                              >
                                {size.size}
                              </Button>
                            ))}
                        </div>
                        <Button 
                          variant="secondary" size="small"

                          onClick={() => handleConfirmAddToCart(item)}
                        >
                          Confirm Add to Cart
                        </Button>
                      </>
                    ) : (
                      <Button 
                        variant="secondary"
                        size="small"
                        onClick={() => handleSizeClick(item.id)}
                        // className="mt-3 bg-black text-white px-4 py-2 rounded text-sm"
                      >
                        Add to Cart
                      </Button>
                    )}
                  </div>

                  <Button
                  variant="cross" size="large"  
                    onClick={() => handleRemove(item.id)}
                    // className=" text-2xl  "
                  >
                    x
                  </Button>
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
