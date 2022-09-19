/* eslint-disable */
import {ship} from './index';

test('hit', () => {
  const carrier = ship('carrier', 5, '', false);
  carrier.hit(1);
  expect(carrier.object.damaged).toBe('1');
});

test('isSunk', () => {
  const carrier = ship('carrier', 5, '', false);
  carrier.hit(0);
  carrier.hit(1);
  carrier.hit(2);
  carrier.hit(3);
  carrier.hit(4);
  expect(carrier.object.sunk).toBe(true);
});
