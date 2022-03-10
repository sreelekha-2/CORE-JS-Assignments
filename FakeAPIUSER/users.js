
let userBtn=document.getElementById("getUserBtn")
let detailsContainer=document.getElementById("details")

const url="https://jsonplaceholder.typicode.com/users";
fetch(url)
.then(res=>res.json())
.then(data=>{
    users=data
})
.catch(err=>{
    console.log(err)
})

function createAndAppendUserDetails(user){

    let {id,name,email,username,phone,website}=user


    let row1=document.createElement("tr");
    tableEle.appendChild(row1);

    let td1=document.createElement("td");
    td1.classList.add("tdata")
    td1.textContent=id;

    let td2=document.createElement("td");
    td2.classList.add("tdata")
    td2.textContent=name;
    
    let td3=document.createElement("td");
    td3.classList.add("tdata")
    td3.textContent=email;

    let td4=document.createElement("td");
    td4.classList.add("tdata")
    td4.textContent=username;

    let td5=document.createElement("td");
    td5.classList.add("tdata")
    td5.textContent=phone;

    let td6=document.createElement("td");
    td6.classList.add("tdata")
    td6.textContent=website;
    
    row1.append(td1,td2,td3,td4,td5,td6)
}

let thead=["S.No","Name","Email","Username","Phone","Website"]

function displayUsers(users){

    //creating table

    tableEle=document.createElement("table")
    tableEle.classList.add("table")
    detailsContainer.appendChild(tableEle)

    //creating row for th

    tr1=document.createElement("tr")
    tableEle.appendChild(tr1)

    //creating th
    
    for(let head of thead){
        let th=document.createElement("th")
        th.textContent=head;
        th.classList.add("thead")
        tr1.appendChild(th)
    }

    for(let user of users){
        createAndAppendUserDetails(user)
    }
}

userBtn.onclick=function(){
    
    displayUsers(users)
}