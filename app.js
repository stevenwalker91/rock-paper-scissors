
//function for computer opponent to randomly generate a move and return which move
function computerPlay() {
    //get a number between 0 and 2 
    let computerMoveInt = Math.floor(Math.random() * 3);
    let computerMoveChoice;

    //assign the computer a move type based on which number was returned
    switch (computerMoveInt) {
        case 0:
            computerMoveChoice = "rock";
            break;
        case 1:
            computerMoveChoice = "paper";
            break;
        case 2:
            computerMoveChoice = "scissors";
            break;
    }

    return computerMoveChoice;

}

//helper function to capitalise first letter for nicer presentation of results
function capitaliseFirstLetter(string){
    return string.charAt(0).toUpperCase() + string.slice(1);
}



function playRound(playerSelection, computerSelection) {

    //first check if it's a draw and handle that
    if (playerSelection === computerSelection) {
        return('It\'s a draw!');  
    }

    //check each combination of plyer selections to check if they have won, otherwise return lose
    if (playerSelection === 'rock' && computerSelection === 'scissors'
        || playerSelection === 'paper' && computerSelection === 'rock'
        || playerSelection === 'scissors' && computerSelection === 'paper') {
        
            return (`You win! ${capitaliseFirstLetter(playerSelection)} beats ${capitaliseFirstLetter(computerSelection)}`);
        }
    else {
        return (`You lose! ${capitaliseFirstLetter(computerSelection)} beats ${capitaliseFirstLetter(playerSelection)}`);
    }

}

//get the player selection via a prompt and lowercase to standardise input
let playerSelection = prompt('What\'s your move, rock, paper or scissors?').toLowerCase();
let computerSelection = computerPlay();

console.log('player ' + playerSelection);
console.log('computer ' + computerSelection);

console.log(playRound(playerSelection, computerSelection));

