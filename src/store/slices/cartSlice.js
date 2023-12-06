import { createSlice } from "@reduxjs/toolkit";
import { addToCart } from "../thunks/addToCart";
import { clearCart } from "../thunks/clearCart";
import { removeFromCart } from "../thunks/removeFromCart";
import { deleteFromCart } from "../thunks/deleteFromCart";
import { fetchCart } from "../thunks/fetchCart";

export const initialCartState = {
  items: [],
  totalPrice: 0,
  totalQuantity: 0,
  userId: null,
};
const initialState = {
  data: initialCartState,
  isLoading: false,
  error: null,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  extraReducers(builder) {
    // fetchCart
    builder.addCase(fetchCart.fulfilled, (state, action) => {
      console.log(action.payload);
      state.isLoading = false;
      state.error = null;
      state.data = action.payload;
    });
    builder.addCase(fetchCart.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    });
    builder.addCase(fetchCart.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });

    // addToCart
    builder.addCase(addToCart.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.data = action.payload;
    });
    builder.addCase(addToCart.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    });
    builder.addCase(addToCart.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });

    // clearCart
    builder.addCase(clearCart.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.data = action.payload;
    });
    builder.addCase(clearCart.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    });
    builder.addCase(clearCart.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });

    //removeFromCart
    builder.addCase(removeFromCart.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.data = action.payload;
    });
    builder.addCase(removeFromCart.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    });
    builder.addCase(removeFromCart.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });

    //deleteFromCart
    builder.addCase(deleteFromCart.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.data = action.payload;
    });
    builder.addCase(deleteFromCart.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    });
    builder.addCase(deleteFromCart.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
  },
});

export const cartReducer = cartSlice.reducer;
