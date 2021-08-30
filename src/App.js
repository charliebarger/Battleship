import GameSection from "./componenets/GameSection";
import player from "./factories/player";
import gameboard from "./factories/gameboard";
import GolbalStyles from "./componenets/styles/normalize";
function App() {
  const playerGame = gameboard();
  const computerGame = gameboard();
  const player1 = player("player");
  const computer = player("computer");
  playerGame.autoPlaceAllShips(player1.getFleet());
  computerGame.autoPlaceAllShips(computer.getFleet());
  return (
    <>
      <GolbalStyles />
      <GameSection
        playerGameboard={playerGame}
        computerGameboard={computerGame}
        player={player1}
        computer={computer}
      />
    </>
  );
}
export default App;
