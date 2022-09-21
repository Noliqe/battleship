/* eslint-disable no-plusplus */
// import './style.css';

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
  for (let i = 0; i < 100; i++) {
    gameArray.push('');
  }
  // make new ship using factorial function
  const carrier = ship('carrier', 5, '', false, [1, 2, 3, 4, 5]);
  const battleship = ship('battleship', 4, '', false, [6, 16, 26, 36]);
  const destroyer = ship('destroyer', 3, '', false, [90, 91, 92]);
  const submarine = ship('submarine', 3, '', false, [50, 60, 70]);
  const patrolBoat = ship('patrol-boat', 2, '', false, [39, 49]);

  // place ship in gameArray
  const placeShip = (shipName) => {
    if (shipName === 'carrier') {
      for (let i = 0; i < carrier.object.array.length; i++) {
        const index = carrier.object.array[i];
        gameArray[index] = carrier.object.name;
      }
    } else if (shipName === 'battleship') {
      for (let i = 0; i < battleship.object.array.length; i++) {
        const index = battleship.object.array[i];
        gameArray[index] = battleship.object.name;
      }
    } else if (shipName === 'destroyer') {
      for (let i = 0; i < destroyer.object.array.length; i++) {
        const index = destroyer.object.array[i];
        gameArray[index] = destroyer.object.name;
      }
    } else if (shipName === 'submarine') {
      for (let i = 0; i < submarine.object.array.length; i++) {
        const index = submarine.object.array[i];
        gameArray[index] = submarine.object.name;
      }
    } else if (shipName === 'patrol-boat') {
      for (let i = 0; i < patrolBoat.object.array.length; i++) {
        const index = patrolBoat.object.array[i];
        gameArray[index] = patrolBoat.object.name;
      }
    }
  };
  // when receiving attack, check wether hit or not
  const receiveAttack = (coords, num) => {
    if (coords === 'carrier') {
      carrier.hit(num);
    } else if (coords === 'battleship') {
      battleship.hit(num);
    } else if (coords === 'destroyer') {
      destroyer.hit(num);
    } else if (coords === 'submarine') {
      submarine.hit(num);
    } else if (coords === 'patrol-boat') {
      patrolBoat.hit(num);
    } else {
      // let num = txt.replace(/\D/g,'');
      gameArray[num] = 'x';
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

const player = (data, enemy) => {
  data = gameboard();

  const hitEnemy = (coords, num) => {
    enemy.gameboard.receiveAttack(coords, num);
  };

  return {
    data,
    hitEnemy,
  };
};

module.exports = { ship, gameboard };
