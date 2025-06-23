import { Link } from "react-router-dom";
import { services } from "./constants";
import GridItems from "../../GridItems";

const CategorySection = () => {
  return (
    <section className="mt-4 p-2 mx-auto bg-[#ebeeee8a]">
      <div className=" mx-auto  sm:px-6 lg:px-8 flex flex-col justify-center">
        <GridItems variant="mainsection" >
          {services.map((service, id) => (
            <div key={id} className="bg-gray-100   flex  text-center justify-center">
              <div>
                <Link to={"/category"}>
                  <img
                    src={service.image}
                    alt="service"
                    className="w-100 h-90 "
                  />
                </Link>
              </div>
            </div>
          ))}
        </GridItems>
      </div>
    </section>
  );
};

export default CategorySection;
