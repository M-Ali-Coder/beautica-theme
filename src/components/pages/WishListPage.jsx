import React, { Component } from "react";
import Product from "../../assets/images/products/product-5.jpg";
import { Link } from "react-router-dom";

class WishListPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      quantity: 1,
    };
  }
  render() {
    const { quantity } = this.state;
    return (
      <div>
        <div className="container cart-page-wrapper font">
          <div className="cart-page-content">
            <h3>
              your cart <span className="items-count-in-shopping-cart">(3 items)</span>
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
                <tr>
                  <td className="product-preview">
                    <img src={Product} alt="product" />
                    <div className="product-quick-info">
                      <span className="product-category">collette</span>
                      <Link to="#" className="product-name">
                        [Sample] Collette, florentine jungle dress
                      </Link>
                    </div>
                  </td>
                  <td className="font-bold">$99.00</td>
                  <td className="font-bold">
                    <div className="product-quantity">
                      <button onClick={() => this.setState({ quantity: quantity - 1 })}>-</button>
                      <input
                        type="tel"
                        min="1"
                        value={quantity}
                        onChange={() => this.setState({ quantity: quantity + 1 })}
                      />
                      <button onClick={() => this.setState({ quantity: quantity + 1 })}>+</button>
                    </div>
                  </td>
                  <td className="font-bold">$396.00</td>
                  <td className="font-bold remove-item">X</td>
                </tr>
              </tbody>
            </table>
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
        </div>
      </div>
    );
  }
}

export default WishListPage;
