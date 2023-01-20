function MusicList(musicName, artist, musicPath, image) {
    this.musicName = musicName;
    this.artist = artist;
    this.musicPath = musicPath;
    this.image = image;
}

let musicArray = [
    new MusicList("Better Now", "Post Malone", "https://yildirimzlm.s3.us-east-2.amazonaws.com/Post+Malone+-+Better+Now.mp3", "https://yildirimzlm.s3.us-east-2.amazonaws.com/post-malone-1.jpeg"),
    new MusicList("Circles", "Post Malone", "https://yildirimzlm.s3.us-east-2.amazonaws.com/Post+Malone+-+Circles+(Lyrics).mp3", "https://yildirimzlm.s3.us-east-2.amazonaws.com/circles.jpeg"),
    new MusicList("Rockstar ft. 21 Savage", "Post Malone", "https://yildirimzlm.s3.us-east-2.amazonaws.com/Post+Malone+-+rockstar+ft.+21+Savage+(Official+Audio).mp3", "https://yildirimzlm.s3.us-east-2.amazonaws.com/post-malone-2.jpeg"),
    new MusicList("No Scrubs ft. Joanna Jones", "Unlike Pluto", "https://yildirimzlm.s3.us-east-2.amazonaws.com/Unlike+Pluto+-+No+Scrubs+ft.+Joanna+Jones+(Cover).mp3", "https://yildirimzlm.s3.us-east-2.amazonaws.com/unlike-pluto.jpeg"),
    new MusicList("MONTERO (Call Me By Your Name)", "Lil Nas X", "https://yildirimzlm.s3.us-east-2.amazonaws.com/Lil+Nas+X+-+MONTERO+(Call+Me+By+Your+Name)+(Lyrics).mp3", "https://yildirimzlm.s3.us-east-2.amazonaws.com/montero.jpeg"),
];

let container = document.getElementById("container");
let imageContainer = document.getElementById("img");
let musicName = document.getElementById("musicName");
let artistName = document.getElementById("artistName");
let rangeBar = document.getElementById("range");
let volumeBar = document.getElementById("volumeBar");

let playBtn = document.getElementById("playBtn");
let nextBtn = document.getElementById("nextBtn");
let prevBtn = document.getElementById("previousBtn");
let audio = document.getElementById("audioTag");
let volumeBtn = document.getElementById("volumeBtn")

let currentDuration = document.getElementById("currentDuration");
let totalDuration = document.getElementById("totalDuration");


let index = 0;

audio.src = musicArray[index].musicPath;
audio.volume = 10 / 100 ;
document.body.style.backgroundImage = 'url(' + musicArray[index].image + ')';
imageContainer.src = musicArray[index].image;
artistName.innerText = musicArray[index].artist;
musicName.innerText = musicArray[index].musicName;


const calculateTime = (totalSecond) => {
    const minute = Math.floor(totalSecond / 60);
    const second = Math.floor(totalSecond % 60);
    const updatedSecond = second < 10 ? `0${second}` : `${second}`;
    const timeOutput = `${minute}:${updatedSecond}`;
    return timeOutput;
}

audio.addEventListener("loadedmetadata", () => {

    totalDuration.innerText = calculateTime(audio.duration);
    rangeBar.max = Math.floor(audio.duration);
})

audio.addEventListener("timeupdate", () => {

    rangeBar.value = Math.floor(audio.currentTime);
    currentDuration.innerText = calculateTime(rangeBar.value);

    if (index != musicArray.length - 1) {

        if (rangeBar.value == rangeBar.max) {

            index++;
            audio.src = musicArray[index].musicPath;
            document.body.style.backgroundImage = 'url(' + musicArray[index].image + ')';
            imageContainer.src = musicArray[index].image;
            artistName.innerHTML = musicArray[index].artist;
            musicName.innerText = musicArray[index].musicName;

            audio.play();
            playBtn.innerText = "pause";
        }
    } else {
        if (rangeBar.value == rangeBar.max) {
            index = 0;

            audio.src = musicArray[index].musicPath;
            document.body.style.backgroundImage = 'url(' + musicArray[index].image + ')';
            imageContainer.src = musicArray[index].image;
            artistName.innerHTML = musicArray[index].artist;
            musicName.innerText = musicArray[index].musicName;

            audio.play();
            playBtn.innerText = "pause";
        }

    }




})

rangeBar.addEventListener("input", () => {
    currentDuration.innerText = rangeBar.value;
    audio.currentTime = currentDuration.innerText;
})



// BUTTONS ----------------------------------------------------------------

playBtn.addEventListener("click", () => {

    if (playBtn.innerText == "pause") {
        audio.pause();
        playBtn.innerText = "play_arrow"
    } else if (playBtn.innerText == "play_arrow") {
        audio.play();
        playBtn.innerText = "pause"
    }

})

nextBtn.addEventListener("click", () => {

    if (index != musicArray.length - 1) {

        index++;
        audio.src = musicArray[index].musicPath;
        document.body.style.backgroundImage = 'url(' + musicArray[index].image + ')';
        imageContainer.src = musicArray[index].image;
        artistName.innerHTML = musicArray[index].artist;
        musicName.innerText = musicArray[index].musicName;

        audio.play();
        playBtn.innerText = "pause";

    } else {
        index = 0;

        audio.src = musicArray[index].musicPath;
        document.body.style.backgroundImage = 'url(' + musicArray[index].image + ')';
        imageContainer.src = musicArray[index].image;
        artistName.innerHTML = musicArray[index].artist;
        musicName.innerText = musicArray[index].musicName;

        audio.play();
        playBtn.innerText = "pause";
    }



})

prevBtn.addEventListener("click", () => {

    if (index == 0) {

        index = musicArray.length - 1
        audio.src = musicArray[index].musicPath;
        document.body.style.backgroundImage = 'url(' + musicArray[index].image + ')';
        imageContainer.src = musicArray[index].image;
        artistName.innerHTML = musicArray[index].artist;
        musicName.innerText = musicArray[index].musicName;

        audio.play();
        playBtn.innerText = "pause";

    } else {
        index--;
        audio.src = musicArray[index].musicPath;
        document.body.style.backgroundImage = 'url(' + musicArray[index].image + ')';
        imageContainer.src = musicArray[index].image;
        artistName.innerHTML = musicArray[index].artist;
        musicName.innerText = musicArray[index].musicName;

        audio.play();
        playBtn.innerText = "pause";

    }


})

let isVolumeMuted = false;

volumeBar.addEventListener("input", () => {

    audio.volume = volumeBar.value / 100;

    if (volumeBar.value == 0) {
        audio.muted = true;
        volumeBtn.innerText = "volume_off";
        isVolumeMuted = true;
    } else if (volumeBar.value != 0) {
        audio.muted = false;
        volumeBtn.innerText = "volume_up";
        isVolumeMuted = false;
    }
})

volumeBtn.addEventListener("click", () => {

    if (isVolumeMuted == false) {
        audio.muted = true;
        volumeBtn.innerText = "volume_off";
        volumeBar.value = 0;
        isVolumeMuted = true;
    } else if (isVolumeMuted == true) {
        volumeBar.value = 10;
        audio.muted = false;
        volumeBtn.innerText = "volume_up";
        isVolumeMuted = false;
    }

})

