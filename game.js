class Game {
  constructor(player1, player2) {
    this.playerOne = player1;
    this.playerTwo = player2;
    this.gameSpaces = {
      topLeft: null,
      topCenter: null,
      topRight: null,
      middleLeft: null,
      middleCenter: null,
      middleRight: null,
      bottomLeft: null,
      bottomCenter: null,
      bottomRight: null,
    }
    this.playerOneTurn = true;
    this.winner = null;
  }

  // this method will have some complex logic that will be checking various combinations of
  // currentGame.gameSpaces to determine if a win has occured. If no win has occured then it will return
  // and exit the function.
  //this method will also need to have logic to determine if a draw has occured.

  checkForWin() {
    if (this.gameSpaces.topLeft === 1 && this.gameSpaces.topCenter === 1 && this.gameSpaces.topRight === 1) {
      this.playerOne.wins++;
      this.winner = 'Player 1!'
      gameOver();
    } else if (this.gameSpaces.middleLeft === 1 && this.gameSpaces.middleCenter === 1 && this.gameSpaces.middleRight === 1) {
      this.playerOne.wins++;
      this.winner = 'Player 1!'
      gameOver();
    } else if (this.gameSpaces.bottomLeft === 1 && this.gameSpaces.bottomCenter === 1 && this.gameSpaces.bottomRight === 1) {
      this.playerOne.wins++;
      this.winner = 'Player 1!'
      gameOver();
    } else if (this.gameSpaces.topLeft === 1 && this.gameSpaces.middleCenter === 1 && this.gameSpaces.bottomRight === 1) {
      this.playerOne.wins++;
      this.winner = 'Player 1!'
      gameOver();
    } else if (this.gameSpaces.topRight === 1 && this.gameSpaces.middleCenter === 1 && this.gameSpaces.bottomLeft === 1) {
      this.playerOne.wins++;
      this.winner = 'Player 1!'
      gameOver();
    } else if (this.gameSpaces.topLeft === 1 && this.gameSpaces.middleLeft === 1 && this.gameSpaces.bottomLeft === 1) {
      this.playerOne.wins++;
      this.winner = 'Player 1!'
      gameOver();
    } else if (this.gameSpaces.topCenter === 1 && this.gameSpaces.middleCenter === 1 && this.gameSpaces.bottomCenter === 1) {
      this.playerOne.wins++;
      this.winner = 'Player 1!'
      gameOver();
    } else if (this.gameSpaces.topRight === 1 && this.gameSpaces.middleRight === 1 && this.gameSpaces.bottomRight === 1) {
      this.playerOne.wins++;
      this.winner = 'Player 1!'
      gameOver();
    }


    if (this.gameSpaces.topLeft === 2 && this.gameSpaces.topCenter === 2 && this.gameSpaces.topRight === 2) {
      this.playerTwo.wins++;
      this.winner = 'Player 2!'
      gameOver();
    } else if (this.gameSpaces.middleLeft === 2 && this.gameSpaces.middleCenter === 2 && this.gameSpaces.middleRight === 2) {
      this.playerTwo.wins++;
      this.winner = 'Player 2!'
      gameOver();
    } else if (this.gameSpaces.bottomLeft === 2 && this.gameSpaces.bottomCenter === 2 && this.gameSpaces.bottomRight === 2) {
      this.playerTwo.wins++;
      this.winner = 'Player 2!'
      gameOver();
    } else if (this.gameSpaces.topLeft === 2 && this.gameSpaces.middleCenter === 2 && this.gameSpaces.bottomRight === 2) {
      this.playerTwo.wins++;
      this.winner = 'Player 2!'
      gameOver();
    } else if (this.gameSpaces.topRight === 2 && this.gameSpaces.middleCenter === 2 && this.gameSpaces.bottomLeft === 2) {
      this.playerTwo.wins++;
      this.winner = 'Player 2!'
      gameOver();
    } else if (this.gameSpaces.topLeft === 2 && this.gameSpaces.middleLeft === 2 && this.gameSpaces.bottomLeft === 2) {
      this.playerTwo.wins++;
      this.winner = 'Player 2!'
      gameOver();
    } else if (this.gameSpaces.topCenter === 2 && this.gameSpaces.middleCenter === 2 && this.gameSpaces.bottomCenter === 2) {
      this.playerTwo.wins++;
      this.winner = 'Player 2!'
      gameOver();
    } else if (this.gameSpaces.topRight === 2 && this.gameSpaces.middleRight === 2 && this.gameSpaces.bottomRight === 2) {
      this.playerTwo.wins++;
      this.winner = 'Player 2!'
      gameOver();
    }

  }

  resetGameBoard() {
    // this method will simply reset all properties within currentGame.gameSpaces to null
  }

  turnManager(){
    if (this.playerOneTurn === true){
      this.playerOneTurn = false
    } else if (this.playerOneTurn === false) {
      this.playerOneTurn = true;
    }
  }
}


// player choice - could be a method, or a function somewhere that takes in an argument
// of event.target and updates the innerHTML or innerText to the emoji/token of the user who is selecting

// upon user click. update data model (update object property within game class/object) and THEN
// update DOM based on the updated value of the object property.
// update who's turn it is.
// check for wins or draws on each click (if win state is present - return playerX has won message)
// if no win or draw happens, then just return and exit out of the function
