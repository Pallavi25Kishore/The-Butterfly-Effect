import React, { useState, useEffect } from "react";
import GameBoard from "./GameBoard.jsx";
import StartGameButton from "./StartGameButton.jsx";
import StepCount from "./StepCount.jsx";
import Head from "./Head.jsx";
import Timer from "./Timer.jsx";
import Chatbot from "./Chatbot.jsx";

const App = () => {
  const tiles = [
    // { src: "/card1.png", front: true },
    { src: "/card2.png", front: true },
    { src: "/card3.png", front: true },
    { src: "/card4.png", front: true },
    // { src: "/card5.png", front: true },
    { src: "/card6.png", front: true },
    { src: "/card7.png", front: true },
    { src: "/card8.png", front: true },
    // { src: "/card9.png", front: true },
    // { src: "/card10.png", front: true },
    { src: "/card11.png", front: true },
    { src: "/card12.png", front: true },
    { src: "/card13.png", front: true },
  ];

  const [currentBoard, setCurrentBoard] = useState([]);
  const [cardOne, setCardOne] = useState({});
  const [cardTwo, setCardTwo] = useState({});
  const [startGame, setStartGame] = useState(0);
  const [stepCount, setStepCount] = useState(0);

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

  useEffect(() => {
    if (cardTwo.src !== undefined) {
      if (cardOne.src === cardTwo.src) {
        let updatedArr = currentBoard.map((card) => {
          if (card.src === cardOne.src) {
            return { src: card.src, front: "matched", index: card.index };
          } else {
            return card;
          }
        });
        setCurrentBoard(updatedArr);
        setStepCount(stepCount + 1);
        setCardOne({});
        setCardTwo({});
      } else {
        setTimeout(() => {
          let updatedArr = currentBoard.map((card) => {
            if (card.src === cardOne.src || card.src === cardTwo.src) {
              return { src: card.src, front: true, index: card.index };
            } else {
              return card;
            }
          });
          setCurrentBoard(updatedArr);
          setStepCount(stepCount + 1);
          setCardOne({});
          setCardTwo({});
        }, 500);
      }
    }
  }, [cardTwo]);

  const handleCardClick = (clickedTile) => {
    if (clickedTile.index === cardOne.index) {
      return;
    }

    if (cardOne.src !== undefined && cardTwo.src !== undefined) {
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

  const handleStartGame = () => {
    setStartGame((prevValue) => prevValue + 1);
    setStepCount(0);
  };

  return (
    <div
      style={{
        backgroundImage: "linear-gradient(to right, #878283 5%, #3D3743 95%)",
        height: "100vh",
        width: "100vw",
      }}
    >
      <Head />
      <div className="flex flex-col md:flex-row w-screen mt-10  h-11/12">
        <div className="w-full md:w-1/6 flex flex-col gap-3 justify-start items-center md:ml-10">
          <StartGameButton handleStartGame={handleStartGame} />
          <Timer startGame={startGame} />
          <StepCount stepCount={stepCount} />
        </div>
        <div className="w-5/6 ml-20 mr-10">
          {startGame ? (
            <GameBoard tiles={currentBoard} handleCardClick={handleCardClick} />
          ) : (
            <div
              className="text-3xl"
              style={{
                fontFamily: '"Pacifico", cursive',
                fontWeight: "800",
                fontStyle: "normal",
                color: "#D8D7D4",
              }}
            >
              Please start a new game to exercise and improve your memory
              skills!
            </div>
          )}
        </div>
        <Chatbot />
      </div>
    </div>
  );
};

export default App;
