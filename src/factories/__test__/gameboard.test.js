import gameboard from "../gameboard";
it("expect array of 10 arrays containg 10 undefined items", () => {
  const game = gameboard();
  expect(game.board.length).toBe(10);
  game.board.forEach((arr) => {
    expect(arr.length).toBe(10);
    expect(arr.every((item) => item === undefined)).toBeTruthy();
  });
});

it("place ship within boandaries", () => {
  const game = gameboard();
  game.placeShips(0, 0, 3);
  expect(game.board[0]).toEqual([
    "X",
    "X",
    "X",
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
  ]);
  expect(game.placeShips(9, 2, 5)).toBeTruthy();
  expect(game.board[9]).toEqual([
    undefined,
    undefined,
    "X",
    "X",
    "X",
    "X",
    "X",
    undefined,
    undefined,
    undefined,
  ]);
});

it("place ship outside of boundaries", () => {
  const game = gameboard();
  expect(game.placeShips(9, 9, 5)).toBeFalsy();
});

describe("hit ship", () => {
  const game = gameboard();
  game.placeShips(0, 0, 3);
  it("expect attack to return a hit with XO", () => {
    game.recieveAttack(0, 2);
    expect(game.board[0][2]).toBe("XO");
  });
  it("expect attack to return a miss with O", () => {
    game.recieveAttack(0, 3);
    expect(game.board[0][3]).toBe("O");
  });
});
