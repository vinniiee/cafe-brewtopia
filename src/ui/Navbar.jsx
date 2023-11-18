import { useEffect, useState } from "react";
import Logo from "../assets/Logo";

export default function Navbar() {
  const [y, setY] = useState(false);
  const [sticky, setSticky] = useState(false);
  useEffect(() => {
    function handleScroll() {
      if (y - window.scrollY > 20) {
        setSticky(true);

        console.log(y - window.scrollY);
      } else if (y - window.scrollY < -20) {
        setSticky(false);
      }
      setY(window.scrollY);
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  return (
    <div
      style={{ zIndex: "200000" }}
      className={`flex w-screen h-auto justify-between items-center px-8 pt-8 sm:pt-14 md:pt-14 pl-10 sm:pl-16  md:px-16   fixed    ${
        sticky ? "top-0" : "-top-full"
      } z-50    transition-all duration-1000`}
    >
      <div className="pt-2">
        <Logo className={` h-[80px] sm:h-[125px] `} />
      </div>
      <div className="flex justify-center items-center space-x-2 md:space-x-4 -ml-16 ">
        <div className="w-[50px] md:w-auto">
          <img className="w-full h-full" src="/ui/cart.svg" alt="cart" />
        </div>
        <div className="w-[50px] md:w-auto">
          <img className="w-full h-full" src="/ui/user.svg" alt="user" />
        </div>
      </div>
    </div>
  );
}
