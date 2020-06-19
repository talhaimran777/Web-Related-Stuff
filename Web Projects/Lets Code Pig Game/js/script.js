//alert("Pig Game");
var scores = [0, 0];
var currentScore = 0;
var diceScore = undefined;

function rollDice(){
    diceScore = Math.floor(Math.random() * 6) + 1;
    currentScore += diceScore;
    var consoleIt = document.querySelector("#round-score--player-0");
    consoleIt.textContent = currentScore;
}