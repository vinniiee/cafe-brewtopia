import { useContext } from "react";
import { CoffeeContext } from "../../../pages/Menu";
import { AnimatePresence, motion } from "framer-motion";

// eslint-disable-next-line react/prop-types
function CardInfoSection({ size }) {
  const { coffee } = useContext(CoffeeContext);
  const infoVariants = {
    initial: { x: "-50%", opacity: 0 },
    animate: {
      x: "0%",
      opacity: 1,
      transition: { duration: 1.5, staggerChildren: 0.2 },
    },
    exit: { x: "50%", opacity: 0 },
  };
  return (
    <div className="w-full overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={coffee?.name}
          initial="initial"
          animate="animate"
          exit="exit"
          variants={infoVariants}
          className="w-full flex flex-col space-y-2 overflow-hidden"
        >
          <motion.div
            variants={infoVariants}
            className="flex justify-start items-center space-x-2"
          >
            <h4 className="text-2xl sm:text-3xl  tracking-wide overflow-hidden">
              {/*eslint-disable-next-line react/prop-types */}
              {coffee?.name || "Coffee?, Not!"}
            </h4>
            {/*eslint-disable-next-line react/prop-types */}
            <div
              className={`${
                coffee
                  ? // eslint-disable-next-line react/prop-types
                    coffee.served.toLowerCase() === "cold"
                    ? "bg-light-coffee"
                    : "bg-dark-coffee"
                  : "bg-dark-coffee"
              } p-0.5 px-2 rounded-xl text-xs`}
            >
              <p className="mt-0.5 capitalize">
                {/*eslint-disable-next-line react/prop-types */}
                {coffee?.served || "N/A"}
              </p>
            </div>
          </motion.div>
          <motion.div
            variants={infoVariants}
            className="flex justify-between items-center
            text-sm font-light"
          >
            {/* eslint-disable-next-line react/prop-types */}
            <p>&#8377; {coffee ? coffee.prices[size] : "0"}/-</p>
            {/* eslint-disable-next-line react/prop-types */}
            <p>{coffee ? coffee.sizes[size] : "0.0"} ml</p>
          </motion.div>
          <motion.p
            variants={infoVariants}
            className="leading-5 font-extralight h-[80px] md:h-[60px]"
          >
            {/*eslint-disable-next-line react/prop-types */}
            {coffee?.description ||
              "A whimsical creation that plays tricks on the eyes. Though unseen, its essence promises a rich blend of mystery, warmth, and the essence of a delightful caffeine kick."}
          </motion.p>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default CardInfoSection;
