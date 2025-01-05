const nameInput = document.getElementById('name-input');
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
const resultBox = document.getElementById('result-box');
const startAgainButton = document.querySelector('.start-again');

let quizOn= true;
let questionCount = 0;
let maxQuestions = 10;
let questionNumb = 1;
let username = "";
let userScore = 0;
let countdown; 
let timeLeft = 30;
let soundOn = false;
let timerSound = false;
let backgroundMusic = new Audio('assets/sound/music.mp3');
let soundCorrect = new Audio('assets/sound/correct-answer.mp3');
let soundWrong = new Audio('assets/sound/wrong-answer.mp3');
let soundTimer = new Audio('assets/sound/timer-sound-15sec.mp3');

//Start button to start the quiz
// Cannot continue without entering the name
startButton.onclick = () => {
    // Scroll to the top when the button is clicked
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });

    // user name
    const enteredName = nameInput.value.trim();
    if (enteredName === "") {
        alert(`Please enter your name to play!`);
    } else if (enteredName.length < 3) {
        alert("Name must be at least 3 characters long!");
    } else {
        // If the username is valid
        rulesBox.classList.add('active'); // Show the rules box
        main.classList.remove('active'); 
    }
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
    clearInterval(countdown); // Stop the previous timer
    timeLeft = 30; // Reset time
    startTimer(); // Start the new timer
    timerSound = false; // Reset the timer sound flag

    }else{
        stopTimer(); // Stop the timer when the quiz ends
        showResultBox (); // Show the result 
    }
};

//Restart button 
//Return to main page
restartButton.addEventListener('click', function () {
    window.location.reload();
});

// Start again button
startAgainButton.onclick = () => {
    quizBox.classList.add('active');
    nextButton.classList.remove('active');
    resultBox.classList.remove('active');

    questionCount = 0;
    questionNumb = 1;
    userScore = 0;

    shuffledQuestions = shuffleArray([...myQuestions]).slice(0, 10);

    showQuestion(questionCount);
    questionCounter(questionNumb);

    // Stop the previous timer and reset
    clearInterval(countdown); // Stop the previous timer
    timeLeft = 30; // Reset time to your desired starting time (e.g., 30 seconds)
    document.getElementById('timer').textContent = timeLeft;

    startTimer(); // Start the new timer
    timerSound = false; // Reset the timer sound flag

    if (soundOn) {
        backgroundMusic.play(); // Play the sound if it's on
    } else {
        backgroundMusic.pause(); // Pause the sound if it's off
    }

    // Mute the video if already playing
    const iframe = document.querySelector('#video-info iframe');
    if (iframe) {
        iframe.src += "&mute=1";
    }

    quizOn = true;
}

// Question and option function
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
        handleLastQuestion();
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
        if (soundOn) {
            soundTimer.pause();
        }
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
        showResultBox();
    }
}

// When last question is answered then timer and sound stopped, not playing when result page is on
function handleLastQuestion() {
    quizOn = false; // Set to false to stop sounds from playing
    stopTimer(); // Stop the timer and reset sound
    resetAllSounds(); // Reset all sounds
    showResultBox(); // Show result 
}

//Count the question 
function questionCounter (index) {
    const questionTotal = document.querySelector('.count-question');
    questionTotal.textContent = `Question ${index} of ${maxQuestions}`;
}

//Count the scores
function countScore() {
    const countScoreText = document.querySelector('.score-box');
    countScoreText.textContent = `${userScore}/10`;
}

