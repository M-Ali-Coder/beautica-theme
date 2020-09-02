import React from "react";
import { Link } from "react-router-dom";

import img from "../assets/images/products/product-15.webp";

const CartItem = () => {
  return (
    <tr>
      <td className="product-preview">
        <img src={img} alt="product" />
        <div className="product-quick-info">
          <span className="product-category">collette</span>
          <Link to="#" className="product-name">
            productName
          </Link>
        </div>
      </td>
      <td className="font-bold">100</td>
      <td className="font-bold">
        <div className="product-quantity">
          <button>-</button>
          <div>1</div>
          <button>+</button>
        </div>
      </td>
      <td className="font-bold">100</td>
      <td className="font-bold remove-item">
        <span>X</span>
      </td>
    </tr>
  );
};

export default CartItem;
