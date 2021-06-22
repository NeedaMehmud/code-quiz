var highScoreLink = document.querySelector("#highScores");
var submitButton = document.querySelector("#submit-button");
var startQuizButton = document.querySelector(".start-quiz");
var timerClock = document.querySelector("#timer");
var timerCount = 60;
timerClock.innerHTML = timerCount; //default value of the timer
var idTimer = null;
var highScores = []

function startTimer() {
    idTimer = setInterval(updateTimerDisplay, 1000);
}

function updateTimerDisplay() {
    timerCount--
    timerClock.innerHTML = timerCount;
    if (timerCount === 0) {
        clearInterval(idTimer);
    }
}








startQuizButton.addEventListener("click", startTimer);