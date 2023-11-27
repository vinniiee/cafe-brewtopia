import { addToCart, removeFromCart } from "../store";

export function addItem(cartItem, coffee, size, dispatch) {
  let item;
  if (cartItem) {
    item = cartItem;
  } else {
    item = {
      name: coffee.name,
      price: coffee.price,
      image: coffee.image,
      sizes: [0, 0, 0],
      itemQuantity: 1,
    };
    item.sizes[size] = 1;
  }
  dispatch(addToCart({ coffee: item, size }));
}
export function removeItem(cartItem, size, dispatch) {
  dispatch(removeFromCart({ coffee: cartItem, size }));
}
