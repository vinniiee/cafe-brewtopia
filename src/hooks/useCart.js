import { useDispatch, useSelector } from "react-redux";
import { addToCart, deleteFromCart, removeFromCart } from "../store";

export default function useCart() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.data);

  return { addItem, removeItem, deleteItem, parseCartToItems };

  function addItem({ cartItem, coffee, size }) {
    let item;
    console.log("Adding item to cart:", { cartItem, coffee, size });
    if (cartItem) {
      item = cartItem;
    } else {
      item = {
        name: coffee.name,
        prices: coffee.prices,
        image: coffee.image,
        quantity: [0, 0, 0],
        served: coffee.served,
        itemQuantity: 1,
      };
      item.quantity[size] = 1;
    }
    console.log("Dispatching addToCart with item:", item);
    dispatch(addToCart({ cart, size, coffee: item }));
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
              price: rest.prices[i],
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
      .flat()
      .sort(sortItems);
    return items;
  }
}
