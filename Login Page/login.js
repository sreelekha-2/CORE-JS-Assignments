

let mailId=document.getElementById("mail");
let password=document.getElementById("pass");
let checkbox1=document.getElementById("cbox");
let submitBtn=document.getElementById("subBtn");


let errMsg1=document.getElementById("err1");
let errMsg2=document.getElementById("err2");
let errMsg3=document.getElementById("err3");

errMsg1.style.color="red";
errMsg2.style.color="red";
errMsg3.style.color="red";



function emailValidation(){

    errMsg1.textContent="";
    let str2=mailId.value.substring(mailId.value.indexOf("@")+1);
    if(mailId.value==""){
        errMsg1.textContent="this field is required*";
        return false;
    }
    else if(!mailId.value.includes("@") || str2==""){
        errMsg1.textContent="Please enter valid email id";
        return false;
    }
    else{
        return true;
    }
}

function passValidation(){
    errMsg2.textContent="";
    let regExp= new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,24})");
    if(password.value===""){
        errMsg2.textContent="this field is required*";
        return false;
    }
    else if(regExp.test(password.value)===false){
        errMsg2.textContent="password should have atleast one capital letter,small letter,digital,special character";
        return false;
    }
    else{
        return true;
    }
}



function checking(){
    errMsg3.textContent="";

    let result=objList.some(details=>details.email===mailId.value && details.password===password.value)
    if(result){
        return true
    }
    else{
        errMsg3.textContent="Email or Password is incorrect"
        return false;
    }
}

function remember(){
    let result2=objList.some(details=>details.email===mailId.value && details.password===password.value)
    if(checkbox1.checked && !mailId.value=="" && !password.value=="" && result2){
            storeObj={
            email:mailId.value,
            password:password.value
        }
       
    }
    else{
        storeObj={
            email:"",
            password:""
        } 
    }
}


function showDetails(){  
    localStorage.setItem("storeObj",JSON.stringify(storeObj));  
}


let storedDetails=localStorage.getItem("storeObj");
let parsedDetails=JSON.parse(storedDetails);
mailId.value=parsedDetails.email;
password.value=parsedDetails.password;


function validation(){
    let res1=emailValidation();
    let res2=passValidation();
    if(res1 && res2){
        res3=checking();    
    }
    return res1 && res2 && res3;
}

let objList=[
    {
        email:"sree@gmail.com",
        password:"Sree@1234"
    },
    {
        email:"sree123@gmail.com",
        password:"Lekha@12345"
    },
    {
        email:"sreelekha@gmail.com",
        password:"Sreelekha@12345"
    }
]