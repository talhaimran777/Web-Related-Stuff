
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
    ob.winner = false;
    ob.allowed = true;
    ob.attempts = 0;

    ob.w1 = [ [0,0],[1,0],[2,0] ],
    ob.w2 = [ [0,1],[1,1],[2,1] ],
    ob.w3 = [ [0,2],[1,2],[2,2] ],
    
    // Checking rows
    ob.w4 = [ [0,0],[0,1],[0,2] ],
    ob.w5 = [ [1,0],[1,1],[1,2] ],
    ob.w6 = [ [2,0],[2,1],[2,2] ],
    
    
    // Checking Diagonals
    ob.w7 = [ [0,0],[1,1],[2,2] ],
    ob.w8 = [ [0,2],[1,1],[2,0] ]

    ob.check = function(w, board, currentPlayer){
        let spot1 = w[0];
        let spot2 = w[1];
        let spot3 = w[2];
        let i = 0;
        let j = 1;

        if( (board[  spot1[i]  ] [  spot1[j]   ] == currentPlayer) &&
            (board[  spot2[i]  ] [  spot2[j]   ] == currentPlayer) &&
            (board[  spot3[i]  ] [  spot3[j]   ] == currentPlayer) ){

                // Removing Click Button Event From The Squares
                this.removeClickButtonToAllSquares();
                let winningMessage = document.getElementById("winning-message-block");
                winningMessage.style.display = "block";
                var win = document.getElementById("winning-message");
                win.style.display = "block";
                win.textContent = "The winner is " +currentPlayer;
                document.querySelector(".btn--restart-game").addEventListener("click", this.restartGame, {once: true});
                game.winner = true;
            }
            else if(this.attempts >= 9 && this.winner == false){
                    this.removeClickButtonToAllSquares();
                    let winningMessage = document.getElementById("winning-message-block");
                    winningMessage.style.display = "block";
                    var win = document.getElementById("winning-message");
                    win.style.display = "block";
                    win.textContent = "Draw"
                    document.querySelector(".btn--restart-game").addEventListener("click", this.restartGame, {once: true});
                }
    },

    ob.checkWinner = function(board, currentPlayer){    
        // Checking For Rows
        this.check(this.w4 , board, currentPlayer);
        this.check(this.w5, board, currentPlayer);
        this.check(this.w6, board, currentPlayer);

        // this.Checking For Cols
        this.check(this.w1, board, currentPlayer);
        this.check(this.w2, board, currentPlayer);
        this.check(this.w3, board, currentPlayer);

        // this.Checking For Diagonals
        this.check(this.w7, board, currentPlayer);
        this.check(this.w8, board, currentPlayer);
    },

    ob.addClickButtonToAllSquares = function(){
        for(let i = 1; i <= 9; i++ ){
            document.querySelector(".board__square--"+i).addEventListener("click", p1.takeTurn, {once: true});
        } 
    }

    ob.addClickButtonToEmptySquares = function(){
        for(let i = 1; i <= 9; i++ ){
            if(document.querySelector(".board__square--"+i).textContent == ""){
                document.querySelector(".board__square--"+i).addEventListener("click", p1.takeTurn, {once: true});
            }
        }
    }

    ob.removeClickButtonToAllSquares = function(){
        for(let i = 1; i <= 9; i++ ){
            document.querySelector(".board__square--"+i).removeEventListener('click', p1.takeTurn);
        }
    }

    ob.notAllowedBackgroundColor = function(){
        for(let i = 1; i <= 9; i++ ){
            document.querySelector(".board__square--"+i).classList.add("not-allowed");
        }
    }

    ob.allowedBackgroundColor = function(){
        for(let i = 1; i <= 9; i++ ){
            if(document.querySelector(".board__square--"+i).textContent == ""){
                document.querySelector(".board__square--"+i).classList.remove("not-allowed");
            }
            
        }
    }
    ob.switchPlayer = function(){
        if(currentPlayer == p1){
            currentPlayer = p2;
            setTimeout(() => {
                p2.takeTurn();
            }, 200);
        }
        else{
            currentPlayer = p1;
            game.addClickButtonToEmptySquares();
        }
         
    },

    ob.removeXsAndOsFromTheSquares = function(){
        for(let i = 1; i <= 9; i++ ){
            document.querySelector(".board__square--"+i).textContent = "";
        }
    },

    ob.restartGame = function(){
        console.log("resatring the game");
        // Removing Already Played O's and X's From the Board
        board.map = [
            ['', '', ''],
            ['', '', ''],
            ['', '', '']
        ];

        // Removing Already O's and X's From the Squares
        ob.removeXsAndOsFromTheSquares();
        ob.allowedBackgroundColor();
        ob.addClickButtonToAllSquares();
        let winningMessage = document.getElementById("winning-message-block");
        winningMessage.style.display = "none";
        game.allowed = true;
        game.attempts = 0;
        game.winner = false;
        currentPlayer = p1;
    }
    return ob;
}

function AI(name, symbol){
    this.name = name;
    this.symbol = symbol;
    this.score = 0;

    this.takeTurn = function(){
       // console.log("Check Here = " + winner);
        this.pickRandomSquare();
    }

    this.pickRandomSquare = function(){
        var no = Math.floor(Math.random() * 9) + 1;
        var idxs = getIndicesOfMatchedBoardSpotWrtSquares(no.toString());
        var i = idxs[0];
        var j = idxs[1];

        var check = board.checkBoard(i, j);
        if(check == true){
            var freeSpotIdxs = board.getFreeSpot();
            this.placeSymbol(freeSpotIdxs[0], freeSpotIdxs[1]);
        }
        else{
            this.placeSymbol(i, j);
        }
       
    }

    this.placeSymbol = function(i, j){
        board['map'][i][j] = symbol;
        board.render();
        game.attempts++;
        game.checkWinner(board.map, symbol);
        game.switchPlayer();
        game.allowedBackgroundColor();
        game.allowed = true;
    }
}
function Player(name, symbol){
    this.name = name;
    this.symbol = symbol;
    this.score = 0;

    this.takeTurn = function(e){
        if(game.allowed === true){
            var arrIndices = getIndicesOfMatchedBoardSpotWrtSquares(e.target.id);
            var ithRowIdx = arrIndices[0];
            var jthColIdx = arrIndices[1];
            placeSymbol(board, symbol, ithRowIdx, jthColIdx);
            game.allowed = false;
            game.notAllowedBackgroundColor();
        }
        
    }

    placeSymbol = function(board, symbol, i, j){
        board['map'][i][j] = symbol;
        board.render();
        game.attempts++;
        game.checkWinner(board['map'] , symbol);
        if(game.winner === false ){
            console.log("Switching Player coz no winner right now");
            game.switchPlayer();
        }
        game.removeClickButtonToAllSquares();
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