import { status } from "../enums/orderStatus";
import supabase from "./supabase";

export const placeOrder = async ({ user, cart, servingDetails }) => {
  console.log("user", user);
  console.log("cart", cart);
  console.log("servingDetails", servingDetails);

  const date = new Date();
  const eta = new Date(
    date.setMinutes(date.getMinutes() + 25 + Math.random() * 20)
  );

  let order = {
    placedBy: cart.userId,
    cart,
    status: status.PENDING,
    eta: eta.toISOString(),
    ...servingDetails,
  };

  console.log("To be placed", order);
  const { data, error } = await supabase
    .from("orders")
    .insert([order])
    .select();

  if (error) {
    console.log(error);
    throw new Error(error.message);
  }

  setTimeout(async () => {
    await supabase
      .from("orders")
      .update({ status: status.PREPARING })
      .eq("id", data[0].id);
  }, 1000 * 15);

  setTimeout(async () => {
    await supabase
      .from("orders")
      .update({ status: status.DELIVERING })
      .eq("id", data[0].id);
  }, 1000 * 60 * 20);

  console.log("eta in ms: ", eta - Date.now());
  setTimeout(async () => {
    await supabase
      .from("orders")
      .update({ status: status.DELIVERING })
      .eq("id", data[0].id);
  }, eta - Date.now());

  console.log("OORRDDEERR", data);
  return data[0];
};

export const fetchOrderById = async (id) => {
  const { data, error } = await supabase
    .from("orders")
    .select("*")
    .eq('id', id)
    .select();

    if (error) {
        console.log(error);
        throw new Error(error.message);
    }

    console.log(data[0]);
    return data[0];
    
};
