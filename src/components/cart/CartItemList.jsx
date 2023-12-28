import useCart from "../../hooks/useCart";
import CartItem from "./CartItem";

// eslint-disable-next-line react/prop-types
export default function CartItemList({ cart }) {
  // item = {
  //   name: coffee.name,
  //   price: coffee.price,
  //   image: coffee.image,
  //   sizes: [0, 0, 0],
  //   itemQuantity: 1,
  // };
  const { parseCartToItems } = useCart();
  console.log("CART: ", cart);
  const items = parseCartToItems(cart);
  console.log("Parsed Cart", items);
  const itemList = items.map((item) => {
    // eslint-disable-next-line react/prop-types
    const cartItem = cart.items.find((a) => a.name === item.name);
    // eslint-disable-next-line react/prop-types
    console.log("cart Item :",item);
    console.log(item.name+item.price);
    return (
      <CartItem
        key={""+item.price+item.name}
        cartItem={cartItem}
        item={item}
        // eslint-disable-next-line react/prop-types
        totalQuantity={cart.totalQuantity}
      />
    );
  });
  return (
    <div className="flex flex-col justify-center items-center h-full w-full p-2">
      <div
        className="flex justify-between items-center px-2 space-x-0.5
       text-center text-white text-xs w-full"
      >
        <p className="w-1/2 text-left">Item</p>
        <p className="w-1/6 ">Price</p>
        <p className="w-1/6 text-center">Quantity</p>
        <p className="w-1/6 text-center">Total</p>
        <p className="opacity-0 w-1/12 ">placehoder</p>
      </div>
      <div className="flex justify-center items-start  max-h-[460px]  md:max-h-[350px] overflow-scroll w-full">
        <div
          className="flex flex-col justify-between items-center
          w-full "
        >
          {itemList}
        </div>
      </div>
    </div>
  );
}
