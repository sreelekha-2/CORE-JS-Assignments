
let err1=document.getElementById("errMsg1");
let err2=document.getElementById("errMsg2");
let err3=document.getElementById("errMsg3");
let err4=document.getElementById("errMsg4");
let err5=document.getElementById("errMsg5");

let fname=document.getElementById("fullname");
let password=document.getElementById("pass");
let email=document.getElementById("mail");
let mobileNo=document.getElementById("mobile");

let rb1=document.getElementById("r1");
let rb2=document.getElementById("r2");

err1.style.color="red";
err2.style.color="red";
err3.style.color="red";
err4.style.color="red";
err5.style.color="red";

function validate1(){
    err1.textContent="";
    let regExp=new RegExp("^[a-zA-z]*$");
    if(fname.value===""){
        err1.textContent="this field is required";
        return false;
    }
    else if(regExp.test(fname.value)===false){
        err1.textContent="name should have only alphabets";
        return false;
    }
    else{
        return true;
    }
}
function validate2(){
    err2.textContent="";
    let regExp=new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])");
    if(password.value===""){
        err2.textContent="this field is required";
        return false;
    }
    else if(regExp.test(password.value)===false){
        err2.textContent="password should have atleast one capital letter,small letter,digital,special character";
        return false;
    }
    else{
        return true;
    }
}
function validate3(){
    err3.textContent="";
    let str2=email.value.substring(email.value.indexOf("@")+1);
    if(email.value===""){
        err3.textContent="this field is required";
        return false;
    }
    else if(!email.value.includes("@") || str2===""){
        err3.textContent="Please put a valid mail id";
        return false;
    }
    else{
        return true;
    }
}
function validate4(){
    err4.textContent="";
    let regExp=new RegExp("^[0-9]*$");
    if(mobileNo.value===""){
        err4.textContent="this field is required";
        return false;
    }
    else if(regExp.test(mobileNo.value)===false){
        err4.textContent="Enter numbers only";
        return false;
    }
    else if(mobileNo.value.length<10){
        console.log("number")
        err4.textContent="Enter valid mobile number";
        return false;
    }
    else{
        return true;
    }
}

function validate5(){
    err5.textContent="";
    if(rb1.checked || rb2.checked){
        return true;
    }
    else{
        err5.textContent="select gender";
        return false;
    }
}

let showPass=document.getElementById("box");
function show(){
    if(showPass.checked){
        password.type="text";
    }
    else{
        password.type="password";
    }
}

function validateForm(){
    let res1=validate1();
    let res2=validate2();
    let res3=validate3();
    let res4=validate4();
    let res5=validate5();
    return res1 && res2 && res3 && res4 && res5;

}