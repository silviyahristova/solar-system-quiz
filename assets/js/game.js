const startButton = document.querySelector(".start-btn");
const rulesBox = document.querySelector(".rules-box");
const exitButton = document.getElementById('exit-btn');
const main = document.getElementById('main');
const continueButton = document.getElementById('continue-btn');
const quizBox = document.getElementById('quiz-box');
const nextButton = document.getElementById('next-button');
const restartButton = document.getElementById('restart-button');
const answerList = document.querySelector(`.answers-list`)



let questionCount = 0;
let maxQuestions = 10;
let questionNumb = 1;
let username;

startButton.onclick = () => {
    rulesBox.classList.add('active');
    main.classList.add('active');
}

exitButton.onclick = () => {
    rulesBox.classList.remove('active');
    main.classList.remove('active');
}

continueButton.onclick = () => {
    quizBox.classList.add('active');
    rulesBox.classList.remove('active');
    main.classList.remove('active');
    showQuestion(0);
    questionCounter(1);
}

nextButton.onclick = () => {
    if(questionCount < myQuestions.length -1){
    questionCount++;
    showQuestion(questionCount);

    questionNumb++;
    questionCounter(questionNumb);

    }else{
        console.log('Questions Completed!')
    }
}

restartButton.onclick = () => {
    quizBox.classList.add('active');
    rulesBox.classList.remove('active');
    main.classList.remove('active');
}

//question and option function

function showQuestion(index) {
    const questionText = document.getElementById('question-text');
    questionText.textContent = `${myQuestions[index].questionNumber}. ${myQuestions[index].questionText}`;
    
    let optionTag = `<div class="answer-button"><span>${myQuestions[index].options[0]}</span></div>
    <div class="answer-button"><span>${myQuestions[index].options[1]}</span></div>
    <div class="answer-button"><span>${myQuestions[index].options[2]}</span></div>
    <div class="answer-button"><span>${myQuestions[index].options[3]}</span></div>`;

    answerList.innerHTML  = optionTag;
}

function questionCounter (index) {
    const questionTotal = document.querySelector('.count-question');
    questionTotal.textContent = `Question ${index} of ${maxQuestions}`;
}