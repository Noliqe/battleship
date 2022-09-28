/* eslint-disable no-plusplus */
/* eslint-disable no-undef */
/* eslint-disable consistent-return */
// eslint-disable-next-line import/extensions, import/no-import-module-exports
import ship from './ship.js';

const gameBoard = () => {
  const gameArray = [];
  // create play board nr 1 or 2
  const createBoard = (num) => {
    const gridBoard = document.querySelector(`.gridBoard${num}`);
    let x = 0;
    let y = 1;
    let id = 0;
    for (let i = 0; i < 109; i++) {
      if (x < 10) {
        x += 1;
        id += 1;
        gameArray.push('');
        const square = document.createElement('div');
        gridBoard.appendChild(square);
        square.classList.add('squares');
        const a = `square${id}-board${num}`;
        square.setAttribute('id', a);
        square.setAttribute('data-y', `${y}`);
        square.setAttribute('data-x', `${x}`);
        square.setAttribute('data-index', `${id}`);
        square.addEventListener('click', () => {
          if (num === 2) {
            square.style.pointerEvents = 'none';
          }
        });
      } else {
        x = 0;
        y += 1;
      }
    }
  };

  // make new ship using factorial function
  const carrier = ship('carrier', 5);
  const battleship = ship('battleship', 4);
  const destroyer = ship('destroyer', 3);
  const submarine = ship('submarine', 3);
  const patrolBoat = ship('patrol-boat', 2);

  // push coordinates to each ship
  const shipCoordinates = (shipName, coordinates) => {
    if (shipName === 'carrier') {
      // remove first element from array
      coordinates.shift();
      carrier.object.coords = coordinates;
    } else if (shipName === 'battleship') {
      // remove first element from array
      coordinates.shift();
      battleship.object.coords = coordinates;
    } else if (shipName === 'destroyer') {
      // remove first element from array
      coordinates.shift();
      destroyer.object.coords = coordinates;
    } else if (shipName === 'submarine') {
      // remove first element from array
      coordinates.shift();
      submarine.object.coords = coordinates;
    } else if (shipName === 'patrol-boat') {
      // remove first element from array
      coordinates.shift();
      patrolBoat.object.coords = coordinates;
    }
  };

  const getIndex = (index) => {
    const x = Number(index[0]);
    const y = Number(index[1]);
    const total = (y * 10) - 10 + x;
    return total;
  };

  const tileColor = (index) => {
    const square = document.querySelector(`#square${index}-board1`);
    square.style.background = 'blue';
  };

  // place ship on grid array
  const placeShips = () => {
    for (let i = 0; i < carrier.object.coords.length; i++) {
      const index = carrier.object.coords[i];
      const total = getIndex(index);
      gameArray[total] = carrier.object.name;
      tileColor(total);
    }
    for (let i = 0; i < battleship.object.coords.length; i++) {
      const index = battleship.object.coords[i];
      const total = getIndex(index);
      gameArray[total] = battleship.object.name;
      tileColor(total);
    }
    for (let i = 0; i < destroyer.object.coords.length; i++) {
      const index = destroyer.object.coords[i];
      const total = getIndex(index);
      gameArray[total] = destroyer.object.name;
      tileColor(total);
    }
    for (let i = 0; i < submarine.object.coords.length; i++) {
      const index = submarine.object.coords[i];
      const total = getIndex(index);
      gameArray[total] = submarine.object.name;
      tileColor(total);
    }
    for (let i = 0; i < patrolBoat.object.coords.length; i++) {
      const index = patrolBoat.object.coords[i];
      const total = getIndex(index);
      gameArray[total] = patrolBoat.object.name;
      tileColor(total);
    }
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
    shipCoordinates,
    placeShips,
    receiveAttack,
    allSunk,
    createBoard,
  };
};

export default gameBoard;
