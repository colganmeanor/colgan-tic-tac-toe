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
    this.winningToken = null;
    this.won = false;
    this.draw = false;
  }



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

  determineWinner(){
    if (this.checkForWin(1) === true){
      this.winner = 'Player 1';
      this.playerOne.wins++;
      this.winningToken = this.playerOne.token;
    } else if (this.checkForWin(2) === true){
      this.winner = 'Player 2';
      this.playerTwo.wins++;
      this.winningToken = this.playerTwo.token;
    }
    gameOver();
  }


  turnManager() {
    if (this.playerOneTurn === true) {
      this.playerOneTurn = false
    } else if (this.playerOneTurn === false) {
      this.playerOneTurn = true;
    }
  }

  resetGameBoard() {
    this.gameSpaces.topLeft = null;
    this.gameSpaces.topCenter = null;
    this.gameSpaces.topRight = null;
    this.gameSpaces.middleLeft = null;
    this.gameSpaces.middleCenter = null;
    this.gameSpaces.middleRight = null;
    this.gameSpaces.bottomLeft = null;
    this.gameSpaces.bottomCenter = null;
    this.gameSpaces.bottomRight = null;
    this.won = false;
    this.draw = false;
    this.winner = null;
    this.winningToken = null;
    this.playerOneTurn = true;
  }

}
