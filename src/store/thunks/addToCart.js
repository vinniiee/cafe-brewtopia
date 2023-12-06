import { createAsyncThunk } from "@reduxjs/toolkit";
import { updateUserCart } from "../../services/apiUser";

export const addToCart = createAsyncThunk(
  "cart/addTo",
  async ({ coffee, size, cart }) => {
    console.log("cart/add", cart);
    let { items } = cart;
    let existingItemIndex = items.findIndex(
      (item) => item.name === coffee.name
    );

    let newItems;
    let newItem;

    newItems = items.filter((item) => {
      return item.name !== coffee.name;
    });
    if (existingItemIndex !== -1) {
      let existingItem = items[existingItemIndex];
      let quantity = [
        existingItem.quantity[0],
        existingItem.quantity[1],
        existingItem.quantity[2],
      ];
      quantity[size] += 1;
      newItem = {
        ...existingItem,
        quantity,
        itemQuantity: existingItem.itemQuantity + 1,
      };
    } else {
      // eslint-disable-next-line no-unused-vars
      newItem = coffee;
    }
    newItems.push(newItem);

    let newCart = {
      ...cart,
      totalQuantity: cart.totalQuantity + 1,
      totalPrice: cart.totalPrice + coffee.price[size],
      items: newItems,
    };

    updateUserCart({
      cart: newCart,
    });

    return newCart;
  }
);
