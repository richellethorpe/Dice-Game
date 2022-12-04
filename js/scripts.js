//Business Logic for ScoreBoard

function ScoreBoard (playerId){
  this.playerId = playerId;

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
  let rollValue;
  if (roll === 1) {
    rollValue = 0;
    //this.turnScore =0
  } else {
   rollValue = roll;
  } 
  return this.turnScore += rollValue;
}
  

  