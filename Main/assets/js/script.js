var highScoreLink = document.querySelector("#highScores");
var submitButton = document.querySelector("#submit-button");
var startQuizButton = document.querySelector(".start-quiz");
var timerCount = 5;
var timeLeft = 0;
var idTimer = null;

var highScores = []

function startTimer() {
    idTimer = setInterval(updateTimerDisplay, 1000);
}

function updateTimerDisplay() {
    timerCount--
    var timerClock = document.querySelector("#timer");
    timerClock.innerHTML = timerCount;
    if (timerCount === 0) {
        clearInterval(idTimer);
    }
}








startQuizButton.addEventListener("click", startTimer);