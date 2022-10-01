/* eslint-disable no-restricted-globals */
/* eslint-disable no-loop-func */
/* eslint-disable no-lone-blocks */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-plusplus */
import gameBoard from './gameboard';
import ship from './ship';
import player from './player';
import drag from './drag';
import randomXY from './random';

const game = () => {
  // start with placement ships
  const start = drag();
  start.createBoard();
  start.dragAbleShips();
  const playerOne = player();
  const computerOne = player();
  const autoPlace = randomXY();

  const removeStartScreen = () => {
    const startGrid = document.querySelector('.startGrid');
    const fleets = document.querySelector('.fleetContainer');
    startGrid.classList.add('hide');
    fleets.classList.add('hide');
  };

  const eventListener = () => {
    for (let i = 0; i < 100; i++) {
      const square = document.getElementById(`square${i + 1}-board2`);
      square.addEventListener('click', () => {
        playerOne.hitComputer(computerOne.play.gameArray[i], i + 1, 2);
        playerOne.hitPlayer();
      });
    }
  };

  const placement = () => {
    // remove start grid
    removeStartScreen();
    // push coordinates to each ship
    playerOne.play.shipCoordinates(start.placementArray[0][0], start.placementArray[0]);
    playerOne.play.shipCoordinates(start.placementArray[1][0], start.placementArray[1]);
    playerOne.play.shipCoordinates(start.placementArray[2][0], start.placementArray[2]);
    playerOne.play.shipCoordinates(start.placementArray[3][0], start.placementArray[3]);
    playerOne.play.shipCoordinates(start.placementArray[4][0], start.placementArray[4]);

    playerOne.play.createBoard(1);
    // place ships on player board
    playerOne.play.placeShips(1);

    // generate random coordinates
    autoPlace.getData(5, 'carrier');
    autoPlace.getData(4, 'battleship');
    autoPlace.getData(3, 'destroyer');
    autoPlace.getData(3, 'submarine');
    autoPlace.getData(2, 'patrol-boat');
    // push coordinates to each ship
    computerOne.play.shipCoordinates(autoPlace.xyArray[0][0], autoPlace.xyArray[0]);
    computerOne.play.shipCoordinates(autoPlace.xyArray[1][0], autoPlace.xyArray[1]);
    computerOne.play.shipCoordinates(autoPlace.xyArray[2][0], autoPlace.xyArray[2]);
    computerOne.play.shipCoordinates(autoPlace.xyArray[3][0], autoPlace.xyArray[3]);
    computerOne.play.shipCoordinates(autoPlace.xyArray[4][0], autoPlace.xyArray[4]);

    computerOne.play.createBoard(2);
    // place ships on computer board
    computerOne.play.placeShips(2);

    // show board 1 and 2
    const gridBoard1 = document.querySelector('.gridBoard1');
    const gridBoard2 = document.querySelector('.gridBoard2');
    gridBoard1.classList.remove('hide');
    gridBoard2.classList.remove('hide');

    eventListener();
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
