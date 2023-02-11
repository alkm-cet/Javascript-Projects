function ekle(){
    let kutu1 = document.getElementById("box1");
    let kutu2 = document.getElementById("box2");
    let kutu3 = document.getElementById("box3");
    let sonuc = document.getElementById("sonuc");
    let button = document.getElementById("btn");

    kutu1.innerHTML=(Math.floor(Math.random()*100));
    kutu2.innerHTML=(Math.floor(Math.random()*100));
    kutu3.innerHTML=(Math.floor(Math.random()*100)); 

    if(kutu1.innerHTML>50 && kutu2.innerHTML>50 && kutu3.innerHTML>50 ){
        sonuc.innerHTML="<strong>KAZANDINIZ!!!!</strong>"
        button.style.display="none"
    } else (
        sonuc.innerHTML="TEKRAR DENEYİNİZ"
    )


}

