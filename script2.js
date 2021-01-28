let playerSelection;
let computerSelection;
let playerScore = 0;
let computerScore = 0;
const declaration = document.querySelector('#declaration');

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
        declaration.textContent = 'It\'s a tie!'
    } else if ((playerSelection == 'rock' && computerSelection == 'scissors') || (playerSelection == 'paper' && computerSelection == 'rock') || (playerSelection == 'scissors' && computerSelection == 'paper')) {
        playerScore = ++playerScore;
        declaration.textContent = `Player wins this round! Computer chose ${computerSelection}`;
    } else {
        computerScore = ++computerScore;
        declaration.textContent = `Computer Wins! Computer chose ${computerSelection}`;
    };
    const score = document.querySelector('#score');
    score.textContent = `The score is: Player: ${playerScore} - Computer: ${computerScore}`;
};



const rock = document.querySelector('#rock');
rock.addEventListener('click', () => {
    playerSelection = 'rock';
    playRound(playerSelection, computerSelection);
    if (playerScore == 5) {
        alert('Player Wins!');
        computerScore = 0;
        playerScore = 0;
    } else if (computerScore == 5){
        alert('Computer Wins!');
        computerScore = 0;
        playerScore = 0;
    }
});

const paper = document.querySelector('#paper');
paper.addEventListener('click', () => {
    playerSelection = 'paper';
    playRound(playerSelection, computerSelection);
    if (playerScore == 5) {
        alert('Player Wins!');
        computerScore = 0;
        playerScore = 0;
    } else if (computerScore == 5){
        alert('Computer Wins!');
        computerScore = 0;
        playerScore = 0;
    }
});

const scissors = document.querySelector('#scissors');
scissors.addEventListener('click', () => {
    playerSelection = 'scissors';
    playRound(playerSelection, computerSelection);
    if (playerScore == 5) {
        alert('Player Wins!');
        computerScore = 0;
        playerScore = 0;
    } else if (computerScore == 5){
        alert('Computer Wins!');
        computerScore = 0;
        playerScore = 0;
    }
});

