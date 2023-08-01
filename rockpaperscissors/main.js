// function to start game
// function for computer choice
// buttons calls for player choice
// loop to play five timees

// const playerChoice = ["rock", "paper", "scissors"];
// document.querySelector("button").addEventListener("click", playRound);

// function getComputerChoice() {
//   let random = Math.random();
//   if (random < 0.33) {
//     return "rock";
//   } else if (random < 0.66) {
//     return "paper";
//   } else {
//     return "scissors";
//   }
// }

// function playRound(playerChoice, computerChoice) {
//   if (
//     (playerChoice == "rock" && computerChoice == "scissors") ||
//     (playerChoice == "paper" && computerChoice == "rock") ||
//     (playerChoice == "scissors" && computerChoice == "paper")
//   ) {
//     console.log("You win!");
//   } else if (playerChoice === computerChoice) {
//     console.log("You tied!");
//   } else {
//     console.log("You lose!");
//   }
// }

const choices = ["rock", "paper", "scissors"];

function game() {
  for (let i = 1; i <= 5; i++) {
    playRound(i);
  }
}
function playRound() {
  const playerSelection = playerChoice();
  const computerSelection = computerChoice();
  const winner = checkWinner(playerSelection, computerSelection);
  console.log(winner);
}

function playerChoice() {
  let input = prompt("Type rock, paper, or scissors");
  while (input == null) {
    input = prompt("Type rock, paper, or scissors");
  }
  input = input.toLowerCase();
  let check = validateInput(input);
  while (check == false) {
    input = prompt(
      "Type rock, paper, or scissors. Spelling needs to be accurate."
    );
    while (input == null) {
      input = prompt("Type rock, paper, or scissors");
    }
    input = input.toLowerCase();
    check = validateInput(input);
  }
  return input;
}

function computerChoice() {
  return choices[Math.floor(Math.random() * choices.length)];
}

function validateInput(choice) {
  return choices.includes(choice);
}

function checkWinner(choiceP, choiceC) {
  console.log(choiceP, choiceC);
  if (choiceP === choiceC) {
    return "Tie";
  } else if (
    (choiceP === "rock" && choiceC === "scissors") ||
    (choiceP === "paper" && choiceC === "rock") ||
    (choiceP === "scissors" && choiceC === "paper")
  ) {
    return "You win";
  } else {
    return "You lose";
  }
}

game();
