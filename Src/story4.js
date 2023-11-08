var next = document.getElementById("next")

next.onclick = () => {
    window.location.href = "./../Pages/info.html"
}

var evilAudio = new Audio("../assets/audio/evil-cue-111895.mp3")
evilAudio.volume = 0.3
evilAudio.loop = true
evilAudio.play()