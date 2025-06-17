import { useNavigate } from "react-router-dom";
import data from "../DataSet/Data.json";
import type { CategoryData } from "./typing";

const categoryData: CategoryData = data;

const MainCategory = () => {
  const navigate = useNavigate();

  return (
    <section className=" w-full mx-auto ">
      <div className="w-full m-4 mx-auto">
        <div className="ml-4 mr-4 border-2 inset-2 bg-[#eeebebbb] justify-center  flex gap-3 ">
          <div className="text-[#0f0f0f] text-2xl font-medium">Global</div>
          <div className="text-[#474747] text-xl pt-1 font-medium">Glam</div>
        </div>
        <img
          src="/src/assets/Images/menswear_main_banner_web_cedd26d476.avif"
          alt="banner1"
          className="bg-cover p-4 h-[400px] w-full "
        ></img>
      </div>
      <div className="ml-4 mr-4 border-2 inset-2 bg-[#eeebebbb] justify-center  flex gap-3  text-[#0f0f0f] text-2xl font-medium">
        Essentials For Style
      </div>
      <div className="w-full m-4 mx-auto ">
        <div className="mx-auto grid grid-cols-1 w-fit md:grid-cols-2 lg:grid-cols-2 gap-4  ">
          {categoryData.categories.map((category) => (
            <div
              key={category.name}
              className="relative cursor-pointer w-80  rounded-lg overflow-hidden shadow-lg  transition-shadow "
              onClick={() => navigate(`/category/${category.id}`)}
            >
              <img
                src={category.image}
                alt={category.name}
                className="w-full "
              />
              <h2 className="text-xl font-semibold text-center py-4">
                {category.name}
              </h2>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MainCategory;
