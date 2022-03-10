let numbers=document.querySelectorAll("[number]")
let operators=document.querySelectorAll("[operator]")
let prev=document.getElementById("prev")
let current=document.getElementById("current")
let equalsBtn=document.getElementById("equals")
let calContainer=document.getElementById("calContainer")

let operator;
let prevOperand="";
let currentOperand="";

historyContainer=document.createElement("table");
historyContainer.classList.add("table")
calContainer.appendChild(historyContainer)

row1=document.createElement("tr")
historyContainer.appendChild(row1)

let head1=document.createElement("th");
head1.textContent="Expression"
head1.classList.add("thead")

let head2=document.createElement("th");
head2.textContent="Result";
head2.classList.add("thead")
row1.append(head1,head2)

function appendNum(number){
    if(number === "." && currentOperand.includes(".")) return
    currentOperand+=number
    console.log(currentOperand)
}

function display(){
    current.textContent=currentOperand;
    if(operator!=null){
        prev.textContent=`${prevOperand} ${operator}`
    }
    else{
        prev.textContent="";
    }
}

function undo(){
    currentOperand=currentOperand.slice(0,-1);
    display();
}


function chooseOperation(operation){
    
    console.log(prevOperand)
    
    if(currentOperand === "") return

    if(prevOperand!=""){
        computation()
    }
 
    operator=operation;
    prevOperand=currentOperand;
    currentOperand="";
}

function computation(){

    let prevVal=parseFloat(prevOperand);
    let currentVal=parseFloat(currentOperand)
    console.log(prevVal);
    console.log(currentVal);
    if(isNaN(prevVal) || isNaN(currentVal)) return

    switch(operator){
               case "+":
                    result=prevVal + currentVal
                    break;
                 case "-":
                    result=prevVal - currentVal
                    break; 
                case "*":
                    result=prevVal * currentVal
                    break;
                case "÷":
                    result=prevVal / currentVal
                    break;  
                case "^":
                    result=prevVal**currentVal;
                    break;
                default:
                     return
             }

             let row2=document.createElement("tr");
             historyContainer.appendChild(row2)
         
             let td1=document.createElement("td");
             td1.textContent=prevVal+operator+currentVal;
             td1.classList.add("tdata")
         
             let td2=document.createElement("td");
             td2.textContent=result;
             td2.classList.add("tdata")
         
             row2.append(td1,td2)

             currentOperand=result;
             operator=undefined;
             prevOperand=""
             

}



equalsBtn.addEventListener("click",function(){
    computation();
    display();
})

clearBtn.addEventListener("click",()=>{
    prev.textContent="";
    current.textContent="";
    
})

numbers.forEach(button=>{
    button.addEventListener("click",()=>{
        appendNum(button.value)
        display()
    })
})

operators.forEach(button=>{
    button.addEventListener("click",()=>{
    chooseOperation(button.value)

    display();
   
        
    })
})