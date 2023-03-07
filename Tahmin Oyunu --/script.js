/* 

Why dont you try a game that has following features:
-Program generates a random number
-User enters a value to input box
-If the number is greater than random generated number then the program displays "SICAK FOŞ"
-If the number is smaller than random generated number then the program displays "SOĞUK FOŞ"
-If the number is equal to random generated number, then the program displays "FOŞ FOŞ FOŞ FOŞ"

*/

/* function add(){

    let userNumber = document.getElementById("userGuess").value;
    let randomNumber = document.getElementById("programGenereted").innerHTML
    randomNumber = Math.floor(Math.random()*10);
    let sonuc = document.getElementById("sonuc");


    
     if(userNumber > randomNumber){
        randomNumber
        sonuc.innerHTML="SICAK FOŞ"
    } else if (userNumber > randomNumber) {
        sonuc.innerHTML="SOĞUK FOŞ"
    } else if (userNumber == randomNumber) {
        sonuc.innerHTML="FOŞ FOŞ FOŞ"
    } 

} */

function add(){
    let userNo = document.getElementById("userGuess").value;
    let programNo = document.getElementById("programGenereted").value;
    let sonuc = document.getElementById("sonuc");

    programNo=Math.floor(Math.random()*5);
    document.getElementById("programGenereted").innerHTML=programNo

    if(userNo > programNo ){
        sonuc.innerHTML = "SICAK FOŞ"
    } else if(userNo < programNo){
        sonuc.innerHTML = "SOĞUK FOŞ"
    } else if(userNo == programNo) {
        sonuc.innerHTML = "FOŞ FOŞ FOŞ FOŞ"
    }
}

function reset(){
    let userNo = document.getElementById("userGuess");
    let programNo = document.getElementById("programGenereted");
    let sonuc = document.getElementById("sonuc");

    userNo.value=" ";
    programNo.innerHTML=" ";
    sonuc.innerHTML=" ";
}




