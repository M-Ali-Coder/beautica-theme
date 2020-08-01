import React from "react";
import { Link } from "react-router-dom";
import { removeItem } from "../redux/cart/cart.actions";
import { connect } from "react-redux";

const CartItem = ({ item, removeItem }) => {
  const { img, productName, quantity, price } = item;

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
          <button>-</button>
          <div>{quantity}</div>
          <button>+</button>
        </div>
      </td>
      <td className="font-bold">{quantity * price}</td>
      <td className="font-bold remove-item" onClick={() => removeItem(item)}>
        <span>X</span>
      </td>
    </tr>
  );
};

const mapDispatchToProps = (dispatch) => ({
  removeItem: (item) => dispatch(removeItem(item)),
});

export default connect(null, mapDispatchToProps)(CartItem);
