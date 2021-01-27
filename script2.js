let playerSelection;
let computerSelection;
let playerScore = 0;
let computerScore = 0;


function computerPlay() {
    const availablePicks = ["rock", "paper", "scissors"];
    let comPick = availablePicks[Math.floor(Math.random() * availablePicks.length)];
    return comPick;
}


function playRound(playerSelection, computerSelection) {
    computerSelection = computerPlay().toLowerCase();
    // playerSelection = prompt("Please pick from rock, paper, or scissors");
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection == computerSelection) {
        console.log("It's a tie");
    } else if ((playerSelection == 'rock' && computerSelection == 'scissors') || (playerSelection == 'paper' && computerSelection == 'rock') || (playerSelection == 'scissors' && computerSelection == 'paper')) {
        playerScore = ++playerScore;
        console.log(`${computerScore} - ${playerScore}`);
    } else {
        computerScore = ++computerScore;
        console.log(`${computerScore} - ${playerScore}`);
    };
    
};
const rock = document.querySelector('#rock');
rock.addEventListener('click', () => {
    playerSelection = 'rock';
    playRound(playerSelection, computerSelection);
    if(playerScore == 5 || computerScore == 5){
        console.log('Winner Declaration');
    }
});

const paper = document.querySelector('#paper');
paper.addEventListener('click', () => {
    playerSelection = 'paper';
    playRound(playerSelection, computerSelection);
    if(playerScore == 5 || computerScore == 5){
        console.log('Winner Declaration');
    }
});

const scissors = document.querySelector('#scissors');
scissors.addEventListener('click', () => {
    playerSelection = 'scissors';
    playRound(playerSelection, computerSelection);
    if(playerScore == 5 || computerScore == 5){
        console.log('Winner Declaration');
    }
});

