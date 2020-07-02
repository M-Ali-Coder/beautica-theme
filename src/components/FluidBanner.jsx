import React from "react";
import BannerItem1 from "../assets/images/fluid-grid/item-1.jpg";
import BannerItem2 from "../assets/images/fluid-grid/item-2.jpg";
import BannerItem3 from "../assets/images/fluid-grid/item-3.jpg";

const FluidBanner = () => {
  return (
    <div className="container fluid-banner-wrapper">
      <div className="banner-item">
        <img src={BannerItem1} alt="banner-item-1" />
        <div className="banner-content">
          <span>lips</span>
        </div>
      </div>
      <div className="banner-item">
        <img src={BannerItem2} alt="banner-item-2" />
        <div className="banner-content">
          <span>tools</span>
        </div>
      </div>
      <div className="banner-item">
        <img src={BannerItem3} alt="banner-item-3" />
        <div className="banner-content">
          <span>face</span>
        </div>
      </div>
    </div>
  );
};

export default FluidBanner;
