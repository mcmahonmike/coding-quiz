//Global Variables
var gameContainer = document.querySelector('#flex-container')
var questionsEl = document.querySelector('#quiz-questions')
var answersEl = document.getElementById('answer-btns')
var buttonEl = document.querySelector('#start-button')
var quizDescription = document.querySelector('#description')
var answerAlert = document.createElement('div')
//answerAlert.setAttribute('class', 'answers')
var countdownEl = document.getElementById('countdown')
var startTime = 60
var time = startTime
var score = 0
var scoreEl = document.getElementById('score')
var questionIndex = 0
var intervalID
//Quiz Questions Array
var questionsArray = [
    {
        question: "What is the proper syntax for an array?",
        answer1: "[ ] square brackets",
        answer2: "{ } curly brackets",
        answer3: "( ) parenthesis",
        answer4: "= = double equals",
        correctAnswer: "[ ] square brackets"
    },
    {
        question: "Which is not an example of primitive data?",
        answer1: "String",
        answer2: "Boolean",
        answer3: "Number",
        answer4: "Function",
        correctAnswer: "Function"
    },
    {
        question: "What does parseInt() execute?",
        answer1: "Converts strings to integers",
        answer2: "Converts numbers to strings",
        answer3: "Converts integers to strings",
        answer4: "None of the above",
        correctAnswer: "Converts strings to integers"
    },
    {
        question: "How can you generate a new element with JavaScript?",
        answer1: ".getElementById",
        answer2: ".querySelector",
        answer3: ".setAttribute",
        answer4: ".createElement",
        correctAnswer: ".createElement"
    },
    {
        question: "Where must global variables be declared?",
        answer1: "Inside the function",
        answer2: "Outside the function",
        answer3: "Both are true",
        answer4: "Neither is true",
        correctAnswer: "Outside the function"
    },   
    
]

//Function to generate questions and create answer buttons 

var createQuestions = function (){
 questionsEl.innerText = questionsArray[questionIndex].question
 var choicesContainer = document.createElement('div')
 choicesContainer.setAttribute('id', 'choicesContainer')
 buttonEl.setAttribute('class', 'hide' )
 quizDescription.setAttribute('class', 'hide')
 var btnA = document.createElement('button')
 var btnB = document.createElement('button')
 var btnC = document.createElement('button')
 var btnD = document.createElement('button')
 btnA.innerText = questionsArray[questionIndex].answer1
 btnB.innerText = questionsArray[questionIndex].answer2
 btnC.innerText = questionsArray[questionIndex].answer3
 btnD.innerText = questionsArray[questionIndex].answer4

 btnA.className = 'choices'
 btnB.className = 'choices'
 btnC.className = 'choices'
 btnD.className = 'choices'


 choicesContainer.appendChild(btnA)
 choicesContainer.appendChild(btnB)
 choicesContainer.appendChild(btnC)
 choicesContainer.appendChild(btnD)

 answersEl.appendChild(choicesContainer)

 btnA.addEventListener('click', answerAction)
 btnB.addEventListener('click', answerAction)
 btnC.addEventListener('click', answerAction)
 btnD.addEventListener('click', answerAction)
 
}

//Function for event listeners on the answer buttons
var answerAction = function (event) {
    event.stopPropagation()
    event.preventDefault()
    var answerClicked = event.target.innerText
   //generates the next question in the question array once a button has been clicked
    questionIndex++
    //if statement for if the selected answer is correct
    if (answerClicked === questionsArray[questionIndex-1].correctAnswer){
        window.alert('Correct!')
        //adds a point the score counter if answer is correct
        score++
        scoreEl.innerText = score
        //else function if answer is incorrect
    } else {
        window.alert('Incorrect!')
        //subtraction of 10 seconds from the quiz timer
        time -= 10
       
    }
    
    startQuiz()
    
        
    }

    //function to start the count down timer
function startTimer() {
    intervalID = setInterval(function() {
        time--
        countdownEl.innerText = time
        if (time === 0) {
          finishQuiz()
        }
      }, 1000)
    }
   

//function to run once the quiz has been completed    
var finishQuiz = function () {
    clearInterval(intervalID)
    var initials = prompt('What are you initials?')
    //object for the initials and score
    var data = { initials: initials, score: score }
    //storing the object and converting it to a string in local storage
    localStorage.setItem('highScore', JSON.stringify(data))
    var playAgain = confirm('Want to play again?')
    if (playAgain) {
      window.location.reload()
    }

}




//start quiz function that will clear the intial page and run the createQuestions and startTimer function
function startQuiz () {


    if(questionIndex > 0){
        var buttons = document.querySelector('#choicesContainer')
        buttons.remove()
        questionsEl.innerHTML = ''
    }
   
createQuestions();
startTimer();
}


//event listener added to start button tho initiate the startQuiz function and start the quiz
buttonEl.addEventListener('click', startQuiz)