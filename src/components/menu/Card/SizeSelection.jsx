import { useContext } from "react";
import { CoffeeContext } from "../../../pages/Menu";

// eslint-disable-next-line react/prop-types
function SizeSelection({ size, setSize }) {
  const { coffee } = useContext(CoffeeContext);
  return (
    <div className="flex justify-between space-x-2 items-center py-8 w-full">
      <button
        onClick={() => setSize(0)}
        className={`rounded p-2 px-2 w-1/6 cursor-pointer text-sm 
              hover:scale-105 duration-200 active:bg-coffee active:-translate-y-0.5  ${
                size === 0 ? "bg-dark-coffee" : "bg-light-coffee"
              }`}
      >
        {coffee ? "Small" : "N/A"}
      </button>
      <button
        onClick={() => setSize(1)}
        className={`rounded p-1.5 px-2 w-1/3 cursor-pointer text-md 
              hover:scale-105 duration-200 active:bg-coffee active:-translate-y-0.5 ${
                size === 1 ? "bg-dark-coffee" : "bg-light-coffee"
              }`}
      >
        {coffee ? "Grande" : "N/A"}
      </button>
      <button
        onClick={() => setSize(2)}
        className={`rounded p-1 px-2 w-1/2
               cursor-pointer  text-lg hover:scale-105
               active:bg-coffee duration-200 active:-translate-y-0.5 ${
                 size === 2 ? "bg-dark-coffee" : "bg-light-coffee"
               }`}
      >
        {coffee ? "Venti" : "N/A"}
      </button>
    </div>
  );
}

export default SizeSelection;
