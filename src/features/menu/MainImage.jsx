import { AnimatePresence,motion } from "framer-motion";
// import { useEffect } from "react";

// eslint-disable-next-line react/prop-types
export default function MainImage({index,image}) {

  return (
    
        <div className="w-full hidden relative lg:flex justify-center  mb-12" key={index} >
          <AnimatePresence mode="popLayout">
          <motion.div
            key={"image"}
            initial={{ x: "20vw", y: "-100vh", rotate: -100, scale: 0.2 ,opacity:0}}
            animate={{ x: "0vw", y: "0vh", rotate: 0, scale: 1 ,opacity:1}}
            exit={{ x: "-100vw", y: "20vh", rotate: 90, scale: 0.2, opacity:0 }}
            transition={{ duration: 1.5 }}
            className="relative h-full w-full z-10 xl:-left-32  flex justify-center  "
          >
            <img
              className=" max-h-[350px] max-w-[350px] drop-shadow-[30px_15px_5px_rgba(0,0,0,0.4)]"
              src={image}
              alt="coffe-main"
            />
          </motion.div>
          </AnimatePresence>
        </div>
       
  )
}
