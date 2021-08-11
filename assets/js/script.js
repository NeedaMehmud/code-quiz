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

function showResults(){

}

startQuizButton.addEventListener("click", startTimer);
