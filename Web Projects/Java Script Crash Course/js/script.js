/*
function getAgeInDays(){
    let birthYear = prompt("In which Year you were born?");
    let days = calAge(birthYear);

    let h3 = document.getElementById("challenge-1__answer");
    h3.textContent = "You are " + days +" days old"; 
}

*/

function calAge(birthyear){
    return ( (2020 - birthyear) * 365 );
}


function getAgeInDays(){
    var birthYear = prompt("Enter your birth year:");
    var days = calAge(birthYear);

    h1 = document.createElement('h1');
    h1.setAttribute('id', 'ageInDays');

    var text = document.createTextNode("You are " + days +" days old");
    h1.appendChild(text);
    var insertHere = document.getElementById("challenge-1__answer");
    insertHere.appendChild(h1);
}

function removeContent(){
    document.getElementById("challenge-1__answer").textContent = "";
}

function generatePhoto(){
    var img = document.createElement("img");
    img.src = "img/mans.jfif";
    img.setAttribute('height', '100px');
    img.setAttribute('width', '100px');
    img.style = "margin: 1rem; box-shadow: 5px 6px 7px black; z-index: 20;";
    document.getElementById("challenge-2__cats").appendChild(img);
}

function removeAllPhotos(){
    document.getElementById("challenge-2__cats").textContent = "";
}

function resetRPS(){
    document.getElementById("challenge-3__choice-section").remove();
    div = document.createElement('div');
    div.setAttribute('id', 'challenge-3__choice-section');
    div.style = "order: -1;";
    document.getElementById("challenge-3").appendChild(div);
    makeImageElement("rock", "img/rock.jpg", "rock");
    makeImageElement("paper", "img/paper.jpg", "paper");
    makeImageElement("scissor", "img/scissor.jfif", "scissor");
}

function pickWinner(Myselection){
    var aiPickNo = Math.floor((Math.random() * 3) + 1);

    var aiRock =  document.getElementById("rock");
    var aiPaper = document.getElementById("paper");
    var aiScissor = document.getElementById("scissor");
    var elment = undefined;

    document.getElementById("rock").remove();
    document.getElementById("paper").remove();
    document.getElementById("scissor").remove();

    newElement = document.createElement('img');
    newElement.setAttribute('src', Myselection.src);
    newElement.setAttribute('height', '150px');
    newElement.setAttribute('width', '150px');
    newElement.style = "order: 2";
    document.getElementById("challenge-3__choice-section").appendChild(newElement);

    switch(aiPickNo){
        case 1:
            element = generateNewElement(aiRock.src);
        break;
    
        case 2:
            element = generateNewElement(aiPaper.src);
        break;

        case 3:
            element = generateNewElement(aiScissor.src);
        break;
    }

    if(Myselection.src == element.src){
        generateWiningText("Draw");
    }
    else if(Myselection.src == aiPaper.src && element.src == aiRock.src){
        generateWiningText("You Win");  
    }
    else if(Myselection.src == aiScissor.src && element.src == aiPaper.src){
        generateWiningText("You Win");
    }
    else if(Myselection.src == aiRock.src && element.src == aiScissor.src){
        generateWiningText("You Win");
    }
    else {
        generateWiningText("Computer Wins");
    }

}

function generateWiningText(passedString){
    h1 = document.createElement('h1');
    text = document.createTextNode(passedString);
    h1.appendChild(text);
    h1.style = "order: 1; font-size: 30px; margin-top: 50px;";
    document.getElementById("challenge-3__choice-section").appendChild(h1); 
}

function generateNewElement(passedSrc){
    var element = undefined;
    element = document.createElement('img');
    element.setAttribute('src', passedSrc);
    element.setAttribute('height', '150px');
    element.setAttribute('width', '150px');
    element.style = "order: -1";
    document.getElementById("challenge-3__choice-section").appendChild(element);
    return element;
}

function makeImageElement(id, src, alt){
    img = document.createElement('img');
    img.setAttribute('id', id);
    img.setAttribute('class', 'challenge-3__choice-section__photo');
    img.setAttribute('src', src);
    img.setAttribute('alt', alt);
    img.setAttribute('onClick', 'pickWinner(this)');
    document.getElementById("challenge-3__choice-section").appendChild(img);
}




function buttonColorChange(){
    var buttonsArr = document.getElementsByTagName("button");

    for(var i = 0 ; i < buttonsArr.length; i++){
        buttonsArr[i].removeAttribute();
        buttonArr[i].setAttribute('class','btn-danger');
    }
    console.log(buttonsArr);
}




