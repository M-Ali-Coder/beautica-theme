import React from "react";
import { Link } from "react-router-dom";

const UpperNav = () => {
  return (
    <div className="upper-nav">
      <div className="container upper-nav-content">
        <div className="left-side">
          <p>3 Free Samples with any Purchase</p>
        </div>
        <div className="right-side">
          <p>Order Online 0800 108 8822 (UK) or + 44 203 471 3000</p>
          <Link to="#" className="mr-right-30 mr-left-30">
            Gift Certifitions
          </Link>
          <Link to="#">My Account</Link>
        </div>
      </div>
    </div>
  );
};

export default UpperNav;
