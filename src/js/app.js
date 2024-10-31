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
      { text: "Martin Skrtel", correct: true },
      { text: "Richard Dunne", correct: false },
    ],
  },
];

const startQuizButton = document.querySelector("#take-quiz-button");
const questionCounterElement = document.querySelector(
  ".current__question--count"
);
const questionElement = document.querySelector(".question");
const answerButton = document.querySelector(".answer__button");
const nextButton = document.querySelector("#next-button");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next";
  showQuestion();
}

function showQuestion() {
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  let questionNumber = currentQuestionIndex + 1;
  questionElement.innerHTML = currentQuestion.question;
  questionCounterElement.innerHTML = questionNumber;

  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("answer__button");
    answerButton.append(button);
  });
}

function resetState() {
  while (answerButton.firstChild) {
    answerButton.removeChild(answerButton.firstChild);
  }
}

startQuiz();
