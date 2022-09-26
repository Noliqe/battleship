/* eslint-disable max-len */
/* eslint-disable no-use-before-define */
/* eslint-disable no-plusplus */
import dom from './DOMJS';
import ship from './ship';

const drag = () => {
  let horizontal = true;
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
  // check if ship is in border
  const valid = (dataY, dataX, length) => {
    let trueOfFalse = '';
    if (horizontal === true) {
      // const tile = document.querySelector(`#${num}`);
      if (length + Number(dataX) > 11) {
        trueOfFalse = false;
      } else {
        trueOfFalse = true;
      }
    } else if (horizontal === false) {
      if (length + Number(dataY) > 11) {
        trueOfFalse = false;
      } else {
        trueOfFalse = true;
      }
    }
    return trueOfFalse;
  };

  // no ship placement on another ship
  // eslint-disable-next-line consistent-return
  const checkId = (id) => {
    const x = id.replace(/[^a-zA-Z]+/g, '');
    if (x === 'tile') {
      return true;
    }
  };

  let shipLength = '';

  function dragStart(e) {
    shipLength = e.srcElement.children.length;
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
    if (valid(e.target.dataset.y, e.target.dataset.x, shipLength) === false || checkId(e.target.id) !== true) {
      return;
    }

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
    if (horizontal === true) {
      let a = 0;
      while (e.target.childNodes.length > 1) {
        a += 1;
        const x = e.target.id;
        const y = Number(x.match(/\d+/)[0]);
        const tile = document.getElementById(`tile${y + a}`);
        tile.appendChild(e.target.childNodes[0]);
      }
    } else if (horizontal === false) {
      let a = 0;
      while (e.target.childNodes.length > 1) {
        a += 10;
        const x = e.target.id;
        const y = Number(x.match(/\d+/)[0]);
        const tile = document.getElementById(`tile${y + a}`);
        tile.appendChild(e.target.childNodes[0]);
      }
    }
    const x = e.target.id;
    const y = Number(x.match(/\d+/)[0]);
    const tile = document.getElementById(`tile${y}`);
    const dataY = Number(tile.dataset.y);
    console.log(dataY);
    const dataX = Number(tile.dataset.x);
    console.log(dataX);

    // display the draggable element
    draggable.classList.remove('hide');
  }

  const rotate = () => {
    const rotateShip = document.querySelectorAll('.ships');
    if (horizontal === true) {
      for (let i = 0; i < rotateShip.length; i++) {
        rotateShip[i].classList.add('vertical');
      }
      horizontal = false;
    } else if (horizontal === false) {
      for (let i = 0; i < rotateShip.length; i++) {
        rotateShip[i].classList.remove('vertical');
      }
      horizontal = true;
    }
  };

  const dragAbleShips = () => {
    dom();
    // carrier
    const carrierContainer = document.querySelector('.carrier-container');
    carrierContainer.addEventListener('dragstart', dragStart);
    // battleship
    const battleshipContainer = document.querySelector('.battleship-container');
    battleshipContainer.addEventListener('dragstart', dragStart);
    // submarine
    const submarineContainer = document.querySelector('.submarine-container');
    submarineContainer.addEventListener('dragstart', dragStart);
    // destroyer
    const destroyerContainer = document.querySelector('.destroyer-container');
    destroyerContainer.addEventListener('dragstart', dragStart);
    // patrol boat
    const patrolBoatContainer = document.querySelector('.patrolBoat-container');
    patrolBoatContainer.addEventListener('dragstart', dragStart);
    // rotate button
    const rotateButton = document.querySelector('.rotateButton');
    rotateButton.addEventListener('click', rotate);
  };
  return {
    createBoard,
    dragAbleShips,
  };
};

export default drag;
