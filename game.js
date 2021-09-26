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
    this.won = false;
    this.draw = false;
  }

  // this method will have some complex logic that will be checking various combinations of
  // currentGame.gameSpaces to determine if a win has occured. If no win has occured then it will return
  // and exit the function.
  //this method will also need to have logic to determine if a draw has occured.


  // for checkforWin - considering to output a boolean value. perhaps game object has a property called this.won, and the output
  // of checkForWin returns a true or false value to that property. coudl also help for logic handling of a draw.

  checkForWin(i) {
    if (this.gameSpaces.topLeft === i && this.gameSpaces.topCenter === i && this.gameSpaces.topRight === i) {
      this.won = true;
      return true;
    } else if (this.gameSpaces.middleLeft === i && this.gameSpaces.middleCenter === i && this.gameSpaces.middleRight === i) {
      this.won = true;
      return true;
    } else if (this.gameSpaces.bottomLeft === i && this.gameSpaces.bottomCenter === i && this.gameSpaces.bottomRight === i) {
      this.won = true;
      return true;
    } else if (this.gameSpaces.topLeft === i && this.gameSpaces.middleCenter === i && this.gameSpaces.bottomRight === i) {
      this.won = true;
      return true;
    } else if (this.gameSpaces.topRight === i && this.gameSpaces.middleCenter === i && this.gameSpaces.bottomLeft === i) {
      this.won = true;
      return true;
    } else if (this.gameSpaces.topLeft === i && this.gameSpaces.middleLeft === i && this.gameSpaces.bottomLeft === i) {
      this.won = true;
      return true;
    } else if (this.gameSpaces.topCenter === i && this.gameSpaces.middleCenter === i && this.gameSpaces.bottomCenter === i) {
      this.won = true;
      return true;
    } else if (this.gameSpaces.topRight === i && this.gameSpaces.middleRight === i && this.gameSpaces.bottomRight === i) {
      this.won = true;
      return true;
    } else {
      return false;
    }
  }

  checkForDraw() {
    if (this.gameSpaces.topLeft !== null && this.gameSpaces.topCenter !== null && this.gameSpaces.topRight !== null && this.gameSpaces.middleLeft !== null && this.gameSpaces.middleRight !== null && this.gameSpaces.bottomLeft !== null && this.gameSpaces.bottomCenter !== null && this.gameSpaces.bottomRight !== null) {
      if (this.checkForWin(1) === false && this.checkForWin(2) === false) {
        this.draw = true;
        return true;
      } else {
        return false;
      }
    }
  }

  resetGameBoard() {
    // this method will simply reset all properties within currentGame.gameSpaces to null
  }

  turnManager() {
    if (this.playerOneTurn === true) {
      this.playerOneTurn = false
    } else if (this.playerOneTurn === false) {
      this.playerOneTurn = true;
    }
  }
}
