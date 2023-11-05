import { useState } from "react";
import Ring from "../assets/Ring";

// eslint-disable-next-line react/prop-types
export default function RingButton({ label, arrowColor,textColor, direction }) {
  const [hover, setHover] = useState(false);
  const left = <>&larr;</>;
  const right = <>&rarr;</>;
  const arrow = direction === "left" ? left : right;
  return (
    <button
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className={`relative flex justify-center drop-shadow-[5px_10px_4px_rgba(0,0,0,.4)] items-center text-8xl hover:scale-110 duration-500 font-primary ${
        arrowColor || "text-night"
      }  leading-tight drop-shadow-[10px_10px_3px_rgba(0,0,0,.5)]
      
      ${direction === "left" ? "ml-12" : "mr-12"}`}
    >
      <span
        className={`relative duration-500 ${
          direction === "left"
            ? hover
              ? "left-1.5"
              : "left-0"
            : hover
            ? "right-1.5"
            : "right-0"
        }`}
      >
        {arrow}
      </span>
      <div
        className={`absolute top-1/2 -translate-y-1/2 duration-500 ${
          direction === "left"
            ? hover
              ? "-left-20"
              : "-left-4"
            : hover
            ? "-right-20"
            : "-right-4"
        } `}
      >
        <Ring size={80} hover={hover} label={label} textColor={textColor} direction={direction} />{" "}
      </div>
    </button>
  );
}
