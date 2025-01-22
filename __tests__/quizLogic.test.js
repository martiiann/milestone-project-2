const {
    resetQuiz,
    isAnswerCorrect,
    incrementScore,
    nextQuestion,
    getCurrentScore,
    getCurrentQuestionIndex
  } = require('../src/quizLogic');
  
  describe('Quiz Logic', () => {
    beforeEach(() => {
      resetQuiz();
    });
  
    describe('isAnswerCorrect', () => {
      test('returns true for correct answer', () => {
        expect(isAnswerCorrect('Mater', 'Mater')).toBe(true);
      });
  
      test('returns false for incorrect answer', () => {
        expect(isAnswerCorrect('Sally', 'Mater')).toBe(false);
      });
    });
  
    describe('incrementScore', () => {
      test('increases the score by 1', () => {
        expect(getCurrentScore()).toBe(0);
        incrementScore();
        expect(getCurrentScore()).toBe(1);
      });
    });
  
    describe('resetQuiz', () => {
      test('resets currentQuestionIndex and score to 0', () => {
        incrementScore();
        nextQuestion(5);
        resetQuiz();
        expect(getCurrentScore()).toBe(0);
        expect(getCurrentQuestionIndex()).toBe(0);
      });
    });
  
    describe('nextQuestion', () => {
      test('increments question index and returns true when more questions remain', () => {
        const totalQuestions = 10;
        expect(getCurrentQuestionIndex()).toBe(0);
        const hasNext = nextQuestion(totalQuestions);
        expect(getCurrentQuestionIndex()).toBe(1);
        expect(hasNext).toBe(true);
      });
  
      test('returns false when no more questions remain', () => {
        const totalQuestions = 3;
        // Advance to the end of questions
        nextQuestion(totalQuestions); // index 1
        nextQuestion(totalQuestions); // index 2
        const hasNext = nextQuestion(totalQuestions); // index 3
        expect(hasNext).toBe(false);
        expect(getCurrentQuestionIndex()).toBe(3);
      });
  
      test('throws an error for invalid totalQuestions (non-positive number)', () => {
        expect(() => nextQuestion(0)).toThrow('totalQuestions must be a positive number');
        expect(() => nextQuestion(-5)).toThrow('totalQuestions must be a positive number');
        expect(() => nextQuestion('ten')).toThrow('totalQuestions must be a positive number');
      });
    });
  
    describe('getCurrentScore and getCurrentQuestionIndex', () => {
      test('return the current score and question index correctly', () => {
        expect(getCurrentScore()).toBe(0);
        expect(getCurrentQuestionIndex()).toBe(0);
        incrementScore();
        nextQuestion(5);
        expect(getCurrentScore()).toBe(1);
        expect(getCurrentQuestionIndex()).toBe(1);
      });
    });
  });
  