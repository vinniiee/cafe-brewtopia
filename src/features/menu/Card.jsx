import { useState } from "react";
import Beans from "../../assets/Beans";
import Flame from "../../assets/Flame";

// eslint-disable-next-line react/prop-types
export default function Card({ coffee }) {
  const [size, setSize] = useState(1);

  // eslint-disable-next-line react/prop-types
  // const { rating, image, name, description, price, sizes, served } = coffee;
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
       p-6 max-w-md"
    >
      <div className="absolute top-1/5 left-0 w-full h-full z-0 opacity-30 overflow-hidden">
        <Flame className="relative w-full bottom-1/5 -left-1/2 h-4/5" />
      </div>
      <div className="absolute right-0 bottom-1/3 opacity-80">
        <Beans size={125} color={"dark-coffee-2"} />
      </div>
      <div className=" flex w-full justify-between items-center z-10">
        <div className="relative w-1/5 bottom-4">
          <div className="absolute z-10 w-full">
            <img className="w-full" src="/ui/rating-art.svg" alt="rating" />
          </div>
          <p className="relative z-20 text-8xl bottom-4 left-2 font-semibold">
            {/*eslint-disable-next-line react/prop-types */}
            {ratingDisplay || "0.0"}
          </p>
        </div>
        <div className="relative h-full flex sm:w-[200px] justify-center  bottom-10">
          {/*eslint-disable-next-line react/prop-types */}
          {coffee ? ( <img src={coffee.image}
              className="h-[120px] sm:h-[200px] shadow-lg"
              alt="coffee"
            />
          ):<p className="pt-20 opacity-0 h-[120px] sm:h-[200px] text-black">Coffee Image</p>}
        </div>
      </div>
      <div className="w-full flex flex-col space-y-2 z-10 mt-4">
        <div className="flex justify-start items-center space-x-2">
          <h4 className="text-2xl sm:text-3xl  tracking-wide">
            {/*eslint-disable-next-line react/prop-types */}
            {coffee?.name || "Coffee?, Not!"}
          </h4>
          {/*eslint-disable-next-line react/prop-types */}
          <div className={`${ coffee ? coffee.served === "cold"
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
          <p>{coffee?coffee.sizes[size]:'0.0'} ml</p>
        </div>
        <p className="leading-5 font-extralight h-[80px] md:h-[60px]">
          {/*eslint-disable-next-line react/prop-types */}
          {coffee?.description || "A whimsical creation that plays tricks on the eyes. Though unseen, its essence promises a rich blend of mystery, warmth, and the essence of a delightful caffeine kick."}
        </p>
        <div className="flex justify-between space-x-2 items-center py-8">
          <button
            onClick={() => setSize(0)}
            className={`rounded p-1 px-2 w-full cursor-pointer text-lg  ${
              size === 0 ? "bg-dark-coffee" : "bg-light-coffee"
            }`}
          >
            {coffee?'Regular':'N/A'}
          </button>
          <button
            onClick={() => setSize(1)}
            className={`rounded p-1 px-2 w-full cursor-pointer text-lg ${
              size === 1 ? "bg-dark-coffee" : "bg-light-coffee"
            }`}
          >
            {coffee?'Grande':'N/A'}
          </button>
          <button
            onClick={() => setSize(2)}
            className={`rounded p-1 px-2 w-full cursor-pointer  text-lg ${
              size === 2 ? "bg-dark-coffee" : "bg-light-coffee"
            }`}
          >
            {coffee?'Venti':'N/A'}
          </button>
        </div>
      </div>
    </div>
  );
}
