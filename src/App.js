import GameSection from "./componenets/GameSection";
import player from "./factories/player";
import gameboard from "./factories/gameboard";
import GolbalStyles from "./componenets/styles/normalize";
import getFleet from "./helpers/ships";
import { useState } from "react";
import GameOver from "./componenets/GameOver";
function App() {
  const [gameOver, setGameOver] = useState(false);

  const makeNewGame = () => {
    const playerGame = gameboard();
    const computerGame = gameboard();
    const player1 = player("player");
    const computer = player("computer");
    playerGame.autoPlaceAllShips(getFleet());
    computerGame.autoPlaceAllShips(getFleet());
    return { playerGame, computerGame, player1, computer };
  };
  const { playerGame, computerGame, player1, computer } = makeNewGame();

  return (
    <>
      <GolbalStyles />
      {!gameOver ? (
        <GameSection
          gameOver={gameOver}
          computer={computer}
          player={player1}
          playerGameboard={playerGame}
          computerGameboard={computerGame}
          setGameOver={setGameOver}
        />
      ) : (
        <GameOver handleClick={setGameOver} />
      )}
    </>
  );
}
export default App;
