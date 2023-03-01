/* box1 den ve box 2 den gelen veri 157*52 ile çarpılıp box 3 e yazılacak 
buttona onclick ile gerekli fonksiyoyonu atamamjk lazım olacak

*/ 


function hesapla(){
    let sonuc= Number(document.getElementById("box1").value)*
    Number(document.getElementById("box2").value)*8164;

    document.getElementById("carpmasonucu").innerHTML=sonuc;

}

