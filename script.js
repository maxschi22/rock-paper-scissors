console.log("Rock Paper Scissors Game");

function getComputerChoice() {
    let choiceRandomized = Math.floor(Math.random() * 3);
    if (choiceRandomized == 1) {
        console.log ("rock");
        return "rock";
    } else if (choiceRandomized == 2) {
        console.log ("paper");
        return "paper";
    } else {
        console.log ("scissors");
        return "scissors";
    }
}

function getPlayerChoice() {
    const userChoice = prompt("Rock Paper or Scissors?");
    userChoice.toLowerCase();
    console.log(userChoice);
    if (userChoice != "rock" && userChoice != "paper" && userChoice != "scissors") {
        alert("Only use Rock, Paper or Scissors")
    }
    return userChoice.toLowerCase();
}

function playRound (playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        console.log("draw");
        return "draw";
    } else if (playerChoice == "paper" && computerChoice == "rock") {
        console.log("player wins");
        return "player wins";
    } else if (playerChoice == "rock" && computerChoice == "scissors") {
        console.log("player wins");
        return "player wins";
    } else if (playerChoice == "scissors" && computerChoice == "paper") {
        console.log("player wins");
        return "player wins";
    } else {
        console.log("computer wins");
        return "computer wins";
    }
}

playRound(getPlayerChoice(), getComputerChoice());