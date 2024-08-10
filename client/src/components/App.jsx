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

    let totalIndexedTiles = totalTiles.map((tile, index) => {
      return { ...tile, index: index };
    });

    setCurrentBoard(totalIndexedTiles);
  }, [startGame]);

  const handleCardClick = (clickedTile) => {
    if (clickedTile.index === cardOne.index) {
      return;
    }
    let updatedArr = currentBoard.map((card) => {
      if (card.index === clickedTile.index) {
        return { src: card.src, front: false, index: card.index };
      } else {
        return card;
      }
    });
    setCurrentBoard(updatedArr);

    cardOne.src === undefined && cardTwo.src === undefined
      ? setCardOne(clickedTile)
      : setCardTwo(clickedTile);
  };

  if (cardTwo.src !== undefined) {
    if (cardOne.src === cardTwo.src) {
      console.log("matched");

      let updatedArr = currentBoard.map((card) => {
        if (card.src === cardOne.src) {
          return { src: card.src, front: "matched", index: card.index };
        } else {
          return card;
        }
      });
      setCurrentBoard(updatedArr);
      setCardOne({});
      setCardTwo({});
    } else {
      setTimeout(() => {
        console.log("did not match");
        let updatedArr = currentBoard.map((card) => {
          if (card.src === cardOne.src || card.src === cardTwo.src) {
            return { src: card.src, front: true, index: card.index };
          } else {
            return card;
          }
        });
        setCurrentBoard(updatedArr);
        setCardOne({});
        setCardTwo({});
      }, 500);
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
