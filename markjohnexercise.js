const markFirstHeight = 1.69; 
const markFirstWeight = 78; 
const johnFirstHeight = 1.95; 
const johnFirstWeight = 85;

const markFirstBMI = (78/(1.69 ** 2));
const johnFirstBMI = (85/(1.95 ** 2));
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

const markSecondBMI = (95/(1.85 * 1.85));
const johnSecondBMI = (85/(1.76 * 1.76));

console.log(markSecondBMI);
console.log(johnSecondBMI);

markHigherBMI = true;

if (markSecondBMI > johnSecondBMI) {
    console.log(markHigherBMI);
}

