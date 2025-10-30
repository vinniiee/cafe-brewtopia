import { createAsyncThunk } from "@reduxjs/toolkit";
import { updateUserCart } from "../../services/apiUser";

export const addToCart = createAsyncThunk(
  "cart/addTo",
  async ({ coffee, size }) => {
    // Get user cart from localStorage
    let cart = JSON.parse(localStorage.getItem("userCart")) || {
      items: [],
      totalQuantity: 0,
      totalPrice: 0,
    };

    console.log("cart/add", cart);

    let { items } = cart;
    let existingItemIndex = items.findIndex((item) => item.name === coffee.name);
    let newItems;
    let newItem;

    // Remove any duplicate instance before re-adding
    newItems = items.filter((item) => item.name !== coffee.name);

    if (existingItemIndex !== -1) {
      // Update existing item quantity
      let existingItem = items[existingItemIndex];
      let quantity = [...existingItem.quantity]; // clone to avoid mutation
      quantity[size] += 1;

      newItem = {
        ...existingItem,
        quantity,
        itemQuantity: existingItem.itemQuantity + 1,
      };
    } else {
      // Add new coffee to cart
      newItem = {
        ...coffee,
        quantity: [0, 0, 0],
        itemQuantity: 1,
      };
      newItem.quantity[size] = 1;
    }

    newItems.push(newItem);

    // Calculate totals
    let newCart = {
      ...cart,
      totalQuantity: cart.totalQuantity + 1,
      totalPrice: cart.totalPrice + coffee.prices[size],
      items: newItems,
    };

    // Persist updated cart in localStorage
    localStorage.setItem("userCart", JSON.stringify(newCart));

    // Update server-side cart
    await updateUserCart({ cart: newCart });

    return newCart;
  }
);
