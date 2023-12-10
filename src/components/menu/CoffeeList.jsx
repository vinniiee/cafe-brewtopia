import { useEffect, useState } from "react";
import Carousel from "../../ui/Carousel";
import useCoffees from "../../features/menu/useCoffees";
import CoffeeListItem from "./CoffeeListItem";
import { useSearchParams } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

// eslint-disable-next-line react/prop-types
export default function CoffeeList({ setCoffee, selected }) {
  const { data } = useCoffees();
  useSearchParams();
  useEffect(() => {}, [data]);
  const [active, setActive] = useState(true);
  // eslint-disable-next-line react/prop-types
  const items = data.map((item, i) => {
    return (
      <motion.div 
      key={i} 
      className="w-full flex justify-stretch"
      initial={{scale:0,y:'-100%'}}
      animate={{scale:1,y:'0%'}}
      exit={{scale:0}}
      transition={{delay:.5+(i*.1), duration:.3}}
      >
        <CoffeeListItem
          setCoffee={setCoffee}
          active={active}
          setActive={setActive}
          item={item}
          i={i}
          selected={selected}
        />
      </motion.div>
    );
  });
  return (
    <Carousel>
      <AnimatePresence>
      {items.length === 0 ? (
        <p className="font-primary tracking-wide text-white opacity-70">
          No Coffees found for these selections.
        </p>
      ) : (
        items
      )}
      </AnimatePresence>
    </Carousel>
  );
}
