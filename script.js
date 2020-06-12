console.log("-10 -> 19");
for (var i = -10; i <= 19; i++) {
  console.log(i);
}
console.log("even");
for (var i = 10; i <= 40; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}
console.log("odd");
for (var i = 300; i <= 333; i++) {
  if (i % 2 !== 0) {
    console.log(i);
  }
}
console.log("divisible");
for (var d = 5; d <= 50; d++) {
  if (d % 5 === 0 && d % 3 === 0) {
    console.log(d);
  }
}
// console.log("Odd between 300 ->333");
// var odd = 300;
// while (odd <= 333) {
//   if (odd % 2 !== 0) {
//     console.log(odd);
//   }
//   odd++;
// }
// console.log("divisible");
// var divisible = 5;
// while(divisible<=50){
//     if(divisible % 5 === 0 && divisible%3===0){
//         console.log(divisible);
//     }
//     divisible++
// }
