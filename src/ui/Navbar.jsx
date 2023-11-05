import { useEffect, useState } from "react";
import HeaderLogo from "../components/HeaderLogo";
import {motion} from "framer-motion";
 
export default function Navbar() {
  const [y, setY] = useState(false);
  const [sticky, setSticky] = useState(true);
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
      className={`flex w-screen h-auto justify-between items-strech px-8 pl-16 sm:pl-32 sm:pr- md:px-32 -my-8  fixed    ${
        sticky ? "top-0" : "-top-full"
      } z-50    transition-all duration-1000`}
    >
      <HeaderLogo />
      <motion.div initial={{y:-200}} animate={{y:0}} transition={{duration:2,delay:6}} className="flex justify-center items-center sm:pt-20 space-x-2 md:space-x-4 -ml-16 ">
        <div className="w-[50px] md:w-auto" >
          <img className="w-full h-full" src="/ui/cart.svg" alt="cart" />
        </div>
        <div className="w-[50px] md:w-auto" >
          <img className="w-full h-full" src="/ui/user.svg" alt="user" />
        </div>
      </motion.div>
    </div>
  );
}
