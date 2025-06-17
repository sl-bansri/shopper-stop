import { Link } from "react-router-dom"

const PosterSection = () => {
  return (
    <div className="  flex flex-col gap-4 mt-4 mx-auto sm:mx-auto sm:p-0">
        <div className=" h-[150px] sm:h-[400px] ">
            <Link to={"/category/men"}>
              <img src="/src/assets/Images/menswear_main_banner_web_cedd26d476.avif" alt="banner1" className="w-full  h-[150px] sm:h-[400px]  bg-cover"/>
            </Link>

        </div>
        <div className="h-[150px] sm:h-[400px]  ">
          <Link to={"/category/women"}>
            <img src="/src/assets/Images/SS_25_pvt_brands_main_kv_web02_a5775f6506.avif" alt="banner2"  className="w-full h-[150px] sm:h-[400px]  bg-cover"/>
          </Link>
        </div>
    </div>
  )
}

export default PosterSection