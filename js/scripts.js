//Business Logic for ScoreBoard

function ScoreBoard (players){
  this.players = players;

};

//Business Logic for Player
function Player (playerID, totalScore, turnScore) {
 this.playerID = playerID;
 this.totalScore = totalScore;
 this.turnScore = 0;
}


function rollDice() {
  min = Math.ceil(1);
  max = Math.floor(7);
  const roll = Math.floor(Math.random() * (max-min) + (min));
  return roll;
}


Player.prototype.rollTotal = function(roll) { 
  if (roll === 1) {
    return this.turnScore = 0;

  } else {
    return this.turnScore += roll;
  } 
}
  

  