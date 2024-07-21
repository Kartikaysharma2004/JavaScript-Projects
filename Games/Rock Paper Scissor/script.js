const choices = ["rock", "paper", "scissors"];
let computerChoice = "";
let userChoice = "";
let computerScore = 0;
let userScore = 0;

let userScoreElement = document.getElementById("user-score");
let computerScoreElement = document.getElementById("computer-score");
let userChoiceElement = document.getElementById("user-choice");
let computerChoiceElement = document.getElementById("computer-choice");


let btn2 = document.querySelectorAll(".choices img");
btn2.forEach((box) => {
    box.addEventListener("click", () => {
        userChoice = box.alt.toLowerCase();
        computerChoice = choices[Math.floor(Math.random() * choices.length)];

        let roundResult = determineWinner(userChoice, computerChoice);
        if (roundResult === "user") {
            userScore++;
        } else if (roundResult === "computer") {
            computerScore++;
        }

        userScoreElement.textContent = userScore;
        computerScoreElement.textContent = computerScore;
        userChoiceElement.textContent = userChoice;
        computerChoiceElement.textContent = computerChoice;


        result.textContent = `User: ${userScore} - Computer: ${computerScore}`;
    });
});

function determineWinner(user, computer) {
    if (user === computer) {
        alert("It's a draw!");
        return "draw";
    } else if (user === "rock" && computer === "scissors") {
        alert("You win!");
        return "user";
    } else if (user === "paper" && computer === "rock") {
        alert("You win!");
        return "user";
    } else if (user === "scissors" && computer === "paper") {
        alert("You win!");
        return "user";
    } else {
        alert("You lose!");
        return "computer";
    }
}