import React from "react";

const Head = () => {
  return (
    <div
      className="bg-cover h-1/12 flex items-center"
      style={{ backgroundImage: 'url("/card10.png")', width: "100vw" }}
    >
      <span
        className="text-4xl ml-6 p-3"
        style={{
          // fontFamily: '"Water Brush", cursive',
          fontFamily: '"Pacifico", cursive',
          fontWeight: "800",
          fontStyle: "normal",
          background: "linear-gradient(to right, #3D3743, #907A7A)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        The Butterfly Effect.
      </span>
    </div>
  );
};

export default Head;
