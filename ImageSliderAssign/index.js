let fruitsList = ["images/apple.png", "images/kiwi.png", "images/mango.png",
    "images/orange.png", "images/pineapple.png"
]

let fruitImageEle=document.getElementById("fruitImage");
let number=document.getElementById("num");
let prevButton=document.getElementById("prevButton");
let nextButton=document.getElementById("nextButton");

let i=0;

if(i==0){
    prevButton.setAttribute("disabled",true)
}


function nextBtn(){
      
        prevButton.removeAttribute("disabled")
        i++;
        if(i==fruitsList.length-1){
            fruitImageEle.src=fruitsList[i];
            number.textContent=i;
            nextButton.setAttribute("disabled",true)
        }
        else{
            fruitImageEle.src=fruitsList[i];
            number.textContent=i;
        }
        
        
}

function prevBtn(){
    
    nextButton.removeAttribute("disabled");
    i--;
    if(i==0){
        fruitImageEle.src=fruitsList[i];
        number.textContent=i;
        prevButton.setAttribute("disabled",true)
    }
    else{
        fruitImageEle.src=fruitsList[i];
        number.textContent=i;
    }

   
   
   
}