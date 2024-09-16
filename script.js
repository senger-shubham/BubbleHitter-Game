var timer=60;
var timeout=5;

var score=0;
var hit="";



function createbubble(){
    timeout=6;
    var clatter="";
for(var i=1;i<=180;i++){
    var RN=Math.floor(Math.random()*10);
   clatter+=` <div class="bubble">${RN}</div>`;
}

document.querySelector("#budy").innerHTML=clatter;
}
createbubble();


function runtimer(){
   let cleartime= setInterval(()=>{
        timeout--;
        document.querySelector("#timeout").textContent=timeout;
        if(timeout>0 && timer>0){
        timer--;
        document.querySelector("#timerval").textContent=timer;}
        else{
            clearInterval(cleartime);
            document.querySelector("#budy").innerHTML=`<h1>Game Over</h1> 
                  <br> <h2>score:-${score}`
            
            clatter=null;
        }
    },1000)
    
    
}
runtimer();


function hitval(){
   hit= Math.floor(Math.random()*10);
   document.querySelector("#hitter").textContent=hit;   
}
hitval();

function increasescore(){  
    score+=10;
    document.querySelector("#uscore").textContent=score;
}



document.querySelector("#budy").addEventListener('click', function(details){
   clicked= Number(details.target.textContent); 
    console.log(hit)
    console.log(clicked) 
    if(hit==clicked){
        increasescore();
        hitval();
        createbubble();
    }
})
