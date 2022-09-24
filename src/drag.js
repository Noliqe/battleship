/* eslint-disable no-use-before-define */
/* eslint-disable no-plusplus */
const drag = () => {
  // make a board where user can place ships
  const createBoard = () => {
    const startGrid = document.querySelector('.startGrid');
    let x = 0;
    let y = 1;
    let id = 0;
    for (let i = 0; i < 109; i++) {
      if (x < 10) {
        x += 1;
        id += 1;
        const startTile = document.createElement('div');
        startTile.classList.add('tile');
        startGrid.appendChild(startTile);
        startTile.setAttribute('id', `tile${id}`);
        startTile.setAttribute('data-y', `${y}`);
        startTile.setAttribute('data-x', `${x}`);
        startTile.addEventListener('dragenter', dragEnter);
        startTile.addEventListener('dragover', dragOver);
        startTile.addEventListener('dragleave', dragLeave);
        startTile.addEventListener('drop', drop);
      } else {
        x = 0;
        y += 1;
      }
    }
  };
  function dragStart(e) {
    e.dataTransfer.setData('text/plain', e.target.id);
    setTimeout(() => {
      e.target.classList.add('hide');
    }, 0);
  }

  function dragEnter(e) {
    e.preventDefault();
    e.target.classList.add('drag-over');
  }

  function dragOver(e) {
    e.preventDefault();
    e.target.classList.add('drag-over');
  }

  function dragLeave(e) {
    e.target.classList.remove('drag-over');
  }

  function drop(e) {
    e.target.classList.remove('drag-over');

    // get the draggable element
    const id = e.dataTransfer.getData('text/plain');
    const draggable = document.getElementById(id);

    // add it to the drop target
    e.target.appendChild(draggable);
    // add childnodes to new parent
    while (draggable.childNodes.length > 0) {
      e.target.appendChild(draggable.childNodes[0]);
    }
    // remove old parent
    e.target.removeChild(draggable);
    // if horizontal put scatter childNodes to next tile
    let a = 0;
    while (e.target.childNodes.length > 1) {
      a += 1;
      const x = e.target.id;
      const y = Number(x.match(/\d+/)[0]);
      const tile = document.getElementById(`tile${y + a}`);
      tile.appendChild(e.target.childNodes[0]);
    }

    // display the draggable element
    draggable.classList.remove('hide');
  }

  const dragAbleShips = () => {
    const gridContainer = document.querySelector('.gridContainer');
    const fleetContainer = document.createElement('div');
    fleetContainer.classList.add('fleetContainer');
    const h1Text = document.createElement('h1');
    h1Text.textContent = 'Drag your ships';
    fleetContainer.appendChild(h1Text);
    gridContainer.appendChild(fleetContainer);
    const dragAble = document.createElement('div');
    dragAble.classList.add('dragAbleFleets');
    fleetContainer.appendChild(dragAble);

    const shipCarrierContainer = document.createElement('div');
    dragAble.appendChild(shipCarrierContainer);
    shipCarrierContainer.classList.add('shipCarrierContainer');
    shipCarrierContainer.setAttribute('id', 'shipCarrierContainer');
    shipCarrierContainer.setAttribute('draggable', true);
    shipCarrierContainer.setAttribute('data-ship', 'carrier');
    shipCarrierContainer.addEventListener('dragstart', dragStart);
    for (let i = 0; i < 5; i++) {
      const carrier = document.createElement('div');
      shipCarrierContainer.appendChild(carrier);
      carrier.classList.add('carrier');
      carrier.setAttribute('data-index', i);
    }
    const shipBattleshipContainer = document.createElement('div');
    dragAble.appendChild(shipBattleshipContainer);
    shipBattleshipContainer.classList.add('shipBattleshipContainer');
    shipBattleshipContainer.setAttribute('id', 'shipBattleshipContainer');
    shipBattleshipContainer.setAttribute('draggable', true);
    shipBattleshipContainer.setAttribute('data-ship', 'battleship');
    shipBattleshipContainer.addEventListener('dragstart', dragStart);
    for (let i = 0; i < 4; i++) {
      const battleship = document.createElement('div');
      shipBattleshipContainer.appendChild(battleship);
      battleship.classList.add('battleship');
      battleship.setAttribute('data-index', i);
    }
    const shipSubmarineContainer = document.createElement('div');
    dragAble.appendChild(shipSubmarineContainer);
    shipSubmarineContainer.classList.add('shipSubmarineContainer');
    shipSubmarineContainer.setAttribute('id', 'shipSubmarineContainer');
    shipSubmarineContainer.setAttribute('draggable', true);
    shipSubmarineContainer.setAttribute('data-ship', 'submarine');
    shipSubmarineContainer.addEventListener('dragstart', dragStart);
    for (let i = 0; i < 3; i++) {
      const submarine = document.createElement('div');
      shipSubmarineContainer.appendChild(submarine);
      submarine.classList.add('submarine');
      submarine.setAttribute('data-index', i);
    }
    const shipDestroyerContainer = document.createElement('div');
    dragAble.appendChild(shipDestroyerContainer);
    shipDestroyerContainer.classList.add('shipDestroyerContainer');
    shipDestroyerContainer.setAttribute('id', 'shipDestroyerContainer');
    shipDestroyerContainer.setAttribute('draggable', true);
    shipDestroyerContainer.setAttribute('data-ship', 'destroyer');
    shipDestroyerContainer.addEventListener('dragstart', dragStart);
    for (let i = 0; i < 3; i++) {
      const destroyer = document.createElement('div');
      shipDestroyerContainer.appendChild(destroyer);
      destroyer.classList.add('destroyer');
      destroyer.setAttribute('data-index', i);
    }
    const shipPatrolBoatContainer = document.createElement('div');
    dragAble.appendChild(shipPatrolBoatContainer);
    shipPatrolBoatContainer.classList.add('shipPatrolBoatContainer');
    shipPatrolBoatContainer.setAttribute('id', 'shipPatrolBoatContainer');
    shipPatrolBoatContainer.setAttribute('draggable', true);
    shipPatrolBoatContainer.setAttribute('data-ship', 'patrol-Boat');
    shipPatrolBoatContainer.addEventListener('dragstart', dragStart);
    for (let i = 0; i < 2; i++) {
      const patrolBoat = document.createElement('div');
      shipPatrolBoatContainer.appendChild(patrolBoat);
      patrolBoat.classList.add('patrol-boat');
      patrolBoat.setAttribute('data-index', i);
    }
  };
  return {
    createBoard,
    dragAbleShips,
  };
};

export default drag;
