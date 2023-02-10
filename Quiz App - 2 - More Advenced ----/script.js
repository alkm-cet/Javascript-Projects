let quizQuestions = [
    {
        question: "Aşağıdaki cümlelerin hangisinde büyük harflerin kullanımıyla ilgili bir yazım yanlışı vardır?",
        a: "Mahmut Hoca, Hababam Sınıfı romanının unutulmaz karakterlerindendir.",
        b: "Fatih Sultan Mehmet Köprüsü, Boğaz üzerinde bir gerdanlık gibi durmaktadır. ",
        c: "Doğu ve Batı medeniyetleri arasında dünya görüşü bakımından bir fark vardır.",
        d: "Ramazan bayramı mistik bir tema olarak şiirimizde hep vardı. ",
        trueAnswer: "d",
    },

    {
        question: "Yazar; güçlü gözlem kabiliyeti sayesinde hikâyelerine incelikli tespitler ----, anlatının kılcal damarları hâlini alan bu ---- hikâyelerini daha gerçekçi kılıyordu.<br> Bu cümlede boş bırakılan yerlere sırasıyla aşağıdakilerden hangisi getirilmelidir? ",
        a: "yerleştiriyor - işlevsel ayrıntılar",
        b: "sağlıyor - sezgisel bakış açıları ",
        c: "serpiştiriyor - bütünleyici kavramlar",
        d: "gizliyor - bağımsız ögeler",
        trueAnswer: "a",
    },

    {
        question: "Karahanlılar Dönemi’nde kaleme alınmış olup, dört karakter üzerinden adalet, iktidar, akıl ve akıbet olmak üzere başlıca dört insani yetenek ile devlet yönetimine ilişkin ilkelerin anlatıldığı eser aşağıdakilerden hangisidir? ",
        a: "Kutadgu Bilig ",
        b: "Atabetü’l-Hakayık",
        c: "Divanü Lügati’t-Türk",
        d: "Divan-ı Hikmet",
        trueAnswer: "a",
    },

    {
        question: "2021 yılında Azerbaycan'da düzenlenen Aerobik Jimnastik Dünya Şampiyonası'nda, altın madalya kazanan Türk millî sporcu aşağıdakilerden hangisidir? ",
        a: "İrem Yaman  ",
        b: "Çağla Büyükakçay ",
        c: "Yasemin Ecem Anagöz ",
        d: "Ayşe Begüm Onbaşı ",
        trueAnswer: "d",
    },

    {
        question: "“Termessos Antik Kenti” aşağıdaki illerin hangisinde bulunur? ",
        a: "İzmir",
        b: "Aydın  ",
        c: "Antalya  ",
        d: "Muğla  ",
        trueAnswer: "c",
    },

    {
        question: "Frankfurt Seyahatnamesi, Bize Göre ve Göl Saatleri adlı eserlerin yazarı olan edebiyatçı aşağıdakilerden hangisidir?",
        a: "Ahmet Rasim ",
        b: "Tevfik Fikret",
        c: "Ahmet Haşim ",
        d: "Namık Kemal",
        trueAnswer: "c",
    },
];

let index = 0;
let questionHeader = document.getElementById("header");
let texta = document.getElementById("text_a");
let textb = document.getElementById("text_b");
let textc = document.getElementById("text_c");
let textd = document.getElementById("text_d");
let btn = document.getElementById("btn");
let btn2 = document.getElementById("btn2");
let parent = document.getElementById("parent");


parent.style.visibility = "hidden";

function app() {
    questionHeader.innerHTML = quizQuestions[index].question;
    texta.innerText = quizQuestions[index].a;
    textb.innerText = quizQuestions[index].b;
    textc.innerText = quizQuestions[index].c;
    textd.innerText = quizQuestions[index].d;
}

btn.addEventListener("click", () => {

    btn.innerText = "Gönder"
    parent.style.visibility = "visible";
    if (index < quizQuestions.length) {
        app();
    } else {
        questionHeader.innerText = "Sınav Bitti !"
        parent.style.visibility = "hidden";
        btn.innerText = "Sonuc Gör"
    }
    if (btn.innerText == "Sonuc Gör") {
        questionHeader.innerText = `Puanınız : ${Math.floor(score * (100 / quizQuestions.length))}`;
        btn.style.display = "none";
        btn2.style.display = "block"
    }

    // console.log(index);

})

let score = 0;

function correctAnswer(answer) {
    if (answer == quizQuestions[index].trueAnswer) {
        score++;
        parent.style.visibility = "hidden";
        questionHeader.innerText = "Doğru!";
        btn.innerText = "Sıradaki"

        index++;

    } else {
        parent.style.visibility = "hidden";
        questionHeader.innerText = "Yanlış Cevap!";
        btn.innerText = "Sıradaki";

        index++;
    }
}

function again() {
    index = 0;
    score = 0;
    btn.style.display = "block";
    btn2.style.display = "none";

    btn.innerText="Başla";
    questionHeader.innerText = " Sınava Başla";
    

    // console.log(index);
}

