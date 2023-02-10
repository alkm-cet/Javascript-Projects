const daysEl = document.getElementById("times-days");
const hoursEl = document.getElementById("times-hours");
const minsEl = document.getElementById("times-mins");
const secsEl = document.getElementById("times-secs");


function countDown() {

    const newYearsDate = new Date("1 Jan 2023")
    const currentDate = new Date();

    // bu iki tarih birbirinden çıkarıldığındaki değer milisaniye cinsinden verilir.
    // Bu yüzden öncelikle bunu saniyeye çevirmek için 1000 e  bölebiliriz ve bu total saniyeyi verir.

    const totalSeconds = (newYearsDate - currentDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;



    daysEl.innerText = formatTime(days);
    hoursEl.innerText = formatTime(hours);
    minsEl.innerText = formatTime(minutes);
    secsEl.innerText = formatTime(seconds);


}

function formatTime(time){
    return (time<10) ? "0"+time : time ;
}

countDown();

setInterval(countDown,1000); 