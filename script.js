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

const computerSelection = getComputerChoice();
const playerSelection = prompt("Rock, Paper or Scissors?:");

function playRound(playerSelection, computerSelection) {
  console.log(playerSelection);
  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();
  switch (playerSelection) {
    case "rock":
      switch (computerSelection) {
        case "rock":
          return "Draw!";
          break;
        case "paper":
          return "You lost! Paper beats Rock";
          break;
        case "scissors":
          return "You won! Rock beats Scissors";
          break;
        default:
          return "Something went wrong :(";
      }
      break;
    case "paper":
      switch (computerSelection) {
        case "rock":
          return "You won! Paper beats Rock";
          break;
        case "paper":
          return "Draw!";
          break;
        case "scissors":
          return "You lost! Scissors beats Paper";
          break;
        default:
          return "Something went wrong :(";
      }
      break;
    case "scissors":
      switch (computerSelection) {
        case "rock":
          return "You lost! Rock beats Scissors";
          break;
        case "paper":
          return "You won! Scissors beats Paper";
          break;
        case "scissors":
          return "Draw!";
          break;
        default:
          return "Something went wrong :(";
      }
      break;
    default:
      return "Try again";
  }
}

console.log(playRound(playerSelection, computerSelection));
