// VARIABLE DECLARATIONS
var quizQuestions = document.getElementById("quiz-questions");
var start = document.getElementById("start");
var quizTitle = document.getElementById("question-title");
var choiceTag = document.getElementById("choices");
var timerEl = document.getElementById("timer");

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
      c: ["It is a variable which contains value", "It refers to the previous object", "It refers to the current object", "None of the above"], 
      a: "It refers to the current object"}
]

var timeLeft = questions.length * 15;
var currentIndex = 0;
var score = 0;

// Adding event lister to 'Start Quiz' button and executing startQuiz() on click
start.addEventListener("click", startQuiz);

// Starting quiz - calling startQuestions and timerClock functions and hiding 'Start Quiz' button
function startQuiz() {
    start.style.visibility = "hidden";
    startQuestions();
    timerClock();
}

// Creating timer and decrementing by 1 second
function timerClock() {
    var timerInterval = setInterval(function() {
        timeLeft--;
        timerEl.textContent = "TIME: " + timeLeft;

        // End timerInterval once timeLeft is less than or equal to zero and call quizEnded()
        if(timeLeft <= 0) {
            clearInterval(timerInterval);
            quizEnded();
        }
    }, 1000);
}

// Display quiz questions and choices
function startQuestions() {
    var currentQuestion = questions[currentIndex];
    quizQuestions.setAttribute("class", "question-align"); // Changing content alignment for quizQuestions section (i.e. #quiz-questions)
    quizTitle.textContent = currentQuestion.q; // Setting quizTitle content to current index in questions array
    choiceTag.textContent = ""; // Setting choiceTag content to empty string
    // Creating buttons for all answer choices for current question
    currentQuestion.c.forEach(function(choice, i) {
        var choiceButton = document.createElement("button");
        choiceButton.setAttribute("class", "btn btn-info");
        choiceButton.style.marginBottom = "4px";
        choiceButton.textContent = i + 1 + ": " + choice; // Setting content of choiceButton to display the current choice array index and value
        choiceTag.appendChild(choiceButton); // Adding choiceButton to HTML document
        choiceTag.appendChild(document.createElement("br"));; // Creating and appending line break between choiceButtons's

        // Evaluating if user answer is correct or incorrect when choiceButton is clicked for current question
        choiceButton.onclick = function answerEval() {
            var evaluation = document.createElement("p"); // Creating <p> tag
            if (questions[currentIndex].c[i] === questions[currentIndex].a) {
                evaluation.textContent = "Correct!";
                choiceTag.appendChild(document.createElement("hr")); // Creating and appending horizontal line between choiceButton's and evaulation <p> tag
                choiceTag.appendChild(evaluation); // Appending evulation <p> tag to HTML document
                score += 1; // Increment score by 1 point if user's answer matches correct answer
                setTimeout(nextQuestion, 1000); // Call nextQuestion function after 1 second
            } else {
                evaluation.textContent = "Incorrect.";
                choiceTag.appendChild(document.createElement("hr"));
                choiceTag.appendChild(evaluation);
                timeLeft -= 10; // Decrement timeLeft by 10 seconds if user's answer is incorrect
                setTimeout(nextQuestion, 1000);
            }
        };
    })
}

// Display next question once status of user's answer is displayed (i.e. correct or incorrect) 
function nextQuestion() {
    // If currentIndex is less than length of quiz questions increment currentIndex by 1 and call startQuestions function to display the next question in array
    if (currentIndex < questions.length - 1) {
        currentIndex += 1;
        startQuestions();
    } else {
        quizEnded(); // If all questions have been displayed call quizEnded function
    }
}

console.log("The user's current score is: " + score);

// STILL NEED TO COMPLETE:
// write quizended() function
// store score in local storage (need set item and get item for this)
// create highscorces html file


