var currentGame

// Query Selectors Here: //

var gameBoard = document.querySelector('#gameGrid')
var topLeft = document.querySelector('#topLeft')
var topCenter = document.querySelector('#topCenter')
var topRight = document.querySelector('#topRight')
var middleLeft = document.querySelector('#middleLeft')
var middleCenter = document.querySelector('#middleCenter')
var middleRight = document.querySelector('#middleRight')
var bottomLeft = document.querySelector('#bottomLeft')
var bottomCenter = document.querySelector('#bottomCenter')
var bottomRight = document.querySelector('#bottomRight')



// Event Listeners: //

// gameBoard.addEventListener('click', testFunction)
window.addEventListener('load', newGame)
// gameBoard.addEventListener('click', updateBoard)
topLeft.addEventListener('click', topLeftClick)
topCenter.addEventListener('click', topCenterClick)
topRight.addEventListener('click', topRightClick)
middleLeft.addEventListener('click', middleLeftClick)
middleCenter.addEventListener('click', middleCenterClick)
middleRight.addEventListener('click', middleRightClick)
bottomLeft.addEventListener('click', bottomLeftClick)
bottomCenter.addEventListener('click', bottomCenterClick)
bottomRight.addEventListener('click', bottomRightClick)


function testFunction() {
  console.log(event.target.innerText)
}

function newGame() {
  var playerOne = new Player('player1token', 1);
  var playerTwo = new Player('player2token', 2);
  currentGame = new Game(playerOne, playerTwo);
}


function updateBoard() {
  if (currentGame.playerOneTurn) {
    event.target.innerText = 'X';
    currentGame.playerOneTurn = false;
  } else {
    event.target.innerText = 'O';
    currentGame.playerOneTurn = true;
  }
}
//for updateBoard : when a user clicks on a specific place on the gameboard -
// the corresponding property in the game object is updated to 1 or 2, depending
// on which player performs the click.

// for updateBoard function - how does it know which box to update? something something
// event delegation

function topLeftClick() {
  if (currentGame.gameSpaces.top1 === null) {
    if (currentGame.playerOneTurn) {
      event.target.innerText = 'X';
      currentGame.playerOneTurn = false;
      currentGame.gameSpaces.top1 = 1;
      console.log(currentGame.gameSpaces.top1);
      currentGame.checkForWin();
    } else {
      event.target.innerText = 'O';
      currentGame.playerOneTurn = true;
      currentGame.gameSpaces.top1 = 2;
      console.log(currentGame.gameSpaces.top1);
      currentGame.checkForWin();
    }
  } else {
    return
  }
}

function topCenterClick() {
  if (currentGame.gameSpaces.top2 === null) {
    if (currentGame.playerOneTurn) {
      event.target.innerText = 'X';
      currentGame.playerOneTurn = false;
      currentGame.gameSpaces.top2 = 1;
      console.log(currentGame.gameSpaces.top2)
      currentGame.checkForWin()
    } else {
      event.target.innerText = 'O';
      currentGame.playerOneTurn = true;
      currentGame.gameSpaces.top2 = 2;
      console.log(currentGame.gameSpaces.top2);
      currentGame.checkForWin();
    }
  } else {
    return
  }
}

function topRightClick() {
  if (currentGame.gameSpaces.top3 === null) {
    if (currentGame.playerOneTurn) {
      event.target.innerText = 'X';
      currentGame.playerOneTurn = false;
      currentGame.gameSpaces.top3 = 1;
      console.log(currentGame.gameSpaces.top3)
      currentGame.checkForWin()
    } else {
      event.target.innerText = 'O';
      currentGame.playerOneTurn = true;
      currentGame.gameSpaces.top3 = 2;
      console.log(currentGame.gameSpaces.top3)
      currentGame.checkForWin()
    }
  } else {
    return
  }
}

function middleLeftClick() {
  if (currentGame.gameSpaces.middle1 === null) {
    if (currentGame.playerOneTurn) {
      event.target.innerText = 'X';
      currentGame.playerOneTurn = false;
      currentGame.gameSpaces.middle1 = 1;
      console.log(currentGame.gameSpaces.middle1);
      currentGame.checkForWin();
    } else {
      event.target.innerText = 'O';
      currentGame.playerOneTurn = true;
      currentGame.gameSpaces.middle1 = 2;
      console.log(currentGame.gameSpaces.middle1);
      currentGame.checkForWin();
    }
  } else {
    return
  }
}

function middleCenterClick() {
  if (currentGame.gameSpaces.middle2 === null) {
    if (currentGame.playerOneTurn) {
      event.target.innerText = 'X';
      currentGame.playerOneTurn = false;
      currentGame.gameSpaces.middle2 = 1;
      console.log(currentGame.gameSpaces.middle2);
      currentGame.checkForWin();
    } else {
      event.target.innerText = 'O';
      currentGame.playerOneTurn = true;
      currentGame.gameSpaces.middle2 = 2;
      console.log(currentGame.gameSpaces.middle2);
      currentGame.checkForWin();
    }
  } else {
    return
  }
}

function middleRightClick() {
  if (currentGame.gameSpaces.middle3 === null) {
    if (currentGame.playerOneTurn) {
      event.target.innerText = 'X';
      currentGame.playerOneTurn = false;
      currentGame.gameSpaces.middle3 = 1;
      console.log(currentGame.gameSpaces.middle3);
      currentGame.checkForWin();
    } else {
      event.target.innerText = 'O';
      currentGame.playerOneTurn = true;
      currentGame.gameSpaces.middle3 = 2;
      console.log(currentGame.gameSpaces.middle3);
      currentGame.checkForWin();
    }
  } else {
    return
  }
}

function bottomLeftClick() {
  if (currentGame.gameSpaces.bottom1 === null) {
    if (currentGame.playerOneTurn) {
      event.target.innerText = 'X';
      currentGame.playerOneTurn = false;
      currentGame.gameSpaces.bottom1 = 1;
      console.log(currentGame.gameSpaces.bottom1);
      currentGame.checkForWin();
    } else {
      event.target.innerText = 'O';
      currentGame.playerOneTurn = true;
      currentGame.gameSpaces.bottom1 = 2;
      console.log(currentGame.gameSpaces.bottom1);
      currentGame.checkForWin();
    }
  } else {
    return
  }
}

function bottomCenterClick() {
  if (currentGame.gameSpaces.bottom2 === null) {
    if (currentGame.playerOneTurn) {
      event.target.innerText = 'X';
      currentGame.playerOneTurn = false;
      currentGame.gameSpaces.bottom2 = 1;
      console.log(currentGame.gameSpaces.bottom2);
      currentGame.checkForWin();
    } else {
      event.target.innerText = 'O';
      currentGame.playerOneTurn = true;
      currentGame.gameSpaces.bottom2 = 2;
      console.log(currentGame.gameSpaces.bottom2);
      currentGame.checkForWin();
    }
  } else {
    return
  }
}

function bottomRightClick() {
  if (currentGame.gameSpaces.bottom3 === null) {
    if (currentGame.playerOneTurn) {
      event.target.innerText = 'X';
      currentGame.playerOneTurn = false;
      currentGame.gameSpaces.bottom3 = 1;
      console.log(currentGame.gameSpaces.bottom3);
      currentGame.checkForWin();
    } else {
      event.target.innerText = 'O';
      currentGame.playerOneTurn = true;
      currentGame.gameSpaces.bottom3 = 2;
      console.log(currentGame.gameSpaces.bottom3);
      currentGame.checkForWin();
    }
  } else {
    return
  }
}
