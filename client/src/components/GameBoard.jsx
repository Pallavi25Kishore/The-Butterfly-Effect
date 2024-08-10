import React from "react";
import Tile from "./Tile.jsx";

const GameBoard = ({ tiles, handleCardClick }) => {
  return (
    <div className="grid grid-cols-6 gap-3">
      {tiles.map((tile, index) => (
        <Tile key={index} tile={tile} handleCardClick={handleCardClick} />
      ))}
    </div>
  );
};

export default GameBoard;
