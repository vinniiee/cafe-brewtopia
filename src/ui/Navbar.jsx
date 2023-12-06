import { useEffect, useState } from "react";
import Logo from "../assets/Logo";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Navbar() {
  const cartItemsCount = useSelector((state) => state.cart.data.totalQuantity);
  const navigate = useNavigate();
  const [y, setY] = useState(false);
  const [sticky, setSticky] = useState(false);
  useEffect(() => {
    function handleScroll() {
      if (y - window.scrollY > 20) {
        setSticky(true);
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
      className={`w-screen h-auto  px-8 pt-8 sm:pt-14 md:pt-14 
      pl-10 sm:pl-16  md:px-16
      fixed drop-shadow-[10px_10px_4px_rgba(0,0,0,.4)]    ${
        sticky ? "top-0" : "-top-full"
      } z-50    transition-all duration-1000`}
    >
      <div className="absolute left-10 sm:left-16 pt-2">
        <Logo
          onClick={() => navigate("/")}
          className={` h-[80px] sm:h-[125px] cursor-pointer`}
        />
      </div>
      <div className="absolute right-10 sm:right-32 flex justify-center items-center space-x-2 md:space-x-4 -ml-16 ">
        <div
          className="relative w-[50px] md:w-auto cursor-pointer active:translate-y-0.5 duration-200"
          onClick={() => navigate("/cart")}
        >
          {cartItemsCount > 0 && (
            <p
              className="absolute top-0 right-0 rounded-full
             md:py-0.5 pt-0.5 h-5 w-5 md:h-6 md:w-6 text-center text-white
             text-xs md:text-sm  bg-light-coffee"
            >
              {cartItemsCount}
            </p>
          )}
          <img className="w-full h-full" src="/ui/cart.svg" alt="cart" />
        </div>
        <div className="w-[50px] md:w-auto">
          <img className="w-full h-full" src="/ui/user.svg" alt="user" />
        </div>
      </div>
    </div>
  );
}
