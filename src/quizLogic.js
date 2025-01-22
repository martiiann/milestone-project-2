let currentQuestionIndex = 0;
let score = 0;

/**
 * Resets the quiz state by setting currentQuestionIndex and score to 0.
 */
function resetQuiz() {
  currentQuestionIndex = 0;
  score = 0;
}

/**
 * Checks if the selected answer matches the correct answer.
 * @param {string} selectedAnswer - The answer chosen by the user.
 * @param {string} correctAnswer - The correct answer to compare against.
 * @returns {boolean} True if the selected answer is correct, false otherwise.
 */
function isAnswerCorrect(selectedAnswer, correctAnswer) {
  return selectedAnswer === correctAnswer;
}

/**
 * Increments the quiz score by 1.
 */
function incrementScore() {
  score++;
}

/**
 * Advances to the next question.
 * @param {number} totalQuestions - The total number of questions in the quiz.
 * @throws Will throw an error if totalQuestions is not a positive number.
 * @returns {boolean} True if there are more questions after advancing; false if reached the end.
 */
function nextQuestion(totalQuestions) {
  if (typeof totalQuestions !== 'number' || totalQuestions <= 0) {
    throw new Error('totalQuestions must be a positive number');
  }
  if (currentQuestionIndex >= totalQuestions) {
    return false;
  }
  currentQuestionIndex++;
  return currentQuestionIndex < totalQuestions;
}

/**
 * Retrieves the current score.
 * @returns {number} The current score.
 */
function getCurrentScore() {
  return score;
}

/**
 * Retrieves the current question index.
 * @returns {number} The current question index.
 */
function getCurrentQuestionIndex() {
  return currentQuestionIndex;
}

module.exports = {
  resetQuiz,
  isAnswerCorrect,
  incrementScore,
  nextQuestion,
  getCurrentScore,
  getCurrentQuestionIndex
};
