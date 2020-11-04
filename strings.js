const firstName = 'Monikka';
const job = 'Programmer';
const birthYear = 1993;
const year = 2037;


const monikka = "I'm " + firstName + ", a " + (year - birthYear) + " year old " + job + ".";
console.log(monikka);// String concatenation

const monikkaNew = `I'm ${firstName}, I am a ${(year - birthYear)} year old ${job}.`;
console.log(monikkaNew);
//Template Literals