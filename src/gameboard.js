/* eslint-disable no-plusplus */
/* eslint-disable no-undef */
/* eslint-disable consistent-return */
// eslint-disable-next-line import/extensions, import/no-import-module-exports
import ship from './ship.js';

const gameBoard = () => {
  const gameArray = [];
  const createBoard = (num) => {
    const gridBoard = document.querySelector(`.gridBoard${num}`);
    for (let i = 0; i < 100; i++) {
      gameArray.push('');
      const square = document.createElement('div');
      gridBoard.appendChild(square);
      square.classList.add('squares');
      const x = `square${i}-board${num}`;
      square.setAttribute('id', x);
      square.addEventListener('click', () => {
        if (num === 2) {
          square.style.pointerEvents = 'none';
        }
      });
    }
  };
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
    createBoard,
  };
};

export default gameBoard;
