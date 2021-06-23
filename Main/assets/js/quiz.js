console.log("hello from quiz.js")

var questions = [
    {
        question: "String values must be enclosed within ___ when being assigned to variables",
        choices: {
            a: "commas",
            b: "curly brackets",
            c: "quotes",
            d: "parenthesis"
        },
        correctAnswer: "c"
    },

    {
        question: "A very useful tool during development and debugging for printing content to the debugger is: ",
        choices: {
            a: "javaScript",
            b: "terminal/bash",
            c: "console log",
            d: "dev tools"
        },
        correctAnswer: "d"
    },

    {
        question: "Which one of these is a JavaScript package manager?",
        choices: {
            a: "node.js",
            b: "typeScript",
            c: "npm",
            d: "bootstrap"
        },
        correctAnswer: "c"
    }
];

function checkCorrectAnswer(event) {
    console.log('checking answer');
    var userChoice = event.target.id;
    var questionIndex = event.target.getAttribute('questionId');
    var submitResponse = document.querySelector('.quizAnswer');

    console.log(userChoice);
    console.log(questionIndex);

    var question = questions[questionIndex];
    var correctAnswer = question.correctAnswer;

    console.log(correctAnswer)

    if (userChoice === correctAnswer) {
        submitResponse.innerHTML = 'Correct!';
    } else {
        submitResponse.innerHTML = 'Wrong!';
    }
}

function displayQuestion(questionIndex) {
    var questionEl = document.querySelector('.question');
    var answerEl = document.querySelector('.answer ul');

    var question = questions[questionIndex].question;
    var choices = questions[questionIndex].choices;

    questionEl.innerHTML = question;

    for (const [key, value] of Object.entries(choices)) {
        var listItem = document.createElement('li');
        var listItemLink = document.createElement('a');
        var listItemButton = document.createElement('button');
        listItemButton.setAttribute('id', key)
        listItemButton.setAttribute('questionId', questionIndex)

        listItemLink.appendChild(listItemButton);
        listItem.appendChild(listItemLink);
        answerEl.appendChild(listItem);

        listItemButton.addEventListener("click", checkCorrectAnswer);

        listItemButton.innerHTML = key.toUpperCase() + ": " + value;
    }
}

displayQuestion(0);