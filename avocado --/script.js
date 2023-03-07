
var i =0;
function ekle() {
    document.getElementById('inc').value = 6.99 * ++i + "$";
}

function remove(){
 
        document.getElementById('inc').value = "";
        i=0;

    
}