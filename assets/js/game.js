let currentQuestionIndex = 0;
let score = 0;
let timerInterval;

// 1. Get the user's name from localStorage (or default to "Player").
const storedName = localStorage.getItem('username') || 'Player';

// Sounds
const correctSound = new Audio('assets/sounds/correct-6033.mp3');
const wrongSound = new Audio('assets/sounds/wronganswer-37702.mp3');

const questions = [
  {
    question: "Who is Lightning McQueen's best friend?",
    options: ["Mater", "Sally", "Doc Hudson"],
    correctAnswer: "Mater",
    funFact: "Mater is Lightning McQueen's goofy best friend and a tow truck."
  },
  {
    question: "Which car is a secret agent in 'Cars 2'?",
    options: ["Finn McMissile", "Guido", "Jackson Storm"],
    correctAnswer: "Finn McMissile",
    funFact: "Finn McMissile is a British spy car in Cars 2."
  },
  {
    question: "Who is the main antagonist in 'Cars 3'?",
    options: ["Jackson Storm", "Chick Hicks", "The King"],
    correctAnswer: "Jackson Storm",
    funFact: "Jackson Storm is a high-tech race car who challenges Lightning McQueen."
  },
  {
    question: "What is the name of Mater's girlfriend?",
    options: ["Mia", "Tia", "Holly"],
    correctAnswer: "Holly",
    funFact: "Holly Shiftwell is Mater's romantic interest and a fellow spy in Cars 2."
  },
  {
    question: "What type of car is Lightning McQueen?",
    options: ["Race car", "Truck", "Ambulance"],
    correctAnswer: "Race car",
    funFact: "Lightning McQueen is a Piston Cup race car with a competitive streak."
  },
  {
    question: "What city does Lightning McQueen race in 'Cars 2'?",
    options: ["Tokyo", "Paris", "London"],
    correctAnswer: "Tokyo",
    funFact: "Lightning McQueen races in Tokyo during the World Grand Prix in Cars 2."
  },
  {
    question: "What is the name of the mechanic in 'Cars'?",
    options: ["Luigi", "Ramone", "Sarge"],
    correctAnswer: "Luigi",
    funFact: "Luigi is the friendly Italian Fiat 500 who runs the tire shop in Radiator Springs."
  },
  {
    question: "Which car is a race commentator in 'Cars 3'?",
    options: ["Chick Hicks", "Darrell Cartrip", "Bob Cutlass"],
    correctAnswer: "Darrell Cartrip",
    funFact: "Darrell Cartrip is a race commentator and former Piston Cup racer."
  },
  {
    question: "Who is Lightning McQueen's trainer in 'Cars 3'?",
    options: ["Cruise Ramirez", "Doc Hudson", "Sally"],
    correctAnswer: "Cruise Ramirez",
    funFact: "Cruise Ramirez is a trainer who helps Lightning McQueen get back in shape."
  },
  {
    question: "What is the name of the tractor that Lightning McQueen races against in 'Cars'?",
    options: ["Frank", "Clyde", "Tom"],
    correctAnswer: "Frank",
    funFact: "Frank is the giant combine harvester who guards the tractors in the fields."
  }
];

// ---------------------------------------------------------
// Restart the quiz from the beginning
// ---------------------------------------------------------
function restartQuiz() {
  currentQuestionIndex = 0;
  score = 0;

  // Rebuild the initial quiz layout
  document.getElementById('quiz-container').innerHTML = `
    <h1 class="main-heading">
      <i class="bi bi-flag"></i> Cartoon Cars Quiz
    </h1>

    <div id="scoreboard" class="subtext my-3">
      <p>Hello, <span id="username"></span>!</p>
      <p>Score: <span id="score">0</span></p>
    </div>

    <!-- I personally wrote this code: Race-themed Progress Bar Container -->
    <div id="progress-bar-container">
      <div id="race-track"></div>
      <div id="race-car"></div>
    </div>

    <!-- I personally wrote this code: Timer Container (speedometer style) -->
    <div id="timer-container">
      <span id="timer">Time Left: 10s</span>
    </div>

    <div id="question" class="quiz-question my-4"></div>
    <div id="options" class="quiz-options"></div>

    <button
      id="next-button"
      class="btn start-btn btn-warning mt-5"
      onclick="nextQuestion()"
      disabled
    >
      Next Question
    </button>

    <button
      id="restart-button"
      class="btn start-btn btn-danger mt-3"
      onclick="restartQuiz()"
      style="display: none;"
    >
      Restart
    </button>
  `;

  // Set the scoreboard name
  document.getElementById('username').textContent = storedName;

  // Display the first question
  displayQuestion();
}

