let player1=document.getElementById("player1");
let player2=document.getElementById("player2");
let result = document.getElementById("result");
let grids = document.getElementsByClassName("grid-item");
let turn = "player1";
let gameOver=false;
let winner=""

if(turn==="player1"){
    player1.classList.add("color");
    
}
for (let grid of grids) {
    
    grid.onclick = function () {
        if(gameOver==false){
            
            showSymbol(grid.id)
        }
        
    }
}


function showSymbol(id) {
    // if(document.getElementById(id).innerHTML===""){
    //     console.log("true")
    // }

    if (turn === "player1") {
        
            document.getElementById(id).innerHTML = "X";
            turn = "player2";
            player1.classList.remove("color");
            player2.classList.add("color")
        
        
       
    } else {
       
            document.getElementById(id).innerHTML = "O";
            turn = "player1";
            player2.classList.remove("color");
            player1.classList.add("color")
        
      
    }
   
    checkTie();
    checkWinner();
    
    
}



function restart(){
    c=0;
    for(let grid of grids){
        grid.innerHTML="";
        result.textContent="";
        turn="player1";
        player2.classList.remove("color");
        player1.classList.add("color")
        
        gameOver=false
    }
}



function checkWinner() {
   

    one = document.getElementById("grid-one").innerHTML;
    two = document.getElementById("grid-two").innerHTML;
    three = document.getElementById("grid-three").innerHTML;
    four = document.getElementById("grid-four").innerHTML;
    five = document.getElementById("grid-five").innerHTML;
    six = document.getElementById("grid-six").innerHTML;
    seven = document.getElementById("grid-seven").innerHTML;
    eight = document.getElementById("grid-eight").innerHTML;
    nine = document.getElementById("grid-nine").innerHTML;
  
   
     if (one === "X" && two === "X" && three == "X" || (one === "O" && two === "O" && three == "O")) {

        if (turn === "player2") {
            winner = "X"
            result.textContent = "Game over! X won";
            gameOver=true
            console.log(gameOver)
           
        } else {
            winner = "O"
            result.textContent = " Game over! O won";
            gameOver=true

        }

    } else if ((four === "X" && five === "X" && six === "X") || (four === "O" && five === "O" && six === "O")) {
        if (turn === "player2") {
            winner = "X"
            result.textContent = "Game over! X won";
            gameOver=true

        } else {
            winner = "O"
            result.textContent = "Game over! O won";
            gameOver=true
        }

    } else if ((seven === "X" && eight === "X" && nine === "X") || (seven === "O" && eight === "O" && nine ===
            "O")) {
        if (turn === "player2") {
            winner = "X"
            result.textContent = "Game over! X won"
            gameOver=true
        } else {
            winner = "O"
            result.textContent = "Game over! O won";
            gameOver=true
        }
    } else if ((one === "X" && four === "X" && seven === "X") || (one === "O" && four === "O" && seven === "O")) {
        if (turn === "player2") {
            winner = "X"
            result.textContent = "Game over! X won"
            gameOver=true
        } else {
            winner = "O"
            result.textContent = "Game over! O won"
            gameOver=true
        }
    } else if( (two === "X" && five === "X" && eight === "X") || (two === "O" && five === "O" && eight === "O")) {
        if (turn === "player2") {
            winner = "X"
            result.textContent = "Game over! X won"
            gameOver=true
        } else {
            winner = "O"
            result.textContent = "Game over! O won"
            gameOver=true
        }
    } else if ((three === "X" && six === "X" && nine === "X" )|| (three === "O" && six === "O" && nine === "O")) {
        if (turn === "player2") {
            winner = "X"
            result.textContent = "Game over! X won"
            gameOver=true
        } else {
            winner = "O"
            result.textContent = "Game over! O won"
            gameOver=true
        }
    } else if ((one === "X" && five === "X" && nine === "X") || (one === "O" && five === "O" && nine === "O")) {
        if (turn === "player2") {
            winner = "X"
            result.textContent = "Game over! X won"
            gameOver=true
        } else {
            winner = "O"
            result.textContent = "Game over! O won"
            gameOver=true
        }
    } else if ((three === "X" && five === "X" && seven === "X") || (three === "O" && five === "O" && seven ===
            "O")) {
        if (turn === "player2") {
            winner = "X"
            result.textContent = "Game over! X won"
            gameOver=true
        } else {
            winner = "O"
            result.textContent = "Game over! O won"
            gameOver=true
        }
    }





}
c=0;
function checkTie(){
//     let gridItems=document.querySelectorAll(".grid");
//     console.log(gridItems)
//    for(let item of gridItems){
//        console.log(item)
//        if(item.innerHTML!==""){
//            c=c+1;
//            console.log(c);
//        }
//    }
  c=c+1;
    if (c==9 && this.winner !== "O" && this.winner !== "X") {
    console.log("tie");
   console.log(c)
    gameOver=true;
    // winner="";
    result.textContent="Game over! It is tie"
}
}

