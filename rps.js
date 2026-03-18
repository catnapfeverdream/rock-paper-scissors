function getComputerChoice(){
    var availableMoves = ['rock','paper','scissors'],
        randomNumber = Math.floor(Math.random() * availableMoves.length),
        opponentMove = availableMoves[randomNumber];
    
    return opponentMove;
}

function getPlayerChoice(){
    
}
