import React from "react";
import AppLogo from "../assets/images/logo.webp";
import { FaHeart } from "react-icons/fa";
import ShoppingBag from "../assets/svg/shopping-bag.svg";
import { Link } from "react-router-dom";
import MobileMainHeader from "./MobileMainHeader";
import CartDropDownMenu from "./CartDropDownMenu";

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
                  <Link to="/register">
                    <b>Login</b>
                  </Link>
                  <span className="or-sperator">or</span>
                  <Link to="/register" className="font-bold">
                    Register
                  </Link>
                </div>
                <div className="vertical-line"></div>
                <div className="shopping-cart font">
                  <Link to="#" className="wishlist">
                    <FaHeart />
                  </Link>

                  {/* Drop down cart menu   */}
                  <div
                    className="in-your-cart"
                    onClick={() => this.setState({ toggleProductCart: !toggleProductCart })}
                  >
                    <img src={ShoppingBag} id="header-shopping-cart" alt="" />
                    <span className="cart-products">0</span>

                    <CartDropDownMenu toggleProductCart={toggleProductCart} />
                  </div>
                  {/* Drop down cart menu */}
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

export default MainHeader;
