let button = document.getElementById("btn");
let search = document.getElementById("input");

search.addEventListener("keypress", function (e) {
    if (e.keyCode === 13) {
        country = search.value;
        displayCountyr(country);
        search.value = "";
    }
})

button.addEventListener("click", add)

function add() {
    country = search.value;
    displayCountyr(country);
    search.value = " ";
}


async function displayCountyr(country) {

    const reponse = await fetch("https://restcountries.com/v3.1/name/" + country);
    const data = await reponse.json();
    setCountry(data[0]);

    // const request = new XMLHttpRequest();

    // request.open("GET", "https://restcountries.com/v3.1/name/" + country);
    // request.send();


    // request.addEventListener("load", function () {
    //     const data = JSON.parse(this.responseText);
    //     console.log(data);
    //     setCountry(data[0]);
    // });


}



function setCountry(data) {

    const html = `

    <div id="card">
      <div id="imgContainer">
          <img src="${data.flags.png}" alt="" id="resim">
      </div>
      <div id="name">${data.name.common}</div>
      <div id="population">Population : ${(data.population / 1000000).toFixed(1)}M</div>
      <div id="capital">Capital: ${data.capital[0]} </div>
      <div id="language">Language: ${Object.values(data.languages)} </div>
      <div id="currency">Currency: ${Object.values(Object.keys(data.currencies))} </div>
    </div>
    ` ;

    document.getElementById("container").insertAdjacentHTML("beforeend", html);


}

// displayCountyr("italy");
// displayCountyr("turkey");
// displayCountyr("france")

// console.log(Object.values(Object.keys(data.currencies)));









