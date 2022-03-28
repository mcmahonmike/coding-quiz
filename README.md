# coding-quiz

## Overview

Here is a JavaScript quiz game that is built using JavaScript and web API's that generate a series of 5 multiple choice questions that must be answered in a 60 second time frame.
With each correct answer a point is added to the score counter at the top of the page, and for each wrong answer, the time is reduced by 10 seconds.

## Page Functionality

When the user loads the page they are given a the title "JavaScript Coding Quiz", a brief description of the game and the rules, and below is a "START QUIZ" button that initiates the start of the quiz.
After the user clicks on the "START QUIZ" button, the questions begin and the time counter at the top of the page begins counting down from 60.
When the user clicks a correct answer, a window prompt alerts the user that the answer chosen was correct then it adds a single point to the score counter at the top of the page.
If the user selects an incorrect answer, another window prompt is displayed that alerts the user that the answer was incorrect and reduces the time by 10 seconds.
Once the game is completed or the time has run out, a window prompt asks the user to imput their initials, once the initials have been submitted, a final window prompt will ask the user if they would like to play again. If the user clicks 'ok', the game will reload.

## HTML
![javaScript-quiz](https://user-images.githubusercontent.com/98231043/160306699-7efd92bb-dd9d-4070-a1be-32c09ab4011f.jpg)

As you can see in the HTML I have a simple build with `id="flex-container"` applied to the `<main>` element to wrap the content of the quiz. As well as adding id attributes to the `span`, `<h1>`, `<p>` and `<div>` elements to be called in the game.js file.

## JavaScript
![javaScript-quiz_javaScript_file](https://user-images.githubusercontent.com/98231043/160307103-d1f61bb5-b3da-44ae-ada2-189beefe7c95.jpg)
The JavaScript above is laid out as follows:

### Global Variables
At the top of the file is where all of the global variables for the code quiz are built, variables in the lines 1-9 are used as either `document.querySelector` or `getElementById` to access the elements in the HTML.
While lines 10-15 (except line 13) are declared variables to be used for other functions through out the page.
On line 17 is where the questions array `var questionsArray` is built for creating the questions to be run on the quiz.

### Functions
* var createQuestions


At line 63 is where the first function `var createQuestions` is declared. This function is used to generate the questions for the quiz, as well as removing the quiz title, description and START QUIZ button.
This function is also used for adding event listeners on to the answer buttons that were created, which add a 'click' listener and run the `answerAction` function.

* var answerAction

The function `var answerAction` is the function used to for alerting the user if the question they have chosen is correct or incorrect with the if statement on lines 106-107. 
If the answer is correct line 109 runs `score++` to add a point to the user score and line 110 runs `scoreEl.innerText = score` to add the point to the score counter on the top of the page.
Finally the else statement will run if the user chooses the incorrect answer, which will provide an alert letting the user know that the answer is wrong then on line 115 it runs `time-= 10` to reduce the time by 10 seconds.

* function startTimer

This function is used to create the countdown timer by assigning the `setInterval(function()` with `time--` to have the time countdown, into the variable `intervalID`
The next logic that is run is an if statement that `if (time === 0)` the quiz will finish running.

* var finishQuiz 

The function finishQuiz is used to provided the final prompts once the quiz has been completed. Giving two prompts, with the first asking the user to input their intials for the highscores page followed by asking the user if they wish to play again.
Then an `if (playAgain)` statement on line 145 to run if the user confirms which will run `window.location.reload()` to reload the page.

* function startQuiz

The final function to run on the page is `startQuiz` which will run the `createQuestions` function and the `startTimer` function to intiate the starting functions of the quiz.

The final line on the JavaScript is `buttonEl.addEventListener('click', startQuiz)` which adds an event listener to the START QUIZ button and will initiate the startQuiz function and begin the game.

## Bugs and Functionality Issues to be Resolved

There a few unfinshed bugs and assignment requirements missing from the quiz.
* Issue #1

If the user successfully completes the quiz before the 60 seconds the game will not end until the time has run out. Possible fixes will be to make an if statement in one of the functions to make it so that if `questionsArray < 0` then the quiz should end.

* Issue #2

There was no highscores page created. Had run out of time before the assignment was due to complete the highscores page and store them into the Local Storage. Posssible fixes will require further learning in how to properly store the inputed dated into a seperate highscores HTML page.

## Link to Code Quiz:
https://mcmahonmike.github.io/coding-quiz/


