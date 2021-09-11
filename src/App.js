import GameSection from "./componenets/GameSection";
import player from "./factories/player";
import gameboard from "./factories/gameboard";
import GolbalStyles from "./componenets/styles/globalStyles";
import getFleet from "./helpers/ships";
import { useState } from "react";
import GameOver from "./componenets/GameOver";
import Header from "./componenets/Header";
import { ThemeProvider } from "styled-components";
import theme from "./componenets/styles/theme";
console.log(theme);
function App() {
  const [gameOver, setGameOver] = useState(false);

  const makeNewGame = () => {
    const playerGame = gameboard();
    const computerGame = gameboard();
    const player1 = player("player");
    const computer = player("computer");
    computerGame.autoPlaceAllShips(getFleet());
    return { playerGame, computerGame, player1, computer };
  };
  const { playerGame, computerGame, player1, computer } = makeNewGame();

  return (
    <ThemeProvider theme={theme}>
      <GolbalStyles />
      <Header />
      {!gameOver ? (
        <GameSection
          computer={computer}
          player={player1}
          playerGameboard={playerGame}
          computerGameboard={computerGame}
          setGameOver={setGameOver}
          gameOver={gameOver}
        />
      ) : (
        <div style={{ height: "calc(100vh - 140px)" }}>
          <GameOver handleClick={setGameOver} player={gameOver} />
        </div>
      )}
    </ThemeProvider>
  );
}
export default App;
