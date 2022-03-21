
// a comptuerChoice fuction that gives randomly "rock, paper, siccors" back.
const choices = ['rock', 'paper', 'scissors'];

function computerChoice() {
    let cChoice = choices[Math.floor(Math.random() * 3)];
    console.log(cChoice);
    return cChoice;
}

// a playerChoice function that ask the Player with prompt to choose between "rock, paper, scissors"
function playerChoice() {
    let input = prompt('Make a choice! "Rock, Paper, Scissors').toLowerCase();
    console.log(input);
    if(choices.includes(input)) {
        return input;
    } else {
        alert('Please give "Rock, Paper, Scissors" in the input field!')
        return "Falscher Wert"
    }
    
    
    
}


// a playround function thats plays one round of the game.



//a function that checks how has won the game.

const player = playerChoice();
const computer = computerChoice();


function checkWinner(pChoice, cChoice) {

    if(pChoice === 'rock' && cChoice === 'paper') {

        return `Computer wins with ${cChoice}`; 

    }if(pChoice === 'rock' && cChoice === 'scissors') {

        return `Player wins with ${pChoice}`; 

    }if(pChoice === 'paper' && cChoice === 'rock') {

        return `Player wins with ${pChoice}`; 

    }if(pChoice === 'paper' && cChoice === 'scissors') {

        return `computer wins with ${cChoice}`; 

    }if(pChoice === 'scissors' && cChoice === 'paper') {

        return `Player wins with ${pChoice}`;

    }if(pChoice === 'scissors' && cChoice === 'rock') {

        return `computer wins with ${cChoice}`;
    }else {
        return `Its a draw! Player: ${pChoice} Computer: ${cChoice}`;
    }
    
}

console.warn(player);

console.log(checkWinner(player, computer));



