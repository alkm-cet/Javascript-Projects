let button = document.getElementById("btn");
let search = document.getElementById("input");
let container = document.getElementById("container");
let countryName = document.getElementById("countryName");
let totalDeath = document.getElementById("totalDeath");
let countryActive = document.getElementById("countryActive");
let CountryConfirmed = document.getElementById("CountryConfirmed");

button.addEventListener("click", add)

function add() {
    country = search.value;
    displayCountyr(country);
    search.value = "";
}

async function displayCountyr(country) {

    const response = await fetch("https://api.covid19api.com/dayone/country/" + country);
    const data = await response.json();

    // console.log(data[data.length - 1])

    totalDeathOfCountries = data[data.length - 1].Deaths;
    totalActiveOfCountries = data[data.length - 1].Active;
    totalConfirmedOfCountries = data[data.length - 1].Confirmed;

    var totalDeathOfCountriesDots = totalDeathOfCountries.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");
    var totalActiveOfCountriesDots = totalActiveOfCountries.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");
    var totalConfirmedOfCountriesDots = totalConfirmedOfCountries.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");


    countryName.innerText = "Country Name: " + data[data.length - 1].Country;
    totalDeath.innerText = "Total Death: " + totalDeathOfCountriesDots;
    countryActive.innerText = "Total Active: " + totalActiveOfCountriesDots;
    CountryConfirmed.innerText = "Total Confirmed: " + totalConfirmedOfCountriesDots;
}




