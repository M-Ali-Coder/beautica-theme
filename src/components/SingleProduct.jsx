import React from "react";
import { MdStar, MdStarHalf } from "react-icons/md";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";

const SingleProduct = ({ img, productName, price, description, isNew }) => {
  return (
    <div className="single-product-wrapper font">
      <Link to="#">
        <div className="img-wrapper">
          <img src={img} alt="" id="singleProductImg" />
          <div className="quick-view">quick view</div>
          <div className="new-offer">new</div>
          <div className="add-to-wish-list">
            <FaHeart />
          </div>
        </div>
      </Link>

      <div className="product-details">
        <Link to="#" className="brandName">
          {productName}
        </Link>
        <span className="product-price">
          <b>${price}</b>
        </span>

        <p className="product-description">{description}</p>
        <div className="product-rating">
          <MdStar />
          <MdStar />
          <MdStar />
          <MdStar />
          <MdStarHalf />
        </div>
        <div className="add-to-cart">
          <form>
            <button className="single-product-cart">add to cart</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
