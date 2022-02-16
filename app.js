//function for computer opponent to randomly generate a move
function computerPlay() {
  
    let computerMoveInt = Math.floor(Math.random() * 3);
    let computerMoveChoice;

    //assign the computer a move type based on which number was returned
    switch (computerMoveInt) {
        case 0:
            computerMoveChoice = 'rock';
            break;
        case 1:
            computerMoveChoice = 'paper';
            break;
        case 2:
            computerMoveChoice = 'scissors';
            break;
    }
    return computerMoveChoice;
}

//helper function to capitalise first letter for nicer presentation of results
function capitaliseFirstLetter(string){
    return string.charAt(0).toUpperCase() + string.slice(1);
}

//checkRoundWinner takes the player and computer selections then checks them to see who is the winner, changes the score and returns a user friendly message summarising who won the round.
function checkRoundWinner(playerSelection, computerSelection) {
    
    let returnString = `You selected <span class="bold">${playerSelection}</span> and the computer selected <span class="bold">${computerSelection}</span>. `

    //check each combination of player selections to check if they have won, otherwise return lose - add wins to UI
    if (playerSelection === 'rock' && computerSelection === 'scissors'
        || playerSelection === 'paper' && computerSelection === 'rock'
        || playerSelection === 'scissors' && computerSelection === 'paper') {
            playerScore++;
            let tick = document.getElementById('player-score');
            tick.setAttribute('data-value', playerScore);
            returnString+= 'YAAAAASS! You win!';
        }
        else if (playerSelection === computerSelection) {
            returnString+= 'It\'s a draw.';
        }
    else {
        computerScore++;;
        returnString+= 'Aww mate, that\'s bollocks you lost this time.';
        let tick = document.getElementById('computer-score');
        tick.setAttribute('data-value', computerScore);
    }
    return returnString;
}

function playRound() {
    
    //set the round and apply it on the UI
    roundCount++;
    const roundContainer = document.getElementById('round-number');
    roundContainer.innerText = `Round: ${roundCount}`
    
    //get the user selection from the button they selected and call computerPlay which generates the computers move
    let playerSelection = this.getAttribute('data-user-selection');
    let computerSelection = computerPlay();

    //call function to check who won the round and get results to display to user then present in UI
    let resultText = checkRoundWinner(playerSelection, computerSelection);
    const roundResults = document.getElementById('round-result-field');
    roundResults.innerHTML = resultText;

    //check the game to see if it should continue
    checkGameStatus();
}

function checkGameStatus() {
    if (roundCount === 5) {
        gameResults(playerScore, computerScore);
    }
}


function gameResults(playerScore, computerScore) {

    const gameResults = document.getElementById('game-result-field');

    let result = '';

    if (playerScore === computerScore) {
        result = `It was a draw! Why not try again? The score was Player: ${playerScore} - Computer: ${computerScore}`;
    } else if (playerScore > computerScore) {
        result  = `You won! Well done! The score was Player: ${playerScore} - Computer: ${computerScore}`;
    } else {
        result  = `Oooh sorry, you lost. The score was Player: ${playerScore} - Computer: ${computerScore}`;
    }

    //clear down the scores for the next game
    playButtons.forEach(button => button.setAttribute ('disabled', true));
    
    gameResults.innerHTML = result;

}

let playerScore = 0;
let computerScore = 0;
let roundCount = 0;

const playButtons = document.querySelectorAll('.selection');
playButtons.forEach(button => button.addEventListener ('click', playRound));






