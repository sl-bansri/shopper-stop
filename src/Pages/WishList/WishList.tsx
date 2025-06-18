import { useEffect, useState } from "react";
import {
  getWishLength,
  getWishlist,
  removeFromWishlist,
  type WishItem,
} from "../../utils/wish";
import { addToCart, getCartLength } from "../../utils/cart";
import { useCart } from "../../Context/CartContext";
import { toast } from "react-toastify";

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
    // console.log('setActiveSizeItemId(productId)',productId);
  };

  const handleSelectSize = (productId: string, size: string) => {
    setSelectedSizes((prev) => ({ ...prev, [productId]: size }));
    // console.log('select', productId ,size);
  };

  const handleConfirmAddToCart = (product: WishItem) => {
    const size = selectedSizes[product.id];

    if (!size && product.hasSize) {
      toast.error("Please select a size");
      return;
    }
    //     if(!product.hasSize && product.quantity<=11 ){
    //       toast.error("not in stock", {
    //     position: "top-center",
    //     autoClose: 2000,
    //     theme: "dark",
    //   })
    // return;
    //     }
    else {
      addToCart(product, size);
      removeFromWishlist(product.id);

      setCartLength(getCartLength());
      setWishLength(getWishLength());
      setWishItems(getWishlist());

      setShowSizeItemId(null);
    }
    // console.log("showitem",showSizeItemId);
  };

  return (
    <section className="w-full">
      <div className="mx-auto  lg:px-8 pt-4">
        <div className="max-w-2xl mx-auto p-4 flex flex-col  items-center">
          <h2 className="text-2xl font-bold mb-6 text-center">Your Wishlist</h2>

          {wishItems.length === 0 ? (
            <div className="text-center text-neutral-500">
              Your wishlist is empty.
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

                  <div className="flex-1">
                    <h3 className="text-lg font-semibold">{item.name}</h3>
                    <p className="text-sm text-gray-600">{item.Description}</p>

                    {showSizeItemId === item.id ? (
                      <>
                        <div className="mt-3 flex flex-wrap gap-2">
                          {item.sizes &&
                            item.sizes?.map((size) => (
                              <button
                                key={size.size}
                                onClick={() =>
                                  handleSelectSize(item.id, size.size)
                                }
                                className={`px-3 py-1 border hover:bg-slate-700  text-sm ${
                                  selectedSizes[item.id] === size.size
                                    ? "border-black font-semibold"
                                    : "border-gray-400"
                                }`}
                              >
                                {size.size}
                              </button>
                            ))}
                        </div>
                        <button
                          className="mt-3 bg-black text-white px-4 py-2 rounded text-sm"
                          onClick={() => handleConfirmAddToCart(item)}
                        >
                          Confirm Add to Cart
                        </button>
                      </>
                    ) : (
                      <button
                        onClick={() => handleSizeClick(item.id)}
                        className="mt-3 bg-black text-white px-4 py-2 rounded text-sm"
                      >
                        Add to Cart
                      </button>
                    )}
                  </div>

                  <button
                    onClick={() => handleRemove(item.id)}
                    className="text-red-600 font-bold text-xl ml-auto "
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
