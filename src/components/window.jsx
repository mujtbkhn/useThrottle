import React, { useEffect, useState } from "react";
import useThrottle from "../hooks/useThrottle";

const Window = () => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const handleResize = () => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  const throlledHandleResize = useThrottle(handleResize, 500);

  useEffect(() => {
    window.addEventListener("resize", throlledHandleResize);

    return () => {
      window.removeEventListener("resize", throlledHandleResize);
    };
  }, []);
  return (
    <div>
      window Size: {windowSize.width} X {windowSize.height}
    </div>
  );
};

export default Window;
