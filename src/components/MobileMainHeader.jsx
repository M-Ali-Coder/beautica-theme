import React from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import AppLogo from "../assets/images/logo.webp";
import ShoppingBag from "../assets/svg/shopping-bag.svg";
import CartDropDownMenu from "./CartDropDownMenu";

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
    const { cartItemsCount } = this.props;

    return (
      <>
        <div className="mobile-main-header">
          <div className="open-side-bar">
            <FaBars onClick={() => this.setState({ showSideNav: true })} />
          </div>
          <Link to="/" className="logo">
            <img src={AppLogo} alt="logo" />
          </Link>

          <div className="shopping-cart">
            <img
              src={ShoppingBag}
              alt="shopping-bag"
              className="cart-shopping-bag"
              onClick={() => this.setState({ toggleProductCart: !toggleProductCart })}
            />
            <CartDropDownMenu toggleProductCart={toggleProductCart} />
            <span className="cart-products">{cartItemsCount}</span>
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
