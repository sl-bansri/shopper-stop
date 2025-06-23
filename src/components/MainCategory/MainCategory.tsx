import { useNavigate } from "react-router-dom";
import data from "../DataSet/Data.json";
import type { CategoryData } from "./typing";
import SectionHeading from "../SectionHeading";
import ImagePoster from "../ImagePoster";
import GridItems from "../GridItems";

const categoryData: CategoryData = data;

const MainCategory = () => {
  const navigate = useNavigate();

  return (
    <section className=" mx-auto pt-4 sm:px-6 lg:px-8 ">
      <div className="mx-auto pt-4 sm:px-6 lg:px-8 ">
        <div className="ml-4 mr-4 border-2 inset-2 bg-[#eeebebbb] justify-center  flex gap-3 ">
          <SectionHeading variant="primary" size="large">Global</SectionHeading>
          <SectionHeading variant="secondary" size="medium" className="pt-1">Glam</SectionHeading>
        </div>
        <ImagePoster
          src="/src/assets/Images/menswear_main_banner_web_cedd26d476.avif"
          alt="banner1"
          className=" p-4 "
        />
      </div>
      <div className="mx-auto pt-4 sm:px-6 lg:px-8 ">
        <div className="ml-4 mr-4 border-2 inset-2 bg-[#eeebebbb] justify-center  flex gap-3 ">
          <SectionHeading variant="primary" size="large">Essentials</SectionHeading>
          <SectionHeading variant="secondary" size="medium" className="pt-1">
            For Style
          </SectionHeading>
        </div>
        <div className="w-full m-4 mx-auto ">
          <GridItems variant="ordinary">
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
          </GridItems>
        </div>
      </div>
    </section>
  );
};

export default MainCategory;
