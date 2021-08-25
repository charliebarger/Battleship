const shipFactory = (length, id) => {
  const shipPositions = [...Array(length).keys()].map((x) => undefined);

  const hit = (position) => {
    shipPositions[position] = "X";
    return shipPositions;
  };

  const isSunk = () => shipPositions.every((item) => item === "X");

  return { length, hit, isSunk, id, shipPositions };
};

export default shipFactory;
