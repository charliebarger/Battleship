import { generateRandomNumber, isObject } from "../helpers/helpers";
const gameboard = () => {
  let board = [...Array(10).keys()].map((x) =>
    [...Array(10).keys()].map((x) => undefined)
  );

  let ships = [];

  let getShips = () => ships;
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
          .every((item) => item === undefined) && rowStart + shipLength - 1 < 10
      );
    } else {
      return (
        board
          .filter(
            (item, index) =>
              index >= columnStart && index < columnStart + shipLength
          )
          .every((item) => item[rowStart] === undefined) &&
        columnStart + shipLength - 1 < 10
      );
    }
  };

  const placeShips = (columnStart, rowStart, ship) => {
    if (checkAvailability(columnStart, rowStart, ship.length, ship.rotate)) {
      let startPoint = ship.rotate ? columnStart : rowStart;
      for (let i = startPoint, j = 0; i < startPoint + ship.length; i++, j++) {
        ship.rotate
          ? (board[i][rowStart] = { shipName: ship, position: j, hit: false })
          : (board[columnStart][i] = {
              shipName: ship,
              position: j,
              hit: false,
            });
      }
      addShips(ship);
      return true;
    } else {
      return false;
    }
  };

  const autoPlaceShips = (ship) => {
    let flag;
    while (!flag) {
      flag = placeShips(
        generateRandomNumber(0, 9),
        generateRandomNumber(0, 9),
        ship
      );
    }
    return true;
  };

  const rotateShips = (shipArray) => {
    for (let i = 0; i < shipArray.length; i++) {
      if (Math.floor(Math.random() * 2) + 1 === 2) {
        shipArray[i].toggleRotate();
      }
    }
  };

  const autoPlaceAllShips = (shipArray) => {
    rotateShips(shipArray);
    shipArray.forEach((ship) => autoPlaceShips(ship));
  };

  const checkBombAvailability = (gridLocation) => {
    return (
      gridLocation === undefined ||
      (isObject(gridLocation) && gridLocation.hit === false)
    );
  };

  const recieveAttack = (column, row) => {
    const bombLocation = board[column][row];
    if (checkBombAvailability(bombLocation)) {
      if (bombLocation === undefined) {
        board[column][row] = "O";
      } else {
        bombLocation.hit = true;
        bombLocation.shipName.hit(bombLocation.position);
      }
      return true;
    }
    return false;
  };

  return {
    board,
    placeShips,
    recieveAttack,
    ships,
    gameOver,
    checkAvailability,
    autoPlaceShips,
    autoPlaceAllShips,
    getShips,
  };
};

export default gameboard;
