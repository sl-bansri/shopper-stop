import { useParams, useNavigate } from "react-router-dom";
import data from "../DataSet/Data.json";
import type { CategoryData } from "../MainCategory/typing";
import SectionHeading from "../SectionHeading";
import ImagePoster from "../ImagePoster";
import GridItems from "../GridItems";


const categoryData: CategoryData = data;

const Category = () => {
  const { categoryName } = useParams();
  const navigate = useNavigate();

  const category = categoryData.categories.find(
    (cat) => cat.id === categoryName
  );

  if (!category) return <div className="text-center">Category Not Found</div>;

  return (
    <section className=" w-full mx-auto pt-4 sm:px-6 lg:px-8 ">
      <div className="mx-auto  sm:px-6 lg:px-8 flex flex-col gap-4 ">
        <div className="w-full sm:h-[400px] p-2 sm:p-0 bg-cover sm:bg-cover h-[250px]">
          <ImagePoster
          variant="primary"
            src={category.mainbanner}
            alt={category.name}
            className="p-2 sm:p-0 "
          />
        </div>
        <div className="ml-4 mr-4 border-2 inset-2 bg-[#eeebebbb] justify-center md:ml-0  md:mr-0 flex gap-3">
          <SectionHeading variant="primary" size="large" className="italic">{category.name}</SectionHeading>
          <SectionHeading variant="secondary" size="medium" className="italic pt-1">Collection</SectionHeading>
        </div>
        <div>
          <div className="w-full m-4 mx-auto sm:m-0  ">
            <GridItems variant="primary">
              {category.child_categories.map((subcat) => (
                <div
                  key={subcat.id}
                  className="cursor-pointer w-72 sm:w-64 md:w-56 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow"
                  onClick={() =>
                    navigate(`/category/${category.id}/${subcat.id}`)
                  }
                >
                  <img
                    src={subcat.image}
                    alt={subcat.name}
                    className="w-full object-cover "
                  />
                  <h3 className="text-xl font-semibold text-center py-4">
                    {subcat.name}
                  </h3>
                </div>
              ))}
            </GridItems>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Category;
