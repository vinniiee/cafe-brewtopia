import { useEffect, useState } from "react";

export const useResizeObserver = (ref) => {
  const [dimension, setDimensions] = useState();

  useEffect(() => {
    const observeTarget = ref.current;
    // Check if the target element exists
    if (!observeTarget) {
      return;
    }

    const resizeObserver = new ResizeObserver((entries) => {
      const dimensions = entries[0].contentRect;
      setDimensions(dimensions);
    });

    // Check if the resizeObserver is truthy before calling methods
    if (resizeObserver) {
      // Assuming entries[0].target is an Element
      resizeObserver.observe(observeTarget);
    }

    return () => {
      // Check if the resizeObserver is truthy before calling methods
      if (resizeObserver) {
        resizeObserver.unobserve(observeTarget);
      }
    };
  }, [ref]);

  return dimension;
};
