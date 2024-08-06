import React, { useState, useEffect } from "react";
import GameBoard from "./GameBoard.jsx";

const App = () => {
  const tiles = [
    { src: "/brain-1.png" },
    { src: "/brain-2.png" },
    { src: "/brain-3.png" },
    { src: "/brain-4.png" },
    { src: "/brain-5.png" },
    { src: "/brain-6.png" },
    { src: "/brain-7.png" },
    { src: "/brain-8.png" },
    { src: "/brain-9.png" },
    { src: "/brain-10.png" },
    { src: "/brain-11.png" },
    { src: "/brain-12.png" },
  ];

  const [currentBoard, setCurrentBoard] = useState([]);
  const [cardOne, setCardOne] = useState("");
  const [cardTwo, setCardTwo] = useState("");
  const [frontVisible, setFrontVisible] = useState("true");
  const [backVisible, setBackVisible] = useState("false");
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

  const handleCardClick = (imageUrl) => {
    cardOne === "" && cardTwo === ""
      ? setCardOne(imageUrl)
      : setCardTwo(imageUrl);
  };

  if (cardTwo !== "") {
    if (cardOne === cardTwo) {
      console.log("matched");
      setCardOne("");
      setCardTwo("");
    } else {
      console.log("did not match");
      setCardOne("");
      setCardTwo("");
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
