console.log("-10 -> 19");
var number = -10;
while (number <= 19) {
  console.log(number);
  number++;
}
console.log("even between 10 -> 40");
var even = 10;
while (even <= 40) {
  if (even % 2 === 0) {
    console.log(even);
  }
  even++;
}
console.log("Odd between 300 ->333");
var odd = 300;
while (odd <= 333) {
  if (odd % 2 !== 0) {
    console.log(odd);
  }
  odd++;
}
console.log("divisible");
var divisible = 5;
while (divisible <= 50) {
  if (divisible % 5 === 0 && divisible % 3 === 0) {
    console.log(divisible);
  }
  divisible++;
}
