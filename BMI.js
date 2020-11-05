const markFirstHeight = 1.69; 
const markFirstWeight = 78; 
const johnFirstHeight = 1.95; 
const johnFirstWeight = 92;

const markFirstBMI = (markFirstWeight/(markFirstHeight ** 2));
const johnFirstBMI = (johnFirstWeight/(johnFirstHeight ** 2));

if(markFirstBMI > johnFirstBMI) {
    console.log(`Mark's BMI (${markFirstBMI.toFixed(2)}) is higher than John's BMI (${johnFirstBMI.toFixed(2)}).`);
} else {
    console.log(`John's BMI (${johnFirstBMI.toFixed(2)}) is higher than Mark's BMI (${markFirstBMI.toFixed(2)}).`);
}


const markSecondHeight = 1.88; 
const markSecondWeight = 95; 
const jonSecondHeight = 1.76;
const jonSecondWeight = 85;

const markSecondBMI = (markSecondWeight/(markSecondHeight * markSecondHeight));
const johnSecondBMI = (jonSecondWeight/(jonSecondHeight * jonSecondHeight));

if(markSecondBMI > johnSecondBMI) {
    console.log(`Mark's BMI (${markSecondBMI.toFixed(2)}) is higher than John's BMI (${johnSecondBMI.toFixed(2)}).`);
} else {
    console.log(`John's BMI (${johnSecondBMI.toFixed(2)}) is higher than Mark's BMI (${markSecondBMI.toFixed(2)}).`);
}





