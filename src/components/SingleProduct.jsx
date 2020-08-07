import React from "react";
import { MdStar, MdStarHalf } from "react-icons/md";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { addItem } from "../redux/cart/cart.actions";
import { connect } from "react-redux";
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
    const { showModal } = this.state;
    const { item, view, addItem } = this.props;
    const { img, productName, price, description, isNew, routerLink } = item;

    return (
      <div className="single-product-wrapper">
        <div className={view === "row" ? "one-column-content" : "multi-columns-content"}>
          <div className="img-wrapper">
            <img src={img} alt="" id="singleProductImg" />
            {isNew && <div className="new-offer">new</div>}

            <div className="add-to-wish-list">
              <FaHeart />
            </div>
            <div className="quick-view" onClick={() => this.setState({ showModal: true })}>
              Quick View
            </div>
          </div>

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
        {showModal && <ProductModal item={item} closeModal={this.closeModal} />}
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(SingleProduct);
