import { createSelector } from "reselect";

const selectCart = (state) => state.cart;

// select cart items
export const selectCartItems = createSelector([selectCart], (cart) => cart.cartItems);

// select cart items count
export const selectCartItemsCount = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce((accumulated, cartItem) => accumulated + cartItem.quantity, 0)
);
