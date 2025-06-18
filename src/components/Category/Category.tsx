import { useParams, useNavigate } from "react-router-dom";
import data from "../DataSet/Data.json";
import type { CategoryData } from "../MainCategory/typing";

const categoryData: CategoryData = data;

const Category = () => {
  const { categoryName } = useParams();
  const navigate = useNavigate();

  const category = categoryData.categories.find(
    (cat) => cat.id === categoryName
  );

  if (!category) return <div className="text-center">Category Not Found</div>;

  return (
    <section className="w-full">
      <div className="mx-auto pt-4 sm:px-6 lg:px-8 ">
        <div className="w-full sm:h-[400px] p-2 sm:p-0 bg-cover sm:bg-cover h-[250px]"><img src={category.mainbanner} alt={category.name} className="w-full sm:h-[400px] p-2 sm:p-0 bg-cover sm:bg-cover h-[250px]"/></div>
        <h2 className="text-2xl font-bold text-center my-4">
          {category.name} Collection
        </h2>
        <div>
        <div className="w-full m-4 mx-auto sm:m-0  ">
           <div className="mx-auto grid grid-cols-1 w-fit md:grid-cols-3 lg:grid-cols-3 gap-6  sm:mx-0 ">
          {category.child_categories.map((subcat) => (
            <div
              key={subcat.id}
              className="cursor-pointer w-72 sm:w-64 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow"
              onClick={() => navigate(`/category/${category.id}/${subcat.id}`)}
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
        </div>
      </div>
      </div>
      
      </div>
    </section>
  );
};

export default Category;
