import player from "../../factories/player";
import gameboard from "../../factories/gameboard";
it("expect player name to be charlie", () => {
  let enemyBoard = gameboard();
  let charlie = player("charlie");
  let computer = player("computer");
  let playerBoard = gameboard();
  expect(charlie.getPlayer()).toBe("charlie");
  expect(charlie.getFleet().length).toBe(5);
  expect(charlie.attack(1, 1, enemyBoard)).toBeTruthy();
  expect(charlie.attack(1, 1, enemyBoard)).toBeFalsy();
  computer.autoAttack(playerBoard);
});
