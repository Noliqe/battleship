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
    const winner = document.querySelector('.winner');
    for (let i = 0; i < 100; i++) {
      gameArray.push('');
      const square = document.createElement('div');
      gridBoard.appendChild(square);
      square.classList.add('squares');
      const x = `square${i}-board${num}`;
      square.setAttribute('id', x);
      square.addEventListener('click', () => {
        if (num === 2 && winner.textContent !== 'you lost') {
          // eslint-disable-next-line no-use-before-define
          newPlayer.hitComputer(gameArray[i], i, 2);
          square.style.pointerEvents = 'none';
        }
      });
    }
  };

  const shipArray = [];

  const randomCoords = (num) => {
    const row1 = [6, 16, 26, 36, 46, 56, 66, 76, 86, 96];
    const row2 = [7, 17, 27, 37, 47, 57, 67, 77, 87, 97];
    const row3 = [8, 18, 28, 38, 48, 58, 68, 78, 88, 98];
    const row4 = [9, 19, 29, 39, 49, 59, 69, 79, 89, 99];
    const column1 = [60, 61, 62, 63, 64, 65, 66, 67, 68, 69];
    const column2 = [70, 71, 72, 73, 74, 75, 76, 77, 78, 79];
    const column3 = [80, 81, 82, 83, 84, 85, 86, 87, 88, 89];
    const column4 = [90, 91, 92, 93, 94, 95, 96, 97, 98, 99];
    const randomArray = [];
    const y = Math.floor(Math.random() * 101);
    const x = `${y}`;
    console.log(shipArray.includes(y));
    const z = Math.floor(Math.random() * 2);
    if (z === 0) {
      const x1 = y + 1;
      const x2 = y + 2;
      const x3 = y + 3;
      const x4 = y + 4;
      // eslint-disable-next-line max-len
      if (shipArray.includes(x) || shipArray.includes(x1) || shipArray.includes(x2) || shipArray.includes(x3) || shipArray.includes(x4)) {
        randomCoords(num);
      }
      // eslint-disable-next-line max-len
      if (num === 5 && !row1.includes(x) && !row2.includes(x) && !row3.includes(x) && !row4.includes(x)) {
        for (let i = 0; i < num; i++) {
          randomArray.push(y + i);
        }
      } else if (num === 4 && !row2.includes(x) && !row3.includes(x) && !row4.includes(x)) {
        for (let i = 0; i < num; i++) {
          randomArray.push(y + i);
        }
      } else if (num === 3 && !row3.includes(x) && !row4.includes(x)) {
        for (let i = 0; i < num; i++) {
          randomArray.push(y + i);
        }
      } else if (num === 2 && !row4.includes(x)) {
        for (let i = 0; i < num; i++) {
          randomArray.push(y + i);
        }
      } else {
        randomCoords(num);
      }
    } else if (z === 1) {
      const x1 = y + 10;
      const x2 = y + 20;
      const x3 = y + 30;
      const x4 = y + 40;
      // eslint-disable-next-line max-len
      if (shipArray.includes(x) || shipArray.includes(x1) || shipArray.includes(x2) || shipArray.includes(x3) || shipArray.includes(x4)) {
        randomCoords(num);
      }
      // eslint-disable-next-line max-len
      if (num === 5 && !column1.includes(x) && !column2.includes(x) && !column3.includes(x) && !column4.includes(x)) {
        for (let i = 0; i < num; i++) {
          const q = i * 10;
          randomArray.push(y + q);
        }
      // eslint-disable-next-line max-len
      } else if (num === 4 && !column2.includes(x) && !column3.includes(x) && !column4.includes(x)) {
        for (let i = 0; i < num; i++) {
          const q = i * 10;
          randomArray.push(y + q);
        }
      } else if (num === 3 && !column3.includes(x) && !column4.includes(x)) {
        for (let i = 0; i < num; i++) {
          const q = i * 10;
          randomArray.push(y + q);
        }
      } else if (num === 2 && !column4.includes(x)) {
        for (let i = 0; i < num; i++) {
          const q = i * 10;
          randomArray.push(y + q);
        }
      } else {
        randomCoords(num);
      }
    }
    shipArray.push(randomArray);
    console.log(shipArray);
    return randomArray;
  };

  // make new ship using factorial function
  const carrier = ship('carrier', 5, '', false, randomCoords(5));
  const battleship = ship('battleship', 4, '', false, randomCoords(4));
  const destroyer = ship('destroyer', 3, '', false, randomCoords(3));
  const submarine = ship('submarine', 3, '', false, randomCoords(3));
  const patrolBoat = ship('patrol-boat', 2, '', false, randomCoords(2));

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

  // *
  const gameOver = () => {
    const winner = document.querySelector('.winner');
    const a = carrier.object.sunk;
    const b = battleship.object.sunk;
    const c = destroyer.object.sunk;
    const d = submarine.object.sunk;
    const e = patrolBoat.object.sunk;
    if (a === true && b === true && c === true && d === true && e === true) {
      winner.textContent = 'you lost';
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
    gameOver();
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
  playerOne.createGrid(1);
  const createPlayer = () => {
    setTimeout(() => {
      playerOne.placeShip('submarine', 1);
      playerOne.placeShip('carrier', 1);
      playerOne.placeShip('battleship', 1);
      playerOne.placeShip('patrol-boat', 1);
      playerOne.placeShip('destroyer', 1);
    }, 1000);
  };
  const computerOne = gameboard();
  computerOne.createGrid(2);
  const createComputer = () => {
    computerOne.placeShip('submarine');
    computerOne.placeShip('carrier');
    computerOne.placeShip('battleship');
    computerOne.placeShip('patrol-boat');
    computerOne.placeShip('destroyer');
  };

  const computerArray = [];
  for (let i = 0; i < 100; i++) {
    computerArray.push(i);
  }

  const hitPlayer = () => {
    const x = computerArray.splice(Math.floor(Math.random() * computerArray.length), 1);
    playerOne.receiveAttack(playerOne.gameArray[x], x, 1);
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
