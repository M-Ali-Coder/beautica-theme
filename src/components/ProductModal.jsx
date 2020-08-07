import React from "react";
import { MdStar, MdStarHalf } from "react-icons/md";

const ProductModal = ({ item, closeModal }) => {
  const { img, productName, price, description } = item;

  return (
    <div id="product-modal-wrapper">
      <div className="product-modal-content">
        <div className="row">
          <div className="col-lg-6">
            <div className="product-img-wrapper">
              <img src={img} alt="" />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="product-details">
              <h3>{productName}</h3>

              <div className="product-price">
                <span className="new-price">
                  <b>{price}</b>
                </span>
              </div>

              <div className="product-rating">
                <MdStar />
                <MdStar />
                <MdStar />
                <MdStar />
                <MdStarHalf />
              </div>

              <p className="product-description">{description}</p>

              <div id="addToCart">
                <button>add to cart</button>
              </div>
            </div>
          </div>
        </div>

        <span id="closeModal" onClick={() => closeModal()}>
          X
        </span>
      </div>
    </div>
  );
};

export default ProductModal;
