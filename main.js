// Global Variables: //

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
var playerOneSection = document.querySelector('#playerOneWins')
var playerTwoSection = document.querySelector('#playerTwoWins')
var resultMessage = document.querySelector('#resultMessageBox')



// Event Listeners: //
window.addEventListener('load', newGame)
gameBoard.addEventListener('click', gameClick)





function newGame() {
  var playerOne = new Player('☠️', 1);
  var playerTwo = new Player('🎃', 2);
  currentGame = new Game(playerOne, playerTwo);
  loadPlayerWins();
  updateScore();
}

function gameClick() {
  if (event.target.class = 'grid-piece') {
    if (currentGame.gameSpaces[event.target.id] === null) {
      if (currentGame.playerOneTurn) {
        currentGame.gameSpaces[event.target.id] = 1;
        currentGame.turnManager();
      } else {
        currentGame.gameSpaces[event.target.id] = 2;
        currentGame.turnManager();
      }
    }
    updateBoard();
    currentGame.checkForWin(1);
    currentGame.checkForWin(2);
    currentGame.checkForDraw();
    currentGame.determineWinner();
  }
}

function updateBoard() {
  if (currentGame.gameSpaces.topLeft) {
    if (currentGame.gameSpaces.topLeft === 1) {
      topLeft.innerText = currentGame.playerOne.token;
    } else if (currentGame.gameSpaces.topLeft === 2) {
      topLeft.innerText = currentGame.playerTwo.token;
    }
  } else {
    topLeft.innerText = ``
  }

  if (currentGame.gameSpaces.topCenter) {
    if (currentGame.gameSpaces.topCenter === 1) {
      topCenter.innerText = currentGame.playerOne.token;
    } else if (currentGame.gameSpaces.topCenter === 2) {
      topCenter.innerText = currentGame.playerTwo.token;
    }
  } else {
    topCenter.innerText = ``
  }

  if (currentGame.gameSpaces.topRight) {
    if (currentGame.gameSpaces.topRight === 1) {
      topRight.innerText = currentGame.playerOne.token;
    } else if (currentGame.gameSpaces.topRight === 2) {
      topRight.innerText = currentGame.playerTwo.token;
    }
  } else {
    topRight.innerText = ``
  }

  if (currentGame.gameSpaces.middleLeft) {
    if (currentGame.gameSpaces.middleLeft === 1) {
      middleLeft.innerText = currentGame.playerOne.token;
    } else if (currentGame.gameSpaces.middleLeft === 2) {
      middleLeft.innerText = currentGame.playerTwo.token;
    }
  } else {
    middleLeft.innerText = ``
  }

  if (currentGame.gameSpaces.middleCenter) {
    if (currentGame.gameSpaces.middleCenter === 1) {
      middleCenter.innerText = currentGame.playerOne.token;
    } else if (currentGame.gameSpaces.middleCenter === 2) {
      middleCenter.innerText = currentGame.playerTwo.token;
    }
  } else {
    middleCenter.innerText = ``
  }

  if (currentGame.gameSpaces.middleRight) {
    if (currentGame.gameSpaces.middleRight === 1) {
      middleRight.innerText = currentGame.playerOne.token;
    } else if (currentGame.gameSpaces.middleRight === 2) {
      middleRight.innerText = currentGame.playerTwo.token;
    }
  } else {
    middleRight.innerText = ``
  }

  if (currentGame.gameSpaces.bottomLeft) {
    if (currentGame.gameSpaces.bottomLeft === 1) {
      bottomLeft.innerText = currentGame.playerOne.token;
    } else if (currentGame.gameSpaces.bottomLeft === 2) {
      bottomLeft.innerText = currentGame.playerTwo.token;
    }
  } else {
    bottomLeft.innerText = ``
  }

  if (currentGame.gameSpaces.bottomCenter) {
    if (currentGame.gameSpaces.bottomCenter === 1) {
      bottomCenter.innerText = currentGame.playerOne.token;
    } else if (currentGame.gameSpaces.bottomCenter === 2) {
      bottomCenter.innerText = currentGame.playerTwo.token;
    }
  } else {
    bottomCenter.innerText = ``
  }

  if (currentGame.gameSpaces.bottomRight) {
    if (currentGame.gameSpaces.bottomRight === 1) {
      bottomRight.innerText = currentGame.playerOne.token;
    } else if (currentGame.gameSpaces.bottomRight === 2) {
      bottomRight.innerText = currentGame.playerTwo.token;
    }
  } else {
    bottomRight.innerText = ``
  }
}

function gameOver() {
  if (!currentGame.draw && currentGame.won === true) {
    updateScore();
    resultMessage.innerText = `${currentGame.winningToken}, you win. For now...`
    displayResults();
  } else if (currentGame.draw === true && !currentGame.won) {
    resultMessage.innerText = `It's a draw. The status of your souls remains TBD.`
    displayResults();
  }
  savePlayerWins();
}

function displayResults() {
  toggleBoard();
  setTimeout(wipeBoard, 4000);
  laughSound();
}

function wipeBoard() {
  currentGame.resetGameBoard();
  updateBoard();
  toggleBoard();
  resultMessage.innerHTML = ``;
}

function updateScore() {
  if (currentGame.playerOne.wins !== null) {
    playerOneSection.innerText = `${currentGame.playerOne.wins}`
  }
  if (currentGame.playerTwoWins !== null) {
    playerTwoSection.innerText = `${currentGame.playerTwo.wins}`
  }
}

function toggleBoard() {
  if (resultMessage.classList.contains('hidden')) {
    resultMessage.classList.remove('hidden');
    gameBoard.classList.add('hidden');
  } else {
    resultMessage.classList.add('hidden');
    gameBoard.classList.remove('hidden')
  }
}

function savePlayerWins() {
  currentGame.playerOne.saveWinsToStorage();
  currentGame.playerTwo.saveWinsToStorage();
}

function loadPlayerWins() {
  currentGame.playerOne.retrieveWinsFromStorage();
  currentGame.playerTwo.retrieveWinsFromStorage();
}

function laughSound() {
  var spookyLaugh = new Audio('spooky-laugh.mp3');
  var spookyWereWolf = new Audio('spooky-werewolf.mp3')
  if (currentGame.won === true) {
    spookyLaugh.play();
  }
  if (currentGame.draw === true) {
    spookyWereWolf.play();
  }
}
