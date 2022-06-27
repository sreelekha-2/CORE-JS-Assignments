

let quotesList=["The purpose of our lives is to be happy","Life is what happens when you’re busy making other plans",
    "Get busy living or get busy dying","You only live once, but if you do it right, once is enough",
    "Many of life’s failures are people who did not realize how close they were to success when they gave up"]


let ele=document.getElementById("quoteEle");
let timer=document.getElementById("timer");
let errorMsg=document.getElementById("errMsg");
let text=document.getElementById("textArea");


function displayMsg(){
    if(text.value===ele.textContent){
        errorMsg.textContent="Great!You typed correctly";
        errorMsg.style.color="green";
    }
    else{
        errorMsg.textContent="Your time is over you typed wrongly";
        errorMsg.style.color="red";
    }
    
}

function changeTime(){
    countdown-=1;
    if(countdown<10){
        countdown="0"+countdown
    }
    timer.textContent="00:"+countdown;
    
    if(countdown==0){  
        clearInterval(interval)
        displayMsg()
    }
}


function getQuote(){
    errorMsg.textContent="";
    text.value="";
    countdown=30;
    ele.textContent=quotesList[Math.ceil(Math.random()*4)];
    interval=setInterval(changeTime,1000)
}

