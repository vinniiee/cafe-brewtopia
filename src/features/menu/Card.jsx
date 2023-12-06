import { useState } from "react";
import Beans from "../../assets/Beans";
import Flame from "../../assets/Flame";
// import { useDispatch,  } from "react-redux";
import useCart from "../../hooks/useCart";
// import { useFetchCartQuery } from "../../store";
// import { useUser } from "../authentication/useUser";
import {
  //  useDispatch,
    useSelector } from "react-redux";
// import { addItem, removeItem } from "../../utils/cartApi";
// import { useUser } from "../authentication/useUser";
// import { updateUserCart } from "../../services/apiUser";

// eslint-disable-next-line react/prop-types
export default function Card({ coffee }) {
  const { addItem, removeItem } = useCart();
  const [size, setSize] = useState(1);
  // const dispatch = useDispatch();
  const {data:cart,error} = useSelector((state) => state.cart);
  console.log(cart);
  console.log(error);

  // const uploadCart = async () => {
  //   await updateUserCart({ cart, user });
  // };

  // eslint-disable-next-line react/prop-types
  const cartItem =
    // eslint-disable-next-line react/prop-types
    coffee && cart?.items.find((item) => item.name === coffee?.name);
  console.log(cartItem);
  // eslint-disable-next-line react/prop-types
  let ratingDisplay;
  // eslint-disable-next-line react/prop-types
  if (coffee?.rating) {
    // eslint-disable-next-line react/prop-types
    ratingDisplay = "" + coffee.rating;
    ratingDisplay =
      ratingDisplay.length > 1 ? ratingDisplay : ratingDisplay + ".0";
  }
  return (
    <div
      className="relative z-50 flex flex-col justify-center   bg-black/90 rounded
       font-primary text-white w-full tracking-wide
       p-6 md:max-w-lg"
    >
      <div className="absolute top-1/5 left-0 w-full h-full z-10 opacity-30 overflow-hidden">
        <Flame className="relative fill-coffee w-full bottom-1/5 -left-1/2 h-4/5" />
      </div>
      <div className="absolute right-0 bottom-1/3 opacity-30">
        <Beans size={125} color={"coffee"} />
      </div>
      <div className=" flex w-full justify-between items-center z-10">
        <div className="relative w-1/5 bottom-4">
          <div className="absolute z-10 w-full">
            <img className="w-full" src="/ui/rating-art.svg" alt="rating" />
          </div>
          <p className="relative z-20 text-7xl sm:text-8xl bottom-4 left-2 font-semibold">
            {/*eslint-disable-next-line react/prop-types */}
            {ratingDisplay || "0.0"}
          </p>
        </div>
        <div className="relative h-full flex sm:w-[200px] justify-center  bottom-10">
          {/*eslint-disable-next-line react/prop-types */}
          {coffee ? (
            <img
              // eslint-disable-next-line react/prop-types
              src={coffee.image}
              className="h-[120px] sm:h-[200px] shadow-lg"
              alt="coffee"
            />
          ) : (
            <p className="pt-20 opacity-0 h-[120px] sm:h-[200px] text-black">
              Coffee Image
            </p>
          )}
        </div>
      </div>
      <div className="w-full flex flex-col space-y-2 z-10 mt-4">
        <div className="flex justify-start items-center space-x-2">
          <h4 className="text-2xl sm:text-3xl  tracking-wide">
            {/*eslint-disable-next-line react/prop-types */}
            {coffee?.name || "Coffee?, Not!"}
          </h4>
          {/*eslint-disable-next-line react/prop-types */}
          <div
            className={`${
              coffee
                ? // eslint-disable-next-line react/prop-types
                  coffee.served === "cold"
                  ? "bg-light-coffee"
                  : "bg-dark-coffee"
                : "bg-dark-coffee"
            } p-0.5 px-2 rounded-xl text-xs`}
          >
            <p className="mt-0.5 capitalize">
              {/*eslint-disable-next-line react/prop-types */}
              {coffee?.served || "N/A"}
            </p>
          </div>
        </div>
        <div
          className="flex justify-between items-center
            text-sm font-light"
        >
          {/* eslint-disable-next-line react/prop-types */}
          <p>&#8377; {coffee ? coffee.price[size] : "0"}/-</p>
          {/* eslint-disable-next-line react/prop-types */}
          <p>{coffee ? coffee.sizes[size] : "0.0"} ml</p>
        </div>
        <p className="leading-5 font-extralight h-[80px] md:h-[60px]">
          {/*eslint-disable-next-line react/prop-types */}
          {coffee?.description ||
            "A whimsical creation that plays tricks on the eyes. Though unseen, its essence promises a rich blend of mystery, warmth, and the essence of a delightful caffeine kick."}
        </p>
        <div className="flex flex-col w-full justify-center items-center">
          <div className="flex justify-between space-x-2 items-center py-8 w-full">
            <button
              onClick={() => setSize(0)}
              className={`rounded p-2 px-2 w-1/6 cursor-pointer text-sm hover:scale-105 duration-200 active:translate-y-0.5  ${
                size === 0 ? "bg-dark-coffee" : "bg-light-coffee"
              }`}
            >
              {coffee ? "Small" : "N/A"}
            </button>
            {/* <button onClick={uploadCart}>Cart</button> */}
            <button
              onClick={() => setSize(1)}
              className={`rounded p-1.5 px-2 w-1/3 cursor-pointer text-md hover:scale-105 duration-200 active:translate-y-0.5 ${
                size === 1 ? "bg-dark-coffee" : "bg-light-coffee"
              }`}
            >
              {coffee ? "Grande" : "N/A"}
            </button>
            <button
              onClick={() => setSize(2)}
              className={`rounded p-1 px-2 w-1/2
               cursor-pointer  text-lg hover:scale-105
                duration-200 active:translate-y-0.5 ${
                  size === 2 ? "bg-dark-coffee" : "bg-light-coffee"
                }`}
            >
              {coffee ? "Venti" : "N/A"}
            </button>
          </div>
          {cartItem?.quantity[size] > 0 ? (
            <div className="flex justify-center items-center w-full font-primary -mt-2">
              <button
                className="bg-dark-coffee p-1.5 px-8 text-lg rounded-l w-full"
                onClick={() => removeItem({ cartItem, size })}
              >
                -
              </button>
              <p className="px-6 p-1.5 bg-light-coffee text-white text-lg w-full text-center">
                {cartItem.quantity[size]}
              </p>
              <button
                className="bg-dark-coffee p-1.5 px-8 text-lg rounded-r w-full"
                onClick={() => addItem({ cartItem, coffee, size })}
              >
                +
              </button>
            </div>
          ) : (
            <button
              onClick={() => addItem({ cartItem, coffee, size })}
              className="bg-dark-coffee w-full p-1.5 px-4 -mt-2
               rounded text-lg tracking-wider 
                duration-200 hover:scale-105 active:translate-y-0.5"
            >
              Add
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
