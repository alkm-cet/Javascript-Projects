let showButton = document.getElementById("btn0");
let prevButton = document.getElementById("btn");
let questHeader = document.getElementById("questHeader");
let ansA = document.getElementById("ansA");

function Questions(question, answers, trueAnswer) {
    this.question = question;
    this.answers = answers;
    this.trueAnswer = trueAnswer;
}

let questionsArray = [
    new Questions("1-Tr'nin başkenti hangi ildir?", [a = "Ankara", b = " Denizli", c = " İstanbul", d = "Adıyaman"], "Ankara"),
    new Questions("2-Yüz ölçümü en büyük il hangisidir?", [a = "İzmir", b = " Bursa", c = " Konya", d = "Eskişehir"], "Konya"),
    new Questions("3-Van gölü nerededir ? ", [a = "Zonguldak", b = " Van", c = " Kars", d = "Igdır"], "Van"),
    new Questions("4-Akdenizin bitki örtüsü nedir? ", [a = "Buzul", b = " Çöl", c = " Tundura", d = "Maki"], "Maki"),
    new Questions("5-Horozuyla meşhur ilimiz neresidir? ", [a = "Kırşehir", b = " İzmit", c = " Kastamonu", d = "Denizli"], "Denizli"),
];


showButton.addEventListener("click", start);

prevButton.addEventListener("click", prev);
prevButton.style.visibility = "hidden";


let index = 0;

function start() {

    showButton.innerText = "Sonraki"

    questHeader.innerText = questionsArray[index].question;

    ansA.innerText = " "

    for (let i = 0; i < questionsArray[index].answers.length; i++) {

        ansA.innerHTML += "<li class='li'>" + questionsArray[index].answers[i] + "</li>";
    }

    index++;
    prevButton.style.visibility = "visible";


    let li = ansA.querySelectorAll(".li");
    // console.log(li);

    for (let j = 0; j < li.length; j++) {

        li[j].addEventListener("click", function () {

            for (let k = 0; k <= questionsArray.length; k++) {

                if (li[j].innerText == questionsArray[k].trueAnswer) {
                    li[j].style.backgroundColor = "Green";
                }
            }



        })

    }

}




// li.addEventListener("click",function(){

//     for (let j = 0; j <= li.length; j++){

//         if(li[j].innerText==questionsArray.trueAnswer){
//             console.log("oldu")
//         }
//     }
// });





console.log(index);
console.log(questionsArray.length);

// if (index == questionsArray.length) {
//     console.log = "Sınav Bitti";
// }

function prev() {

    index--;

    questHeader.innerText = questionsArray[index].question;

    ansA.innerText = " "

    for (let i = 0; i < questionsArray[index].answers.length; i++) {

        ansA.innerHTML += "<li>" + questionsArray[index].answers[i] + "</li>";
    }

}




// li.addEventListener("click",dogru);

// function dogru(){
//     if(li.innerText==trueAnswer){
//         document.write("dogru");
//     }
// }




