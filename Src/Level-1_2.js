// Define an array of questions, correct answers, and options
const questions = [
    {
        question: "In a room where no shadows fall, You'll find a clue upon the wall.",
        options: ["dimly lit cave", "A pitch-black night", "An empty theater", "A room with no windows"],
        correctAnswer: "dimly lit cave",
    },
    {
        question: "Follow the path of twisted keys, Through the forest, among the trees. At the crossroads, choose your fate,To unveil where the killer awaits.",
        options: ["A library's labyrinth", "A locksmith's workshop", "A garden maze", "A car repair shop"],
        correctAnswer: "A garden maze",
    },
    {
        question: "Down below, where secrets hide, A subterranean world of wide.",
        options: [" A deep-sea cave", "A mountain peak", " A subway tunnel", "A tropical rainforest"],
        correctAnswer: "A subway tunnel",
    },
    {
        question: "In the place where echoes scream, A chamber filled with the moon's gleam.",
        options: ["A haunted mansion", "An abandoned asylum", " A planetarium", "A quiet cathedral"],
        correctAnswer: "A planetarium",
    },
    {
        question: "In a realm where mirrors twist, A carnival of illusions exist.",
        options: [" A circus funhouse", "A glassblower's workshop", "A physics laboratory", "A fancy dress shop"],
        correctAnswer: " A circus funhouse",
    },
    {
        question: "In the realm of endless books, Where ancient knowledge overtakes.",
        options: ["A university library", "A medieval castle's library", "A government archive", "A bookstore at midnight"],
        correctAnswer: " A medieval castle's library",
    },
    {
        question: "Beneath the city's pounding heart, In passages where secrets start,",
        options: [" A bustling subway station", " A corporate office building", "A busy shopping mall", "A lively concert hall"],
        correctAnswer: "A bustling subway station",
    },
    {
        question: "Beyond the forest's twisted maze, In a meadow of a hidden blaze",
        options: ["A labyrinthine hedge garden", "A thicket of thorns", "A national park", " An enchanted forest"],
        correctAnswer: "A labyrinthine hedge garden",
    }
  ];
  
  // Initialize variables
  let currentQuestionIndex = -1; // Initialize with -1 to start from the first question
  let attempts = 4; // Number of attempts allowed
  
  // Get references to HTML elements
  const attemptsSpan = document.getElementById("attempts");
  const questionText = document.getElementById("question");
  const optionButtons = document.querySelectorAll(".options--text button");
  
  attemptsSpan.textContent = attempts;
  // Function to load the next random question
  function loadNextRandomQuestion() {
    currentQuestionIndex = Math.floor(Math.random() * questions.length);
    questionText.innerText = questions[currentQuestionIndex].question;

    // Set the options for the question
    for (let i = 0; i < optionButtons.length; i++) {
        optionButtons[i].innerText = questions[currentQuestionIndex].options[i];
    }
}
  
  // Function to handle button click events
  function handleButtonClick(event) {
    const selectedOption = event.target.textContent;
    // console.log("selectedOption: ", selectedOption,selectedOption.length);
    const currentQuestion = questions[currentQuestionIndex];
    // console.log("currentQuestion: ", currentQuestion.correctAnswer,currentQuestion.correctAnswer.length);
    // console.log("selectedOption == currentQuestion.correctAnswer: ", selectedOption == currentQuestion.correctAnswer);
  
    if (selectedOption.trim() == currentQuestion.correctAnswer.trim()) {
      console.log("correct");
      window.location.href = "./../Pages/story2.html";
    } 
    else {
      console.log("wrong");
      attempts--;
      attemptsSpan.textContent = attempts;
      if(attempts === 1){
        alert("One more Chance! Choose wisely, else GAME OVER!")
      }
      if (attempts === 0) {
        // No more attempts left, redirect to a page for no attempts
        window.location.href = "./../Pages/gameover.html";
      } 
      else {
        loadNextRandomQuestion();
      }
    }
  }
  
  // Add click event listeners to the option buttons
  for (const button of optionButtons) {
    button.addEventListener("click", handleButtonClick);
  }
  
  // Load the first random question when the page loads
  loadNextRandomQuestion();
  

  var evilAudio = new Audio("../assets/audio/evil-cue-111895.mp3")
  evilAudio.volume = 0.3
  evilAudio.loop = true
  evilAudio.play()