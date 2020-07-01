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
      showSideNav: false,
    };
  }
  render() {
    const { toggleProductCart, showSideNav } = this.state;

    return (
      <>
        <div className="mobile-main-header">
          <div className="open-side-bar">
            <FaBars onClick={() => this.setState({ showSideNav: true })} />
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
        {/* Side navbar */}

        {showSideNav && (
          <div className="sideNav font" id="sideNav">
            <div
              className="close-side-nav mr-bottom-30"
              onClick={() => this.setState({ showSideNav: false })}
            >
              x
            </div>
            <ul>
              <li>
                <Link to="#">trend now</Link>
                <i className="fas fa-chevron-down"></i>
                <div className="trend-now-menu">
                  <Link to="#">cosoplios</Link>
                  <Link to="#">destibukum maruris</Link>
                  <Link to="#">fermentum loremous</Link>
                  <Link to="#">habitasse molateas</Link>
                  <Link to="#">maecenase commodos</Link>
                  <Link to="#">malesuada sarcus</Link>
                  <Link to="#">mallancelos</Link>
                </div>
              </li>
              <li>
                <Link to="#">makeup</Link>
              </li>
              <li>
                <Link to="#">nail</Link>
              </li>
              <li>
                <Link to="#">beauty accessories</Link>
                <i className="fas fa-chevron-down"></i>
                <div className="trend-now-menu">
                  <Link to="#">cosoplios</Link>
                  <Link to="#">destibukum maruris</Link>
                  <Link to="#">fermentum loremous</Link>
                  <Link to="#">habitasse molateas</Link>
                  <Link to="#">maecenase commodos</Link>
                  <Link to="#">malesuada sarcus</Link>
                  <Link to="#">mallancelos</Link>
                </div>
              </li>
              <li>
                <Link to="#">body art</Link>
                <i className="fas fa-chevron-down"></i>
                <div className="trend-now-menu">
                  <Link to="#">cosoplios</Link>
                  <Link to="#">destibukum maruris</Link>
                  <Link to="#">fermentum loremous</Link>
                  <Link to="#">habitasse molateas</Link>
                  <Link to="#">maecenase commodos</Link>
                  <Link to="#">malesuada sarcus</Link>
                  <Link to="#">mallancelos</Link>
                </div>
              </li>
              <li>
                <Link to="#">makeup tools</Link>
              </li>
              <li>
                <Link to="#">fragrance</Link>
              </li>
              <li>
                <Link to="#">lookbook</Link>
              </li>
            </ul>
          </div>
        )}
      </>
    );
  }
}

export default MobileMainHeader;
