import React from "react";
import Swiper from "react-id-swiper";
import "swiper/css/swiper.css";
import Slide1 from "../../assets/images/lookbook/slideshow-1.jpg";
import Slide2 from "../../assets/images/lookbook/slideshow-2.jpg";
import Slide3 from "../../assets/images/lookbook/slideshow-3.jpg";

const LookBook = () => {
  const params = {
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
  };
  return (
    <div className="container lookbook-page-wrapper">
      <h1>Look Book</h1>
      <Swiper {...params}>
        <div>
          <img src={Slide1} alt="slide-1" />
        </div>
        <div>
          <img src={Slide2} alt="slide-2" />
        </div>
        <div>
          <img src={Slide3} alt="slide-3" />
        </div>
      </Swiper>
    </div>
  );
};

export default LookBook;
