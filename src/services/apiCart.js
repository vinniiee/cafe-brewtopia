import { initialCartState } from "../store/slices/cartSlice";
import supabase from "./supabase";

export async function updateCart({ cart }) {
  console.log("uploading cart...");
  const { data, error } = await supabase
    .from("customers")
    .update({ cart })
    .eq("auth", cart.userId)
    .select();
  if (error) {
    console.log(error.message);
  }
  console.log("dqwdCCCCCCCAAAAAAAARRRRRRTT", data);
  console.log("updated cart");
}

export async function clearCart({ cart }) {
   
    const emptyCart = {...initialCartState, userId:cart.userId };
    await supabase
      .from("customers")
      .update({ cart: emptyCart})
      .eq("auth", cart.userId)
      .select();
    return emptyCart;
  }