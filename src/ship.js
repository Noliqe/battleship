const ship = (shipName, shipLength, shipCoords) => {
  const object = {
    name: shipName,
    length: shipLength,
    coords: shipCoords,
    sunk: false,
    damage: [],
    color: '',
  };
  const isSunk = () => {
    if (object.length === object.damage.length) {
      object.sunk = true;
    }
  };
  const hit = (num) => {
    object.damage.push(num);
    isSunk();
  };

  return {
    object,
    isSunk,
    hit,
  };
};

export default ship;
