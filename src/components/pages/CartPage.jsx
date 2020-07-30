import React from "react";
import Product from "../../assets/images/products/product-5.jpg";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class CartPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      quantity: 1,
    };
  }

  render() {
    const { quantity } = this.state;
    const { cart } = this.props;
    console.log(cart.length);

    return (
      <div className="cart-page-wrapper container">
        {cart.length < 1 ? (
          <h1>
            No item in your cart, <Link to="/">Continue shopping</Link>
          </h1>
        ) : (
          <>
            <div className="cart-page-content-wrapper font">
              <div className="cart-page-content">
                <h3>
                  your cart{" "}
                  <span className="items-count-in-shopping-cart">({cart.length} items)</span>
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
                    {cart.map((item, idx) => (
                      <tr key={idx}>
                        <td className="product-preview">
                          <img src={item.img} alt="product" />
                          <div className="product-quick-info">
                            <span className="product-category">collette</span>
                            <Link to="#" className="product-name">
                              {item.productName}
                            </Link>
                          </div>
                        </td>
                        <td className="font-bold">{item.price}</td>
                        <td className="font-bold">
                          <div className="product-quantity">
                            <button onClick={() => this.setState({ quantity: quantity - 1 })}>
                              -
                            </button>
                            <input
                              type="tel"
                              min="1"
                              value={quantity}
                              onChange={() => this.setState({ quantity: quantity + 1 })}
                            />
                            <button onClick={() => this.setState({ quantity: quantity + 1 })}>
                              +
                            </button>
                          </div>
                        </td>
                        <td className="font-bold">{item.price * quantity}</td>
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
  cart: state.cart.cartItems,
});

export default connect(mapStateToProps)(CartPage);
