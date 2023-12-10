import { useContext, useState } from "react";
import Beans from "../../../assets/Beans";
import Flame from "../../../assets/Flame";
import { useSelector } from "react-redux";
import { CoffeeContext } from "../../../pages/Menu";
import SizeSelection from "./SizeSelection";
import QuantitySelection from "./QuantitySelection";
import CardInfoSection from "./CardInfoSection";
import CardHeader from "./CardHeader";
import Spinner from "../../../ui/Spinner";

// eslint-disable-next-line react/prop-types
export default function Card() {
  const { coffee, isLoading } = useContext(CoffeeContext);
  const [size, setSize] = useState(1);
  const { data: cart, error } = useSelector((state) => state.cart);
  console.log(cart);
  console.log(error);

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
      className="relative z-50 flex flex-col justify-between   bg-black/90 rounded
       font-primary text-white w-full tracking-wide
       p-6 sm:max-w-md lg:max-w-sm xl:max-w-md min-h-[550px]"
    >
      <div className="absolute top-1/5 left-0 w-full h-full -z-10 opacity-30 overflow-hidden">
        <Flame className="relative fill-coffee w-full bottom-1/5 -left-1/2 h-4/5" />
      </div>
      <div className="absolute right-0 bottom-1/3 opacity-30">
        <Beans size={125} color={"coffee"} />
      </div>
      {!isLoading ? (
        <>
          <CardHeader coffee={coffee} ratingDisplay={ratingDisplay} />
          <div className="w-full flex flex-col space-y-2 z-10 mt-4">
            <CardInfoSection size={size} />
          </div>
        </>
      ) : (
        <div className="w-full flex justify-center items-center min-h-[345px] h-64">
          {" "}
          <Spinner size={40} />
        </div>
      )}
      <div className="flex flex-col self-end w-full justify-center items-center">
        <SizeSelection size={size} setSize={setSize} />
        <QuantitySelection cartItem={cartItem} size={size} />
      </div>
    </div>
  );
}
