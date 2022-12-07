function diceRoll() {
  return Math.floor((Math.random() * 6) + 1);
}
//Business Logic

function GameState() {
  this.score = [0,0];
  this.player = 0;
  this.turnScore = 0;
  this.diceResult = 0;
};

GameState.prototype.switchPlayers = function() {
  this.turnScore = 0;
  this.player += 1;
  this.player = this.player%2;
}

GameState.prototype.rollDice = function() {
  this.diceResult = diceRoll();
  if (this.diceResult <= 1) {
    this.switchPlayers();
  } else {
    this.turnScore += this.diceResult;
    if ((this.score[this.player] + this.turnScore) > 100) {
      return ("Winner " + this.player + "!");
    }
  }
}

GameState.prototype.hold = function() {
  this.score[this.player] += this.turnScore;
  this.switchPlayers();
}

//UI Logic

let gameState = new GameState();

function handleRoll(event) {
  event.preventDefault();
  gameState.rollDice();
  console.log(gameState.diceResult)
};

function handleHold() {
  gameState.hold();
  let scoreTotal = gameState.score;
  console.log(scoreTotal);
  console.log("this player" + this.player)
  if (this.player === 0){
    document.getElementById("player1Score").innerText= scoreTotal;
  } else if (this.player === 1){
    document.getElementById("player2Score").innerText= scoreTotal;
  }
};

window.addEventListener("load", function() {
  const newGameBtn = document.getElementsByClassName("new-game");
  const gameRulesBtn = document.getElementsByClassName("how-to");
  const closeBtn = document.getElementsByClassName("close-how");
  const rollBtn = document.getElementById("roll");
  const holdBtn = document.getElementById("hold");

  rollBtn.addEventListener("click", handleRoll);

  holdBtn.addEventListener("click", handleHold);
});  
