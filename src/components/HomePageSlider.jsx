import React from "react";
import Swiper from "react-id-swiper";
import "swiper/css/swiper.css";
import Slide1 from "../assets/images/home-slide-1.jpg";
import Slide2 from "../assets/images/home-slide-2.jpg";
import Slide3 from "../assets/images/home-slide-3.jpg";

const HomePageSlider = () => {
  const params = {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    autoplay: {
      delay: 250000,
      disableOnInteraction: false,
    },
  };
  return (
    <div className="home-page-sliser-wrapper container">
      <Swiper {...params}>
        <div className="slider-item">
          <img src={Slide1} alt="" />
        </div>
        <div className="slider-item">
          <img src={Slide2} alt="" />
        </div>
        <div className="slider-item">
          <img src={Slide3} alt="" />
        </div>
      </Swiper>
    </div>
  );
};

export default HomePageSlider;
