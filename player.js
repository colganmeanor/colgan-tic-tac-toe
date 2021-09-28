class Player {
  constructor(token, id) {
    this.token = token;
    this.id = id;
    this.wins = 0;
  }

  saveWinsToStorage() {
    var stringifiedPlayer = JSON.stringify(this)
    localStorage.setItem(`${this.id}`, stringifiedPlayer);
  }

  retrieveWinsFromStorage() {
    var retrievedPlayer = localStorage.getItem(`${this.id}`);
    var parsedPlayer = JSON.parse(retrievedPlayer);
    if (parsedPlayer) {
      this.wins = parsedPlayer.wins
    }
  }

}
