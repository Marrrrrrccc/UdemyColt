function isEven(x) {
  if (x % 2 === 0) {
    return true;
  } else {
    return false;
  }
}
// isEven(4);
function factorial(num) {
  var result = 1;
  for (var i = 2; i <= num; i++) {
    result *= i;
  }
  return result;
}
function kebabToSnake(str) {
  var newStr = str.replace(/-/g, "_");
  return newStr;
}
