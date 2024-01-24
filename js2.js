function computer_choice() {
  options = ["rock", "paper", "scissor"];
  rnum = Math.floor(Math.random() * 3);
  return options[rnum];
}
score = 0;
for (i = 0; i < 5; i++) {
  comp_choice = computer_choice();
  human_choice = prompt("Choose: Rock, Paper or Scissor :-");
  human_choice = human_choice.toLowerCase();
  console.log("Computer's Choice - " + comp_choice);
  if (comp_choice === "rock") {
    if (human_choice === "paper") {
      score += 1;
      console.log("You won this round");
    } else if (human_choice === "rock") {
      score += 0.5;
      console.log("You drew this round");
    } else {
      console.log("You lost this round");
    }
  }
  if (comp_choice === "paper") {
    if (human_choice === "scissor") {
      score += 1;
      console.log("You won this round");
    } else if (human_choice === "paper") {
      score += 0.5;
      console.log("You drew this round");
    } else {
      console.log("You lost this round");
    }
  }
  if (comp_choice === "scissor") {
    if (human_choice === "rock") {
      score += 1;
      console.log("You won this round");
    } else if (human_choice === "scissor") {
      score += 0.5;
      console.log("You drew this round");
    } else {
      console.log("You lost this round");
    }
  }
  alert("The Score is " + score + "/ 5");
}
console.log("Final Score " + score + "/ 5");
if (score >= 3) {
  console.log("You won this Match");
} else if (score == 2.5) {
  console.log("You drew this Match");
} else {
  console.log("You lost this match");
}
