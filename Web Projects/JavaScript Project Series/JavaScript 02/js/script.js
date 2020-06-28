//alert("Hellow");
var counter = 0;
var increaseBtn = document.querySelector(".hero-section__hero-text__btn--increase");
increaseBtn.addEventListener("click", increase);

var decreaseBtn = document.querySelector(".hero-section__hero-text__btn--decrease");
decreaseBtn.addEventListener("click", decrease);

var resetBtn = document.querySelector(".hero-section__hero-text__btn--reset");
resetBtn.addEventListener("click", reset);

function increase(){
    counter++;
    if(counter >= 1){
        var no = document.getElementById("no");
        no.style.color = "green";
        no.style.textShadow = "5px 6px 8px black";
    } else if(counter == 0){
        var no = document.getElementById("no");
        no.style.color = "white";
        no.style.textShadow = "5px 6px 8px black";
    }
    document.querySelector(".hero-section__hero-text--secondary").textContent = counter;
}


function decrease(){
    counter--;
    if(counter < 0){
        var no = document.getElementById("no");
        no.style.color = "red";
        no.style.textShadow = "5px 6px 8px black";
    }else if(counter == 0){
        var no = document.getElementById("no");
        no.style.color = "white";
        no.style.textShadow = "5px 6px 8px black";
    }
    document.querySelector(".hero-section__hero-text--secondary").textContent = counter;
}


function reset(){
    counter = 0;
    var no = document.getElementById("no");
    no.style.color = "white";
    no.textContent = counter;
}