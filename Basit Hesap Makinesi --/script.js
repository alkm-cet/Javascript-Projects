var sonuc;

function hesapla(){
    
    let sayi1=document.getElementById("ilksayi").value;
    let sayi2=document.getElementById("ikincisayi").value;
    let islem=document.getElementById("islem").value;

    s1=Number(sayi1);
    s2=Number(sayi2);

    if( islem == 'topla'){
        sonuc = s1+s2;
    }

    else if(islem == 'cikar'){
        sonuc = s1-s2;
    }

    else if( islem == 'bol'){
        sonuc = s1/s2;
    }

    else{
        sonuc = s1*s2;
    }

    document.getElementById("sonuc").innerHTML = "SONUÇ :" +sonuc;
}