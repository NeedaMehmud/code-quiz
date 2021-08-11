var startQuizButton = document.querySelector(".start-quiz-button");
var timerClock = document.querySelector("#timer");
var question = document.querySelector(".question");
var firstAnswer = document.querySelector(".firstAnswer");
var secondAnswer = document.querySelector(".secondAnswer");
var thirdAnswer = document.querySelector(".thirdAnswer");
var quizSection = document.querySelector(".quiz-section");
var individualResult = document.querySelector("#individual-results");
var initialsSection = document.querySelector(".initials-section");
var submitButton = document.querySelector(".submit-button");
var highscoreSection = document.querySelector(".highscores-section");
var viewHighscores = document.querySelector("#highscore");

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
}
console.log(firstAnswer)

var secondAnswer = {
    optionA: "dev tools",
    optionB: "terminal/bash",
    optionC: "console log",
}

var thirdAnswer = {
    optionA: "node.js",
    optionB: "typeScript",
    optionC: "npm",
}
var answerArray = [firstAnswer, secondAnswer, thirdAnswer];

// ==== Correct Answers ==== //
var correctAnsA = firstAnswer.optionC;
var correctAnsB = secondAnswer.optionA;
var correctAnsC = thirdAnswer.optionC;
var correctAnswersArray = [correctAnsA, correctAnsB, correctAnsC]

// ==== Start Quiz Button ==== //
startQuizButton.addEventListener("click", startTimer);

startQuizButton.addEventListener("click", function () {
    document.querySelector(".jumbotron").style.display = "none";
    quizSection.style.display = "block";
})
startQuizButton.addEventListener("click", goToNextQuestion)


var correctIndex = 0;
function goToNextQuestion() {
    if (correctIndex === questionArray.length - 1) {
        setTimeout(function () {
            quizSection.style.display = "none";
            initialsSection.style.display = "inline";
        }, 500);
        setTimeout(function () { clearInterval(timerInterval) }, 500);
    } else {
        question.textContent = questionArray[correctIndex];
        firstAnswer.textContent = correctAnswersArray[correctIndex].optionC;
        secondAnswer.textContent = correctAnswersArray[correctIndex].optionA;
        thirdAnswer.textContent = correctAnswersArray[correctIndex].optionC;
    }
}

var secondsLeft = 70;
var timerInterval;
function startTimer() {
    timerInterval = setInterval(function () {
        secondsLeft--;
        timer.textContent = "Time: " + secondsLeft + " seconds";
        if (secondsLeft === 0) {
            clearInterval(timerInterval);
            quizSection.style.display = "none";
            initialsSection.style.display = "inline";
        }
    }, 1000);
    return timerInterval;
}


quizSection.addEventListener("click", determineCorrectAnswer)

function determineCorrectAnswer(event) {
    if (event.target.matches(".btn-warning")) {
        var chosenAnswer = event.target.textContent;
        individualResult.textContent = " ";
        individualResult.style.display = "block";
        if (chosenAnswer === correctAnswersArray[correctIndex]) {
            individualResult.textContent = "Correct!";
            setTimeout(function () { individualResult.style.display = "none" }, 500);
        } else {
            individualResult.textContent = "Incorrect!"
            setTimeout(function () { individualResult.style.display = "none" }, 500);
            secondsLeft -= 10;
            timer.textContent = "Time: " + secondsLeft + " seconds";
        }
        correctIndex++;
    }
    return secondsLeft;
};


quizSection.addEventListener("click", function (event) {
    if (event.target.matches(".btn-warning")) {
        goToNextQuestion();
    }
})

submitButton.addEventListener("click", function (event) {
    event.preventDefault();
    newUser();
    initialsSection.style.display = "none";
    document.querySelector(".highscores-section").style.display = "block";
    document.querySelector(".user-scores").style.display = "block";
})


function newUser() {
    var userInitial = document.querySelector("#initials").value;
    if (userInitial === "") {
        userInitial = "anonymous";
    }
    localStorage.setItem(userInitial, secondsLeft);
    document.querySelector(".user-scores").textContent = " ";
    var p = document.createElement("p");
    p.textContent = userInitial + ": " + secondsLeft;
    document.querySelector(".user-scores").appendChild(p);

}


document.querySelector(".challenge-again").addEventListener("click", function () {
    correctIndex = 0;
    secondsLeft = 70;
    timer.textContent = "Time: 70 seconds";
    document.querySelector(".jumbotron").style.display = "block";
    highscoreSection.style.display = "none";
})


// ==== clear high scores ==== //

document.querySelector(".clear-highscores").addEventListener("click", function () {
    localStorage.clear();
    document.querySelector(".user-scores").textContent = " ";
    document.querySelector(".user-scores").style.display = "none";

});

//==== view high scores ==== //

viewHighscores.addEventListener("click", function () {
    clearInterval(timerInterval);
    document.querySelector(".jumbotron").style.display = "none";
    quizSection.style.display = "none";
    initialsSection.style.display = "none";
    highscoreSection.style.display = "block";
    document.querySelector(".user-scores").textContent = " ";
    for (let i = 0; i < localStorage.length; i++) {
        var p = document.createElement("p");
        var user = localStorage.key(i);
        var scores = localStorage.getItem(localStorage.key(i));
        p.textContent = user + ": " + scores;
        document.querySelector(".user-scores").appendChild(p);
    }
})