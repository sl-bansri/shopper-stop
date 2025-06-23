import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css";
import { Link} from "react-router-dom";
import ImagePoster from "../../ImagePoster";

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
              <ImagePoster
              variant="primary"
                src="/src/assets/Images/indianwear_main_banner_web_b358d02cec.avif"
                alt="..."
              />
              </Link>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-full w-full ">
            <Link to={"/category/men"}>
              <ImagePoster
              variant="primary"
                src="/src/assets/Images/menswear_main_banner_web_cedd26d476.avif"
                alt="..."
              />
              </Link>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className=" h-full">
              <Link to={"/category"}>
              <ImagePoster
              variant="primary"
                src="/src/assets/Images/SS_25_pvt_brands_main_kv_web02_a5775f6506.avif"
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
