let timer = document.querySelector("#timer");
let startButton = document.querySelector("#start-button");
let start = document.querySelector("#start");
let questionNumber = document.querySelector("#question-number");
let rules = document.querySelector("#rules");
let correctMessage = document.querySelector("#correct-message");
let questionChoices = document.querySelector(".choices");
let timeLeft = 0;
let currentQuestion;
let currentChoices;
var questionDiv = document.getElementById("question-number");

let userChoice;
let timerEl = document.querySelector("#timer");
let countdownEl = document.querySelector("#countdown");
let mainEl = document.querySelector("main");
let timerInterval;
let score;


var quizQuestions = [{
    question: "Which language is not one of the three core languages of the web?",
    choices: ["CSS", "HTML", "Java", "JavaScript"],
    answer: "Java",
},
{
    question: "JavaScript variables are written in which type of case?",
    choices: ["lowercase", "camelCase", "UPPERCASE", "CapitalCase"],
    answer: "camelcase",
},
{
    question: "Which language can change the look and style of a webpage?",
    choices: ["Pyton", "CSS", "JavaScript", "HTML"],
    answer: "CSS",
},
{
    question: "Which function will display data in the browser console?",
    choices: ["console.log", "document.write[]", "window.alert()", "interHTML"],
    answer: "console.log",
},
{
    question: "All HTML elements begin with what?",
    choices: ["An openeing tag", "Bulleted list", "Numbered list", "it creates a link"],
    answer: "An opening tag"
},
]
document.getElementById("start-button").addEventListener("click", function() {
   startButton.style.visibility = "collapse";

   startTimer();
   print();

})

function startTimer() {

    timeLeft = 60;
       timerInterval = setInterval(function () {
           countdownEl.textContent = timeLeft;
           timeLeft--;
           (countdownEl.textContent = timeLeft);
           if (timeLeft === 0) {
               endGame();
           }
       }, 1000);
}

function print() {
    if (quizQuestions.length === 0) {
        endGame();
    }
    currentQuestion = quizQuestions.shift()
    console.log(currentQuestion);
    currentQuestion.textContent = "";
    document.getElementById("answerSection").textContent = "";
    questionDiv.textContent = currentQuestion.question;
    for (i = 0; i < currentQuestion.choices.length; i++) {
        const button = document.createElement("button");
        button.textContent = currentQuestion.choices[i];
        document.getElementById("answerSection").appendChild(button);
        button.addEventListener("click", verifyAnswer);
    }
}

function verifyAnswer() {
    if(this.textContent === currentQuestion.answer) {
        correctMessage.textContent = "Correct!";
        print();
    }
    else {
        correctMessage.textContent = "Wrong answer, you lose 8 seconds from your score";
        timeLeft = timeLeft - 10;
        print();
    }
}

function endGame() {
    console.log(timeLeft);
        clearInterval(timerInterval);
        alert("Time is up! your score is " + timeLeft);

        var element = document.getElementById("endgame-content");
    element.classList.add("invisible");

    var form = document.getElementById("form-now");
    form.classList.remove("invisible");
}

var highScoresList = document.getElementById("highScoresList");
var highScores = JSON.parse(localStorage.getItem("highScores")) || [];

//highScoresList.innerHTML =
    highScores
    .map(score => {
        return '<li class="high-score">${score.name}-${score.score}</li>;'
    })
    .join("");

    //  GIVEN I am taking a code quiz
//WHEN I click the start button
//THEN a timer starts and I am presented with a question
//WHEN I answer a question
//THEN I am presented with another question
//WHEN I answer a question incorrectly
//THEN time is subtracted from the clock
//WHEN all questions are answered or the timer reaches 0
//THEN the game is over
//WHEN the game is over
//THEN I can save my initials and my score