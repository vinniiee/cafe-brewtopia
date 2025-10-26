import { createAsyncThunk } from "@reduxjs/toolkit";
import { initialCartState } from "../slices/cartSlice";

export const clearCart = createAsyncThunk("cart/clear", async () => {
  const clearedCart = { ...initialCartState };

  try {
    localStorage.setItem("userCart", JSON.stringify(clearedCart));
  } catch (error) {
    console.error("Error clearing cart in localStorage:", error);
    throw new Error("Failed to clear cart in localStorage");
  }

  return clearedCart;
});
