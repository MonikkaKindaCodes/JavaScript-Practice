// let dolphinsAverage = ((96+108+89)/3);
// let koalasAverage = ((88+91+110)/3);
// console.log(dolphinsAverage);
// console.log(koalasAverage);

// if (dolphinsAverage > koalasAverage) {
//     console.log(`Dolphins are the winners!`);
// } else {
//     console.log(`Koalas are the winners`);
// }

// Adding requirement for a minimum score of 100
// let dolphinsAverage = ((97+112+101)/3);
// let koalasAverage = ((109+95+123)/3);
// console.log(dolphinsAverage);
// console.log(koalasAverage);


// if((dolphinsAverage > koalasAverage) && (dolphinsAverage >= 100)) {
//     console.log(`Dolphins Win!`);
// } else if ((koalasAverage > dolphinsAverage) && (koalasAverage >= 100)) {
//     console.log(`Koalas Win!`);
// }

// Draw Game - Both Teams have same average score and are over 100

let dolphinsAverage = ((97+112+101)/3);
let koalasAverage = ((109+95+106)/3);

if(dolphinsAverage === koalasAverage && dolphinsAverage && koalasAverage >= 100) {
    console.log('Draw Game!');
} else if ((koalasAverage > dolphinsAverage) && (koalasAverage >= 100)) {
    console.log(`Koalas Win!`);
} else {
    console.log(`Dolphins Win`);
}
