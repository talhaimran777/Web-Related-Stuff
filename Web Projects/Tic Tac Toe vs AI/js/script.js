/* function Person(name, age){
    this.name = name;
    this.age = age;

    this.bio = function(){
        anotherFunc(); 
    }

    anotherFunc = function(){
        console.log("Hello");
    }
} */


 let winner  = false;
 let board = {
    map: [
        ['', '', ''],
        ['', '', ''],
        ['', '', '']
    ], 

    render: function(){
        var position = 1;
        for(let i = 0; i < 3; i++){
            for(let j = 0; j < 3; j++){
                if(board['map'][i][j] == "" ){
                    document.querySelector(".board__square--"+position).textContent = this.map[i][j]; 
                }
                else{
                    document.querySelector(".board__square--"+position).textContent = this.map[i][j];
                    document.querySelector(".board__square--"+position).removeEventListener("click", p1.takeTurn);
                }     
                position++;
            }
        }
    },

    checkBoard: function(i, j){ // return true if spot filled
        return board['map'][i][j] == "" ? false : true;
    },

    getFreeSpot: function(){
        for(let i = 0; i < 3; i++){
            for(let j = 0; j < 3; j++){
                if(this.map[i][j] == ""){
                    return[i, j];
                }
            }
        }
    }
}

function Game(){
    ob = {};

    ob.addClickButtonToAllSquares = function(){
        for(let i = 1; i <= 9; i++ ){
            document.querySelector(".board__square--"+i).addEventListener("click", p1.takeTurn, {once: true});
        }
    }

    ob.switchPlayer = function(){
        if(currentPlayer == p1){
            currentPlayer = p2;
            console.log("!! Player Switched !!");
            p2.takeTurn();
        }
        else{
            currentPlayer = p1; 
        }
         
    }

    ob.checkWinner = function(currentPlayer){

    }
    return ob;
}

function AI(name, symbol){
    this.name = name;
    this.symbol = symbol;

    /* pickRandomSquare = function(){
        var no = Math.floor(Math.random() * 9) + 1;
        var arrIndices = getIndicesOfMatchedBoardSpotWrtSquares(no);
        var i = arrIndices[0];
        var j = arrIndices[1];
        board['map'][i][j] = this.symbol;
        board.render();
    } */

    this.takeTurn = function(){
        console.log(this.name);
        //this.bio();
        this.pickRandomSquare();
    }

    this.pickRandomSquare = function(){
        //console.log("!! Will be doing some random stuff here !!");
        var no = Math.floor(Math.random() * 9) + 1;
        //console.log("Random Square " + no);
        var idxs = getIndicesOfMatchedBoardSpotWrtSquares(no.toString());
        //console.log("Must be idices "+ idxs);
        var i = idxs[0];
        var j = idxs[1];

        var check = board.checkBoard(i, j);
        if(check == true){
            //console.log("spot Not available");
            var freeSpotIdxs = board.getFreeSpot();
            this.placeSymbol(freeSpotIdxs[0], freeSpotIdxs[1]);
        }
        else{
            //console.log("spot available");
            this.placeSymbol(i, j);
        }
       
    }

    this.placeSymbol = function(i, j){
        //console.log("!! Ai Will place through this function !!");
        board['map'][i][j] = symbol;
        board.render();
        game.switchPlayer();
    }
}
function Player(name, symbol){
    this.name = name;
    this.symbol = symbol;

    this.takeTurn = function(e){
        var arrIndices = getIndicesOfMatchedBoardSpotWrtSquares(e.target.id);
        var ithRowIdx = arrIndices[0];
        var jthColIdx = arrIndices[1];
        //console.log(e.target);
        placeSymbol(board, symbol, ithRowIdx, jthColIdx);
    }

    placeSymbol = function(board, symbol, i, j){
        board['map'][i][j] = symbol;
        board.render();
        game.switchPlayer();
    }
}

function getIndicesOfMatchedBoardSpotWrtSquares(squareNo){
    switch(squareNo){
        case "1":
            var idxs = [0,0];
            return idxs;
            break;
        case "2":
            var idxs = [0,1];
            return idxs;
            break; 
        case "3":
            var idxs = [0,2];
            return idxs;
            break;
        case "4":
            var idxs = [1,0];
            return idxs;
            break;
        case "5":
            var idxs = [1,1];
            return idxs;
            break; 
        case "6":
            var idxs = [1,2];
            return idxs;
            break;
        case "7":
            var idxs = [2,0];
            return idxs;
            break;
        case "8":
            var idxs = [2,1];
            return idxs; 
            break;         
        case "9":
            var idxs = [2,2];
            return idxs;                                         
            break;
        default:
            return "Please Give String as an argument to this function!!";
            break;   
    }
}


const p1 = new Player("Talha Imran", "X");
const p2 = new AI("Computer", "O");
const game = Game();
let currentPlayer = p1;
game.addClickButtonToAllSquares(); 



