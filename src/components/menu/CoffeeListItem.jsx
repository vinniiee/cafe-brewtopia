import { AnimatePresence, motion } from "framer-motion";

// eslint-disable-next-line react/prop-types
export default function CoffeeListItem({setCoffee,setActive,i,active,selected,item,}) {
  // eslint-disable-next-line react/prop-types
  const { image, name } = item;
  console.log(item)
  return (
    <AnimatePresence>
    <motion.button
      initial={{ scale: 0, y: "-100%" }}
      animate={{ scale: 1, y: "0%" }}
      exit={{ scale: 0 }}
      transition={{ delay: 0.5 + i * 0.1, duration: 0.3 }}
      onClick={() => {
        setCoffee(i);
        setActive(false);
        setTimeout(() => setActive(true), 1500);
      }}
      key={i}
      disabled={!active}
      className={`relative flex flex-col justify-center
        group items-center space-y-1
       rounded
        ${
          i === selected
            ? "scale-110 bg-dark-coffee"
            : "bg-light-coffee opacity-90"
        }
        hover:scale-110
        mx-3 p-2 pt-10 mt-4
        min-w-[100px] max-w-[100px] duration-200 delay-50`}
    >
      <div
        className={`absolute flex  rounded
        ${
          i !== selected ? "group-hover:scale-90" : "scale-90"
        }   justify-center items-center h-full w-3/4 -top-1/2 duration-200`}
      >
        <img
          className=" max-h-[75px] drop-shadow-[15px_10px_5px_rgba(0,0,0,0.7)] "
          src={image}
          alt="coffee"
        />
      </div>
      <p className="text-center  leading-4 text-xs font-thin text-white/70 drop-shadow-[5px_5px_1px_rgba(0,0,0,0.5)]">
        {name}
      </p>
    </motion.button>
    </AnimatePresence>
  );
}
