import item1 from "../../assets/images/products/product-1.webp";
import item2 from "../../assets/images/products/product-2.webp";
import item3 from "../../assets/images/products/product-3.webp";
import item4 from "../../assets/images/products/product-13.webp";
import item5 from "../../assets/images/products/product-5.jpg";
import item6 from "../../assets/images/products/product-6.webp";
import item7 from "../../assets/images/products/product-7.jpg";
import item8 from "../../assets/images/products/product-8.webp";
import item10 from "../../assets/images/products/product-10.jpg";
import item11 from "../../assets/images/products/product-11.webp";
import item12 from "../../assets/images/products/product-12.webp";
import item13 from "../../assets/images/products/product-13.webp";
import item14 from "../../assets/images/products/product-14.jpg";
import item15 from "../../assets/images/products/product-15.webp";

const INITIAL_STATE = [
  {
    id: 1,
    img: item13,
    productName: "[Sample] Coco Lee, wedges with sweet chilli sauce0",
    description: "Magnis de darturien eros laciniados de cosmopolis dinterdum",
    price: 320,
    isNew: true,
    routerLink: "product-10",
  },
  {
    id: 2,
    img: item14,
    productName: "[Sample] Coco Lee, wedges with sweet chilli sauce0",
    description: "Magnis de darturien eros laciniados de cosmopolis dinterdum",
    price: 120,
    isNew: false,
    routerLink: "product-10",
  },
  {
    id: 3,
    img: item15,
    productName: "[Sample] Coco Lee, wedges with sweet chilli sauce0",
    description: "Magnis de darturien eros laciniados de cosmopolis dinterdum",
    price: 250,
    isNew: true,
    routerLink: "product-10",
  },
  {
    id: 4,
    img: item11,
    productName: "[Sample] Coco Lee, wedges with sweet chilli sauce",
    description: "Magnis de darturien eros laciniados de cosmopolis dinterdum",
    price: 120,
    isNew: false,
    routerLink: "product-9",
  },
  {
    id: 5,
    img: item5,
    productName: "[Sample] Coco Lee, wedges with sweet chilli sauce",
    description: "Magnis de darturien eros laciniados de cosmopolis dinterdum",
    price: 220,
    isNew: true,
    routerLink: "product-5",
  },
  {
    id: 6,
    img: item6,
    productName: "[Sample] Coco Lee, wedges with sweet chilli sauce",
    description: "Magnis de darturien eros laciniados de cosmopolis dinterdum",
    price: 120,
    isNew: true,
    routerLink: "product-6",
  },
  {
    id: 7,
    img: item7,
    productName: "[Sample] Coco Lee, wedges with sweet chilli sauce",
    description: "Magnis de darturien eros laciniados de cosmopolis dinterdum",
    price: 180,
    isNew: false,
    routerLink: "product-7",
  },
  {
    id: 8,
    img: item8,
    productName: "[Sample] Coco Lee, wedges with sweet chilli sauce",
    description: "Magnis de darturien eros laciniados de cosmopolis dinterdum",
    price: 100,
    isNew: true,
    routerLink: "product-8",
  },
  {
    id: 9,
    img: item4,
    productName: "[Sample] Coco Lee, wedges with sweet chilli sauce",
    description: "Magnis de darturien eros laciniados de cosmopolis dinterdum",
    price: 99,
    isNew: false,
    routerLink: "product-4",
  },
  {
    id: 10,
    img: item10,
    productName: "[Sample] Coco Lee, wedges with sweet chilli sauce0",
    description: "Magnis de darturien eros laciniados de cosmopolis dinterdum",
    price: 320,
    isNew: true,
    routerLink: "product-10",
  },
  {
    id: 11,
    img: item11,
    productName: "[Sample] Coco Lee, wedges with sweet chilli sauce0",
    description: "Magnis de darturien eros laciniados de cosmopolis dinterdum",
    price: 320,
    isNew: true,
    routerLink: "product-10",
  },
  {
    id: 12,
    img: item12,
    productName: "[Sample] Coco Lee, wedges with sweet chilli sauce0",
    description: "Magnis de darturien eros laciniados de cosmopolis dinterdum",
    price: 320,
    isNew: false,
    routerLink: "product-10",
  },
  {
    id: 13,
    img: item1,
    productName: "[Sample] Coco Lee, wedges with sweet chilli sauce",
    description: "Magnis de darturien eros laciniados de cosmopolis dinterdum",
    price: 100,
    isNew: true,
    routerLink: "product-1",
  },
  {
    id: 14,
    img: item2,
    productName: "[Sample] Coco Lee, wedges with sweet chilli sauce",
    description: "Magnis de darturien eros laciniados de cosmopolis dinterdum",
    price: 140,
    isNew: true,
    routerLink: "product-2",
  },
  {
    id: 15,
    img: item3,
    productName: "[Sample] Coco Lee, wedges with sweet chilli sauce",
    description: "Magnis de darturien eros laciniados de cosmopolis dinterdum",
    price: 200,
    isNew: true,
    routerLink: "product-3",
  },
];

const productsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default productsReducer;
