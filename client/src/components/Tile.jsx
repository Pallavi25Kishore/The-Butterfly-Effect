import React from "react";

const Tile = ({ tile, handleCardClick }) => {
  return (
    <div
      onClick={() => {
        if (tile.front !== "matched") {
          handleCardClick(tile);
        }
      }}
      className="w-40 h-50"
    >
      {tile.front === true ? (
        <div className="border-2 rounded-sm border-olivegreen w-full h-full">
          <img
            src="/fronttile.png"
            className="object-cover w-full h-full"
          ></img>
        </div>
      ) : (
        <div className="border-2 rounded-sm w-full h-full">
          <img src={tile.src} className="object-cover w-full h-full"></img>
        </div>
      )}
    </div>
  );
};

export default Tile;
