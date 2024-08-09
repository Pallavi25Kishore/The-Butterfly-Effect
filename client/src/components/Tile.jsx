import React from "react";

const Tile = ({ tile, handleCardClick }) => {
  return (
    <div
      onClick={() => {
        if (tile.front !== "matched") {
          handleCardClick(tile);
        }
      }}
    >
      {tile.front === true ? (
        <div className="front" className="border-2 border-black">
          <img src="/butterfly.png"></img>
        </div>
      ) : (
        <div className="back" className="border-2 border-black">
          <img src={tile.src}></img>
        </div>
      )}
    </div>
  );
};

export default Tile;
