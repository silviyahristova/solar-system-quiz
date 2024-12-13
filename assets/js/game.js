const startButton = document.querySelector(".start-btn");
const rulesBox = document.querySelector(".rules-box");
const exitButton = document.getElementById('exit-btn');
const main = document.getElementById('main');
const continueButton = document.getElementById('continue-btn');
const quizBox = document.getElementById('quiz-box');
const soundToggle = document.getElementById('sound-toggle');
const nextButton = document.querySelector('.next-btn');
const restartButton = document.getElementById('restart-button');
const answerList = document.querySelector(`.answers-list`);

let questionCount = 0;
let maxQuestions = 10;
let questionNumb = 1;
let username = document.getElementById("name-input");
let userScore = 0;
let countdown; 
let timeLeft = 30;
let soundOn = false;
let backgroundMusic = new Audio('assets/sound/music.mp3');
let soundCorrect = new Audio('assets/sound/correct-answer.mp3');
let soundWrong = new Audio('assets/sound/wrong-answer.mp3');
let soundTimer = new Audio('assets/sound/timer-sound-15sec.mp3');

//Start button to start the quiz
// Cannot continue without entering the name
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
};

//Exit button 
//Return to main page
exitButton.onclick = () => {
    rulesBox.classList.remove('active');
    main.classList.remove('active');
};

//Continue button
continueButton.onclick = () => {
    quizBox.classList.add('active');
    rulesBox.classList.remove('active');
    main.classList.remove('active');
    startTimer();
    showQuestion(0);
    questionCounter(1);
    countScore();
};

//Next Button
nextButton.onclick = () => {
    if(questionCount < myQuestions.length -1){
    questionCount++;
    showQuestion(questionCount);

    questionNumb++;
    questionCounter(questionNumb);

    nextButton.classList.remove('active');

    // Reset the timer
    stopTimer(); // Stop the previous timer
    timeLeft = 30; // Reset time
    startTimer(); // Start the new timer
    timerSound = false; // Reset the timer sound flag

    }else{
        console.log('Questions Completed!');
        stopTimer(); // Stop the timer when the quiz ends
    }
};

//Restart button 
//Return to main page
restartButton.addEventListener('click', function () {
    window.location.reload();
});

//Keep logo in all main divs
const headerHTML = `
  <header id="logo">
    <div class="row">
      <div class="col-6">
        <a class="logo" href="index.html">
          <img
            src="assets/images/homepage/logo.webp"
            alt="The planet Earth"
            id="logoimage"
            srcset="assets/images/homepage/logo.webp" />
        </a>
      </div>
    </div>
  </header>
`;

const divs = document.querySelectorAll('.box-logo');

divs.forEach(div => {
  const tempDiv = document.createElement('div');
  tempDiv.innerHTML = headerHTML;
  const headerElement = tempDiv.firstElementChild; 

  div.prepend(headerElement);
});

// Keep footer in all main divs
const footerHTML = `
  <footer class="container-fluid p-0" id="footer">
    <div class="logo-link">
      <a
        class="social-media-link"
        href="https://github.com/silviyahristova"
        aria-label="GitHub"
        target="_blank"
        ><i class="fa-brands fa-github"></i>
      </a>
      <a
        class="social-media-link"
        href="https://www.linkedin.com/in/silviyahristova93/"
        aria-label="LinkedIn"
        target="_blank"
        ><i class="fa-brands fa-linkedin-in"></i>
      </a>
    </div>
    <div class="text-centre">
      <span>Made by Silviya Hristova</span>
    </div>
  </footer>
`;

const footerDiv = document.querySelectorAll('.boxes-logo');

footerDiv.forEach(div => {
  const tempDiv = document.createElement('div');
  tempDiv.innerHTML = footerHTML; 
  const footerElement = tempDiv.firstElementChild; 
  div.appendChild(footerElement);
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

//User select an answer
// Correct or wrong answer
// Coresponding sound
//Disable buttons after clicking any answer
function answerSelected(answer, index) {
    const currentQuestion = shuffledQuestions[index];
    const userAnswer = answer.textContent.trim();
    const correctAnswer = currentQuestion.options[currentQuestion.correctAnswer];

    // Check if the selected answer is correct
    if (userAnswer === correctAnswer) {
        answer.classList.add('correct');
        if (soundOn) {
            soundCorrect.play();
        } // Play sound only if sound is on
        userScore += 1;
        countScore();
    } else {
        answer.classList.add('incorrect');
        if (soundOn) {
            soundWrong.play();
        } // Play sound only if sound is on
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
        stopTimer();
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
        startTimer();  
    } else {
        alert('You have completed the quiz!');
    }
}

//Count the question 
function questionCounter (index) {
    const questionTotal = document.querySelector('.count-question');
    questionTotal.textContent = `Question ${index} of ${maxQuestions}`;
}

//Count the scores
function countScore() {
    const countScoreText = document.querySelector('.score-box');
    countScoreText.textContent = `${userScore}`;
}

//Timer
function startTimer() {
    document.getElementById('timer').textContent = timeLeft;

    countdown = setInterval(() => {
        timeLeft--;
        document.getElementById('timer').textContent = timeLeft;

        // Play sound when 15 seconds are left only if sound is enabled
        if (timeLeft === 15 && !timerSound) {
            if (soundOn) {
                soundTimer.play();
            } // Play sound if user toggle the button ON
            timerSound = true;
        }

        if (timeLeft <= 0) {
            clearInterval(countdown);  // Clear the interval
            document.getElementById('timer').textContent = "Time's up!";
            handleTimeUp(); // Call a function when time's up
        }
    }, 1000);
}

// Stop the countdown timer
function stopTimer() {
    clearInterval(countdown);
}

// Handle time-up function
function handleTimeUp() {
    alert("Time's up! Moving to the next question.");
    // Automatically trigger the "Next" button click to change the question with the next question
    nextButton.onclick();
}

// Sound toggle;
// Sound is off by default;
// Background music is continuosly played;
backgroundMusic.loop = true; // music loops continuously

soundToggle.addEventListener('change', () => {
    soundOn = soundToggle.checked;
    if (soundOn) {
        backgroundMusic.play(); // Start background music
    } else {
        backgroundMusic.pause(); // Pause background music
        backgroundMusic.currentTime = 0; // Reset background music

        soundTimer.pause(); // Pause sound
        soundTimer.currentTime = 0; // Reset sound

        soundCorrect.pause(); // Pause sound
        soundCorrect.currentTime = 0; // Reset sound

        soundWrong.pause(); // Pause sound
        soundWrong.currentTime = 0 // Reset sound
    }
});

//Play sound  if sound is on
function playSound(sound) {
    if (soundOn) {
        sound.currentTime = 0;
        sound.play();
    }
}

function playTimerSound() {
    playSound(soundTimer); // Play timer sound if sound is on
}

function playCorrectSound() {
    playSound(soundCorrect); // Play correct answer sound if sound is on
}

function playWrongSound() {
    playSound(soundWrong); // Play wrong answer sound if sound is on
}