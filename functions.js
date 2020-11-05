'use strict';
//Function ⬇
function logger() {
//function body - code that will be executed
console.log(`my name is monikka`); //not all functions need to return anything
}

logger(); //Calling function, invoking the function, running the function
logger();
logger();

function fruitProcessor(apples, oranges) {
    console.log(apples, oranges);
    const juice = `juice with ${apples} apples and ${oranges} oranges`;
    return juice;
}

const appleJuice = fruitProcessor(5, 0); // 5, 0 are arguements
console.log(appleJuice);
console.log(fruitProcessor(5, 0));

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(fruitProcessor(2, 4));
console.log(appleOrangeJuice);

console.log(); // is a functions also.
