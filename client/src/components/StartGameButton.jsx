import React from "react";

const StartGameButton = ({ handleStartGame }) => {
  return (
    <div>
      <button onClick={handleStartGame}>NEW GAME</button>
    </div>
  );
};

export default StartGameButton;
