import React from "react";
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

  return (
    <>
      <button>NEW GAME</button>
      <GameBoard tiles={tiles} />
    </>
  );
};

export default App;
