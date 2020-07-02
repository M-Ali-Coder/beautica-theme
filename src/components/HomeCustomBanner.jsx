import React from "react";
import BannerItem1 from "../assets/images/home-custom-banner-1.jpg";
import BannerItem2 from "../assets/images/home-custom-banner-2.jpg";
import { Link } from "react-router-dom";

const HomeCustomBanner = () => {
  return (
    <div className="container home-custom-banner-wrapper">
      <div className="home-custom-banner-content">
        <div className="banner-item">
          <img src={BannerItem1} alt="banner-item-1" />
          <Link to="/shop" className="shop-now">
            shop now
          </Link>
        </div>
        <div className="banner-item">
          <img src={BannerItem2} alt="banner-item-2" />
          <Link to="/shop" className="shop-now">
            shop now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeCustomBanner;
