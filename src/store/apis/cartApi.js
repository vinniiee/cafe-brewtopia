import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";
import supabase from "../../services/supabase";
import { clearCart, updateCart } from "../../services/apiCart";
import { initialCartState } from "../slices/cartSlice";

const cartApi = createApi({
  reducerPath: "cart",
  baseQuery: fakeBaseQuery(),
  endpoints: (builder) => {
    return {
      fetchCart: builder.query({
        providesTags: ["cart"],
        queryFn: async (user) => {
          console.log("fetchQuery ARG", user);
          if (!user) return initialCartState;
          console.log("FETCHING CART...");
          const { data, error } = await supabase
            .from("customers")
            .select("cart")
            .eq("auth", user.auth);
          if (error) {
            console.log(error.message);
            throw new Error("Could not fetch cart");
          }
          const { cart } = data[0];
          if (!cart.userId) {
            cart.userId = user.auth;
            cart;
          }
          console.log(cart);
          return { data: cart };
        },
      }),
      addToCart: builder.mutation({
        invalidatesTags: ["cart"],
        queryFn: async ({ coffee, size, cart }) => {
          const newCart = { ...cart };
          let { items } = newCart;
          let newItems = items.map((item) => item);
          let existingItemIndex = items.findIndex(
            (item) => item.name === coffee.name
          );

          if (existingItemIndex !== -1) {
            let existingItem = newItems[existingItemIndex];
            let newItem = { ...existingItem };
            let quantity = [
              existingItem.quantity[0],
              existingItem.quantity[1],
              existingItem.quantity[2],
            ];
            quantity[size] += 1;
            newItem.quantity = quantity;
            newItem.itemQuantity += 1;
            // existingItem.itemPrice += coffee.price[size];
            newItems[existingItemIndex] = newItem;
          } else {
            // eslint-disable-next-line no-unused-vars
            newItems.push({ ...coffee });
          }
          let totalPrice = cart.totalPrice + coffee.price[size];
          let totalQuantity = cart.totalQuantity + 1;

          await updateCart({
            cart: { ...cart, items: newItems, totalPrice, totalQuantity },
          });

          return { data: cart };
        },
      }),
      deductFromCart: builder.mutation({
        invalidatesTags: ["cart"],
        queryFn: async ({ cart, coffee, size }) => {
          const { items } = cart;
          let newItems = items.map(item=>item);
          let index = items.findIndex((item) => item.name === coffee.name);

          if (items[index].itemQuantity === 1) {
            newItems.pop(index);
            // = items.filter((item) => item.name === coffee.name);
          } else {
            let itemQuantity = items[index].itemQuantity;
            newItems[index]= {...newItems[index], itemQuantity};
            let quantity = [items[index].quantity[0],items[index].quantity[1],items[index].quantity[2]]
            quantity[size] -= 1;
            newItems.quantity = quantity;
          }
          let totalPrice = cart.totalPrice - coffee.price[size];
          let totalQuantity = cart.totalPrice - 1;
          console.log("asasasasasasaas",cart);
          let temp = {...cart,totalPrice,totalQuantity,items:newItems}
          console.log("updatedqwqwqwqw cart",temp);
          await updateCart({ cart:{...cart,totalPrice,totalQuantity,items:newItems} });
          return { data: cart };
        },
      }),
      removeFromCart: builder.mutation({
        invalidatesTags: ["cart"],
        queryFn: async ({ cart, coffee, size }) => {
          const { items } = cart;
          let index = items.findIndex((item) => item.name === coffee.name);

          cart.totalPrice -= coffee.price[size] * coffee.quantity[size];
          cart.totalQuantity -= coffee.quantity[size];
          // cart.items[index].itemQuantity -= coffee.quantity[size];
          if (coffee.quantity[size] === coffee.itemQuantity) {
            cart.items.pop(index);
          } else {
            cart.items[index].itemQuantity -= coffee.quantity[size];
            cart.items[index].quantity[size] = 0;
          }
          await updateCart({ cart });
          return { data: cart };
        },
      }),
      clearCart: builder.mutation({
        invalidatesTags: ["cart"],
        queryFn: async ({ cart }) => await clearCart({ cart }),
      }),
    };
  },
});

export const {
  useFetchCartQuery,
  useAddToCartMutation,
  useDeductFromCartMutation,
  useRemoveFromCartMutation,
  useClearCartMutation,
} = cartApi;

export { cartApi };
