# Homework-4

# Purpose of Assignment 

Create a quiz about Javascript using a variety of Javascript functions and methods.

# What I Did and Why

Lines 1-15: Creates and defines static variables. 

Lines 17-19: Creates and defines variables that will change.

Line 21: Creates the myStorage variable and defines it as gameDetails, which it pulls from localStorage.

Lines 23-27: Ensures that if there is nothing in localStorage yet, an empty array is created. If there is something in localStorage, carry on as normal. 

Lines 29-41: Declares the setTime function and tells it to set an interval, make the secondLeft countdown, put text "Time: " in front of it, and if secondsLeft reaches 0, stop the timer and call the endGame function. 

Lines 43-47: Tells the application that when the startBtn is clicked, leave homePage, display questionsPage, and call the startGame function. 

Lines 49-147: Creates the questions array and establishes its contents - each question, each set of answers, and which answers are right/wrong.

Lines 149-155: Declares the endGame function and tells it to, through the HTML, display finalScore using secondsLeft; leaves questionsPage; remove answerAlert; display finalScoresPage; and call the clearInterval function, stopping the timer. 

Lines 157-177: Declares the answerHandler function and gives it an event variable. Inside the function -- creates and answerClicked variable and tells it to target the correct pieces of the dataset. When there is an answer clicked, increase questionCounter so that it moves onto the next question. If answerClicked in true, display a 'Correct!' alert. If answerClicked is false, display an 'Incorrect!' alert and deduct 10 from secondsLeft. In both circumstances, if questions.Length has not been met, call the showQuestion function in order to move on. If it has been met, call the endGame function. 

Lines 179-185: Declares the showQuestion function and tells it to, through the HTML, make questionsPage display each question in the question counter in an h2 tag and do the same with the answers in button tags, watching for correct status and content. 

Lines 187-193: Declares the renderLocalStorage function. Tells it to retrieve gameDetails from localStorage and parse. Creates a scoreData variable and defines it as these parsed gameDetails or as an empty array (in case there are no gameDetails yet). Through the HTML, tells scoreDisplay to display the intials and score recorded in scoreData.

Lines 195-207: Tells submitBtn to listen for a click. In the event of a click, prevent automatic refresh with the preventDefault function. Leave finalScorePage and display highscoresPage. Create the local scoreDisplay variable and equate it with secondsLeft. Make local variable gameDetails an object which includes the value of initials and scoreDisplay. Add gameDetails to myStorage. Set and stringify myStorage in localStorage to include gameDetails. Call renderLocalStorage function.

Lines 209-213: Tells backBtn to listen for a click. In the event of a click, leave highscoresPage, return to homePage, and reload. 

Lines 215-218: Tells clearBtn to listen for a click. In the event of a click, clear myStorage from localStorage. Call renderLocalStorage function. 

Lines 220-223: Declares the startGame function. Calls the showQuestion function so that the questions appear. Calls the setTime function so that the timer starts. 

Lines 225-231: Tells scoresLink to listen for a click. In the event of a click, leave homePage, questionsPage, or finalScorePage and display highscoresPage. Calls the renderLocalStorage function. 

# Screenshot

?/.screenshot.png

# Link to deployed application 

https://melanieuhrich.github.io/Homework-4/#highscoresPage 