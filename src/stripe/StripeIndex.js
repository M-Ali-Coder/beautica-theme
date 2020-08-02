import React from "react";
import StripeCheckout from "react-stripe-checkout";
import Logo from "../assets/images/logo.webp";

const StripeIndex = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51HBfOmDDgf6ZRkGKtHujOq2ybp8tIn6idoIK8YWn1Ptidud9qf2e4a19rOFfSRURZvVYfypxZyxSlURxt5YRJ8ur00ZpatlAt6";

  const onToken = (token) => {
    console.log(token);
    alert("Successfull Payment");
  };

  return (
    <StripeCheckout
      label="procceed payment"
      name="Beautica Theme App"
      shippingAddress
      image={Logo}
      description={`Your total pay is ${price}`}
      amount={priceForStripe}
      panelLabel="pay now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeIndex;
