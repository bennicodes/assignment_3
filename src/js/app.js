// Question + answers for Quiz
const questions = [
  {
    question: "Who was the first manager to win the premier league?",
    answers: [
      { text: "Sir Alex Ferguson", correct: true },
      { text: "Sir Kenny Dalglish", correct: false },
      { text: "Howard Wilkinson", correct: false },
    ],
  },
  {
    question: "Who scored the first goal in premier league history?",
    answers: [
      { text: "Rod Wallace", correct: false },
      { text: "Eric Cantona", correct: false },
      { text: "Brian Deane", correct: true },
    ],
  },
  {
    question:
      "Which Norwegian played in the opening round of premier league 1992/93?",
    answers: [
      { text: "Erik Thorstvedt", correct: false },
      { text: "Gunnar Halle", correct: true },
      { text: "Pål Lydersen", correct: false },
    ],
  },
  {
    question:
      "Erling Haaland has the most goals, but which Norwegian has played the most games in the premier league?",
    answers: [
      { text: "John Arne Riise", correct: true },
      { text: "Claus Lundekvam", correct: false },
      { text: "Morten Gamst Pedersen", correct: false },
    ],
  },
  {
    question:
      "Harry Kane has won the premier league top scorer 3 times. Who was the last Spurs player before him to become the toppscorer?",
    answers: [
      { text: "Gareth Bale", correct: false },
      { text: "Jürgen Klinsmann", correct: false },
      { text: "Teddy Sheringham", correct: true },
    ],
  },
  {
    question:
      "Which of these players have not won the top scorer title 2 seasons in a row?",
    answers: [
      { text: "Michael Owen", correct: false },
      { text: "Robin van Persie", correct: false },
      { text: "Ruud van Nistelrooy", correct: true },
    ],
  },
  {
    question:
      "Which Norwegian player has played more than 1 game in the premier league?",
    answers: [
      { text: "Jo Inge Berget", correct: false },
      { text: "Kristoffer Haestad (Hæstad)", correct: true },
      { text: "Erik Hagen", correct: false },
    ],
  },
  {
    question: "Who has scored the most own goals in premier league history?",
    answers: [
      { text: "Jamie Charragher", correct: false },
      { text: "Martin Skrtel", correct: false },
      { text: "Richard Dunne", correct: true },
    ],
  },
];

// Element selection
const startQuizButton = document.querySelector("#take-quiz-button");
const scoreCounter = document.querySelector(".score__number");
const questionCounterElement = document.querySelector(
  ".current__question--count"
);
const progressBarElement = document.querySelector(".progress__bar");
const questionElement = document.querySelector(".question");
const answerButtons = document.querySelector(".answer__button--container");
const nextButton = document.querySelector("#next-button");
const hiddenButton = document.querySelector(".hidden-button");

let currentQuestionIndex = 0;
let score = 0;

// Functions
// Start Quiz
function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  showQuestion();
}

// Reset Functions
// Score reset
function resetScore() {
  score = 0;
  scoreCounter.innerHTML = score;
}

// Next button reset
function resetNextButton() {
  nextButton.innerHTML = "Next";
}
// Score Page Button Reset
function resetScoreButtons() {
  nextButton.classList.remove("score__page--button");
  hiddenButton.style.display = "none";
}
// Quiz functions
function showQuestion() {
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  let questionNumber = currentQuestionIndex + 1;
  questionElement.innerHTML = currentQuestion.question;
  questionCounterElement.innerHTML = questionNumber;

  // Update Progress bar
  let maxQuestionProgress = questions.length;
  progressBarElement.style.width = `${
    (questionNumber / maxQuestionProgress) * 100
  }%`;

  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("answer__button");
    answerButtons.append(button);
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
  });
}

//Answer button functions
function resetState() {
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

// Check Answer function
function selectAnswer(e) {
  const selectedButton = e.target;
  const correct = selectedButton.dataset.correct === "true";
  if (correct) {
    selectedButton.style.backgroundColor = "#00c200";
    score++;
    scoreCounter.innerHTML = score;
  } else {
    selectedButton.style.backgroundColor = "#ff221a";
  }
  Array.from(answerButtons.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.style.backgroundColor = "#00c200";
    }
    button.disabled = true;
  });
}

// Next button Function
function nextButtonAction() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
    nextButton.innerHTML = "Next";
  } else {
    showScore();
  }
}

// Score page function
function showScore() {
  resetState();
  if (score !== questions.length) {
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Try Again";
  } else {
    questionElement.innerHTML = `You're amazing! You scored ${score} out of ${questions.length}! `;
    nextButton.innerHTML = "Play Again";
  }
  hiddenButton.style.display = "block";
  hiddenButton.classList.add("score__page--button");
  nextButton.classList.add("score__page--button");
}

nextButton.addEventListener("click", () => {
  if (currentQuestionIndex < questions.length) {
    nextButtonAction();
  } else {
    resetNextButton();
    resetScore();
    resetScoreButtons();
    startQuiz();
  }
});

//Initialize quiz
startQuiz();
