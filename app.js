//function for computer opponent to randomly generate a move
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
        return('Shit son, it\'s a draw!');  
    }

    //check each combination of player selections to check if they have won, otherwise return lose
    if (playerSelection === 'rock' && computerSelection === 'scissors'
        || playerSelection === 'paper' && computerSelection === 'rock'
        || playerSelection === 'scissors' && computerSelection === 'paper') {
            playerScore++;
            return (`You win! ${capitaliseFirstLetter(playerSelection)} beats ${capitaliseFirstLetter(computerSelection)}`);
        }
    else {
        computerScore++;
        return (`You lose! ${capitaliseFirstLetter(computerSelection)} beats ${capitaliseFirstLetter(playerSelection)}`);
    }
}

function game() {
    let playerSelection;
    let computerSelection;

    for (let i = 0; i < 5; i++) {
        playerSelection = prompt('What\'s your move, rock, paper or scissors?').toLowerCase();
        computerSelection = computerPlay();

        console.log(playRound(playerSelection, computerSelection));
        //below will help to store results in html
        //const results = document.getElementById('result');
        //results.innerHTML = playRound(playerSelection, computerSelection);
    }
    console.log('player score: ' + playerScore + ' computer score: ' + computerScore);
    gameResults(playerScore, computerScore);
}

function gameResults(playerScore, computerScore) {
    console.log(playerScore);
    console.log(computerScore);
    let result = '';

    if (playerScore === computerScore) {
        result = `It was a draw! Why not try again? The score was Player:${playerScore} - Computer:${computerScore}`;
    } else if (playerScore > computerScore) {
        result  = `You won! Well done! The score was Player: ${playerScore} - Computer: ${computerScore}`;
    } else {
        result  = `Oooh sorry, you lost. The score was Player: ${playerScore} - Computer: ${computerScore}`;
    }
    console.log(result);
    const results = document.getElementById('result-field');
    results.innerHTML = result;

}

/* all the stuff below is for later on trying to drive stuff via the UI - need to figure out how to let DOM load first

let playerInput = document.getElementById("playermove")
let playerSelection;

playerInput.addEventListener('change', (event) => {
    playerSelection = playerInput.value;
    console.log(playerInput.value);
    
})
*/

let playerScore = 0;
let computerScore = 0;
game();



