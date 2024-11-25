const startButton = document.querySelector(".start-btn");
const rulesBox = document.querySelector(".rules-box");
const exitButton = document.getElementById('exit-btn');
const main = document.getElementById('main');
const continueButton = document.getElementById('continue-btn');
const quizBox = document.getElementById('quiz-box');


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
}
