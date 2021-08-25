import shipFactory from "../shipfactory";

describe("Ship with length of 5", () => {
  const shipObject = shipFactory(5);

  it("tell if ship returns correct object", () => {
    expect(shipObject).toMatchObject({
      length: 5,
    });
  });
  it("check that ship is not sunk", () => {
    expect(shipObject.isSunk()).toBeFalsy();
  });
});

describe("ship with length of 3", () => {
  const shipObject = shipFactory(3);
  it("sink the ship", () => {
    [0, 1, 2].map((item) => shipObject.hit(item));
    expect(shipObject.isSunk()).toBeTruthy();
  });
});
