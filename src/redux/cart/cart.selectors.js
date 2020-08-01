import { createSelector } from "reselect";

const selectCart = (state) => state.cart;

// select cart items
export const selectCartItems = createSelector([selectCart], (cart) => cart.cartItems);

// select cart items count
export const selectCartItemsCount = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce((accumultedValue, itemQty) => accumultedValue + itemQty.quantity, 0)
);