//Timer
function startTimer() {
    document.getElementById('timer').textContent = timeLeft;

    countdown = setInterval(() => {
        if (!quizOn) { // If the quiz is not in progress, stop the timer and sounds
            clearInterval(countdown);
            return;
        }
        timeLeft--;
        document.getElementById('timer').textContent = timeLeft;

        // Play sound when 15 seconds are left only if sound is enabled
        if (timeLeft === 15 && !timerSound && soundOn && quizOn) {
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
    timerSound = false; // Reset the timer sound flag
    soundTimer.pause(); // Pause the timer sound
    soundTimer.currentTime = 0; // Reset the timer sound
}

// Handle time-up function
// Not showing alert message when result page is open
function handleTimeUp() {
    // Check if the quiz is already over
    if (questionCount >= shuffledQuestions.length) {
        timerSound = false;
        return; // Exit the function if quiz is completed
    }

    // If time is running out on the last question, show the results and let the user knows that it was the last question
    if (questionCount >= maxQuestions - 1) {
        alert("This was your last question! Look at the results!");
        showResultBox(); // Automatically show  result when time's up on the last question
    }else{
        alert("Time's up! Moving to the next question.");
        // Automatically trigger the "Next" button click to change the question with the next question
        nextButton.onclick();
    }
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
        resetAllSounds();
    }
});

// Reset all sounds
function resetAllSounds() {
    // Stop and reset background music
    backgroundMusic.pause();
    backgroundMusic.currentTime = 0;

    // Stop and reset other sounds
    soundTimer.pause();
    soundTimer.currentTime = 0;

    soundCorrect.pause();
    soundCorrect.currentTime = 0;

    soundWrong.pause();
    soundWrong.currentTime = 0;
}

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

//Result 
function showResultBox() {
    stopTimer(); // Stop timer
    resetAllSounds(); // Reset all sounds
    quizBox.classList.remove('active');
    resultBox.classList.add('active');

    const circleProgress = document.querySelector('.circle');
    const percentageValue = document.querySelector('.percentage-value');
    const winMessage = document.querySelector('.win-message');
    const enteredName = nameInput.value.trim();
    let progressStartValue = -1;
    let progressEndValue = Math.round((userScore / shuffledQuestions.length) * 100);
    let speed = 20; 

    let progress = setInterval (() =>{
        progressStartValue++;
        percentageValue.textContent = `${progressStartValue}%`;
        circleProgress.style.background = `conic-gradient(#9d8cd9 ${progressStartValue * 3.6}deg, #fedebe 0deg)`;
        if (progressStartValue == progressEndValue) {
            clearInterval(progress);

            if (progressEndValue === 100) {
                winMessage.innerHTML = `Well done, ${enteredName}!<br>You are a true space explorer!`;
            } else if (progressEndValue >= 50) {
                winMessage.innerHTML = `Great job ${enteredName}!<br>You scored really high!`;
            } else {
                winMessage.innerHTML = `Good effort ${enteredName}!<br>Keep practicing to improve.`;
            }
        }
    },speed);

    embedYouTubeVideo(videoId);
}

// Youtube API
// Information on how to use the JavaScript Fetch API to get data https://www.digitalocean.com/community/tutorials/how-to-use-the-javascript-fetch-api-to-get-data
// Google developer console used to get the API key
// Video is not autoplaying, could not mute the video
// API KEY is restricted to be used only for this web applicatin and only for youtube. This make it secure and not exposed to leaking 
const apiKey = 'AIzaSyBokzxpJV7ZQp9THNMqdqyr71gW8-9jxwQ';  // Youtube API key
const videoId = 'w36yxLgwUOc';  // YouTube video ID
const query = 'Solar system interestin facts';

function searchVideo() {
    const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${query}&type=video&key=${apiKey}`;
            
    fetch(url)
        .then(response => response.json())
        .then(data => {
            const videoId = data.items[0].id.videoId;  // Get the first video ID
            embedYouTubeVideo(videoId);  // Call function to embed video
        })
        .catch(error => console.error('Error fetching video:', error));
    }

// Function to embed the YouTube video
function embedYouTubeVideo(videoId) {
    const videoContainer = document.getElementById('video-info');

    // Clear any previously embedded video
    // When playing secong quiz after pressing the button Start again , prevent multiple videos stacking up in the DOM.
    videoContainer.innerHTML = ''; 
    const iframe = document.createElement('iframe');
    
    iframe.title = "Solar system facts";
    iframe.width = "300";
    iframe.height = "195";
    iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&muted=1`;
    iframe.allow = "accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
    iframe.referrerpolicy="strict-origin-when-cross-origin";
    iframe.allowFullscreen = true;
    iframe.setAttribute('autoplay', '1');
    iframe.setAttribute('muted', '1'); 
    videoContainer.appendChild(iframe);
}