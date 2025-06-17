import CategorySection from "../../components/Home/CategorySection";
import PosterSection from "../../components/Home/PosterSection/PosterSection";

import Slider from "../../components/Home/Slider";

function HomePage() {
  return (
    <div className="mx-auto max-w-[1280px] pt-4 p-3 sm:pt-2" >

      <Slider />
      <CategorySection />
      <PosterSection />

    </div>
  );
}

export default HomePage;
