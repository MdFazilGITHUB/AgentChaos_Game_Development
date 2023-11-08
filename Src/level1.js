var riddles = document.getElementById("riddles")

riddles.onclick = () =>{
    window.location.href = "./../Pages/Level-1_2.html"
}

var back = document.getElementById("back")

back.onclick = () =>{
    window.location.href = "./../Pages/story1.html"
}

var evilAudio = new Audio("../assets/audio/evil-cue-111895.mp3")
evilAudio.volume = 0.3
evilAudio.loop = true
evilAudio.play()
