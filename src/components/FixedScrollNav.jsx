import React from "react";
import AppLogo from "../assets/images/logo.webp";
import { Link } from "react-router-dom";
import CartLogo from "../assets/svg/shopping-bag.svg";
import { connect } from "react-redux";
import { selectCartItemsCount } from "../redux/cart/cart.selectors";
import { FaSearch } from "react-icons/fa";

class ToggleScrollNav extends React.Component {
  constructor(props) {
    super(props);
    this.scrollFunction = this.scrollFunction.bind(this);
    this.toggleNavState = this.toggleNavState.bind(this);

    this.state = {
      showNavigation: true,
    };
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

  toggleNavState() {
    this.setState({ showNavigation: !this.state.showNavigation });
  }

  render() {
    const { showNavigation } = this.state;
    const { cartItemsCount } = this.props;

    return (
      <div id="fixed-scroll-navigation">
        <div className="logo">
          <Link to="/">
            <img src={AppLogo} alt="app-logo" />
          </Link>
        </div>

        {showNavigation ? (
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
        ) : (
          <div className="search-products">
            <input
              type="text"
              id="searchForProduct"
              placeholder="Search for products"
              autoComplete="off"
            />
          </div>
        )}

        <div className="shopping-cart-products-wrapper">
          <FaSearch onClick={this.toggleNavState} />
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
