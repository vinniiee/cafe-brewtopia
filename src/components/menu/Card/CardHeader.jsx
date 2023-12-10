import { AnimatePresence, motion } from "framer-motion";
// eslint-disable-next-line react/prop-types
function CardHeader({ ratingDisplay, coffee }) {
  return (
    <div className=" flex w-full  justify-between items-center z-10">
      <AnimatePresence mode="wait">
        {ratingDisplay && (
          <motion.div
          variants={{
            initial:{ opacity: 0, y: "-40%" },
            animate:{ opacity: 1, y: "0%" },
            // exit:{ opacity: 0, y: "40%" }
          }}
            initial="initial"
            animate="animate"
            exit="exit"
            className="relative w-1/5 bottom-4"
          >
            <div className="absolute z-10 w-full">
              <img className="w-full" src="/ui/rating-art.svg" alt="rating" />
            </div>
            <p
              className={`relative z-20 text-7xl sm:text-8xl bottom-4 left-2 font-semibold ${
                !ratingDisplay && "opacity-0"
              }`}
            >
              {/*eslint-disable-next-line react/prop-types */}
              {ratingDisplay || "0.0"}
            </p>
          </motion.div>
        )}

        <motion.div
          key={coffee?.image}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0 }}
          transition={{ duration: 1.5 }}
          className="relative h-full w-full flex justify-end lg:justify-center  sm:bottom-10 lg:hidden"
        >
          {/*eslint-disable-next-line react/prop-types */}
          {coffee ? (
            <img
              // eslint-disable-next-line react/prop-types
              src={coffee.image}
              className="h-[150px] sm:h-[200px] shadow-lg"
              alt="coffee"
            />
          ) : (
            <p className="pt-20 opacity-0 h-[120px] sm:h-[200px] text-black">
              Coffee Image
            </p>
          )}
        </motion.div>
      </AnimatePresence>
      <div className="min-h-[120px] sm:min-h-[200px] lg:flex"></div>
    </div>
  );
}

export default CardHeader;
