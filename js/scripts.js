//Business Logic for Game

let newGame = new Game ();

function Game (){
  this.players = {}; 
  this.currentPlayer = 0;
}

Game.prototype.addPlayer = function (player){
  this.players[player.id] = player;
}

function rollDice() {
  min = Math.ceil(1);
  max = Math.floor(7);
  const roll = Math.floor(Math.random() * (max-min) + (min));
  return roll;
}

Game.prototype.takeTurn = function(){
  let currentRole = rollDice();
  this.players[this.currentPlayer].rollTotal(currentRole);
};

Game.prototype.switchPlayer = function (){
  if (this.currentPlayer === 1){
     this.currentPlayer = 0;
  } else {
    this.currentPlayer = 1;
  }
 };

//Business Logic for Player
function Player (id) {
 this.totalScore = 0;
 this.turnScore = 0;
 this.id = id;
}

function rollTotal(roll) { 
  let rollResult
  if (roll === 1) {
    rollResult = 0;
  } else {
    rollResult = roll;
  } 
  return rollResult;
};

Player.prototype.addRoles = function (diceValue){
  if (diceValue !== 0){
    this.turnScore += diceValue;
  }else{
    this.turnScore = 0
  }
}

Player.prototype.hold = function() {
  this.totalScore += this.turnScore
  // return this.totalScore;
  this.turnScore = 0;
};

Player.prototype.checkWinner = function () {
  if (this.turnScore + this.totalScore >= 100){
    return true;
  }else {
    return false;
  }
};


  
function startGame(event){
  event.preventDefault();
  document.getElementById("new-game").setAttribute("class", "hidden");
  document.querySelector("div#game-display").removeAttribute("class");
  console.log("running startGame");

}

function handleRoll(){
  document.getElementById("sorry").setAttribute("class", "hidden");
  let diceRoll = rollDice();
  let rollValue = rollTotal(diceRoll);
  let player1 = new Player(1);
  let player2 = new Player(2);
  newGame.addPlayer(player1);
  newGame.addPlayer(player2);
  document.getElementById("dice-display").innerText = null;
  document.getElementById("dice-display").innerText = "Dice Value: " + rollValue;
  let playerId = newGame.currentPlayer;
  let player = newGame.players[];
  if (rollValue === 0) {
    newGame.switchPlayer()
    document.getElementById("sorry").removeAttribute("class");
  }else {
    player.addRoles(rollValue);
    console.log(player.turnScore)
    document.getElementById("turn-score-value").innerText = player.turnScore;
  }


}



window.addEventListener("load", function(){
  document.getElementById("new-game").addEventListener("click", startGame);
  document.getElementById("roll").addEventListener("click", handleRoll);
  //document.getElementById("hold").addEventListener("click", handleHold);
  

})

 