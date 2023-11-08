var evilAudio = new Audio("./../assets/audio/evil-cue-111895.mp3")
evilAudio.loop = true
evilAudio.volume = 1
evilAudio.play()

document.getElementById("play").addEventListener("click",()=>{
    window.location.href = "./Pages/Intro.html"
})


alert("Please Click F11 for an Immersive Experience")


