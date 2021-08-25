import shipFactory from "./shipfactory";
const gameboard = () => {
  let board = [...Array(10).keys()].map((x) =>
    [...Array(10).keys()].map((x) => undefined)
  );
  const placeShips = (columnStart, rowStart, length) => {
    if (rowStart + length < 9) {
      board[columnStart] = board[columnStart].map((item, index) => {
        if (index >= rowStart && index < rowStart + length) {
          item = "X";
        }
        return item;
      });
      return true;
    } else {
      return false;
    }
  };
  const recieveAttack = (column, row) => {
    if (board[column][row] === "X") {
      board[column][row] = "XO";
    } else {
      board[column][row] = "O";
    }
  };

  return { board, placeShips, recieveAttack };
};

export default gameboard;
