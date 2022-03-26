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

        return false; 

    }if(pChoice === 'rock' && cChoice === 'scissors') {

        return true; 

    }if(pChoice === 'paper' && cChoice === 'rock') {

        return true; 

    }if(pChoice === 'paper' && cChoice === 'scissors') {

        return false; 

    }if(pChoice === 'scissors' && cChoice === 'paper') {

        return true;

    }if(pChoice === 'scissors' && cChoice === 'rock') {

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

playBtn.forEach(btn => {

    btn.addEventListener('click', (e) => {
        const choice = e.target.dataset.type;
        playRound(choice);
    })
})


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



