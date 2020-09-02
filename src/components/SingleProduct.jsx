import React from "react";

import { MdStar, MdStarHalf } from "react-icons/md";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";

import Img from "../assets/images/products/product-3.webp";
import ProductModal from "./ProductModal";
class SingleProduct extends React.Component {
  constructor(props) {
    super(props);

    // Binding
    this.closeModal = this.closeModal.bind(this);

    this.state = {
      showModal: false,
    };
  }

  closeModal() {
    this.setState({ showModal: false });
  }

  render() {
    const { view } = this.props;
    const { showModal } = this.state;

    return (
      <div className="single-product-wrapper">
        <div className={view === "row" ? "one-column-content" : "multi-columns-content"}>
          <div className="img-wrapper">
            <img src={Img} alt="" id="singleProductImg" />
            <div className="new-offer">new</div>

            <div className="add-to-wish-list">
              <FaHeart />
            </div>
            <div className="quick-view" onClick={() => this.setState({ showModal: true })}>
              Quick View
            </div>
          </div>

          <div className="product-details">
            <Link to={`/products/product`} className="brandName">
              productName
            </Link>
            <span className="product-price">
              <b>$100.00</b>
            </span>

            <p className="product-description">description</p>
            <div className="product-rating">
              <MdStar />
              <MdStar />
              <MdStar />
              <MdStar />
              <MdStarHalf />
            </div>
            <div className="add-to-cart">
              <button>add to cart</button>
            </div>
          </div>
        </div>
        {showModal && <ProductModal closeModal={this.closeModal} />}
      </div>
    );
  }
}
export default SingleProduct;
