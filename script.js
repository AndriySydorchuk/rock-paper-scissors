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
          console.log("Draw!");
          break;
        case "paper":
          console.log("You lost! Paper beats Rock");
          break;
        case "scissors":
          console.log("You won! Rock beats Scissors");
          break;
        default:
          console.log("Something went wrong :(");
      }
      break;
    case "paper":
      switch (computerSelection) {
        case "rock":
          console.log("You won! Paper beats Rock");
          break;
        case "paper":
          console.log("Draw!");
          break;
        case "scissors":
          console.log("You lost! Scissors beats Paper");
          break;
        default:
          console.log("Something went wrong :(");
      }
      break;
    case "scissors":
      switch (computerSelection) {
        case "rock":
          console.log("You lost! Rock beats Scissors");
          break;
        case "paper":
          console.log("You won! Scissors beats Paper");
          break;
        case "scissors":
          console.log("Draw!");
          break;
        default:
          console.log("Something went wrong :(");
      }
      break;
    default:
      console.log("Try again");
  }
}

playRound(playerSelection, computerSelection);
