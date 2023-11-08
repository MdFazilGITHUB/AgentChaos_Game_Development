var okay = document.getElementById("okay")

okay.onclick = () => {
    window.location.href = "./../Pages/level3.html"
}

var evilAudio = new Audio("../assets/audio/horror-music-box-147341.mp3")
evilAudio.volume = 0.3
evilAudio.loop = true
evilAudio.play()