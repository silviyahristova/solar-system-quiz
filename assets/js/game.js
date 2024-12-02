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

function showQuestion(index) {
    const questionText = document.getElementById('question-text');
    questionText.textContent = `${myQuestions[index].questionNumber}. ${myQuestions[index].questionText}`;
    
    let optionTag = `<div class="answer-button"><span>${myQuestions[index].options[0]}</span></div>
    <div class="answer-button"><span>${myQuestions[index].options[1]}</span></div>
    <div class="answer-button"><span>${myQuestions[index].options[2]}</span></div>
    <div class="answer-button"><span>${myQuestions[index].options[3]}</span></div>`;

    answerList.innerHTML  = optionTag;

    const answerButton = document.querySelectorAll('.answer-button');
    for (let i = 0; i < answerButton.length; i++){
        answerButton[i].setAttribute('onclick','answerSelected(this)');  
    }
}

function answerSelected(answer){
    let userAnswer = answer.textContent;
    let correctAns = myQuestions[questionCount].correctAnswer;
    let allAnswers = answerList.children.length;

    if (userAnswer == correctAns) {
        answer.classList.add('correct');
        let sound = new Audio ();
        sound.src = 'assets/sound/correct-answer.mp3';
        sound.play();
        userScore += 1;
        countScore();
    } else {
        answer.classList.add('incorrect');
        let sound = new Audio();
        sound.src = 'assets/sound/wrong-answer.mp3';
        sound.play();
    
        //showing correct answer, if wrong answer is clicked
        for(let i = 0; i < allAnswers; i++) {
            if (answerList.children[i].textContent == correctAns){
                answerList.children[i].setAttribute('class','answer-button correct');
            }
        }
    }

    //disable all options after selecting an answer
    for(let i = 0; i < allAnswers; i++){
        answerList.children[i].classList.add('disabled');
    }

    nextButton.classList.add('active');
}

function questionCounter (index) {
    const questionTotal = document.querySelector('.count-question');
    questionTotal.textContent = `Question ${index} of ${maxQuestions}`;
}

function countScore() {
    const countScoreText = document.querySelector('.score-box');
    countScoreText.textContent = `${userScore}`;
}