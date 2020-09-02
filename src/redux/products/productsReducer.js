import productsTypes from "./products.types";

import item1 from "../../assets/images/products/product-1.webp";
import item2 from "../../assets/images/products/product-2.webp";
import item3 from "../../assets/images/products/product-3.webp";
import item4 from "../../assets/images/products/product-13.webp";
import item5 from "../../assets/images/products/product-5.jpg";
import item6 from "../../assets/images/products/product-6.webp";
import item7 from "../../assets/images/products/product-7.jpg";
import item8 from "../../assets/images/products/product-8.webp";
import item9 from "../../assets/images/products/product-10.jpg";
import item10 from "../../assets/images/products/product-11.webp";
import item11 from "../../assets/images/products/product-12.webp";
import item12 from "../../assets/images/products/product-15.webp";

const INITIAL_STATE = [
  {
    id: 1,
    img: item5,
    productName: "[Sample] Coco Lee, wedges with sweet chilli sauce0",
    description: "Magnis de darturien eros laciniados de cosmopolis dinterdum",
    price: 320 + ".00",
    isNew: true,
    routerLink: "product-1",
    subImages: [item5, item11],
  },
  {
    id: 2,
    img: item7,
    productName: "[Sample] Coco Lee, wedges with sweet chilli sauce0",
    description: "Magnis de darturien eros laciniados de cosmopolis dinterdum",
    price: 120 + ".00",
    isNew: false,
    routerLink: "product-2",
    subImages: [item12, item10],
  },
  {
    id: 3,
    img: item11,
    productName: "[Sample] Coco Lee, wedges with sweet chilli sauce0",
    description: "Magnis de darturien eros laciniados de cosmopolis dinterdum",
    price: 250 + ".00",
    isNew: true,
    routerLink: "product-3",
    subImages: [item11, item10],
  },
  {
    id: 4,
    img: item9,
    productName: "[Sample] Coco Lee, wedges with sweet chilli sauce",
    description: "Magnis de darturien eros laciniados de cosmopolis dinterdum",
    price: 120 + ".00",
    isNew: false,
    routerLink: "product-4",
    subImages: [item8, item7],
  },
  {
    id: 5,
    img: item10,
    productName: "[Sample] Coco Lee, wedges with sweet chilli sauce",
    description: "Magnis de darturien eros laciniados de cosmopolis dinterdum",
    price: 220 + ".00",
    isNew: true,
    routerLink: "product-5",
    subImages: [item6, item5],
  },
  {
    id: 6,
    img: item6,
    productName: "[Sample] Coco Lee, wedges with sweet chilli sauce",
    description: "Magnis de darturien eros laciniados de cosmopolis dinterdum",
    price: 120 + ".00",
    isNew: true,
    routerLink: "product-6",
    subImages: [item4, item3],
  },
  {
    id: 7,
    img: item7,
    productName: "[Sample] Coco Lee, wedges with sweet chilli sauce",
    description: "Magnis de darturien eros laciniados de cosmopolis dinterdum",
    price: 180 + ".00",
    isNew: false,
    routerLink: "product-7",
    subImages: [item2, item1],
  },
  {
    id: 8,
    img: item8,
    productName: "[Sample] Coco Lee, wedges with sweet chilli sauce",
    description: "Magnis de darturien eros laciniados de cosmopolis dinterdum",
    price: 100 + ".00",
    isNew: true,
    routerLink: "product-8",
    subImages: [item12, item11],
  },
  {
    id: 9,
    img: item4,
    productName: "[Sample] Coco Lee, wedges with sweet chilli sauce",
    description: "Magnis de darturien eros laciniados de cosmopolis dinterdum",
    price: 99 + ".00",
    isNew: false,
    routerLink: "product-9",
    subImages: [item10, item9],
  },
  {
    id: 10,
    img: item10,
    productName: "[Sample] Coco Lee, wedges with sweet chilli sauce0",
    description: "Magnis de darturien eros laciniados de cosmopolis dinterdum",
    price: 320 + ".00",
    isNew: true,
    routerLink: "product-10",
    subImages: [item7, item8],
  },
  {
    id: 11,
    img: item11,
    productName: "[Sample] Coco Lee, wedges with sweet chilli sauce0",
    description: "Magnis de darturien eros laciniados de cosmopolis dinterdum",
    price: 320 + ".00",
    isNew: true,
    routerLink: "product-11",
    subImages: [item6, item5],
  },
  {
    id: 12,
    img: item12,
    productName: "[Sample] Coco Lee, wedges with sweet chilli sauce0",
    description: "Magnis de darturien eros laciniados de cosmopolis dinterdum",
    price: 320 + ".00",
    isNew: false,
    routerLink: "product-12",
    subImages: [item4, item3],
  },
  {
    id: 13,
    img: item1,
    productName: "[Sample] Coco Lee, wedges with sweet chilli sauce",
    description: "Magnis de darturien eros laciniados de cosmopolis dinterdum",
    price: 100 + ".00",
    isNew: true,
    routerLink: "product-13",
    subImages: [item4, item3],
  },
  {
    id: 14,
    img: item2,
    productName: "[Sample] Coco Lee, wedges with sweet chilli sauce",
    description: "Magnis de darturien eros laciniados de cosmopolis dinterdum",
    price: 140 + ".00",
    isNew: true,
    routerLink: "product-14",
    subImages: [item2, item1],
  },
  {
    id: 15,
    img: item3,
    productName: "[Sample] Coco Lee, wedges with sweet chilli sauce",
    description: "Magnis de darturien eros laciniados de cosmopolis dinterdum",
    price: 200 + ".00",
    isNew: true,
    routerLink: "product-15",
    subImages: [item7, item2],
  },
];

const productsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case productsTypes.UPDATED_PRODUCTS:
      return {
        ...state,
        productsCollection: action.payload,
      };
    default:
      return state;
  }
};

export default productsReducer;
