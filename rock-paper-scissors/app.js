let playerPoints = 0;
let computerPoints = 0;
// a comptuerChoice fuction that gives randomly "rock, paper, siccors" back.

function computerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    let cChoice = choices[Math.floor(Math.random() * 3)];
    return cChoice;
}

//a function that checks how has won the game.
function checkWinner(pChoice, cChoice) {

    if(pChoice === 'rock' && cChoice === 'paper') {
        renderComputerPoints();
        return false; 

    }if(pChoice === 'rock' && cChoice === 'scissors') {
        renderPlayerPoints();
        return true; 

    }if(pChoice === 'paper' && cChoice === 'rock') {
        renderPlayerPoints();
        return true; 

    }if(pChoice === 'paper' && cChoice === 'scissors') {
        renderComputerPoints();
        return false; 

    }if(pChoice === 'scissors' && cChoice === 'paper') {
        renderPlayerPoints();
        return true;

    }if(pChoice === 'scissors' && cChoice === 'rock') {
        renderComputerPoints();
        return false;
    }else {
        /* return `Its a draw! Player: ${pChoice} Computer: ${cChoice}` */
        return 'DRAW'
    }
    
}

// a playround function thats plays one round of the game.

function playRound(pChoice) {

    const playerSelection = pChoice
    const computerSelection = computerChoice();
    renderComputerChoice(computerSelection);
    renderPlayerChoice(playerSelection);
    renderWinner(checkWinner(playerSelection, computerSelection));

}    

//DOM Element render
const playBtn = document.querySelectorAll('.btn');
const resetBtn = document.querySelector('.reset-btn');

playBtn.forEach(btn => {

    btn.addEventListener('click', (e) => {
        const choice = e.target.dataset.type;
        playRound(choice);
    })
})

resetBtn.addEventListener('click', resetGame);


function renderPlayerChoice(choice) {
    const playerChoice = document.getElementById('playerChoice');
    playerChoice.textContent = choice;
}
function renderComputerChoice(choice) {
    const computerChoice = document.getElementById('computerChoice')
    computerChoice.textContent = choice;
}

function renderWinner(winner) {
    const winArea = document.getElementById('win-area');
    
    if(winner === true) {
        winArea.textContent = 'Player wins!!!';
    }else if(winner === 'DRAW') {
        winArea.textContent = 'Its a Draw!!!';
    } else {
        winArea.textContent = 'Computer wins!!!';
    }
}

function renderPlayerPoints() {
    const pPoints = document.getElementById('pPoints');
    pPoints.textContent = ++playerPoints;
}
function renderComputerPoints() {
    const cPoints = document.getElementById('cPoints');
    cPoints.textContent = ++computerPoints
}

function resetGame() {
    const winArea = document.getElementById('win-area');
    const computerChoice = document.getElementById('computerChoice')
    const playerChoice = document.getElementById('playerChoice');
    const pPoints = document.getElementById('pPoints');
    const cPoints = document.getElementById('cPoints');
    computerChoice.textContent = "";
    playerChoice.textContent = "";
    winArea.textContent = "";
    pPoints.textContent = "0";
    cPoints.textContent = "0";
    playerPoints = 0;
    computerPoints = 0;
    

}



