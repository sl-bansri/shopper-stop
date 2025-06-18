import { useParams, useNavigate } from "react-router-dom";
import data from "../DataSet/Data.json";
import type { CategoryData } from "../MainCategory/typing";
import {
  addToWishlist,
  getWishlist,
  removeFromWishlist,
  type WishItem,
} from "../../utils/wish";
import type { Product } from "../Product/typing";
import { useEffect, useState } from "react";

const categoryData: CategoryData = data;
const SubCategory = () => {
  const { categoryName, subCategoryName } = useParams();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [wishListItem, setWishListItems] = useState<WishItem[]>([]);
  const navigate = useNavigate();

  const category = categoryData.categories.find(
    (cat) => cat.id === categoryName
  );
  const subCategory = category?.child_categories.find(
    (sub) => sub.id === subCategoryName
  );

  if (!category || !subCategory) return <div>Not Found</div>;

  const handleWishList = (product: Product) => {
    addToWishlist(product);
    const wishItems = getWishlist();
    setWishListItems(wishItems);
  };

  useEffect(() => {
    const email = localStorage.getItem("authEmail");
    setIsLoggedIn(!!email);
    const wishItems = getWishlist();
    setWishListItems(wishItems);
  }, []);

  const handleRemoveItem = (id: string) => {
    removeFromWishlist(id);
    // console.log(getWishlist(), "item==>>>removeddd");
    setWishListItems(getWishlist());
  };
  return (
    <section className="w-full ">
      <div className="mx-auto pt-4 sm:px-6 lg:px-8 ">
        <div className="shadow-xl w-full h-[250px] p-2 sm:p-0  sm:h-[400px]">
          <img
            src={subCategory.productbanner}
            alt={subCategory.name}
            className="w-full sm:h-[400px]  bg-cover sm:bg-cover h-[250px]"
          />
        </div>
        <h2 className="text-2xl font-bold text-center my-4">
          {subCategory.name}
        </h2>

        <div className="w-full flex justify-center md:justify-start">
          <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-4">
            {subCategory.product.map((prod) => (
              <div className=" w-full " key={prod.id}>
                <div className=" relative bg-[#ebe2e2] top-10 sm:top-0 left-4 sm:left-10 z-30 flex size-[33.23px] cursor-pointer items-center justify-center rounded-[74.77px]  p-[2.23px] md:top-10 md:p-[6px] md:left-4 hover:bg-slate-300">
                  {isLoggedIn &&
                  wishListItem.find((item) => item.id === prod.id) ? (
                    <button onClick={() => handleRemoveItem(prod.id)}>
                      ♥️
                    </button>
                  ) : (
                    <img
                      src="/src/assets/Images/heart_black.png"
                      alt="save"
                      className="w-6  cursor-pointer relative"
                      onClick={() => handleWishList(prod)}
                    />
                  )}
                </div>
                <div
                  className="relative  cursor-pointer w-72 sm:w-64 rounded-lg overflow-hidden shadow-lg   transition-shadow"
                  onClick={() =>
                    navigate(
                      `/category/${category.id}/${subCategory.id}/${prod.id}`
                    )
                  }
                >
                  <div>
                    <img
                      src={prod.image}
                      alt={prod.name}
                      className="w-full object-cover "
                    />
                    <div className="p-3">
                      <h3 className="text-xl font-semibold  ">{prod.name}</h3>
                      <p className=" text-sm text-[#575555]">
                        {prod.Description}
                      </p>
                      <p className="text-left "> Price : ₹{prod.Price}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubCategory;
