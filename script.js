"use strict";

function getComputerChoice() {
  const num = Math.trunc(Math.random() * 3 + 1);
  if (num === 1) {
    return "Rock";
  } else if (num === 2) {
    return "Paper";
  } else if (num === 3) {
    return "Scissors";
  } else {
    console.log("I've no idea what to choose");
  }
}

let computerWin = false;
let playerWin = false;

function playRound() {
  let playerSelection = prompt("Rock, Paper or Scissors?:");
  let computerSelection = getComputerChoice();

  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();

  let wonStr = "You won!";
  let lostStr = "You lost!";
  const drawStr = "Draw!";
  const troubleStr = "Something went wrong :(";

  switch (playerSelection) {
    case "rock":
      switch (computerSelection) {
        case "rock":
          console.log(drawStr);
        case "paper":
          computerWin = true;
          console.log(`${lostStr} Paper beats Rock`);
          return computerWin;
        case "scissors":
          playerWin = true;
          console.log(`${wonStr} Rock beats Scissors`);
          return playerWin;
        default:
          console.log(troubleStr);
      }
    case "paper":
      switch (computerSelection) {
        case "rock":
          playerWin = true;
          console.log(`${wonStr} Paper beats Rock`);
          return playerWin;
        case "paper":
          console.log(drawStr);
        case "scissors":
          computerWin = true;
          console.log(`${lostStr} Scissors beats Paper`);
          return computerWin;
        default:
          console.log(troubleStr);
      }
    case "scissors":
      switch (computerSelection) {
        case "rock":
          computerWin = true;
          console.log(`${lostStr} Rock beats Scissors`);
          return computerWin;
        case "paper":
          playerWin = true;
          console.log(`${wonStr} Scissors beats Paper`);
          return playerWin;
        case "scissors":
          console.log(drawStr);
        default:
          console.log(troubleStr);
      }
    default:
      console.log("Try again");
  }
}

function game() {
  let playerScore = 0;
  let computerScore = 0;

  while (playerScore < 5 && computerScore < 5) {
    playRound();
    if (playerWin == true) {
      playerScore++;
      playerWin = false;
    } else if (computerWin == true) {
      computerScore++;
      computerWin = false;
    }
    console.log(`Score: ${playerScore} -- ${computerScore}`);
  }
  if (playerScore === 5) {
    console.log(`You won!`);
  } else {
    console.log(`Computer won!`);
  }
}

game();
