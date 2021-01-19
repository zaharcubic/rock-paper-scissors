//create a function that picks randomly Rock, Paper or scissors
function computerPlay() {
    const availablePicks = ["rock", "paper", "scissors"];
    const comPick = availablePicks[Math.floor(Math.random() * availablePicks.length)];
    console.log("Computer picks " + comPick)
    return comPick;
}
//create a function that plays a single round
//must have two paramenters - playerSelection and computerSelection
//must return a string that declares the winner
function playRound(playerSelection, computerSelection) {

    if (playerSelection == computerSelection) {
        return "It's a tie!";
    } else if (playerSelection == "rock" && computerSelection == "paper") {
        return "Computer wins";
    } else if (playerSelection == "rock" && computerSelection == "scissors") {
        return "Player wins"
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        return "Player Wins";
    } else if (playerSelection == "paper" && computerSelection == "scissors") {
        return "Computer Wins"
    } else if (playerSelection == "scissors" && computerSelection == "rock") {
        return "Computer Wins"
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        return "Player Wins"
    }
}
//function in which the game plays 5 rounds automatically
function game() {
    for (let i = 0; i < 5; i++) {
        const computerSelection = computerPlay();
        playRound();
        console.log(playRound(playerSelection, computerSelection));
    }
}
//gets input from the player and the converts it into lowercase to make it case insensitive
let playerSelection = prompt("Please pick from rock, paper, or scissors");
playerSelection = playerSelection.toLowerCase();