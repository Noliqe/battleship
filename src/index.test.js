/* eslint-disable */
import {ship, gameboard, player} from './index';

test('hit', () => {
  const carrier = ship('carrier', 5, '', false, []);
  carrier.hit(1);
  expect(carrier.object.damaged).toBe('1');
});

test('isSunk', () => {
  const carrier = ship('carrier', 5, '', false, []);
  carrier.hit(0);
  carrier.hit(1);
  carrier.hit(2);
  carrier.hit(3);
  carrier.hit(4);
  expect(carrier.object.sunk).toBe(true);
});

test('isSunk', () => {
  const battleship = ship('battleship', 4, '', false, []);
  battleship.hit(0);
  battleship.hit(1);
  battleship.hit(2);
  battleship.hit(3);
  expect(battleship.object.sunk).toBe(true);
});

test('gameArray', () => {
  const player = gameboard();
  player.placeShip('battleship');
  expect(player.gameArray[6]).toBe('battleship');
});

test('gameArray', () => {
  const player = gameboard();
  player.placeShip('battleship');
  expect(player.gameArray[0]).toBe('');
});

test('receiveAttack', () => {
  const player = gameboard();
  player.placeShip('patrol-boat');
  player.receiveAttack(player.gameArray[49], 49);
  expect(player.patrolBoat.object.damaged).toBe('49');
});

test('receiveAttack', () => {
  const player = gameboard();
  player.placeShip('patrol-boat');
  player.receiveAttack(player.gameArray[49], 49);
  expect(player.patrolBoat.object.array).toStrictEqual([39]);
});

test('receiveAttack', () => {
  const player = gameboard();
  player.placeShip('submarine');
  player.receiveAttack(player.gameArray[0], 0);
  expect(player.gameArray[0]).toBe('x');
});

test('gameOver', () => {
  const player = gameboard();
  player.placeShip('submarine');
  player.placeShip('carrier');
  player.placeShip('battleship');
  player.placeShip('patrol-boat');
  player.placeShip('destroyer');
  player.receiveAttack(player.gameArray[49], 49);
  player.receiveAttack(player.gameArray[39], 39);
  player.receiveAttack(player.gameArray[1], 1);
  player.receiveAttack(player.gameArray[2], 2);
  player.receiveAttack(player.gameArray[3], 3);
  player.receiveAttack(player.gameArray[4], 4);
  player.receiveAttack(player.gameArray[5], 5);
  player.receiveAttack(player.gameArray[6], 6);
  player.receiveAttack(player.gameArray[16], 16);
  player.receiveAttack(player.gameArray[26], 26);
  player.receiveAttack(player.gameArray[36], 36);
  player.receiveAttack(player.gameArray[90], 90);
  player.receiveAttack(player.gameArray[91], 91);
  player.receiveAttack(player.gameArray[92], 92);
  player.receiveAttack(player.gameArray[50], 50);
  player.receiveAttack(player.gameArray[60], 60);
  player.receiveAttack(player.gameArray[70], 70);
  expect(player.gameOver()).toBe(true);
});

test('hit-computer', () => {
  const playerO = player();
  playerO.hitComputer(playerO.computerOne.gameArray[2],2)
  expect(playerO.computerOne.carrier.object.damaged).toBe('2');
});

test('hit-player', () => {
  const computer0 = player();
  computer0.hitPlayer()
  expect(computer0.hitPlayer()).toBe(2);
});