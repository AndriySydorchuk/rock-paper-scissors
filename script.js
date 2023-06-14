const resultsOutput = document.querySelector(".results");
const scoreOutput = document.querySelector(".score");
const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", function () {
    playRound(button);
  });
});

function getComputerChoice() {
  const num = Math.trunc(Math.random() * 3 + 1);
  if (num === 1) {
    return "rock";
  } else if (num === 2) {
    return "paper";
  } else if (num === 3) {
    return "scissors";
  } else {
    console.log("I've no idea what to choose");
  }
}

let computerWin = false;
let playerWin = false;

function playRound(button) {
  let playerSelection = button.value;
  let computerSelection = getComputerChoice();

  playerSelection = playerSelection.toLowerCase();

  let wonStr = "You won!";
  let lostStr = "You lost!";
  const drawStr = "Draw!";
  const troubleStr = "Something went wrong :(";

  switch (playerSelection) {
    case "rock":
      switch (computerSelection) {
        case "rock":
          resultsOutput.textContent = drawStr;
        case "paper":
          computerWin = true;
          resultsOutput.textContent = `${lostStr} Paper beats Rock`;
          return computerWin;
        case "scissors":
          playerWin = true;
          resultsOutput.textContent = `${wonStr} Rock beats Scissors`;
          return playerWin;
        default:
          resultsOutput.textContent = troubleStr;
      }
    case "paper":
      switch (computerSelection) {
        case "rock":
          playerWin = true;
          resultsOutput.textContent = `${wonStr} Paper beats Rock`;
          return playerWin;
        case "paper":
          resultsOutput.textContent = drawStr;
        case "scissors":
          computerWin = true;
          resultsOutput.textContent = `${lostStr} Scissors beats Paper`;
          return computerWin;
        default:
          resultsOutput.textContent = troubleStr;
      }
    case "scissors":
      switch (computerSelection) {
        case "rock":
          computerWin = true;
          resultsOutput.textContent = `${lostStr} Rock beats Scissors`;
          return computerWin;
        case "paper":
          playerWin = true;
          resultsOutput.textContent = `${wonStr} Scissors beats Paper`;
          return playerWin;
        case "scissors":
          resultsOutput.textContent = drawStr;
        default:
          resultsOutput.textContent = troubleStr;
          console.log(troubleStr);
      }
    default:
      resultsOutput.textContent = "Try again";
  }
}

function game() {
  let playerScore = 0;
  let computerScore = 0;

  while (playerScore < 5 && computerScore < 5) {
    playRound(button);
    if (playerWin == true) {
      playerScore++;
      playerWin = false;
    } else if (computerWin == true) {
      computerScore++;
      computerWin = false;
    }
    resultsOutput.textContent += `Score: ${playerScore} -- ${computerScore}`;
  }
  if (playerScore === 5) {
    resultsOutput.textContent += "You won!";
  } else {
    resultsOutput.textContent += "Computer won!";
  }
}

// game();
