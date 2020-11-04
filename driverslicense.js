const age = 15;
const isOldEnough = age >= 18;

if (isOldEnough) {
    console.log("You are old enough to get your license 🚘🚓🚓🏎🚗");
} else {
    const yearsLeft = 18 - age;
    console.log(`You have ${yearsLeft} years to get your license 😒`);
}

const birthYear = 2012;
let century;

if(birthYear <= 2000) {
    let century = 20;
    console.log (`You were born in the ${century}th century`);
} else {
    let century = 21;
    console.log (`You were born in the ${century}st century`);
}


