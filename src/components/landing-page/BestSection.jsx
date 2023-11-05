import { motion } from "framer-motion";
import RingButton from "../../ui/RingButton";
import Beans from "../../assets/Beans";

export default function BestSection() {
  return (
    <div className="relative flex flex-col  justify-center items-center md:flex-row w-screen py-64 px-32 overflow-hidden  ">
      <div className="relative hidden sm:flex justify-center items-center md:w-1/2 p-4  z-20 drop-shadow-[35px_35px_8px_rgba(0,0,0,.4)] ">
        <motion.img
          initial={{ x: 200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ delay: 1, duration: 1.5, ease: "easeInOut" }}
          className="w-full"
          src="/best.jpg"
          alt="best"
        />
      </div>
      <div className="relative md:w-1/2  flex flex-col justify-center items-center z-20 ">
        <div className="flex flex-col md:w-3/4   justify-center items-center md:items-start space-y-8 text-center md:text-left">
          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-3xl leading-none sm:text-6xl capitalize tracking-wide text-white font-primary "
          >
            Discover the best{" "}
            <span className="text-night font-semibold">coffee</span>.
          </motion.h2>
          <motion.p
            initial={{ y: -20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 1,duration:2 }}
            className="text-md sm:text-xl text-white leading-tight  sm:w-4/5 font-primary font-light tracking-wide"
          >
            We are a company that makes & distributes delicious drinks. Our main
            product is made with a secret recipe and available in stores
            worldwide.
          </motion.p>
          <motion.div
            initial={{ x: -40, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 1, duration: 1.5 }}
          >
            <RingButton label={"order now"} />
          </motion.div>
        </div>
      </div>
      <div className="absolute top-10  left-0  w-64 z-10">
        <Beans className="w-full" size={200} color={"dark-coffee-2"} />
      </div>
      <div className="absolute bottom-10  right-0 w-64 z-10">
        <Beans className="w-full" size={200} color={"dark-coffee-2"} />
      </div>
      
    </div>
  );
}
// right-0 sm:left-0
// right-100 sm:right-0