import generateRandomNumber from "../helpers/helpers";
const player = (player) => {
  const getPlayer = () => player;

  const attack = (x, y, enemyGameboard) => enemyGameboard.recieveAttack(x, y);

  const autoAttack = (enemyGameboard) => {
    let flag;
    while (!flag) {
      flag = attack(
        generateRandomNumber(0, 9),
        generateRandomNumber(0, 9),
        enemyGameboard
      );
    }
  };
};

export default player;
