let lowerCase = "qwertyuıopğüasdfghjklşizxcvbnmöç";
let upperCase = "QWERTYUIOPĞÜASDFGHJKLŞİZXCVBNMÖÇ";
let numbers = "1234567890";
let symbols = "!'^+%&/()=?*_,.<>~¨";

let generateBtn = document.getElementById("btn");
let output = document.getElementById("output");

let lengthbox = document.getElementById("lengthbox");
let lowerCheck = document.getElementById("lC");
let upperCheck = document.getElementById("uC");
let numberCheck = document.getElementById("N");
let symbolCheck = document.getElementById("S");

generateBtn.addEventListener("click", () => {

    output.innerText = "";


    for (let i = 0; i < lengthbox.value; i++) {

        if (lowerCheck.checked == true) {
            output.innerText += lowerCase[Math.floor(Math.random() * lowerCase.length)];
        }

        if (upperCheck.checked == true) {
            output.innerText += upperCase[Math.floor(Math.random() * upperCase.length)];
        }

        if (numberCheck.checked == true) {
            output.innerText += numbers[Math.floor(Math.random() * numbers.length)];
        }

        if (symbolCheck.checked == true) {
            output.innerText += symbols[Math.floor(Math.random() * symbols.length)];
        }

    }

    output.innerText = output.innerText.slice(0, lengthbox.value);

})