/* alert("vs AI");
// Adding event listener to all the squares
function addClickButtonToSquares(){
    for(let i = 1; i <= 9; i++ ){
        document.querySelector(".board__square--"+i).addEventListener("click", placeMove, {once: true});
    }
}

function removeXAndOFromTheSquares(){
    for(let i = 1; i <= 9; i++ ){
        document.querySelector(".board__square--"+i).textContent = "";
    }
}
addClickButtonToSquares();


// My Players

let human = "O";
let ai = "X";
let currentPlayer  = human;
let winner = false;
let attempts = 0;

// My Board
let board = [
    ['','',''],
    ['','',''],
    ['','',''],
]

// Winning Combos 8

// Checking Coloumns
w1 = [ [0,0],[1,0],[2,0] ];
w2 = [ [0,1],[1,1],[2,1] ];
w3 = [ [0,2],[1,2],[2,2] ];

// Checking rows
w4 = [ [0,0],[0,1],[0,2] ];
w5 = [ [1,0],[1,1],[1,2] ];
w6 = [ [2,0],[2,1],[2,2] ];


// Checking Diagonals
w7 = [ [0,0],[1,1],[2,2] ];
w8 = [ [0,2],[1,1],[2,0] ];

function check(w, board, currentPlayer){
    let spot1 = w[0];
    let spot2 = w[1];
    let spot3 = w[2];
    let i = 0;
    let j = 1;

    if( (board[  spot1[i]  ] [  spot1[j]   ] == currentPlayer) &&
        (board[  spot2[i]  ] [  spot2[j]   ] == currentPlayer) &&
        (board[  spot3[i]  ] [  spot3[j]   ] == currentPlayer) ){

            // Removing Click Button Event From The Squares
            for(let i = 1; i <= 9; i++ ){
                document.querySelector(".board__square--"+i).removeEventListener("click", placeMove);
            }
            let winningMessage = document.getElementById("winning-message-block");
            winningMessage.style.display = "block";
            var win = document.getElementById("winning-message");
            win.style.display = "block";
            winner = true;
            win.textContent = "The winner is " +currentPlayer;
    }
    else if(attempts >= 9 && winner == false){
            let winningMessage = document.getElementById("winning-message-block");
            winningMessage.style.display = "block";
            var win = document.getElementById("winning-message");
            win.style.display = "block";
            win.textContent = "Draw"
    }

}

function checkWinner(board, currentPlayer){

    // Checking For Rows
    check(w4, board, currentPlayer);
    check(w5, board, currentPlayer);
    check(w6, board, currentPlayer);

    // Checking For Cols
    check(w1, board, currentPlayer);
    check(w2, board, currentPlayer);
    check(w3, board, currentPlayer);

    // Checking For Diagonals
    check(w7, board, currentPlayer);
    check(w8, board, currentPlayer);
}
function getIndicesOfMatchedBoardSpotWrtSquares(squareNo){
    switch(squareNo){
        case "1":
            var idxs = [0,0];
            return idxs;
            break;
        case "2":
            var idxs = [0,1];
            return idxs;
            break; 
        case "3":
            var idxs = [0,2];
            return idxs;
            break;
        case "4":
            var idxs = [1,0];
            return idxs;
            break;
        case "5":
            var idxs = [1,1];
            return idxs;
            break; 
        case "6":
            var idxs = [1,2];
            return idxs;
            break;
        case "7":
            var idxs = [2,0];
            return idxs;
            break;
        case "8":
            var idxs = [2,1];
            return idxs; 
            break;         
        case "9":
            var idxs = [2,2];
            return idxs;                                         
            break;
    }
}
function placeMove(e){
    var arrIndices = getIndicesOfMatchedBoardSpotWrtSquares(e.target.id);
    var i = arrIndices[0];
    var j = arrIndices[1];
    board[i][j] = currentPlayer;
    attempts++;
    renderBoard();
    checkWinner(board, currentPlayer);
    switchPlayer();
}

function renderBoard(){
    var position = 1;
    for(let i = 0; i < 3; i++){
        for(let j = 0; j < 3; j++){
            document.querySelector(".board__square--"+position).textContent = board[i][j];
            position++;
        }
    }
}


function switchPlayer(){
    if(currentPlayer == ai){
        currentPlayer = human;
    }
    else {
        currentPlayer = ai;
    }
}


function restartGame(){
    // Removing Already Played O's and X's From the Board
    board = [
        ['','',''],
        ['','',''],
        ['','',''],
    ]

    // Removing Already O's and X's From the Squares
    removeXAndOFromTheSquares();

    // Adding Click Button Event To All Squares
    addClickButtonToSquares();

    let winningMessage = document.getElementById("winning-message-block");
    winningMessage.style.display = "none";

    // Setting Variables back to default
    currentPlayer  = human;
    winner = false;
    attempts = 0;
} */