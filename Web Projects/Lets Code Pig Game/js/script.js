//alert("Pig Game");

// Global Variables
var scores = [0, 0];
var currentScore = 0;
var diceScore = undefined;
var currentPlayer = 0;

function rollDice(){

    for(let i = 1; i <=6; i++){
        var a = document.getElementById("display-dice--"+ i);
        a.style.display = "none";
    }

    if(currentPlayer == 0){
        diceScore = Math.floor(Math.random() * 6) + 1;
        if(diceScore == 1){
            currentScore = 0
            document.getElementById("display-dice--"+ diceScore).style.display = "block";
            document.getElementById("round-score--player-0").textContent = "";
            changePanel();
        }
        else {
            document.getElementById("display-dice--"+ diceScore).style.display = "block";
            currentScore += diceScore;
            document.getElementById("round-score--player-0").textContent = currentScore;
        }
    }
    else if(currentPlayer == 1) {
        diceScore = Math.floor(Math.random() * 6) + 1;
        if(diceScore == 1){
            currentScore = 0
            document.getElementById("display-dice--"+ diceScore).style.display = "block";
            document.getElementById("round-score--player-1").textContent = "";
            changePanel();
        }
        else {
            document.getElementById("display-dice--"+ diceScore).style.display = "block";
            currentScore += diceScore;
            document.getElementById("round-score--player-1").textContent = currentScore;
        }
    }
}

function lockScore(){
    scores[currentPlayer] += currentScore;
    currentScore = 0;
    console.log(scores[currentPlayer]);
    document.querySelector("#display-score--player-" +currentPlayer).textContent = scores[currentPlayer];
    document.getElementById("round-score--player-" +currentPlayer).textContent = "";
    changePanel();
}

function changePanel(){
    var x = document.querySelector(".player-" + currentPlayer + "-panel");
    x.removeAttribute("class");
    x.setAttribute("class", "player-" +currentPlayer+ "-panel");
    currentPlayer = changeCurrentPlayer();
    x = document.querySelector(".player-" + currentPlayer + "-panel");
    x.setAttribute("class", "player-" +currentPlayer+ "-panel active-panel");
}

function changeCurrentPlayer(){
    if(currentPlayer == 0){
        return 1;
    }
    return 0;
}


function resetGame(){
    for(let i = 1; i <=6; i++){
        var a = document.getElementById("display-dice--"+ i);
        a.style.display = "none";
    }
    document.getElementById("round-score--player-0").textContent = "";
    document.getElementById("round-score--player-1").textContent = "";
    document.querySelector("#display-score--player-0").textContent = "";
    document.querySelector("#display-score--player-1").textContent = "";
}