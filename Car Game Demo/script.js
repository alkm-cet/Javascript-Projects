let buyButton = document.querySelectorAll("#buy");
let cardContainer = document.getElementById("cardContainer");
let garageContainer = document.getElementById('garageContainer');
let totalMoney = document.getElementById("totalMoney");
let totalTime = document.getElementById("totalTime");
let processCarContainer = document.getElementById("processCarContainer");
let totalEarning = document.getElementById("totalEarning");

const buttonPressed = e => {

    let thisButton = e.target;
    let parent = thisButton.parentElement;
    let price = thisButton.previousElementSibling.previousElementSibling.value;
    let time = thisButton.previousElementSibling.value;
    let possibility = thisButton.previousElementSibling.previousElementSibling.previousElementSibling.value;
    let random = Math.floor(Math.random() * 10) + 1;
    console.log(random);

    if (totalMoney.value >= price) {

        cardContainer.removeChild(parent);
        garageContainer.appendChild(parent);

        totalMoney.innerHTML = `Money:  ${totalMoney.value - price}  $`;
        totalMoney.value = totalMoney.value - price;
        totalMoney.style.color = "white";

        totalTime.value = totalTime.value + time;
        totalTime.innerHTML = 'Total Time: ' + totalTime.value + "min";


        let processButton = document.createElement('button');
        processButton.innerHTML = "Process";
        parent.removeChild(thisButton);
        parent.appendChild(processButton);

        processButton.addEventListener("click", addToProcessing);

        function addToProcessing(e) {

            thisProcessButton = e.target;
            garageContainer.removeChild(thisProcessButton.parentElement);
            processCarContainer.appendChild(thisProcessButton.parentElement);
            totalMoney.innerHTML = `Total Money:${totalMoney.value}$`;



            if (possibility == 100) {
                totalEarning.value = totalEarning.value + price * (15 / 10);
                totalEarning.innerText = `Total Earning:${totalEarning.value}$`;

                totalMoney.value = totalMoney.value + price * (15 / 10);
                totalMoney.innerHTML = `Total Money:${totalMoney.value}$`;

                thisProcessButton.innerHTML = "Kazandın"
                thisProcessButton.style.backgroundColor = "green";
            }


            if (possibility == 90) {

                if (random == 1) {
                    thisProcessButton.innerHTML = "Kaybettin";
                    thisProcessButton.style.backgroundColor = "red";

                } else {

                    totalEarning.value = totalEarning.value + price * (15 / 10);
                    totalEarning.innerText = `Total Earning:${totalEarning.value}$`;

                    totalMoney.value = totalMoney.value + price * (15 / 10);
                    totalMoney.innerHTML = `Total Money:${totalMoney.value}$`;

                    thisProcessButton.innerHTML = "Kazandın";
                    console.log(totalMoney.value)
                    thisProcessButton.style.backgroundColor = "green";

                }

            }

            if (possibility == 80) {
                if (random <= 8) {
                    totalEarning.value = totalEarning.value + price * (15 / 10);
                    totalEarning.innerText = `Total Earning:${totalEarning.value}$`;

                    totalMoney.value = totalMoney.value + price * (15 / 10);
                    totalMoney.innerHTML = `Total Money:${totalMoney.value}$`;

                    thisProcessButton.innerHTML = "Kazandın"
                    thisProcessButton.style.backgroundColor = "green";
                } else {
                    thisProcessButton.innerHTML = "Kaybettin";
                    thisProcessButton.style.backgroundColor = "red";
                }
            }

            if (possibility == 70) {
                if (random <= 7) {
                    totalEarning.value = totalEarning.value + price * (15 / 10);
                    totalEarning.innerText = `Total Earning:${totalEarning.value}$`;

                    totalMoney.value = totalMoney.value + price * (15 / 10);
                    totalMoney.innerHTML = `Total Money:${totalMoney.value}$`;

                    thisProcessButton.innerHTML = "Kazandın"
                    thisProcessButton.style.backgroundColor = "green";
                } else {
                    thisProcessButton.innerHTML = "Kaybettin";
                    thisProcessButton.style.backgroundColor = "red";
                }
            }

            if (possibility == 60) {
                if (random <= 6) {
                    totalEarning.value = totalEarning.value + price * (15 / 10);
                    totalEarning.innerText = `Total Earning:${totalEarning.value}$`;

                    totalMoney.value = totalMoney.value + price * (15 / 10);
                    totalMoney.innerHTML = `Total Money:${totalMoney.value}$`;

                    thisProcessButton.innerHTML = "Kazandın"
                    thisProcessButton.style.backgroundColor = "green";
                } else {
                    thisProcessButton.innerHTML = "Kaybettin";
                    thisProcessButton.style.backgroundColor = "red";
                }
            }

            if (possibility == 50) {
                if (random <= 5) {
                    totalEarning.value = totalEarning.value + price * (15 / 10);
                    totalEarning.innerText = `Total Earning:${totalEarning.value}$`;

                    totalMoney.value = totalMoney.value + price * (15 / 10);
                    totalMoney.innerHTML = `Total Money:${totalMoney.value}$`;

                    thisProcessButton.innerHTML = "Kazandın"
                    thisProcessButton.style.backgroundColor = "green";
                } else {
                    thisProcessButton.innerHTML = "Kaybettin";
                    thisProcessButton.style.backgroundColor = "red";
                }
            }

            if (possibility == 40) {
                if (random <= 4) {
                    totalEarning.value = totalEarning.value + price * (15 / 10);
                    totalEarning.innerText = `Total Earning:${totalEarning.value}$`;

                    totalMoney.value = totalMoney.value + price * (15 / 10);
                    totalMoney.innerHTML = `Total Money:${totalMoney.value}$`;

                    thisProcessButton.innerHTML = "Kazandın"
                    thisProcessButton.style.backgroundColor = "green";
                } else {
                    thisProcessButton.innerHTML = "Kaybettin";
                    thisProcessButton.style.backgroundColor = "red";
                }
            }

            if (possibility == 30) {
                if (random <= 3) {
                    totalEarning.value = totalEarning.value + price * (15 / 10);
                    totalEarning.innerText = `Total Earning:${totalEarning.value}$`;

                    totalMoney.value = totalMoney.value + price * (15 / 10);
                    totalMoney.innerHTML = `Total Money:${totalMoney.value}$`;

                    thisProcessButton.innerHTML = "Kazandın";
                    thisProcessButton.style.backgroundColor = "green";
                } else {
                    thisProcessButton.innerHTML = "Kaybettin";
                    thisProcessButton.style.backgroundColor = "red";
                }
            }

            if (possibility == 20) {
                if (random <= 2) {
                    totalEarning.value = totalEarning.value + price * (15 / 10);
                    totalEarning.innerText = `Total Earning:${totalEarning.value}$`;

                    totalMoney.value = totalMoney.value + price * (15 / 10);
                    totalMoney.innerHTML = `Total Money:${totalMoney.value}$`;

                    thisProcessButton.innerHTML = "Kazandın";
                    thisProcessButton.style.backgroundColor = "green";
                } else {
                    thisProcessButton.innerHTML = "Kaybettin";
                    thisProcessButton.style.backgroundColor = "red";
                }
            }

            if (possibility == 10) {
                if (random <= 1) {
                    totalEarning.value = totalEarning.value + price * (15 / 10);
                    totalEarning.innerText = `Total Earning:${totalEarning.value}$`;

                    totalMoney.value = totalMoney.value + price * (15 / 10);
                    totalMoney.innerHTML = `Total Money:${totalMoney.value}$`;

                    thisProcessButton.innerHTML = "Kazandın";
                    thisProcessButton.style.backgroundColor = "green";
                } else {
                    thisProcessButton.innerHTML = "Kaybettin";
                    thisProcessButton.style.backgroundColor = "red";
                }
            }

        }
    } else {
        totalMoney.innerHTML = 'No Enough Money!' + `: ${totalMoney.value}$`;
        totalMoney.style.color = "red";
    }
}

for (let button of buyButton) {
    button.addEventListener("click", buttonPressed);
};

let preloader = document.getElementById("preloaderContainer")

preloader.addEventListener("load", loaded)

function loaded() {
    preloader.style.display = "block";
}

let playButton = document.getElementById("play");

playButton.addEventListener("click", play)

function play() {
    preloader.style.display = "none";
}



// ----------------------------------------------------------------------

// function calculateMin(time) {
//     let minute = Math.floor(time / 60);
//     let second = Math.floor(time % 60);
//     let updateSec = second < 10 ? `0${second}` : `${second}`;
//     let total = `${minute} : ${updateSec}`;
//     return total;
// }

// ---------------------------------------------------------------------

// var intervalId = null

// function countDown() {
//     intervalId = setInterval(() => {

//         if (time > 0) {
//             thisProcessButton.innerHTML = `${time -= 1} sec`
//         } else {
//             clearInterval(intervalId);
//         }, 1000)

//     countDown();