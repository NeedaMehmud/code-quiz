var highScoreLink = document.querySelector("#highScores");
var submitButton = document.querySelector("#submit-button");
var startQuizButton = document.querySelector("#start-quiz");
var timerClock = document.querySelector("#timer");
var resultsContainer = document.querySelector('#results');

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
