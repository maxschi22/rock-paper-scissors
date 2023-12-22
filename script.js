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
    return userChoice;
}

function playRound (playerChoice, computerChoice) {
    const playerChoice = getPlayerChoice().toLowerCase();
    const computerChoice = getComputerChoice().toLowerCase();

    if (playerChoice == computerChoice) {
        return "draw";
    } else if (playerChoice == "paper" && computerChoice == "rock") {
        return "player wins";
    } else if (playerChoice == "rock" && computerChoice == "scissors") {
        return "player wins";
    } else if (playerChoice == "scissors" && computerChoice == "paper") {
        return "player wins";
    } else {
        return "computer wins";
    }
}