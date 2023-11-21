import { useEffect, useRef, useState } from "react";
import RingButton from "./RingButton";
import { motion, useAnimationControls, useMotionValue } from "framer-motion";

// eslint-disable-next-line react/prop-types
export default function Carousel({ children, showArrows }) {
  const sliderStep = 600;
  const x = useMotionValue(0);
  // console.log(x);
  const [mask, setmask] = useState(0);
  const draggableElement = useRef();
  const draggableMask = useRef();
  useEffect(() => {
    let mask;
    mask =
      draggableElement.current.scrollWidth -
      draggableElement.current.offsetWidth;
    setmask(mask);
  }, [draggableElement]);

  const controls = useAnimationControls();
  let left = -mask - 32;

  return (
    <>
      {showArrows && (
        <span
          className="absolute -bottom-0 left-16 z-20 md:relative md:bottom-0 md:left-0"
          onClick={() =>
            controls.start({
              x: x.get() + sliderStep < 0 ? x.get() + sliderStep : 0,
            })
          }
        >
          <RingButton label={"prev"} direction={"left"} />
        </span>
      )}
      <div
        ref={draggableMask}
        className={` overflow-hidden  p-8 h-full max-w-screen`}
      >
        <motion.div
          ref={draggableElement}
          drag="x"
          animate={controls}
          style={{ x }}
          transition={{ duration: 0.5 }}
          dragConstraints={{ left, right: 0 }}
          className="inline-flex justify-start items-strech w-full h-full "
        >
          {children}
        </motion.div>
      </div>
      {showArrows && (
        <span
          className="absolute bottom-0 xs:bottom-0 right-16  z-20 md:relative md:bottom-0 md:right-0"
          onClick={() =>
            controls.start({
              x: -1 * Math.min(-1 * (x.get() - sliderStep), mask + 32),
            })
          }
        >
          <RingButton label={"next"} />
        </span>
      )}
    </>
  );
}
