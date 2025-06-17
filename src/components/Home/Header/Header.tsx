import { Link, useNavigate } from "react-router-dom";
import { services } from "./constants";
import { useEffect, useState } from "react";
// import { useCart } from "../../../Context/CartContext";
import type { Product } from "../../Product/typing";
import data from "../../DataSet/Data.json";
import { getWishLength } from "../../../utils/Wish";
import { getCartLength } from "../../../utils/Cart";

function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userEmail, setUserEmail] = useState<string | null>(null);
  // const { cartLength, wishLength } = useCart();
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState<Product[]>([]);
  const navigate = useNavigate();

  const categoryData = data;

  useEffect(() => {
    const email = localStorage.getItem("authEmail");
    setIsLoggedIn(!!email);
    setUserEmail(email);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("authEmail");
    navigate("/login");
  };

  useEffect(() => {
    const handleClickOutside = () => {
      setSearchResults([]);
      setSearchTerm("");
    };
    document.body.addEventListener("click", handleClickOutside);

    return () => {
      document.body.removeEventListener("click", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const results: Product[] = [];
    data.categories.forEach((category) => {
      category.child_categories.forEach((subCategory) => {
        subCategory.product.forEach((product) => {
          if (
            product.name.toLowerCase().includes(searchTerm.toLowerCase().trim())
          ) {
            results.push(product);
          }
        });
      });
    });
    setSearchResults(results);
  }, [searchTerm]);

  const handleProductClick = (productId: string) => {
    let categoryName = "";
    let subCategoryName = "";

    categoryData.categories.forEach((cat) => {
      cat.child_categories.forEach((sub) => {
        if (sub.product.find((prod) => prod.id === productId)) {
          categoryName = cat.id;
          subCategoryName = sub.id;
        }
      });
    });

    if (categoryName && subCategoryName) {
      navigate(`/category/${categoryName}/${subCategoryName}/${productId}`);
    } else {
      alert("Product not found in category data");
    }
    setSearchTerm("");
    setSearchResults([]);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="sticky right-0 top-0 z-[101] w-full md:h-[--header-fixed-height] bg-white ">
      <div className="w-full bg-white ">
        <div className="pl-2  flex flex-col justify-between bg-white sm:pl-0 md:my-2 md:flex-row md:items-center md:gap-5 md:bg-white md:px-[4.9%] md:white:bg-neutral-900 lg:my-4">
          <div className="w-full flex flex-1 items-center justify-center md:justify-start md:gap-5">
            <div>
              <Link to={"/"}>
                <img
                  className="my-[6px] max-h-[20px] self-center  md:my-[3.8px] md:min-w-[200px]  "
                  src="/src/assets/Images/shoppersstopthree_1eb72c5b77.png"
                ></img>
              </Link>
            </div>
            <div className="hidden w-full md:block ">
              <div
                className="w-full max-w-full md:min-w-32 flex  "
              >
                <div className="flex w-full items-center gap-3  rounded-[70px] bg-[#F0F0F0]   ">
                  <div>
                    <img
                      className=" w-5 ml-2  "
                      alt="search"
                      src="/src/assets/Images/search.png"
                    ></img>
                  </div>
                  <div className="w-full relative ">
                    <input
                      placeholder="What are you looking for?"
                      className="hidden lg:block w-full bg-transparent text-sm font-normal  outline-none placeholder:text-black placeholder:text-opacity-70 p-2 "
                      value={searchTerm}
                      onChange={handleInputChange}
                    />
                    <input
                      placeholder="Search here for"
                      className="block lg:hidden w-full bg-transparent text-sm font-normal  outline-none placeholder:text-black placeholder:text-opacity-70 p-1 "
                      value={searchTerm}
                      onChange={handleInputChange}
                    />
                    {searchTerm && (
                      <ul className="bg-white shadow-md absolute z-50 w-full max-h-[300px] overflow-y-auto rounded-md mt-2 ">
                        {searchResults.map((product) => (
                          <li
                            key={product.id}
                            className="px-4 py-2 hover:bg-gray-100 cursor-pointer  text-center "
                            onClick={() => handleProductClick(product.id)}
                          >
                            <div className="font-medium">{product.name}</div>
                            <div></div>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div className=" mx-4 my-3 flex gap-3 items-center justify-between text-center  lg:gap-6 md:gap-7">
              <div>
                {/* <div className="relative flex  flex-col items-center justify-center overflow-hidden ">
                <p className="absolute animate-ping  left-[-60px] top-[0px] rounded text-[#fa2121] w-full  font-bold text-[8px]">new</p> */}
                <img
                  src="/src/assets/Images/fashion_1f40553a5f_111.gif"
                  className=" cursor-pointer md:min-w-[150px] sm:min-w-[80px]"
                />
              {/* </div> */}
              
              </div>
              <div className="flex cursor-pointer items-center gap-[7px]">
                {!isLoggedIn ? (
                  <Link to={"/login"}>
                    <p className="cursor-pointer text-sm md:text-base md:font-medium md:text-black">
                      Login
                    </p>
                  </Link>
                ) : (
                  <div className="relative group">
                    <p className="cursor-pointer text-sm md:text-base md:font-medium md:text-black font-bold">
                      {userEmail?.split("@")[0].toUpperCase()}
                    </p>
                    <div className="absolute hidden group-hover:block bg-white border shadow right-0 z-10 px-3 py-2 text-sm cursor-pointer">
                      <span onClick={handleLogout}>Logout</span>
                    </div>
                  </div>
                )}
              </div>
              <div className="flex items-center gap-5 md:gap-8 ">
                <div className="relative">
                  <Link to={"/wishlist"}>
                    <img
                      src="/src/assets/Images/heart_black-svg.svg"
                      alt="save"
                      className="w-[20px] max-w-[20px] cursor-pointer sm:max-w-[40px] "
                    />
                    <div className="absolute right-[-7px] top-[-2px] flex size-3 items-center justify-center rounded-full bg-[orange] text-[10px] text-black  select-none md:select-text">
                      {getWishLength()}
                    </div>
                  </Link>
                </div>
                <div className="relative ">
                  <Link to={"/cart"}>
                    <img
                      src="/src/assets/Images/bag_black-svg.svg"
                      alt="cart"
                      className="w-[20px] max-w-[20px] cursor-pointer sm:max-w-[40px]  "
                    />
                    <div className="absolute right-[-7px] top-[-2px] flex size-3 items-center justify-center rounded-full bg-[orange] text-[10px] text-black  select-none md:select-text  ">
                      {getCartLength()}
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <nav className="flex items-center justify-center gap-8 border-b-[0.5px] bg-white pb-[2.5px]  md:flex  tab:mr-3 md:justify-start md:px-32">
            {services.map((category, index) => (
              <div className="group relative text-s  " key={index}>
                <button className=" relative text-black hover:text-black cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-amber-400 before:origin-center before:h-[2px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-300 after:absolute after:bg-amber-400 after:origin-center after:h-[2px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%]  ">
                  <Link to={`category/${category.category.link}`}>
                    <span className="mr-1 "> {category.category.name}</span>
                  </Link>
                </button>
                <ul
                  className="rounded absolute hidden text-gray-700  
             group-hover:block w-56 shadow-2xl  border-2 border-[#e6e3e369]  z-10 bg-white"
                >
                  {category.subcategories.map((subcat, index) => (
                    <div key={index}>
                      <li className=" py-2 px-2  cursor-pointer  hover:text-blue-500">
                        <Link
                          to={`category/${category.category.link}${subcat.link}`}
                        >
                          {subcat.name}
                        </Link>
                      </li>
                    </div>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>
      </div>
      <div>
        <div>
            <div className="block w-full md:hidden p-2 bg-black   ">
              <div
                className="w-full max-w-full md:min-w-30 flex  "
              >
                <div className="flex w-full items-center gap-3 p-1  rounded-[70px] bg-[#F0F0F0]  md:p-2">
                  <div>
                    <img
                      className=" w-5 ml-2  "
                      alt="search"
                      src="/src/assets/Images/search.png"
                    ></img>
                  </div>
                  <div className="w-full relative ">
                    <input
                      placeholder="What are you looking for ?"
                      className="w-full bg-transparent text-sm font-normal  outline-none placeholder:text-black placeholder:text-opacity-70  "
                      value={searchTerm}
                      onChange={handleInputChange}
                    />
                    {searchTerm && (
                      <ul className="bg-white shadow-md absolute z-50 w-full max-h-[300px] overflow-y-auto rounded-md mt-2 ">
                        {searchResults.map((product) => (
                          <li
                            key={product.id}
                            className="px-4 py-2 hover:bg-gray-100 cursor-pointer  text-center "
                            onClick={() => handleProductClick(product.id)}
                          >
                            <div className="font-medium">{product.name}</div>
                            <div></div>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
