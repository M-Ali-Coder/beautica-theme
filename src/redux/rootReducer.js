import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import cartReducer from "./cart/cartReducer";
import userReducer from "./user/userReducer";
import productsReducer from "./products/productsReducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"],
};

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  sections: productsReducer,
});
export default persistReducer(persistConfig, rootReducer);
