
// a comptuerChoice fuction that gives randomly "rock, paper, siccors" back.
const choices = ['rock', 'paper', 'scissors'];

function computerChoice() {
    let cChoice = choices[Math.floor(Math.random() * 3)];
    
    return cChoice;
}

// a playerChoice function that ask the Player with prompt to choose between "rock, paper, scissors"
function playerChoice() {
    let input = prompt('Make a choice! "Rock, Paper, Scissors').toLowerCase();
   
    if(choices.includes(input)) {
        return input;
    } else {
        alert('Please give "Rock, Paper, Scissors" in the input field!')
        return "Falscher Wert"
    }
    
    
    
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

function playRound() {

    const playerSelection = playerChoice();
    const computerSelection = computerChoice();
    return checkWinner(playerSelection, computerSelection);

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





