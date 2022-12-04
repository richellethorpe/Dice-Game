function ScoreBoard (playerId,){

};
function rollDice() {
  min =Math.ceil(1);
  max =Math.floor(7);
  const roll = Math.floor(Math.random() * (max-min) + (min));
  return roll;
}