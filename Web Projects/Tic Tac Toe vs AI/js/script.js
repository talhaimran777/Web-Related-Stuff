//alert("Hello");

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
            var a = document.querySelector(".board__square--"+i).classList.add("not-allowed");
            console.log(a);
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
            }, 500);
        }
        else{
            currentPlayer = p1;
            game.addClickButtonToEmptySquares();
        }
         
    }

    ob.checkWinner = function(currentPlayer){ 

    }
    return ob;
}

function AI(name, symbol){
    this.name = name;
    this.symbol = symbol;

    this.takeTurn = function(){
        console.log(this.name);
        //this.bio();
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
        game.switchPlayer();
        game.allowedBackgroundColor();
        allowed = true;
    }
}
function Player(name, symbol){
    this.name = name;
    this.symbol = symbol;

    this.takeTurn = function(e){
        if(allowed === true){
            var arrIndices = getIndicesOfMatchedBoardSpotWrtSquares(e.target.id);
            var ithRowIdx = arrIndices[0];
            var jthColIdx = arrIndices[1];
            placeSymbol(board, symbol, ithRowIdx, jthColIdx);
            allowed = false;
            game.notAllowedBackgroundColor();
        }
        
    }

    placeSymbol = function(board, symbol, i, j){
        board['map'][i][j] = symbol;
        board.render();
        game.switchPlayer();
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
let allowed = true;
game.addClickButtonToAllSquares(); 