import "./App.css";
import GameSection from "./componenets/GameSection";
import player from "./factories/player";
import gameboard from "./factories/gameboard";
import GolbalStyles from "./componenets/styles/normalize";
import shipFactory from "./factories/shipfactory";
function App() {
  const player1 = player("player");
  const computer = player("computer");
  const playerGamebaord = gameboard();
  const dingy1 = shipFactory(2, "dingy");
  const dingy2 = shipFactory(2, "dingy");
  playerGamebaord.placeShips(0, 0, dingy1);
  playerGamebaord.placeShips(8, 8, dingy2);
  playerGamebaord.recieveAttack(0, 1);
  playerGamebaord.recieveAttack(8, 8);
  playerGamebaord.recieveAttack(9, 9);
  playerGamebaord.recieveAttack(5, 5);
  const computerGameboard = gameboard();
  return (
    <>
      <GolbalStyles />
      <GameSection
        playerSquares={playerGamebaord.board}
        gridRows={playerGamebaord.board.length}
        gridColumns={playerGamebaord.board[0].length}
      />
    </>
  );
}
export default App;
