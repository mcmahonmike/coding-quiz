//Global Variables
var gameContainer = document.querySelector('#flex-container')
var questionsEl = document.querySelector('#quiz-questions')
var answersEl = document.getElementById('answer-btns')
var buttonEl = document.querySelector('#start-button')
var quizDescription = document.querySelector('#description')
var answerAlert = document.createElement('div')
answerAlert.setAttribute('class', 'answers')
var startTime = 60
var time = startTime
var questionIndex = 0
var intervalID
var questionsArray = [
    {
        question: "What is the proper syntax for an array?",
        answer1: "[ ] square brackets",
        answer2: "{ } curly brackets",
        answer3: "( ) parenthesis",
        answer4: "= = double equals",
        correctAnswer: "[ ] square brackets",
    },
    {
        question: "What?",
        answer1: "t",
        answer2: "m",
        answer3: "m",
        answer4: "f"
    },
    {
        question: "Why?",
        answer1: "s",
        answer2: "d",
        answer3: "m",
        answer4: "f"
    }
       
    
]

// buttonEl.addEventListener('click', function(){
//     var h1 = document.getElementById('quiz-questions')
//     h1.innerText = "Question #1"
//     var answersList = document.getElementById('answer-btns')
//     answersList = document.createElement('ol')
// })


var createQuestions = function (){
 questionsEl.innerText = questionsArray[questionIndex].question
 var btnA = document.createElement('button')
 var btnB = document.createElement('button')
 var btnC = document.createElement('button')
 var btnD = document.createElement('button')
 btnA.innerText = questionsArray[questionIndex].answer1
 btnB.innerText = questionsArray[questionIndex].answer2
 btnC.innerText = questionsArray[questionIndex].answer3
 btnD.innerText = questionsArray[questionIndex].answer4

 answersEl.appendChild(btnA)
 answersEl.appendChild(btnB)
 answersEl.appendChild(btnC)
 answersEl.appendChild(btnD)

 btnA.addEventListener('click', answerAction)
 btnB.addEventListener('click', answerAction)
 btnC.addEventListener('click', answerAction)
 btnD.addEventListener('click', answerAction)
 
}

var answerAction = function (event) {
    var answerClicked = event.target.innerText
    if (answerClicked === questionsArray[questionIndex].correctAnswer){
        
        
    }
    
    
        
    }
    

//}



function startQuiz () {
    var clear = document.querySelector('#flex-container')
    clear.removeChild(buttonEl)
    var remove = document.querySelector('#answer-btns')
    remove.removeChild(quizDescription)
    

createQuestions();
}

//startQuiz()

buttonEl.addEventListener('click', startQuiz)