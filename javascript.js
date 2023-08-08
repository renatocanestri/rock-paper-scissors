const rockBtn = document.querySelector('#rock');
const paperBtn = document.querySelector('#paper');
const scissorBtn = document.querySelector('#scissor');
const results = document.querySelector('.results');
const nodeStartText = document.querySelector('.startText');
const winnerAnnouncementDiv = document.querySelector('.winnerAnnouncement');

const h2Score = document.createElement('h2');

let playerCount = 0;
let computerCount = 0;
let roundCount = 0;
let endGame = false;

rockBtn.addEventListener('click', () => {
	let playerSelection = 'rock';
	playGame(playerSelection);
});

paperBtn.addEventListener('click', () => {
	let playerSelection = 'paper';
	playGame(playerSelection);
});

scissorBtn.addEventListener('click', () => {
	let playerSelection = 'scissor';
	playGame(playerSelection);
});

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    let computerChoice;
    if (randomNumber === 0) {
        computerChoice = 'rock';
    } else if (randomNumber === 1) {
        computerChoice = 'paper';
    } else {
        computerChoice = 'scissor';
    };
    return computerChoice;
};

function playRound(playerSelection, computerSelection) {
	const roundResult = document.createElement('p');
	if (playerSelection === 'rock' && computerSelection === 'paper') {
		roundResult.innerText = `Round ${roundCount}: Computer wins! ${computerSelection} beats ${playerSelection}!`;
		computerCount++;
	} else if (playerSelection === 'rock' && computerSelection === 'scissor') {
		roundResult.innerText = `Round ${roundCount}: Player wins! ${playerSelection} beats ${computerSelection}!`;
		playerCount++;
	} else if (playerSelection === 'paper' && computerSelection === 'scissor') {
		roundResult.innerText = `Round ${roundCount}: Computer wins! ${computerSelection} beats ${playerSelection}!`;
		computerCount++;
	} else if (playerSelection === 'paper' && computerSelection === 'rock') {
		roundResult.innerText = `Round ${roundCount}: Player wins! ${playerSelection} beats ${computerSelection}!`;
		playerCount++;
	} else if (playerSelection === 'scissor' && computerSelection === 'rock') {
		roundResult.innerText = `Round ${roundCount}: Computer wins! ${computerSelection} beats ${playerSelection}!`;
		computerCount++;
	} else if (playerSelection === 'scissor' && computerSelection === 'paper') {
		roundResult.innerText = `Round ${roundCount}: Player wins! ${playerSelection} beats ${computerSelection}!`;
		playerCount++;
    } else {
		roundResult.innerText = `Round ${roundCount}: It\'s a tie! Both select ${playerSelection}!`;
	};
	roundResult.classList.add('roundResult');
	results.appendChild(roundResult);
};

function playGame(playerSelection) {
	roundCount++;
	for (; playerCount < 5 && computerCount < 5;) {
		playRound(playerSelection, getComputerChoice());
		break;
	};
	scoreCount();
	if (!(playerCount < 5 && computerCount < 5) && endGame === false){
		endGame = true;
		gameWinnerScreen();
	} else {};
};

function scoreCount() {
	h2Score.innerText = `Score: Player ${playerCount} - ${computerCount} Computer`;
	h2Score.classList.add('h2Score');
	if (roundCount === 1) {
		nodeStartText.parentNode.replaceChild(h2Score, nodeStartText);
	} else {};
};

function gameWinnerScreen() {
	const winnerAnnouncement = document.createElement('p');
	winnerAnnouncement.classList.add('winnerFinalScreen')
	if (playerCount > computerCount) {
		winnerAnnouncement.innerText = 'YOU WIN!!!';
	} else {
		winnerAnnouncement.innerText = 'GAME-OVER, COMPUTER WINS!!!';
	};
	winnerAnnouncementDiv.appendChild(winnerAnnouncement);
};