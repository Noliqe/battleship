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
  const playerOne = player();
  const computerOne = player();

  const removeStartScreen = () => {
    const startGrid = document.querySelector('.startGrid');
    const fleets = document.querySelector('.fleetContainer');
    startGrid.classList.add('hide');
    fleets.classList.add('hide');
  };

  const placement = () => {
    removeStartScreen();
    playerOne.play.shipCoordinates(start.placementArray[0][0], start.placementArray[0]);
    playerOne.play.shipCoordinates(start.placementArray[1][0], start.placementArray[1]);
    playerOne.play.shipCoordinates(start.placementArray[2][0], start.placementArray[2]);
    playerOne.play.shipCoordinates(start.placementArray[3][0], start.placementArray[3]);
    playerOne.play.shipCoordinates(start.placementArray[4][0], start.placementArray[4]);

    playerOne.play.createBoard(1);
    playerOne.play.placeShips();

    computerOne.play.createBoard(2);
    const gridBoard1 = document.querySelector('.gridBoard1');
    const gridBoard2 = document.querySelector('.gridBoard2');
    gridBoard1.classList.remove('hide');
    gridBoard2.classList.remove('hide');
    return {
      playerOne,
      computerOne,
    };
  };

  const startButton = document.querySelector('.startButton');
  startButton.addEventListener('click', placement);

  return {
    start,
  };
};

export default game;
