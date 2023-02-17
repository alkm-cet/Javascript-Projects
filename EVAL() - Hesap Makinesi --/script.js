
function insert(num){
    let result = document.getElementById("topBar");
    result.value = result.value + num;
}

function eql(){
    let result = document.getElementById("topBar");
    result.value =eval(result.value);
}

function clr(){
    let result = document.getElementById("topBar");
    result.value="";
}

function del(){
    let result = document.getElementById("topBar");
    result.value = result.value.slice(0,-1);
}