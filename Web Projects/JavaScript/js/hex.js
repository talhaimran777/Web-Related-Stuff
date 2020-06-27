alert("Hello From Hex");
let hexdigits = ['0','1','2','3','4','5','6','7','8','9',
'A','B','C','D','E','F'];

let starterString = "#";

let btn = document.querySelector(".btn");
btn.addEventListener("click", changeBackGround);

function changeBackGround(){
    for(let i = 0; i < 6; i++){
        let randNo = Math.floor(Math.random() * 15);
        let pickedHex = hexdigits[randNo];
        starterString += pickedHex;
    }
    
    document.body.style.backgroundColor = starterString;
    document.querySelector(".main-section__text-box--secondary").textContent = starterString;
    document.querySelector(".main-section__text-box--secondary").style.color = starterString;
    starterString = "#";
}



