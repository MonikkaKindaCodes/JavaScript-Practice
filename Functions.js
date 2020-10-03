function isEven(x) {
  if (x % 2 === 0) {
    return true;
  } else {
    return false;
  }
}
function factorial(num) {
  var result = num;
  if (num === 0 || num === 1) {
    return 1;
  }
  while (num > 1) {
    num--;
    result *= num;
  }
  return result;
}
function kebabToSnake(str) {
  var newStr = str.replace(/-/g, "_");
  return newStr;
}
