import { configureStore } from "@reduxjs/toolkit";
import {
  resetSortParams,
  sortReducer,
  updateSortParams,
} from "./slices/sortSlice";
import { coffeesReducer, updateCofeeList } from "./slices/coffeeSlice";
import {
  addToCart,
  cartReducer,
  clearCart,
  deleteFromCart,
  removeFromCart,
} from "./slices/cartSlice";

const store = configureStore({
  reducer: {
    sort: sortReducer,
    coffees: coffeesReducer,
    cart: cartReducer,
  },
});

export {
  store,
  updateSortParams,
  resetSortParams,
  updateCofeeList,
  addToCart,
  clearCart,
  removeFromCart,
  deleteFromCart
};
