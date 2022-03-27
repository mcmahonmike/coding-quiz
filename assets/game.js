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
        question: "What?",
        answer1: "t",
        answer2: "m",
        answer3: "m",
        answer4: "f",
        correctAnswer: "t"
    },
    {
        question: "Why?",
        answer1: "s",
        answer2: "d",
        answer3: "m",
        answer4: "f",
        correctAnswer: "d"
    },
    {
        question: "Why?",
        answer1: "s",
        answer2: "d",
        answer3: "m",
        answer4: "f",
        correctAnswer: "d"
    },
    {
        question: "Why?",
        answer1: "s",
        answer2: "d",
        answer3: "m",
        answer4: "f",
        correctAnswer: "d"
    },   
    
]



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

var answerAction = function (event) {
    event.stopPropagation()
    event.preventDefault()
    var answerClicked = event.target.innerText
   
    questionIndex++
    
    if (answerClicked === questionsArray[questionIndex-1].correctAnswer){
        window.alert('correct')
        score++
        scoreEl.innerText = score
        
    } else {
        window.alert('wrong')
        time -= 10
       
    }
    startQuiz()
    
        
    }
function startTimer() {
    intervalID = setInterval(function() {
        time--
        countdownEl.innerText = time
        if (time === 0) {
          finishQuiz()
        }
      }, 1000)
    }
   

    
var finishQuiz = function () {
    clearInterval(intervalID)
    var initials = prompt('What are you initials?')
    var data = { initials: initials, score: score }
    localStorage.setItem('highScore', JSON.stringify(data))
    var playAgain = confirm('Want to play again?')
    if (playAgain) {
      window.location.reload()
    }

}





function startQuiz () {


    if(questionIndex > 0){
        var buttons = document.querySelector('#choicesContainer')
        buttons.remove()
        questionsEl.innerHTML = ''
    }
   
createQuestions();
startTimer();
}



buttonEl.addEventListener('click', startQuiz)