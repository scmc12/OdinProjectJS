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

function checkWinner(choicePlayer, choiceComputer) {
  console.log(choicePlayer, choiceComputer);
  if (choicePlayer === choiceComputer) {
    return "Tie";
  } else if (
    (choicePlayer === "rock" && choiceComputer === "scissors") ||
    (choicePlayer === "paper" && choiceComputer === "rock") ||
    (choicePlayer === "scissors" && choiceComputer === "paper")
  ) {
    return "You win";
  } else {
    return "You lose";
  }
}

game();
