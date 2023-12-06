import supabase from "./supabase";

export async function updateUserCart({ cart }) {
  // console.log("uploading cart...");
  const { error } = await supabase
    .from("customers")
    .update({ cart })
    .eq("auth", cart.userId)
    .select();
  if (error) {
    console.log(error.message);
    throw new Error(error.message);
  }
  // console.log("dqwdCCCCCCCAAAAAAAARRRRRRTT",data);
  // console.log("updated cart");
}
