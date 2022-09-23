/* eslint-disable no-undef */
/* eslint-disable consistent-return */
// eslint-disable-next-line import/extensions, import/no-import-module-exports
import ship from './ship.js';

const gameBoard = () => {
  const gameArray = [];
  const placeShips = (y, x) => {

  };
  const receiveAttack = (name, coords) => {
    if (coords === name) {
      name.hit();
    } else {
      gameArray[coords].push('miss');
    }
  };
  const allSunk = () => {
    const a = placeShips.carrier.object.sunk;
    const b = placeShips.battleship.object.sunk;
    const c = placeShips.destroyer.object.sunk;
    const d = placeShips.submarine.object.sunk;
    const e = placeShips.patrolBoat.object.sunk;
    let x = false;
    if (a === true && b === true && c === true && d === true && e === true) {
      // eslint-disable-next-line no-unused-vars
      x = true;
    }
  };
  return {
    gameArray,
    placeShips,
    receiveAttack,
    allSunk,
  };
};

export default gameBoard;
