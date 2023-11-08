var evilAudio = new Audio("../assets/audio/evil-cue-111895.mp3")
evilAudio.volume = 0.3
evilAudio.loop = true
evilAudio.play()

var username = document.getElementById("username")
username.onclick = () =>{
    window.location.href = "./../Pages/username.html"
}

var back = document.getElementById("back")

back.onclick = () =>{
    window.location.href = "./../index.html"
}