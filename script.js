let playerSelection;
let computerSelection;
let playerScore = 0;
let computerScore = 0;

//create a function that picks randomly Rock, Paper or scissors
function computerPlay() {
    const availablePicks = ["rock", "paper", "scissors"];
    let comPick = availablePicks[Math.floor(Math.random() * availablePicks.length)];
    return comPick;
}
//create a function that plays a single round
//must have two paramenters - playerSelection and computerSelection
//must return a string that declares the winner
function playRound(playerSelection, computerSelection) {
    playerSelection = prompt("Please pick from rock, paper, or scissors");
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerPlay();
    console.log(`Player picks ${playerSelection}`);
    console.log(`Computer picks ${ computerSelection }`);
    if (playerSelection == computerSelection) {
        return "It's a tie!";
    } else if (playerSelection == "rock" && computerSelection == "paper") {
        computerScore += 1;
        return "Computer wins";
    } else if (playerSelection == "rock" && computerSelection == "scissors") {
        playerScore += 1;
        return "Player wins";
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        playerScore += 1;
        return "Player Wins";
    } else if (playerSelection == "paper" && computerSelection == "scissors") {
        computerScore += 1;
        return "Computer Wins"
    } else if (playerSelection == "scissors" && computerSelection == "rock") {
        computerScore += 1;
        return "Computer Wins"
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        playerScore += 1;
        return "Player Wins"
    } else {
        return "Please pick either rock, paper or scissors!"
    }
}
//function in which the game plays 5 rounds automatically
function game() {

    for (let i = 0; i < 5; i++) {
        console.log(playRound(playerSelection, computerSelection));
    }
    console.log(`Player: ${playerScore} - Computer: ${computerScore}`);
}