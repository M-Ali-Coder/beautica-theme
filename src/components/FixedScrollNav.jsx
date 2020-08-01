import React from "react";
import AppLogo from "../assets/images/logo.webp";
import { Link } from "react-router-dom";
import CartLogo from "../assets/svg/shopping-bag.svg";
import { connect } from "react-redux";
import { selectCartItemsCount } from "../redux/cart/cart.selectors";

class ToggleScrollNav extends React.Component {
  constructor(props) {
    super(props);
    this.scrollFunction = this.scrollFunction.bind(this);
  }

  // Toggl fixed navbar when scroll
  scrollFunction() {
    if (document.body.scrollTop > 250 || document.documentElement.scrollTop > 250) {
      document.getElementById("fixed-scroll-navigation").style.top = "0";
    } else {
      document.getElementById("fixed-scroll-navigation").style.top = "-100%";
    }
  }
  componentDidMount() {
    window.onscroll = this.scrollFunction;
  }

  render() {
    const { cartItemsCount } = this.props;

    return (
      <div id="fixed-scroll-navigation">
        <div className="logo">
          <Link to="/">
            <img src={AppLogo} alt="app-logo" />
          </Link>
        </div>

        <div className="app-pages-navigation font">
          <ul>
            <li>
              <Link to="/trend-now">#trend-now</Link>
            </li>
            <li>
              <Link to="/trend-now">makeup</Link>
            </li>
            <li>
              <Link to="/trend-now">nail</Link>
            </li>
            <li>
              <Link to="/trend-now">beauty accessories</Link>
            </li>
            <li>
              <Link to="/trend-now">body art</Link>
            </li>
            <li>
              <Link to="/trend-now">makeup tools</Link>
            </li>
            <li>
              <Link to="/trend-now">fragrance</Link>
            </li>
            <li>
              <Link to="/lookbook">lookbook</Link>
            </li>
          </ul>
        </div>

        <div className="shopping-cart-products-wrapper">
          <Link to="/cart">
            <img src={CartLogo} alt="shopping-cart-icon" />

            <div className="product-quantity">
              <span>{cartItemsCount}</span>
            </div>
          </Link>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  cartItemsCount: selectCartItemsCount(state),
});

export default connect(mapStateToProps)(ToggleScrollNav);
