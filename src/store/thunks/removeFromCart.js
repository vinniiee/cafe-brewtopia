import { createAsyncThunk } from "@reduxjs/toolkit";
import { updateUserCart } from "../../services/apiUser";

export const removeFromCart = createAsyncThunk(
  "cart/removeFrom",
  async ({ cart, coffee, size }) => {
    const { items } = cart;
    let index = items.findIndex((item) => item.name === coffee.name);

    let newItems = items.filter((item) => item.name !== coffee.name);
    let newItem;
    if (items[index].itemQuantity > 1) {
      let itemQuantity = items[index].itemQuantity - 1;
      let quantity = [
        items[index].quantity[0],
        items[index].quantity[1],
        items[index].quantity[2],
      ];
      quantity[size] -= 1;
      newItem = { ...items[index], quantity, itemQuantity };
      newItems.push(newItem);
    }
    let newCart = {
      ...cart,
      items: newItems,
      totalPrice: cart.totalPrice - coffee.price[size],
      totalQuantity: cart.totalQuantity - 1,
    };
    updateUserCart({ cart: newCart });
    return newCart;
  }
);
