/* eslint-disable no-plusplus */
import gameBoard from './gameboard';

const player = () => {
  const play = gameBoard();

  const computerArray = [];
  for (let i = 0; i < 100; i++) {
    computerArray.push(i);
  }

  const hitPlayer = (gameArray) => {
    setTimeout(() => {
      const x = computerArray.splice(Math.floor(Math.random() * computerArray.length), 1);
      const y = Number(x) + 1;
      play.receiveAttack(gameArray[x], y, 1, gameArray);
    }, '500');
  };

  const hitComputer = (coords, num, x, gameArray) => {
    play.receiveAttack(coords, num, x, gameArray);
  };

  return {
    play,
    hitPlayer,
    computerArray,
    hitComputer,
  };
};

export default player;
