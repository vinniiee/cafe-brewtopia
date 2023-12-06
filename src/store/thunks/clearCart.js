import { createAsyncThunk } from "@reduxjs/toolkit";
import supabase from "../../services/supabase";
import { initialCartState } from "../slices/cartSlice";

export const clearCart = createAsyncThunk("cart/clear", async ({ cart }) => {
  await supabase
    .from("customers")
    .update({ cart: { ...initialCartState, userId: cart.userId } })
    .eq("auth", cart.userId)
    .select();

  return { ...initialCartState, userId: cart.userId };
});
