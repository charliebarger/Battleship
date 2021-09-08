const shipFactory = (length, id, color, border) => {
  const shipPositions = [...Array(length).keys()].map((x) => undefined);
  let rotate = false;

  const getShipPositions = () => shipPositions;

  const toggleRotate = (rotationStatus) => {
    rotate = !rotate;
  };

  function play() {
    var audio = new Audio("https://inception.davepedu.com/inception.mp3");
    audio.play();
  }

  const hit = (position) => {
    shipPositions[position] = "X";
    play();
    return shipPositions;
  };

  const isSunk = () => shipPositions.every((item) => item === "X");

  return {
    color,
    length,
    border,
    hit,
    isSunk,
    id,
    shipPositions,
    get rotate() {
      return rotate;
    },
    toggleRotate,
    getShipPositions,
  };
};

export default shipFactory;
