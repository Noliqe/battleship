/* eslint-disable no-plusplus */
// import './style.css';

const ship = (shipName, shipLength, damage, shipSunk) => {
  const shipArray = [];
  for (let i = 0; i < shipLength; i++) {
    shipArray.push(i);
  }
  const object = {
    name: shipName,
    length: shipLength,
    damaged: damage,
    sunk: shipSunk,
    array: shipArray,
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

module.exports = { ship };
