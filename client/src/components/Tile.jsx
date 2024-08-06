import React from "react";

const Tile = ({ tile, handleCardClick }) => {
  return (
    <div onClick={() => handleCardClick(tile.src)}>
      <div className="front" className="border-2 border-black">
        <img src="/butterfly.png"></img>
      </div>
      <div className="back" className="border-2 border-black">
        <img src={tile.src}></img>
      </div>
    </div>
  );
};

export default Tile;
