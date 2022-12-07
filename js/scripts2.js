function Game() {
  this.score = [0,0];
  this.player = 0;
  this.turnScore = 0;
  this.diceResult = 0
}

function diceRoll() {
  return Math.floor((Math.random() *6) +1);
}

Game.prototype.switchPlayers = function () {
  this.turnScore = 0
  this.player += 1;
  this.player = this.player%2;
}


Game.prototype.rollDice = function() {
  this.diceResult = diceRoll();
  if (this.diceResult === 1){
    this.switchPlayers();
  }else{
    this.turnScore += this.diceResult;
    if ((this.score[this.player] + this.turnScore) >= 100){
      return ("Winner" + this.player + "!");
    }
  }
}

Game.prototype.hold = funciton () {
  this.score[this.player] += this.turnScore;
  this.switchPlayers();
}