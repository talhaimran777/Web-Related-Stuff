const canvas = document.querySelector("canvas");
let ctx = canvas.getContext("2d");


let scale = 2;
let rows  = Math.floor(canvas.height / scale);
let cols  = Math.floor(canvas.width / scale);

console.log("Rows And Cols = " + rows + "  " + cols);
/* const canvasWidth = canvas.width;
const canvasHeight = canvas.height;


console.log("Height = " + canvasHeight );
console.log("Width = " + canvasWidth ); */



/* ctx.beginPath();
ctx.lineWidth = 4;
ctx.strokeStyle = "white";
ctx.moveTo(canvas.width / 2 , 0);
ctx.lineTo(canvas.width / 2 , canvas.height);
ctx.stroke(); */


let Player = function(x, y){
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.dx = dx;
    this.dy = dy;
}

let ball = {
    x: Math.floor(canvas.width/2),
    y: Math.floor(canvas.height/2),
   // y: 0,
    size: 10,
    dx: 5,
    dy: 4,
    speed: scale,

    update: function(){
        ball.y -= ball.dy;
        ball.x -= ball.dx;
    },

    draw: function(){
        console.log("Drawing the ball");
        ctx.fillStyle = "white";
        ctx.beginPath();
        ctx.arc(this.x, this.y,this.size ,0, Math.PI*2, true);
        ctx.fill();
        console.log("Y position of circle = " + ball.y);
        console.log("X position of circle = " + ball.x);
    }
}

function clear(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function animateBall(){
    clear();
    drawDottedLine();
    ball.draw();
    ball.update();
    collisionDetection();
    //setInterval(animateBall, 500);
    requestAnimationFrame(animateBall);
}
function drawDottedLine(){
    for(let i = 0; i < 24; i++){
        ctx.beginPath();
        ctx.lineWidth = 4;
        ctx.strokeStyle = "white";
        ctx.moveTo(canvas.width / 2 , 0);
        ctx.lineTo(canvas.width / 2 , canvas.height);
        ctx.stroke();
    }
}

function collisionDetection(){
    //console.log("Checking For the COllisions");
    if(ball.y - ball.size - 7 <= 0){
        console.log("Wall Detected");
        ball.dy -= 1;
    }
    else if(ball.y + ball.size >= canvas.height){
        ball.dy *= -1;
    }
}

animateBall();

// This is initializing the game
(function(){
    drawDottedLine();
    console.log("Game Started");
}());