import "./App.css";
import GameSection from "./componenets/GameSection";
import player from "./factories/player";
import gameboard from "./factories/gameboard";
import GolbalStyles from "./componenets/styles/normalize";
function App() {
  const player1 = player("player");
  const computer = player("computer");
  const playerGamebaord = gameboard();
  const computerGameboard = gameboard();
  return (
    <>
      <GolbalStyles />
      <GameSection
        gridRows={playerGamebaord.board.length}
        gridColumns={playerGamebaord.board[0].length}
      />
    </>
  );
}
export default App;
