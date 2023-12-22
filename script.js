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
    const usersChoice = prompt("Rock Paper or Scissors?");
    console.log(usersChoice);
    return usersChoice;
}

function playRound (playerChoice, computerChoice) {

}

getComputerChoice();
getPlayerChoice();