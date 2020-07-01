import React from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import AppLogo from "../assets/images/logo.webp";
import ShoppingBag from "../assets/svg/shopping-bag.svg";
import PayPalCheckout from "../assets/images/checkout-logo-small.png";
import DummyCartProduct from "../assets/images/products/product-1.webp";

class MobileMainHeader extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      toggleProductCart: false,
    };
  }
  render() {
    const { toggleProductCart } = this.state;

    return (
      <div className="mobile-main-header">
        <div className="open-side-bar">
          <FaBars />
        </div>
        <Link to="/" className="logo">
          <img src={AppLogo} alt="" />
        </Link>

        <div className="shopping-cart">
          <img
            src={ShoppingBag}
            alt="shopping-bag"
            className="cart-shopping-bag"
            onClick={() => this.setState({ toggleProductCart: !toggleProductCart })}
          />

          {toggleProductCart && (
            <div className="product-in-your-cart">
              <div className="cart-product-details">
                <div className="product-img">
                  <img src={DummyCartProduct} id="product-example-img" alt="cart-product" />
                </div>

                <div className="product-details">
                  <div className="product-name">coco lee</div>
                  <Link to="#" className="product-category">
                    [sanple] coco lee, coins are humis brown leather bag
                  </Link>
                  <div className="product-qty">
                    <span>1 X</span>
                    <span className="product-price"> $200.00</span>
                  </div>
                </div>
              </div>

              <div className="horizantal-line" />

              <Link to="checkout" id="checkout-now">
                check out now
              </Link>
              <Link to="/cart" id="view-your-cart">
                view cart
              </Link>

              <span className="or-use">-- or use --</span>
              <Link to="#" className="checkout-with-paypal">
                <img src={PayPalCheckout} alt="paypal-payment" />
              </Link>
            </div>
          )}
          <span className="cart-products">1</span>
        </div>
      </div>
    );
  }
}

export default MobileMainHeader;
