// create a function to computer randomly return rock-paper-scissor
function getComputerChoice() {
    // choose a random number from 0 up to 2
    let randomNumber = Math.floor(Math.random() * 3);
    // relate each number with rock-paper-scissor
    let computerChoice;
    if (randomNumber === 0) {
        computerChoice = 'rock';
    } else if (randomNumber === 1) {
        computerChoice = 'paper';
    } else {
        computerChoice = 'scissor';
    };
    // return the computerChoice
    return computerChoice;
};

// create a function to play one round of computer vs player
//the function receive two arguments: playerSelection and computerSelection
function playRound(playerSelection, computerSelection) {
    let winnerScreen;
    let result;
    //if, else if, else conditionals are used to select the winner of the round
    if (playerSelection.toLowerCase() === 'rock' && computerSelection === 'rock') {
        winnerScreen = 'It\'s a tie! Rock ties Rock';
        result = 'tie';
    } else if (playerSelection.toLowerCase() === 'rock' && computerSelection === 'scissor') {
        winnerScreen = 'You win! Rock beats Scissor';
        result = 'win';
    } else if (playerSelection.toLowerCase() === 'rock' && computerSelection === 'paper') {
        winnerScreen = 'You loose! Paper beats Rock';
        result = 'loose';
    } else if (playerSelection.toLowerCase() === 'paper' && computerSelection === 'paper') {
        winnerScreen = 'It\'s a tie! Paper ties Paper';
        result = 'tie';
    } else if (playerSelection.toLowerCase() === 'paper' && computerSelection === 'rock') {
        winnerScreen = 'You win! Paper beats Rock';
        result = 'win';
    } else if (playerSelection.toLowerCase() === 'paper' && computerSelection === 'scissor') {
        winnerScreen = 'You loose! Scissor beats Paper';
        result = 'loose';
    } else if (playerSelection.toLowerCase() === 'scissor' && computerSelection === 'scissor') {
        winnerScreen = 'It\'s a tie! Scissor ties Scissor';
        result = 'tie';
    } else if (playerSelection.toLowerCase() === 'scissor' && computerSelection === 'paper') {
        winnerScreen = 'You win! Scissor beats Paper';
        result = 'win';
    } else if (playerSelection.toLowerCase() === 'scissor' && computerSelection === 'rock') {
        winnerScreen = 'You loose! Rock beats Scissor';
        result = 'loose';
    }
    return [winnerScreen, result];
}

// create a function "game" to play a 5 round game
function game() {
    let playerSelection;
    let computerSelection;
    let playerCount = 0;
    let computerCount = 0;
    for (let i = 0; i < 5; i++) {
        playerSelection = prompt('Select');
        computerSelection = getComputerChoice();
        playRoundResult = playRound(playerSelection, computerSelection);
        if (playRoundResult[1] === 'win') {
            playerCount += 1;
        } else if (playRoundResult[1] === 'loose') {
            computerCount += 1;
        } else {
            playerCount += 0;
            computerCount += 0;
        }
        console.log(playRoundResult[0]);
        console.log('Player : ', playerCount, ' Computer : ', computerCount);
    };
    if (playerCount > computerCount) {
        console.log('Congratulations, you win!');
    } else if (playerCount < computerCount) {
        console.log('Oh no, you loose!');
    } else {
        console.log('Nobody wins, it\'s a tie!');
    }
};

