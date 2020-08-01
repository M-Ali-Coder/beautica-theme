import React from "react";
import { Link } from "react-router-dom";

import PayPalCheckout from "../assets/images/checkout-logo-small.png";
import { connect } from "react-redux";

const CartDropDownMenu = ({ toggleProductCart, cartItems }) => {
  return (
    <>
      {toggleProductCart && (
        <div className="product-in-your-cart">
          {!cartItems.length ? (
            <div className="empty-cart-msg" style={{ textAlign: "center" }}>
              <b>No items in your cart</b>
            </div>
          ) : (
            cartItems
              .filter((item, idx) => idx < 2)
              .map(({ img, productName, price, quantity }, idx) => (
                <div className="cart-product-details" key={idx}>
                  <div className="product-img">
                    <img src={img} id="product-example-img" alt="cart-product" />
                  </div>

                  <div className="product-details">
                    <div className="product-name">coco lee</div>
                    <Link to="#" className="product-category">
                      {productName}
                    </Link>
                    <div className="product-qty">
                      <span>{quantity} X</span>
                      <span className="product-price"> {price}</span>
                    </div>
                  </div>
                </div>
              ))
          )}

          {cartItems.length ? (
            <>
              <Link to="/cart" id="view-your-cart">
                view cart
              </Link>

              <Link to="/checkout" id="checkout-now">
                check out now
              </Link>

              <span className="or-use">-- or use --</span>
              <Link to="#" className="checkout-with-paypal">
                <img src={PayPalCheckout} alt="paypal-chckout" />
              </Link>
            </>
          ) : null}
        </div>
      )}
    </>
  );
};

const mapStateToProps = ({ cart: { cartItems } }) => ({
  cartItems,
});

export default connect(mapStateToProps)(CartDropDownMenu);
