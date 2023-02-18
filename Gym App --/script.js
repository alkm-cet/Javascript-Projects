
let arr=[];

function ekle(){

    let sure = document.getElementById("sure").value;
    let gun = document.getElementById("gun").value;
    let bolge = document.getElementById("bolge").value;
    let sonuc = document.getElementById("sonuc");

    let sure1 = Number(sure)

    if(sure1 == ""){
        sonuc.innerHTML ="Lütfen Çalışma Sürenizi Giriniz!"
    } 
    
    else if (sure1 != parseInt(sure1)) {
        sonuc.innerHTML ="Lütfen Sayı Giriniz!"
    } 
    
    else if (sure1 == parseInt(sure1)){

        /* sonuc.innerHTML += "<li>"+"<strong>Gün =></strong>"+gun+" "+
        "<strong>Çalıştırılan Bölge =></strong>"+bolge+" "+
        "<strong>Çalışma Süresi =></strong>"+sure1+"dk"+"</li>"; */

        arr.push("<li>"+"<strong>Gün =></strong>"+gun+" "+
        "<strong>Çalıştırılan Bölge =></strong>"+bolge+" "+
        "<strong>Çalışma Süresi =></strong>"+sure1+"dk"+"</li>");

        sonuc.innerHTML = arr;

        document.getElementById("sure").value="";
        document.getElementById("gun").value="Pazartesi";

    }


}