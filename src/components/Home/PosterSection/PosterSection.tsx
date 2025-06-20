import { Link } from "react-router-dom"
import ImagePoster from "../../ImagePoster"

const PosterSection = () => {
  return (
    <div className=" flex flex-col gap-4 mt-4 mx-auto sm:mx-auto  sm:gap-4 ">
        <div className=" h-[250px] sm:h-[300px] ">
            <Link to={"/category/men"}>
              <ImagePoster variant="secondary" src="/src/assets/Images/menswear_main_banner_web_cedd26d476.avif" alt="banner1"   />
            </Link>

        </div>
        <div className="h-[250px] sm:h-[300px]  ">
          <Link to={"/category/women"}>
            <ImagePoster src="/src/assets/Images/SS_25_pvt_brands_main_kv_web02_a5775f6506.avif" alt="banner2"  />
          </Link>
        </div>
    </div>
  )
}

export default PosterSection