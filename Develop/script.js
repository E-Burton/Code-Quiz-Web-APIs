// VARIABLE DECLARATIONS
var quizQuestions = document.getElementById("quiz-questions");
var start = document.getElementById("start");
var quizTitle = document.getElementById("question-title");
var choiceTag = document.getElementById("choices");
var timer = document.getElementById("timer");
// var time = questions.length * 15;
var currentIndex = 0;

var score = 0;
var questions = [
    {q: "Inside which HTML element do we put our JavaScript?",
     c: ["<js>", "<scripting>", "<script>", "<javascript>"],
     a: "<script>"},
    {q: "What is the correct syntax for referring to an external script called 'abc.js'?",
     c: ["<script href='abc.js'>", "<script src='abc.js'>", "<script name='abc.js'>", "None of the above"],
     a: "<script src='abc.js'>"},
    {q: "Which of the following best decribes JavaScript", 
     c: ["An object-oriented scripting language.", "A compiled scripting language.", "A scripting language precompiled in the browser.", "A low-level programming language."],
     a: "An object-oriented scripting language."},
    {q: "Using a(n) ________ statement is how you test for a specific condition.", 
     c: ["select", "for", "switch", "if"], 
     a: "if"},
     {q: "What is meant by the 'this' keyword?", 
      c: ["It is a variable which contains value", "It refers to the previous object", "It refers to the current object", "Not of the above"], 
      a: "It refers to the current object"}
]

function startfunction() {
    quizQuestions.setAttribute("class", "hide");
    quizTitle.removeAttribute("class");
    timer.textContent = time;
    startQuestions();
}

function startQuestions() {
    var cq = questions[currentIndex];
    quizTitle.textContent = cq.q;
    choiceTag.innerHTML = "";
    cq.c.forEach(function(choice, i) {
        var choiceButton = document.createElement("button");
        choiceButton.setAttribute("class", "c");
        choiceButton.setAttribute("value", choice);
        choiceButton.textContent = i + 1 + " " + c;
        choiceButton.onclick = answerEval;
        choiceTag.appendChild(choiceButton);
    })
}

function timerClock() {
    time--;
    timer.textContent = time;
    if (time <= 0) {
        quizEnded();
    }
}

// STILL NEED TO COMPLETE:
// write quizended() function
// write answerEval() function
// store score in local storage (need set item and get item for this)
// create highscorces html file
