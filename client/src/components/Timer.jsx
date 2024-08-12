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

  return <div>{`Time Elapsed: ${time} `}</div>;
};

export default Timer;
