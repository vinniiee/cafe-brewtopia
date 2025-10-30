import { Fragment, useRef } from "react";
import Beans from "../../assets/Beans";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";

export default function Popular() {
  const items = [
    { image: "/coffee/caramel.jpg", cost: 230, name: "iced caramel latte" },
    { image: "/coffee/cappuccino.jpg", cost: 270, name: "dry cappuccino" },
    { image: "/coffee/mocha.jpg", cost: 340, name: "mocha double chocolate" },
    { image: "/coffee/latte.jpg", cost: 290, name: "caffè latte" },
    { image: "/coffee/smoothie.jpg", cost: 370, name: "iced latte" },
    { image: "/coffee/iced.jpg", cost: 370, name: "freddo cappuccino" },
  ];

  const coffeeList = items.map((item) => {
    const coffee = item.name.split(" ").join("+");
    return (
      <Fragment key={item.name}>
        <Link to={`/menu?search=${coffee}&filterBy=all`}>
          <div className="h-full bg-white p-2 rounded min-w-[325px] shadow-[20px_20px_10'px_rgba(0,0,0,.5)]">
            <div className="h-full w-full">
              <img className="w-full h-full" src={item.image} />
            </div>
            <div className=" py-4 font-primary text-night">
              <h4 className="text-xl capitalize  font-primary text-night">
                {item.name}
              </h4>
              <p>&#8377; {item.cost}</p>
            </div>
          </div>
        </Link>
      </Fragment>
    );
  });
  const ref = useRef();

  const { scrollYProgress } = useScroll({ target: ref });
  const x = useTransform(
    scrollYProgress,
    [0, 0.9, 1],
    ["250px", "-1225px", "-1825px"]
  );

  return (
    <div ref={ref} className="relative w-screen h-[3800px] flex items-start ">
      <div className="sticky top-0 z-20 flex w-full flex-col p-8 justify-center items-center overflow-hidden">
        <motion.h2 className="text-7xl sm:text-8xl font-primary text-white tracking-wide">
          Our Most <span className="text-night font-semibold">Popular</span>.
        </motion.h2>
        <motion.div
          style={{ x }}
          className="flex flex-row w-screen   items-center 
         space-x-8 p-16  
        "
        >
          {coffeeList}
        </motion.div>
      </div>
      <div className="absolute top-10 w-64 z-10">
        <Beans className="w-full" size={200} color={"dark-coffee-2"} />
      </div>
      <div className="absolute bottom-10  right-0   w-64 z-10">
        <Beans className="w-full" size={200} color={"dark-coffee-2"} />
      </div>
    </div>
  );
}
