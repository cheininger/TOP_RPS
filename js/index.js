const body = document.querySelector("body");
const buttons = document.querySelectorAll(".button-container > button");
const scoreDiv = document.querySelector("div#score");
const roundMessage = document.querySelector("p.round-message");
const paraPlayerScore = document.querySelector("p.player-score");
const paraComputerScore = document.querySelector("p.computer-score");
const endMessage = document.createElement("p");

let playerScore = 0;
let computerScore = 0;

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    let result = "";
    result = playRound(
      (playerSelection = button.id),
      (computerSelection = getComputerChoice())
    );

    if (result === "player") {
      playerScore++;
      paraPlayerScore.textContent = `Player Score: ${playerScore}`;
    } else if (result === "PC") {
      computerScore++;
      paraComputerScore.textContent = `Computer Score: ${computerScore}`;
    }

    if (playerScore === 5) {
      endMessage.textContent = "Congratulations! You won the First-to-5!!!";
      scoreDiv.appendChild(endMessage);
      const resetButton = document.createElement("button");
      resetButton.setAttribute("id", "reset");
      resetButton.textContent = "Reset";
      body.appendChild(resetButton);
      resetButton.addEventListener("click", reset);
    } else if (computerScore === 5) {
      endMessage.textContent = "Tough luck. The PC won the First-to-5!";
      scoreDiv.appendChild(endMessage);
      const resetButton = document.createElement("button");
      resetButton.setAttribute("id", "reset");
      resetButton.textContent = "Reset";
      body.appendChild(resetButton);
      resetButton.addEventListener("click", reset);
    }
  });
});

function getComputerChoice() {
  let randomNumber = Math.random();
  let computerSelection;

  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerSelection = "rock";
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerSelection = "paper";
  } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
    computerSelection = "scissors";
  }

  return computerSelection;
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === "rock") {
    if (computerSelection === "rock") {
      roundMessage.textContent = "It's a tie! PC and you both picked Rock!";
    } else if (computerSelection === "paper") {
      roundMessage.textContent = "You lose! PC' Paper beats your Rock!";
      return "PC";
    } else if (computerSelection === "scissors") {
      roundMessage.textContent = "You win! Your Rock beats PC's Scissors!";
      return "player";
    }
  } else if (playerSelection === "paper") {
    if (computerSelection === "rock") {
      roundMessage.textContent = "You win! Your Paper beats PC's Rock!";
      return "player";
    } else if (computerSelection === "paper") {
      roundMessage.textContent = "It's a tie! PC and you both picked Paper!";
    } else if (computerSelection === "scissors") {
      roundMessage.textContent = "You lose! PC's Scissors beats your Paper!";
      return "PC";
    }
  } else if (playerSelection === "scissors") {
    if (computerSelection === "rock") {
      roundMessage.textContent = "You lose! PC's Rock beats your Scissors";
      return "PC";
    } else if (computerSelection === "paper") {
      roundMessage.textContent = "You win! Your Scissors beats PC's Paper!";
      return "player";
    } else if (computerSelection === "scissors") {
      roundMessage.textContent = "It's a tie! PC and you both picked Scissors!";
    }
  }
}

function reset() {
  const resetButton = document.querySelector("button#reset");

  playerScore = 0;
  computerScore = 0;

  paraPlayerScore.textContent = `Player Score: ${playerScore}`;
  paraComputerScore.textContent = `Computer Score: ${computerScore}`;

  scoreDiv.removeChild(endMessage);
  roundMessage.textContent = "";

  body.removeChild(resetButton);
}
