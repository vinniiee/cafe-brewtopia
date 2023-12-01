import { addToCart, deleteFromCart, removeFromCart } from "../store";
import { useSelector } from "react-redux";
import { useUser } from "../features/authentication/useUser";
import { updateUserCart } from "../services/apiUser";
import { initialCartState, updateCart } from "../store/slices/cartSlice";
import { useQueryClient } from "@tanstack/react-query";

export default function useCart() {
  const { user } = useUser();
  const query = useQueryClient();
  const cart = useSelector((state) => state.cart);
  const uploadCart = async () => {
    // console.log("cart1111",cart)
    await updateUserCart({ cart, user });
  };
  const uploadInitialCart = async () => {
    // console.log("cart1111",cart)
    await updateUserCart({ cart: initialCartState, user });
    query.invalidateQueries({
      queryKey: ["user"],
    });
  };
  return { addItem, removeItem, deleteItem, parseCartToItems, uploadCart };

  function addItem({ cartItem, coffee, size, dispatch }) {
    let item;
    if (cartItem) {
      item = cartItem;
    } else {
      item = {
        name: coffee.name,
        price: coffee.price,
        image: coffee.image,
        quantity: [0, 0, 0],
        served: coffee.served,
        itemQuantity: 1,
      };
      item.quantity[size] = 1;
    }
    dispatch(addToCart({ coffee: item, size }));
  }
  async function removeItem({ cartItem, size, dispatch }, totalQuantity) {
    console.log("total", totalQuantity);
    if (totalQuantity === 1) {
      uploadInitialCart().then(() => dispatch(updateCart(initialCartState)));
    }else
    dispatch(removeFromCart({ coffee: cartItem, size }));
  }

  function deleteItem({ cartItem, size, dispatch },totalQuantity) {
    if(cartItem.quantity[size] === totalQuantity){
        uploadInitialCart().then(() => dispatch(updateCart(initialCartState)));
    }else
    dispatch(deleteFromCart({ coffee: cartItem, size }));
  }

  function parseCartToItems(cart) {
    const items = cart.items
      .map((item) => {
        let temp = [];
        let { itemQuantity, quantity, ...rest } = item;
        for (let i = 0; i < 3; i++) {
          if (quantity[i] !== 0) {
            temp.push({
              ...rest,
              price: rest.price[i],
              size: i,
              quantity: quantity[i],
            });
          }
          itemQuantity -= quantity[i];
          if (itemQuantity === 0) {
            break;
          }
        }
        return temp;
      })
      .flat();
    return items;
  }
}
