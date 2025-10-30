import { createAsyncThunk } from "@reduxjs/toolkit";
import { updateUserCart } from "../../services/apiUser";

export const deleteFromCart = createAsyncThunk(
  "cart/deleteFrom",
  async ({ cart, coffee, size }) => {
    const { items } = cart;
    let index = items.findIndex((item) => item.name === coffee.name);
    let newItems = items.filter((item) => item.name !== coffee.name);
    let newItem;
    let totalPrice =
      cart.totalPrice - coffee.prices[size] * coffee.quantity[size];
    let totalQuantity = cart.totalQuantity - coffee.quantity[size];

    if (coffee.quantity[size] !== coffee.itemQuantity) {
      let itemQuantity = cart.items[index].itemQuantity - coffee.quantity[size];
      let quantity = [
        cart.items[index].quantity[0],
        cart.items[index].quantity[1],
        cart.items[index].quantity[2],
      ];
      quantity[size] = 0;
      newItem = { ...cart.items[index], itemQuantity, quantity };
      newItems.push(newItem);
    }

    let newCart = { ...cart, items: newItems, totalPrice, totalQuantity };

    updateUserCart({ cart: newCart });
    return newCart;
  }
);
