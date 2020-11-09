function logger () {
    console.log('I love my  sunshine Courtney');
}

logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
    // console.log(apples, oranges);
    const juice = `juice with ${apples} apples and ${oranges} oranges.`;
    return juice; //returning any value from the function
}


const appleJuice = fruitProcessor(4, 5); // to get juice to run, you have to store the parameters in a variable.
console.log(appleJuice); //= 
console.log(fruitProcessor(4,5));

const appleOrangeJuice = fruitProcessor(2,4);
console.log(appleOrangeJuice);

console.log(Number('23432'));
