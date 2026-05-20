function getComputerChoice(computerChoice){
    var availableMoves = ['rock','paper','scissors'],
        randomNumber = Math.floor(Math.random() * availableMoves.length),
        computerChoice = availableMoves[randomNumber];
    
    return computerChoice;
}

let humanScore = 0
let computerScore = 0

//remove old function to retrieve typed selection //
//function getHumanChoice(){const humanChoice = prompt('make your move!'); return humanChoice.toLowerCase();}//

// adding button UI //
let btns = document.getElementById('btn-container')

// add event listener that wil call the playRound function with the correct playerSelection for each button //
btns.addEventListener('click',(event) => {
    if (event.target.tagName === 'BUTTON') {
        const humanChoice = event.target.id;

        const computerChoice = getComputerChoice();

        playRound(humanChoice, computerChoice);

        console.log('Scores -> human: ${humanScore} | Computer: ${computerScore}');
    }
});

function playRound(humanChoice,computerChoice){
    if (humanChoice === 'rock' && computerChoice === 'paper') {
        computerScore = computerScore + 1;
        console.log ('uh oh, you lost that one')
        return [humanScore, computerScore];
    } else if (humanChoice === 'rock' && computerChoice === 'scissors') {
        humanScore = humanScore + 1;
        console.log ('oh snap, you might just have a chance.')
        return [humanScore, computerScore];
    } else if (humanChoice === 'rock' && computerChoice === 'rock') {
        console.log ('tie')
        return [humanScore, computerScore];
    } else if (humanChoice === 'paper' && computerChoice === 'rock') {
        humanScore = humanScore + 1;
        console.log ('oh yeah, baby, put that sweet paper on my rock...');
        return [humanScore, computerScore];
    } else if (humanChoice === 'paper' && computerChoice === 'scissors') {
        computerScore = computerScore + 1;
        console.log ('you got CUT UP!');
        return [humanScore, computerScore];
    } else if (humanChoice === 'paper' && computerChoice === 'paper') {
        console.log ('tie')
        return [humanScore, computerScore];
    } else if (humanChoice === 'scissors' && computerChoice === 'rock') {
        computerScore = computerScore + 1;
        console.log ('crussssssshed');
        return [humanScore, computerScore];
    } else if (humanChoice === 'scissors' && computerChoice === 'paper') {
        humanScore = humanScore + 1;
        console.log ('sliced and diced')
        return [humanScore, computerScore];
    } else if (humanChoice === 'scissors' && computerChoice === 'scissors') {
        console.log ('tie')
        return [humanScore, computerScore];
    }
}

function playGame(playRound){
    // removing five round logic for now to be plugged back in below
    // for (let i = 0; i < 5; i++) //
    {
        let computerChoice = getComputerChoice();
        playRound(humanChoice,computerChoice);
    }

    if (humanScore > computerScore) {
        console.log ('you win!');
    } else if (humanScore < computerScore) {
        console.log ('you lose...');
    } else if (humanScore === computerScore) {
        console.log ('a tie.');
    }

    console.log (humanScore, computerScore);
    console.log (humanChoice, computerChoice);
    }
    
// deleted:: playGame(playRound);//
