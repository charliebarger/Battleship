import shipFactory from "../factories/shipfactory";
function getFleet() {
  let newFleet = [
    { name: "Carrier", length: 5, color: "#218B82", border: "#84efe5" },
    { name: "Battleship", length: 4, color: "#F27348", border: "#ffc7b4" },
    { name: "Cruiser", length: 3, color: "#A15D98", border: "#ffbff7" },
    { name: "Submarine", length: 3, color: "#e2ad3b", border: "#fbe0a7" },
    { name: "Destroyer", length: 2, color: "#8EA4C8", border: "#d7e6ff" },
  ].map((ship) => shipFactory(ship.length, ship.name, ship.color, ship.border));
  return newFleet;
}

export default getFleet;
