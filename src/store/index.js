import { configureStore } from "@reduxjs/toolkit";
import {
  resetSortParams,
  sortReducer,
  updateSortParams,
} from "./slices/sortSlice";
import { coffeesReducer, updateCofeeList } from "./slices/coffeeSlice";
import { cartReducer } from "./slices/cartSlice";
import { addToCart } from "./thunks/addToCart";
import { deleteFromCart } from "./thunks/deleteFromCart";
import { fetchCart } from "./thunks/fetchCart";
import { removeFromCart } from "./thunks/removeFromCart";
import { clearCart } from "./thunks/clearCart";
import authSlice from "./slices/authSlice";

const store = configureStore({
  reducer: {
    sort: sortReducer,
    coffees: coffeesReducer,
    cart: cartReducer,
    auth: authSlice,
  },
});

export * from "./slices/cartSlice";
export * from "./slices/authSlice";
export {
  store,
  updateSortParams,
  resetSortParams,
  updateCofeeList,
  fetchCart,
  addToCart,
  clearCart,
  removeFromCart,
  deleteFromCart,
};
