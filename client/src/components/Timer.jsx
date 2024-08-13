import React, { useState, useEffect } from "react";

const Timer = ({ startGame }) => {
  const [time, setTime] = useState(0);

  useEffect(() => {
    let interval;
    setTime(0);
    if (startGame) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [startGame]);

  return (
    <div
      className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg bg-center w-48"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(/fronttile.png)",
        fontFamily: '"Pacifico", cursive',
        fontWeight: "800",
        fontStyle: "normal",
        color: "#D8D7D4",
        cursor: "default",
      }}
    >{`Time Elapsed: ${time} `}</div>
  );
};

export default Timer;
