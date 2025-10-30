import { useEffect } from "react";

function useWindowResize({ dependencies, handler }) {
  useEffect(() => {
    function update() {
      handler({ ...dependencies });
    }
    window.addEventListener("resize", update);
    update();
    // const timer = setTimeout(update(), 200);
    return () => {
      window.removeEventListener("resize", update);
      // clearTimeout(timer);
    };
  }, []);
}

export default useWindowResize;
