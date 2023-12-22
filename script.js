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
    const userChoiceLowerCase = userChoice.toLowerCase();
    console.log(userChoiceLowerCase);
    if (userChoiceLowerCase != "rock" && userChoiceLowerCase != "paper" && userChoiceLowerCase != "scissors") {
        alert("Only use Rock, Paper or Scissors")
    }
    return userChoiceLowerCase;
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

function bestOfFive () {
    for (let i = 0; i < 5; i++) {
        playRound(getPlayerChoice(), getComputerChoice());
    }
}

bestOfFive()