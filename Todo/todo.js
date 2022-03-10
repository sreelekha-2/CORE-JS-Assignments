let inputEle=document.getElementById("input");
let listItemContainer=document.getElementById("listContainer");
let addButton=document.getElementById("addBtn");
let updateButton=document.getElementById("updateBtn");
updateButton.classList.add("update-btn");
todoItemCount=0;
todoList=[];
let editItemId;
let editLabelId;

updateButton.addEventListener("click",function(){
    document.getElementById(editLabelId).textContent=inputEle.value;
    inputEle.value="";
    updateButton.classList.remove("update-btn2");
    addButton.classList.remove("add-btn2");
   
})

function editItem(listItemId,labelId){
    let listItem=document.getElementById(listItemId);
    let labelEle=document.getElementById(labelId);
    console.log(listItem)
    inputEle.value=labelEle.textContent;
    editItemId=listItemId;
    editLabelId=labelId;
    addButton.classList.add("add-btn2");
    updateButton.classList.add("update-btn2");
}

function deleteTodoItem(listItemId){
    let listItem=document.getElementById(listItemId);
    listItemContainer.removeChild(listItem)
}


function createTodoItems(newTodo){

    let listItem=document.createElement("li");
    let listItemId="item"+newTodo.no;
    listItem.id=listItemId;
    listItem.classList.add("list-item");
    listItemContainer.appendChild(listItem);

    let labelContainer=document.createElement("div");
    labelContainer.classList.add("label-container")
    listItem.appendChild(labelContainer);

    let labelEle=document.createElement("label");
    let labelId="label"+newTodo.no;
    labelEle.id=labelId;
    labelEle.textContent=newTodo.text;
    labelContainer.appendChild(labelEle);
    
    let buttonsContainer=document.createElement("div");
    buttonsContainer.classList.add("button-container");
    labelContainer.appendChild(buttonsContainer)

    let editBtn=document.createElement("button");
    editBtn.textContent="Edit";

    editBtn.onclick=function(){
        editItem(listItemId,labelId);
    }

    let delBtn=document.createElement("button");
    delBtn.textContent="Delete";
    delBtn.onclick=function(){
        deleteTodoItem(listItemId)
    }

    buttonsContainer.append(editBtn,delBtn)
}




function addItem(){
    let inputValue=inputEle.value;
    todoItemCount+=1;
    let newTodo={
        text:inputValue,
        no:todoItemCount
    }
    console.log(inputValue);
    console.log(todoList)
    todoList.push(newTodo);
    if(!inputEle.value==""){
        createTodoItems(newTodo)
    }  
    
    inputEle.value="";
}

