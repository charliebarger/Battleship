import gameboard from "../gameboard";
import shipFactory from "../shipfactory";
import ships from "../../helpers/ships";
it("expect array of 10 arrays containg 10 undefined items", () => {
  const game = gameboard();
  expect(game.board.length).toBe(10);
  game.board.forEach((arr) => {
    expect(arr.length).toBe(10);
    expect(arr.every((item) => item === undefined)).toBeTruthy();
  });
});

describe("place ship within boandaries", () => {
  const game = gameboard();
  const dingy1 = shipFactory(2, "dingy");
  const dingy2 = shipFactory(2, "dingy");
  const battleship = shipFactory(5, "battleship");
  game.placeShips(0, 0, dingy1);
  it("make sure dingy is added", () => {
    expect(game.board[0][0].shipName).toEqual(dingy1);
  });
  it("place ship outside of boundaries", () => {
    expect(game.placeShips(9, 9, battleship)).toBeFalsy();
  });
  it("dont let ships be placed on top of each other", () => {
    expect(game.placeShips(0, 1, dingy2)).toBeFalsy();
  });
  it("check availability before placing on occupied space", () => {
    expect(game.checkAvailability(0, 0, dingy2.length)).toBeFalsy();
  });
  it("check availability before placing on unoccupied space", () => {
    expect(game.checkAvailability(1, 0, dingy2.length)).toBeTruthy();
  });
});

describe("rotate ship test", () => {
  const game = gameboard();
  const battleship1 = shipFactory(5, "battleship");
  game.placeShips(5, 0, battleship1);
  const battleship2 = shipFactory(5, "battleship");
  battleship2.toggleRotate();
  it("end of ship unavailable", () => {
    expect(
      game.checkAvailability(1, 0, battleship2.length, battleship2.rotate)
    ).toBeFalsy();
  });
  it("begining of ship unavailable", () => {
    expect(
      game.checkAvailability(4, 0, battleship2.length, battleship2.rotate)
    ).toBeFalsy();
  });
  it("should be available", () => {
    expect(
      game.checkAvailability(0, 0, battleship2.length, battleship2.rotate)
    ).toBeTruthy();
  });
  it("should be available because of row", () => {
    expect(
      game.checkAvailability(1, 9, battleship2.length, battleship2.rotate)
    ).toBeTruthy();
  });
});

it("place ship outside of boundaries", () => {
  const game = gameboard();
  expect(game.placeShips(9, 9, 5)).toBeFalsy();
});

it("place ship on top of another", () => {});

describe("hit ship", () => {
  const game = gameboard();
  const dingy = shipFactory(2, "dingy");
  game.placeShips(0, 0, dingy);
  it("expect attack to return a hit with true", () => {
    game.recieveAttack(0, 1);
    expect(game.board[0][1].hit).toEqual(true);
  });
  it("expect attack to return a miss with O", () => {
    game.recieveAttack(0, 3);
    expect(game.board[0][3]).toBe("O");
  });
});

it("make sure ship is added to ships", () => {
  const game = gameboard();
  const dingy = shipFactory(2, "dingy");
  game.placeShips(0, 0, dingy);
  expect(game.ships[0]).toMatchObject(dingy);
});

it("test position", () => {
  const game = gameboard();
  const dingy = shipFactory(4, "dingy");
  game.placeShips(2, 5, dingy);
  expect(game.board[2][5].position).toBe(0);
  expect(game.board[2][7].position).toBe(2);
});

describe("test game over", () => {
  const game = gameboard();
  const dingy1 = shipFactory(2, "dingy1");
  game.placeShips(0, 5, dingy1);
  const dingy2 = shipFactory(2, "dingy2");
  game.placeShips(1, 5, dingy2);
  it("game not over", () => {
    game.recieveAttack(0, 5);
    game.recieveAttack(0, 6);
    game.recieveAttack(1, 5);
    expect(game.gameOver()).toBe(false);
  });
  it("game over", () => {
    game.recieveAttack(1, 6);
    expect(game.gameOver()).toBe(true);
  });
});

describe("test placing rotated ship", () => {
  const game = gameboard();
  const battleship = shipFactory(5, "battleship");
  battleship.toggleRotate();
  it("Make sure ships can be placed vertically", () =>
    expect(game.placeShips(0, 0, battleship)).toBeTruthy());
  it("Check that all vertical locations are filled", () =>
    expect(
      [0, 1, 2, 3, 4].map(
        (item) => expect(game.board[item][0].shipName.id) === "battleship"
      )
    ).toBeTruthy());
  it("check that ships cant be put off grid", () =>
    expect(game.placeShips(5, 0, battleship)).toBeFalsy());
});

describe("computer palcement", () => {
  const game = gameboard();
  const battleship = shipFactory(5, "battleship");
  it("make sure ship is placed", () => {
    battleship.toggleRotate();
    expect(game.autoPlaceShips(battleship)).toBeTruthy();
  });
  it("add multiple ships", () => {
    let rotatedShip = shipFactory(5, "battleship2");
    rotatedShip.toggleRotate();
    const ships = [
      rotatedShip,
      shipFactory(5, "battleship2"),
      shipFactory(5, "battleship3"),
      shipFactory(5, "battleship4"),
      shipFactory(5, "battleship5"),
    ];
    expect(ships.every((item) => game.autoPlaceShips(item))).toBeTruthy();
  });
});

describe("should not be able to attack same place twice", () => {
  const game = gameboard();
  const dingy = shipFactory(2, "dingy");
  game.placeShips(0, 0, dingy);
  it("expect attack to return a hit with true", () => {
    expect(game.recieveAttack(0, 1)).toBeTruthy();
    expect(game.board[0][1].hit).toEqual(true);
    expect(game.recieveAttack(0, 1)).toBeFalsy();
  });
});

it("all ships should be placed automatically", () => {
  const game = gameboard();
  const fleet = ships.map((ship) => shipFactory(ship.length, ship.name));
  game.autoPlaceAllShips(fleet);
});
