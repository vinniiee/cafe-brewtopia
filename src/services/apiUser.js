import supabase from "./supabase";

export async function updateUserCart({ cart, user }) {
  console.log("uploading cart...");
  const { data, error } = await supabase
    .from("customers")
    .update({cart})
    .eq("auth", user.auth)
    .select();
    if(error){
        console.log(error.message);
    }
    console.log("dqwdCCCCCCCAAAAAAAARRRRRRTT",data);
  console.log("updated cart");
}
