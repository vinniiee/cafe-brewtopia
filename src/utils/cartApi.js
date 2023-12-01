import { addToCart, deleteFromCart, removeFromCart } from "../store";

export function addItem({ cartItem, coffee, size, dispatch }) {
  let item;
  if (cartItem) {
    item = cartItem;
  } else {
    item = {
      name: coffee.name,
      price: coffee.price,
      image: coffee.image,
      quantity: [0, 0, 0],
      served:coffee.served,
      itemQuantity: 1,
    };
    item.quantity[size] = 1;
  }
  dispatch(addToCart({ coffee: item, size }));
}
export function removeItem({ cartItem, size, dispatch }) {

  dispatch(removeFromCart({ coffee: cartItem, size }));
}

export function deleteItem({ cartItem, size, dispatch }) {
  dispatch(deleteFromCart({ coffee: cartItem, size }));
}

export function parseCartToItems(cart) {
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
