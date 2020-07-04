import React from "react";

const Product = (props) => {
  const { params } = props.match;
  const { products } = props;
  const matchProduct = products
    .filter((product) => product.routerLink === params.product)
    .map((product) => product);

  const { img, productName, description, price } = matchProduct[0];

  return (
    <div>
      <span>product page</span>
      <img src={img} alt="product" />
      <h1>{productName}</h1>
      <p>{description}</p>
      <span>{price}</span>
    </div>
  );
};

export default Product;
