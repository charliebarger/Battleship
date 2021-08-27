import generateRandomNumber from "../helpers/helpers";
import fleet from "../helpers/ships";
const player = (player) => {
  const getPlayer = () => player;
  const getFleet = () => fleet;
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
  return { getPlayer, getFleet, attack, autoAttack };
};

export default player;
