var currentGame

// Query Selectors Here: //

var gameBoard = document.querySelector('#gameGrid')
var gamePieces = document.querySelectorAll('.grid-piece')
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
gameBoard.addEventListener('click', gameClick)





function newGame() {
  var playerOne = new Player('🎃', 1);
  var playerTwo = new Player('🦇', 2);
  currentGame = new Game(playerOne, playerTwo);
}

// function updateBoard(){
//
// }

function updateBoard() {
  if (currentGame.gameSpaces.top1 !== null) {
    if (currentGame.gameSpaces.top1 === 1) {
      topLeft.innerText = currentGame.playerOne.token;
    } else if (currentGame.gameSpaces.top1 === 2) {
      topLeft.innerText = currentGame.playerTwo.token;
    }
  }
  if (currentGame.gameSpaces.top2 !== null) {
    if (currentGame.gameSpaces.top2 === 1) {
      topCenter.innerText = currentGame.playerOne.token;
    } else if (currentGame.gameSpaces.top2 === 2) {
      topCenter.innerText = currentGame.playerTwo.token;
    }
  }
  if (currentGame.gameSpaces.top3 !== null) {
    if (currentGame.gameSpaces.top3 === 1) {
      topRight.innerText = currentGame.playerOne.token;
    } else if (currentGame.gameSpaces.top3 === 2) {
      topRight.innerText = currentGame.playerTwo.token;
    }
  }
  if (currentGame.gameSpaces.middle1 !== null) {
    if (currentGame.gameSpaces.middle1 === 1) {
      middleLeft.innerText = currentGame.playerOne.token;
    } else if (currentGame.gameSpaces.middle1 === 2) {
      middleLeft.innerText = currentGame.playerTwo.token;
    }
  }
  if (currentGame.gameSpaces.middle2 !== null) {
    if (currentGame.gameSpaces.middle2 === 1) {
      middleCenter.innerText = currentGame.playerOne.token;
    } else if (currentGame.gameSpaces.middle2 === 2) {
      middleCenter.innerText = currentGame.playerTwo.token;
    }
  }
  if (currentGame.gameSpaces.middle3 !== null) {
    if (currentGame.gameSpaces.middle3 === 1) {
      middleRight.innerText = currentGame.playerOne.token;
    } else if (currentGame.gameSpaces.middle3 === 2) {
      middleRight.innerText = currentGame.playerTwo.token;
    }
  }
  if (currentGame.gameSpaces.bottom1 !== null) {
    if (currentGame.gameSpaces.bottom1 === 1) {
      bottomLeft.innerText = currentGame.playerOne.token;
    } else if (currentGame.gameSpaces.bottom1 === 2) {
      bottomLeft.innerText = currentGame.playerTwo.token;
    }
  }
  if (currentGame.gameSpaces.bottom2 !== null) {
    if (currentGame.gameSpaces.bottom2 === 1) {
      bottomCenter.innerText = currentGame.playerOne.token;
    } else if (currentGame.gameSpaces.bottom2 === 2) {
      bottomCenter.innerText = currentGame.playerTwo.token;
    }
  }
  if (currentGame.gameSpaces.bottom3 !== null) {
    if (currentGame.gameSpaces.bottom3 === 1) {
      bottomRight.innerText = currentGame.playerOne.token;
    } else if (currentGame.gameSpaces.bottom3 === 2) {
      bottomRight.innerText = currentGame.playerTwo.token;
    }
  }
}
//for updateBoard : when a user clicks on a specific place on the gameboard -
// the corresponding property in the game object is updated to 1 or 2, depending
// on which player performs the click.

// for updateBoard function - how does it know which box to update? something something
// event delegation

function gameClick() {
  if (event.target.id === 'topLeft') {
    if (currentGame.playerOneTurn) {
      currentGame.gameSpaces.top1 = 1;
    } else {
      currentGame.gameSpaces.top1 = 2
    }
  }
  if (event.target.id === 'topCenter') {
    if (currentGame.playerOneTurn) {
      currentGame.gameSpaces.top2 = 1;
    } else {
      currentGame.gameSpaces.top2 = 2
    }
  }
  if (event.target.id === 'topRight') {
    if (currentGame.playerOneTurn) {
      currentGame.gameSpaces.top3 = 1;
    } else {
      currentGame.gameSpaces.top3 = 2
    }
  }
  if (event.target.id === 'middleLeft') {
    if (currentGame.playerOneTurn) {
      currentGame.gameSpaces.middle1 = 1;
    } else {
      currentGame.gameSpaces.middle1 = 2
    }
  }
  if (event.target.id === 'middleCenter') {
    if (currentGame.playerOneTurn) {
      currentGame.gameSpaces.middle2 = 1;
    } else {
      currentGame.gameSpaces.middle2 = 2
    }
  }
  if (event.target.id === 'middleRight') {
    if (currentGame.playerOneTurn) {
      currentGame.gameSpaces.middle3 = 1;
    } else {
      currentGame.gameSpaces.middle3 = 2
    }
  }
  if (event.target.id === 'bottomLeft') {
    if (currentGame.playerOneTurn) {
      currentGame.gameSpaces.bottom1 = 1;
    } else {
      currentGame.gameSpaces.bottom1 = 2
    }
  }
  if (event.target.id === 'bottomCenter') {
    if (currentGame.playerOneTurn) {
      currentGame.gameSpaces.bottom2 = 1;
    } else {
      currentGame.gameSpaces.bottom2 = 2
    }
  }
  if (event.target.id === 'bottomRight') {
    if (currentGame.playerOneTurn) {
      currentGame.gameSpaces.bottom3 = 1;
    } else {
      currentGame.gameSpaces.bottom3 = 2
    }
  }
  currentGame.checkForWin();
  updateBoard();
  if (currentGame.playerOneTurn){
    currentGame.playerOneTurn = false;
  } else if (!currentGame.playerOneTurn){
    currentGame.playerOneTurn = true;
  }
}



function gameOver() {
  gameBoard.innerHTML = `Congratulations ${currentGame.winner}!`
}
