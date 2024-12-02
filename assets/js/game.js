const startButton = document.querySelector(".start-btn");
const rulesBox = document.querySelector(".rules-box");
const exitButton = document.getElementById('exit-btn');
const main = document.getElementById('main');
const continueButton = document.getElementById('continue-btn');
const quizBox = document.getElementById('quiz-box');
const nextButton = document.querySelector('.next-btn');
const restartButton = document.getElementById('restart-button');
const answerList = document.querySelector(`.answers-list`)

let questionCount = 0;
let maxQuestions = 10;
let questionNumb = 1;
let username = document.getElementById("name-input");
let userScore = 0;

startButton.onclick = () => {
    window.addEventListener("username", (event)=> {
        event.preventDefault();
        scrollToTop();

        function scrollToTop() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }
    })
    // user name
    if (username.value === "") {
        alert(`Please enter your name to play!`);
    } else {
        rulesBox.classList.add('active');
        main.classList.add('active'); ;
    };
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
    countScore();
}

nextButton.onclick = () => {
    if(questionCount < myQuestions.length -1){
    questionCount++;
    showQuestion(questionCount);

    questionNumb++;
    questionCounter(questionNumb);

    nextButton.classList.remove('active');

    }else{
        console.log('Questions Completed!')
    }
}

restartButton.addEventListener('click', function () {
    window.location.reload();
});

//question and option function
// Shuffle the questions array
function shuffleArray(arr) {
    let currentIndex = arr.length, randomIndex, temporaryValue;

    // While there are elements to shuffle
    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // Swap elements
        temporaryValue = arr[currentIndex];
        arr[currentIndex] = arr[randomIndex];
        arr[randomIndex] = temporaryValue;
    }

    return arr;
}

// Limit the number of questions to 10
let shuffledQuestions = shuffleArray([...myQuestions]).slice(0, 10);

let currentQuestionIndex = 0;

// Show question and answers
function showQuestion(index) {
    if (index >= shuffledQuestions.length) {
        alert("You have completed the quiz!");
        return;
    }

    const questionText = document.getElementById('question-text');
    const currentQuestion = shuffledQuestions[index];
    questionText.textContent = `${currentQuestion.questionText}`;

    // Shuffle the options for the current question
    const shuffledOptions = shuffleArray([...currentQuestion.options]);

    // Shuffle options
    let optionTag = shuffledOptions.map(option => {
        return `<div class="answer-button"><span>${option}</span></div>`;
    }).join('');

    answerList.innerHTML = optionTag;

    // Add event listeners to the answer buttons
    const answerButtons = document.querySelectorAll('.answer-button');
    answerButtons.forEach(button => {
        button.addEventListener('click', () => answerSelected(button, index));
    });
}

function answerSelected(answer, index) {
    const currentQuestion = shuffledQuestions[index];
    const userAnswer = answer.textContent.trim();
    const correctAnswer = currentQuestion.options[currentQuestion.correctAnswer];

    // Check if the selected answer is correct
    if (userAnswer === correctAnswer) {
        answer.classList.add('correct');
        let sound = new Audio('assets/sound/correct-answer.mp3');
        sound.play();
        userScore += 1;
        countScore();
    } else {
        answer.classList.add('incorrect');
        let sound = new Audio('assets/sound/wrong-answer.mp3');
        sound.play();
        // Highlight the correct answer
        const answerButtons = document.querySelectorAll('.answer-button');
        answerButtons.forEach(button => {
            if (button.textContent.trim() === correctAnswer) {
                button.classList.add('correct');
            }
        });
    }

    // Disable all options after selecting an answer
    const allAnswers = answerList.children.length;
    for (let i = 0; i < allAnswers; i++) {
        answerList.children[i].classList.add('disabled');
    }

    nextButton.classList.add('active');
}

// Show the first question
showQuestion(currentQuestionIndex);

// Move to next question
function nextQuestion() {
    if (currentQuestionIndex < shuffledQuestions.length - 1) {
        currentQuestionIndex++;
        showQuestion(currentQuestionIndex);
    } else {
        alert('You have completed the quiz!');
    }
}

function questionCounter (index) {
    const questionTotal = document.querySelector('.count-question');
    questionTotal.textContent = `Question ${index} of ${maxQuestions}`;
}

function countScore() {
    const countScoreText = document.querySelector('.score-box');
    countScoreText.textContent = `${userScore}`;
}