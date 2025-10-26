import { createAsyncThunk } from "@reduxjs/toolkit";
import { initialCartState } from "../slices/cartSlice";

export const fetchCart = createAsyncThunk("cart/fetch", async () => {
  try {
    const storedCart = localStorage.getItem("userCart");
    let cart = storedCart ? JSON.parse(storedCart) : null;

    if (!cart) {
      cart = { ...initialCartState };
      localStorage.setItem("userCart", JSON.stringify(cart));
    }

    return cart;
  } catch (error) {
    console.error("Error fetching cart from localStorage:", error);
    throw new Error("Failed to fetch cart from localStorage");
  }
});
