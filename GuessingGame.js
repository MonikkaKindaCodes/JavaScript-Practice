var secretNumber = 4;
var guess = prompt("Pick a Number");
if (Number(guess) === secretNumber) {
  alert("You guessed the Secret Number");
} else if (Number(guess) < 4) {
  alert("Too Low! Guess Again");
} else {
  alert("Too High! Guess Again!");
}
