/* eslint-disable no-else-return */
/* eslint-disable for-direction */
/* eslint-disable no-plusplus */
const randomXY = () => {
  const randomArray = [];
  const xyArray = [];
  let x = 0;
  let y = 1;
  for (let i = 0; i < 109; i++) {
    if (x < 10) {
      x += 1;
      randomArray.push([x, y]);
    } else {
      x = 0;
      y += 1;
    }
  }
  // return num 1 or 2
  const horizon = () => {
    const num = Math.floor(Math.random() * 2) + 1;
    return num;
  };

  const getData = (length, name) => {
    const z = Math.floor(Math.random() * 100) + 1;
    const horizontal = horizon();
    let b = -1;
    let c = -1;
    let tempArray = [];
    for (let i = z; i < 100; i++) {
      b += 1;
      if (horizontal === 1) {
        tempArray.push(name);
        // add empty color for future automatic placement
        tempArray.push('emptyColor');
        // loop for ship length
        for (let e = 0; e < length; e++) {
          const xyMin = randomArray[z + b];
          const xy = randomArray[z + b + e];
          // xyMax to check if not out of bounds
          const xyMax = randomArray[z + b + (length - 1)];
          // if xy isnt already choosen, xyMax exist and length + xyMin is not greater than 10
          if (xy !== '' && xyMax !== undefined && length + xyMin[0] <= 11) {
            tempArray.push([xy[0], xy[1]]);
          }
        }
        // if temperary array equals the length of ship + name + empty color
        if (tempArray.length === (length + 2)) {
          xyArray.push(tempArray);
          for (let o = 0; o < length; o++) {
            // mark choosen spots
            randomArray[z + b + o] = '';
          }
          return;
        } else {
          // make tempArray empty so it can start anew in negative loop
          tempArray = [];
        }
      } if (horizontal === 2) {
        tempArray.push(name);
        // add empty color for future automatic placement
        tempArray.push('emptyColor');
        for (let e = 0; e < length; e++) {
          const e10 = e * 10;
          const xyMin = randomArray[z + b];
          const xy = randomArray[z + b + e10];
          // xyMax to check if not out of bounds
          const xyMax = randomArray[z + b + ((length - 1) * 10)];
          if (xy !== '' && xyMax !== undefined && length + xyMin[1] <= 11) {
            tempArray.push([xy[0], xy[1]]);
          }
        }
        if (tempArray.length === (length + 2)) {
          xyArray.push(tempArray);
          for (let o = 0; o < length; o++) {
            const o10 = o * 10;
            randomArray[z + b + o10] = '';
          }
          return;
        } else {
          tempArray = [];
        }
      }
    }
    for (let i = z; i >= 0; i--) {
      c += 1;
      if (horizontal === 1) {
        tempArray.push(name);
        // add empty color for future automatic placement
        tempArray.push('emptyColor');
        for (let e = 0; e < length; e++) {
          const xyMin = randomArray[z - c];
          const xy = randomArray[(z - c) + e];
          // xyMax to check if not out of bounds
          const xyMax = randomArray[(z - c) + (length - 1)];
          if (xy !== '' && xyMax !== undefined && length + xyMin[0] <= 11) {
            tempArray.push([xy[0], xy[1]]);
          }
        }
        if (tempArray.length === (length + 2)) {
          xyArray.push(tempArray);
          for (let o = 0; o < length; o++) {
            randomArray[(z - c) + o] = '';
          }
          return;
        } else {
          tempArray = [];
        }
      } if (horizontal === 2) {
        tempArray.push(name);
        // add empty color for future automatic placement
        tempArray.push('emptyColor');
        for (let e = 0; e < length; e++) {
          const e10 = e * 10;
          const xyMin = randomArray[(z - c)];
          const xy = randomArray[(z - c) + e10];
          // xyMax to check if not out of bounds
          const xyMax = randomArray[(z - c) + ((length - 1) * 10)];
          if (xy !== '' && xyMax !== undefined && length + xyMin[1] <= 11) {
            tempArray.push([xy[0], xy[1]]);
          }
        }
        if (tempArray.length === (length + 2)) {
          xyArray.push(tempArray);
          for (let o = 0; o < length; o++) {
            const o10 = o * 10;
            randomArray[(z - c) + o10] = '';
          }
          return;
        } else {
          tempArray = [];
        }
      }
    }
  };

  return {
    randomArray,
    xyArray,
    getData,
  };
};

export default randomXY;
