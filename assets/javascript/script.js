
var startQuizBtn = document.querySelector("#startquiz")
var startQuestion = document.querySelector('#start-question')
var questionNumber = 1
var timeLeft = 90 
var currentQuestion;
var lastQuestion;
var startTimer

function displayQuiz(){
    console.log("clicked")
    startQuestion.classList.add("hidden")
    displayQuestion()
    timeLeft=90
     startTimer = setInterval(function(){
        if (timeLeft<=0){
            clearInterval(startTimer)
            currentQuestion.classList.add("hidden")
            document.getElementById("timer").innerHTML="Times Up"
            endQuiz()
        }
        else{
            document.getElementById("timer").innerHTML= timeLeft + " sec"
        }
        timeLeft --
    }, 1000)
}

function displayQuestion(){
    if(questionNumber <=5){
         currentQuestion = document.getElementById("question-" + questionNumber)
        console.log (currentQuestion)
        currentQuestion.classList.remove("hidden")
    }
    else{
        endQuiz()
    }
}


function hideQuestions(){
     lastQuestion = document.getElementById("question-" + (questionNumber -1))
    lastQuestion.classList.add("hidden")
}

function checkAnswer(correct){
    if(correct){
        alert("This is Correct")
        questionNumber++
        displayQuestion()
        hideQuestions()
    }
    else{
        alert("This is Wrong")
        var penalty = 5 
        timeLeft= timeLeft - penalty
        questionNumber++
        displayQuestion()
        hideQuestions()
    }
}
function endQuiz(){
    var showEnd = document.getElementById("end")
    showEnd.classList.remove("hidden")
    clearInterval (startTimer)
    document.getElementById("score").innerHTML = timeLeft
}
startQuizBtn.addEventListener("click",displayQuiz)