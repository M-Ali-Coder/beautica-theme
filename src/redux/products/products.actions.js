import productTypes from "./products.types";

export const updatedProductsCollection = (collection) => {
  return {
    type: productTypes.PRODUCTS_COLLECTION,
    payload: collection,
  };
};
