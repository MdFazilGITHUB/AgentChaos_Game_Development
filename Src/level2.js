var containerStory = document.getElementById("story-container")

var button = document.getElementById("okay")

button.addEventListener("click",disappear)

// define the disappear function
function disappear(){
    containerStory.style.display = "none";
    containerStory.style.transition = "opacity 0.6s ease-in"
}

var keyboardDiv = document.querySelector(".keyboard")
var wordDisplay = document.querySelector(".word-display")
var hangmanImg = document.querySelector(".hangman img")
var attempts = document.getElementById("attempts")
var currentWord,wrongGuessCount = 0, correctLetters = [], allLetterIndices = []
var maxGuesses = 6

var getRandomWord = () => {
    const {word,hint} = riddleList[Math.floor(Math.random()*riddleList.length)]
    currentWord = word
    document.querySelector(".hint").innerText = hint
    wordDisplay.innerHTML = word.split("").map(() => `<li class="letter"></li><br>`).join("")
}

//
const game = (button, clickedLetter) => {
    let letterIndices = [];
    
    // Find all occurrences of the clicked letter in the currentWord
    for (let i = 0; i < currentWord.length; i++) {
        if (currentWord[i] === clickedLetter) {
            letterIndices.push(i);
            console.log( letterIndices);
        }
    }
    allLetterIndices = allLetterIndices.concat(letterIndices)
    console.log("allLetterIndices: ", allLetterIndices);

    if (letterIndices.length > 0) {
        // If the clicked letter exists in the currentWord
        letterIndices.forEach(index => {
            // Update each occurrence of the letter in wordDisplay
            wordDisplay.querySelectorAll("li")[index].innerText = clickedLetter;
            wordDisplay.querySelectorAll("li")[index].classList.add("guessed"); // Add the "guessed" class
            
        });
    } else {
        //if clicked letter doent exist update attempts and hangman img
        maxGuesses--;
        attempts.innerText = `${maxGuesses}`;
        hangmanImg.src = `./../assets/images/images/hangman-${maxGuesses}.svg`
    }

    button.disabled = true
    if(maxGuesses == wrongGuessCount){
        window.location.href = "./../Pages/gameover.html"
    }

    if (allLetterIndices.length === currentWord.length) {
        // Redirect to a new page when the word is guessed
        window.location.href = "./../Pages/story3.html"; 
    }
}

//making gamre functional
for(let i=97;i<=122;i++){
    //creating alphabet buttons
    let button = document.createElement("button")
    button.innerText = String.fromCharCode(i)
    keyboardDiv.appendChild(button)
    //checking typed word with answer
    button.addEventListener("click", e => game(e.target,String.fromCharCode(i)))
}
getRandomWord()

var evilAudio = new Audio("../assets/audio/evil-cue-111895.mp3")
evilAudio.volume = 0.3
evilAudio.loop = true
evilAudio.play()

var evilAudio = new Audio("../assets/audio/manic-whistle-32592.mp3")
evilAudio.volume = 0.3
evilAudio.loop = true
evilAudio.play()


setTimeout(() => {
    var evilAudio = new Audio("../assets/audio/demonic-woman-scream-6333.mp3")
    evilAudio.volume = 0.3
    // evilAudio.loop = true
    evilAudio.play()
}, 10000);