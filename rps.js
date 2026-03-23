function getComputerChoice(computerChoice){
    var availableMoves = ['rock','paper','scissors'],
        randomNumber = Math.floor(Math.random() * availableMoves.length),
        computerChoice = availableMoves[randomNumber];
    
    return computerChoice;
}

function getPlayerChoice(playerChoice){
    const playerChoice = prompt('make your move!');
    playerChoice = playerChoice.tolowercase();
    return playerChoice;
}

let humanScore = 0

let computerScore = 0

function playRound(playerChoice,computerChoice){
    if (playerChoice === 'rock' && computerChoice === 'paper') {
        computerScore = ++1
    } else if (playerChoice === 'rock' && computerChoice === 'scissors') {
        humanScore = ++1
    } else if (playerChoice === 'rock' && computerChoice === 'rock') {

    } else if (playerChoice === 'paper' && computerChoice === 'rock') {
        humanScore = ++1
    } else if (playerChoice === 'paper' && computerChoice === 'scissors') {
        computerScore = ++1
    } else if (playerChoice === 'paper' && computerChoice === 'paper') {

    } else if (playerChoice === 'scissors' && computerChoice === 'rock') {
        computerScore = ++1
    } else if (playerChoice === 'scissors' && computerChoice === 'paper') {
        humanScore = ++1
    } else if (playerChoice === 'scissors' && computerChoice === 'scissors') {
        
    }
    
}