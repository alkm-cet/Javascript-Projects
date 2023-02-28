let siyah=document.getElementById("btn1");
let acikmavi=document.getElementById("btn2");
let turuncu=document.getElementById("btn3");
let yesil=document.getElementById("btn4");

function black(){
    document.getElementById("body").style.backgroundColor="black";
}

function blue(){
    document.getElementById("body").style.backgroundColor="blue";
}

function orange(){
    document.getElementById("body").style.backgroundColor="orange";
}

function green(){
    document.getElementById("body").style.backgroundColor="green";
}

siyah.addEventListener("click",black);
acikmavi.addEventListener("click",blue);
turuncu.addEventListener("click",orange);
yesil.addEventListener("click",green);






