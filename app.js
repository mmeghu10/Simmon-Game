let gameSeq = [];
let userSeq = [];


let btns = ["red", "yellow", "green", "blue"];
let started = false;
let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function(){
 if (started == false) {
    console.log("Game is started");
    started = true;

    levelUp();
 }
});

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}

function userFlash(btn){
    btn.classList.add("userFlash");
    setTimeout(function(){
        btn.classList.remove("userFlash");
    },250);
}


function levelUp(){
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;

    let randomIdx = Math.floor(Math.random() * 3 );
    let randomCol = btns[randomIdx];
    let randomBtn = document.querySelector(`.${randomCol}`)
    gameSeq.push(randomCol);
    console.log(gameSeq);
    gameFlash(randomBtn);
}

function reset(){
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0; 
}
function checkBtn(idx){
    // console.log("curr level:", level);
    
    if(userSeq[idx] === gameSeq[idx]){
        if (userSeq.length === gameSeq.length) {
            setTimeout(levelUp, 1000);
        }
    }else{
        h2.innerHTML = `Game Over! Your score is ${level}</b> <br> Press any key`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "beige";
        },150);
        reset();
    }
}

function btnPress(){
   let btn = this;
   userFlash(btn);

   userColor = btn.getAttribute("id");
   userSeq.push(userColor);

   checkBtn(userSeq.length-1);
}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
   btn.addEventListener("click", btnPress);

}