// ---------------------------------------------------------
// Display the current question, numbered: "Question X of Y"
// ---------------------------------------------------------
function displayQuestion() {
  const questionObj = questions[currentQuestionIndex];
  const questionNumber = currentQuestionIndex + 1;
  const totalQuestions = questions.length;

  const questionHTML = `
    <h2 class="quiz-question">
      Question ${questionNumber} of ${totalQuestions}:<br>
      ${questionObj.question}
    </h2>
    <div id="options">
      ${questionObj.options
        .map(
          (option) =>
            `<button class="option-btn" onclick="checkAnswer('${option}')">${option}</button>`
        )
        .join('')}
    </div>
  `;

  document.getElementById('question').innerHTML = questionHTML;

  // subtle fade-in effect for each new question
  const questionDiv = document.getElementById('question');
  questionDiv.classList.remove('fade-in');
  // Force reflow to restart animation
  void questionDiv.offsetWidth;
  questionDiv.classList.add('fade-in');

  // Reset/Start the timer
  document.getElementById('timer').textContent = "Time Left: 10s";
  startTimer();

  // update the progress bar (race car position)
  updateProgressBar();
}

// ---------------------------------------------------------
// Race-themed progress bar updater
// ---------------------------------------------------------
function updateProgressBar() {
  const totalQuestions = questions.length;
  const progressPercentage = (currentQuestionIndex / totalQuestions) * 100;
  const raceCar = document.getElementById('race-car');
  if (raceCar) {
    raceCar.style.left = progressPercentage + '%';
  }
}

// ---------------------------------------------------------
// Check the selected answer
// ---------------------------------------------------------
function checkAnswer(selectedAnswer) {
  clearInterval(timerInterval);

  const question = questions[currentQuestionIndex];
  const correctAnswer = question.correctAnswer;

  // Highlight correct/incorrect answers using CSS classes
  const optionButtons = document.querySelectorAll('.option-btn');
  optionButtons.forEach((btn) => {
    if (btn.textContent === correctAnswer) {
      btn.classList.add('correct');
    } else if (btn.textContent === selectedAnswer) {
      btn.classList.add('wrong');
    }
    btn.disabled = true;
  });

  // Play correct or wrong sound
  if (selectedAnswer === correctAnswer) {
    correctSound.play();
  } else {
    wrongSound.play();
  }

  // Display fun fact (white)
  const funFactElement = document.createElement('p');
  funFactElement.textContent = question.funFact;
  funFactElement.classList.add('fun-fact');
  document.getElementById('question').appendChild(funFactElement);

  // Quick feedback after each question
  let feedbackMsg = "";
  if (selectedAnswer === correctAnswer) {
    feedbackMsg = "Great job!";
    score++;
    document.getElementById('score').textContent = score;
    // Auto-advance after 3 seconds if correct
    setTimeout(nextQuestion, 3000);
  } else {
    feedbackMsg = "Better luck next time!";
    // If incorrect, user must click Next
    document.getElementById('next-button').disabled = false;
  }
  const feedbackElement = document.createElement('p');
  feedbackElement.textContent = feedbackMsg;
  feedbackElement.classList.add('feedback-message');
  document.getElementById('question').appendChild(feedbackElement);
}

// ---------------------------------------------------------
// Start a 10s timer
// ---------------------------------------------------------
function startTimer() {
  let timeLeft = 10;
  const timerElement = document.getElementById('timer');

  timerInterval = setInterval(() => {
    timeLeft--;
    timerElement.textContent = `Time Left: ${timeLeft}s`;

    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      // Time ran out; highlight correct/wrong answers
      const question = questions[currentQuestionIndex];
      const correctAnswer = question.correctAnswer;

      // Play wrongSound when time runs out
      wrongSound.play();

      document.querySelectorAll('.option-btn').forEach((btn) => {
        if (btn.textContent === correctAnswer) {
          btn.classList.add('correct');
        } else {
          btn.classList.add('wrong');
        }
        btn.disabled = true;
      });

      // Enable Next button
      document.getElementById('next-button').disabled = false;
    }
  }, 1000);
}

// ---------------------------------------------------------
// Next question, or show final results
// ---------------------------------------------------------
function nextQuestion() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    displayQuestion();
    document.getElementById('next-button').disabled = true;
  } else {
    displayResults();
  }
}

// ---------------------------------------------------------
// Final results screen
// ---------------------------------------------------------
function displayResults() {
  let resultMessage = "";

  if (score < 5) {
    resultMessage =
      "You should watch 'Cars' again; doesn't look like you're a big fan!";
  } else if (score < 8) {
    resultMessage =
      "Not bad! But you can still improve your Cars knowledge.";
  } else if (score < 10) {
    resultMessage =
      "Good job! You're almost an expert!";
  } else {
    resultMessage =
      "Well done! You're a true fan of the Cars franchise!";
  }

  document.getElementById('quiz-container').innerHTML = `
    <h2 class="main-heading">${resultMessage}</h2>
    <p class="final-score">Your final score is: ${score} / ${questions.length}</p>
    <button
      id="restart-button"
      class="btn start-btn btn-danger mt-3"
      onclick="restartQuiz()"
    >
      Restart
    </button>
  `;
}
