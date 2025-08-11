var timer  = 60;
var score = 0;
var hitrhys = 0;

function makeBubble(){

    var harrypotter = "";

for(var i=1; i<=119; i++){
    var hermoine = Math.floor(Math.random()*10)
    harrypotter  +=`<div class="bubble">${hermoine}</div>`;
}

 document.querySelector("#pnbt").innerHTML = harrypotter;
}

function runTimer(){
    var timerint = setInterval(function (){
   if(timer>0){
    timer--;
    document.querySelector("#timerval").textContent= timer;
   } else{
    clearInterval(timerint);
    document.querySelector("#pnbt").innerHTML = `<h1>GAME OVER!</h1>`;
   }
  }, 1000);
 }

function getNewHit(){
    hitrhys = Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent = hitrhys;
}

function increaseScore(){
    score += 10;
    document.querySelector("#scoreval").textContent = score;
}

document.querySelector("#pnbt").addEventListener("click",
function(details){
    var clickednum = Number(details.target.textContent);
    if(clickednum === hitrhys){
        increaseScore();
        makeBubble();
        getNewHit();
    }
});


getNewHit();
runTimer();
makeBubble();



