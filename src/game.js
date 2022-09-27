/* eslint-disable no-restricted-globals */
/* eslint-disable no-loop-func */
/* eslint-disable no-lone-blocks */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-plusplus */
import gameBoard from './gameboard';
import ship from './ship';
import player from './player';
import drag from './drag';

const game = () => {
  // start with placement ships
  const start = drag();
  start.createBoard();
  start.dragAbleShips();

  const checkArray = () => {
    console.log(start.placementArray);
    const playerBoard = gameBoard();
    const computerBoard = gameBoard();
    return {
      playerBoard,
      computerBoard,
    };
  };

  const startButton = document.querySelector('.startButton');
  startButton.addEventListener('click', checkArray);

  return {
    start,
  };
};

export default game;
