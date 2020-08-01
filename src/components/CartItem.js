import React from "react";
import { Link } from "react-router-dom";
import { removeItemFromCart, addItem, removeItem } from "../redux/cart/cart.actions";
import { connect } from "react-redux";

const CartItem = ({ item, removeItemFromCart, addItem, removeItem }) => {
  const { img, productName, quantity, price } = item;

  const decressCartItem = () => {
    if (item.quantity <= 1) {
      removeItemFromCart(item);
    }
    removeItem(item);
  };
  return (
    <tr>
      <td className="product-preview">
        <img src={img} alt="product" />
        <div className="product-quick-info">
          <span className="product-category">collette</span>
          <Link to="#" className="product-name">
            {productName}
          </Link>
        </div>
      </td>
      <td className="font-bold">{price}</td>
      <td className="font-bold">
        <div className="product-quantity">
          <button onClick={() => decressCartItem()}>-</button>
          <div>{quantity}</div>
          <button onClick={() => addItem(item)}>+</button>
        </div>
      </td>
      <td className="font-bold">{quantity * price}</td>
      <td className="font-bold remove-item" onClick={() => removeItemFromCart(item)}>
        <span>X</span>
      </td>
    </tr>
  );
};

const mapDispatchToProps = (dispatch) => ({
  removeItemFromCart: (item) => dispatch(removeItemFromCart(item)),
  addItem: (item) => dispatch(addItem(item)),
  removeItem: (item) => dispatch(removeItem(item)),
});

export default connect(null, mapDispatchToProps)(CartItem);
