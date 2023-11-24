import { useState } from "react";
import Carousel from "../../ui/Carousel";

// eslint-disable-next-line react/prop-types
export default function CoffeeList({ data, setCoffee }) {
  const [active, setActive] = useState(true);
  // eslint-disable-next-line react/prop-types
  const items = data.map((item, i) => {
    return (
      <button
        onClick={() => {
          setCoffee(i);
          setActive(false);
          setTimeout(() => setActive(true), 1500);
        }}
        key={i}
        disabled={!active}
        className="relative flex flex-col justify-center
        group items-center space-y-1
      bg-dark-coffee rounded
        hover:scale-125
        mx-3 p-2 pt-10 mt-4
        min-w-[100px] max-w-[100px] duration-200 delay-50"
      >
        <div className="absolute flex group-hover:scale-75 justify-center items-center h-full w-3/4 -top-1/2 duration-200">
          <img
            className=" max-h-[75px] drop-shadow-[15px_10px_5px_rgba(0,0,0,0.7)] "
            src={item.image}
            alt="coffee"
          />
        </div>
        <p className="text-center  leading-4 text-xs font-thin text-white/70">
          {item.name}
        </p>
      </button>
    );
  });
  return <Carousel>{items.length===0? <p className="font-primary tracking-wide text-white opacity-70">No Coffees found for these selections.</p>:items}</Carousel>;
}
