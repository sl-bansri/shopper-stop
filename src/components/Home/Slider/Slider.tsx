import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css";
import { Link} from "react-router-dom";

const Slider = () => {

  return (
    <div className="mx-auto ">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
      >
        <div >
          <SwiperSlide>
            <div className="h-full w-full ">
              <Link to={"/category/women"}>
              <img
                src="/src/assets/Images/indianwear_main_banner_web_b358d02cec.avif"
                alt="..."
                className="bg-cover h-full w-full"
              />
              </Link>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-full w-full ">
            <Link to={"/category/men"}>
              <img
                src="/src/assets/Images/menswear_main_banner_web_cedd26d476.avif"
                alt="..."
                className="bg-cover h-full w-full "
              />
              </Link>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className=" h-full">
              <Link to={"/category"}>
              <img
                src="/src/assets/Images/SS_25_pvt_brands_main_kv_web02_a5775f6506.avif"
                className="bg-cover h-full w-full"
                alt="..."
              />
              </Link>
            </div>
          </SwiperSlide>
        </div>
      </Swiper>
    </div>
  );
};
export default Slider;
