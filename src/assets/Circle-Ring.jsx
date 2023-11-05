import { motion } from "framer-motion";
import { useState } from "react";

const svgVariants = {
  initial: {
    rotate: 270,
    pathLength: 1.01,
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
  animate: {
    rotate: 0,
    pathLength: 0.6,
    transition: {
      ease: "easeInOut",
      duration: 30,
      repeatType: "reverse",
      repeat: Infinity,
      staggerChilderen: 2,
    },
  },
  hover: {
    ease: "easeInOut",
    rotate: 0,
    pathLength: 1.01,
    transition: {
      duration: 1,
    },
  },
};

export default function Circlering(props) {
  const [animation, setAnimation] = useState("animate");
  // eslint-disable-next-line react/prop-types
  const label = props.label;
  return (
    <motion.div
      initial={{ scale: 0, y: 80 }}
      whileInView={{
        scale: 1,
        y: 0,
        transitionDelay: 1,
        transitionDuration: 2,
        transitionTimingFunction: "ease-out",
      }}
      whileHover={{ scale: 1.1 }}
      className="relative w-full h-full drop-shadow-[35px_35px_10px_rgba(0,0,0,.5)]"
      onMouseEnter={() => setAnimation("hover")}
      onMouseLeave={() => {
        setAnimation("initial");
        setTimeout(() => setAnimation("animate"), 1000);
      }}
      style={{
        scale: `${animation === "hover" ? "1.1" : "1"}`,
        transition: "all .3s",
      }}
    >
      <svg
        width="305"
        height="305"
        viewBox="0 0 305 305"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M288 145C288 222.32 225.32 285 148 285C70.6801 285 8 222.32 8 145C8 67.6801 70.6801 5 148 5C225.32 5 288 67.6801 288 145Z"
          fill="white"
        />
        <motion.circle
            initial="initial"
            animate={animation}
            variants={svgVariants}
          cx="152.5"
          cy="152.5"
          r="144.5"
          stroke="white"
          strokeWidth="15"
        />
      </svg>

      <p
        className="absolute top-1/2 left-1/2 text-xl sm:text-3xl text-center text-coffee font-primary"
        style={{ transform: "translate(-50%,-50%)" }}
      >
        {label}
      </p>
    </motion.div>
  );
}
