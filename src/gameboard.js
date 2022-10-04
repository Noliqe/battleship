/* eslint-disable no-param-reassign */
/* eslint-disable no-loop-func */
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
      carrier.object.color = coordinates.shift();
      carrier.object.coords = coordinates;
    } else if (shipName === 'battleship') {
      // remove first element from array
      coordinates.shift();
      battleship.object.color = coordinates.shift();
      battleship.object.coords = coordinates;
    } else if (shipName === 'destroyer') {
      // remove first element from array
      coordinates.shift();
      destroyer.object.color = coordinates.shift();
      destroyer.object.coords = coordinates;
    } else if (shipName === 'submarine') {
      // remove first element from array
      coordinates.shift();
      submarine.object.color = coordinates.shift();
      submarine.object.coords = coordinates;
    } else if (shipName === 'patrol-boat') {
      // remove first element from array
      coordinates.shift();
      patrolBoat.object.color = coordinates.shift();
      patrolBoat.object.coords = coordinates;
    }
  };

  // turn variable x and y tile index number
  const getIndex = (index) => {
    const x = Number(index[0]);
    const y = Number(index[1]);
    const total = (y * 10) - 10 + (x - 1);
    return total;
  };

  // if gameArray contains ship, tile style blue
  const tileColor = (index, color) => {
    const square = document.querySelector(`#square${index}-board${1}`);
    square.style.background = color;
  };

  // place ship on grid array
  const placeShips = (num) => {
    for (let i = 0; i < carrier.object.coords.length; i++) {
      const index = carrier.object.coords[i];
      const total = getIndex(index);
      gameArray[total] = carrier.object.name;
      if (num === 1) {
        tileColor(total + 1, carrier.object.color);
      }
    }
    for (let i = 0; i < battleship.object.coords.length; i++) {
      const index = battleship.object.coords[i];
      const total = getIndex(index);
      gameArray[total] = battleship.object.name;
      if (num === 1) {
        tileColor(total + 1, battleship.object.color);
      }
    }
    for (let i = 0; i < destroyer.object.coords.length; i++) {
      const index = destroyer.object.coords[i];
      const total = getIndex(index);
      gameArray[total] = destroyer.object.name;
      if (num === 1) {
        tileColor(total + 1, destroyer.object.color);
      }
    }
    for (let i = 0; i < submarine.object.coords.length; i++) {
      const index = submarine.object.coords[i];
      const total = getIndex(index);
      gameArray[total] = submarine.object.name;
      if (num === 1) {
        tileColor(total + 1, submarine.object.color);
      }
    }
    for (let i = 0; i < patrolBoat.object.coords.length; i++) {
      const index = patrolBoat.object.coords[i];
      const total = getIndex(index);
      gameArray[total] = patrolBoat.object.name;
      if (num === 1) {
        tileColor(total + 1, patrolBoat.object.color);
      }
    }
  };

  // check if all ships are sunk
  const allSunk = () => {
    const a = carrier.object.sunk;
    const b = battleship.object.sunk;
    const c = destroyer.object.sunk;
    const d = submarine.object.sunk;
    const e = patrolBoat.object.sunk;
    if (a === true && b === true && c === true && d === true && e === true) {
      // eslint-disable-next-line no-unused-vars
      return true;
    }
    return false;
  };

  // when receiving attack, check wether hit or not
  const receiveAttack = (coords, num, x, enemyArray) => {
    const tile = document.getElementById(`square${num}-board${x}`);
    const z = num - 1;
    if (coords === 'carrier') {
      carrier.hit(z);
      tile.style.background = 'black';
      tile.textContent = 'X';
      enemyArray[z] = 'O';
    } else if (coords === 'battleship') {
      battleship.hit(z);
      tile.style.background = 'black';
      tile.textContent = 'X';
      enemyArray[z] = 'O';
    } else if (coords === 'destroyer') {
      destroyer.hit(z);
      tile.style.background = 'black';
      tile.textContent = 'X';
      enemyArray[z] = 'O';
    } else if (coords === 'submarine') {
      submarine.hit(z);
      tile.style.background = 'black';
      tile.textContent = 'X';
      enemyArray[z] = 'O';
    } else if (coords === 'patrol-boat') {
      patrolBoat.hit(z);
      tile.style.background = 'black';
      tile.textContent = 'X';
      enemyArray[z] = 'O';
    } else {
      enemyArray[z] = ('miss');
      tile.style.background = 'brown';
    }
    allSunk();
  };

  return {
    gameArray,
    shipCoordinates,
    placeShips,
    receiveAttack,
    allSunk,
    createBoard,
    carrier,
    battleship,
    submarine,
    destroyer,
    patrolBoat,
    getIndex,
  };
};

export default gameBoard;
