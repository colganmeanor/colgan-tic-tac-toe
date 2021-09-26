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

function gameClick() {
  if (event.target.class = 'grid-piece') {
    if (currentGame.gameSpaces[event.target.id] === null) {
      if (currentGame.playerOneTurn) {
        currentGame.gameSpaces[event.target.id] = 1;
      } else {
        currentGame.gameSpaces[event.target.id] = 2;
      }
    }
    currentGame.checkForWin();
    currentGame.turnManager();
    updateBoard();
  }
}

// function updateBoard(){
//   if (currentGame.gameSpaces)
// }


// function updateBoard(event) {
//   if (currentGame.gameSpaces[event] !== null) {
//       if (currentGame.gameSpaces[event] === 1) {
//         gameBoard.childNodes[event].innerText = currentGame.playerOne.token;
//       } else if (currentGame.gameSpaces[event] === 2) {
//         gameBoard.childNodes[event].innerText = currentGame.playerTwo.token;
//       }
//     }
//   }


// updateBoard should check the object properties of currentGame.gameSpaces
// and should say if currentGame.gameSpaces

function updateBoard() {
  if (currentGame.gameSpaces.topLeft !== null) {
    if (currentGame.gameSpaces.topLeft === 1) {
      topLeft.innerText = currentGame.playerOne.token;
    } else if (currentGame.gameSpaces.topLeft === 2) {
      topLeft.innerText = currentGame.playerTwo.token;
    }
  }
  if (currentGame.gameSpaces.topCenter !== null) {
    if (currentGame.gameSpaces.topCenter === 1) {
      topCenter.innerText = currentGame.playerOne.token;
    } else if (currentGame.gameSpaces.topCenter === 2) {
      topCenter.innerText = currentGame.playerTwo.token;
    }
  }
  if (currentGame.gameSpaces.topRight !== null) {
    if (currentGame.gameSpaces.topRight === 1) {
      topRight.innerText = currentGame.playerOne.token;
    } else if (currentGame.gameSpaces.topRight === 2) {
      topRight.innerText = currentGame.playerTwo.token;
    }
  }
  if (currentGame.gameSpaces.middleLeft !== null) {
    if (currentGame.gameSpaces.middleLeft === 1) {
      middleLeft.innerText = currentGame.playerOne.token;
    } else if (currentGame.gameSpaces.middleLeft === 2) {
      middleLeft.innerText = currentGame.playerTwo.token;
    }
  }
  if (currentGame.gameSpaces.middleCenter !== null) {
    if (currentGame.gameSpaces.middleCenter === 1) {
      middleCenter.innerText = currentGame.playerOne.token;
    } else if (currentGame.gameSpaces.middleCenter === 2) {
      middleCenter.innerText = currentGame.playerTwo.token;
    }
  }
  if (currentGame.gameSpaces.middleRight !== null) {
    if (currentGame.gameSpaces.middleRight === 1) {
      middleRight.innerText = currentGame.playerOne.token;
    } else if (currentGame.gameSpaces.middleRight === 2) {
      middleRight.innerText = currentGame.playerTwo.token;
    }
  }
  if (currentGame.gameSpaces.bottomLeft !== null) {
    if (currentGame.gameSpaces.bottomLeft === 1) {
      bottomLeft.innerText = currentGame.playerOne.token;
    } else if (currentGame.gameSpaces.bottomLeft === 2) {
      bottomLeft.innerText = currentGame.playerTwo.token;
    }
  }
  if (currentGame.gameSpaces.bottomCenter !== null) {
    if (currentGame.gameSpaces.bottomCenter === 1) {
      bottomCenter.innerText = currentGame.playerOne.token;
    } else if (currentGame.gameSpaces.bottomCenter === 2) {
      bottomCenter.innerText = currentGame.playerTwo.token;
    }
  }
  if (currentGame.gameSpaces.bottomRight !== null) {
    if (currentGame.gameSpaces.bottomRight === 1) {
      bottomRight.innerText = currentGame.playerOne.token;
    } else if (currentGame.gameSpaces.bottomRight === 2) {
      bottomRight.innerText = currentGame.playerTwo.token;
    }
  }
}
//for updateBoard : when a user clicks on a specific place on the gameboard -
// the corresponding property in the game object is updated to 1 or 2, depending
// on which player performs the click.

// for updateBoard function - how does it know which box to update? something something
// event delegation







function gameOver() {
  gameBoard.innerHTML = `Congratulations ${currentGame.winner}!`
}
