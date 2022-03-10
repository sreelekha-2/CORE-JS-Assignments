
let getPostBtn=document.getElementById("getBtn")

const url="https://jsonplaceholder.typicode.com/posts";

fetch(url)
.then(res=>res.json())
.then(data=>{
    results=data;   
})
.catch(err=>{
    console.log(err)
})

function createResult(result){

    let {title,body}=result;

    //create div element
    let divEle=document.createElement("div");
    document.body.appendChild(divEle)

    //create title element
    let titleEle=document.createElement("h3");
    titleEle.textContent=title
    divEle.appendChild(titleEle)

    //create description element
    let descEle=document.createElement("p");
    descEle.textContent=body;
    divEle.appendChild(descEle)

    //create hr element
    let hrEle=document.createElement("HR")
    divEle.appendChild(hrEle)
}

function display(results){
    for(let result of results){
        createResult(result)
    }
}

getPostBtn.onclick=function(){
    display(results)
}