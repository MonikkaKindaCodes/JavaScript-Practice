
function cutFruitPieces(fruit) { //cuts fruit in pieces
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);
    console.log(apples, oranges);
    const juice = `juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange`;
    return juice; //will run the juice string above when the function is invoked
}

console.log(fruitProcessor(2,3));