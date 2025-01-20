let currentQuestionIndex = 0;
let score = 0;
let timerInterval;

// Get the user's name from localStorage
const username = localStorage.getItem('username') || 'Player';

// Display the user's name on the page
document.getElementById('scoreboard').innerHTML = `
    <p>Hello, ${username}!</p>
    <p>Score: <span id="score">0</span></p>
`;

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

// Function to display the current question
function displayQuestion() {
    const question = questions[currentQuestionIndex];
    const questionElement = `
        <h2 class="quiz-question">${question.question}</h2>
        <div id="options">
            ${question.options
                .map(
                    (option) =>
                        `<button class="option-btn" onclick="checkAnswer('${option}', this)" >${option}</button>`
                )
                .join('')}
        </div>
        <p id="timer" class="text-warning mt-3">Time Left: 10s</p>
    `;
    document.getElementById('question').innerHTML = questionElement;
    startTimer();
}

// Function to check the selected answer
function checkAnswer(selectedAnswer, button) {
    clearInterval(timerInterval);

    const question = questions[currentQuestionIndex];
    const correctAnswer = question.correctAnswer;

    // Highlight the correct answer in green and wrong answers in red
    const options = document.querySelectorAll('.option-btn');
    options.forEach((option) => {
        const optionText = option.textContent;
        if (optionText === correctAnswer) {
            option.style.backgroundColor = 'green'; // Correct answer
        } else if (optionText === selectedAnswer) {
            option.style.backgroundColor = 'red'; // Incorrect answer
        }
        option.disabled = true; // Disable all buttons after an answer is selected
    });

    // Display fun fact
    const funFactElement = document.createElement('p');
    funFactElement.textContent = question.funFact;
    funFactElement.className = 'mt-3 text-info';
    document.getElementById('question').appendChild(funFactElement);

    if (selectedAnswer === correctAnswer) {
        score++;
        document.getElementById('score').textContent = score;
        setTimeout(nextQuestion, 1000); // Automatically skip to the next question if correct
    } else {
        document.getElementById('next-button').disabled = false;
    }
}

// Function to start the timer
function startTimer() {
    let timeLeft = 10;
    const timerElement = document.getElementById('timer');

    timerInterval = setInterval(() => {
        timeLeft--;
        timerElement.textContent = `Time Left: ${timeLeft}s`;

        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            document.getElementById('next-button').disabled = false;
            // Skip to the next question if time runs out
            const question = questions[currentQuestionIndex];
            const correctAnswer = question.correctAnswer;
            const options = document.querySelectorAll('.option-btn');
            options.forEach((option) => {
                const optionText = option.textContent;
                if (optionText === correctAnswer) {
                    option.style.backgroundColor = 'green';
                } else {
                    option.style.backgroundColor = 'red';
                }
                option.disabled = true;
            });
            document.getElementById('next-button').disabled = false;
        }
    }, 1000);
}

// Function to move to the next question
function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        displayQuestion();
        document.getElementById('next-button').disabled = true;
    } else {
        displayResults();
    }
}

// Function to display the results
function displayResults() {
    let resultMessage = '';

    if (score < 5) {
        resultMessage = "You should watch 'Cars' one more time. Doesn't look like you're a fan!";
    } else if (score < 8) {
        resultMessage = "Not bad! But you can still improve your knowledge of the Cars universe.";
    } else if (score < 10) {
        resultMessage = "Good job! You're almost there!";
    } else {
        resultMessage = "Well done! You're a true fan of the Cars franchise!";
    }

    document.getElementById('quiz-container').innerHTML = `
        <h2 class="main-heading">${resultMessage}</h2>
        <p>Your final score is: ${score} / ${questions.length}</p>
        <button onclick="restartQuiz()" class="btn start-btn btn-warning">Try Again</button>
    `;
}

// Function to restart the quiz
function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;

    document.getElementById('quiz-container').innerHTML = `
        <h1 class="main-heading"><i class="bi bi-flag"></i> Cartoon Cars Quiz</h1>
        <div id="scoreboard" class="subtext my-3">
            <p>Hello, ${username}!</p>
            <p>Score: <span id="score">0</span></p>
        </div>
        <div id="question" class="quiz-question my-4"></div>
        <div id="options" class="quiz-options"></div>
        <button id="next-button" class="btn start-btn btn-warning mt-5" onclick="nextQuestion()" disabled>Next Question</button>
    `;
    displayQuestion();
}

// Initialize the quiz
restartQuiz();
