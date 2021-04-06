var homePage = document.querySelector("#homePage");
var questionsPage = document.querySelector("#questionsPage");
var finalScorePage= document.querySelector("#finalScorePage");
var highscoresPage = document.querySelector("#highscoresPage");
var timer = document.querySelector("#timer");
var startBtn = document.querySelector("#startBtn");
var submitBtn = document.querySelector("#submitBtn");
var backBtn = document.querySelector("#backBtn");
var clearBtn = document.querySelector("#clearBtn");
var answerAlert = document.querySelector("#answerAlert");
var finalScore = document.querySelector("#finalScore");
var question = document.querySelector(".question");

var secondsLeft = 100;
var questionCounter = 0;

function setTime() {
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timer.textContent = "Time: " + secondsLeft;

        if(secondsLeft === 0) {
            clearInterval(timerInterval);
        }
        

    }, 1000);
}

startBtn.addEventListener("click", function(){
    homePage.style.display = "none";
    questionsPage.style.display = "block";
    startGame()
});

var questions = [

    {
        question: 'Commonly used data types DO NOT include:',
        answerA: {
            content: 'Strings',
            correct: false
        },
        answerB:{
            content: 'Booleans',
            correct: false
        },
        answerC: {
            content: 'Alerts',
            correct: true
        },
        answerD: {
            content: 'Numbers',
            correct: false
        }
    },

    {
        question: 'The condition in an if/else statement is enclosed within:',
        answerA: {
            content: 'Quotes',
            correct: false
        },
        answerB: {
            content: 'Curly brackets',
            correct: false 
        }, 
        answerC: {
            content: 'Parentheses',
            correct: true 
        },
        answerD: {
            content: 'Square brackets',
            correct: false
        }
    },
    {
        question: 'Arrays in Javascript can be used to store:',
        answerA: {
            content: 'Numbers and strings',
            correct: false 
        },
        answerB: {
            content: 'Other arrays',
            correct: false 
        },
        answerC: {
            content: 'Booleans',
            correct: false 
        },
        answerD: {
            content: 'All of the above',
            correct: true 
        }
    },
    {
        question: 'String values must be enclosed within _____ when being assigned to variables.',
        answerA: {
            content: 'Commas',
            correct: false 
        },
        answerB: {
            content: 'Curly brackets',
            correct: false 
        },
        answerC: {
            content: 'Quotes',
            correct: true
        },
        answerD: {
            content: 'Parentheses', 
            correct: false 
        }
    }, 
    {
        question: 'A very useful tool used during development and debugging for printing content to the debugger is:',
        answerA: {
            content: 'Javascript',
            correct: false 
        },
        answerB: {
            content: 'Terminal/bash',
            correct: false 
        },
        answerC: {
            content: 'For loops',
            correct: false 
        },
        answerD: {
            content: 'console.log',
            correct: true 
        }
    }
]

function alertDisplay(truefalse) {
    if (truefalse) {
        alertDisplay.innerHTML = `<hr/>
        <p>Correct!</p>`
    } else {
        alertDisplay.innerHTML = `<hr/>
        <p>Incorrect!</p>`
    }
}

function endGame() {
    finalScore.innerHTML = `Your final score is ${secondsLeft}.`
    questionsPage.style.display = "none";
    answerAlert.style.display = "none";
    finalScorePage.style.display = "block";
}


function answerHandler(event) {
    var answerClicked = event.target.dataset.correct
    console.log('answerClicked', answerClicked)
    questionCounter++;
    if (answerClicked === 'true') {
        answerAlert.textContent = "Correct!"
      if (questionCounter != questions.length) {
        showQuestion()
      } else {
        endGame()
      }
    } else if (answerClicked == 'false') {
        secondsLeft = secondsLeft - 10;
      answerAlert.textContent = "Incorrect!"
      if (questionCounter != questions.length) {
        showQuestion()
      } else {
        endGame()
      }
    }
  }

function showQuestion() {
    questionsPage.innerHTML = `<h2>${questions[questionCounter].question}</h2>
    <button data-correct=${questions[questionCounter].answerA.correct} onclick=answerHandler(event)>${questions[questionCounter].answerA.content}</button>
    <button data-correct=${questions[questionCounter].answerB.correct} onclick=answerHandler(event)>${questions[questionCounter].answerB.content}</button>
    <button data-correct=${questions[questionCounter].answerC.correct} onclick=answerHandler(event)>${questions[questionCounter].answerC.content}</button>
    <button data-correct=${questions[questionCounter].answerD.correct} onclick=answerHandler(event)>${questions[questionCounter].answerD.content}</button>`

}

submitBtn.addEventListener("click", function(event){
    event.preventDefault();
    finalScorePage.style.display = "none";
    highscoresPage.style.display = "block";
})




function startGame() {
    finalScorePage.style.display = "none";
    // setTime();
    showQuestion();
}

    setTime();