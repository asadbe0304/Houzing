// import { Component } from "react";
import Slider from "react-slick";
import "./index.scss";
import Img from "./../../../public/images/hero.png";
import Img2 from "./../../../public/images/main.png";
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
      <div className="main w-full flex items-center justify-center my-2">
        <Slider {...settings} className="w-full flex items-center justify-center">
          <div className="w-full flex items-center justify-center">
            <img src={Img} className="w-full" width={'1440px'}    alt="images" />
            <div className="hero-card mx-auto absolute top-1/2  z-10 flex-col flex items-center justify-between gap-2">
              <h2 className="text-white ">Skyper Pool Partment</h2>
              <p className="text-white">
                112 Glenwood Ave Hyde Park, Boston, MA
              </p>
            </div>
          </div>
          <div className="w-full">
            <img src={Img2} className="w-full" width={'1440px'}   alt="images" />
            <div className="hero-card mx-auto absolute top-1/2 z-10 flex-col flex items-center justify-between gap-2">
              <h2 className="text-white ">Skyper Pool Partment</h2>
              <p className="text-white">
                112 Glenwood Ave Hyde Park, Boston, MA
              </p>
            </div>
          </div>
          <div className="w-full">
            <img src={Img} className="w-full" width={'1440px'}    alt="images" />
            <div className="hero-card mx-auto absolute top-1/2  z-10 flex-col flex items-center justify-between gap-2">
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
