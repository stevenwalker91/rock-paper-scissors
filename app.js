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
    
    let returnString = `You selected ${playerSelection} and the computer selected ${computerSelection}. `

    //check each combination of player selections to check if they have won, otherwise return lose
    if (playerSelection === 'rock' && computerSelection === 'scissors'
        || playerSelection === 'paper' && computerSelection === 'rock'
        || playerSelection === 'scissors' && computerSelection === 'paper') {
            playerScore++;
            returnString+= 'You win!';
        }
        else if (playerSelection === computerSelection) {
            returnString+= 'It\'s a draw.';
        }
    else {
        computerScore++;;
        returnString+= 'Sorry, you lost this time.';
    }
    return returnString;
}

function playRound(playerSelection, computerSelection) {
    //get the user selection from the button they selected and call computerPlay which generates the computers move
    playerSelection = this.textContent.toLowerCase();
    computerSelection = computerPlay();


   let resultText = checkRoundWinner(playerSelection, computerSelection);

    const playerScoreField = document.getElementById('player-score');
    const computerScoreField = document.getElementById('computer-score');
    const results = document.getElementById('result-field');
    
    results.innerHTML = resultText;
    
    playerScoreField.innerText = playerScore;
    computerScoreField.innerText = computerScore;

}

function playGame() {
    

    gameResults(playerScore, computerScore);
}

function gameResults(playerScore, computerScore) {
    console.log(playerScore);
    console.log(computerScore);
    let result = '';

    if (playerScore === computerScore) {
        result = `It was a draw! Why not try again? The score was Player: ${playerScore} - Computer: ${computerScore}`;
    } else if (playerScore > computerScore) {
        result  = `You won! Well done! The score was Player: ${playerScore} - Computer: ${computerScore}`;
    } else {
        result  = `Oooh sorry, you lost. The score was Player: ${playerScore} - Computer: ${computerScore}`;
    }
  

}

const playButtons = document.querySelectorAll('.selection');

playButtons.forEach(button => button.addEventListener ('click', playRound));

let playerScore = 0;
let computerScore = 0;
// playGame();



