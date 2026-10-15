
let userScore = 0;
let computerScore = 0;

function playGame(userChoice) {
    const choices = ["rock", "paper", "scissors"];

    const computerChoice =
        choices[Math.floor(Math.random() * choices.length)];

    let result;

    if (userChoice === computerChoice) {
        result = "It's a Draw! 🤝";
    } else if (
        (userChoice === "rock" && computerChoice === "scissors") ||
        (userChoice === "paper" && computerChoice === "rock") ||
        (userChoice === "scissors" && computerChoice === "paper")
    ) {
        userScore++;
        result = "You Win! 🎉";
    } else {
        computerScore++;
        result = "Computer Wins! 🤖";
    }

    document.getElementById("user-score").textContent = userScore;
    document.getElementById("computer-score").textContent = computerScore;

    document.getElementById("user-choice").textContent =
        "Your choice: " + capitalize(userChoice);

    document.getElementById("computer-choice").textContent =
        "Computer choice: " + capitalize(computerChoice);

    document.getElementById("result").textContent = result;
}

function capitalize(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
}

function resetGame() {
    userScore = 0;
    computerScore = 0;

    document.getElementById("user-score").textContent = 0;
    document.getElementById("computer-score").textContent = 0;
    document.getElementById("user-choice").textContent = "Your choice: -";
    document.getElementById("computer-choice").textContent =
        "Computer choice: -";
    document.getElementById("result").textContent = "Let's Play!";
}
