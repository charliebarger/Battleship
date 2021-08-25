const gameboard = () => {
  let board = [...Array(10).keys()].map((x) =>
    [...Array(10).keys()].map((x) => undefined)
  );
  let ships = [];

  const addShips = (ship) => {
    ships.push(ship);
  };

  const placeShips = (columnStart, rowStart, ship) => {
    if (rowStart + ship.length < 9) {
      board[columnStart] = board[columnStart].map((item, index) => {
        if (index >= rowStart && index < rowStart + ship.length) {
          let i = 0;
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
    if (
      board[column][row] !== undefined &&
      board[column][row] !== "O" &&
      board[column][row].hit !== true
    ) {
      board[column][row].hit = true;
    } else {
      board[column][row] = "O";
    }
  };

  return { board, placeShips, recieveAttack, ships };
};

export default gameboard;
