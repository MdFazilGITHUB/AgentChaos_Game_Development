var exit  = document.getElementById("exit")

exit.onclick = () => {
    window.location.href = "./../index.html"
}

var playAgain = document.getElementById("play-again")

playAgain.onclick = () => {
    window.location.href = "./../Pages/story1.html"
}

var audio = new Audio("./../assets/audio/male-scream-in-fear-123079.mp3")
audio.volume = 0.3
audio.play()
audio.loop = false