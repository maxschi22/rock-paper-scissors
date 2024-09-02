let playerScore = 0;
let computerScore = 0;
let draws = 0;
let rounds = 0;

const roundResult = document.getElementById("roundResultText");
const roundsDisplay = document.getElementById("rounds");
const playerScoresDisplay = document.getElementById("playerScores");
const computerScoresDisplay = document.getElementById("computerScores");
const drawDisplay = document.getElementById("draws");
const pChoiceDisplay = document.getElementById("pChoice");
const cChoiceDisplay = document.getElementById("cChoice");
const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorsButton = document.getElementById("scissors");

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
    return (roundResultText.innerHTML = "Draw");
  } else if (playerChoice === "paper" && computerChoice === "rock") {
    adjustPlayerScore();
    return (roundResultText.innerHTML = "Player Wins!");
  } else if (playerChoice === "rock" && computerChoice === "scissors") {
    adjustPlayerScore();
    return (roundResultText.innerHTML = "Player Wins!");
  } else if (playerChoice === "scissors" && computerChoice === "paper") {
    adjustPlayerScore();
    return (roundResultText.innerHTML = "Player Wins!");
  } else {
    adjustComputerScore();
    return (roundResultText.innerHTML = "Computer Wins!");
  }
}

//Für Zukünftige Entwicklung
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

const handlePlayerChoice = (playerChoice) => {
  console.log(`Player Choice: ${playerChoice}`);
  pChoiceDisplay.innerHTML = `Player Choice: ${playerChoice}`;
  playRound(playerChoice, getComputerChoice());
};

rockButton.addEventListener("click", () => handlePlayerChoice("rock"));
paperButton.addEventListener("click", () => handlePlayerChoice("paper"));
scissorsButton.addEventListener("click", () => handlePlayerChoice("scissors"));
