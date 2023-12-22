console.log("Rock Paper Scissors Game");

function getComputerChoice() {
    let choiceRandomized = Math.floor(Math.random() * 3);
    if (choiceRandomized == 1) {
        console.log ("rock");
    } else if (choiceRandomized == 2) {
        console.log ("paper");
    } else {
        console.log ("scisscors");
    }
}

function getPlayerChoice() {
    const userChoice = prompt("Rock Paper or Scissors?");
    console.log(userChoice);
    return userChoice.toLowerCase();
}

function playRound (playerChoice, computerChoice) {
    if (playerChoice == computerChoice) {
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