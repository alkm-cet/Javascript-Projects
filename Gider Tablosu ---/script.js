/* function food(){
    let yemek = document.getElementById("yemek").value;
    let colonYemek = document.getElementById("colon1");

    colonYemek.style.height =yemek +"px"
}

function wearing(){

    let giyinme = document.getElementById("giyinme").value;
    let colonGiyinme = document.getElementById("colon2");

    colonGiyinme.style.height = giyinme +"px"
}

function kitchen(){

    let mutfak = document.getElementById("mutfak").value;
    let colonMutfak = document.getElementById("colon3");

    colonMutfak.style.height = mutfak +"px"
}

function rent(){

    let kira = document.getElementById("kira").value;
    let colonKira = document.getElementById("colon4");

    colonKira.style.height = kira +"px"
}

function transportation(){

    let ulasim = document.getElementById("ulasim").value;
    let colonUlasim = document.getElementById("colon5");

    colonUlasim.style.height = ulasim+"px"
} */


function yuzdeHesapla(){
    let yemek = document.getElementById("yemek").value;
    let colonYemek = document.getElementById("colon1");

    let giyinme = document.getElementById("giyinme").value;
    let colonGiyinme = document.getElementById("colon2");

    let mutfak = document.getElementById("mutfak").value;
    let colonMutfak = document.getElementById("colon3");

    let kira = document.getElementById("kira").value;
    let colonKira = document.getElementById("colon4");

    let ulasim = document.getElementById("ulasim").value;
    let colonUlasim = document.getElementById("colon5");

    yemek = Number(yemek);
    giyinme = Number(giyinme);
    mutfak = Number(mutfak);
    kira = Number(kira);
    ulasim = Number(ulasim);

    let toplam =yemek+giyinme+mutfak+kira+ulasim;

    if(toplam != parseInt(toplam) || toplam == "") {
        document.write("sayı giriniz");
    } 

    let yüzde1 = ((yemek / (toplam))*100);
    let yüzde2 = ((giyinme / (toplam))*100);
    let yüzde3 = ((mutfak / (toplam))*100);
    let yüzde4 = ((kira / (toplam))*100);
    let yüzde5 = ((ulasim / (toplam))*100);

    let yuvarla1 = yüzde1.toFixed(2) ;
    let yuvarla2 = yüzde2.toFixed(2) ;
    let yuvarla3 = yüzde3.toFixed(2) ;
    let yuvarla4 = yüzde4.toFixed(2) ;
    let yuvarla5 = yüzde5.toFixed(2) ;

    colonYemek.style.height=yüzde1+"%"
    colonGiyinme.style.height=yüzde2+"%"
    colonMutfak.style.height=yüzde3+"%"
    colonKira.style.height=yüzde4+"%"
    colonUlasim.style.height=yüzde5+"%"

    colonYemek.innerHTML= yuvarla1  + "%" ;
    colonGiyinme.innerHTML = yuvarla2 + "%"  ;
    colonMutfak.innerHTML = yuvarla3 + "%"  ;
    colonKira.innerHTML = yuvarla4 + "%"  ;
    colonUlasim.innerHTML = yuvarla5 + "%"  ;

    setBackgroundColor(yüzde1,colonYemek);
    setBackgroundColor(yüzde2,colonGiyinme);
    setBackgroundColor(yüzde3,colonMutfak);
    setBackgroundColor(yüzde4,colonKira);
    setBackgroundColor(yüzde5,colonUlasim);

}

function setBackgroundColor(yüzde,colon){
    if(yüzde<=20) {
        colon.style.backgroundColor = "#FF00CC";
    } else if (yüzde>20 && yüzde<=40) {
        colon.style.backgroundColor = "#FF0099";
    } else if (yüzde>40 && yüzde<=60) {
        colon.style.backgroundColor = "#FF0066";
    } else if (yüzde>60 && yüzde<=80) {
        colon.style.backgroundColor = "#FF0033";
    } else if (yüzde>80) {
        colon.style.backgroundColor = "#FF0000";
    }

}

function reset(){
    let colonYemek = document.getElementById("colon1");
    let colonGiyinme = document.getElementById("colon2");
    let colonMutfak = document.getElementById("colon3");
    let colonKira = document.getElementById("colon4");
    let colonUlasim = document.getElementById("colon5");

    document.getElementById("yemek").value="";
    colonYemek.style.height=0;
    colonYemek.innerHTML=" ";

    document.getElementById("giyinme").value="";
    colonGiyinme.style.height=0;
    colonGiyinme.innerHTML = " ";

    document.getElementById("mutfak").value="";
    colonMutfak.style.height=0;
    colonMutfak.innerHTML=" ";

    document.getElementById("kira").value="";
    colonKira.style.height=0;
    colonKira.innerHTML=" ";

    document.getElementById("ulasim").value="";
    colonUlasim.style.height=0;
    colonUlasim.innerHTML=" ";

}
