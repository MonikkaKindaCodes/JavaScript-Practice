
//Function Expressions can be declared before they are defined
function calcAge1(birthYear) { //Function Expressions have a name
    return 2020 - birthYear; //You can call the function using the function name
}

const age1 = calcAge1(1993);
console.log(`I am ${age1}`); // Function Declaration

//Function Expression - cannot be declared before they are defined
//varialble will be the function
 const calcAge2 = function (birthYear) { //Function doesn't have a name/ Anonymous function
    return 2020 - birthYear;            //This is an expression => Expressions have value
}

const age2 = calcAge2(1993);
console.log(age2, age1);

