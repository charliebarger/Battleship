import shipFactory from "../factories/shipfactory";
function getFleet() {
  let newFleet = [
    { name: "Carrier", length: 5, color: "#98D4BB", border: "black" },
    { name: "Battleship", length: 4, color: "blue" },
    { name: "Cruiser", length: 3, color: "violet" },
    { name: "Submarine", length: 3, color: "orange" },
    { name: "Destroyer", length: 2, color: "yellow" },
  ].map((ship) => shipFactory(ship.length, ship.name, ship.color));
  return newFleet;
}

export default getFleet;
