import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { selectCartItems } from "../../redux/cart/cart.selectors";

class CartPage extends React.Component {
  render() {
    const { cartItems } = this.props;

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
                    {cartItems.map(({ img, productName, price, quantity }, idx) => (
                      <tr key={idx}>
                        <td className="product-preview">
                          <img src={img} alt="product" />
                          <div className="product-quick-info">
                            <span className="product-category">collette</span>
                            <Link to="#" className="product-name">
                              {productName}
                            </Link>
                          </div>
                        </td>
                        <td className="font-bold">price</td>
                        <td className="font-bold">
                          <div className="product-quantity">
                            <button onClick={() => quantity - 1}>-</button>
                            <div>{quantity}</div>
                            <button onClick={() => quantity++}>+</button>
                          </div>
                        </td>
                        <td className="font-bold">{quantity * price}</td>
                        <td className="font-bold remove-item">X</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="proceed-to-checkout">
              <ul className="proceed-to-checkout-list">
                <li>
                  <span>Subtotal:</span>
                  <span>$396.00</span>
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
                  <span>$435.60</span>
                </li>
              </ul>
              <button>proceed to checkout</button>
            </div>
          </>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  cartItems: selectCartItems(state),
});

export default connect(mapStateToProps)(CartPage);
