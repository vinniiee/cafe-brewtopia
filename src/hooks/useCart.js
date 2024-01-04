import { useDispatch, useSelector } from "react-redux";
import { addToCart, deleteFromCart, removeFromCart } from "../store";
// import { useSelector } from "react-redux";
// import { useUser } from "../features/authentication/useUser";
// import { updateUserCart } from "../services/apiUser";
// import { useQueryClient } from "@tanstack/react-query";
// import { initialCartState, updateCart } from "../store/slices/cartSlice";

export default function useCart() {
  
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.data);

  // const { user } = useUser();
  //   const query = useQueryClient();
  //   const cart = useSelector((state) => state.cart);
  //   const {data:cart} =  useFetchCartQuery(user);
  //   console.log("cart in useCart",    cart);
  //   const [addToCart,temp1] = useAddToCartMutation();
  //   console.log(addToCart);
  //   const [removeFromCart,temp12] = useDeductFromCartMutation();
  //   const [deleteFromCart,temp3] = useRemoveFromCartMutation();

  return { addItem, removeItem, deleteItem, parseCartToItems };

  function addItem({ cartItem, coffee, size }) {
    // cart.itemQuantity =10;
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
    dispatch(addToCart({cart,size,coffee:item}));
  }
  async function removeItem({ cartItem, size }) {
    dispatch(removeFromCart({ coffee: cartItem, size, cart }));
  }

  function deleteItem({ cartItem, size }) {
    dispatch(deleteFromCart({ coffee: cartItem, size, cart }));
  }

  function parseCartToItems(cart) {

    const sortItems = (a, b) => {
      const nameComparison = a.name.localeCompare(b.name);
    
      if (nameComparison === 0) {
        return a.size - b.size;
      }
    
      return nameComparison;
    };


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
      .flat().sort(sortItems);
    return items;
  }
}
