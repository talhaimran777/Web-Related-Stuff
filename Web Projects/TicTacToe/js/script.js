// Adding event listener to all the squares

for(let i = 1; i <= 9; i++ ){
    document.querySelector(".board__square--"+i).addEventListener("click", placeMove, {once: true});
}

// My Players

let human = "O";
let ai = "X";
let currentPlayer  = human;


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
            console.log("The Winner is " + currentPlayer);
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