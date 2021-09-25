class Game {
  constructor(player1, player2) {
    this.playerOne = player1;
    this.playerTwo = player2;
    this.gameSpaces = {
      top1: null,
      top2: null,
      top3: null,
      middle1: null,
      middle2: null,
      middle3: null,
      bottom1: null,
      bottom2: null,
      bottom3: null,
    }
    this.playerOneTurn = true;
    this.winner = null;
  }

  // this method will have some complex logic that will be checking various combinations of
  // currentGame.gameSpaces to determine if a win has occured. If no win has occured then it will return
  // and exit the function.
  //this method will also need to have logic to determine if a draw has occured.

  checkForWin() {
    if (this.gameSpaces.top1 === 1 && this.gameSpaces.top2 === 1 && this.gameSpaces.top3 === 1) {
      console.log('player 1 just won')
    } else if (this.gameSpaces.middle1 === 1 && this.gameSpaces.middle2 === 1 && this.gameSpaces.middle3 === 1) {
      console.log('player 1 just won')
    } else if (this.gameSpaces.bottom1 === 1 && this.gameSpaces.bottom2 === 1 && this.gameSpaces.bottom3 === 1) {
      console.log('player 1 just won')
    } else if (this.gameSpaces.top1 === 1 && this.gameSpaces.middle2 === 1 && this.gameSpaces.bottom3 === 1) {
      console.log('player 1 just won')
    } else if (this.gameSpaces.top3 === 1 && this.gameSpaces.middle2 === 1 && this.gameSpaces.bottom1 === 1) {
      console.log('player 1 just won')
    } else if (this.gameSpaces.top1 === 1 && this.gameSpaces.middle1 === 1 && this.gameSpaces.bottom1 === 1) {
      console.log('player 1 just won')
    } else if (this.gameSpaces.top2 === 1 && this.gameSpaces.middle2 === 1 && this.gameSpaces.bottom2 === 1) {
      console.log('player 1 just won')
    } else if (this.gameSpaces.top3 === 1 && this.gameSpaces.middle3 === 1 && this.gameSpaces.bottom3 === 1) {
      console.log('player 1 just won')
    }


    if (this.gameSpaces.top1 === 2 && this.gameSpaces.top2 === 2 && this.gameSpaces.top3 === 2) {
      console.log('player 2 just won')
    } else if (this.gameSpaces.middle1 === 2 && this.gameSpaces.middle2 === 2 && this.gameSpaces.middle3 === 2) {
      console.log('player 2 just won')
    } else if (this.gameSpaces.bottom1 === 2 && this.gameSpaces.bottom2 === 2 && this.gameSpaces.bottom3 === 2) {
      console.log('player 2 just won')
    } else if (this.gameSpaces.top1 === 2 && this.gameSpaces.middle2 === 2 && this.gameSpaces.bottom3 === 2) {
      console.log('player 2 just won')
    } else if (this.gameSpaces.top3 === 2 && this.gameSpaces.middle2 === 2 && this.gameSpaces.bottom1 === 2) {
      console.log('player 2 just won')
    } else if (this.gameSpaces.top1 === 2 && this.gameSpaces.middle1 === 2 && this.gameSpaces.bottom1 === 2) {
      console.log('player 2 just won')
    } else if (this.gameSpaces.top2 === 2 && this.gameSpaces.middle2 === 2 && this.gameSpaces.bottom2 === 2) {
      console.log('player 2 just won')
    } else if (this.gameSpaces.top3 === 2 && this.gameSpaces.middle3 === 2 && this.gameSpaces.bottom3 === 2) {
      console.log('player 2 just won')
    }

  }

  resetGameBoard() {
    // this method will simply reset all properties within currentGame.gameSpaces to null
  }

}


// player choice - could be a method, or a function somewhere that takes in an argument
// of event.target and updates the innerHTML or innerText to the emoji/token of the user who is selecting

// upon user click. update data model (update object property within game class/object) and THEN
// update DOM based on the updated value of the object property.
// update who's turn it is.
// check for wins or draws on each click (if win state is present - return playerX has won message)
// if no win or draw happens, then just return and exit out of the function
