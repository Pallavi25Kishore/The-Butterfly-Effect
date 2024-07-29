import React from "react";
import Tile from "./Tile.jsx";

const GameBoard = ({ tiles }) => {
  let totalTiles = tiles.concat(tiles);

  for (let i = totalTiles.length - 1; i > 0; i--) {
    let randomIndex = Math.floor(Math.random() * i);
    let temp = totalTiles[i];
    totalTiles[i] = totalTiles[randomIndex];
    totalTiles[randomIndex] = temp;
  }

  return (
    <div className="grid grid-cols-6 gap-4">
      {totalTiles.map((tile, index) => (
        <Tile key={index} tile={tile} />
      ))}
    </div>
  );
};

export default GameBoard;
