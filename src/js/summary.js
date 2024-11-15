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
      { text: "Kristoffer Haestad", correct: true },
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

//Quiz summary content
function createSummaryContent() {
  const summaryContainer = document.querySelector(".main__summary--container");

  // Clear existing content
  summaryContainer.textContent = "";

  // Create summary questions
  questions.forEach((q, index) => {
    const questionHeading = document.createElement("h3");
    questionHeading.textContent = `Question ${index + 1}: ${q.question}`;
    summaryContainer.append(questionHeading);

    // Create summary answers
    q.answers.forEach((answer) => {
      const answerElement = document.createElement("p");
      answerElement.textContent = `Question ${answer.text} ${
        answer.correct ? "(correct" : ""
      }`;
      answerElement.classList.add(
        answer.correct ? "correct-answer" : "incorrect-answer"
      );
      summaryContainer.append(answerElement);
    });
  });
}

createSummaryContent();
