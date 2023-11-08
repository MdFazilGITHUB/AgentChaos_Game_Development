var next = document.getElementById("next")

next.onclick = () =>{
    window.location.href = "./../Pages/level1.html"
}

// Get a reference to the "name" span element
const nameSpan = document.getElementById("name");

// Retrieve the user's nickname from local storage
const storedNickname = localStorage.getItem("user_nickname");

  nameSpan.textContent = storedNickname;

var evilAudio = new Audio("../assets/audio/manic-whistle-32592.mp3")
evilAudio.volume = 0.3
evilAudio.loop = true
evilAudio.play()