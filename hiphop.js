console.log("Welcome to Música");
let songIndex = 0;
let audioElement = new Audio('songs/hip-hop/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [{
        songName: "Firse Machayenge - Emiway Bantai",
        filePath: "songs/hip-hop/1.mp3",
        coverPath: "cover/firse.jpg",
        songDuration: "03:34"
    },
    {
        songName: "Jalebi Baby - Jason & tushar",
        filePath: "songs/hip-hop/2.mp3",
        coverPath: "cover/Darkside.jpg",
        songDuration: "04:15"
    }, {
        songName: "Khatam-Hue-Wande",
        filePath: "songs/hip-hop/3.mp3",
        coverPath: "cover/Darkside.jpg",
        songDuration: "03:24"
    }, {
        songName: "Machayenge - Emiway Bantai",
        filePath: "songs/hip-hop/4.mp3",
        coverPath: "cover/machayenge.jpg",
        songDuration: "03:20"
    }, 
    {
        songName: "Mirchi - Divine",
        filePath: "songs/hip-hop/5.mp3",
        coverPath: "cover/machayenge.jpg",
        songDuration: "03:20"
    }, 
]

songItems.forEach((element, i) => {


    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
    element.getElementsByClassName("timestamp")[0].innerHTML = songs[i].songDuration;
});
// audioElement.play();//listen to events
//handle play/pause click

masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
    } else {
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        makeAllPlays();
    }

})
audioElement.addEventListener('timeupdate', () => {
    //update seekbar
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    myProgressBar.value = progress;
    if (myProgressBar.value == 100) {
        if (songIndex >= 9) {
            songIndex = 0
        } else {
            songIndex += 1;
        }
        makeAllPlays();
        audioElement.src = `songs/hip-hop/${songIndex+1}.mp3`;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        document.getElementById('songInfoBottom').innerText = songs[songIndex].songName;
        document.getElementById("cover").src = songs[songIndex].coverPath;
        document.getElementById("cover1").src = songs[songIndex].coverPath;
        document.getElementById("coverImg").src = songs[songIndex].coverPath;
    }
});
myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = (myProgressBar.value * audioElement.duration) / 100;
    if (myProgressBar.value == 100) {
        if (songIndex >= 9) {
            songIndex = 0;
        } else {
            songIndex += 1;
        }
        makeAllPlays();
        audioElement.src = `songs/hip-hop/${songIndex+1}.mp3`;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        document.getElementById('songInfoBottom').innerText = songs[songIndex].songName;
        document.getElementById("cover").src = songs[songIndex].coverPath;
        document.getElementById("cover1").src = songs[songIndex].coverPath;
        document.getElementById("coverImg").src = songs[songIndex].coverPath;
    }
})





var minutes = 0;
var seconds = 0;

function timestamp() {
    let time = parseInt(audioElement.currentTime);
    minutes = Math.floor(time / 60);
    seconds = time - minutes * 60;
    if (seconds < 10) {
        document.getElementById('time').innerText = "0" + minutes + ":0" + seconds;
    } else {
        document.getElementById('time').innerText = "0" + minutes + ":" + seconds;
    }
}
setInterval(timestamp, 1000);

const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
        element.classList.add('fa-circle-play');
        element.classList.remove('fa-circle-pause');

    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
    element.addEventListener('click', (e) => {

        makeAllPlays();
        songIndex = parseInt(e.target.id)
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioElement.src = `songs/hip-hop/${songIndex+1}.mp3`;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        document.getElementById('songInfoBottom').innerText = songs[songIndex].songName;
        document.getElementById("cover").src = songs[songIndex].coverPath;
        document.getElementById("cover1").src = songs[songIndex].coverPath;
        document.getElementById("coverImg").src = songs[songIndex].coverPath;

    })
})

document.getElementById('next').addEventListener('click', () => {
    if (songIndex >= 9) {
        songIndex = 0
    } else {
        songIndex += 1;
    }
    makeAllPlays();
    audioElement.src = `songs/hip-hop/${songIndex+1}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
    document.getElementById('songInfoBottom').innerText = songs[songIndex].songName;
    document.getElementById("cover").src = songs[songIndex].coverPath;
    document.getElementById("cover1").src = songs[songIndex].coverPath;
    document.getElementById("coverImg").src = songs[songIndex].coverPath;

})
document.getElementById('previous').addEventListener('click', () => {
    if (songIndex <= 0) {
        songIndex = 9;
    } else {
        songIndex -= 1;
    }
    audioElement.src = `songs/hip-hop/${songIndex+1}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
    document.getElementById('songInfoBottom').innerText = songs[songIndex].songName;
    document.getElementById("cover").src = songs[songIndex].coverPath;
    document.getElementById("cover1").src = songs[songIndex].coverPath;
    document.getElementById("coverImg").src = songs[songIndex].coverPath;
})