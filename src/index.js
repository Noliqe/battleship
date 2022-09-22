/* eslint-disable import/no-import-module-exports */
/* eslint-disable for-direction */
/* eslint-disable no-plusplus */
// eslint-disable-next-line max-len
// eslint-disable-next-line import/no-extraneous-dependencies, no-unused-vars
import { doc } from 'prettier';
import './style.css';

const ship = (shipName, shipLength, damage, shipSunk, coordinates) => {
  const object = {
    name: shipName,
    length: shipLength,
    damaged: damage,
    sunk: shipSunk,
    array: coordinates,
  };

  const isSunk = () => {
    if (object.array.length === 0) {
      object.sunk = true;
    }
  };

  const hit = (num) => {
    // add damaged part to object.damaged
    object.damaged += num;
    // remove damaged part from array
    const index = object.array.indexOf(num);
    object.array.splice(index, 1);
    isSunk();
  };

  return {
    object, hit, isSunk,
  };
};

const gameboard = () => {
  // create gameboardGrid *
  const gameArray = [];
  const createGrid = (num) => {
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
          console.log(gameArray[i]);
          // eslint-disable-next-line no-use-before-define
          newPlayer.hitComputer(gameArray[i], i, 2);
          square.style.pointerEvents = 'none';
        }
      });
    }
  };
  // make new ship using factorial function
  const carrier = ship('carrier', 5, '', false, [1, 2, 3, 4, 5]);
  const battleship = ship('battleship', 4, '', false, [6, 16, 26, 36]);
  const destroyer = ship('destroyer', 3, '', false, [90, 91, 92]);
  const submarine = ship('submarine', 3, '', false, [50, 60, 70]);
  const patrolBoat = ship('patrol-boat', 2, '', false, [39, 49]);

  // place ship in gameArray
  const placeShip = (shipName, player) => {
    if (shipName === 'carrier') {
      for (let i = 0; i < carrier.object.array.length; i++) {
        const index = carrier.object.array[i];
        gameArray[index] = carrier.object.name;
        if (player !== undefined) {
          const square = document.querySelector(`#square${index}-board1`);
          square.style.background = 'blue';
        }
      }
    } else if (shipName === 'battleship') {
      for (let i = 0; i < battleship.object.array.length; i++) {
        const index = battleship.object.array[i];
        gameArray[index] = battleship.object.name;
        if (player !== undefined) {
          const square = document.querySelector(`#square${index}-board1`);
          square.style.background = 'blue';
        }
      }
    } else if (shipName === 'destroyer') {
      for (let i = 0; i < destroyer.object.array.length; i++) {
        const index = destroyer.object.array[i];
        gameArray[index] = destroyer.object.name;
        if (player !== undefined) {
          const square = document.querySelector(`#square${index}-board1`);
          square.style.background = 'blue';
        }
      }
    } else if (shipName === 'submarine') {
      for (let i = 0; i < submarine.object.array.length; i++) {
        const index = submarine.object.array[i];
        gameArray[index] = submarine.object.name;
        if (player !== undefined) {
          const square = document.querySelector(`#square${index}-board1`);
          square.style.background = 'blue';
        }
      }
    } else if (shipName === 'patrol-boat') {
      for (let i = 0; i < patrolBoat.object.array.length; i++) {
        const index = patrolBoat.object.array[i];
        gameArray[index] = patrolBoat.object.name;
        if (player !== undefined) {
          const square = document.querySelector(`#square${index}-board1`);
          square.style.background = 'blue';
        }
      }
    }
  };
  // when receiving attack, check wether hit or not
  const receiveAttack = (coords, num, x) => {
    const tile = document.getElementById(`square${num}-board${x}`);
    if (coords === 'carrier') {
      carrier.hit(num);
      tile.style.background = 'yellow';
      gameArray[num] = 'O';
    } else if (coords === 'battleship') {
      battleship.hit(num);
      tile.style.background = 'yellow';
      gameArray[num] = 'O';
    } else if (coords === 'destroyer') {
      destroyer.hit(num);
      tile.style.background = 'yellow';
      gameArray[num] = 'O';
    } else if (coords === 'submarine') {
      submarine.hit(num);
      tile.style.background = 'yellow';
      gameArray[num] = 'O';
    } else if (coords === 'patrol-boat') {
      patrolBoat.hit(num);
      tile.style.background = 'yellow';
      gameArray[num] = 'O';
    } else {
      // let num = txt.replace(/\D/g,'');
      gameArray[num] = 'x';
      tile.style.background = 'brown';
    }
  };

  // *
  const gameOver = () => {
    const a = carrier.object.sunk;
    const b = battleship.object.sunk;
    const c = destroyer.object.sunk;
    const d = submarine.object.sunk;
    const e = patrolBoat.object.sunk;
    if (a === true && b === true && c === true && d === true && e === true) {
      return (true);
    }
    return (false);
  };

  return {
    gameArray,
    createGrid,
    carrier,
    battleship,
    destroyer,
    submarine,
    patrolBoat,
    placeShip,
    receiveAttack,
    gameOver,
  };
};

const player = () => {
  const playerOne = gameboard();
  const createPlayer = () => {
    playerOne.createGrid(1);
    playerOne.placeShip('submarine', 1);
    playerOne.placeShip('carrier', 1);
    playerOne.placeShip('battleship', 1);
    playerOne.placeShip('patrol-boat', 1);
    playerOne.placeShip('destroyer', 1);
  };
  const computerOne = gameboard();
  const createComputer = () => {
    computerOne.createGrid(2);
    computerOne.placeShip('submarine');
    computerOne.placeShip('carrier');
    computerOne.placeShip('battleship');
    computerOne.placeShip('patrol-boat');
    computerOne.placeShip('destroyer');
  };

  const hitPlayer = () => {
    const x = Math.floor(Math.random() * (101));
    for (let i = x; i < 100; i++) {
      if (playerOne.gameArray[x] !== 'x' && playerOne.gameArray[x] !== 'O') {
        playerOne.receiveAttack(playerOne.gameArray[x], x, 1);
        return;
      }
    }
    for (let i = x; i > -1; i--) {
      if (playerOne.gameArray[x] !== 'x' && playerOne.gameArray[x] !== 'O') {
        playerOne.receiveAttack(playerOne.gameArray[x], x, 1);
        return;
      }
    }
  };

  const hitComputer = (coords, num, x) => {
    computerOne.receiveAttack(coords, num, x);
    setTimeout(() => {
      hitPlayer();
    }, '500');
  };

  return {
    playerOne,
    computerOne,
    createPlayer,
    createComputer,
    hitComputer,
    hitPlayer,
  };
};

const newPlayer = player();
const start = document.querySelector('.start');
start.addEventListener('click', () => {
  // eslint-disable-next-line no-unused-vars
  newPlayer.createPlayer();
  newPlayer.createComputer();
});

module.exports = { ship, gameboard, player };
