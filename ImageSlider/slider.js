let imageEle=document.getElementById("image");
let imageArray=["Images/clover.png","Images/rose.png","Images/white_rose.png",
"Images/white.png",
"Images/yellow.png"];
c=0;
function next(){
     if(c<imageArray.length-1){
        c=c+1;
        imageEle.src=imageArray[c];    
    }
    else{
        c=0;
        imageEle.src=imageArray[c]; 
    }
}
function previous(){
    if(c>0){
        c=c-1; 
        imageEle.src=imageArray[c];   
    }
    else{
        c=imageArray.length-1;
        imageEle.src=imageArray[c]; 
    }
}