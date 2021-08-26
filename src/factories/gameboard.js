const gameboard = () => {
  let board = [...Array(10).keys()].map((x) =>
    [...Array(10).keys()].map((x) => undefined)
  );

  let ships = [];

  const gameOver = () => ships.every((ship) => ship.isSunk() === true);

  const addShips = (ship) => {
    ships.push(ship);
  };

  const checkAvailability = (
    columnStart,
    rowStart,
    shipLength,
    shipRotated
  ) => {
    if (!shipRotated) {
      return (
        board[columnStart]
          .slice(rowStart, rowStart + shipLength)
          .every((item) => item === undefined) && rowStart + shipLength < 10
      );
    } else {
      let hi =
        board
          .filter(
            (item, index) =>
              index >= columnStart && index < columnStart + shipLength
          )
          .every((item) => item[rowStart] === undefined) &&
        columnStart + shipLength < 10;
      console.log(hi);
      return hi;
    }
  };

  const placeShips = (columnStart, rowStart, ship) => {
    if (checkAvailability(columnStart, rowStart, ship.length, ship.rotate)) {
      for (let i = rowStart, j = 0; i < rowStart + ship.length; i++, j++) {
        board[columnStart][i] = { shipName: ship, position: j, hit: false };
      }
      addShips(ship);
      return true;
    } else {
      return false;
    }
  };

  const checkForHit = (gridLocation) => {
    return (
      gridLocation !== undefined &&
      gridLocation !== "O" &&
      gridLocation.hit !== true
    );
  };

  const recieveAttack = (column, row) => {
    const bombLocation = board[column][row];
    if (checkForHit(bombLocation)) {
      bombLocation.hit = true;
      bombLocation.shipName.hit(bombLocation.position);
    } else {
      board[column][row] = "O";
    }
  };

  return {
    board,
    placeShips,
    recieveAttack,
    ships,
    gameOver,
    checkAvailability,
  };
};

export default gameboard;
