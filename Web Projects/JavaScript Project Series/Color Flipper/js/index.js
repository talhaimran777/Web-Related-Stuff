let colors = ['green', 'blue', 'lightblue', 'yellow', 'purple', 'silver', 'brown', 'red'];
let btn = document.querySelector(".btn");
btn.addEventListener("click", changeBackGround);



function changeBackGround(){
    let randNo = Math.floor(Math.random() * 7);
    let color = colors[randNo];
    document.body.style.backgroundColor = color;
    document.querySelector(".main-section__text-box--secondary").textContent = color;
    document.querySelector(".main-section__text-box--secondary").style.color = color;
}