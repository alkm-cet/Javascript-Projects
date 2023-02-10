const scroll = "Scroll Down...";

let container = document.getElementById("Scrolldown");

let index = 0 ;

window.addEventListener("load",loadscript);

function loadscript(){
    container.innerText = scroll.slice(0,index);

    index++;

    if(index>scroll.length){
        index = 0 ;
    }
}

setInterval(loadscript,350);