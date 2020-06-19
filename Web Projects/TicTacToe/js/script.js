// Picking up Random Square

var squares = document.getElementsByClassName("board__square");
console.log(squares);
// Two Players O Ai and X Human
var aiBot = "X";
var human = "O";
var currentPlayer = aiBot;

// Game Board


var board = [['','',''],
             ['','',''],
             ['','','']];            

function placeSomeThing(myChoice){
    myChoice.textContent = currentPlayer;
    switchPlayer();
}

function startGame(){
    if(currentPlayer == aiBot){
        aiChoice  = squares[Math.floor(Math.random()*squares.length)]
        aiChoice.textContent = currentPlayer;
        switchPlayer();
    }
}

function switchPlayer(){
    if(currentPlayer == aiBot){
        currentPlayer = human;
    }
    else {
        currentPlayer = aiBot;
    }
}

/*
while gameIsNotFinised(){
    playerToTakeTurn();
    check(he won or not){
        gameEnds();
    }

    playerToTakeTurn();
}*/

function startGame(){
    for(let i = 0; i < players.length; i++){
        if(i % 2 == 0 ){

        }
    }
}