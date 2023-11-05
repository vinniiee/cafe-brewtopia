import { motion} from "framer-motion";
import {useState } from "react";
export default function CircleRing(props) {
  const [animation, setAnimation] = useState("animate");
  // eslint-disable-next-line react/prop-types
  const label = props.label;
  const ringVariants = {
    initial: {
      rotate: 0,
      pathLength: 1.01,
      transition:{
        duration:1,
        ease:'easeInOut'
      }
    },
    animate: {
      rotate: 270,
      pathLength:  .4,
        transition: {
        ease: "easeInOut",
        duration: 20,
        repeatType: "reverse",
        repeat: Infinity,
      },
    },
    hover: {
      ease:'easeInOut',
      rotate: 0,
      pathLength: 1.2,
      transition: {
        duration: 1,
      },
    },
  };

  return (
    <motion.div
    viewport={{ once: true }}
    initial={{scale:0,y:80,skewX:0}}
    whileInView={{scale:1,y:0,transitionDelay:1,transitionDuration:2,transitionTimingFunction:'ease-out'}}
    whileHover={{scale:1.1}}
    
      className="relative w-full h-full drop-shadow-[35px_35px_8px_rgba(0,0,0,.4)]"
      onMouseEnter={() => setAnimation("hover")}
      onMouseLeave={() => {setAnimation("initial"); setTimeout(()=>setAnimation("animate"),1000)}}
      style={{
        scale: `${animation==="hover" ? "1.1" : "1"}`,
        transition: "all .3s",
        transform:"skewX(35deg)"
      }}
    >
      <svg
        height="250"
        className="relative top-1/2 left-1/2 w-full h-full  drop-shadow-lg p-8"
        viewBox="0 0 378 378"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          transform:'translate(-50%,-50%)'
        }}
      >
        <g filter="url(#filter0_d_36_109)">
          <circle
            cx="175"
            cy="170"
            r="160"
            fill="white"
            strokeDasharray="378 378"
            pathLength="0.75"
          />
          <motion.circle
            initial={"initial"}
            animate={animation}
            variants={ringVariants}
            cx="189"
            cy="185"
            r="175"
            stroke="white"
            fill="none"
            strokeWidth="20"
            strokeDasharray="130"
            strokeDashoffset="60"
            style={{ transition: "all .5s" }}
          />
        </g>
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

