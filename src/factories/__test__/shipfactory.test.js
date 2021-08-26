import shipFactory from "../shipfactory";

describe("Ship with length of 5", () => {
  const shipObject = shipFactory(5, "battleship");

  it("tell if ship returns correct object", () => {
    expect(shipObject).toMatchObject({
      length: 5,
    });
  });
  it("check that ship is not sunk", () => {
    expect(shipObject.isSunk()).toBeFalsy();
  });
});

describe("ship should sink", () => {
  const shipObject = shipFactory(3, "submarine");
  it("sink the ship", () => {
    [0, 1, 2].map((item) => shipObject.hit(item));
    expect(shipObject.isSunk()).toBeTruthy();
  });
});

describe("test rotation", () => {
  const shipObject = shipFactory(5, "battleship");
  it("default rotate should be false", () => {
    expect(shipObject.rotate).toBeFalsy();
  });
  it("rotate the ship", () => {
    shipObject.toggleRotate();
    expect(shipObject.rotate).toBeTruthy();
  });
  xit("rotate it back", () => {
    shipObject.toggleRotate();
    expect(shipObject.rotate).toBeFalsy();
  });
});

it("test shipPositions", () => {
  const shipObject = shipFactory(2, "dingy");
  shipObject.hit(0);
  expect(shipObject.shipPositions).toEqual(["X", undefined]);
  shipObject.hit(1);
  expect(shipObject.shipPositions).toEqual(["X", "X"]);
  expect(shipObject.isSunk()).toBeTruthy();
});
