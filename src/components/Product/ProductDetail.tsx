import { useParams } from "react-router-dom";
import data from "../DataSet/Data.json";
import type { CategoryData } from "../MainCategory/typing";
import { useEffect, useState } from "react";

import { useCart } from "../../Context/CartContext";
import {
  addToWishlist,
  getWishLength,
  getWishlist,
  removeFromWishlist,
} from "../../utils/wish";
import { addToCart, getCartLength } from "../../utils/cart";
import { toastNotification } from "../../utils/toastNotification";
import { useAuth } from "../../Context/AuthContext/AuthContext";
import Button from "../Button/Button";

const categoryData: CategoryData = data;

const ProductDetail = () => {
  const { categoryName, subCategoryName, productId } = useParams();
  const [selectedSize, setSelectedSize] = useState<string>("");
  const { setCartLength, setWishLength } = useCart();
  const { isLoggedIn } = useAuth();

  const [isInWishlist, setIsInWishlist] = useState(false);
  const [isCheck, setIsCheck] = useState(false);

  useEffect(() => {
    if (product) {
      const exists = getWishlist().find((item) => item.id === product.id);
      setIsInWishlist(!!exists);
    } else {
      setIsInWishlist(false);
    }
  }, [getWishLength()]);

  const category = categoryData.categories.find(
    (cat) => cat.id === categoryName
  );
  const subCategory = category?.child_categories.find(
    (sub) => sub.id === subCategoryName
  );
  const product = subCategory?.product.find((prod) => prod.id === productId);

  if (!category || !subCategory || !product) return <div>Not Found</div>;

  const handleAddToCart = () => {
    if (!selectedSize && product.hasSize) {
      toastNotification({ message: "Select your size", type: "error" });
      return;
    }

    if (!isLoggedIn) {
      toastNotification({
        message: "Please login to add items to cart",
        type: "error",
      });
      return;
    }

    addToCart(product, selectedSize);
    setCartLength(getCartLength());

    if (isInWishlist) {
      removeFromWishlist(product.id);
      setWishLength(getWishLength());
      setIsInWishlist(true);
    }
  };

  const handleWishClick = () => {
    if (!isLoggedIn) {
      toastNotification({
        message: "Please login to add items to cart",
        type: "error",
      });
      return;
    }
    

    if (isInWishlist) {
      toastNotification({ message: "Already in your Favourite", type: "info" });
    } else {
      addToWishlist(product);
      setWishLength(getWishLength());
      setIsCheck(false);
      toastNotification({
        message: `${product.name} is added to Favourite!`,
        type: "success",
      });
      setIsInWishlist(true);
    }
  };
  const onclickHeart = () => {
    removeFromWishlist(product.id);
    setIsCheck(true);
    setIsInWishlist(false);
  };

  return (
    <section className="w-full ">
      <div className="mx-auto sm:px-6 lg:px-8 ">
        <div className="mx-w-2xl  mx-5 p-4 flex flex-col gap-8 sm:flex-row ">
          <div className="flex flex-col gap-4">
            {isInWishlist && (
              <button onClick={onclickHeart}>
                {isCheck ? (
                  <p></p>
                ) : (
                  <p className="relative text-xl justify-right left-1 w-full top-[45px] flex  gap-1 mt-1">
                    ♥️
                  </p>
                )}
              </button>
            )}
            <img
              src={product.image}
              alt={product.name}
              className=" w-full h-[26rem] bg-cover"
            />
            <div className="flex flex-col gap-2  sm:flex-row ">
              <Button variant="secondary" size="medium"
                // className="bg-[#000000] cursor-pointer p-2 rounded-md text-[#ffffff] w-full sm:w-1/2"
                onClick={handleAddToCart}
              >
                Add to Bag
              </Button>
              <Button variant="outline" size="medium"
                onClick={handleWishClick}
                // className="border-2 cursor-pointer border-black rounded-md w-full sm:w-1/2"
              >
                Add to Wishlist
              </Button>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold my-2">{product.name}</h2>
            <div className="text-lg   flex  flex-col ">
              <div className="text-lg  gap-2 flex items-end">
                <div className="text-[#858383] text-xl  font-medium">MRP</div>
                <div>₹{product.Price}</div>
              </div>
              <div className=" text-xs font-normal text-neutral-700 md:leading-3 select-none md:select-text">
                inclusive of all taxes
              </div>
            </div>
            <p className="mb-4 mt-4 ">{product.Description}</p>
            <div>
              <div className="text-[#9e9c9c] hidden">Select your size</div>
              <div className="flex gap-4">
                <div>
                  <div className="flex space-x-3">
                    {product.sizes &&
                      product?.sizes.map((s) => (
                        <Button
                          variant="primary" size="small"
                          key={s.size}
                          className={` ${
                            selectedSize === s.size ? "border border-black" : ""
                          }`}
                          onClick={() => setSelectedSize(s.size)}
                        >
                          {s.size}
                        </Button>
                      ))}
                  </div>
                </div>
              </div>
              <div className=" border-b bg-[#f1ebeb70] mt-3 px-4 py-3 md:px-5 md:py-4 lg:px-6 lg:py-5 max-w-96 ">
                <h3 className="flex ">
                  <button className=" text-xs font-bold leading-[14.4px] text-neutral-900 md:text-sm md:leading-[19.2px] md:tracking-large lg:text-base">
                    Product Details
                  </button>
                </h3>
                {product.productdetail?.map((item, index) => (
                  <div className="pt-3 md:pb-1" key={index}>
                    <div className="flex gap-6 flex-wrap xs:gap-3 0 ">
                      {item.Gender && (
                        <div>
                          <div className="text-[#9e9c9c]">Gender:</div>
                          <div>{item.Gender}</div>
                        </div>
                      )}
                      {item.packof && (
                        <div>
                          <div className="text-[#9e9c9c]">Pack Of:</div>
                          <div>{item.packof}</div>
                        </div>
                      )}
                      {item.pattern && (
                        <div>
                          <div className="text-[#9e9c9c]">Pattern:</div>
                          <div>{item.pattern}</div>
                        </div>
                      )}
                      {item.color && (
                        <div>
                          <div className="text-[#9e9c9c]">Color:</div>
                          <div>{item.color}</div>
                        </div>
                      )}
                      {item.Occasion && (
                        <div>
                          <div className="text-[#9e9c9c]">Occasion:</div>
                          <div>{item.Occasion}</div>
                        </div>
                      )}
                      {item.Weave && (
                        <div>
                          <div className="text-[#9e9c9c]">Weave:</div>
                          <div>{item.Weave}</div>
                        </div>
                      )}
                      {item.Neckline && (
                        <div>
                          <div className="text-[#9e9c9c]">Neckline:</div>
                          <div>{item.Neckline}</div>
                        </div>
                      )}
                      {item.Fabric && (
                        <div>
                          <div className="text-[#9e9c9c]">Fabric:</div>
                          <div>{item.Fabric}</div>
                        </div>
                      )}
                      {item.Material && (
                        <div>
                          <div className="text-[#9e9c9c]">Material:</div>
                          <div>{item.Material}</div>
                        </div>
                      )}
                      {item.Type && (
                        <div>
                          <div className="text-[#9e9c9c]">Type:</div>
                          <div>{item.Type}</div>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;
