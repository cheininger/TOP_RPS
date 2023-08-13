
function getComputerChoice() {
  let randomNumber = Math.random();
  let computerSelection;

  if (randomNumber >= 0 && randomNumber < 1/3) {
    computerSelection = 'rock';
  } else if (randomNumber >= 1/3 && randomNumber < 2/3) {
    computerSelection = 'paper';
  } else if (randomNumber >= 2/3 && randomNumber < 1) {
    computerSelection = 'scissors';
  }

  return computerSelection;
};

function getPlayerChoice() {
  let playerSelection = prompt('Rock, Paper or Scissors? What\'s your play?!');

  playerSelection = playerSelection.toLowerCase();

  return playerSelection;
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === 'rock') {
    if (computerSelection === 'rock') {
      alert('It\'s a tie! PC and you both picked Rock!');
      return 'tie';
    } else if (computerSelection === 'paper') {
      alert('You lose! PC\' Paper beats your Rock!');
      return 'PC';
    } else if (computerSelection === 'scissors') {
      alert('You win! Your Rock beats PC\'s Scissors!');
      return 'player';
    }
  } else if (playerSelection === 'paper') {
    if (computerSelection === 'rock') {
      alert('You win! Your Paper beats PC\'s Rock!');
      return 'player';
    } else if (computerSelection === 'paper') {
      alert('It\'s a tie! PC and you both picked Paper!');
      return 'tie';
    } else if (computerSelection === 'scissors') {
      alert('You lose! PC\'s Scissors beats your Paper!');
      return 'PC';
    }
  } else if (playerSelection === 'scissors') {
    if (computerSelection === 'rock') {
      alert('You lose! PC\'s Rock beats your Scissors');
      return 'PC';
    } else if (computerSelection === 'paper') {
      alert('You win! Your Scissors beats PC\'s Paper!');
      return 'player';
    } else if (computerSelection === 'scissors') {
      alert('It\'s a tie! PC and you both picked Scissors!');
      return 'tie';
    }
  }
}

function game() {
  let computerSelection;
  let playerSelection;
  let playerScore = 0;
  let computerScore = 0;

  for (let i = 0; i < 5; i++) {
    computerSelection = getComputerChoice();
    playerSelection = getPlayerChoice();

    result = playRound(playerSelection, computerSelection);

    if (result === 'player') {
      playerScore++;
    } else if (result === 'PC') {
      computerScore++;
    }
  }

  if (playerScore > computerScore) {
    alert('Congratulations! You won the Best of 5!');
  } else if (playerScore < computerScore) {
    alert('Sorry... The PC won the Best of 5. Better luck next time!');
  } else if (playerScore == computerScore) {
    alert('The Best of 5 did not result in a winner. Thanks for playing!');
  }

}

game();