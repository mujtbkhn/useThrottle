import React, { useState } from "react";
import "./shoot.css";
const Shoot = () => {
  const [firing, setFiring] = useState(false);
  const shoot = () => {
    setFiring(true);
    setTimeout(() => {
      setFiring(false);
    }, 1000);
  };
  return (
    <>
      <div className="text-3xl flex justify-center mt-10">Shoot</div>

      <div className="flex justify-start">
        <img
          className="w-48 h-48"
          src="https://img.icons8.com/officel/80/shooting.png"
          alt="shooting"
          onClick={shoot}
        />
        <img
          className={`w-24 h-24 ${firing ? "animate-fire block" : "hidden"} mt-1`}
          src="https://img.icons8.com/emoji/96/fire.png"
          alt="fire-element"
        />
      </div>
    </>
  );
};

export default Shoot;
