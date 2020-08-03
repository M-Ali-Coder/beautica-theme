import React from "react";
import Swiper from "react-id-swiper";
import "swiper/css/swiper.css";
import FollowUsItem1 from "../assets/images/follow-us/follow-us-1.jpg";
import FollowUsItem2 from "../assets/images/follow-us/follow-us-2.jpg";
import FollowUsItem3 from "../assets/images/follow-us/follow-us-3.jpg";
import FollowUsItem4 from "../assets/images/follow-us/follow-us-4.jpg";
import FollowUsItem5 from "../assets/images/follow-us/follow-us-5.jpg";
import FollowUsItem6 from "../assets/images/follow-us/follow-us-6.jpg";
import FollowUsItem7 from "../assets/images/follow-us/follow-us-7.jpg";

// Styles

import { FollowUsContainer, FollowUsImagesContainer } from "../styles/follow-us.styles";

const FollowUs = () => {
  // Swiper
  const params = {
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    loop: true,
    breakpoints: {
      1024: {
        slidesPerView: 7,
        spaceBetween: 0,
      },
      768: {
        slidesPerView: 6,
        spaceBetween: 0,
      },
      640: {
        slidesPerView: 5,
        spaceBetween: 0,
      },
      320: {
        slidesPerView: 4,
        spaceBetween: 0,
      },
    },
  };

  return (
    <FollowUsContainer>
      <Swiper {...params}>
        <FollowUsImagesContainer>
          <img src={FollowUsItem1} alt="item" />
        </FollowUsImagesContainer>
        <FollowUsImagesContainer>
          <img src={FollowUsItem2} alt="item" />
        </FollowUsImagesContainer>
        <FollowUsImagesContainer>
          <img src={FollowUsItem3} alt="item" />
        </FollowUsImagesContainer>
        <FollowUsImagesContainer>
          <img src={FollowUsItem4} alt="item" />
        </FollowUsImagesContainer>
        <FollowUsImagesContainer>
          <img src={FollowUsItem5} alt="item" />
        </FollowUsImagesContainer>
        <FollowUsImagesContainer>
          <img src={FollowUsItem6} alt="item" />
        </FollowUsImagesContainer>
        <FollowUsImagesContainer>
          <img src={FollowUsItem7} alt="item" />
        </FollowUsImagesContainer>
      </Swiper>
    </FollowUsContainer>
  );
};

export default FollowUs;
