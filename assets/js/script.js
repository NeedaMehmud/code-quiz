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

var questions = [
    {
        question: "String values must be enclosed within ___ when being assigned to variables.",
        choices: {
            a: "commas",
            b: "curly brackets",
            c: "quotes"
        },
        correctAnswer: "c"
    }, 
    {
        question: "A very useful tool during development and debugging for printing content to the debugger is: ",
        choices: {
            a: "dev tools",
            b: "terminal/bash",
            c: "console log"
        },
        correctAnswer: "c"
    },
    {
        question: "Which one of these is a NodeJS package manager?",
        choices: {
            a: "node.js",
            b: "TypeScript",
            c: "npm"
        },
        correctAnswer: "c"
    }
]

startQuizButton.addEventListener("click", startTimer);

startQuizButton.addEventListener("click", function () {
    document.querySelector(".jumbotron").style.display = "none";
    quizSection.style.display = "block";
})
startQuizButton.addEventListener("click", goToNextQuestion)


var currentQuestionIndex = 0;
function goToNextQuestion() {
        if(currentQuestionIndex === questions.length) {
            setTimeout(function () {
                quizSection.style.display = "none";
                initialsSection.style.display = "inline";
            }, 500);
            setTimeout(function () { clearInterval(timerInterval) }, 500);
        } else {
            question.textContent = questions[currentQuestionIndex].question;
            firstAnswer.textContent = questions[currentQuestionIndex].choices.a;
            secondAnswer.textContent = questions[currentQuestionIndex].choices.b;
            thirdAnswer.textContent = questions[currentQuestionIndex].choices.c;
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
        var chosenAnswer = event.target.getAttribute("choice");
        individualResult.textContent = " ";
        individualResult.style.display = "block";
        if (chosenAnswer === questions[currentQuestionIndex].correctAnswer) {
            individualResult.textContent = "Correct!";
            setTimeout(function () { individualResult.style.display = "none" }, 500);
        } else {
            individualResult.textContent = "Incorrect!"
            setTimeout(function () { individualResult.style.display = "none" }, 500);
            secondsLeft -= 10;
            timer.textContent = "Time: " + secondsLeft + " seconds";
        }
        currentQuestionIndex++;
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
    currentQuestionIndex = 0;
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