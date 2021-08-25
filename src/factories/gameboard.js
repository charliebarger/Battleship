const gameboard = () => {
  let board = [...Array(10).keys()].map((x) =>
    [...Array(10).keys()].map((x) => undefined)
  );
  let ships = [];

  const gameOver = () => ships.every((ship) => ship.isSunk() === true);

  const addShips = (ship) => {
    ships.push(ship);
  };

  const placeShips = (columnStart, rowStart, ship) => {
    let i = 0;
    if (rowStart + ship.length < 10) {
      board[columnStart] = board[columnStart].map((item, index) => {
        if (index >= rowStart && index < rowStart + ship.length) {
          item = { shipName: ship, position: i, hit: false };
          i++;
        }
        return item;
      });
      addShips(ship);
      return true;
    } else {
      return false;
    }
  };
  const recieveAttack = (column, row) => {
    const bombLocation = board[column][row];
    if (
      bombLocation !== undefined &&
      bombLocation !== "O" &&
      bombLocation.hit !== true
    ) {
      bombLocation.hit = true;
      bombLocation.shipName.hit(bombLocation.position);
    } else {
      board[column][row] = "O";
    }
  };

  return { board, placeShips, recieveAttack, ships, gameOver };
};

export default gameboard;
