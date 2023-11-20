import { motion } from "framer-motion";
import Flame from "../../assets/Flame";
import RingButton from "../../ui/RingButton";
import HeaderLogo from "../HeaderLogo";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  return (
    <div className="relative overflow-hidden w-screen h-screen  min-h-screen sm:min-h-screen">
      <HeaderLogo/>
      <motion.div
        className="relative h-full  bg-cover "
        initial={{ x: "100vw", opacity: 0 }}
        animate={{ x: "0vw", opacity: 1 }}
        transition={{
          delay: 3,
          duration: 2,
        }}
        style={{
          backgroundImage: "url(/hero.jpg)",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute  uppercase text-5xl leading-none  sm:text-6xl md:text-8xl bottom-10  text-right right-10    drop-shadow-2xl">
          <Flame
            className=""
            size={250}
            initial={{ y: 100, opacity: 0 }}
            animate={{
              y: 20,
              opacity: 1,
            }}
            transition={{
              delay: 6,
              duration: 2,
            }}
          />
          <motion.h1
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 5.5 }}
            className=" inline-block  text-coffee font-medium lg:font-normal lg:text-white  font-primary drop-shadow-sm"
          >
            Take a{" "}
            <span className="text-white lg:text-coffee lg:font-medium">
              Break
            </span>
            .
          </motion.h1>
          <br />
          <motion.h1
            initial={{ y: -40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 6.5 }}
            className=" inline-block text-white xl:font-medium xl:text-coffee font-primary"
          >
            have some{" "}
            <span className="text-coffee font-medium xl:font-normal xl:text-white">
              Coffee
            </span>
            .
          </motion.h1>
          <br />
          <motion.div
            initial={{ x: -40, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 6.5, duration: 2 }}
            className=" mt-8 ml-16 "
          >
            <RingButton
              onClick={()=>navigate('/menu')}
              arrowColor={"text-dark-coffee-2"}
              textColor={"coffee"}
              label={"order now"}
            />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
