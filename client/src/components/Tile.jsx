import React from "react";

const Tile = ({ tile, handleCardClick }) => {
  return (
    <div
      onClick={() => {
        if (tile.front !== "matched") {
          handleCardClick(tile);
        }
      }}
      className="w-20 h-24 md:w-40 md:h-48"
    >
      {tile.front === true ? (
        <div className="w-full h-full">
          <img
            src="/fronttile.png"
            className="object-cover w-full h-full rounded-2xl"
          ></img>
        </div>
      ) : (
        <div className="w-full h-full">
          <img
            src={tile.src}
            className="object-cover w-full h-full rounded-2xl"
          ></img>
        </div>
      )}
    </div>
  );
};

export default Tile;
