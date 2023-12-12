// import { Component } from "react";
import Slider from "react-slick";
import "./index.scss";
import Img from "./../../../public/images/hero.png";
const index = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
  };
  return (
    <>
      <div className="main w-full my-2">
        <Slider {...settings} className="w-full">
          <div className="w-full flex items-center justify-center">
            <img src={Img} className="cover" alt="images" />
            <div className="hero-card absolute top-1/2  z-10 flex-col flex items-center justify-between gap-2">
              <h2 className="text-white ">Skyper Pool Partment</h2>
              <p className="text-white">
                112 Glenwood Ave Hyde Park, Boston, MA
              </p>
            </div>
          </div>
          <div className="w-full">
            <img src={Img} className="cover" alt="images" />
            <div className="hero-card absolute top-1/2 z-10 flex-col flex items-center justify-between gap-2">
              <h2 className="text-white ">Skyper Pool Partment</h2>
              <p className="text-white">
                112 Glenwood Ave Hyde Park, Boston, MA
              </p>
            </div>
          </div>
          <div className="w-full">
            <img src={Img} className="cover" alt="images" />
            <div className="hero-card absolute top-1/2  z-10 flex-col flex items-center justify-between gap-2">
              <h2 className="text-white ">Skyper Pool Partment</h2>
              <p className="text-white">
                112 Glenwood Ave Hyde Park, Boston, MA
              </p>
            </div>
          </div>
        </Slider>
      </div>
    </>
  );
};

export default index;
{
  /* <button type="button" data-role="none" class="slick-arrow" style="display: block;"></button> */
}
