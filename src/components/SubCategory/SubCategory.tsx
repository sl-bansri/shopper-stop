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
import { useAuth } from "../../Context/AuthContext/AuthContext";
import ItemHeading from "../ItemHeading";
import ImagePoster from "../ImagePoster";
import GridItems from "../GridItems";
import SectionHeading from "../SectionHeading";


const categoryData: CategoryData = data;
const SubCategory = () => {
  const { categoryName, subCategoryName } = useParams();
  const {isLoggedIn} = useAuth()
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
    const wishItems = getWishlist();
    setWishListItems(wishItems);
  }, []);

  const handleRemoveItem = (id: string) => {
    removeFromWishlist(id);
    setWishListItems(getWishlist());
  };
  return (
    <section className="w-full mx-auto pt-4 sm:px-6 lg:px-8 ">
      <div className="mx-auto pt-4 sm:px-6 lg:px-8 ">
        <div className="shadow-xl w-full h-[250px] p-2 sm:p-0  sm:h-[400px]">
          <ImagePoster
            src={subCategory.productbanner}
            alt={subCategory.name}
            
          />
        </div>
        <SectionHeading variant="primary" size="large" className="text-center mt-4">
          {subCategory.name}
        </SectionHeading>

        <div className="w-full flex justify-center md:justify-start">
          <GridItems variant="primary">
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
                      onClick={() => handleWishList(prod) }
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
                      <ItemHeading variant="primary" size="medium">{prod.name}</ItemHeading>
                      <ItemHeading variant="secondary" className="text-xs">
                        {prod.Description}
                      </ItemHeading>
                      <p className="text-left"> Price : ₹{prod.Price}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </GridItems>
        </div>
      </div>
    </section>
  );
};

export default SubCategory;
