// Get references to HTML elements
var createButton = document.getElementById("create")
var nameInput = document.getElementById("name");
var nicknameInput = document.getElementById("nickname");
var back = document.getElementById("back")

// Event listener for the "Create" button
createButton.addEventListener("click", () => {
    var name = nameInput.value;
    var nickname = nicknameInput.value;
    
    if (name && nickname) {
        // Save the user input to local storage
        localStorage.setItem("user_name", name);
        localStorage.setItem("user_nickname", nickname);
        
        window.location.href = "./../Pages/story1.html"
    } else {
        alert("Please fill in both name and nickname fields.");
    }
});

back.onclick = () =>{   
    window.location.href = "./../Pages/intro.html"
}

var evilAudio = new Audio("../assets/audio/horror-music-box-147341.mp3")
evilAudio.volume = 0.3
evilAudio.loop = true
evilAudio.play()