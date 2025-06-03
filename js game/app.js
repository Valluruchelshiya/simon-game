let gameseq=[];
let userseq=[];

let btns= ["red","green","blue","purple"];

let started=false;
let level=0;

let h2= document.querySelector("h2");

document.addEventListener("keypressed",function(){
    if(started==false){
        console.log("game started");
        started==true;
        levelUp();
    }

});
function btnFlash(btn) {
    setTimeout(function(){
        btn.classList.remove("flash");
    },1000);
}
function levelUp(){
    level++;
    h2.innerText= `Level ${level}`;

    let randomIdx = Math.floor(Math.random() *3);
    let randomColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    console.log(randIdx);
    console.log(randColor);
    console.log(randBtn);
btnFlash(randBtn);
}

