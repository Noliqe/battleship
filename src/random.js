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
        // if temperary array equals the length of ship + name
        if (tempArray.length === (length + 1)) {
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
        if (tempArray.length === (length + 1)) {
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
        for (let e = 0; e < length; e++) {
          const xyMin = randomArray[z - c];
          const xy = randomArray[(z - c) + e];
          // xyMax to check if not out of bounds
          const xyMax = randomArray[(z - c) + (length - 1)];
          if (xy !== '' && xyMax !== undefined && length + xyMin[0] <= 11) {
            tempArray.push([xy[0], xy[1]]);
          }
        }
        if (tempArray.length === (length + 1)) {
          xyArray.push(tempArray);
          for (let o = 0; o < length; o++) {
            randomArray[(z - c) + o] = '';
          }
          return;
        } else {
          tempArray = [];
        }
        // const x0 = randomArray[z - c];
        // const x1 = randomArray[(z - c) + 1];
        // const x2 = randomArray[(z - c) + 2];
        // const x3 = randomArray[(z - c) + 3];
        // const x4 = randomArray[(z - c) + 4];
        // if (x0 !== '' && x1 !== '' && x2 !== '' && x3 !== '' && x4 !== '' && x4 !== undefined) {
        //   if (length + x0[0] <= 11) {
        //     tempArray.push(name);
        //     tempArray.push([x0[0], x0[1]]);
        //     tempArray.push([x1[0], x1[1]]);
        //     tempArray.push([x2[0], x2[1]]);
        //     tempArray.push([x3[0], x3[1]]);
        //     tempArray.push([x4[0], x4[1]]);
        //     xyArray.push(tempArray);
        //     randomArray[z - c] = '';
        //     randomArray[(z - c) + 1] = '';
        //     randomArray[(z - c) + 2] = '';
        //     randomArray[(z - c) + 3] = '';
        //     randomArray[(z - c) + 4] = '';
        //     return;
        //   }
        // }
      } if (horizontal === 2) {
        tempArray.push(name);
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
        if (tempArray.length === (length + 1)) {
          xyArray.push(tempArray);
          for (let o = 0; o < length; o++) {
            const o10 = o * 10;
            randomArray[(z - c) + o10] = '';
          }
          return;
        } else {
          tempArray = [];
        }
        // const x0 = randomArray[z - c];
        // const x1 = randomArray[(z - c) + 10];
        // const x2 = randomArray[(z - c) + 20];
        // const x3 = randomArray[(z - c) + 30];
        // const x4 = randomArray[(z - c) + 40];
        // if (x0 !== '' && x1 !== '' && x2 !== '' && x3 !== '' && x4 !== '' && x4 !== undefined) {
        //   if (length + x0[1] <= 11) {
        //     tempArray.push(name);
        //     tempArray.push([x0[0], x0[1]]);
        //     tempArray.push([x1[0], x1[1]]);
        //     tempArray.push([x2[0], x2[1]]);
        //     tempArray.push([x3[0], x3[1]]);
        //     tempArray.push([x4[0], x4[1]]);
        //     xyArray.push(tempArray);
        //     randomArray[z - c] = '';
        //     randomArray[(z - c) + 10] = '';
        //     randomArray[(z - c) + 20] = '';
        //     randomArray[(z - c) + 30] = '';
        //     randomArray[(z - c) + 40] = '';
        //     return;
        //   }
        // }
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
