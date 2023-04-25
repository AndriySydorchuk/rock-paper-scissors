"use strict";

function getComputerChoice() {
  const num = Math.trunc(Math.random() * 3 + 1);
  if (num === 1) {
    console.log("Rock");
  } else if (num === 2) {
    console.log("Paper");
  } else if (num === 3) {
    console.log("Scissors");
  } else {
    console.log("I've no idea what to choose");
  }
}
