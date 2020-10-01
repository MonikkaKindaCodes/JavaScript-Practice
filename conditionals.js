var age = Number(prompt("How old are you?"));
if (age < 0) {
    console.error("Please enter a valid age.");
} else if (age === 21) {
    console.log("Happy 21st Birthday");
} else if (age % 2 !== 0) {
    console.log("Your age is odd");
} else(age % Math.sqrt(age) === 0); {
    console.log("Your age is a perfect square");
}