import { createSlice } from "@reduxjs/toolkit";

export const initialCartState = {
  items: [],
  totalPrice: 0,
  totalQuantity: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState:initialCartState,
  reducers: {
    clearCart() {
      return initialCartState;
    },
    addToCart(state, action) {
      let { items } = state;
      const { coffee, size } = action.payload;
      let existingItemIndex = items.findIndex(
        (item) => item.name === coffee.name
      );

      if (existingItemIndex !== -1) {
        let existingItem = items[existingItemIndex];

        existingItem.quantity[size] += 1;
        existingItem.itemQuantity += 1;
        // existingItem.itemPrice += coffee.price[size];
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
        state.items[index].quantity[size] -= 1;
      }
      state.totalPrice -= coffee.price[size];
      state.totalQuantity -= 1;
    },
    deleteFromCart(state, action) {
      const { items } = state;
      const { coffee, size } = action.payload;
      let index = items.findIndex((item) => item.name === coffee.name);

      state.totalPrice -= coffee.price[size] * coffee.quantity[size];
      state.totalQuantity -= coffee.quantity[size];
      // state.items[index].itemQuantity -= coffee.quantity[size];
      if(coffee.quantity[size]===coffee.itemQuantity){
        state.items.pop(index);
      }else{
        state.items[index].itemQuantity -= coffee.quantity[size];
        state.items[index].quantity[size]=0;
      }
    },
    updateCart(state,action){
      console.log("payload",action.payload)
      return action.payload;
    }
  },
});

export const { clearCart, removeFromCart, addToCart,deleteFromCart,updateCart } = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
