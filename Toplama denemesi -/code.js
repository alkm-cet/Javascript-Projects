function toplam(){

    let a = Number(document.getElementById("topla1").value)+
    Number(document.getElementById("topla2").value);

    document.getElementById("toplamsonucu").innerHTML=a;

}


function cikar(){

    let a = Number(document.getElementById("cikar1").value)-
    Number(document.getElementById("cikar2").value);

    document.getElementById("cikarmasonucu").innerHTML=a;

}

function carp(){

    let a = Number(document.getElementById("carp1").value)*
    Number(document.getElementById("carp2").value);

    document.getElementById("carpmasonucu").innerHTML=a;

}

function bol(){

    let a = Number(document.getElementById("bol1").value)/
    Number(document.getElementById("bol2").value);

    document.getElementById("bolmesonucu").innerHTML=a;

}




