

let userInput=document.getElementById("num");
let errorMsg=document.getElementById("errMsg");
let randomValue=Math.ceil(Math.random()*100);


function showMsg(){
    let inputValue=userInput.value;
    
    if(inputValue<randomValue){
        errorMsg.textContent="Too low!Try again";
        playBtn.classList.add("play-btn");
    }
    else if((inputValue>randomValue)){
        errorMsg.textContent="Too high!Try again";
        playBtn.classList.add("play-btn");
    }
    else if(inputValue==randomValue){
        userInput.value="";
        errorMsg.textContent="Congrats!You guessed right";
        playBtn.classList.remove("play-btn")
        
        playBtn.onclick=function(){
            randomValue=Math.ceil(Math.random()*100)
        }
    }
}