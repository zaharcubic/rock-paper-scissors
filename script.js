//create a function that picks randomly Rock, Paper or scissors
function computerPlay() {
    const availablePicks = ["rock", "paper", "scissors"];
    const comPick = availablePicks[Math.floor(Math.random() * availablePicks.length)];
    console.log(comPick);
}