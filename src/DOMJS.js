/* eslint-disable no-plusplus */
const dom = () => {
  const gridContainer = document.querySelector('.gridContainer');
  const fleetContainer = document.createElement('div');
  fleetContainer.classList.add('fleetContainer');

  const h1Text = document.createElement('h1');
  h1Text.textContent = 'Drag n\' Drop';
  fleetContainer.appendChild(h1Text);

  const rotateButton = document.createElement('button');
  rotateButton.classList.add('rotateButton');
  rotateButton.textContent = 'Rotate';
  fleetContainer.appendChild(rotateButton);

  gridContainer.appendChild(fleetContainer);
  const dragAble = document.createElement('div');
  dragAble.classList.add('dragAbleFleets');
  fleetContainer.appendChild(dragAble);

  const startButton = document.createElement('button');
  startButton.classList.add('startButton');
  startButton.classList.add('hide');
  startButton.textContent = 'start';
  fleetContainer.appendChild(startButton);

  const carrierContainer = document.createElement('div');
  dragAble.appendChild(carrierContainer);
  carrierContainer.classList.add('ships');
  carrierContainer.classList.add('carrier-container');
  carrierContainer.setAttribute('id', 'carrier-container');
  carrierContainer.setAttribute('draggable', true);
  carrierContainer.setAttribute('data-ship', 'carrier');
  for (let i = 0; i < 5; i++) {
    const carrier = document.createElement('div');
    carrierContainer.appendChild(carrier);
    carrier.classList.add('carrier');
    carrier.setAttribute('data-index', i);
  }
  const battleshipContainer = document.createElement('div');
  dragAble.appendChild(battleshipContainer);
  battleshipContainer.classList.add('ships');
  battleshipContainer.classList.add('battleship-container');
  battleshipContainer.setAttribute('id', 'battleship-container');
  battleshipContainer.setAttribute('draggable', true);
  battleshipContainer.setAttribute('data-ship', 'battleship');
  for (let i = 0; i < 4; i++) {
    const battleship = document.createElement('div');
    battleshipContainer.appendChild(battleship);
    battleship.classList.add('battleship');
    battleship.setAttribute('data-index', i);
  }
  const submarineContainer = document.createElement('div');
  dragAble.appendChild(submarineContainer);
  submarineContainer.classList.add('ships');
  submarineContainer.classList.add('submarine-container');
  submarineContainer.setAttribute('id', 'submarine-container');
  submarineContainer.setAttribute('draggable', true);
  submarineContainer.setAttribute('data-ship', 'submarine');
  for (let i = 0; i < 3; i++) {
    const submarine = document.createElement('div');
    submarineContainer.appendChild(submarine);
    submarine.classList.add('submarine');
    submarine.setAttribute('data-index', i);
  }
  const destroyerContainer = document.createElement('div');
  dragAble.appendChild(destroyerContainer);
  destroyerContainer.classList.add('ships');
  destroyerContainer.classList.add('destroyer-container');
  destroyerContainer.setAttribute('id', 'destroyer-container');
  destroyerContainer.setAttribute('draggable', true);
  destroyerContainer.setAttribute('data-ship', 'destroyer');
  for (let i = 0; i < 3; i++) {
    const destroyer = document.createElement('div');
    destroyerContainer.appendChild(destroyer);
    destroyer.classList.add('destroyer');
    destroyer.setAttribute('data-index', i);
  }
  const patrolBoatContainer = document.createElement('div');
  dragAble.appendChild(patrolBoatContainer);
  patrolBoatContainer.classList.add('ships');
  patrolBoatContainer.classList.add('patrolBoat-container');
  patrolBoatContainer.setAttribute('id', 'patrolBoat-container');
  patrolBoatContainer.setAttribute('draggable', true);
  patrolBoatContainer.setAttribute('data-ship', 'patrol-Boat');
  for (let i = 0; i < 2; i++) {
    const patrolBoat = document.createElement('div');
    patrolBoatContainer.appendChild(patrolBoat);
    patrolBoat.classList.add('patrol-boat');
    patrolBoat.setAttribute('data-index', i);
  }
};

export default dom;
