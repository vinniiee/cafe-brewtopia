import Beans from "../../assets/Beans";
import Flame from "../../assets/Flame";
import { parseCartToItems } from "../../utils/cartApi";

// eslint-disable-next-line react/prop-types
export default function OrderList({ cart }) {
  const items = parseCartToItems(cart);
  console.log("Parsed Cart", items);
  const itemList = items.map((item, i) => {
    // eslint-disable-next-line react/prop-types
    const { image, name, price, quantity, size,served } = item;
    const sizes = ["Small", "Grande", "Venti"];
    return (
      <div
        key={i}
        className="flex relative  justify-between my-2 rounded space-x-2
       p-2 items-center bg-coffee w-full h-[100px] text-white/80 overflow-hidden"
      >
        <div className="relative z-50 flex justify-start items-center space-x-2 w-1/2">
          <div className="h-full w-[75px] hidden    sm:flex justify-center items-center">
            <img
              className="max-w-[70px]  max-h-[70px] drop-shadow-[10px_10px_2px_rgba(0,0,0,.3)]"
              src={image}
              alt="coffee"
            />
          </div>
          <div className="">
          <p
            className={`capitalize my-0.5  text-xs w-fit font-light
             p-1 px-2 rounded-full pt-1.5 leading-none ${
              served === "hot" ? "bg-dark-coffee" : "bg-light-coffee"
            }`}
          >
            {served}
          </p>
            <p className="whitespace-nowrap">{name}</p>
            <p className="text-xs font-light">{sizes[size]}</p>
          </div>
        </div>
        <p className="relative z-50 text-center w-1/6 whitespace-nowrap text-xs sm:text-sm">
          {quantity} x &#8377; {price} /-
        </p>
        <p className="relative z-50 text-center w-1/6 whitespace-nowrap text-xs sm:text-sm">
          &#8377; {price * quantity} /-
        </p>
        <p className="opacity-0 hidden w-1/12">placeholder</p>
        <div className="absolute z-10  h-full w-full bottom-20 -left-20 sm:-left-5">
          <Flame className="fill-dark-coffee-2/50 h-[300px]  -rotate-90" />
        </div>
        <div className="absolute z-10  h-full bottom-0 right-0">
          <Beans
            color={"dark-coffee-2/50"}
            size={150}
            className="fill-dark-coffee-2/40"
          />
        </div>
      </div>
    );
  });
  return (
    <div className="flex justify-start items-start  max-h-[500px] overflow-scroll w-full">
        <div className="flex flex-col justify-between items-center
          w-full ">
          {itemList}
        </div>
      </div>
  );
}
