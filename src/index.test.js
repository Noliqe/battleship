/* eslint-disable */
import gameBoard from './gameboard.js';
import ship from './ship.js';
import player from './player';


test('hit', () => {
  const carrier = ship('carrier', 5);
  carrier.hit(1);
  expect(carrier.object.damage).toStrictEqual([1]);
});

test('hit', () => {
  const carrier = ship('carrier', 5);
  carrier.hit(1);
  carrier.hit(2);
  expect(carrier.object.damage).toStrictEqual([1, 2]);
});

test('isSunk to be true', () => {
  const carrier = ship('carrier', 5);
  carrier.hit(1);
  carrier.hit(2);
  carrier.hit(3);
  carrier.hit(4);
  carrier.hit(5);
  expect(carrier.object.sunk).toBe(true);
});

test('isSunk to be false', () => {
  const carrier = ship('carrier', 5);
  carrier.hit(1);
  carrier.hit(2);
  carrier.hit(3);
  carrier.hit(4);
  expect(carrier.object.sunk).toBe(false);
});

// gameBoard

// test('placeShips', () => {
//   const test = gameBoard();
//   test.placeShips('carrier', [1,2,3,4,5]);
//   expect(test.placeShips.carrier.object.coords).toBe([1,2,3,4,5]);
// });

// player

test('computerArray.length to be 100', () => {
  const playar = player();
  playar.computerAttack();
  expect(playar.attackArray.length).toBe(100);
});

test('computerArray.includes to be true', () => {
  const playar = player();
  playar.computerAttack();
  expect(playar.attackArray.includes('5, 3')).toBe(true);
});
