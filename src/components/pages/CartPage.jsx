import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {
  selectCartItems,
  selectCartItemsPrices,
  selectCartItemsCount,
} from "../../redux/cart/cart.selectors";
import { createStructuredSelector } from "reselect";
import CartItem from "../CartItem";
import StripeIndex from "../../stripe/StripeIndex";

class CartPage extends React.Component {
  render() {
    const { cartItems, cartItemsPrices, cartItemsQty } = this.props;

    return (
      <div className="cart-page-wrapper container">
        {!cartItems.length ? (
          <h1>
            No item in your cart, <Link to="/">Continue shopping</Link>
          </h1>
        ) : (
          <>
            <div className="cart-page-content-wrapper font">
              <div className="cart-page-content">
                <h3>
                  your cart{" "}
                  <span className="items-count-in-shopping-cart">({cartItems.length} items)</span>
                </h3>
              </div>

              <div className="shopping-cart-table">
                <table>
                  <thead>
                    <tr>
                      <th>item</th>
                      <th>price</th>
                      <th>quantity</th>
                      <th>total</th>
                      <th>remove</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartItems.map((item, idx) => (
                      <CartItem key={idx} item={item} />
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div style={{ color: "red", margin: "20px 0" }}>
              "*This payment for development purpose only*"
              <br />
              "*Please, use this following test credit cart number*"
              <br />
              "4242 4242 4242 4242" - EXP: 11 / 20 - CVV: 123
            </div>

            <div className="proceed-to-checkout">
              <ul className="proceed-to-checkout-list">
                <li>
                  <span>Subtotal:</span>
                  <span>${cartItemsPrices}</span>
                </li>
                <li>
                  <span>Shipping:</span>
                  <Link to="#">Add Info</Link>
                </li>
                <li>
                  <span>Tax:</span>
                  <span>$39.60</span>
                </li>
                <li>
                  <span>Coupon Code:</span>
                  <Link to="#">Add Coupon</Link>
                </li>
                <li>
                  <span>Gift Certificate:</span>
                  <Link to="#">Gift Certificate</Link>
                </li>
                <li>
                  <span>Grand total:</span>
                  <span>${cartItemsPrices * cartItemsQty}</span>
                </li>
              </ul>

              <StripeIndex price={`$${cartItemsPrices * cartItemsQty}`} />
            </div>
          </>
        )}
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  cartItemsPrices: selectCartItemsPrices,
  cartItemsQty: selectCartItemsCount,
});

export default connect(mapStateToProps)(CartPage);
