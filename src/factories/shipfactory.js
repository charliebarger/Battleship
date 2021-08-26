const shipFactory = (length, id) => {
  const shipPositions = [...Array(length).keys()].map((x) => undefined);

  let rotate = false;

  const toggleRotate = (rotationStatus) => {
    rotate = !rotate;
  };

  const hit = (position) => {
    shipPositions[position] = "X";
    return shipPositions;
  };

  const isSunk = () => shipPositions.every((item) => item === "X");

  return {
    length,
    hit,
    isSunk,
    id,
    shipPositions,
    get rotate() {
      return rotate;
    },
    toggleRotate,
  };
};

export default shipFactory;
