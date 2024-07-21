const questions = [
    {
        question: "What does HTML stand for?",
        options: ["Hypertext Markup Language", "Hypertext Multi Language", "Hightext Markup Language", "Hyperlink Text Markup Language"],
        correct: 0
    },
    {
        question: "Which of the following is used to style a web page?",
        options: ["HTML", "JavaScript", "CSS", "PHP"],
        correct: 2
    },
    {
        question: "What does CSS stand for?",
        options: ["Cascading Style Sheets", "Cascading Simple Sheets", "Computer Style Sheets", "Creative Style Sheets"],
        correct: 0
    },
    {
        question: "Which HTML element is used to define a list of items?",
        options: ["<ol>", "<ul>", "<li>", "<list>"],
        correct: 1
    },
    {
        question: "What is the purpose of the <head> tag in HTML?",
        options: ["To contain metadata and links to scripts and styles", "To display the main content of the page", "To define the footer of the page", "To create navigation menus"],
        correct: 0
    }
];

let currentQuestionIndex = 0;
let totalQuestions = questions.length;
let score = 0;

function loadQuestion(index) {
    const questionElement = document.getElementById('question');
    const option1Element = document.getElementById('option1');
    const option2Element = document.getElementById('option2');
    const option3Element = document.getElementById('option3');
    const option4Element = document.getElementById('option4');
    const countElement = document.querySelector('.count');

    const currentQuestion = questions[index];
    questionElement.textContent = `${index + 1}. ${currentQuestion.question}`;
    option1Element.textContent = `A. ${currentQuestion.options[0]}`;
    option2Element.textContent = `B. ${currentQuestion.options[1]}`;
    option3Element.textContent = `C. ${currentQuestion.options[2]}`;
    option4Element.textContent = `D. ${currentQuestion.options[3]}`;
    countElement.textContent = `${index + 1} of ${totalQuestions} Questions`;
}

document.addEventListener('DOMContentLoaded', () => {
    loadQuestion(currentQuestionIndex);

    document.querySelectorAll('.options button').forEach((button, index) => {
        button.addEventListener('click', () => {
            const currentQuestion = questions[currentQuestionIndex];
            if (index === currentQuestion.correct) {
                alert("Correct Answer!");
                score++;
            } else {
                alert("Wrong Answer!");
            }
            
            if (currentQuestionIndex < totalQuestions - 1) {
                currentQuestionIndex++;
                loadQuestion(currentQuestionIndex);
            } else {
                alert(`You've completed the quiz! Your score is ${score} out of ${totalQuestions}.`);
            }
        });
    });
});
