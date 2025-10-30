import { createAsyncThunk } from "@reduxjs/toolkit";
import { updateUserCart } from "../../services/apiUser";

export const removeFromCart = createAsyncThunk(
  "cart/removeFrom",
  async ({ coffee, size }) => {
    let cart = JSON.parse(localStorage.getItem("userCart")) || {
      items: [],
      totalQuantity: 0,
      totalPrice: 0,
    };

    let { items } = cart;
    let index = items.findIndex((item) => item.name === coffee.name);
    if (index === -1) return cart;

    let existingItem = items[index];
    let newItems = items.filter((item) => item.name !== coffee.name);
    let newItem;

    if (existingItem.itemQuantity > 1) {
      let quantity = [...existingItem.quantity];
      quantity[size] = Math.max(0, quantity[size] - 1);

      newItem = {
        ...existingItem,
        quantity,
        itemQuantity: existingItem.itemQuantity - 1,
      };

      newItems.push(newItem);
    }

    let newCart = {
      ...cart,
      items: newItems,
      totalQuantity: Math.max(0, cart.totalQuantity - 1),
      totalPrice: Math.max(0, cart.totalPrice - coffee.prices[size]),
    };

    localStorage.setItem("userCart", JSON.stringify(newCart));

    await updateUserCart({ cart: newCart });

    return newCart;
  }
);