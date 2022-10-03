/* eslint-disable */
import gameBoard from './gameboard.js';
import ship from './ship.js';
import player from './player';

// ship

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

// test('createboard', () => {
//   const test = gameBoard();
//   test.createBoard(1);
//   expect(test.gameArray.length).toBe(100);
// });

test('ship coordinates', () => {
  const test = gameBoard();
  test.shipCoordinates('carrier', ['carrier', [1, 2], [1, 3], [1, 4], [1, 5], [1, 6]]);
  expect(test.carrier.object.coords).toStrictEqual([[1, 2], [1, 3], [1, 4], [1, 5], [1, 6]]);
});

test('get index', () => {
  const test = gameBoard();
  expect(test.getIndex([1, 2])).toBe(10);
});

test('get index', () => {
  const test = gameBoard();
  expect(test.getIndex([2, 1])).toBe(1);
});

test('get index', () => {
  const test = gameBoard();
  expect(test.getIndex([1, 1])).toBe(0);
});

// player

test('computerArray.length to be 100', () => {
  const playar = player();
  expect(playar.computerArray.length).toBe(100);
});

