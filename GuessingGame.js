var secretNumber = 4;
var stringGuess = prompt("Pick a Number");
var guess = Number(stringGuess);
if (guess === secretNumber) {
  alert("You guessed the Secret Number");
} else if (guess < secretNumber) {
  alert("Too Low! Guess Again");
} else {
  alert("Too High! Guess Again!");
}
