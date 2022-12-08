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
    playerTurn();
    return this.turnScore = 0;
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
  playerTurn();
}

//UI Logic

let gameState = new GameState();

function handleRoll(event) {
  event.preventDefault();
  document.getElementById("dice-value").innerText = null;
  document.querySelector("span#current-score").innerText = null;
  gameState.rollDice();
  console.log("dice result" + gameState.diceResult)
  console.log("roll total" + gameState.turnScore)
  const rollingTotal = gameState.turnScore;
  const diceAmount = gameState.diceResult;
  document.getElementById("dice-value").innerText = diceAmount;
  document.getElementById("current-score").innerText = rollingTotal;
  let scoreTotal1 = gameState.score[0];
  let scoreTotal2 = gameState.score[1];

  if (rollingTotal === 0) {
    if (gameState.player === 1){
      document.getElementById("score-p1").innerText= scoreTotal1;
      rollingTotal();
    } else if (gameState.player === 0){
      document.getElementById("score-p2").innerText= scoreTotal2;
    }
  }
  
};

function handleHold() {
  gameState.hold();
  document.querySelector("span#current-score").innerText = null;
  document.getElementById("dice-value").innerText = null;
  let scoreTotal1 = gameState.score[0];
  let scoreTotal2 = gameState.score[1];
  console.log("score Total: " + scoreTotal1);

  console.log("player object: " + gameState.player);
  if (gameState.player === 1){
    document.getElementById("score-p1").innerText= scoreTotal1;
  } else if (gameState.player === 0){
    document.getElementById("score-p2").innerText= scoreTotal2;
  }
};

function playerTurn(){
  if (gameState.player === 0){
    document.getElementById("player2id").removeAttribute("class", "highlight");
    document.getElementById("player1id").setAttribute("class", "highlight");
  } else if (gameState.player === 1){
    document.getElementById("player1id").removeAttribute("class", "highlight");
    document.getElementById("player2id").setAttribute("class", "highlight");
  }
}

window.addEventListener("load", function() {
  // const newGameBtn = document.getElementsByClassName("new-game");
  // const gameRulesBtn = document.getElementsByClassName("how-to");
  // const closeBtn = document.getElementsByClassName("close-how");
  const rollBtn = document.getElementById("roll");
  const holdBtn = document.getElementById("hold");

  rollBtn.addEventListener("click", handleRoll);

  holdBtn.addEventListener("click", handleHold);
});  
