import React, { useState } from "react";
import "./shoot.css";
import useThrottle from "../hooks/useThrottle";
const Shoot = () => {
  const [firing, setFiring] = useState(false);

  const shoot = () => {
    setFiring(true);
    setTimeout(() => {
      setFiring(false);
    }, 500);
  };
  
  const throttledShoot = useThrottle(shoot, 100);

  return (
    <>
      <div className="flex justify-center mt-10 text-3xl">Shoot</div>

      <div className="flex justify-start">
        <img
          className="w-48 h-48"
          src="https://img.icons8.com/officel/80/shooting.png"
          alt="shooting"
        />
        <img
          className={`w-12 h-12 ${
            firing ? "animate-fire block" : "hidden"
          } mt-1`}
          src="https://img.icons8.com/nolan/96/bullet.png"
          alt="bullet"
        />
      </div>
      <div className="flex justify-center mt-10">
        <button
          className="px-6 py-2 bg-gray-200 border-2 border-none rounded-md "
          onClick={throttledShoot}
        >
          Shoot Me!
        </button>
      </div>
    </>
  );
};

export default Shoot;
