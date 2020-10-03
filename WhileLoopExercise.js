console.log("Print all numbers from -10 to 19");
var num = -10
while (num <= 19) {
    console.log(num);
    num++;
}
console.log("Print all even numbers between 10 and 40");
var even = 10;
while (even <= 40) {
    console.log(even);
    even += 2;
}
console.log("Print all odd numbers between 300 and 333");
var odd = 300;
while (odd <= 333) {
    if (odd % 2 !== 0) {
        console.log(odd);
    }
    odd = +1;
}
console.log("Print all numbers that are divisible by 5 and 3 between 5 and 50");
var bob = 15;
while (bob < 50 && bob % 15 === 0) {
    console.log(bob);
    bob = +15;
}