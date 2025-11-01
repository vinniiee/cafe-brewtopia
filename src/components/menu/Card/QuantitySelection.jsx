
import { useNavigate } from "react-router-dom";
import { CoffeeContext } from "../../../pages/Menu";
import { useContext } from "react";
import useCart from "../../../hooks/useCart";

// eslint-disable-next-line react/prop-types
function QuantitySelection({ cartItem, size }) {
  const { coffee } = useContext(CoffeeContext);
  const navigate = useNavigate();
  const { addItem, removeItem } = useCart();
  console.log("cartItem : " + cartItem);
  console.log("coffee : " + coffee);
  return (
    <div className="flex justify-between items-center w-full h-[30px] space-x-2">
      {/* eslint-disable-next-line react/prop-types */}
      {cartItem?.quantity[size] > 0 ? (
        <>
          <div className="flex justify-center items-center w-full font-primary -mt-2">
            <button
              className="bg-dark-coffee p-1.5 px-4 sm:px-8 text-lg rounded-l w-full"
              onClick={() => removeItem({ cartItem, size })}
            >
              -
            </button>
            <p className="px-6 p-1.5 bg-light-coffee text-white text-lg w-full text-center">
              {/*  eslint-disable-next-line react/prop-types */}
              {cartItem.quantity[size]}
            </p>
            <button
              className="bg-dark-coffee p-1.5 px-4 sm:px-8 text-lg rounded-r w-full"
              onClick={() => {
                console.log(`adding item : ${cartItem}, ${coffee}, ${size} }`);
                addItem({ cartItem, coffee, size });
              }}
            >
              +
            </button>
          </div>
          <div className="w-full">
            <button
              onClick={() => navigate("/cart")}
              className="bg-dark-coffee rounded active:-translate-y-0.5 duration-200
                 active:bg-coffee tracking-wide flex justify-start space-x-4 items-center  mb-2 p-2 text-center w-full"
            >
              <div className="h-5 w-1/4 mb-0.5">
                <img
                  className="w-full h-full"
                  src="/ui/bag-icon.svg"
                  alt="cart"
                />
              </div>
              <p className="whitespace-nowrap">Go To Cart</p>
            </button>
          </div>
        </>
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
  );
}

export default QuantitySelection;
