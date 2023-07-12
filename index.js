const data = [{
    question: "Which country is hosting ICC Cricket World Cup 2023 ?",
    a: "India",
    b: "South Africa",
    c: "England",
    d: "Australia",
    correct: "a",
},{
    question: "Who is the Prime Minister of United Kingdom ?",
    a: "Joe Biden",
    b: "Emmanuel Macron",
    c: "Vladimir Putin",
    d: "Rishi Sunak",
    correct: "d",
}, {
    question: "What is the S.I unit of Magnetic Flux ?",
    a: "Tesla",
    b: "Weber",
    c: "Henry",
    d: "Siemens",
    correct: "b",
}, {
    question: " 'Pulmonology' is called the study of ?",
    a: "Lungs",
    b: "Lymph",
    c: "Brain",
    d: "Liver",
    correct: "a",
}, {
    question: "'Kalahari Desert' is situated in which continent ?",
    a: "Asia",
    b: "Africa",
    c: "North America",
    d: "South America",
    correct: "b",
}, ];

var question = document.getElementById("question");
var btn0 = document.getElementById("btn0");
var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");
var btn3 = document.getElementById("btn3");

var currentDataIndex = 0;
var totalMark = 0;
var currentQuestionNumber = 0;

function loadQuiz() {
    if(currentQuestionNumber === data.length) {
        showScores();
    } else {
    var quizData = data[currentDataIndex];
    question.innerText = quizData.question;

    btn0.innerText = quizData.a;
    btn1.innerText = quizData.b;
    btn2.innerText = quizData.c;
    btn3.innerText = quizData.d;
    }
}

loadQuiz();
showProgress();


function clickButtonOne() {
    var quizData = data[currentDataIndex];
    if(btn0.value === quizData.correct) {
        totalMark += 1;
    } 
    currentDataIndex++;
    loadQuiz();
    showProgress();
}

function clickButtonTwo() {
    var quizData = data[currentDataIndex];
    if(btn1.value === quizData.correct) {
        totalMark += 1;
    } 
    currentDataIndex++;
    loadQuiz();
    showProgress();
}

function clickButtonThree() {
    var quizData = data[currentDataIndex];
    if(btn2.value === quizData.correct) {
        totalMark += 1;
    } 
    currentDataIndex++;
    loadQuiz();
    showProgress();
}

function clickButtonFour() {
    var quizData = data[currentDataIndex];
    if(btn3.value === quizData.correct) {
        totalMark += 1;
    } 
    currentDataIndex++;
    loadQuiz();
    showProgress();
}

function showProgress() {
    currentQuestionNumber = currentDataIndex + 1;
    var element = document.getElementById("progress");
    element.innerText = "Question " + currentQuestionNumber + " of " + data.length;
   
}

function showScores() {
    var gameOverHTML = "<h1>Result</h1>";
    gameOverHTML += "<h2 id='score'> Your scores: " + totalMark + " <br> and mark percentage is: "+(totalMark/data.length*100)+"%"+"</h2>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;
}  