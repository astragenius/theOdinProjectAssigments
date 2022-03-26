
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
        return `Its a draw! Player: ${pChoice} Computer: ${cChoice}`;
    }
    
}


// a playround function thats plays one round of the game.

function playRound(pChoice) {

    const playerSelection = pChoice
    const computerSelection = computerChoice();
    renderComputerChoice(computerSelection);
    renderPlayerChoice(playerSelection);
    console.log(checkWinner(playerSelection, computerSelection));

}    

function game() {

    for(let i = 0; i < 5; i++) {
        let round = playRound();
        if(round == true) {
             console.log('Player won the game')
        } else if(round == false) {
            console.log('Computer won the game')
        }else {
            console.log('Its a draw');
        }
        
    }

    return 'GAme finished'
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

