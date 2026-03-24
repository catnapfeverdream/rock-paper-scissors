function getComputerChoice(computerChoice){
    var availableMoves = ['rock','paper','scissors'],
        randomNumber = Math.floor(Math.random() * availableMoves.length),
        computerChoice = availableMoves[randomNumber];
    
    return computerChoice;
}

function getHumanChoice(){
    const humanChoice = prompt('make your move!');
    return humanChoice.toLowerCase();
}

let humanScore = 0
let computerScore = 0

function playRound(humanChoice,computerChoice){
    if (humanChoice === 'rock' && computerChoice === 'paper') {
        computerScore = computerScore + 1;
        console.log ('uh oh, you lost that one')
        return (humanScore, computerScore);
    } else if (humanChoice === 'rock' && computerChoice === 'scissors') {
        humanScore = humanScore + 1;
        console.log ('oh snap, you might just have a chance.')
        return (humanScore, computerScore);
    } else if (humanChoice === 'rock' && computerChoice === 'rock') {
        console.log ('tie')
        return (humanScore, computerScore);
    } else if (humanChoice === 'paper' && computerChoice === 'rock') {
        humanScore = humanScore + 1;
        console.log ('oh yeah, baby, put that sweet paper on my rock...');
        return (humanScore, computerScore);
    } else if (humanChoice === 'paper' && computerChoice === 'scissors') {
        computerScore = computerScore + 1;
        console.log ('you got CUT UP!');
        return (humanScore, computerScore);
    } else if (humanChoice === 'paper' && computerChoice === 'paper') {
        console.log ('tie')
        return (humanScore, computerScore);
    } else if (humanChoice === 'scissors' && computerChoice === 'rock') {
        computerScore = computerScore + 1;
        console.log ('crussssssshed');
        return (humanScore, computerScore);
    } else if (humanChoice === 'scissors' && computerChoice === 'paper') {
        humanScore = humanScore + 1;
        console.log ('sliced and diced')
        return (humanScore, computerScore);
    } else if (humanChoice === 'scissors' && computerChoice === 'scissors') {
        console.log ('tie')
        return (humanScore, computerScore);
    }
}

const humanChoice = getHumanChoice();
const computerChoice = getComputerChoice();

function playGame(playRound){
    for (let i = 0; i < 5; i++) {
        getHumanChoice();
        getComputerChoice();
        playRound(humanChoice,computerChoice);
    }

    let finalscore = (humanScore, computerScore);
    console.log (finalscore);
    console.log (humanChoice, computerChoice);

    if (humanScore > computerScore) {
        console.log ('you win!');
        return 'you win';
    } else if (humanScore < computerScore) {
        console.log ('you lose...');
        return 'you lose';
    } else if (humanScore === computerScore) {
        console.log ('a tie.');
        return 'a tie.';
    }

    }
    
playGame(playRound);