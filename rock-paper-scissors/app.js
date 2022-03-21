
// a comptuerChoice fuction that gives randomly "rock, paper, siccors" back.

function computerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    let randomInt = Math.floor(Math.random() * 3);
    return choices[randomInt];
}

// a playerChoice function that ask the Player with prompt to choose between "rock, paper, scissors"
function playerChoice() {
    return prompt('Make a choice! "Rock, Paper, Scissors');
    
    
}


// a playround function thats plays one round of the game.



//a function that checks how has won the game.


console.log(playerChoice());