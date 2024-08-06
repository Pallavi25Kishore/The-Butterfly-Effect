import React, { useState, useEffect } from "react";
import GameBoard from "./GameBoard.jsx";

const App = () => {
  const tiles = [
    { src: "/brain-1.png", front: true },
    { src: "/brain-2.png", front: true },
    { src: "/brain-3.png", front: true },
    { src: "/brain-4.png", front: true },
    { src: "/brain-5.png", front: true },
    { src: "/brain-6.png", front: true },
    { src: "/brain-7.png", front: true },
    { src: "/brain-8.png", front: true },
    { src: "/brain-9.png", front: true },
    { src: "/brain-10.png", front: true },
    { src: "/brain-11.png", front: true },
    { src: "/brain-12.png", front: true },
  ];

  const [currentBoard, setCurrentBoard] = useState([]);
  const [cardOne, setCardOne] = useState({});
  const [cardTwo, setCardTwo] = useState({});
  const [frontVisible, setFrontVisible] = useState(true);
  const [backVisible, setBackVisible] = useState(false);
  const [startGame, setStartGame] = useState(false);

  useEffect(() => {
    let totalTiles = tiles.concat(tiles);

    for (let i = totalTiles.length - 1; i > 0; i--) {
      let randomIndex = Math.floor(Math.random() * i);
      let temp = totalTiles[i];
      totalTiles[i] = totalTiles[randomIndex];
      totalTiles[randomIndex] = temp;
    }

    setCurrentBoard(totalTiles);
  }, [startGame]);

  const handleCardClick = (tile) => {
    cardOne.src === undefined && cardTwo.src === undefined
      ? setCardOne(tile)
      : setCardTwo(tile);
  };

  if (cardTwo.src !== undefined) {
    if (cardOne.src === cardTwo.src) {
      console.log("matched");
      setCardOne({});
      setCardTwo({});
    } else {
      console.log("did not match");
      setCardOne({});
      setCardTwo({});
    }
  }

  const handleStartGame = () => {
    setStartGame(true);
  };

  return (
    <>
      <button onClick={handleStartGame}>NEW GAME</button>
      <GameBoard tiles={currentBoard} handleCardClick={handleCardClick} />
    </>
  );
};

export default App;
