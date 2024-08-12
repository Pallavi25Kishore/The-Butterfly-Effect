import React, { memo } from "react";
import Tile from "./Tile.jsx";

const GameBoard = memo(({ tiles, handleCardClick }) => {
  return (
    <div className="grid grid-cols-6 gap-4 w-full h-full">
      {tiles.map((tile, index) => (
        <Tile key={index} tile={tile} handleCardClick={handleCardClick} />
      ))}
    </div>
  );
});

export default GameBoard;
