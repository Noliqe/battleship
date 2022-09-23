/* eslint-disable no-plusplus */
const player = () => {
  const attack = (y, x, enemyboard) => {
    enemyboard.receiveAttack(y, x);
  };

  const attackArray = [];
  const computerAttack = (enemyboard) => {
    let y = 0;
    let x = 1;
    // loop 109 times, 9 times else
    for (let i = 0; i < 109; i++) {
      if (y < 10) {
        y += 1;
        attackArray.push(`${y}, ${x}`);
      } else {
        y = 1;
        x += 1;
      }
    }
    const z = [y, x];
    attackArray.push(z);
    // enemyboard.receiveAttack(y, x);
  };
  return {
    attack,
    attackArray,
    computerAttack,
  };
};

export default player;
