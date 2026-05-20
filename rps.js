function getComputerChoice(computerChoice){
    var availableMoves = ['rock','paper','scissors'],
        randomNumber = Math.floor(Math.random() * availableMoves.length),
        computerChoice = availableMoves[randomNumber];
    
    return computerChoice;
}

let humanScore = 0
let computerScore = 0

//adding round messages buttons and scores//
const roundMsg = document.getElementById('round-message');
const scoreDisplay = document.getElementById('scores');
const finalWinner = document.getElementById('final-winner');
const resetBtn = document.getElementById('reset-btn');
const btns = document.getElementById('btn-container')

// add event listener that wil call the playRound function with the correct playerSelection for each button //
btns.addEventListener('click',(event) => {
    if (event.target.tagName === 'BUTTON') {
        const humanChoice = event.target.id;

        const computerChoice = getComputerChoice();

        playRound(humanChoice, computerChoice);

        checkGameOver();
    }
});


function playRound(humanChoice,computerChoice){
    if (humanChoice === 'rock' && computerChoice === 'paper') {
        computerScore = computerScore + 1;
        roundMsg.textContent = 'uh oh, you lost that one'
        scoreDisplay.textContent = `You: ${humanScore} | Computer: ${computerScore}`
        return [humanScore, computerScore];
    } else if (humanChoice === 'rock' && computerChoice === 'scissors') {
        humanScore = humanScore + 1;
        roundMsg.textContent = 'oh snap, you might just have a chance.'
        scoreDisplay.textContent = `You: ${humanScore} | Computer: ${computerScore}`
        return [humanScore, computerScore];
    } else if (humanChoice === 'rock' && computerChoice === 'rock') {
        roundMsg.textContent = 'tie'
        scoreDisplay.textContent = `You: ${humanScore} | Computer: ${computerScore}`
        return [humanScore, computerScore];
    } else if (humanChoice === 'paper' && computerChoice === 'rock') {
        humanScore = humanScore + 1;
        roundMsg.textContent = 'oh yeah, baby, put that sweet paper on my rock...';
        scoreDisplay.textContent = `You: ${humanScore} | Computer: ${computerScore}`
        return [humanScore, computerScore];
    } else if (humanChoice === 'paper' && computerChoice === 'scissors') {
        computerScore = computerScore + 1;
        roundMsg.textContent = 'you got CUT UP!';
        scoreDisplay.textContent = `You: ${humanScore} | Computer: ${computerScore}`
        return [humanScore, computerScore];
    } else if (humanChoice === 'paper' && computerChoice === 'paper') {
        roundMsg.textContent = 'tie'
        scoreDisplay.textContent = `You: ${humanScore} | Computer: ${computerScore}`
        return [humanScore, computerScore];
    } else if (humanChoice === 'scissors' && computerChoice === 'rock') {
        computerScore = computerScore + 1;
        roundMsg.textContent = 'crussssssshed';
        scoreDisplay.textContent = `You: ${humanScore} | Computer: ${computerScore}`
        return [humanScore, computerScore];
    } else if (humanChoice === 'scissors' && computerChoice === 'paper') {
        humanScore = humanScore + 1;
        roundMsg.textContent = 'sliced and diced'
        scoreDisplay.textContent = `You: ${humanScore} | Computer: ${computerScore}`
        return [humanScore, computerScore];
    } else if (humanChoice === 'scissors' && computerChoice === 'scissors') {
        roundMsg.textContent = 'tie'
        scoreDisplay.textContent = `You: ${humanScore} | Computer: ${computerScore}`
        return [humanScore, computerScore];
    }
}

//new function for game over//

function checkGameOver() {
    if (humanScore === 5 || computerScore === 5) {
        //announce the winner
        if (humanScore === 5) {
            finalWinner.textContent = '🎉 YOU WIN THE GAME! 🎉';
        } else {
            finalWinner.textContent = '💀 Computer wins... better luck next time... loser 💀'
        }

        //disable game buttons//
        document.getElementById('rock').disabled = true;
        document.getElementById('paper').disabled = true;
        document.getElementById('scissors').disabled = true;

        //show the reset button//

        resetBtn.style.display = 'block';
    }
}

//event listener for reset button and resetting of the game//

resetBtn.addEventListener('click', (event) => {
    //reset scores
    humanScore = 0;
    computerScore = 0;

    //reset text display
    roundMsg.textContent = 'Click something to start!';
    scoreDisplay.textContent = 'You: 0 | Computer: 0';
    finalWinner.textContent = '';

    //re-enable game buttons
    document.getElementById('rock').disabled = false;
    document.getElementById('paper').disabled = false;
    document.getElementById('scissors').disabled = false;

    //hide reset button
    resetBtn.style.display = 'none';
});

