var startQuizButton = document.querySelector("#start-quiz");
var timerClock = document.querySelector("#timer");
var question = document.querySelector("#question");
var answer1 = document.querySelector("#answer1");
var answer2 = document.querySelector("#answer2");
var answer3 = document.querySelector("#answer3");
var answer4 = document.querySelector("#answer4");
var quizSection = document.querySelector("#quiz-section");
var individualResult = document.querySelector("#individual-results");
var initialsSection = document.querySelector("#initials-section");
var submitButton = document.querySelector("#submit-button");
var highscoreSection = document.querySelector("#highscores-section");
var viewHighscores = document.querySelector("#highscore");


var timerCount = 75;
//default value of the timer
timerClock.innerHTML = timerCount;
var idTimer = null;
var highScores = []
var results = []
const output = [];

function startTimer() {
    idTimer = setInterval(updateTimerDisplay, 1000);
    console.log('inside startTimer')
}

function updateTimerDisplay() {
    timerCount--
    timerClock.innerHTML = timerCount;
    if (timerCount === 0) {
        clearInterval(idTimer);
    }
}

function showResults() {

}

// ==== Questions ==== //

var first_q = "String values must be enclosed within ___ when being assigned to variables."
var second_q = "A very useful tool during development and debugging for printing content to the debugger is: "
var third_q = "Which one of these is a JavaScript package manager?"
var questionArray = [first_q, second_q, third_q];

// ==== Answers ==== //
var firstAnswer = {
    optionA: "commas",
    optionB: "curly brackets",
    optionC: "quotes",
    optionD: "parenthesis"
}
var secondAnswer = {
    optionA: "javaScript",
    optionB: "terminal/bash",
    optionC: "console log",
    optionD: "dev tools"
}

var thirdAnswer = {
    optionA: "node.js",
    optionB: "typeScript",
    optionC: "npm",
    optionD: "bootstrap"
}
var answerArray = [firstAnswer, secondAnswer, thirdAnswer];
// ==== Correct Answers ==== //
var correctAnsA = firstAnswer.optionC;
var correctAnsB = secondAnswer.optionD;
var correctAnsC = thirdAnswer.optionC;
var correctAnswersArray = [correctAnsA, correctAnsB, correctAnsC]
startQuizButton.addEventListener("click", startTimer);
