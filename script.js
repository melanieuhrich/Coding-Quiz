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
var finalScore = document.querySelector(".finalScore");
var scoreDisplay = document.querySelector("#scoreDisplay");
var question = document.querySelector(".question");
var initials = document.querySelector("#initialsInput");
var scoresLink = document.querySelector("#scoresLink");

var secondsLeft = 100;
var questionCounter = 0;
var timerInterval

var myStorage = JSON.parse(localStorage.getItem("gameDetails"));

if (myStorage === null) {
    myStorage = []
} else {
    myStorage = JSON.parse(localStorage.getItem("gameDetails"));
}
console.log(myStorage);
// localStorage.clear(myStorage);
//  var score = {
//      finalScore: finalScore.value
//  }

// localStorage.getItem("score");

// scoreDisplay.textContent = score;

function setTime() {
    timerInterval = setInterval(function() {
        secondsLeft--;
        timer.textContent = "Time: " + secondsLeft;

        if(secondsLeft === 0) {
            clearInterval(timerInterval);
            endGame();
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
    clearInterval(timerInterval);
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

// function answerHandler(event) {
//     var answerClicked = event.target.dataset.correct
//     console.log('answerClicked', answerClicked)
//     questionCounter++;
//     if (answerClicked === 'true') {
//         answerAlert.textContent = "Correct!"
//       if (questionCounter != questions.length) {
//         showQuestion()
//       } else {
//         endGame()
//       }
//     } else if (answerClicked == 'false') {
//         secondsLeft = secondsLeft - 10;
//       answerAlert.textContent = "Incorrect!"
//       if (questionCounter != questions.length) {
//         showQuestion()
//       } else {
//         endGame()
//       }
//     }
//   }


function showQuestion() {
    questionsPage.innerHTML = `<h2>${questions[questionCounter].question}</h2>
    <button data-correct=${questions[questionCounter].answerA.correct} onclick=answerHandler(event)>${questions[questionCounter].answerA.content}</button>
    <button data-correct=${questions[questionCounter].answerB.correct} onclick=answerHandler(event)>${questions[questionCounter].answerB.content}</button>
    <button data-correct=${questions[questionCounter].answerC.correct} onclick=answerHandler(event)>${questions[questionCounter].answerC.content}</button>
    <button data-correct=${questions[questionCounter].answerD.correct} onclick=answerHandler(event)>${questions[questionCounter].answerD.content}</button>`

}

function renderLastRegistered() {
    console.log(JSON.parse(localStorage.getItem("gameDetails")));
    var scoreData = JSON.parse(localStorage.getItem("gameDetails")) || [];
    // for (i=0; i<scoreData.length; i++) {
        console.log("score.details");
        scoreDisplay.innerHTML = `
        ${scoreData.map(score => `<p> ${score.initials} - ${score.score} </p>`).join("")}`
    // }
    
}

submitBtn.addEventListener("click", function(event){
    event.preventDefault();
    finalScorePage.style.display = "none";
    highscoresPage.style.display = "block";
    console.log(initials.value);
    var scoreDisplay = secondsLeft;
    var gameDetails = {
        initials: initials.value,
        score: scoreDisplay
    }
    myStorage.push(gameDetails);
    console.log(gameDetails);
    localStorage.setItem("gameDetails", JSON.stringify(myStorage));
    renderLastRegistered()
    // scoreDisplay.textContent = secondsLeft;
    // localStorage.setItem("score", score);
})

backBtn.addEventListener("click", function(){
    highscoresPage.style.display = "none";
    homePage.style.display = "block";
    location.reload();
});

clearBtn.addEventListener("click", function(){
    localStorage.clear(myStorage);
    console.log("working");
    renderLastRegistered();
})


function startGame() {
    finalScorePage.style.display = "none";
    showQuestion();
    setTime();
}

    