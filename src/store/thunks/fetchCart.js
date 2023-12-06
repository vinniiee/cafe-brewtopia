import { createAsyncThunk } from "@reduxjs/toolkit";
import supabase from "../../services/supabase";

export const fetchCart = createAsyncThunk("cart/fetch", async ( user ) => {
  const { data, error } = await supabase
    .from("customers")
    .select("cart")
    .eq("auth", user.auth);
    if(error){
        console.log(error.message);
    }
    console.log(data);
    return data[0].cart;
});
