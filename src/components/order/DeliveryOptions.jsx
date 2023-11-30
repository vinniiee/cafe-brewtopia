import { useState } from "react";

export default function DeliveryOptions() {
  const [value, setValue] = useState("");
  console.log("edqwdqfqwcfwrcfrwfraw", value);
  return (
    <div className="flex flex-col w-full space-y-2 text-white uppercase  tracking-wide">
      <div
        className={`w-full rounded flex justify-between items-center
        ${value==='restaurant'?'bg-coffee':'bg-light-coffee'}
          p-4 cursor-pointer duration-200`}
        onClick={() => setValue("restaurant")}
      >
        <label htmlFor="restaurant">at restaurant</label>
        <div className="flex justify-center  items-center space-x-2 ">
          <p className="capitalize">Free</p>
          <input
            type="radio"
            id="restaurant"
            name="delivery"
            value={value}
            checked={value === "restaurant"}
            onChange={(e) => console.log(e.target)}
            className="accent-coffee checked:scale-125  duration-200"
          />
        </div>
      </div>
      <div
        className={`w-full rounded flex justify-between items-center
            ${value==='home'?'bg-coffee':'bg-light-coffee'}
            p-4 cursor-pointer duration-200`}
        onClick={() => setValue("home")}
      >
        <label htmlFor="home">at home</label>
        <div className="flex justify-center items-center space-x-2">
          <p className="capitalize">&#8377;120 /-</p>
          <input
            type="radio"
            id="restaurant"
            name="delivery"
            value={value}
            checked={value === "home"}
            onChange={(e) => console.log(e.target)}
            className="accent-coffee checked:scale-125  duration-200"
          />
        </div>
      </div>
    </div>
  );
}
