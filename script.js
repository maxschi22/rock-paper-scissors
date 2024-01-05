console.log("Rock Paper Scissors Game");

let playerScore = 0;
let computerScore = 0;
let draws = 0;
let rounds = 0;

const roundsDisplay = document.getElementById("rounds");
const playerScoresDisplay = document.getElementById("playerScores");
const computerScoresDisplay = document.getElementById("computerScores");
const drawDisplay = document.getElementById("draws");
const pChoiceDisplay = document.getElementById("pChoice");
const cChoiceDisplay = document.getElementById("cChoice");

function getComputerChoice() {
    let choiceRandomized = Math.floor(Math.random() * 3);
    if (choiceRandomized == 1) {
        cChoiceDisplay.innerHTML = "Computer Choice: " + "rock";
        console.log ("COM Choice: rock");
        return "rock";
    } else if (choiceRandomized == 2) {
        cChoiceDisplay.innerHTML = "Computer Choice: " + "paper";
        console.log ("COM Choice: paper");
        return "paper";
    } else {
        cChoiceDisplay.innerHTML = "Computer Choice: " + "scissors";
        console.log ("COM Choice: scissors");
        return "scissors";
    }
}

function getPlayerChoice() {
    const userChoice = prompt("Rock Paper or Scissors?");
    const userChoiceLowerCase = userChoice.toLowerCase();
    console.log(userChoiceLowerCase);
    if (userChoiceLowerCase != "rock" && userChoiceLowerCase != "paper" && userChoiceLowerCase != "scissors") {
        alert("Only use Rock, Paper or Scissors")
    }
    return userChoiceLowerCase;
}

function playRound (playerChoice, computerChoice) {
    adjustRounds();
    if (playerChoice === computerChoice) {
        console.log("draw");
        adjustDraws();
        return "draw";
    } else if (playerChoice == "paper" && computerChoice == "rock") {
        console.log("player wins");
        adjustPlayerScore();
        return "player wins";
    } else if (playerChoice == "rock" && computerChoice == "scissors") {
        console.log("player wins");
        adjustPlayerScore();
        return "player wins";
    } else if (playerChoice == "scissors" && computerChoice == "paper") {
        console.log("player wins");
        adjustPlayerScore();
        return "player wins";
    } else {
        console.log("computer wins");
        adjustComputerScore();
        return "computer wins";
    }
}

function winner(playerGameScore, computerGameScore) {
    if (playerGameScore == computerGameScore) {
        console.log("DRAW!");
        return "draw round";
    } else if (playerGameScore > computerGameScore) {
        console.log("Player wins");
        return "player wins round";
    } else {
        console.log("Computer wins");
        return "computer wins round"
    }
}

function adjustRounds() {
    rounds++;
    roundsDisplay.innerHTML = "Rounds: " + rounds.toString();
}

function adjustPlayerScore(){
    playerScore++;
    playerScoresDisplay.innerHTML = "Player Score: " + playerScore.toString();
}

function adjustComputerScore(){
    computerScore++;
    computerScoresDisplay.innerHTML = "Computer Score: " + computerScore.toString();
}

function adjustDraws(){
    draws++;
    drawDisplay.innerHTML = "Draws: " + draws.toString();
}

const rockButton = document.getElementById("rock");
rockButton.addEventListener("click", () => {
    console.log("Player Choice: rock")
    playRound("rock", getComputerChoice());
    pChoiceDisplay.innerHTML = "Player Choice: " + "rock";
});

const paperButton = document.getElementById("paper");
paperButton.addEventListener("click", () => {
    console.log("Player Choice: paper")
    playRound("paper", getComputerChoice());
    pChoiceDisplay.innerHTML = "Player Choice: " + "paper";
});

const scissorsButton = document.getElementById("scissors");
scissorsButton.addEventListener("click", () => {
    console.log("Player Choice: scissors")
    playRound("scissors", getComputerChoice());
    pChoiceDisplay.innerHTML = "Player Choice: " + "scissors";
});