import React from "react";
import AppLogo from "../assets/images/logo.webp";
import ShoppingBag from "../assets/svg/shopping-bag.svg";
import PayPalCheckout from "../assets/images/checkout-logo-small.png";
import DummyCartProduct from "../assets/images/products/product-1.webp";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import MobileMainHeader from "./MobileMainHeader";
import { auth } from "../firebase/firebase.utils";
import { connect } from "react-redux";

class MainHeader extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      toggleProductCart: false,
      toggleLoginForm: false,
    };
  }

  render() {
    const { toggleProductCart } = this.state;
    const { currentUser } = this.props;

    return (
      <>
        <div className="main-header">
          <div className="container">
            <div className="main-header-content">
              <div className="search-products">
                <input
                  type="text"
                  id="searchForProduct"
                  placeholder="Search for products"
                  autoComplete="off"
                />
              </div>
              <div className="logo">
                <Link to="/">
                  <img src={AppLogo} alt="logo" />
                </Link>
              </div>
              <div className="user-actions">
                <div className="hi-customer">
                  <div>Hi Customer</div>
                  {currentUser ? (
                    <span onClick={() => auth.signOut()}>
                      <b>Logout</b>
                    </span>
                  ) : (
                    <Link to="/register">
                      <b>Login</b>
                    </Link>
                  )}
                  <span className="or-sperator">or</span>
                  <Link to="/register" className="font-bold">
                    Register
                  </Link>
                </div>
                <div className="vertical-line"></div>
                <div className="shopping-cart font">
                  <Link to="/wishlist" className="wishlist">
                    <FaHeart />
                  </Link>
                  <div
                    className="in-your-cart"
                    onClick={() => this.setState({ toggleProductCart: !toggleProductCart })}
                  >
                    <img src={ShoppingBag} id="header-shopping-cart" alt="" />
                    <span className="cart-products">1</span>

                    {toggleProductCart && (
                      <div className="product-in-your-cart">
                        <div className="cart-product-details">
                          <div className="product-img">
                            <img
                              src={DummyCartProduct}
                              id="product-example-img"
                              alt="cart-product"
                            />
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

                        <Link to="/checkout" id="checkout-now">
                          check out now
                        </Link>
                        <Link to="/cart" id="view-your-cart">
                          view cart
                        </Link>

                        <span className="or-use">-- or use --</span>
                        <Link to="#" className="checkout-with-paypal">
                          <img src={PayPalCheckout} alt="paypal-chckout" />
                        </Link>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <MobileMainHeader />
      </>
    );
  }
}

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser,
});

export default connect(mapStateToProps)(MainHeader);
