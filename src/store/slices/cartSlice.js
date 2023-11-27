import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  totalPrice: 0,
  totalQuantity: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    clearCart() {
      return initialState;
    },
    addToCart(state, action) {
      let { items } = state;
      const { coffee, size } = action.payload;
      let existingItemIndex = items.findIndex(
        (item) => item.name === coffee.name
      );
      if (existingItemIndex !== -1) {
        let existingItem = items[existingItemIndex];
        existingItem.sizes[size] += 1;
        existingItem.itemQuantity += 1;
        items[existingItemIndex] = existingItem;
      } else {
        // eslint-disable-next-line no-unused-vars
        items.push({ ...coffee });
      }
      state.totalPrice += coffee.price[size];
      state.totalQuantity += 1;
    },
    removeFromCart(state, action) {
      const { items } = state;
      const { coffee, size } = action.payload;
      let index = items.findIndex((item) => item.name === coffee.name);
      if (items[index].itemQuantity === 1) {
        state.items.pop(index);
      } else {
        state.items[index].itemQuantity -= 1;
        state.items[index].sizes[size] -= 1;
      }
      state.totalPrice -= action.payload.price;
      state.totalQuantity -= 1;
    },
  },
});

export const { clearCart, removeFromCart, addToCart } = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
