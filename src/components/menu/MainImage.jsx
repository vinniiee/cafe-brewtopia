import { AnimatePresence, motion } from "framer-motion";
import { useContext } from "react";
import { CoffeeContext } from "../../pages/Menu";

// eslint-disable-next-line react/prop-types
export default function MainImage() {
  const { coffee, isLoading } = useContext(CoffeeContext);
  return (
    <div className="w-full hidden relative lg:flex justify-center  mb-32">
      <AnimatePresence mode="wait">
        {!isLoading && coffee && (
          <motion.div
            variants={{
              initial: {
                x: "25vw",
                y: "-100vh",
                rotate: -90,
                scale: 0.2,
                opacity: 0,
              },
              animate: {
                x: "0vw",
                y: "0vh",
                rotate: 0,
                scale: 1,
                opacity: 1,
                transition: { duration: 1.5 },
              },
              exit: {
                x: "-30vw",
                y: "20vh",
                rotate: 30,
                scale: 0.2,
                opacity: 0,
                transition: { duration: 1 },
              },
            }}
            key={coffee?.image}
            initial="initial"
            animate="animate"
            exit="exit"
            className="relative h-full w-full z-10 xl:-left-32  flex justify-center"
          >
            <img
              className="max-h-[350px] max-w-[350px] drop-shadow-[30px_15px_5px_rgba(0,0,0,0.4)]"
              src={coffee?.image}
              alt="coffe-main"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
