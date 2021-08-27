import shipFactory from "../factories/shipfactory";
const ships = [
  { name: "Carrier", length: 5 },
  { name: "Battleship", length: 4 },
  { name: "Cruiser", length: 3 },
  { name: "Submarine", length: 3 },
  { name: "Destroyer", length: 2 },
];

const fleet = ships.map((ship) => shipFactory(ship.length, ship.name));
export default fleet;
