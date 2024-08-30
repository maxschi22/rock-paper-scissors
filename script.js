let playerScore = 0;
let computerScore = 0;
let draws = 0;
let rounds = 0;

const roundResult = document.getElementById("roundResult");
const roundsDisplay = document.getElementById("rounds");
const playerScoresDisplay = document.getElementById("playerScores");
const computerScoresDisplay = document.getElementById("computerScores");
const drawDisplay = document.getElementById("draws");
const pChoiceDisplay = document.getElementById("pChoice");
const cChoiceDisplay = document.getElementById("cChoice");

const choices = ["rock", "paper", "scissors"];

function getComputerChoice() {
  let choiceRandomized = Math.floor(Math.random() * choices.length);
  const choice = choices[choiceRandomized];
  cChoiceDisplay.innerHTML = "Computer Choice: " + choice;
  return choice;
}

function playRound(playerChoice, computerChoice) {
  adjustRounds();
  if (playerChoice === computerChoice) {
    adjustDraws();
    return "draw";
  } else if (playerChoice == "paper" && computerChoice === "rock") {
    adjustPlayerScore();
    return "player wins";
  } else if (playerChoice == "rock" && computerChoice === "scissors") {
    adjustPlayerScore();
    return "player wins";
  } else if (playerChoice == "scissors" && computerChoice === "paper") {
    adjustPlayerScore();
    return "player wins";
  } else {
    adjustComputerScore();
    return "computer wins";
  }
}

function winner(playerGameScore, computerGameScore) {
  if (playerGameScore == computerGameScore) {
    return "draw round";
  } else if (playerGameScore > computerGameScore) {
    return "player wins round";
  } else {
    return "computer wins round";
  }
}

function adjustRounds() {
  rounds++;
  roundsDisplay.innerHTML = "Rounds: " + rounds.toString();
}

function adjustPlayerScore() {
  playerScore++;
  playerScoresDisplay.innerHTML = "Player Score: " + playerScore.toString();
}

function adjustComputerScore() {
  computerScore++;
  computerScoresDisplay.innerHTML =
    "Computer Score: " + computerScore.toString();
}

function adjustDraws() {
  draws++;
  drawDisplay.innerHTML = "Draws: " + draws.toString();
}

const rockButton = document.getElementById("rock");
rockButton.addEventListener("click", () => {
  playRound("rock", getComputerChoice());
  pChoiceDisplay.innerHTML = "Player Choice: " + "rock";
});

const paperButton = document.getElementById("paper");
paperButton.addEventListener("click", () => {
  playRound("paper", getComputerChoice());
  pChoiceDisplay.innerHTML = "Player Choice: " + "paper";
});

const scissorsButton = document.getElementById("scissors");
scissorsButton.addEventListener("click", () => {
  playRound("scissors", getComputerChoice());
  pChoiceDisplay.innerHTML = "Player Choice: " + "scissors";
});
