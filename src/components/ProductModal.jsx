import React from "react";
import Img from "../assets/images/products/product-1.webp";
import { FaRegStar, FaRegStarHalf } from "react-icons/fa";

const ProductModal = () => {
  return (
    <div id="product-modal-wrapper">
      <div className="product-modal-content">
        <div className="row">
          <div className="col-lg-6">
            <div className="product-img-wrapper">
              <img src={Img} alt="" />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="product-details">
              <h3>Product title here</h3>

              <div className="product-price">
                <span className="old-price">$60.00</span>
                <span className="new-price">
                  <b>$39.00</b>
                </span>
              </div>

              <div className="product-rating">
                <FaRegStar />
                <FaRegStar />
                <FaRegStar />
                <FaRegStar />
                <FaRegStarHalf />
              </div>

              <p className="product-description">
                Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo
                minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis
                dolor repellendus.
              </p>

              <div className="product-quantity">
                <button>-</button>
                <span className="quantity font-size-14">1</span>
                <button>+</button>
              </div>

              <form id="addToCart">
                <button type="submit">add to cart</button>
              </form>
            </div>
          </div>
        </div>

        <span id="closeModal">X</span>
      </div>
    </div>
  );
};

export default ProductModal;
