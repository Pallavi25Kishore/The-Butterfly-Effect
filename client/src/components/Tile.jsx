import React from "react";

const Tile = ({ tile }) => {
  console.log(tile.src);
  return (
    <div className="border-2 border-black">
      <div className="front"></div>
      <div className="back">
        <img src={tile.src}></img>
      </div>
    </div>
  );
};

export default Tile;
