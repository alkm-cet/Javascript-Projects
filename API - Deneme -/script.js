

const request = new XMLHttpRequest();

request.open("GET", "https://restcountries.com/v3.1/name/turkey");
request.send();


request.addEventListener("load", function () {

    /* request olarak tanımladığımız ve bilgileri çerisinde JSON olarak tutan bu 
    yapının içindeki bilgilerin tamamına ulaşmak için 'responseText' özelliğini kullandık
    ve şuan bunu da data isimli bir değişkenin içerisine atamış olduk*/

    /* const data = this.responseText; */

    /*şuan bu datanın türü 'string'. Bunu JSON parse yöntemi ile javascriptin
    anlayacağı şekilde parçalamalıyız ki içerisindeki istediğimiz bilgiye erişim
    sağlayabillelim. */  /*String to JSON */

    const data = JSON.parse(this.responseText);

    /*yukarıdaki ilk tanımlamanın JS tarafından okunabilir olması için JSON.parse
    yöntemiyle API yardımıyla gelen bilgiyi obje yapısına çevirdik. */

    /*artık data bir obje, dolayısıyla data[0] gibi tanımlamalar yapabilir ve 
    içerisindeki verilere erişebiliriz. data[0] da ülkeye ait bütün veriler bulunmakta
    Bunların bazıları örneğin 'languages' kısmı bir obje halinde. Peki bunun içindeki
    değeri yani 'Value' yu nasıl alıcaz ? 'Object.values' parantezlri arasına 
    data[0].languages yazarak ulaşabiliriz.*/

    console.log(Object.values(data[0].languages));

    console.log(data[0]);

    let button = document.getElementById("btn");
    let image = document.getElementById("resim");
    let countryName = document.getElementById("name");
    let countryPopulation = document.getElementById("population");
    let countryCurrency = document.getElementById("currency");
    let countyLanguage = document.getElementById("language");
    let input = document.getElementById("inp");


    button.addEventListener("click", function () {
        image.src = data[0].flags.png;
        countryName.innerHTML = "Country Name: " + data[0].name.common;
        countryPopulation.innerHTML = "Population: " + ((data[0].population / 1000000).toFixed(1)) + "M"
        countryCurrency.innerHTML = "Currency: " + Object.values(Object.keys(data[0].currencies));
        countyLanguage.innerHTML = "Language: " + Object.values(data[0].languages);


        let country = input.value;


    });

});













