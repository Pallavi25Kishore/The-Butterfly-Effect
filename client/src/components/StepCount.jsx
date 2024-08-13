import React from "react";

const StepCount = ({ stepCount }) => {
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
    >{`Step Count: ${stepCount}`}</div>
  );
};

export default StepCount;
