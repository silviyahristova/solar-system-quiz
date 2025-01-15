# The Solar System Quiz Game

![Responsive Mock-up](assets/images/docs/mock-up-image.webp)

#### **By Silviya Hristova**

[Click here to view the live web application](https://silviyahristova.github.io/solar-system-quiz/)

This is the documentation for The Solar System Quiz Game’s website. It has been built using HTML5, CSS3 and JavaScript for educational purposes as part of Code Institute’s Level 5 Diploma in Web Application Development.

---

## Table of content

- [**About**](#about)
- [**User Experiences**](#user-experiences)
  - [**User Stories**](#user-stories)
  - [**Strategy**](#strategy)
  - [**Scope**](#scope)
  - [**Structure**](#structure)
  - [**Skeleton**](#skeleton)
  - [**Surface**](#surface)
- [**Technologies Used**](#technologies-used)
  - [**Languages**](#languages)
  - [**Tools**](#tools)
- [**Features**](#features)
- [**JavaScript Functionality**](#javascript-functionality)
- [**Future features**](#future-features)
- [**Testing**](#testing)
- [**Deployment**](#deployment)
- [**Credits**](#credits)
- [**Acknowledgements**](#acknowledgements)

## About

The Solar System Quiz is a question and answer game in which knowledge or estimation questions are to be answered as correctly as possible. This is a responsive website and the topic of the questions is regarding the solar system. The site will target adults and children in a fun and educational way to show their knowledge or learn something new about our solar system.

Click [**here**](https://silviyahristova.github.io/solar-system-quiz/) to view the live website.

## User Experiences

### **User Stories**

- As a first-time visitor, I want to easily understand the main purpose of the site.
- As a first-time visitor, I want to take part in a fun, online, educational game.
- As a first-time visitor, I want to easily access the game.
- As a first-time visitor, I want to find out how to play the game.
- As a first-time visitor, I want to know how many questions left to answer.
- As a first-time visitor, I want to know the scores, during the game.
- As a first-time visitor, I want to be able to restart the quiz anytime.
- As a first-time visitor, I want to see the result at the end of the quiz.
- As a first-time visitor, I want to be able to give my feedback.
- As a first-time visitor, I want to access the quiz on any device.
- As a first-time visitor, I want to be able to see and click on the links to their social media pages.
- As a first-time visitor, I want to navigate the site easily.

### **Strategy**

This project is to design and create a user-friendly and interactive website that is done mainly through HTML, CSS and JavaScript.

The main goal of the website is to allow users to test their knowledge, learn new facts, and have fun with trivia questions. The quiz game help with concentration, identify gaps in knowledge, build confidence and help children retain information in a fun way. Our quiz game prevent the mind from wandering, ensuring information absorbation. It is also learning enjoyable. Incorrectly answered questions immediately highlight knowledge gaps.

By making the site fully responsive, the site aims to be easily accessible no matter which platform the user is viewing the site on.

### **Scope**

The main features that will be implemented into the website will be included on two separate pages. The design of the website should look fun, educational and interesting at the same time simple and eye-catching. In help to create this design will be carefully selected color palette and fonts.

The site will have challenging questions before starting of the quiz. This will help users think, that they are participating in an adventure quiz, so they can be motivated to answer the questions correctly to prove themselves that they are worthy of the challenge. The website will have how to play section, which will include the rules of the quiz. It will have also contact details and social media links, making it easy for users to get in touch.

### **Structure**

The structure of the website is to have two separate pages - game page and contact page. It is designed to be mobile-first design. Every page will have a header with logo and footer. There will be an additional 404.html page. 

The homepage has a simple and single web page structure, with all the content replaced by the JavaScript code at different points in the game. There are 4 main section within the page which appear and disappear depending on where you are in the game. The first section serves as the main welcoming area. It includes a prominent main heading, followed by a paragraph designed to challenge and encourage users to try the quiz. Below the paragraph, there is an input field where users are required to enter their name before starting the quiz. A button is provided to initiate the game. At the bottom of the section, there is a "Contact Us" button, which allows users to submit feedback or ask questions by filling out a form. The second section is the "How to play" section, which provides the rules of the game along with a good luck message. It includes two buttons: one to exit the quiz and return to the main section, and another to continue, which opens the quiz section. The quiz area is the section where the game begins. In the top-right corner, there is a score display and a sound toggle button to mute or play the sound, with the sound muted by default. Below this is the question counter, along with a 30-second timer for answering each question. The main area displays the question and four answer options, with only one being correct. When the user selects an answer, the correct option is highlighted, accompanied by corresponding sounds for correct and incorrect answers. Additionally, a 15-second warning sound plays when only 15 seconds remain to answer the question.At the end of the section, there are two buttons. The "Next" button, which can only be clicked if the user has answered the current question, allows them to proceed to the next question. The "Restart" button takes the user back to the main welcoming section, enabling them to restart the game. The last section is the result section, which displays the user's score as a percentage along with a congratulatory message. As a reward for participating in the game, there is a YouTube video provided where the user can learn more about the solar system. At the end of the section, there is a "Start Again" button, allowing the user to restart the game from the beginning.

The contact page contains a contact form with all fields marked as required. After submitting the form, a confirmation message is displayed to inform the user that their message has been sent. Additionally, using the EmailJS API, the user will receive an email confirming that their message has been received.

The 404 page includes a "Back to Home" button, allowing the user to return to the main welcoming section.

### **Skeleton**

To create the wireframes, the design tool Figma is used. There were fifteen frames created- for the main sections on the two pages and for three devices- desktop, tablet, and mobile. They were created to help establish a clear and organized structure for the website. They provide an outline of the layout how elements will be arranged on the screen, and how the interface will adopt the different screen sizes and devices, laying the foundation for responsive design.

<details><summary>Desktop</summary>

<img src="assets/images/docs/desktop-wireframes.webp">

</details>

<details><summary>Tablet</summary>

<img src="assets/images/docs/tablet-wireframes.webp">

</details>

<details><summary>Mobile</summary>

<img src="assets/images/docs/mobile-wireframes.webp">

</details>

### **Surface**

**Colour**

The color palette is selected based on the unique meaning of each colors and their combination together. Purple and violet colors promote harmony of the mind and the emotions, contributing to mental balance and stability, peace of mind, a link between the spiritual and the physical worlds, between thought and ativity.The color orange radiates warmth and happiness, combining the physical energy and stimulation of red with the cheerfulness of yellow. The color psychology of orange is optimistic and uplifting, rejuvenating our spirit. Peach encourages great communication and conversation. It inspires good manners and puts people at ease. It has all the attributes of orange but in a much softer, gentler and more cautious form. This version of orange encourages vitality and self-control. Using apricot can evoke feelings of warmth and friendliness. This color communicates a sense of comfort and approachability, making it ideal for creating inviting and cheerful spaces.
The choice of colours will align with the colours of the images, used in the project. The palette were created using the site [Color-hex.com](https://www.color-hex.com/). Tints and Shades of these colours will be used also and are created using the site [Maketintsandshade.com](https://maketintsandshades.com/).

![Colour Pallette](assets/images/docs/color-palette.webp)

<details><summary>Tints and shades</summary>

![Tints and shades](assets/images/docs/tintsandshades.webp)

</details>

**Typography**

The fonts that will be used in the website will be imported from [Google Fonts](https://fonts.google.com/) and will be used [Engagement](https://fonts.google.com/specimen/Engagement) and [Lora](https://fonts.google.com/specimen/Lora). Semi-formal with a steady hand and soft contours, Engagement is a brush script that dances a line between vintage and modern flair. This classic calligraphic script font is perfect for amazing postcard designs, wedding invitation designs, image headings, and titling purposes. Lora is a well-balanced contemporary serif with roots in calligraphy. It is a text typeface with moderate contrast well suited for body text. A paragraph set in Lora will make a memorable appearance because of its brushed curves in contrast with driving serifs.

**Logo**

The logo is created using [Canva](https://www.canva.com/design/DAGVX0sxbDk/QxmT7W9rV6dBT0eca0dxVw/edit) logo design tool. The colors are chosen from the color palette for the website. This will help users connect the logo with the colors of the company and website. Th symbol is related to the purpose of the website.

<details><summary>Logo image</summary>

![The Solar System Quiz Logo](assets/images/docs/logo.webp)

</details>

**Images**

The images on the pages were chosen to be relevant to the content of the page. The video has been selected to be educational to keep users more interested about our solar system and It is meant to be a prize at the end of the quiz.

**Icons**

The icons that will be used are from [Font Awesome](https://fontawesome.com/) website. Having icons as the social media links immediately allows the user to easily identify which social media platform is which. Icons for the website are carefully chosen to be semantic relevance to represent concepts. They help users quickly understand and navigate throughout the website. The icons on the footer are all easily appealing on the eye for the user.

**Sound**

The sounds in the quiz are from [FreeSound](https://freesound.org/) website. They are used to enhance engagement and interactivity. Sound effects provide immediate feedback for correct and incorrect answers, making the experience more dynamic and enjoyable. Additionally, audio helps to guide users through the quiz and improve memory by reinforcing actions with auditory feedback. To ensure accessibility and user comfort, there is an options to mute or not the sound, ensuring the quiz is inclusive and customizable for everyone. A 15-second timer sound is included to add a sense of urgency and challenge to the quiz. It encourages quick thinking and decision-making, which makes the experience more engaging and dynamic. The timer also helps prevent overthinking or relying on external resources, ensuring that the answers are based on the participant's immediate knowledge.

[Back to top](#table-of-content)

## Technologies Used

### Languages

- [HTML](https://en.wikipedia.org/wiki/HTML5)
- [CSS](https://en.wikipedia.org/wiki/Cascading_Style_Sheets)
- [JavaScript](https://en.wikipedia.org/wiki/JavaScript)

### Tools

+ [Bootstrap 5.2](https://getbootstrap.com/)
    + used to create the structure and layout of the website, making it responsive on all devices.
+ [Google Fonts](https://fonts.google.com/)
    + used to get the links to the fonts that are in the head of the html pages. These fonts are then used throughout the website.
+ [Font Awesome](https://fontawesome.com/)
    + used to add icons to the project.
+ [GitHub](https://github.com/)
    + used as a repository and to host the full project.
+ [GitPod](https://www.gitpod.io/)
    + used IDE to develop the website.
+ [Figma](https://www.figma.com/)
    + used to create the wireframes and design layout for the project.
+ [Canva](https://www.canva.com/)
    + used to create the logo image for the project.
+ [Pexels](https://www.pexels.com/)
    + used to source images and video that would be used within the website.
+ [Freepik](https://www.freepik.com/)
    + used to source images that would be used within the website.
+ [Pixelied](https://pixelied.com/convert/)
    + used to convert PNG and JPG images to WEBP format images.
+ [Favicon](https://favicon.io/)
    + used to create the favicon for the website.
+ [Color-hex](https://www.color-hex.com/)
    + was used to create the colour palette that was used through the website.
+ [Make Tints and Shades](https://maketintsandshades.com/)
    + used to create the tints and shades from the main colour palette for use on the whole site.
+ [Grammarly](https://app.grammarly.com/)
    + used to check spelling, grammar, and punctuation in the content of the website.
+ [Responsive Image Linter](https://chromewebstore.google.com/detail/responsive-image-linter/mnddginionlghpblkimpdalcecpnbjln?pli=1)
    + used to test responsive images and provide suggestions for the sizes attribute.
+ [WebAIM](https://webaim.org/resources/contrastchecker/)
    + used to check the color contrast.
+ [WAVE Web Accessibility](https://wave.webaim.org/)
    + used to make web content more accessible to individuals with disabilities.
+ [Mock-up Image](https://amiresponsive.blogspot.com/)
    + used to create the responsive mock-up image that is at the beginning of the readme file.
+ [Google Dev Tools](https://developer.chrome.com/docs/devtools)
    + used to test features, responsiveness and to troubleshoot.
+ [Chrome Capture - screenshot & gif tool](https://chromewebstore.google.com/detail/chrome-capture-screenshot/ggaabchcecdbomdcnbahdfddfikjmphe?hl=en-US&utm_source=ext_sidebar)
    + used to take screenshots and screen record to use in the Readme file.
+ [GIF Compressor](https://www.freeconvert.com/gif-compressor)
    + used to compress gif files to use in the Readme file.
+ [FreeConvert](https://www.freeconvert.com/wav-to-mp3/download)
    + used to convert WAV sound files to MP3 files.
+ [AdobeExpress](https://www.adobe.com/express/)
    + used to convert MP4 video files to GIF files.
+ [FreeSound](https://freesound.org/)
    + used to download the sound files.
+ [Email JS](https://www.emailjs.com/)
    + used to send email directly from the code.
+ [Youtube API](https://developers.google.com/youtube)
    + used to add YouTube functionality in the website.
+ [Node JS](https://nodejs.org/en)
    + runtime environment that allows to run JavaScript on the server side.
+ [ChatGPT](https://chatgpt.com/)
    +  used to check my spelling and improve my sentences in Readme and Testing files.

[Back to top](#table-of-content)

## Features

### **Header**

<details><summary>Screenshot</summary>

<img src="assets/images/docs/header.png">
</details>

* The logo appears on all sections and pages and is fully responsive. The logo is clickable and serves as a user-friendly feature, allowing the user to easily navigate back to the main section.

### **Footer**

<details><summary>Screenshot</summary>

<img src="assets/images/docs/footer.png">
</details>

* The footer appears on all section and pages and is fully responsive. It contains my name as creator and links to social-media pages, all of which open in a separate tab.

### **Buttons and Links**

<details><summary>Screenshots</summary>

<img src="assets/images/docs/start-button-name.png">, <img src="assets/images/docs/contact-button.png">, <img src="assets/images/docs/exit-button.png">
<img src="assets/images/docs/send-button.png">, <img src="assets/images/docs/back-to-home-button.png">, <img src="assets/images/docs/restart-button.png">
<img src="assets/images/docs/continue-button.png">, <img src="assets/images/docs/sound-button.png">, <img src="assets/images/docs/start-again-button.png">, <img src="assets/images/docs/next-button.png">, <img src="assets/images/docs/answers-button.png">
</details>

* All the links that look like a button and buttons have a hover effect. They navigate users through the site. When a user clicks the button, a JavaScript function is triggered to change the current page or navigate to a different section of the site.

* Restart button allows the user to go back to the main section. The button has a hover effect with a colour transition. Also has transparent background, rather than other buttons, this will not draw the user's attention away from the game. 

* The "Start" button triggers an alert message if the name input field is not filled. If the input field contains a name, it proceeds to display the "How to Play" section.

* The "Contact Us" button intuitively navigates users to the contact page on the website.

* The "Exit Quiz" button has a transparent background, ensuring it does not draw unnecessary attention, so users are less likely to accidentally quit the game.

* The "Continue" button triggers the quiz area, allowing the user to start the game. Before clicking the button, the user can read the rules in the "How to Play" section.

* The sound button is off by default. Once clicked, the sound is turned on, enabling the playback of background music, sounds for correct and incorrect answers, and a 15-second timer sound. 

* The "Next" button cannot be clicked until the user selects an answer. Once an answer is chosen, the button becomes clickable, allowing the user to proceed to the next question. If the user does not choose an answer before the timer ends, an alert message will appear notifying them that they are moving to the next question. The next question will then be triggered automatically. If it is the last question and no answer is selected within the time limit, the result section will be triggered automatically.

* The four answer options have a hover effect. The correct answer is highlighted with a green font color and border, while the wrong answer is displayed with a grey background, red font color, and border for better contrast.

### **Favicon**

<details><summary>Screenshots</summary>

* Favicon - desktop

<img src="assets/images/docs/favicon-tab.png">

* Favicon - mobile

<img src="assets/images/docs/favicon-mobile.jpg" width=300px>
</details>

* The favicon is a feature to display the logo at the top tab of the site. This helps to make the site recognizable for users.

### **Alert messages**

<details><summary>Screenshots</summary>

* Message to enter the name

<img src="assets/images/docs/message-name.png">

* Message regarding the name input field

<img src="assets/images/docs/alert-message.png">

* Message about the timer from question 1 to 9

<img src="assets/images/docs/timer-ends.png">

* Message about last question timer

<img src="assets/images/docs/last-question-timer-end.png">

* Message about Contact-form

<img src="assets/images/docs/contact-field.png">

* Message about submiting the form

<img src="assets/images/docs/form-send.png">
</details>

* Alert messages notify the user at all times about significant events, such as a completed action or a required input, ensuring clear communication throughout the process. They inform users about errors or issues, such as missing fields in a form or invalid data. Alerts are used to provide immediate feedback or important information to users during their interaction with a website. They are displayed as popup boxes with "OK" button and are an integral part of user communication in JavaScript.

### **Quiz area**

<details><summary>Screenshots</summary>

<img src="assets/images/docs/question-count-1.png">, <img src="assets/images/docs/question-count-2.png">
</details>

* Question Counter serves to keep track of the user's progress through the questions. It displays which question the user is currently answering and the total number of questions in the quiz. It shows the user how far they’ve progressed in the quiz. By showing progress, the question counter provides real-time feedback, ensuring users feel in control. It creates a more engaging and structured experience for the user.

<details><summary>Screenshots</summary>

<img src="assets/images/docs/score-0.png">, <img src="assets/images/docs/score-3.png">
</details>

* The score counter keeps track of the user's performance by calculating and displaying their current score based on their answers. It provides immediate feedback on how well the user is doing during the quiz. Also encourages users to stay focused and try harder to improve their score. The score counter makes the quiz more interactive and rewarding. The score increases whenever the user selects the correct answer. The score remains unchanged for incorrect answers.

<details><summary>Screenshots</summary>

<img src="assets/images/docs/sound-off.png">, <img src="assets/images/docs/sound-on.png">
</details>

* The sound button in athe quiz allows users to control the audio features of the quiz. It provides an option to enable or disable sounds during the quiz, enhancing the user experience by accommodating individual preferences. This feature lets users choose whether they want audio, making the experience customizable and inclusive.The sound button is muted by default to avoid unexpected noise when the quiz starts. Once clicked, the sound is turned on, activating all audio features, such as background music, answer feedback and 15 seconds warning, of the quiz.Audio effects make the quiz more interactive and immersive.

<details><summary>Screenshots</summary>

<img src="assets/images/docs/timer-30sec.png">, <img src="assets/images/docs/timer-24sec.png">
</details>

* The timer in a quiz is a countdown mechanism to limit the time a user has to answer each question or complete the quiz. It adds a sense of urgency, challenge, and structure to the quiz. It encourages quick thinking and promotes decision-making under pressure, making the quiz more dynamic and engaging.Timer ensures users don’t take too long on a single question, keeping the quiz on track. The timer function triggers actions when the timer runs out, such as moving to the next question automatically, displaying an alert notifying the user that time is up and ending the quiz and showing the results if it’s the final question. The timer has a fixed amount of time for each question, which is 30 seconds. There is a 15 second warning - a sound signals the halfway point.The timer making the experience more dynamic and structured for users.

<details><summary>Screenshots</summary>

* Correct answer is selected

<img src="assets/images/docs/correct-answer-select.png">

* Wrong answer is selected

<img src="assets/images/docs/wrong-answer-select.png">

* Next button is off

<img src="assets/images/docs/next-button-off.png">

* Next button is on

<img src="assets/images/docs/next-button-on.png">
</details>

* The Question and Answer Area is the central part of the quiz designed for user interaction. It displays the current question in a clear and prominent format, along with multiple-choice answer options, four, where one is correct. Users can select an answer by clicking on an option, triggering immediate feedback — highlighting the correct answer in green and the incorrect one in red, with corresponding sounds if the audio is enabled. The area works alongside navigation button "Next" to record responses and proceed to the next question. Key features include a visually prominent question display, interactive answer options with hover effects, and a feedback mechanism to indicate correctness. This area ensures clarity by focusing users on one question at a time, enhances engagement with interactive feedback, and provides a well-structured layout for a seamless quiz experience. It is the most critical part of the quiz, enabling users to actively participate and complete it effectively.

* The "Next" button cannot be clicked until the user selects an answer. This ensures that the user engages with the question before moving forward. Once an answer is selected, the button becomes active, allowing the user to proceed to the next question. 

* Additionally, there is a "Restart" button that allows users to restart the quiz. This button has a transparent background, making it less visually prominent to avoid drawing unnecessary attention. This design choice ensures the primary focus remains on the quiz experience, while the restart option is still available when needed.

### **Result section**

<details><summary>Screenshots</summary>

<img src="assets/images/docs/result-percentage.png">
</details>

* The result in percentage indicates the user's performance by showing how many questions they answered correctly, expressed as a percentage of the total questions. It provides a clear measure of how well the user did in the quiz. The percentage score is a straightforward, quantitative measure that helps users understand their result without needing to interpret the number of correct or incorrect answers.

<details><summary>Screenshots</summary>

<img src="assets/images/docs/message-result-1.png">, <img src="assets/images/docs/message-result-2.png">, <img src="assets/images/docs/message-result-3.png">
</details>

* After the user receives their result percentage, a personalized message is displayed based on their performance. This message provide feedback and encouragement, helping users understand their score in a supportive way. Depending on the score, the message is different. A tailored message makes the result feel more personal, adding a human touch to the quiz experience. It will acknowledge the effort and engagement of the user. A message can motivate users to retake the quiz and improve their score.

<details><summary>Screenshots</summary>

<img src="assets/images/docs/youtube-api.png">
</details>

* The YouTube API is integrated into the quiz as a prize to enhance the user experience by providing additional value after completing the game. The goal is to reward participants for their engagement and offer them something educational and entertaining. By offering a YouTube video related to the quiz topic (e.g., about the solar system), users gain access to more in-depth knowledge. It enhances their learning experience and allows them to explore the subject further after completing the quiz. Integrating the YouTube API creates an interactive and dynamic experience, allowing users to directly access a video without leaving the quiz interface.

### **404 page**

<details><summary>Screenshots</summary>

<img src="assets/images/docs/404page.png">
</details>

* A 404 page is an error page displayed when a user tries to access a webpage that cannot be found on the server. This can happens when the user mistypes a URL, the page has been moved or deleted or the link is broken or outdated. It informs users that the page they were looking for does not exist or cannot be found. It includes a button that guide users back to main sections.  The 404 page is crucial for handling errors in a way that keeps users on the site and offers them a smooth navigation experience.

### **The Quiz**

<details><summary>Video</summary>

<img src="assets/images/docs/quiz-video-1.gif">

<img src="assets/images/docs/quiz-video-2.gif">
</details>

[Back to top](#table-of-content)

## JavaScript Functionality

### Variables and Setup

* Quiz Control Variables 

    * Variables like username, userScore, questionCount, and questionNumb, quizOn, timeLeft  are used to track the state of the quiz, including the participant's name, score, current question number, and the remaining time.

* Timers and Sound 
    
    * Variables like countdown, timeLeft, soundOn, and audio files (soundCorrect, soundWrong, etc.) are used for managing the countdown timer and the sound effects.

* HTML Elements 
    
    * The document.getElementById and document.querySelector methods are used to select HTML elements like buttons, text areas, and containers (e.g., startButton, nextButton, quizBox, etc.) for interaction.

    * The nameInput, emailInput, messageInput, and subjectInput elements capture the user's input.

* Array of Objects
    
    * myQuestions is an array where each element represents a question in the quiz. Properties of Each Object in the Array are:
    * questionNumber - the unique identifier for the question, primarily used for referencing or display.
    * questionText - the actual question displayed to the user.
    * options - an array of answer choices for the question. These are displayed as clickable buttons in the quiz UI.
    * correctAnswer -  the index of the correct option in the options array.

### Event Listeners & Functions

* Start Button 

    * When the user clicks the "Start" button, the script first checks if the user has entered a valid name. If the name is valid (at least 3 characters long), it proceeds to show the rules box. If the name is invalid, it alerts the user to correct it.

* Exit Button 

    * When the "Exit" button is clicked, the quiz returns to the main page by removing the rules box and showing the home box again.

* Continue Button 

    * Clicking the "Continue" button hides the rules box, shows the quiz box, and starts the timer. It also begins displaying the first question, keeps track of the question number, and updates the score counter.

* Next Button 

    * This button triggers when the user answers a question. It checks if there are more questions in the array (myQuestions). If there are, it moves to the next question, resets the timer, and starts it again. If all questions have been answered, it stops the timer and shows the result box.

* Restart Button 

    * Clicking the restart button reloads the page to start over from the beginning.

* Start Again Button 

    * This button reinitializes the quiz, resetting the score, question count, and timer, and then re-starts the quiz from the first question.

* Shuffling Question 

    * shuffleArray(arr) function takes an array and shuffles its elements randomly using the Fisher-Yates algorithm. This ensures that both the order of questions and the order of options in each question are randomized.

* Limiting the Questions

    * After shuffling the array of questions (myQuestions), the quiz selects the first 10 questions using slice(0, 10). This ensures that the quiz is capped at 10 questions.

* Displaying Questions 

    * showQuestion(index) function displays the question at the given index from the shuffled list. Dynamically creates buttons for the question's options using the answerList container.Options for each question are also shuffled using shuffleArray([...currentQuestion.options]) to randomize their order. Each answer button has an event listener attached. Clicking an option triggers the answerSelected() function.

* Handling User Answers 

    * answerSelected(answer, index) function determines if the selected answer matches the correct one for the current question. If correct, the button is highlighted with a
    "correct" class, and a "correct" sound is played if sounds are enabled. If incorrect, the button is highlighted with an "incorrect" class, and the correct answer is also highlighted. The user's score is incremented for correct answers (userScore += 1).

* Disabling Options

    * After an answer is selected, all answer buttons are disabled to prevent multiple submissions. This ensures fairness in the quiz flow.

* Stopping Timer and Sounds

    * The timer is stopped, and any sounds related to the timer are paused after an answer is selected.

* Next Button

    * The nextButton becomes active after an answer is selected. Clicking it calls nextQuestion(), which moves to the next question if there are any remaining. If the current question is the last one, it triggers the result page using showResultBox(). Resets and restarts the timer for the new question.

* Handling the Last Question

    * handleLastQuestion() function is called when the user reaches the last question in the quiz. It stops the timer and all sounds using stopTimer() and resetAllSounds(). Then displays the result box using showResultBox().

* User Feedback and Sounds

    * Feedback is provided visually by changing the button styles to indicate correct or incorrect answers. Sounds (soundCorrect, soundWrong, soundTimer) are played conditionally based on the soundOn flag: Correct answer will play "correct" sound. Incorrect answer will play "wrong" sound. Timer running low will play "timer" sound.

* Quiz Initialization

    * showQuestion(currentQuestionIndex): This is initially called to display the first question when the quiz starts. Questions and their options are shuffled before being displayed to make each quiz session unique.

* Question and Score Tracking
    
    * questionCounter(index): Updates the question count displayed on the screen.
    * countScore(): Updates the score display as the user answers questions correctly.

* Timer Logic

    * startTimer(): Initializes a countdown timer that starts at timeLeft seconds (default 30). Every second, the timer decreases, and the remaining time is displayed. If time reaches 15 seconds and sounds are enabled, a warning sound is played. If time runs out- stops the timer and displays "Time's up!". Calls handleTimeUp() to handle what happens next (e.g., automatically moving to the next question). 

    * stopTimer(): Stops the timer and resets any timer-related sounds to their initial state.

    * handleTimeUp(): Determines the next steps when time runs out for a question: If the quiz is on the last question, shows the result box directly. Otherwise, automatically proceeds to the next question, simulating a click on the "Next" button.

* Sound Management

    * sound Toggle: Allows the user to turn sounds on or off via a toggle (soundToggle). If turned on background music starts playing in a loop. If turned off all sounds, including the background music, are stopped and reset using resetAllSounds().
    
    * resetAllSounds(): stops all audio elements (background music, timer sound, correct/incorrect answer sounds) and resets their playback position.
    
    * playSound(sound): plays a specific sound (e.g., correct answer sound) if sounds are enabled.

* Result Handling

    * showResultBox(): Stops the timer and resets all sounds when the quiz ends. Displays the result box with a progress circle animated to show the user's score as a percentage. A custom message based on the score: 100%: "Well done, you are a true space explorer!". 50% or more: "Great job, you scored really high!". Below 50%: "Good effort, keep practicing to improve." Uses an animation loop to visually fill the progress circle from 0% to the calculated score percentage.

* Embedding a YouTube Video

    * embedYouTubeVideo(videoId): dynamically embeds a YouTube video in the quiz result page using an iframe. The video is autoplayed (muted by default) when the quiz ends. Prevents stacking of multiple videos in the DOM by clearing any existing video elements before adding a new one.

    * searchVideo function is designed to fetch a list of videos from YouTube based on a specific query. It retrieves the first video's ID and passes it to the embedYouTubeVideo function to display the video. The API key is necessary for authentication. The key is restricted for this application only. The function is not currently in use in the project but remains a learning resource for exploring API integrations. Future updates could include implementing this functionality for dynamic video searches.

    <details><summary>Screenshot</summary>

    <img src="assets/images/docs/api-key-restricted.png">
    </details>

* EmailJS Service

    * The emailjs.send method is used to send the email asynchronously using the send method. If email sending fails, the user is redirected to a "404" page, ensuring a graceful fallback. It requires serviceID, templateID. 

    * The emailjs.init("public-key") function is used to initialize EmailJS with the unique public key. This key links the frontend application with EmailJS account securely, allowing to send emails.

    <details><summary>Screenshot</summary>

    <img src="assets/images/docs/email-js-template.png">
    </details>
 
* Server.js

    * The server listens on port 3000. When a request is received it attempts to serve the index.html file. If successful, it sends the file's content as the response. If an error occurs (e.g., the file is missing), it sends a 404 response with an error message.

    * This file is included in the project for learning purpose. It is designed to demonstrate how to create a basic HTTP server using Node.js, handle file reading, and respond to client requests. The functionality provided by this file is not needed for the core functionality of the project.

* Logo-footer.js

    * The headerHTML and footerHTML strings store the HTML structure for the header and footer and dynamically embeds them into specified sections of the webpage (.box-logo and .box-footer) using JavaScript. It promotes clean code and ensures consistency and maintainability across the project.

## Future features

* To add levels of difficulty - easy, medium, hard.

* To add leaderboard to display top scores and rankings for users to encourage competition.

* To add dynamic feedback showing detailed explanations for correct and incorrect answers.

* To add option to allow users skip questions and return to them later.

* To add options to create accounts to save progress and scores.

## Testing

Please refer to [**here**](TESTING.md) for more information on testing Solar system Quiz game.

[Back to top](#table-of-content)

## Deployment

### GitHub Pages

The site was deployed to GitHub pages. The steps to deploy are as follows: 
1. In the GitHub repository, navigate to the Settings tab 
2. From the left hand menu select 'Pages'
3. From the source select Branch: main
4. Click 'Save'
5. A live link will be displayed when published successfully. 

<details><summary>Screenshot</summary>

<img src="assets/images/docs/deployment.webp">

</details>

Link to the [**live site**](https://silviyahristova.github.io/solar-system-quiz/).

### Forking the GitHub Repository

You can fork the repository by following these steps:
1. Go to the GitHub repository
1. Click on Fork button in upper right hand corner

<details><summary>Screenshot</summary>

<img src="assets/images/docs/forking.webp">

</details>

### Cloning the GitHub Repository

You can clone the repository to use locally by following these steps:
1. Navigate to the GitHub Repository you want to clone
2. Click on the code drop down button
3. Click on HTTPS
4. Copy the repository link to the clipboard
5. Open your IDE of choice (git must be installed for the next steps)
6. Type git clone copied-git-url into the IDE terminal
7. Press 'enter' to create the clone

The project will now be cloned locally for you to use.

<details><summary>Screenshot</summary>

<img src="assets/images/docs/cloning.webp">

</details>

[Back to top](#table-of-content)

## Credits

### Content

* The questions in this quiz were sourced from [Google](https://www.google.com/webhp?hl=bg&sa=X&ved=0ahUKEwiGxO_6_vCKAxXkVkEAHXwEOBsQPAgI), ensuring that they are accurate and relevant.

### Images and Sounds

All images have been downloaded from: [Pexels](https://www.pexels.com/), [Pixabay](https://pixabay.com) and [Freepik](https://www.freepik.com/). The sounds have been downloaded from [FreeSound](https://freesound.org/).

### Code

* [Bootstrap 5](https://getbootstrap.com/): Bootstrap library used throughout the project for layout and responsiveness.

* [Favicon.io](https://favicon.io/): Used to create the site Favicon and provided the code in the head of all pages.

* [Font Awesome](https://fontawesome.com/): Used to add icons to the project and provided the stylesheet link in the head of all pages.

* [Google Fonts](https://fonts.google.com/): Used to get the links to the fonts that are in the head of the html pages.

* [EmailJS](https://www.emailjs.com/): Used to create an API for sending emails directly from the quiz application without needing a dedicated server or backend. EmailJS allows integration with client-side code, enabling me to send email notifications, using their prebuilt code and templates. I implemented the provided code snippets and customized them to meet the specific requirements of the application, ensuring a seamless and efficient email-sending process.

* [JavaScript Fetch API](https://www.digitalocean.com/community/tutorials/how-to-use-the-javascript-fetch-api-to-get-data): Used to get data helped to understand how to retrieve data asynchronously from a server. It explains how to make HTTP requests, handle responses (e.g., JSON), and manage errors using Promises. This method allows to easily interact with APIs, improving performance and simplifying the code compared to older methods like XMLHttpRequest.

### Tutorials

+ [MDN Web Docs](https://developer.mozilla.org/en-US/)
    + used for instant help resource for developers, by developers.
+ [W3School](https://www.w3schools.com/)
    + used for HTML, CSS, JS syntax and tutorials.
+ [Stack Overflow](https://stackoverflow.com/)
    + used for finding the solution to problem during coding.
+ [Code Institute Template](https://github.com/Code-Institute-Org/ci-full-template)
    + used to generate the workspace for the project.
+ [Markdown Guide](https://www.markdownguide.org/)
    + used for Markdown syntax.
+ [Markdown Tools](https://www.markdowntools.com/)
    + used for Markdown syntax.
+ [JavaScript Tutor](https://javascript.info/)
    + used for additional resource for learning JavaScript.
+ [Fisher-Yates Shuffle Algorithm](https://www.nobledesktop.com/learn/javascript/fisher-yates-shuffle-algorithm)
    + used as a learning resource about the algorithm

[Back to top](#table-of-content)

## Acknowledgements

This project is for educational purpose and was completed as a Portfolio 2 Project for the Full Stack Software Developer Diploma at the Code Institute. I would like to thank 

* Director [Pasquale Fasulo](https://www.linkedin.com/in/pasquale-fasulo-68612218a/) at Bristol City College for his understanding, guidance and feedbacks throughout the project.
* My mentor [Rory Patrick Sheridan](https://www.linkedin.com/in/rp-sheridan/) for his guidance, support and suggestions during the project.
* The whole team at [Code Institute](https://codeinstitute.net/) for their teaching and support.
* [Slack Community](https://code-institute-room.slack.com/ssb/redirect) for the help, advices and support. 
* My husband Emil Stoyanov for continues support.

[Back to top](#table-of-content)
