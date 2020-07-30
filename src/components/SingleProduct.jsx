import React from "react";
import { MdStar, MdStarHalf } from "react-icons/md";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { addItem } from "../redux/cart/cart.actions";
import { connect } from "react-redux";

const SingleProduct = ({ item, addItem }) => {
  const { img, productName, price, description, isNew, routerLink } = item;

  return (
    <div className="single-product-wrapper show-one-row-view  font">
      <div className="content">
        <Link to={`/products/${routerLink}`} className="img-wrapper">
          <img src={img} alt="" id="singleProductImg" />
          <div className="new-offer">{isNew}</div>
          <div className="add-to-wish-list">
            <FaHeart />
          </div>
        </Link>

        <div className="product-details">
          <Link to={`/products/${routerLink}`} className="brandName">
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
            <button onClick={() => addItem(item)}>add to cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(SingleProduct);
