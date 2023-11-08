//buttons for player
let gun = document.getElementById("gun");
let bat = document.getElementById("bat");
let knife = document.getElementById("knife");

//declaring boxes for image display for the game
let playerImg = document.getElementById("player-image");
let compImg = document.getElementById("butcher-image");

//creating function for randomisisng the choices for the butcher
function compChoice() {
    choice = Math.ceil(Math.random() * 3);
    switch (choice) {
      case 1:
        compImg.setAttribute("src", "./../assets/images/bat icon.png");
        break;
        case 2:
          compImg.setAttribute("src", "./../assets/images/gun icon.png");
        break;
      case 3:
        compImg.setAttribute("src", "./../assets/images/knife icon.png");
        break;
    }
  }

  bat.onclick = () => {
      compChoice();
      playerImg.setAttribute("src", "./../assets/images/bat icon.png");
      setTimeout(() => {
          if (choice === 2) {
              //win
              window.location.href = "./../Pages/winvideo.html"
          } 
          else if (choice === 3) {
              //loose
              window.location.href = "./../Pages/loosevideo.html"
          }
          else if(choice === 1){
            alert("Try Again")
          }
      }, 1000);
  }

  gun.onclick = () => {
    compChoice();
    playerImg.setAttribute("src", "./../assets/images/gun icon.png");
    setTimeout(() => {
    if (choice === 3) {
        //win
        window.location.href = "./../Pages/winvideo.html"
    } 
    else if (choice === 1) {
        //loose
        window.location.href = "./../Pages/loosevideo.html"
    }
    else if(choice === 2){
        alert("Try Again")
      }
    }, 1000);
    
}


knife.onclick = () => {
    compChoice();
    playerImg.setAttribute("src", "./../assets/images/knife icon.png");
    setTimeout(() => {
        if (choice === 1) {
            //win
            window.location.href = "./../Pages/winvideo.html"
        } 
        else if (choice === 2) {
            //loose
            window.location.href = "./../Pages/loosevideo.html"
        }
        else if(choice === 3){
            alert("Try Again")
          }
    },1000);
}

var evilAudio = new Audio("../assets/audio/evil-cue-111895.mp3")
evilAudio.volume = 0.3
evilAudio.loop = true
evilAudio.play()

var evilAudio = new Audio("../assets/audio/manic-whistle-32592.mp3")
evilAudio.volume = 0.3
// evilAudio.loop = true
evilAudio.play()


setTimeout(() => {
    var evilAudio = new Audio("../assets/audio/demonic-woman-scream-6333.mp3")
    evilAudio.volume = 0.3
    // evilAudio.loop = true
    evilAudio.play()
}, 10000);