// JavaScript for Quiz
const quizForm = document.getElementById('quiz-form');
const submitBtn = document.getElementById('submit-btn');
const scoreDisplay = document.getElementById('score-display');

// Correct answers (default to empty)
let answers = {};

// Function to set correct answers based on the quiz
function setAnswers(quizType) {
    if (quizType === 'calculus') {
        answers = {
            q1: "a",  // cos(x)
            q2: "b",  // ln|x| + C
            q3: "a",  // 2x
            q4: "b",  // 0
            q5: "b",  // 1/x
        };
    } else if (quizType === 'biology') {
        answers = {
            q1: "b",  // Mitochondria
            q2: "b",  // Photosynthesis
            q3: "b",  // Heart
            q4: "b",  // DNA
            q5: "b",  // Roots
        };
    } else if (quizType === 'english') {
        answers = {
            q1: "c",  // Subject-Verb Agreement
            q2: "a",  // Tenses
            q3: "d",  // Prepositions
            q4: "b",  // Pronouns
            q5: "a",  // Articles
        };
    } else if (quizType === 'computerScience') {
        answers = {
            q1: "a",  // Algorithm
            q2: "c",  // Binary Search
            q3: "b",  // Data Structures
            q4: "d",  // Operating Systems
            q5: "a",  // Networking
        };
    } else if (quizType === 'ai') {
        answers = {
            q1: "b",  // Machine Learning
            q2: "d",  // Neural Networks
            q3: "a",  // Search Algorithms
            q4: "c",  // Natural Language Processing
            q5: "d",  // Reinforcement Learning
        };
    }
}

// Determine which quiz is active based on the page URL or another identifier
if (window.location.pathname.includes('bioquiz.html')) {
    setAnswers('biology'); // Biology quiz answers
} else if (window.location.pathname.includes('calculusQuiz.html')) {
    setAnswers('calculus'); // Calculus quiz answers
} else if (window.location.pathname.includes('englishQuiz.html')) {
    setAnswers('english'); // English quiz answers
} else if (window.location.pathname.includes('computerscienceQuiz.html')) {
    setAnswers('computerScience'); // Computer Science quiz answers
} else if (window.location.pathname.includes('aiQuiz.html')) {
    setAnswers('ai'); // Artificial Intelligence quiz answers
}

// Submit Event
submitBtn.addEventListener('click', () => {
    let score = 0;
    let totalQuestions = Object.keys(answers).length;
    let allAnswered = true;

    // Loop through each question
    Object.keys(answers).forEach((questionId) => {
        const selectedOption = quizForm.elements[questionId].value;
        const questionDiv = document.getElementById(questionId);

        if (!selectedOption) {
            // Mark skipped questions
            questionDiv.classList.add('skipped');
            allAnswered = false;
        } else {
            // Remove skipped class if answered
            questionDiv.classList.remove('skipped');
            // Check answer
            if (selectedOption === answers[questionId]) {
                score++;
            }
        }
    });

    if (!allAnswered) {
        // Alert user to complete unanswered questions
        alert("Please answer all the questions before submitting the quiz!");
    } else {
        // Display the score if all questions are answered
        scoreDisplay.textContent = `You scored ${score} out of ${totalQuestions}`;
    }
});
