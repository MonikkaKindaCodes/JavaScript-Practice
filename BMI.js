const markFirstHeight = 1.69; 
const markFirstWeight = 78; 
const johnFirstHeight = 1.95; 
const johnFirstWeight = 92;

const markFirstBMI = (markFirstWeight/(markFirstHeight ** 2));
const johnFirstBMI = (johnFirstWeight/(johnFirstHeight ** 2));
console.log(markFirstBMI);
console.log(johnFirstBMI);

let markHigherBMI = true; 

if (markFirstBMI > johnFirstBMI) {
    console.log(markHigherBMI);
}

const markSecondHeight = 1.85; 
const markSecondWeight = 95; 
const jonSecondHeight = 1.76;
const jonSecondWeight = 85;

const markSecondBMI = (markSecondWeight/(markSecondHeight * markSecondHeight));
const johnSecondBMI = (jonSecondWeight/(jonSecondHeight * jonSecondHeight));

console.log(markSecondBMI);
console.log(johnSecondBMI);

markHigherBMI = true;

if (markSecondBMI > johnSecondBMI) {
    console.log(markHigherBMI);
}

